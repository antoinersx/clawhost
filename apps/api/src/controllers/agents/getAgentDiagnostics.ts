import type { AuthenticatedContext } from '@/ts/Types'

import { executeSSH } from '@/services'
import { findUserAgent, getAgentConfig } from '@/controllers/agents/helpers'
import { t } from '@openclaw/i18n'
import { ok, fail } from '@/lib/response'
import { gatewayDefaults } from '@/lib/constants'

const SEPARATOR = '---CLAWHOST_SEP---'

const getAgentDiagnostics = async (c: AuthenticatedContext) => {
    try {
        const userId = c.get('userId')
        const id = c.req.param('id')!
        const agent = await findUserAgent(userId, id, c.get('isAdmin'))

        if (!agent) return fail(c, t('api.agentNotFound'), 404)

        if (!agent.ip || !agent.rootPassword)
            return fail(c, t('api.failedToGetDiagnostics'), 400)

        const config = getAgentConfig(agent.agentType)
        const isHermes = config.configFile === null

        const portCheck = isHermes
            ? `su - ${config.user} -c '${config.versionCommand}' 2>&1 || echo "Hermes binary not on PATH"`
            : `ss -tlnp | grep ${gatewayDefaults.PORT} 2>&1 || echo "Port ${gatewayDefaults.PORT} not listening"`

        const serviceCheck = isHermes
            ? `systemctl status ${config.serviceName} 2>&1 || (su - ${config.user} -c 'systemctl --user status ${config.serviceName}' 2>&1 || echo "${config.serviceName} systemd unit not installed")`
            : `systemctl status ${config.serviceName} 2>&1`

        const command = [
            serviceCheck,
            `echo '${SEPARATOR}'`,
            portCheck,
            `echo '${SEPARATOR}'`,
            'free -h 2>&1'
        ].join('; ')

        const output = await executeSSH(agent.ip, agent.rootPassword, command)
        const parts = output.split(SEPARATOR)

        return ok(
            c,
            {
                service: parts[0]?.trim() || '',
                port: parts[1]?.trim() || '',
                memory: parts[2]?.trim() || ''
            },
            t('api.diagnosticsFetched')
        )
    } catch (error) {
        console.error('getAgentDiagnostics', error)
        return fail(c, t('api.failedToGetDiagnostics'), 500)
    }
}

export default getAgentDiagnostics