import type { Context } from 'hono'

import { getProvider } from '@/services/provider'
import { inputValidation } from '@openclaw/shared'
import { ok } from '@/lib/response'
import { t } from '@openclaw/i18n'
import { withErrorHandler } from '@/lib'

const getVolumePricing = withErrorHandler(
    'getVolumePricing',
    'api.failedToFetchVolumePricing'
)(async (c: Context) => {
    const provider = getProvider()
    const pricing = await provider.getVolumePricing()
    return ok(
        c,
        {
            pricePerGbMonthly:
                Math.ceil(pricing.pricePerGbMonthly * 3 * 1000) / 1000,
            minSize: inputValidation.VOLUME_SIZE.MIN,
            maxSize: inputValidation.VOLUME_SIZE.MAX
        },
        t('api.volumePricingFetched')
    )
})

export default getVolumePricing