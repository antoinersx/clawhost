import type { PolarSubscription } from '@/ts/Interfaces'

import { getPolarClient } from '@/lib/polar'
import { mapSubscription } from '@/lib/polar/subscriptions'

const cancel = async (
    subscriptionId: string
): Promise<PolarSubscription | null> => {
    const polar = getPolarClient()

    try {
        const sub = await polar.subscriptions.update({
            id: subscriptionId,
            subscriptionUpdate: {
                cancelAtPeriodEnd: true
            }
        })
        return mapSubscription(sub as never)
    } catch {
        return null
    }
}

export default cancel