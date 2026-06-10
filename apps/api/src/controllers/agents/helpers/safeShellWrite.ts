import { executeSSH } from '@/services'

const safeShellWrite = async (
    ip: string,
    password: string,
    filePath: string,
    content: string,
    timeout = 10000
): Promise<void> => {
    const encoded = Buffer.from(content).toString('base64')
    await executeSSH(
        ip,
        password,
        `echo '${encoded}' | base64 -d > '${filePath.replace(/'/g, "'\\''")}'`,
        timeout
    )
}

export default safeShellWrite