import type { AuthenticatedContext } from '@/ts/Types'

import { asc, count, desc, sql } from 'drizzle-orm'
import { db } from '@/db'
import { volumes, users } from '@/db/schema'
import { ok } from '@/lib/response'
import { t } from '@openclaw/i18n'
import { withErrorHandler } from '@/lib'

const getAdminVolumes = withErrorHandler(
    'getAdminVolumes',
    'api.failedToGetAdminVolumes'
)(async (c: AuthenticatedContext) => {
    const page = Math.max(1, parseInt(c.req.query('page') || '1', 10))
    const limit = Math.min(
        100,
        Math.max(1, parseInt(c.req.query('limit') || '20', 10))
    )
    const offset = (page - 1) * limit
    const sort = c.req.query('sort') || 'newest'

    const [totalResult, volumeRows] = await Promise.all([
        db.select({ count: count() }).from(volumes),
        db
            .select({
                id: volumes.id,
                name: volumes.name,
                size: volumes.size,
                location: volumes.location,
                status: volumes.status,
                createdAt: volumes.createdAt,
                userId: volumes.userId,
                ownerEmail: users.email
            })
            .from(volumes)
            .leftJoin(users, sql`${volumes.userId} = ${users.id}`)
            .orderBy(
                sort === 'oldest'
                    ? asc(volumes.createdAt)
                    : desc(volumes.createdAt)
            )
            .limit(limit)
            .offset(offset)
    ])

    const total = totalResult[0]?.count || 0
    const totalPages = Math.ceil(total / limit)

    return ok(
        c,
        { items: volumeRows, total, page, totalPages },
        t('api.adminVolumesFetched')
    )
})

export default getAdminVolumes