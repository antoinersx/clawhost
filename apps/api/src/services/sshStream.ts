import { Client } from 'ssh2'
import { hostKeyStore } from '@/services'
import { sshDefaults } from '@/lib/constants'

const sshStream = (
    ip: string,
    password: string,
    command: string
): Promise<ReadableStream<Uint8Array>> => {
    return new Promise((resolve, reject) => {
        const conn = new Client()

        conn.on('ready', () => {
            conn.exec(command, (err, stream) => {
                if (err) {
                    conn.end()
                    return reject(err)
                }

                const body = new ReadableStream<Uint8Array>({
                    start(controller) {
                        stream.on('data', (data: Buffer) => {
                            controller.enqueue(new Uint8Array(data))
                        })
                        stream.stderr.on('data', () => {})
                        stream.on('close', () => {
                            try {
                                controller.close()
                            } catch (closeError) {
                                console.error('sshStream', closeError)
                            }
                            conn.end()
                        })
                        stream.on('error', (streamError: Error) => {
                            try {
                                controller.error(streamError)
                            } catch (controllerError) {
                                console.error('sshStream', controllerError)
                            }
                            conn.end()
                        })
                    },
                    cancel() {
                        conn.end()
                    }
                })

                resolve(body)
            })
        })

        conn.on('error', (error) => {
            conn.end()
            reject(error)
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

export default sshStream