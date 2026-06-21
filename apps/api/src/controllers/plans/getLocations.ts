import type { Context } from 'hono'

import { getProvider } from '@/services/provider'
import { ok } from '@/lib/response'
import { t } from '@openclaw/i18n'
import { withErrorHandler } from '@/lib'

const getLocations = withErrorHandler(
    'getLocations',
    'api.failedToFetchLocations'
)(async (c: Context) => {
    const provider = getProvider()
    const locations = await provider.getLocations()
    return ok(c, locations, t('api.locationsFetched'))
})

export default getLocations