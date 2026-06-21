import { SUB_CACHE_TTL, subCache } from '@/lib/polar/subscriptions/cache'
import { listByCustomer } from '@/lib/polar/subscriptions'

const prefetchByCustomer = async (customerId: string): Promise<void> => {
    const subs = await listByCustomer(customerId)
    for (const sub of subs) {
        subCache.set(sub.id, {
            data: sub,
            expiry: Date.now() + SUB_CACHE_TTL
        })
    }
}

export default prefetchByCustomer