import type { AuthenticatedContext } from '@/ts/Types'

import { asc, count, desc, sql } from 'drizzle-orm'
import { db } from '@/db'
import { emails, users } from '@/db/schema'
import { ok } from '@/lib/response'
import { t } from '@openclaw/i18n'
import { withErrorHandler } from '@/lib'

const getAdminEmails = withErrorHandler(
    'getAdminEmails',
    'api.failedToGetAdminEmails'
)(async (c: AuthenticatedContext) => {
    const page = Math.max(1, parseInt(c.req.query('page') || '1', 10))
    const limit = Math.min(
        100,
        Math.max(1, parseInt(c.req.query('limit') || '20', 10))
    )
    const offset = (page - 1) * limit
    const sort = c.req.query('sort') || 'newest'

    const [totalResult, rows] = await Promise.all([
        db.select({ count: count() }).from(emails),
        db
            .select({
                id: emails.id,
                feature: emails.feature,
                sentAt: emails.sentAt,
                userId: emails.userId,
                ownerEmail: users.email
            })
            .from(emails)
            .leftJoin(users, sql`${emails.userId} = ${users.id}`)
            .orderBy(
                sort === 'oldest' ? asc(emails.sentAt) : desc(emails.sentAt)
            )
            .limit(limit)
            .offset(offset)
    ])

    const total = totalResult[0]?.count || 0
    const totalPages = Math.ceil(total / limit)

    return ok(
        c,
        { items: rows, total, page, totalPages },
        t('api.adminEmailsFetched')
    )
})

export default getAdminEmails