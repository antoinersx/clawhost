import type { AuthenticatedContext } from '@/ts/Types'

import { executeSSH } from '@/services'
import { findUserAgent, getAgentConfig } from '@/controllers/agents/helpers'
import { t } from '@openclaw/i18n'
import { ok, fail } from '@/lib/response'

const buildLogsCommand = (
    logFile: string,
    user: string,
    homeDir: string,
    serviceName: string,
    isHermes: boolean
): string => {
    if (!isHermes) return `tail -100 ${logFile} 2>&1`

    const sources = [
        `journalctl -u ${serviceName} -n 100 --no-pager 2>/dev/null`,
        `su - ${user} -c 'journalctl --user-unit=${serviceName} -n 100 --no-pager' 2>/dev/null`,
        `tail -n 100 ${homeDir}/.hermes/logs/gateway.log 2>/dev/null`,
        `tail -n 100 -q ${homeDir}/.hermes/logs/*.log 2>/dev/null`
    ]
    const tries = sources
        .map(
            (cmd) =>
                `if [ -z "$out" ]; then raw=$(${cmd}); cleaned=$(printf '%s' "$raw" | grep -v -- '-- No entries --' | grep -v '^$'); if [ -n "$cleaned" ]; then out="$raw"; fi; fi`
        )
        .join('; ')
    return `out=""; ${tries}; printf '%s' "$out"`
}

const getAgentLogs = async (c: AuthenticatedContext) => {
    try {
        const userId = c.get('userId')
        const id = c.req.param('id')!
        const agent = await findUserAgent(userId, id, c.get('isAdmin'))

        if (!agent) return fail(c, t('api.agentNotFound'), 404)

        if (!agent.ip || !agent.rootPassword)
            return fail(c, t('api.failedToGetDiagnostics'), 400)

        const config = getAgentConfig(agent.agentType)
        const isHermes = config.configFile === null

        const command = buildLogsCommand(
            config.logFile,
            config.user,
            config.homeDir,
            config.serviceName,
            isHermes
        )

        const output = await executeSSH(agent.ip, agent.rootPassword, command)

        return ok(c, { logs: output }, t('api.logsFetched'))
    } catch (error) {
        console.error('getAgentLogs', error)
        return fail(c, t('api.failedToGetDiagnostics'), 500)
    }
}

export default getAgentLogs