import type { AuthenticatedContext } from '@/ts/Types'
import type { PgTable } from 'drizzle-orm/pg-core'

import { count } from 'drizzle-orm'
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
import { ok } from '@/lib/response'
import { t } from '@openclaw/i18n'
import { orders } from '@/lib/polar'
import { withErrorHandler } from '@/lib'

const safeCount = async (table: PgTable): Promise<number> => {
    try {
        const result = await db.select({ count: count() }).from(table)
        return result[0]?.count || 0
    } catch {
        return 0
    }
}

const getAdminStats = withErrorHandler(
    'getAdminStats',
    'api.failedToGetAdminStats'
)(async (c: AuthenticatedContext) => {
    const [
        userCount,
        clawCount,
        pendingAgentCount,
        sshKeyCount,
        volumeCount,
        referralCount,
        emailCount,
        billingData
    ] = await Promise.all([
        safeCount(users),
        safeCount(agents),
        safeCount(pendingAgents),
        safeCount(sshKeys),
        safeCount(volumes),
        safeCount(referrals),
        safeCount(emails),
        orders.listAll(1, 1).catch(() => ({ totalCount: 0 }))
    ])

    return ok(
        c,
        {
            users: userCount,
            agents: clawCount,
            pendingAgents: pendingAgentCount,
            sshKeys: sshKeyCount,
            volumes: volumeCount,
            referrals: referralCount,
            emails: emailCount,
            billing: billingData.totalCount
        },
        t('api.adminStatsFetched')
    )
})

export default getAdminStats