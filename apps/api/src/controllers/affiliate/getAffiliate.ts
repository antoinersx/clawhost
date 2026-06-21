import type { AuthenticatedContext } from '@/ts/Types'

import { eq, and, gte, count, sql } from 'drizzle-orm'
import { db } from '@/db'
import { users, referrals, referralPayments } from '@/db/schema'
import { ok, fail } from '@/lib/response'
import { t } from '@openclaw/i18n'

const affiliatePeriod = {
    TODAY: 'today',
    WEEK: 'week',
    MONTH: 'month',
    YEAR: 'year',
    ALL: 'all'
} as const

const VALID_PERIODS = Object.values(affiliatePeriod)

const getCutoffDate = (period: string): Date | null => {
    if (period === affiliatePeriod.ALL) return null
    const now = new Date()
    if (period === affiliatePeriod.TODAY) now.setHours(0, 0, 0, 0)
    if (period === affiliatePeriod.WEEK) now.setDate(now.getDate() - 7)
    if (period === affiliatePeriod.MONTH) now.setMonth(now.getMonth() - 1)
    if (period === affiliatePeriod.YEAR) now.setFullYear(now.getFullYear() - 1)
    return now
}

const getAffiliate = async (c: AuthenticatedContext) => {
    try {
        const userId = c.get('userId')
        const period = c.req.query('period') ?? affiliatePeriod.ALL

        if (!VALID_PERIODS.includes(period as (typeof VALID_PERIODS)[number])) {
            return fail(c, t('api.invalidPeriod'), 400)
        }

        const cutoff = getCutoffDate(period)

        const referralConditions = [eq(referrals.referrerId, userId)]
        if (cutoff) referralConditions.push(gte(referrals.createdAt, cutoff))

        const referralCountResult = await db
            .select({ value: count() })
            .from(referrals)
            .where(and(...referralConditions))

        const paymentConditions = [eq(referrals.referrerId, userId)]
        if (cutoff)
            paymentConditions.push(gte(referralPayments.createdAt, cutoff))

        const paymentRows = await db
            .select({
                id: referralPayments.id,
                referredEmail: users.email,
                amount: referralPayments.amount,
                type: referralPayments.type,
                createdAt: referralPayments.createdAt
            })
            .from(referralPayments)
            .innerJoin(referrals, eq(referralPayments.referralId, referrals.id))
            .innerJoin(users, eq(referrals.referredUserId, users.id))
            .where(and(...paymentConditions))
            .orderBy(sql`${referralPayments.createdAt} DESC`)

        const totalEarnings = paymentRows.reduce((sum, p) => sum + p.amount, 0)

        return ok(
            c,
            {
                referralCount: referralCountResult[0].value,
                totalEarnings,
                payments: paymentRows.map((p) => ({
                    id: p.id,
                    referredEmail: p.referredEmail,
                    amount: p.amount,
                    type: p.type,
                    createdAt: p.createdAt?.toISOString() ?? ''
                }))
            },
            t('api.affiliateFetched')
        )
    } catch (error) {
        console.error('getAffiliate', error)
        return fail(c, t('api.failedToGetAffiliate'), 500)
    }
}

export default getAffiliate