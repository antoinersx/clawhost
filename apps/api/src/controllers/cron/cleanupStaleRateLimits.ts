import type { Context } from 'hono'

import { lt } from 'drizzle-orm'
import { db } from '@/db'
import { rateLimits } from '@/db/schema'
import { ok } from '@/lib/response'
import { withErrorHandler } from '@/lib'

const cleanupStaleRateLimits = withErrorHandler('cleanupStaleRateLimits')(
    async (c: Context) => {
        const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000)

        const deleted = await db
            .delete(rateLimits)
            .where(lt(rateLimits.lastSentAt, oneHourAgo))
            .returning({ key: rateLimits.key })

        return ok(c, { deleted: deleted.length })
    }
)

export default cleanupStaleRateLimits