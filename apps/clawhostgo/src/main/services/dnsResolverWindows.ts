import fs from 'fs'
import path from 'path'
import os from 'os'
import { exec, execSync } from 'child_process'
import certManager from '@/main/services/certManager'
import configStore from '@/main/services/configStore'

const PROXY_PORT = 18700
const HTTPS_PROXY_PORT = 18701
const CERT_STORE_LABEL = 'ClawHost Local CA'
const HOSTS_PATH = 'C:\\Windows\\System32\\drivers\\etc\\hosts'
const HOSTS_MARK_BEGIN = '# >>> clawhost begin >>>'
const HOSTS_MARK_END = '# <<< clawhost end <<<'

const runElevated = (psCommand: string): Promise<boolean> =>
    new Promise((resolve) => {
        const wrapped = psCommand.replace(/"/g, '`"')
        const cmd = `powershell -NoProfile -ExecutionPolicy Bypass -Command "Start-Process powershell -Verb runAs -Wait -WindowStyle Hidden -ArgumentList '-NoProfile','-ExecutionPolicy','Bypass','-Command','${wrapped}'"`
        exec(cmd, (error) => {
            if (error) console.error('runElevated', error)
            resolve(!error)
        })
    })

const isCaTrusted = (): boolean => {
    try {
        execSync(`certutil -store Root "${CERT_STORE_LABEL}"`, {
            stdio: ['ignore', 'pipe', 'ignore']
        })
        return true
    } catch {
        return false
    }
}

const portProxyExists = (): boolean => {
    try {
        const out = execSync('netsh interface portproxy show v4tov4', {
            encoding: 'utf-8'
        })
        return (
            out.includes(String(HTTPS_PROXY_PORT)) &&
            out.includes(String(PROXY_PORT))
        )
    } catch {
        return false
    }
}

const buildHostsBlock = (subdomains: string[]): string => {
    const lines = [HOSTS_MARK_BEGIN]
    for (const sub of subdomains) {
        if (!sub) continue
        lines.push(`127.0.0.1 ${sub}.clawhost`)
    }
    lines.push(HOSTS_MARK_END)
    return lines.join(os.EOL)
}

const buildHostsFile = (subdomains: string[]): string => {
    const existing = fs.existsSync(HOSTS_PATH)
        ? fs.readFileSync(HOSTS_PATH, 'utf-8')
        : ''
    const beginIdx = existing.indexOf(HOSTS_MARK_BEGIN)
    const endIdx = existing.indexOf(HOSTS_MARK_END)
    const block = buildHostsBlock(subdomains)
    if (beginIdx === -1 || endIdx === -1) {
        const sep = existing.endsWith(os.EOL) || existing.length === 0 ? '' : os.EOL
        return `${existing}${sep}${block}${os.EOL}`
    }
    const before = existing.slice(0, beginIdx)
    const after = existing.slice(endIdx + HOSTS_MARK_END.length)
    return `${before}${block}${after}`
}

const getCurrentSubdomains = (): string[] => {
    const config = configStore.readConfig()
    return config.agents.map((a) => a.subdomain).filter(Boolean)
}

const isResolverInstalled = (): boolean =>
    portProxyExists() &&
    fs.existsSync(HOSTS_PATH) &&
    fs.readFileSync(HOSTS_PATH, 'utf-8').includes(HOSTS_MARK_BEGIN)

const isDnsSetup = (): boolean => isCaTrusted() && isResolverInstalled()

const startDns = (): void => {}
const stopDns = (): void => {}
const ensurePortRedirect = (): void => {}

const writeHostsFileTemp = (subdomains: string[]): string => {
    const content = buildHostsFile(subdomains)
    const tmpPath = path.join(os.tmpdir(), `clawhost-hosts-${Date.now()}.txt`)
    fs.writeFileSync(tmpPath, content, 'utf-8')
    return tmpPath
}

const setupResolver = async (): Promise<boolean> => {
    const caPath = certManager.getCaCertPath()
    if (!fs.existsSync(caPath)) return false
    const subdomains = getCurrentSubdomains()
    const hostsTmp = writeHostsFileTemp(subdomains)

    const script = [
        `certutil -addstore -f Root '${caPath}'`,
        `netsh interface portproxy delete v4tov4 listenport=80 listenaddress=127.0.0.1 2>$null`,
        `netsh interface portproxy delete v4tov4 listenport=443 listenaddress=127.0.0.1 2>$null`,
        `netsh interface portproxy add v4tov4 listenport=80 listenaddress=127.0.0.1 connectport=${PROXY_PORT} connectaddress=127.0.0.1`,
        `netsh interface portproxy add v4tov4 listenport=443 listenaddress=127.0.0.1 connectport=${HTTPS_PROXY_PORT} connectaddress=127.0.0.1`,
        `Copy-Item -Force -Path '${hostsTmp}' -Destination '${HOSTS_PATH}'`
    ].join('; ')

    const ok = await runElevated(script)
    try {
        fs.unlinkSync(hostsTmp)
    } catch {}
    return ok
}

const syncHosts = async (): Promise<boolean> => {
    const subdomains = getCurrentSubdomains()
    const hostsTmp = writeHostsFileTemp(subdomains)
    const script = `Copy-Item -Force -Path '${hostsTmp}' -Destination '${HOSTS_PATH}'`
    const ok = await runElevated(script)
    try {
        fs.unlinkSync(hostsTmp)
    } catch {}
    return ok
}

const addHostEntry = async (_subdomain: string): Promise<boolean> => syncHosts()
const removeHostEntry = async (_subdomain: string): Promise<boolean> =>
    syncHosts()

const dnsResolverWindows = {
    startDns,
    stopDns,
    isDnsSetup,
    setupResolver,
    ensurePortRedirect,
    addHostEntry,
    removeHostEntry
}

export default dnsResolverWindows