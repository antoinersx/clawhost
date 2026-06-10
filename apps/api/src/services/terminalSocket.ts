import type { Server, ServerWebSocket } from 'bun'
import type { TerminalSocketData } from '@/ts/Interfaces'

import { Client } from 'ssh2'
import { verifyToken } from '@/services/firebase'
import { hostKeyStore } from '@/services'
import {
    findUserAgent,
    getAgentConfig,
    isAdmin
} from '@/controllers/agents/helpers'
import { apiPaths } from '@openclaw/shared'
import { sshDefaults } from '@/lib/constants'

const TERMINAL_PATTERN = new RegExp(
    `^(?:/ws)?${apiPaths.CLAWS.BASE}/([^/]+)/terminal$`
)

const PING_INTERVAL = 5000

const RESIZE_MESSAGE_TYPE = 'resize'

const terminalSocket = {
    async handleUpgrade(
        req: Request,
        server: Server<TerminalSocketData>
    ): Promise<boolean> {
        const url = new URL(req.url)
        const match = url.pathname.match(TERMINAL_PATTERN)

        if (!match || req.headers.get('upgrade') !== 'websocket') return false

        const agentId = match[1]
        const token = url.searchParams.get('token')

        if (!token) return false

        try {
            const decoded = await verifyToken(token)
            if (!decoded) return false

            const admin = await isAdmin(decoded.uid)
            const agent = await findUserAgent(decoded.uid, agentId, admin)

            if (!agent || !agent.ip || !agent.rootPassword) return false

            const agentConfig = getAgentConfig(agent.agentType)
            const autoSuUser = agentConfig.configFile ? null : agentConfig.user

            server.upgrade(req, {
                data: {
                    ip: agent.ip,
                    password: agent.rootPassword,
                    autoSuUser
                }
            })

            return true
        } catch {
            return false
        }
    },

    handlers: {
        open(ws: ServerWebSocket<TerminalSocketData>) {
            const { ip, password } = ws.data
            const conn = new Client()

            ws.data.sshConn = conn

            ws.data.pingTimer = setInterval(() => {
                ws.ping()
            }, PING_INTERVAL)

            conn.on('ready', () => {
                ws.data.sshReady = true
                conn.shell(
                    { term: 'xterm-256color', cols: 80, rows: 24 },
                    (err, stream) => {
                        if (err) {
                            ws.close()
                            conn.end()
                            return
                        }

                        ws.data.stream = stream

                        if (ws.data.autoSuUser) {
                            stream.write(`exec su - ${ws.data.autoSuUser}\n`)
                        }

                        stream.on('data', (data: Buffer) => {
                            ws.send(data.toString('utf-8'))
                        })

                        stream.on('close', () => {
                            ws.close()
                            conn.end()
                        })
                    }
                )
            })

            conn.on('error', () => {
                ws.close()
            })

            conn.connect({
                host: ip,
                port: sshDefaults.PORT,
                username: 'root',
                password,
                readyTimeout: sshDefaults.READY_TIMEOUT_MS,
                keepaliveInterval: 15000,
                keepaliveCountMax: 3,
                algorithms: {
                    serverHostKey: [
                        'ssh-ed25519',
                        'ssh-rsa',
                        'ecdsa-sha2-nistp256'
                    ]
                },
                hostVerifier: (
                    key: Buffer,
                    verify: (valid: boolean) => void
                ) => {
                    hostKeyStore
                        .verify(ip, key)
                        .then((valid) => verify(valid))
                        .catch(() => verify(true))
                }
            })
        },

        message(
            ws: ServerWebSocket<TerminalSocketData>,
            message: string | Buffer
        ) {
            const str =
                typeof message === 'string'
                    ? message
                    : message.toString('utf-8')

            if (str[0] === '{') {
                try {
                    const parsed = JSON.parse(str)
                    if (
                        parsed.type === RESIZE_MESSAGE_TYPE &&
                        parsed.cols &&
                        parsed.rows
                    ) {
                        ws.data.stream?.setWindow(
                            parsed.rows,
                            parsed.cols,
                            0,
                            0
                        )
                        return
                    }
                } catch {}
            }

            ws.data.stream?.write(str)
        },

        close(ws: ServerWebSocket<TerminalSocketData>) {
            if (ws.data.pingTimer) clearInterval(ws.data.pingTimer)
            ws.data.stream?.close()
            if (ws.data.sshReady) ws.data.sshConn?.end()
        }
    }
}

export default terminalSocket