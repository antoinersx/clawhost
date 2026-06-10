import dgram from 'dgram'
import fs from 'fs'
import path from 'path'
import os from 'os'
import { exec, execSync } from 'child_process'
import certManager from '@/main/services/certManager'

const DNS_PORT = 15353
const PROXY_PORT = 18700
const HTTPS_PROXY_PORT = 18701
const RESOLVER_DIR = '/etc/resolver'
const RESOLVER_PATH = path.join(RESOLVER_DIR, 'clawhost')
const PF_ANCHOR = 'com.clawhost'
const PF_ANCHOR_FILE = '/etc/pf.anchors/com.clawhost'
const PF_CONF = '/etc/pf.conf'
const PF_RULE_HTTP = `rdr pass on lo0 inet proto tcp from any to 127.0.0.1 port 80 -> 127.0.0.1 port ${PROXY_PORT}`
const PF_RULE_HTTPS = `rdr pass on lo0 inet proto tcp from any to 127.0.0.1 port 443 -> 127.0.0.1 port ${HTTPS_PROXY_PORT}`
const MAX_RETRIES = 3
const RETRY_DELAY = 2000
const KEYCHAIN_NAME = 'ClawHost Local CA'
const KEYCHAIN_PATH = path.join(
    os.homedir(),
    'Library/Keychains/login.keychain-db'
)

let server: dgram.Socket | null = null
let retryCount = 0

const buildResponse = (query: Buffer): Buffer => {
    const response = Buffer.alloc(512)
    let offset = 0

    query.copy(response, 0, 0, 2)
    offset = 2

    response.writeUInt16BE(0x8180, offset)
    offset += 2

    const qdCount = query.readUInt16BE(4)
    response.writeUInt16BE(qdCount, offset)
    offset += 2

    response.writeUInt16BE(qdCount, offset)
    offset += 2

    response.writeUInt16BE(0, offset)
    offset += 2
    response.writeUInt16BE(0, offset)
    offset += 2

    let qOffset = 12
    for (let q = 0; q < qdCount; q++) {
        while (query[qOffset] !== 0) {
            const len = query[qOffset]
            query.copy(response, offset, qOffset, qOffset + len + 1)
            offset += len + 1
            qOffset += len + 1
        }
        response[offset] = 0
        offset += 1
        qOffset += 1

        query.copy(response, offset, qOffset, qOffset + 4)
        offset += 4
        qOffset += 4
    }

    for (let q = 0; q < qdCount; q++) {
        response.writeUInt16BE(0xc00c, offset)
        offset += 2

        response.writeUInt16BE(1, offset)
        offset += 2

        response.writeUInt16BE(1, offset)
        offset += 2

        response.writeUInt32BE(60, offset)
        offset += 4

        response.writeUInt16BE(4, offset)
        offset += 2

        response[offset++] = 127
        response[offset++] = 0
        response[offset++] = 0
        response[offset++] = 1
    }

    return response.subarray(0, offset)
}

const isDomainClawhost = (query: Buffer): boolean => {
    let offset = 12
    const labels: string[] = []
    while (offset < query.length && query[offset] !== 0) {
        const len = query[offset]
        offset += 1
        labels.push(query.subarray(offset, offset + len).toString())
        offset += len
    }
    const domain = labels.join('.')
    return domain.endsWith('.clawhost') || domain === 'clawhost'
}

const startDns = (): void => {
    if (server) return

    server = dgram.createSocket('udp4')

    server.on('message', (msg, rinfo) => {
        if (msg.length < 12) return
        if (!isDomainClawhost(msg)) return

        const response = buildResponse(msg)
        server?.send(response, rinfo.port, rinfo.address)
    })

    server.on('error', (error) => {
        console.error('startDns', error)
        server?.close()
        server = null
        if (retryCount < MAX_RETRIES) {
            retryCount++
            setTimeout(startDns, RETRY_DELAY)
        }
    })

    server.on('listening', () => {
        retryCount = 0
    })

    server.bind(DNS_PORT, '127.0.0.1')
}

const stopDns = (): void => {
    if (!server) return
    server.close()
    server = null
}

const isResolverInstalled = (): boolean => {
    try {
        if (!fs.existsSync(RESOLVER_PATH)) return false
        const content = fs.readFileSync(RESOLVER_PATH, 'utf-8')
        return (
            content.includes('port 15353') &&
            content.includes('nameserver 127.0.0.1')
        )
    } catch {
        return false
    }
}

const isCaTrusted = (): boolean => {
    try {
        const caPath = certManager.getCaCertPath()
        if (!fs.existsSync(caPath)) return false
        const diskFingerprint = execSync(
            `openssl x509 -in "${caPath}" -noout -fingerprint -sha256`,
            { encoding: 'utf-8', stdio: ['ignore', 'pipe', 'ignore'] }
        )
            .split('=')[1]
            ?.trim()
            .replace(/:/g, '')
            .toUpperCase()
        if (!diskFingerprint) return false
        const keychainFingerprints = execSync(
            `security find-certificate -a -c "${KEYCHAIN_NAME}" -Z 2>/dev/null | grep "SHA-256 hash" || true`,
            { encoding: 'utf-8', stdio: ['ignore', 'pipe', 'ignore'] }
        )
            .split('\n')
            .map((line) =>
                line
                    .replace(/^.*SHA-256 hash:\s*/, '')
                    .trim()
                    .toUpperCase()
            )
            .filter(Boolean)
        return keychainFingerprints.includes(diskFingerprint)
    } catch {
        return false
    }
}

const isDnsSetup = (): boolean =>
    isResolverInstalled() && isCaTrusted()

const ensurePortRedirect = (): void => {
    if (!isResolverInstalled()) return
    exec('pfctl -a com.clawhost -sr 2>/dev/null', (err, stdout) => {
        if (
            !err &&
            stdout.includes('rdr pass') &&
            stdout.includes(String(PROXY_PORT))
        ) {
            return
        }
        const script = [
            '#!/bin/bash',
            `printf '${PF_RULE_HTTP}\\n${PF_RULE_HTTPS}\\n' | pfctl -a "${PF_ANCHOR}" -f - 2>/dev/null`,
            'pfctl -e 2>/dev/null',
            'exit 0'
        ].join('\n')
        const tmpScript = path.join(os.tmpdir(), 'clawhost-pf.sh')
        fs.writeFileSync(tmpScript, script, { mode: 0o755 })
        exec(
            `osascript -e 'do shell script "${tmpScript}" with administrator privileges'`,
            (pfError) => {
                if (pfError) {
                    console.error('ensurePortRedirect', pfError)
                }
                try {
                    fs.unlinkSync(tmpScript)
                } catch {}
            }
        )
    })
}

const setupResolver = (): Promise<boolean> =>
    new Promise((resolve) => {
        const caCertPath = certManager.getCaCertPath()
        const userName = os.userInfo().username
        const script = [
            '#!/bin/bash',
            `mkdir -p ${RESOLVER_DIR}`,
            `printf 'nameserver 127.0.0.1\\nport 15353\\n' > ${RESOLVER_PATH}`,
            `printf '${PF_RULE_HTTP}\\n${PF_RULE_HTTPS}\\n' > ${PF_ANCHOR_FILE}`,
            `if ! grep -q '${PF_ANCHOR}' ${PF_CONF}; then`,
            `  python3 -c "`,
            `with open('${PF_CONF}') as f:`,
            `    lines = f.readlines()`,
            `new_lines = []`,
            `for line in lines:`,
            `    new_lines.append(line)`,
            `    if line.strip() == 'rdr-anchor \\"com.apple/*\\"':`,
            `        new_lines.append('rdr-anchor \\"${PF_ANCHOR}\\"\\n')`,
            `    elif line.strip().startswith('load anchor \\"com.apple\\"'):`,
            `        new_lines.append('load anchor \\"${PF_ANCHOR}\\" from \\"${PF_ANCHOR_FILE}\\"\\n')`,
            `with open('${PF_CONF}', 'w') as f:`,
            `    f.writelines(new_lines)`,
            `"`,
            'fi',
            'pfctl -e 2>/dev/null',
            `pfctl -f ${PF_CONF} 2>/dev/null`,
            `printf '${PF_RULE_HTTP}\\n${PF_RULE_HTTPS}\\n' | pfctl -a "${PF_ANCHOR}" -f - 2>/dev/null`,
            `if [ -f "${caCertPath}" ]; then`,
            `  for kc in /Library/Keychains/System.keychain "${KEYCHAIN_PATH}"; do`,
            `    while sudo -u "${userName}" security find-certificate -c "${KEYCHAIN_NAME}" "$kc" >/dev/null 2>&1; do`,
            `      sudo -u "${userName}" security delete-certificate -c "${KEYCHAIN_NAME}" "$kc" 2>/dev/null || break`,
            `    done`,
            `  done`,
            `  security add-trusted-cert -p ssl -r trustRoot -k "${KEYCHAIN_PATH}" "${caCertPath}" 2>/dev/null`,
            'fi',
            'exit 0'
        ].join('\n')
        const tmpScript = path.join(os.tmpdir(), 'clawhost-dns-setup.sh')
        fs.writeFileSync(tmpScript, script, { mode: 0o755 })
        exec(
            `osascript -e 'do shell script "${tmpScript}" with administrator privileges'`,
            (err) => {
                try {
                    fs.unlinkSync(tmpScript)
                } catch {}
                resolve(!err)
            }
        )
    })

const addHostEntry = async (_subdomain: string): Promise<boolean> => true
const removeHostEntry = async (_subdomain: string): Promise<boolean> => true

const dnsResolverDarwin = {
    startDns,
    stopDns,
    isDnsSetup,
    setupResolver,
    ensurePortRedirect,
    addHostEntry,
    removeHostEntry
}

export default dnsResolverDarwin