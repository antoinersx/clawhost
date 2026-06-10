import path from 'path'
import fs from 'fs'
import os from 'os'
import https from 'https'
import { execSync } from 'child_process'
import { app } from 'electron'
import * as tar from 'tar'

const NODE_VERSION = '22.16.0'
const MIN_NODE_MAJOR = 22
const DOWNLOAD_TIMEOUT_MS = 120000
const HTTP_OK = 200
const HTTP_REDIRECT_MIN = 300
const HTTP_REDIRECT_MAX = 399

const PLATFORM_MAP: Record<string, string> = {
    darwin: 'darwin',
    linux: 'linux',
    win32: 'win'
}

const ARCH_MAP: Record<string, string> = {
    x64: 'x64',
    arm64: 'arm64'
}

const getBundledNodeDir = (): string => {
    if (app.isPackaged) {
        return path.join(process.resourcesPath, 'node')
    }
    return path.join(app.getAppPath(), '..', '..', 'resources', 'node')
}

const getBundledNodePath = (): string => {
    const binary = process.platform === 'win32' ? 'node.exe' : 'node'
    return path.join(getBundledNodeDir(), 'bin', binary)
}

const getBundledNpmPath = (): string => {
    const npmBin = process.platform === 'win32' ? 'npm.cmd' : 'npm'
    return path.join(getBundledNodeDir(), 'bin', npmBin)
}

const downloadToFile = (url: string, dest: string): Promise<void> =>
    new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest)
        const request = https.get(url, (response) => {
            const status = response.statusCode ?? 0
            if (
                status >= HTTP_REDIRECT_MIN &&
                status <= HTTP_REDIRECT_MAX &&
                response.headers.location
            ) {
                file.close()
                fs.unlinkSync(dest)
                downloadToFile(response.headers.location, dest).then(
                    resolve,
                    reject
                )
                return
            }
            if (status !== HTTP_OK) {
                file.close()
                fs.unlinkSync(dest)
                reject(new Error(`HTTP ${status}`))
                return
            }
            response.pipe(file)
            file.on('finish', () => file.close(() => resolve()))
        })
        request.on('error', (error) => {
            file.close()
            try {
                fs.unlinkSync(dest)
            } catch {}
            reject(error)
        })
        request.setTimeout(DOWNLOAD_TIMEOUT_MS, () => request.destroy())
    })

const extractZipOnWindows = (zipPath: string, destDir: string): void => {
    execSync(
        `powershell -NoProfile -ExecutionPolicy Bypass -Command "Expand-Archive -LiteralPath '${zipPath}' -DestinationPath '${destDir}' -Force"`,
        { timeout: 60000 }
    )
}

const installNodeUnix = (
    extractedDir: string,
    nodeDir: string
): void => {
    fs.mkdirSync(path.join(nodeDir, 'bin'), { recursive: true })
    fs.copyFileSync(
        path.join(extractedDir, 'bin', 'node'),
        path.join(nodeDir, 'bin', 'node')
    )
    fs.chmodSync(path.join(nodeDir, 'bin', 'node'), 0o755)

    const npmSrc = path.join(extractedDir, 'lib', 'node_modules', 'npm')
    const npmDst = path.join(nodeDir, 'bin', 'npm-pkg')
    fs.cpSync(npmSrc, npmDst, { recursive: true })

    const npmScript = `#!/bin/sh\nbasedir=$(dirname "$(readlink -f "$0" 2>/dev/null || echo "$0")")\nexec "$basedir/node" "$basedir/npm-pkg/bin/npm-cli.js" "$@"\n`
    fs.writeFileSync(path.join(nodeDir, 'bin', 'npm'), npmScript)
    fs.chmodSync(path.join(nodeDir, 'bin', 'npm'), 0o755)
}

const installNodeWindows = (
    extractedDir: string,
    nodeDir: string
): void => {
    fs.mkdirSync(path.join(nodeDir, 'bin'), { recursive: true })
    fs.copyFileSync(
        path.join(extractedDir, 'node.exe'),
        path.join(nodeDir, 'bin', 'node.exe')
    )
    fs.copyFileSync(
        path.join(extractedDir, 'npm.cmd'),
        path.join(nodeDir, 'bin', 'npm.cmd')
    )
    const npmSrc = path.join(extractedDir, 'node_modules', 'npm')
    const npmDst = path.join(nodeDir, 'bin', 'npm-pkg')
    fs.cpSync(npmSrc, npmDst, { recursive: true })
}

const downloadNode = async (): Promise<boolean> => {
    const nodeDir = getBundledNodeDir()
    const nodePath = getBundledNodePath()

    if (fs.existsSync(nodePath)) return true

    const osName = PLATFORM_MAP[process.platform]
    const arch = ARCH_MAP[process.arch]
    if (!osName || !arch) return false

    const isWindows = process.platform === 'win32'
    const ext = isWindows ? 'zip' : 'tar.gz'
    const archiveName = `node-v${NODE_VERSION}-${osName}-${arch}.${ext}`
    const url = `https://nodejs.org/dist/v${NODE_VERSION}/${archiveName}`

    let tmpDir: string | null = null
    try {
        tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'node-dl-'))
        const archivePath = path.join(tmpDir, archiveName)

        await downloadToFile(url, archivePath)

        if (isWindows) {
            extractZipOnWindows(archivePath, tmpDir)
        } else {
            await tar.x({ file: archivePath, cwd: tmpDir })
        }

        const extractedDir = path.join(
            tmpDir,
            `node-v${NODE_VERSION}-${osName}-${arch}`
        )

        if (isWindows) {
            installNodeWindows(extractedDir, nodeDir)
        } else {
            installNodeUnix(extractedDir, nodeDir)
        }
        return true
    } catch (error) {
        console.error('downloadNode', error)
        return false
    } finally {
        if (tmpDir) {
            try {
                fs.rmSync(tmpDir, { recursive: true, force: true })
            } catch {}
        }
    }
}

const getNodeBinaryPath = (): string => {
    const bundled = getBundledNodePath()
    if (fs.existsSync(bundled)) return bundled

    if (!app.isPackaged) {
        try {
            const cmd = process.platform === 'win32' ? 'where node' : 'which node'
            return execSync(cmd, { encoding: 'utf-8' }).trim().split('\n')[0]
        } catch {
            return process.execPath
        }
    }

    return bundled
}

const getNpmPath = (): string => {
    const bundled = getBundledNpmPath()
    if (fs.existsSync(bundled)) return bundled

    const nodePath = getNodeBinaryPath()
    const nodeDir = path.dirname(nodePath)
    const npmCandidate = path.join(
        nodeDir,
        process.platform === 'win32' ? 'npm.cmd' : 'npm'
    )
    if (fs.existsSync(npmCandidate)) return npmCandidate

    try {
        const cmd = process.platform === 'win32' ? 'where npm' : 'which npm'
        return execSync(cmd, { encoding: 'utf-8' }).trim().split('\n')[0]
    } catch {
        return process.platform === 'win32' ? 'npm.cmd' : 'npm'
    }
}

const ensureNode = async (): Promise<boolean> => {
    if (fs.existsSync(getBundledNodePath())) return true
    return downloadNode()
}

const nodeBinary = { getNodeBinaryPath, getNpmPath, ensureNode, MIN_NODE_MAJOR }

export default nodeBinary