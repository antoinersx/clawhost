import {
    sanitizeAgent,
    executeServerLifecycle,
    withAgent
} from '@/controllers/agents/helpers'
import { ok, fail } from '@/lib/response'
import { t } from '@openclaw/i18n'
import { withErrorHandler } from '@/lib'

const stopAgent = withErrorHandler(
    'stopAgent',
    'api.failedToStopAgent'
)(
    withAgent()(async (c, agent) => {
        if (!agent.providerServerId) return fail(c, t('api.agentNotFound'), 404)

        const result = await executeServerLifecycle(agent, 'stop')

        if (!result.success) return fail(c, t('api.failedToStopAgent'), 500)

        return ok(
            c,
            sanitizeAgent({ ...agent, status: result.status }),
            t('api.agentStopped')
        )
    })
)

export default stopAgent