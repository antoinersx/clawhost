import type { AuthenticatedContext } from '@/ts/Types'

import { asc, count, desc, ilike, or, sql } from 'drizzle-orm'
import { db } from '@/db'
import { users, agents, sshKeys } from '@/db/schema'
import { ok } from '@/lib/response'
import { t } from '@openclaw/i18n'
import { withErrorHandler } from '@/lib'

const getAdminUsers = withErrorHandler(
    'getAdminUsers',
    'api.failedToGetAdminUsers'
)(async (c: AuthenticatedContext) => {
    const page = Math.max(1, parseInt(c.req.query('page') || '1', 10))
    const limit = Math.min(
        100,
        Math.max(1, parseInt(c.req.query('limit') || '20', 10))
    )
    const offset = (page - 1) * limit
    const search = c.req.query('search')?.trim() || ''
    const hasClaws = c.req.query('hasClaws')
    const sort = c.req.query('sort') || 'newest'

    const conditions = []

    if (search) {
        conditions.push(
            or(
                ilike(users.email, `%${search}%`),
                ilike(users.name, `%${search}%`)
            )
        )
    }

    if (hasClaws === 'true') {
        const usersWithClaws = db
            .select({ userId: agents.userId })
            .from(agents)
            .groupBy(agents.userId)
        conditions.push(sql`${users.id} IN (${usersWithClaws})`)
    } else if (hasClaws === 'false') {
        const usersWithClaws = db
            .select({ userId: agents.userId })
            .from(agents)
            .groupBy(agents.userId)
        conditions.push(sql`${users.id} NOT IN (${usersWithClaws})`)
    }

    const whereClause =
        conditions.length > 0
            ? sql`${sql.join(
                  conditions.map((c) => sql`(${c})`),
                  sql` AND `
              )}`
            : undefined

    const [totalResult, userRows] = await Promise.all([
        db.select({ count: count() }).from(users).where(whereClause),
        db
            .select({
                id: users.id,
                email: users.email,
                name: users.name,
                role: users.role,
                authMethods: users.authMethods,
                hasLicense: users.hasLicense,
                referralCode: users.referralCode,
                createdAt: users.createdAt
            })
            .from(users)
            .where(whereClause)
            .orderBy(
                sort === 'oldest' ? asc(users.createdAt) : desc(users.createdAt)
            )
            .limit(limit)
            .offset(offset)
    ])

    const total = totalResult[0]?.count || 0
    const totalPages = Math.ceil(total / limit)

    const [clawCounts, sshKeyCounts] = await Promise.all([
        db
            .select({
                userId: agents.userId,
                count: count()
            })
            .from(agents)
            .groupBy(agents.userId),
        db
            .select({
                userId: sshKeys.userId,
                count: count()
            })
            .from(sshKeys)
            .groupBy(sshKeys.userId)
    ])

    const clawCountMap = new Map(clawCounts.map((r) => [r.userId, r.count]))
    const sshKeyCountMap = new Map(sshKeyCounts.map((r) => [r.userId, r.count]))

    const items = userRows.map((user) => ({
        ...user,
        clawCount: clawCountMap.get(user.id) || 0,
        sshKeyCount: sshKeyCountMap.get(user.id) || 0
    }))

    return ok(
        c,
        {
            items,
            total,
            page,
            totalPages
        },
        t('api.adminUsersFetched')
    )
})

export default getAdminUsers