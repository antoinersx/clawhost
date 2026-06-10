import { eq } from 'drizzle-orm'
import { db } from '@/db'
import { rateLimits } from '@/db/schema'
import { memoryCache } from '@/controllers/auth/rateLimit'

const checkRateLimit = async (
    key: string,
    windowMs: number = 60_000
): Promise<number> => {
    const cached = memoryCache.get(key)
    if (cached !== undefined) {
        const elapsed = Date.now() - cached
        if (elapsed >= windowMs) return 0
        return Math.ceil((windowMs - elapsed) / 1000)
    }

    const record = await db
        .select()
        .from(rateLimits)
        .where(eq(rateLimits.key, key))
        .then((rows) => rows[0])

    if (!record) return 0

    const ts = record.lastSentAt.getTime()
    memoryCache.set(key, ts)

    const elapsed = Date.now() - ts
    if (elapsed >= windowMs) return 0
    return Math.ceil((windowMs - elapsed) / 1000)
}

export default checkRateLimit