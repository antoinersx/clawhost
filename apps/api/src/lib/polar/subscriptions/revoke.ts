import type { ErrorWithBody } from '@/ts/Interfaces'

import { getPolarClient } from '@/lib/polar'

const revoke = async (subscriptionId: string): Promise<void> => {
    const polar = getPolarClient()
    try {
        await polar.subscriptions.revoke({ id: subscriptionId })
    } catch (error) {
        const body =
            error && typeof error === 'object' && 'body' in error
                ? String((error as ErrorWithBody).body)
                : ''
        if (body.includes('AlreadyCanceledSubscription')) return
        throw error
    }
}

export default revoke