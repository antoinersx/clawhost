import type {
    PolarSubscription,
    PolarSubscriptionRaw,
    PolarItemsResult
} from '@/ts/Interfaces'

import { getPolarClient } from '@/lib/polar'
import { mapSubscription } from '@/lib/polar/subscriptions'

const listByCustomer = async (
    customerId: string
): Promise<PolarSubscription[]> => {
    const polar = getPolarClient()

    try {
        const result = await polar.subscriptions.list({
            customerId
        })

        const items =
            'result' in result
                ? result.result
                : (result as unknown as PolarItemsResult).items || []

        return (items as PolarSubscriptionRaw[]).map(mapSubscription)
    } catch {
        return []
    }
}

export default listByCustomer