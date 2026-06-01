import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { readFileSync, readdirSync, statSync, existsSync, unlinkSync } from 'fs'
import { join, basename } from 'path'
import { execSync } from 'child_process'

type MacArch = 'arm64' | 'x64'

interface SquirrelMacManifest {
    url: string
    name: string
    notes: string
    pub_date: string
}

const DEFAULT_PUBLIC_BASE_URL = 'https://cdn.clawhost.cloud/go'
const R2_REGION = 'auto'
const R2_ENDPOINT_HOST = 'r2.cloudflarestorage.com'

const CONTENT_TYPE = {
    JSON: 'application/json',
    ZIP: 'application/zip',
    OCTET_STREAM: 'application/octet-stream',
    PLAIN: 'text/plain',
    DMG: 'application/x-apple-diskimage'
} as const

const EXT = {
    DMG: '.dmg',
    ZIP: '.zip',
    NUPKG: '.nupkg',
    EXE: '.exe'
} as const

const APP_BUNDLE = 'ClawHostGo.app'
const APP_BUNDLE_NAME = 'ClawHostGo'

const KEY_PREFIX = {
    MAC: (arch: MacArch): string => `go/darwin/${arch}`,
    WINDOWS: 'go/win32/x64'
} as const

const STABLE_KEY = {
    MAC_ARM64: 'go/clawhost-mac-arm64.dmg',
    MAC_INTEL: 'go/clawhost-mac-intel.dmg',
    WINDOWS: 'go/clawhost-windows.exe',
    ICON: 'go/icon.ico'
} as const

const ICON_SOURCE_PATH = join(__dirname, '../resources/icon.ico')
const CONTENT_TYPE_ICON = 'image/vnd.microsoft.icon'

const STABLE_MAC_KEY: Record<MacArch, string> = {
    arm64: STABLE_KEY.MAC_ARM64,
    x64: STABLE_KEY.MAC_INTEL
}

const OUT_DIR = join(__dirname, '../out')
const MAKE_DIR = join(OUT_DIR, 'make')
const SQUIRREL_DIR = join(MAKE_DIR, 'squirrel.windows/x64')
const RELEASES_MANIFEST = 'RELEASES.json'
const SETUP_EXE_PATTERN = /Setup\.exe$/i
const APP_OUTPUT_DIR = (arch: MacArch): string =>
    join(OUT_DIR, `${APP_BUNDLE_NAME}-darwin-${arch}`)

const {
    R2_ACCOUNT_ID,
    R2_ACCESS_KEY_ID,
    R2_SECRET_ACCESS_KEY,
    R2_BUCKET,
    PUBLIC_BASE_URL = DEFAULT_PUBLIC_BASE_URL
} = process.env

if (
    !R2_ACCOUNT_ID ||
    !R2_ACCESS_KEY_ID ||
    !R2_SECRET_ACCESS_KEY ||
    !R2_BUCKET
) {
    console.error(
        'publish-r2',
        new Error(
            'Missing required env vars: R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET'
        )
    )
    process.exit(1)
}

const s3 = new S3Client({
    region: R2_REGION,
    endpoint: `https://${R2_ACCOUNT_ID}.${R2_ENDPOINT_HOST}`,
    credentials: {
        accessKeyId: R2_ACCESS_KEY_ID,
        secretAccessKey: R2_SECRET_ACCESS_KEY
    }
})

const pkg = JSON.parse(
    readFileSync(join(__dirname, '../package.json'), 'utf8')
) as { version: string }
const version = pkg.version

const upload = async (
    key: string,
    body: Buffer | string,
    contentType: string
): Promise<void> => {
    await s3.send(
        new PutObjectCommand({
            Bucket: R2_BUCKET,
            Key: key,
            Body: body,
            ContentType: contentType
        })
    )
    console.log(`uploaded ${key}`)
}

const findFiles = (dir: string, ext: string): string[] => {
    if (!existsSync(dir)) return []
    const out: string[] = []
    for (const entry of readdirSync(dir)) {
        const full = join(dir, entry)
        if (statSync(full).isDirectory()) {
            out.push(...findFiles(full, ext))
        } else if (entry.endsWith(ext)) {
            out.push(full)
        }
    }
    return out
}

const buildSquirrelMacManifest = (url: string): SquirrelMacManifest => ({
    url,
    name: version,
    notes: '',
    pub_date: new Date().toISOString()
})

const zipApp = (arch: MacArch): string | null => {
    const appPath = join(APP_OUTPUT_DIR(arch), APP_BUNDLE)
    if (!existsSync(appPath)) return null
    const zipPath = join(
        MAKE_DIR,
        `${APP_BUNDLE_NAME}-${version}-${arch}${EXT.ZIP}`
    )
    if (existsSync(zipPath)) unlinkSync(zipPath)
    execSync(
        `ditto -c -k --sequesterRsrc --keepParent "${appPath}" "${zipPath}"`
    )
    return zipPath
}

const windowsContentType = (entry: string): string => {
    if (entry.endsWith(EXT.NUPKG)) return CONTENT_TYPE.ZIP
    if (entry.endsWith(EXT.EXE)) return CONTENT_TYPE.OCTET_STREAM
    return CONTENT_TYPE.PLAIN
}

const publishMac = async (arch: MacArch): Promise<void> => {
    const archDmgs = findFiles(MAKE_DIR, EXT.DMG).filter((p) =>
        basename(p).endsWith(`-${arch}${EXT.DMG}`)
    )
    if (archDmgs.length === 0) {
        console.log(`skip darwin/${arch} — no dmg found`)
        return
    }
    const dmgPath = archDmgs[0]
    const dmgName = basename(dmgPath)
    const prefix = KEY_PREFIX.MAC(arch)
    const dmgBuffer = readFileSync(dmgPath)

    await upload(`${prefix}/${dmgName}`, dmgBuffer, CONTENT_TYPE.DMG)
    await upload(STABLE_MAC_KEY[arch], dmgBuffer, CONTENT_TYPE.DMG)

    const zipPath = zipApp(arch)
    if (!zipPath) {
        console.log(`skip darwin/${arch} auto-update — no .app found`)
        return
    }
    const zipName = basename(zipPath)
    const zipUrl = `${PUBLIC_BASE_URL}/darwin/${arch}/${zipName}`
    const zipBuffer = readFileSync(zipPath)
    await upload(`${prefix}/${zipName}`, zipBuffer, CONTENT_TYPE.ZIP)

    await upload(
        `${prefix}/${RELEASES_MANIFEST}`,
        JSON.stringify(buildSquirrelMacManifest(zipUrl), null, 2),
        CONTENT_TYPE.JSON
    )
}

const publishWindows = async (): Promise<void> => {
    if (!existsSync(SQUIRREL_DIR)) {
        console.log('skip win32/x64 — no squirrel output found')
        return
    }
    for (const entry of readdirSync(SQUIRREL_DIR)) {
        const full = join(SQUIRREL_DIR, entry)
        if (!statSync(full).isFile()) continue
        const buffer = readFileSync(full)
        await upload(
            `${KEY_PREFIX.WINDOWS}/${entry}`,
            buffer,
            windowsContentType(entry)
        )
        if (SETUP_EXE_PATTERN.test(entry)) {
            await upload(STABLE_KEY.WINDOWS, buffer, CONTENT_TYPE.OCTET_STREAM)
        }
    }
}

const publishIcon = async (): Promise<void> => {
    if (!existsSync(ICON_SOURCE_PATH)) {
        console.log('skip icon — no icon.ico found')
        return
    }
    const buffer = readFileSync(ICON_SOURCE_PATH)
    await upload(STABLE_KEY.ICON, buffer, CONTENT_TYPE_ICON)
}

const main = async (): Promise<void> => {
    console.log(`publishing version ${version} to R2`)
    await publishMac('x64')
    await publishMac('arm64')
    await publishWindows()
    await publishIcon()
    console.log('done')
}

main().catch((error) => {
    console.error('publish-r2', error)
    process.exit(1)
})