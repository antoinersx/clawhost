import { Client } from 'ssh2'
import { hostKeyStore } from '@/services'
import { sshDefaults } from '@/lib/constants'

const sshBuffer = (
    ip: string,
    password: string,
    command: string,
    commandTimeout = 120000
): Promise<Buffer> => {
    return new Promise((resolve, reject) => {
        const conn = new Client()
        const chunks: Buffer[] = []

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
                    chunks.push(data)
                })

                stream.stderr.on('data', () => {})

                stream.on('close', () => {
                    cleanup()
                    resolve(Buffer.concat(chunks))
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

export default sshBuffer