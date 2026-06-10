import { readFileSync } from 'fs'
import { resolve } from 'path'

import app from '@/app'
import { terminalSocket } from '@/services'

const port = Number(process.env.PORT)
const pkg = JSON.parse(
    readFileSync(resolve(import.meta.dirname, '../package.json'), 'utf-8')
)

const cyan = (s: string) => `\x1b[36m${s}\x1b[0m`
const bold = (s: string) => `\x1b[1m${s}\x1b[0m`
const dim = (s: string) => `\x1b[2m${s}\x1b[0m`
const green = (s: string) => `\x1b[32m${s}\x1b[0m`

Bun.serve({
    port,
    hostname: '0.0.0.0',
    idleTimeout: 255,
    async fetch(req, server) {
        const upgraded = await terminalSocket.handleUpgrade(req, server)
        if (upgraded) return undefined as unknown as Response

        return app.fetch(req)
    },
    websocket: terminalSocket.handlers
})

process.stdout.write('\n')
process.stdout.write(
    `  ${cyan(bold('OPENCLAW API'))}  ${green(`v${pkg.version}`)}\n`
)
process.stdout.write('\n')
process.stdout.write(
    `  ${dim('➜')}  ${bold('Local:')}   ${cyan(`http://localhost:${port}/`)}\n`
)
process.stdout.write(
    `  ${dim('➜')}  ${bold('Network:')} ${cyan(`http://0.0.0.0:${port}/`)}\n`
)
process.stdout.write('\n')