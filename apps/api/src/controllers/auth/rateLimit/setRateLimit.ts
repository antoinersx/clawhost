import { db } from '@/db'
import { rateLimits } from '@/db/schema'
import { memoryCache } from '@/controllers/auth/rateLimit'

const setRateLimit = async (...keys: string[]): Promise<void> => {
    const now = new Date()
    const nowMs = now.getTime()

    for (const key of keys) {
        memoryCache.set(key, nowMs)
    }

    await Promise.all(
        keys.map((key) =>
            db
                .insert(rateLimits)
                .values({ key, lastSentAt: now })
                .onConflictDoUpdate({
                    target: rateLimits.key,
                    set: { lastSentAt: now }
                })
        )
    )
}

export default setRateLimit