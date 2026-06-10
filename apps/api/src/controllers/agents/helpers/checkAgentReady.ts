import { executeSSH } from '@/services'
import { getAgentConfig, checkSubdomainReady } from '@/controllers/agents/helpers'

const READY_MARKER = 'CLAWHOST_AGENT_READY'

const checkAgentReady = async (
    agentType: string | null | undefined,
    subdomain: string | null,
    ip: string | null,
    rootPassword: string | null
): Promise<boolean> => {
    const config = getAgentConfig(agentType)

    if (config.configFile && subdomain) return checkSubdomainReady(subdomain)

    if (!ip || !rootPassword) return false

    try {
        const command = `su - ${config.user} -c '${config.versionCommand}' >/dev/null 2>&1 && echo ${READY_MARKER}`
        const output = await executeSSH(ip, rootPassword, command, 10000)
        return output.includes(READY_MARKER)
    } catch {
        return false
    }
}

export default checkAgentReady