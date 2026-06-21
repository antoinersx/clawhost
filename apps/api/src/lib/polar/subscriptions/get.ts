import type { PolarSubscription } from '@/ts/Interfaces'

import { getPolarClient } from '@/lib/polar'
import { mapSubscription } from '@/lib/polar/subscriptions'
import {
    SUB_CACHE_TTL,
    subCache,
    subInflight
} from '@/lib/polar/subscriptions/cache'

const get = async (
    subscriptionId: string
): Promise<PolarSubscription | null> => {
    const cached = subCache.get(subscriptionId)
    if (cached && Date.now() < cached.expiry) return cached.data

    const pending = subInflight.get(subscriptionId)
    if (pending) return pending

    const polar = getPolarClient()

    const promise = polar.subscriptions
        .get({ id: subscriptionId })
        .then((sub) => {
            const result = mapSubscription(sub as never)
            subCache.set(subscriptionId, {
                data: result,
                expiry: Date.now() + SUB_CACHE_TTL
            })
            subInflight.delete(subscriptionId)
            return result as PolarSubscription | null
        })
        .catch(() => {
            subInflight.delete(subscriptionId)
            return null as PolarSubscription | null
        })

    subInflight.set(subscriptionId, promise)
    return promise
}

export default get