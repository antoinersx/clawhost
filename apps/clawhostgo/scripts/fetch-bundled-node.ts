import { existsSync, mkdirSync, createWriteStream, rmSync, copyFileSync, cpSync, chmodSync, writeFileSync } from 'fs'
import { join, resolve } from 'path'
import { tmpdir } from 'os'
import { execSync } from 'child_process'
import https from 'https'

const NODE_VERSION = '22.16.0'

const PLATFORM_NAME = {
    'darwin-arm64': 'darwin-arm64',
    'darwin-x64': 'darwin-x64',
    'win32-x64': 'win-x64'
} as const

const HTTP_OK = 200
const HTTP_REDIRECT_MIN = 300
const HTTP_REDIRECT_MAX = 399

type TargetKey = keyof typeof PLATFORM_NAME

const RESOURCES_DIR = resolve(__dirname, '../resources')
const TARGET_DIR = join(RESOURCES_DIR, 'node')

const download = (url: string, dest: string): Promise<void> =>
    new Promise((resolve, reject) => {
        const file = createWriteStream(dest)
        https.get(url, (response) => {
            const status = response.statusCode ?? 0
            if (status >= HTTP_REDIRECT_MIN && status <= HTTP_REDIRECT_MAX && response.headers.location) {
                file.close()
                rmSync(dest, { force: true })
                download(response.headers.location, dest).then(resolve, reject)
                return
            }
            if (status !== HTTP_OK) {
                file.close()
                rmSync(dest, { force: true })
                reject(new Error(`HTTP ${status} for ${url}`))
                return
            }
            response.pipe(file)
            file.on('finish', () => file.close(() => resolve()))
        }).on('error', (error) => {
            file.close()
            try { rmSync(dest, { force: true }) } catch {}
            reject(error)
        })
    })

const installNodeUnix = (extractedDir: string, nodeDir: string): void => {
    const binDir = join(nodeDir, 'bin')
    mkdirSync(binDir, { recursive: true })
    copyFileSync(join(extractedDir, 'bin', 'node'), join(binDir, 'node'))
    chmodSync(join(binDir, 'node'), 0o755)
    cpSync(join(extractedDir, 'lib', 'node_modules', 'npm'), join(binDir, 'npm-pkg'), { recursive: true })
    const npmScript = `#!/bin/sh\nbasedir=$(dirname "$(readlink -f "$0" 2>/dev/null || echo "$0")")\nexec "$basedir/node" "$basedir/npm-pkg/bin/npm-cli.js" "$@"\n`
    writeFileSync(join(binDir, 'npm'), npmScript)
    chmodSync(join(binDir, 'npm'), 0o755)
}

const installNodeWindows = (extractedDir: string, nodeDir: string): void => {
    const binDir = join(nodeDir, 'bin')
    mkdirSync(binDir, { recursive: true })
    copyFileSync(join(extractedDir, 'node.exe'), join(binDir, 'node.exe'))
    copyFileSync(join(extractedDir, 'npm.cmd'), join(binDir, 'npm.cmd'))
    cpSync(join(extractedDir, 'node_modules', 'npm'), join(binDir, 'npm-pkg'), { recursive: true })
}

const main = async (): Promise<void> => {
    const platform = process.argv[2]
    const arch = process.argv[3]
    const key = `${platform}-${arch}` as TargetKey
    const distName = PLATFORM_NAME[key]
    if (!distName) throw new Error(`unsupported target: ${key}`)

    const isWindows = platform === 'win32'
    const ext = isWindows ? 'zip' : 'tar.gz'
    const archiveName = `node-v${NODE_VERSION}-${distName}.${ext}`
    const url = `https://nodejs.org/dist/v${NODE_VERSION}/${archiveName}`

    const work = join(tmpdir(), `bundled-node-${Date.now()}`)
    mkdirSync(work, { recursive: true })
    const archivePath = join(work, archiveName)

    console.log(`fetching ${url}`)
    await download(url, archivePath)

    if (isWindows) {
        execSync(`powershell -NoProfile -Command "Expand-Archive -LiteralPath '${archivePath}' -DestinationPath '${work}' -Force"`, { stdio: 'inherit' })
    } else {
        execSync(`tar -xzf "${archivePath}" -C "${work}"`, { stdio: 'inherit' })
    }

    const extractedDir = join(work, `node-v${NODE_VERSION}-${distName}`)
    if (!existsSync(extractedDir)) throw new Error(`expected ${extractedDir}`)

    if (existsSync(TARGET_DIR)) rmSync(TARGET_DIR, { recursive: true, force: true })
    mkdirSync(RESOURCES_DIR, { recursive: true })
    mkdirSync(TARGET_DIR, { recursive: true })

    if (isWindows) {
        installNodeWindows(extractedDir, TARGET_DIR)
    } else {
        installNodeUnix(extractedDir, TARGET_DIR)
    }

    rmSync(work, { recursive: true, force: true })
    console.log(`bundled node ready at ${TARGET_DIR}`)
}

main().catch((error) => {
    console.error('fetch-bundled-node', error)
    process.exit(1)
})