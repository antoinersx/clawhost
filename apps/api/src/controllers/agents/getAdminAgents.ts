import type { AuthenticatedContext } from '@/ts/Types'
import type { BillingPeriod } from '@/ts/Interfaces'

import { desc } from 'drizzle-orm'
import { db } from '@/db'
import { agents, users, volumes } from '@/db/schema'
import {
    sanitizeAgent,
    syncAgentServers,
    decryptAgentSecrets
} from '@/controllers/agents/helpers'
import { subscriptions } from '@/lib/polar'
import { ok } from '@/lib/response'
import { t } from '@openclaw/i18n'
import { withErrorHandler } from '@/lib'

const getAdminAgents = withErrorHandler('getAdminAgents')(async (
    c: AuthenticatedContext
) => {
    const [allAgents, allVolumes, allUsers] = await Promise.all([
        db.select().from(agents).orderBy(desc(agents.createdAt)),
        db.select().from(volumes),
        db.select({ id: users.id, email: users.email }).from(users)
    ])

    const userMap = new Map(allUsers.map((u) => [u.id, u.email]))

    const syncedAgents = await syncAgentServers(allAgents)

    const subIds = syncedAgents
        .filter((c) => c.polarSubscriptionId)
        .map((c) => c.polarSubscriptionId!)

    const customerIds = [
        ...new Set(
            syncedAgents
                .filter((c) => c.polarCustomerId)
                .map((c) => c.polarCustomerId!)
        )
    ]
    if (customerIds.length > 0)
        await Promise.all(
            customerIds.map((id) => subscriptions.prefetchByCustomer(id))
        )

    const subResults = await subscriptions.getMany(subIds)

    const subMap = new Map<string, BillingPeriod>()
    for (const [id, sub] of subResults) {
        subMap.set(id, {
            start: sub.currentPeriodStart?.toISOString(),
            end: sub.currentPeriodEnd?.toISOString()
        })
    }

    const volumeMap = new Map<string, typeof allVolumes>()
    for (const v of allVolumes) {
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
            ownerEmail: userMap.get(agent.userId) || null,
            volumes: volumeMap.get(agent.id) || [],
            currentPeriodStart: billing?.start || null,
            currentPeriodEnd: billing?.end || null
        }
    })

    return ok(
        c,
        agentsWithVolumes.map((agent) =>
            sanitizeAgent(decryptAgentSecrets(agent))
        ),
        t('api.agentsFetched')
    )
})

export default getAdminAgents