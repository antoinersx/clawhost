import type { WithAgentOptions } from '@/ts/Interfaces'
import type { AuthenticatedContext, AgentRow } from '@/ts/Types'
import type { TranslationKey } from '@openclaw/i18n'

import { t } from '@openclaw/i18n'
import { fail } from '@/lib/response'
import { findUserAgent } from '@/controllers/agents/helpers'

const withAgent = (options: WithAgentOptions = {}) => {
    return <R>(
        handler: (c: AuthenticatedContext, agent: AgentRow) => Promise<R>
    ) => {
        return async (c: AuthenticatedContext) => {
            const userId = c.get('userId')
            const id = c.req.param('id')!
            const agent = await findUserAgent(userId, id, c.get('isAdmin'))

            if (!agent) return fail(c, t('api.agentNotFound'), 404)

            if (options.requireSSH) {
                if (!agent.ip || !agent.rootPassword) {
                    const key: TranslationKey =
                        typeof options.requireSSH === 'string'
                            ? options.requireSSH
                            : 'api.agentNotFound'
                    return fail(c, t(key), 400)
                }
            }

            return handler(c, agent)
        }
    }
}

export default withAgent