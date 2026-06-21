import type { Context } from 'hono'

import { getProvider } from '@/services/provider'
import { PLANS } from '@openclaw/shared'
import { ok } from '@/lib/response'
import { t } from '@openclaw/i18n'
import { withErrorHandler } from '@/lib'

const getPlanAvailability = withErrorHandler(
    'getPlanAvailability',
    'api.failedToFetchPlanAvailability'
)(async (c: Context) => {
    const provider = getProvider()

    const [serverTypes, datacenters] = await Promise.all([
        provider.getRawServerTypes(),
        provider.getDatacenters()
    ])

    const nameToId = new Map<string, number>()
    for (const st of serverTypes) {
        nameToId.set(st.name, st.id)
    }

    const locationsByType = new Map<number, Set<string>>()
    for (const dc of datacenters) {
        for (const typeId of dc.availableServerTypeIds) {
            let locs = locationsByType.get(typeId)
            if (!locs) {
                locs = new Set()
                locationsByType.set(typeId, locs)
            }
            locs.add(dc.locationName)
        }
    }

    const availability: Record<string, string[]> = {}

    for (const { id: planName } of PLANS) {
        const serverTypeId = nameToId.get(planName)
        if (!serverTypeId) continue
        availability[planName] = Array.from(
            locationsByType.get(serverTypeId) || []
        )
    }

    return ok(c, availability, t('api.planAvailabilityFetched'))
})

export default getPlanAvailability