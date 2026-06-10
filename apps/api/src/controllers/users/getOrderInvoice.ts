import type { AuthenticatedContext } from '@/ts/Types'

import { eq } from 'drizzle-orm'
import { db } from '@/db'
import { users } from '@/db/schema'
import { orders } from '@/lib/polar'
import { ok, fail } from '@/lib/response'
import { t } from '@openclaw/i18n'
import { withErrorHandler } from '@/lib'

const getOrderInvoice = withErrorHandler(
    'getOrderInvoice',
    'api.failedToGetInvoice'
)(async (c: AuthenticatedContext) => {
    const userId = c.get('userId')
    const isAdmin = c.get('isAdmin')
    const orderId = c.req.param('orderId')!

    if (!orderId) return fail(c, t('api.orderIdRequired'), 400)

    const [user, order] = await Promise.all([
        db
            .select({ polarCustomerId: users.polarCustomerId })
            .from(users)
            .where(eq(users.id, userId))
            .limit(1),
        orders.get(orderId)
    ])

    if (!order) return fail(c, t('api.orderNotFound'), 404)

    if (!isAdmin) {
        const polarCustomerId = user[0]?.polarCustomerId
        if (!polarCustomerId) return fail(c, t('api.noBillingAccount'), 404)
        if (order.customerId !== polarCustomerId)
            return fail(c, t('api.orderNotFound'), 404)
    }

    const invoiceUrl = await orders.getInvoiceUrl(orderId)

    return ok(c, { url: invoiceUrl }, t('api.invoiceFetched'))
})

export default getOrderInvoice