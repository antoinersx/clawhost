import type { AuthenticatedContext } from '@/ts/Types'

import { orders } from '@/lib/polar'
import { ok } from '@/lib/response'
import { t } from '@openclaw/i18n'
import { withErrorHandler } from '@/lib'

const getAdminBilling = withErrorHandler(
    'getAdminBilling',
    'api.failedToGetAdminBilling'
)(async (c: AuthenticatedContext) => {
    const page = parseInt(c.req.query('page') || '1')
    const limit = parseInt(c.req.query('limit') || '20')

    const result = await orders.listAll(page, limit)

    return ok(c, result, t('api.adminBillingFetched'))
})

export default getAdminBilling