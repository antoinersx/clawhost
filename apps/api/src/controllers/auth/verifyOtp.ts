import type { Context } from 'hono'
import type { VerifyOtpBody } from '@/ts/Interfaces'

import crypto from 'crypto'
import { eq, and, gt, lt, sql } from 'drizzle-orm'
import { auth } from '@/services/firebase'
import { db } from '@/db'
import { otpCodes, users } from '@/db/schema'
import { inputValidation } from '@openclaw/shared'
import { t } from '@openclaw/i18n'
import { ok, fail } from '@/lib/response'
import { getClientIp, clearRateLimit } from '@/controllers/auth/rateLimit'
import { withErrorHandler } from '@/lib'

const hashCode = (code: string): string => {
    return crypto.createHash('sha256').update(code).digest('hex')
}

const verifyOtp = withErrorHandler('verifyOtp')(async (c: Context) => {
    const { email, code } = await c.req.json<VerifyOtpBody>()

    if (!email || !code) return fail(c, t('api.emailRequired'), 400)

    const normalizedEmail = email.toLowerCase()

    const record = await db
        .select()
        .from(otpCodes)
        .where(
            and(
                eq(otpCodes.email, normalizedEmail),
                gt(otpCodes.expiresAt, new Date())
            )
        )
        .limit(1)
        .then((rows) => rows[0])

    if (!record) return fail(c, t('api.otpExpiredOrNotFound'), 401)

    if (record.attempts >= inputValidation.OTP_MAX_ATTEMPTS.MAX) {
        await db.delete(otpCodes).where(eq(otpCodes.id, record.id))
        return fail(c, t('api.otpMaxAttemptsReached'), 401)
    }

    const updated = await db
        .update(otpCodes)
        .set({ attempts: sql`${otpCodes.attempts} + 1` })
        .where(
            and(
                eq(otpCodes.id, record.id),
                lt(otpCodes.attempts, inputValidation.OTP_MAX_ATTEMPTS.MAX)
            )
        )
        .returning({ attempts: otpCodes.attempts })

    if (!updated[0]) return fail(c, t('api.otpMaxAttemptsReached'), 401)

    const codeHash = hashCode(code)
    const hashA = Buffer.from(codeHash)
    const hashB = Buffer.from(record.codeHash)
    if (
        hashA.length !== hashB.length ||
        !crypto.timingSafeEqual(hashA, hashB)
    ) {
        const remaining =
            inputValidation.OTP_MAX_ATTEMPTS.MAX - updated[0].attempts
        return fail(c, t('api.otpInvalidCode'), 401, {
            attemptsRemaining: remaining
        })
    }

    const [, existingUser] = await Promise.all([
        db.delete(otpCodes).where(eq(otpCodes.id, record.id)),
        db
            .select()
            .from(users)
            .where(eq(users.email, normalizedEmail))
            .then((rows) => rows[0])
    ])

    let uid: string

    if (existingUser) {
        uid = existingUser.id
        try {
            await auth().updateUser(uid, { email: normalizedEmail })
        } catch (error) {
            console.error('verifyOtp', error)
        }
    } else {
        if (email.includes('+'))
            return fail(c, t('api.plusAddressingNotAllowed'), 400)

        uid = crypto.randomUUID()
        await Promise.all([
            db.insert(users).values({
                id: uid,
                email: normalizedEmail
            }),
            auth().createUser({ uid, email: normalizedEmail })
        ])
    }

    const keysToClean = [`email:${normalizedEmail}`]
    const ip = getClientIp(c)
    if (ip) keysToClean.push(`ip:${ip}`)

    const [, customToken] = await Promise.all([
        clearRateLimit(...keysToClean),
        auth().createCustomToken(uid)
    ])
    return ok(c, { customToken }, t('api.otpVerified'))
})

export default verifyOtp