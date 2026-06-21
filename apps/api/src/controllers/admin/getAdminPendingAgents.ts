import type { AuthenticatedContext } from '@/ts/Types'

import { asc, count, desc, sql } from 'drizzle-orm'
import { db } from '@/db'
import { pendingAgents, users } from '@/db/schema'
import { ok } from '@/lib/response'
import { t } from '@openclaw/i18n'
import { withErrorHandler } from '@/lib'

const getAdminPendingAgents = withErrorHandler(
    'getAdminPendingAgents',
    'api.failedToGetAdminPendingAgents'
)(async (c: AuthenticatedContext) => {
    const page = Math.max(1, parseInt(c.req.query('page') || '1', 10))
    const limit = Math.min(
        100,
        Math.max(1, parseInt(c.req.query('limit') || '20', 10))
    )
    const offset = (page - 1) * limit
    const sort = c.req.query('sort') || 'newest'

    const [totalResult, rows] = await Promise.all([
        db.select({ count: count() }).from(pendingAgents),
        db
            .select({
                id: pendingAgents.id,
                name: pendingAgents.name,
                planId: pendingAgents.planId,
                location: pendingAgents.location,
                priceMonthly: pendingAgents.priceMonthly,
                billingInterval: pendingAgents.billingInterval,
                createdAt: pendingAgents.createdAt,
                expiresAt: pendingAgents.expiresAt,
                userId: pendingAgents.userId,
                ownerEmail: users.email
            })
            .from(pendingAgents)
            .leftJoin(users, sql`${pendingAgents.userId} = ${users.id}`)
            .orderBy(
                sort === 'oldest'
                    ? asc(pendingAgents.createdAt)
                    : desc(pendingAgents.createdAt)
            )
            .limit(limit)
            .offset(offset)
    ])

    const total = totalResult[0]?.count || 0
    const totalPages = Math.ceil(total / limit)

    return ok(
        c,
        { items: rows, total, page, totalPages },
        t('api.adminPendingAgentsFetched')
    )
})

export default getAdminPendingAgents