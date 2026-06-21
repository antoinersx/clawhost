import type { Context } from 'hono'

import { lt } from 'drizzle-orm'
import { db } from '@/db'
import { otpCodes } from '@/db/schema'
import { ok } from '@/lib/response'
import { withErrorHandler } from '@/lib'

const cleanupExpiredOtps = withErrorHandler('cleanupExpiredOtps')(async (
    c: Context
) => {
    const deleted = await db
        .delete(otpCodes)
        .where(lt(otpCodes.expiresAt, new Date()))
        .returning({ id: otpCodes.id })

    return ok(c, { deleted: deleted.length })
})

export default cleanupExpiredOtps