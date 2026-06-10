import { eq } from 'drizzle-orm'
import { db } from '@/db'
import { users } from '@/db/schema'
import { orders } from '@/lib/polar'
import { withAgent } from '@/controllers/agents/helpers'
import { ok } from '@/lib/response'
import { t } from '@openclaw/i18n'
import { withErrorHandler } from '@/lib'

const getAgentBilling = withErrorHandler(
    'getAgentBilling',
    'api.failedToGetBillingHistory'
)(
    withAgent()(async (c, agent) => {
        const page = Math.max(1, parseInt(c.req.query('page') || '1', 10))
        const limit = Math.min(
            100,
            Math.max(1, parseInt(c.req.query('limit') || '10', 10))
        )

        if (!agent.polarSubscriptionId) {
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

        const ownerRow = await db
            .select({ polarCustomerId: users.polarCustomerId })
            .from(users)
            .where(eq(users.id, agent.userId))
            .limit(1)

        const polarCustomerId = ownerRow[0]?.polarCustomerId
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
        const filtered = result.items.filter(
            (order) => order.subscriptionId === agent.polarSubscriptionId
        )

        return ok(
            c,
            {
                items: filtered,
                total: filtered.length,
                page,
                totalPages: 1
            },
            t('api.billingHistoryFetched')
        )
    })
)

export default getAgentBilling