import type { AuthenticatedContext } from '@/ts/Types'

import { eq } from 'drizzle-orm'
import { db } from '@/db'
import { users } from '@/db/schema'
import { orders } from '@/lib/polar'
import { ok } from '@/lib/response'
import { t } from '@openclaw/i18n'
import { withErrorHandler } from '@/lib'

const getBillingHistory = withErrorHandler(
    'getBillingHistory',
    'api.failedToGetBillingHistory'
)(async (c: AuthenticatedContext) => {
    const userId = c.get('userId')
    const page = Math.max(1, parseInt(c.req.query('page') || '1', 10))
    const limit = Math.min(
        100,
        Math.max(1, parseInt(c.req.query('limit') || '10', 10))
    )

    const user = await db
        .select({ polarCustomerId: users.polarCustomerId })
        .from(users)
        .where(eq(users.id, userId))
        .limit(1)

    const polarCustomerId = user[0]?.polarCustomerId
    if (!polarCustomerId) {
        return ok(
            c,
            {
                items: [],
                total: 0,
                page,
                totalPages: 1
            },
            t('api.billingHistoryFetched')
        )
    }

    const result = await orders.listByCustomer(polarCustomerId, page, limit)

    return ok(
        c,
        {
            items: result.items,
            total: result.totalCount,
            page,
            totalPages: result.maxPage
        },
        t('api.billingHistoryFetched')
    )
})

export default getBillingHistory