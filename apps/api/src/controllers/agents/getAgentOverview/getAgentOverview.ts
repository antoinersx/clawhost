import { withAgent, getAgentConfig } from '@/controllers/agents/helpers'
import { t } from '@openclaw/i18n'
import { ok, fail } from '@/lib/response'
import { executeSSH } from '@/services'
import { parseOverviewOutput } from '@/controllers/agents/getAgentOverview'
import { gatewayDefaults } from '@/lib/constants'

const SEPARATOR = '---CLAWHOST_OVERVIEW_SEP---'

const getAgentOverview = withAgent({
    requireSSH: 'api.failedToGetOverview'
})(async (c, agent) => {
    try {
        const agentConfig = getAgentConfig(agent.agentType)
        if (!agentConfig.configFile)
            return fail(c, t('api.overviewUnsupported'), 422)

        if (!agent.gatewayToken)
            return fail(c, t('api.failedToGetOverview'), 400)

        const tokenBase64 = Buffer.from(agent.gatewayToken).toString('base64')

        const command = [
            `TOKEN=$(echo '${tokenBase64}' | base64 -d)`,
            `curl -sf -m 15 ${gatewayDefaults.BASE_URL}/api/status 2>/dev/null || curl -sf -m 15 ${gatewayDefaults.BASE_URL}/health 2>/dev/null || echo 'null'`,
            `echo '${SEPARATOR}'`,
            `curl -sf -m 15 -H "Authorization: Bearer $TOKEN" ${gatewayDefaults.BASE_URL}/api/sessions 2>/dev/null || echo 'null'`,
            `echo '${SEPARATOR}'`,
            `cat ${agentConfig.configFile} 2>/dev/null || echo 'null'`,
            `echo '${SEPARATOR}'`,
            `systemctl is-active ${agentConfig.serviceName} 2>/dev/null || echo inactive`,
            `echo '${SEPARATOR}'`,
            `ss -tlnp 2>/dev/null | grep ${gatewayDefaults.PORT} || echo ""`,
            `echo '${SEPARATOR}'`,
            `timeout 15 su - ${agentConfig.user} -c '${agentConfig.binary} status 2>/dev/null' 2>/dev/null || echo ''`
        ].join('; ')

        const output = await executeSSH(
            agent.ip!,
            agent.rootPassword!,
            command,
            20000
        )

        const result = parseOverviewOutput(output, SEPARATOR)

        if (
            result.gateway.active &&
            result.gateway.portListening &&
            !result.gateway.reachable
        )
            return fail(c, t('api.overviewUnsupported'), 422)

        return ok(c, result, t('api.overviewFetched'))
    } catch (error) {
        console.error('getAgentOverview', error)
        return fail(c, t('api.failedToGetOverview'), 500)
    }
})

export default getAgentOverview