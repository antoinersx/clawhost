import type { AuthenticatedContext } from '@/ts/Types'

import { eq, and } from 'drizzle-orm'
import { db } from '@/db'
import { agents, pendingAgents } from '@/db/schema'
import { subscriptions, checkouts } from '@/lib/polar'
import { subscriptionStatus } from '@openclaw/shared'
import {
    cleanupAgent,
    findUserAgent,
    sanitizeAgent
} from '@/controllers/agents/helpers'
import { t } from '@openclaw/i18n'
import { ok, fail } from '@/lib/response'
import { withErrorHandler } from '@/lib'

const deleteAgent = withErrorHandler(
    'deleteAgent',
    'api.failedToDeleteAgent'
)(async (c: AuthenticatedContext) => {
    const userId = c.get('userId')
    const id = c.req.param('id')!

    if (id.startsWith('pending-')) {
        const pendingId = id.replace('pending-', '')
        const result = await db
            .delete(pendingAgents)
            .where(
                and(
                    eq(pendingAgents.id, pendingId),
                    eq(pendingAgents.userId, userId)
                )
            )
            .returning()

        if (!result[0]) return fail(c, t('api.pendingAgentNotFound'), 404)

        const pending = result[0]
        try {
            const checkout = await checkouts.get(pending.checkoutId)
            if (checkout?.subscriptionId) {
                await subscriptions.revoke(checkout.subscriptionId)
            }
        } catch (subError) {
            console.error('deleteAgent', subError)
        }

        return ok(c, { scheduled: false }, t('api.agentDeleted'))
    }

    const agent = await findUserAgent(userId, id, c.get('isAdmin'))

    if (!agent) return fail(c, t('api.agentNotFound'), 404)

    if (
        agent.polarSubscriptionId &&
        agent.subscriptionStatus !== subscriptionStatus.canceled
    ) {
        try {
            const sub = await subscriptions.get(agent.polarSubscriptionId)

            if (sub && sub.currentPeriodEnd) {
                await subscriptions.cancel(agent.polarSubscriptionId)

                await db
                    .update(agents)
                    .set({
                        deletionScheduledAt: sub.currentPeriodEnd,
                        subscriptionStatus: subscriptionStatus.canceled
                    })
                    .where(eq(agents.id, id))

                return ok(
                    c,
                    {
                        scheduled: true,
                        deletionScheduledAt: sub.currentPeriodEnd.toISOString(),
                        agent: sanitizeAgent({
                            ...agent,
                            deletionScheduledAt: sub.currentPeriodEnd,
                            subscriptionStatus: subscriptionStatus.canceled
                        })
                    },
                    t('api.agentDeletionScheduled')
                )
            }
        } catch (subError) {
            console.error('deleteAgent', subError)
        }
    }

    await Promise.all([
        agent.polarSubscriptionId
            ? subscriptions
                  .revoke(agent.polarSubscriptionId)
                  .catch((subError) => {
                      console.error('deleteAgent', subError)
                  })
            : Promise.resolve(),
        cleanupAgent(id, {
            providerServerId: agent.providerServerId,
            subdomain: agent.subdomain,
            ip: agent.ip
        })
    ])

    return ok(c, { scheduled: false }, t('api.agentDeleted'))
})

export default deleteAgent