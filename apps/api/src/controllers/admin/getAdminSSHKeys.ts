import type { AuthenticatedContext } from '@/ts/Types'

import { asc, count, desc, ilike, sql } from 'drizzle-orm'
import { db } from '@/db'
import { sshKeys, users } from '@/db/schema'
import { ok } from '@/lib/response'
import { t } from '@openclaw/i18n'
import { withErrorHandler } from '@/lib'

const getAdminSSHKeys = withErrorHandler(
    'getAdminSSHKeys',
    'api.failedToGetAdminSSHKeys'
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
        conditions.push(ilike(sshKeys.name, `%${search}%`))
    }

    const whereClause =
        conditions.length > 0
            ? sql`${sql.join(
                  conditions.map((c) => sql`(${c})`),
                  sql` AND `
              )}`
            : undefined

    const [totalResult, keyRows] = await Promise.all([
        db.select({ count: count() }).from(sshKeys).where(whereClause),
        db
            .select({
                id: sshKeys.id,
                name: sshKeys.name,
                fingerprint: sshKeys.fingerprint,
                createdAt: sshKeys.createdAt,
                userId: sshKeys.userId,
                ownerEmail: users.email
            })
            .from(sshKeys)
            .leftJoin(users, sql`${sshKeys.userId} = ${users.id}`)
            .where(whereClause)
            .orderBy(
                sort === 'oldest'
                    ? asc(sshKeys.createdAt)
                    : desc(sshKeys.createdAt)
            )
            .limit(limit)
            .offset(offset)
    ])

    const total = totalResult[0]?.count || 0
    const totalPages = Math.ceil(total / limit)

    return ok(
        c,
        { items: keyRows, total, page, totalPages },
        t('api.adminSSHKeysFetched')
    )
})

export default getAdminSSHKeys