import { UNKNOWN_VERSION } from '@openclaw/shared'
import { executeSSH } from '@/services'
import { getAgentConfig, versionCache } from '@/controllers/agents/helpers'

const VERSION_CACHE_TTL = 60 * 1000

const cleanVersionOutput = (raw: string): string => {
    const trimmed = raw.trim()
    if (!trimmed) return UNKNOWN_VERSION

    const semverMatch = trimmed.match(/v?\d+(?:\.\d+)+(?:[-_][\w.]+)?/)
    if (semverMatch) return semverMatch[0]

    const cleaned = trimmed
        .replace(/\s*\([a-f0-9]+\)\s*$/, '')
        .replace(/^(OpenClaw|Hermes|Agent)\s*/i, '')
        .trim()
    return cleaned || UNKNOWN_VERSION
}

const fetchAgentVersion = async (
    ip: string,
    rootPassword: string,
    agentType?: string | null
): Promise<string> => {
    const cached = versionCache.get(ip)
    if (cached && Date.now() < cached.expiresAt) return cached.version

    const agent = getAgentConfig(agentType)

    const output = await executeSSH(
        ip,
        rootPassword,
        `su - ${agent.user} -c "${agent.versionCommand}" 2>/dev/null || echo "unknown"`
    )

    const version = cleanVersionOutput(output)
    versionCache.set(ip, { version, expiresAt: Date.now() + VERSION_CACHE_TTL })
    return version
}

export default fetchAgentVersion