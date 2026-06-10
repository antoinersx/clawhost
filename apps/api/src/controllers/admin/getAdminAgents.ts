import type { AuthenticatedContext } from '@/ts/Types'

import { asc, count, desc, ilike, or, sql } from 'drizzle-orm'
import { db } from '@/db'
import { agents, users } from '@/db/schema'
import { ok } from '@/lib/response'
import { t } from '@openclaw/i18n'
import { withErrorHandler } from '@/lib'

const getAdminAgents = withErrorHandler(
    'getAdminAgents',
    'api.failedToGetAdminAgents'
)(async (c: AuthenticatedContext) => {
    const page = Math.max(1, parseInt(c.req.query('page') || '1', 10))
    const limit = Math.min(
        100,
        Math.max(1, parseInt(c.req.query('limit') || '20', 10))
    )
    const offset = (page - 1) * limit
    const search = c.req.query('search')?.trim() || ''
    const sort = c.req.query('sort') || 'newest'

    const conditions = []

    if (search) {
        conditions.push(
            or(
                ilike(agents.name, `%${search}%`),
                ilike(agents.ip, `%${search}%`)
            )!
        )
    }

    const whereClause =
        conditions.length > 0
            ? sql`${sql.join(
                  conditions.map((c) => sql`(${c})`),
                  sql` AND `
              )}`
            : undefined

    const [totalResult, agentRows] = await Promise.all([
        db.select({ count: count() }).from(agents).where(whereClause),
        db
            .select({
                id: agents.id,
                name: agents.name,
                status: agents.status,
                ip: agents.ip,
                planId: agents.planId,
                location: agents.location,
                subdomain: agents.subdomain,
                subscriptionStatus: agents.subscriptionStatus,
                billingInterval: agents.billingInterval,
                deletionScheduledAt: agents.deletionScheduledAt,
                createdAt: agents.createdAt,
                userId: agents.userId,
                ownerEmail: users.email
            })
            .from(agents)
            .leftJoin(users, sql`${agents.userId} = ${users.id}`)
            .where(whereClause)
            .orderBy(
                sort === 'oldest'
                    ? asc(agents.createdAt)
                    : desc(agents.createdAt)
            )
            .limit(limit)
            .offset(offset)
    ])

    const total = totalResult[0]?.count || 0
    const totalPages = Math.ceil(total / limit)

    return ok(
        c,
        { items: agentRows, total, page, totalPages },
        t('api.adminAgentsFetched')
    )
})

export default getAdminAgents