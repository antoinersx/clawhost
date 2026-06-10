import { Client } from 'ssh2'
import { inputValidation } from '@openclaw/shared'
import { hostKeyStore } from '@/services'
import { sshDefaults } from '@/lib/constants'

const executeSSH = (
    ip: string,
    password: string,
    command: string,
    commandTimeout = 15000
): Promise<string> => {
    return new Promise((resolve, reject) => {
        const conn = new Client()
        let output = ''
        let truncated = false

        const timeout = setTimeout(() => {
            clearTimeout(timeout)
            conn.end()
            reject(new Error('SSH command timed out'))
        }, commandTimeout)

        const cleanup = () => {
            clearTimeout(timeout)
            conn.end()
        }

        conn.on('ready', () => {
            conn.exec(command, (err, stream) => {
                if (err) {
                    cleanup()
                    return reject(err)
                }

                stream.on('data', (data: Buffer) => {
                    if (truncated) return
                    output += data.toString()
                    if (output.length > inputValidation.SSH_OUTPUT.MAX) {
                        output = output.slice(0, inputValidation.SSH_OUTPUT.MAX)
                        truncated = true
                    }
                })

                stream.stderr.on('data', (data: Buffer) => {
                    if (truncated) return
                    output += data.toString()
                    if (output.length > inputValidation.SSH_OUTPUT.MAX) {
                        output = output.slice(0, inputValidation.SSH_OUTPUT.MAX)
                        truncated = true
                    }
                })

                stream.on('close', () => {
                    cleanup()
                    const ansiPattern = new RegExp(
                        String.fromCharCode(27) + '\\[[0-9;]*m',
                        'g'
                    )
                    const cleaned = output
                        .trim()
                        .replace(ansiPattern, '')
                        .replace(/\n{3,}/g, '\n\n')
                    resolve(cleaned)
                })
            })
        })

        conn.on('error', (err) => {
            cleanup()
            reject(err)
        })

        conn.connect({
            host: ip,
            port: sshDefaults.PORT,
            username: 'root',
            password,
            readyTimeout: sshDefaults.READY_TIMEOUT_MS,
            algorithms: {
                serverHostKey: ['ssh-ed25519', 'ssh-rsa', 'ecdsa-sha2-nistp256']
            },
            hostVerifier: (key: Buffer, verify: (valid: boolean) => void) => {
                hostKeyStore
                    .verify(ip, key)
                    .then((valid) => verify(valid))
                    .catch(() => verify(true))
            }
        })
    })
}

export default executeSSH