import type { AuthenticatedContext } from '@/ts/Types'

import { eq } from 'drizzle-orm'
import { userRole } from '@openclaw/shared'
import { db } from '@/db'
import { users, agents } from '@/db/schema'
import { getPolarClient } from '@/lib/polar'
import { ok, fail } from '@/lib/response'
import { t } from '@openclaw/i18n'
import { withErrorHandler } from '@/lib'

const getCustomerPortal = withErrorHandler(
    'getCustomerPortal',
    'api.failedToGetCustomerPortal'
)(async (c: AuthenticatedContext) => {
    const userId = c.get('userId')
    const body = await c.req.json().catch(() => ({}))
    const agentId = body.agentId as string | undefined

    let polarCustomerId: string | null = null

    if (agentId) {
        const authUser = await db
            .select({ role: users.role })
            .from(users)
            .where(eq(users.id, userId))
            .limit(1)

        const agent = await db
            .select({ userId: agents.userId })
            .from(agents)
            .where(eq(agents.id, agentId))
            .limit(1)

        if (!agent[0]) return fail(c, t('api.agentNotFound'), 404)

        const ownerIsself = agent[0].userId === userId
        if (!ownerIsself && authUser[0]?.role !== userRole.admin)
            return fail(c, t('api.unauthorized'), 403)

        const owner = await db
            .select({ polarCustomerId: users.polarCustomerId })
            .from(users)
            .where(eq(users.id, agent[0].userId))
            .limit(1)

        polarCustomerId = owner[0]?.polarCustomerId ?? null
    } else {
        const user = await db
            .select({ polarCustomerId: users.polarCustomerId })
            .from(users)
            .where(eq(users.id, userId))
            .limit(1)

        polarCustomerId = user[0]?.polarCustomerId ?? null
    }

    if (!polarCustomerId) return fail(c, t('api.noBillingAccount'), 404)

    const clientUrl = process.env.CLIENT
    const returnUrl = `https://${clientUrl}/account`

    const polar = getPolarClient()
    const session = await polar.customerSessions.create({
        customerId: polarCustomerId,
        returnUrl
    })

    return ok(
        c,
        { url: session.customerPortalUrl },
        t('api.customerPortalFetched')
    )
})

export default getCustomerPortal