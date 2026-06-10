import type { AuthenticatedContext } from '@/ts/Types'
import type { BillingPeriod } from '@/ts/Interfaces'

import { eq, desc, gt, and } from 'drizzle-orm'
import { agentStatus } from '@openclaw/shared'
import { db } from '@/db'
import { agents, volumes, pendingAgents } from '@/db/schema'
import {
    sanitizeAgent,
    syncAgentServers,
    decryptAgentSecrets
} from '@/controllers/agents/helpers'
import { subscriptions, checkouts } from '@/lib/polar'
import { checkoutStatus } from '@/lib/constants'
import { ok } from '@/lib/response'
import { t } from '@openclaw/i18n'
import { withErrorHandler } from '@/lib'

const getAgents = withErrorHandler('getAgents')(async (
    c: AuthenticatedContext
) => {
    const userId = c.get('userId')

    const [userAgents, userVolumes, userPendingAgents] = await Promise.all([
        db
            .select()
            .from(agents)
            .where(eq(agents.userId, userId))
            .orderBy(desc(agents.createdAt)),
        db.select().from(volumes).where(eq(volumes.userId, userId)),
        db
            .select()
            .from(pendingAgents)
            .where(
                and(
                    eq(pendingAgents.userId, userId),
                    gt(pendingAgents.expiresAt, new Date())
                )
            )
    ])

    const syncedAgents = await syncAgentServers(userAgents)

    const subIds = syncedAgents
        .filter((c) => c.polarSubscriptionId)
        .map((c) => c.polarSubscriptionId!)

    const customerId = syncedAgents.find(
        (c) => c.polarCustomerId
    )?.polarCustomerId
    if (customerId && subIds.length > 0)
        await subscriptions.prefetchByCustomer(customerId)

    const subResults = await subscriptions.getMany(subIds)

    const subMap = new Map<string, BillingPeriod>()
    for (const [id, sub] of subResults) {
        subMap.set(id, {
            start: sub.currentPeriodStart?.toISOString(),
            end: sub.currentPeriodEnd?.toISOString()
        })
    }

    const volumeMap = new Map<string, typeof userVolumes>()
    for (const v of userVolumes) {
        if (!v.agentId) continue
        const arr = volumeMap.get(v.agentId) || []
        arr.push(v)
        volumeMap.set(v.agentId, arr)
    }

    const agentsWithVolumes = syncedAgents.map((agent) => {
        const billing = agent.polarSubscriptionId
            ? subMap.get(agent.polarSubscriptionId)
            : undefined
        return {
            ...agent,
            volumes: volumeMap.get(agent.id) || [],
            currentPeriodStart: billing?.start || null,
            currentPeriodEnd: billing?.end || null
        }
    })

    const validPending = await Promise.all(
        userPendingAgents.map(async (p) => {
            try {
                const checkout = await checkouts.get(p.checkoutId)
                if (checkout?.status === checkoutStatus.expired) {
                    await db
                        .delete(pendingAgents)
                        .where(eq(pendingAgents.id, p.id))
                    return null
                }
                const paid =
                    checkout?.status === checkoutStatus.succeeded ||
                    checkout?.status === checkoutStatus.confirmed
                return {
                    pending: p,
                    paid,
                    checkoutUrl: checkout?.url || null
                }
            } catch {
                return { pending: p, paid: false, checkoutUrl: null }
            }
        })
    )

    const pendingAsAgent = validPending
        .filter((v) => v !== null)
        .map(({ pending: p, paid, checkoutUrl }) => ({
            id: `pending-${p.id}`,
            name: p.name,
            agentType: p.agentType,
            status: paid ? agentStatus.creating : agentStatus.awaitingPayment,
            ip: null,
            planId: p.planId,
            location: p.location,
            sshKeyId: p.sshKeyId,
            providerServerId: null,
            subdomain: null,
            gatewayToken: null,
            subscriptionStatus: null,
            billingInterval: p.billingInterval || null,
            currentPeriodStart: null,
            currentPeriodEnd: null,
            volumes: [],
            deletionScheduledAt: null,
            checkoutUrl: paid ? null : checkoutUrl,
            createdAt: p.createdAt.toISOString()
        }))

    return ok(
        c,
        [
            ...pendingAsAgent,
            ...agentsWithVolumes.map((agent) =>
                sanitizeAgent(decryptAgentSecrets(agent))
            )
        ],
        t('api.agentsFetched')
    )
})

export default getAgents