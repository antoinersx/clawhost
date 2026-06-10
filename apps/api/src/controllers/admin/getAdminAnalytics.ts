import type { AuthenticatedContext } from '@/ts/Types'
import type {
    AdminAnalyticsDataPoint,
    AnalyticsRangeConfig,
    AnalyticsTableConfig
} from '@/ts/Interfaces'
import type { PgTable } from 'drizzle-orm/pg-core'

import { sql } from 'drizzle-orm'
import { db } from '@/db'
import {
    users,
    agents,
    pendingAgents,
    sshKeys,
    volumes,
    referrals,
    emails
} from '@/db/schema'
import { ok, fail } from '@/lib/response'
import { t } from '@openclaw/i18n'
import { withErrorHandler } from '@/lib'

const RANGE_CONFIG: Record<string, AnalyticsRangeConfig> = {
    day: { trunc: 'hour', offset: '24 hours' },
    week: { trunc: 'day', offset: '7 days' },
    month: { trunc: 'day', offset: '30 days' },
    year: { trunc: 'month', offset: '1 year' },
    all: { trunc: 'month', offset: '5 years' }
}

const safeBucketQuery = async (
    table: PgTable,
    column: string,
    trunc: string,
    offset: string
): Promise<AdminAnalyticsDataPoint[]> => {
    try {
        const rows = await db
            .select({
                date: sql<string>`date_trunc(${sql.raw(`'${trunc}'`)}, ${sql.raw(column)})`,
                count: sql<number>`count(*)::int`
            })
            .from(table)
            .where(
                sql`${sql.raw(column)} >= NOW() - INTERVAL '${sql.raw(offset)}'`
            )
            .groupBy(
                sql`date_trunc(${sql.raw(`'${trunc}'`)}, ${sql.raw(column)})`
            )
            .orderBy(
                sql`date_trunc(${sql.raw(`'${trunc}'`)}, ${sql.raw(column)}) ASC`
            )

        return rows.map((row) => ({
            date: new Date(row.date).toISOString(),
            count: Number(row.count)
        }))
    } catch {
        return []
    }
}

const TABLE_CONFIG: AnalyticsTableConfig[] = [
    { key: 'users', table: users, column: 'created_at' },
    { key: 'agents', table: agents, column: 'created_at' },
    { key: 'pendingAgents', table: pendingAgents, column: 'created_at' },
    { key: 'sshKeys', table: sshKeys, column: 'created_at' },
    { key: 'volumes', table: volumes, column: 'created_at' },
    { key: 'referrals', table: referrals, column: 'created_at' },
    { key: 'emails', table: emails, column: 'sent_at' }
]

const getAdminAnalytics = withErrorHandler(
    'getAdminAnalytics',
    'api.failedToGetAdminAnalytics'
)(async (c: AuthenticatedContext) => {
    const range = c.req.query('range') || 'week'
    const config = RANGE_CONFIG[range]
    if (!config) return fail(c, t('api.failedToGetAdminAnalytics'), 400)

    const results = await Promise.all(
        TABLE_CONFIG.map(async ({ key, table, column }) => ({
            key,
            data: await safeBucketQuery(
                table,
                column,
                config.trunc,
                config.offset
            )
        }))
    )

    const analytics: Record<string, AdminAnalyticsDataPoint[]> = {}
    for (const { key, data } of results) {
        analytics[key] = data
    }

    return ok(c, analytics, t('api.adminAnalyticsFetched'))
})

export default getAdminAnalytics