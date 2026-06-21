import type { AuthenticatedContext } from '@/ts/Types'

import { asc, count, desc, sql } from 'drizzle-orm'
import { db } from '@/db'
import { referrals } from '@/db/schema'
import { ok } from '@/lib/response'
import { t } from '@openclaw/i18n'
import { withErrorHandler } from '@/lib'

const getAdminReferrals = withErrorHandler(
    'getAdminReferrals',
    'api.failedToGetAdminReferrals'
)(async (c: AuthenticatedContext) => {
    const page = Math.max(1, parseInt(c.req.query('page') || '1', 10))
    const limit = Math.min(
        100,
        Math.max(1, parseInt(c.req.query('limit') || '20', 10))
    )
    const offset = (page - 1) * limit
    const sort = c.req.query('sort') || 'newest'

    const [totalResult, rows] = await Promise.all([
        db.select({ count: count() }).from(referrals),
        db
            .select({
                id: referrals.id,
                referrerId: referrals.referrerId,
                referredUserId: referrals.referredUserId,
                paymentCount: sql<number>`(SELECT count(*) FROM referral_payments WHERE referral_id = ${referrals.id})`,
                totalEarned: sql<number>`COALESCE((SELECT sum(amount) FROM referral_payments WHERE referral_id = ${referrals.id}), 0)`,
                createdAt: referrals.createdAt,
                referrerEmail: sql<string>`(SELECT email FROM users WHERE id = ${referrals.referrerId})`,
                referredEmail: sql<string>`(SELECT email FROM users WHERE id = ${referrals.referredUserId})`
            })
            .from(referrals)
            .orderBy(
                sort === 'oldest'
                    ? asc(referrals.createdAt)
                    : desc(referrals.createdAt)
            )
            .limit(limit)
            .offset(offset)
    ])

    const total = totalResult[0]?.count || 0
    const totalPages = Math.ceil(total / limit)

    return ok(
        c,
        { items: rows, total, page, totalPages },
        t('api.adminReferralsFetched')
    )
})

export default getAdminReferrals