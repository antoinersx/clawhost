import { eq } from 'drizzle-orm'
import { db } from '@/db'
import { agents } from '@/db/schema'
import { subscriptions } from '@/lib/polar'
import { subscriptionStatus } from '@openclaw/shared'
import { sanitizeAgent, withAgent } from '@/controllers/agents/helpers'
import { ok, fail } from '@/lib/response'
import { t } from '@openclaw/i18n'
import { withErrorHandler } from '@/lib'

const cancelDeletion = withErrorHandler(
    'cancelDeletion',
    'api.failedToCancelDeletion'
)(
    withAgent()(async (c, agent) => {
        const id = c.req.param('id')!

        if (!agent.deletionScheduledAt)
            return fail(c, t('api.agentNotScheduledForDeletion'), 400)

        if (new Date(agent.deletionScheduledAt) <= new Date())
            return fail(c, t('api.agentDeletionAlreadyPassed'), 400)

        if (agent.polarSubscriptionId) {
            try {
                await subscriptions.uncancel(agent.polarSubscriptionId)
            } catch (subError) {
                console.error('cancelDeletion', subError)
                return fail(c, t('api.failedToCancelScheduledDeletion'), 500)
            }
        }

        await db
            .update(agents)
            .set({
                deletionScheduledAt: null,
                subscriptionStatus: subscriptionStatus.active
            })
            .where(eq(agents.id, id))

        return ok(
            c,
            sanitizeAgent({
                ...agent,
                deletionScheduledAt: null,
                subscriptionStatus: subscriptionStatus.active
            }),
            t('api.agentDeletionCancelled')
        )
    })
)

export default cancelDeletion