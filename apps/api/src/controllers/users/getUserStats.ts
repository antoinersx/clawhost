import type { AuthenticatedContext } from '@/ts/Types'

import { eq, count } from 'drizzle-orm'
import { db } from '@/db'
import { agents, sshKeys, users } from '@/db/schema'
import { orders } from '@/lib/polar'
import { ok } from '@/lib/response'
import { t } from '@openclaw/i18n'
import { withErrorHandler } from '@/lib'

const getUserStats = withErrorHandler(
    'getUserStats',
    'api.failedToGetStats'
)(async (c: AuthenticatedContext) => {
    const userId = c.get('userId')

    const [clawResult, sshKeyResult, userResult] = await Promise.all([
        db
            .select({ count: count() })
            .from(agents)
            .where(eq(agents.userId, userId)),
        db
            .select({ count: count() })
            .from(sshKeys)
            .where(eq(sshKeys.userId, userId)),
        db
            .select({ polarCustomerId: users.polarCustomerId })
            .from(users)
            .where(eq(users.id, userId))
            .limit(1)
    ])

    let orderCount = 0
    const polarCustomerId = userResult[0]?.polarCustomerId
    if (polarCustomerId) {
        try {
            const result = await orders.listByCustomer(polarCustomerId, 1, 1)
            orderCount = result.totalCount
        } catch {}
    }

    return ok(
        c,
        {
            clawCount: clawResult[0]?.count || 0,
            sshKeyCount: sshKeyResult[0]?.count || 0,
            orderCount
        },
        t('api.statsFetched')
    )
})

export default getUserStats