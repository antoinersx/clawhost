import type { Context } from 'hono'
import type {
    GithubEmailEntry,
    GithubUserResponse,
    GoogleUserinfoResponse,
    ResolveCredentialConflictBody
} from '@/ts/Interfaces'

import crypto from 'crypto'
import { eq, and, gt, sql } from 'drizzle-orm'
import {
    authMethod,
    externalUrls,
    inputValidation,
    providerId as oauthProviderId
} from '@openclaw/shared'
import { auth } from '@/services/firebase'
import { db } from '@/db'
import { users, otpCodes } from '@/db/schema'
import { t } from '@openclaw/i18n'
import { ok, fail } from '@/lib/response'
import {
    getClientIp,
    checkRateLimit,
    setRateLimit
} from '@/controllers/auth/rateLimit'
import { withErrorHandler } from '@/lib'

const hashCode = (code: string): string => {
    return crypto.createHash('sha256').update(code).digest('hex')
}

const RESOLVE_RATE_LIMIT_WINDOW = 60_000

const verifyGithubToken = async (accessToken: string) => {
    const [userRes, emailsRes] = await Promise.all([
        fetch(externalUrls.GITHUB.USER, {
            headers: { Authorization: `Bearer ${accessToken}` }
        }),
        fetch(externalUrls.GITHUB.USER_EMAILS, {
            headers: { Authorization: `Bearer ${accessToken}` }
        })
    ])

    if (!userRes.ok) return null

    const userData = (await userRes.json()) as GithubUserResponse
    const providerUid = String(userData.id)
    const displayName = userData.name || userData.login
    let email = userData.email

    if (!email && emailsRes.ok) {
        const emails = (await emailsRes.json()) as GithubEmailEntry[]
        const primary = emails.find((e: GithubEmailEntry) => e.primary)
        email = primary?.email
    }

    return { email, providerUid, displayName }
}

const verifyGoogleToken = async (accessToken: string) => {
    const res = await fetch(externalUrls.GOOGLE.USERINFO, {
        headers: { Authorization: `Bearer ${accessToken}` }
    })

    if (!res.ok) return null

    const data = (await res.json()) as GoogleUserinfoResponse
    return {
        email: data.email,
        providerUid: data.sub,
        displayName: data.name
    }
}

const resolveCredentialConflict = withErrorHandler('resolveCredentialConflict')(
    async (c: Context) => {
        const {
            accessToken,
            providerId,
            email: conflictEmail,
            code
        } = await c.req.json<ResolveCredentialConflictBody>()

        if (!accessToken || !providerId || !conflictEmail || !code)
            return fail(c, t('api.missingRequiredFields'), 400)

        const ip = getClientIp(c)
        if (ip) {
            const retryAfter = await checkRateLimit(
                `resolve-conflict:${ip}`,
                RESOLVE_RATE_LIMIT_WINDOW
            )
            if (retryAfter > 0)
                return fail(c, t('api.rateLimitExceeded'), 429, { retryAfter })
        }

        const normalizedEmail = conflictEmail.toLowerCase()

        const otpRecord = await db
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

        if (!otpRecord) return fail(c, t('api.otpExpiredOrNotFound'), 401)

        if (otpRecord.attempts >= inputValidation.OTP_MAX_ATTEMPTS.MAX) {
            await db.delete(otpCodes).where(eq(otpCodes.id, otpRecord.id))
            return fail(c, t('api.otpMaxAttemptsReached'), 401)
        }

        await db
            .update(otpCodes)
            .set({ attempts: sql`${otpCodes.attempts} + 1` })
            .where(eq(otpCodes.id, otpRecord.id))

        const codeHash = hashCode(code)
        const hashA = Buffer.from(codeHash)
        const hashB = Buffer.from(otpRecord.codeHash)
        if (
            hashA.length !== hashB.length ||
            !crypto.timingSafeEqual(hashA, hashB)
        )
            return fail(c, t('api.otpInvalidCode'), 401)

        await db.delete(otpCodes).where(eq(otpCodes.id, otpRecord.id))

        const verifier =
            providerId === oauthProviderId.github
                ? verifyGithubToken
                : verifyGoogleToken
        const verified = await verifier(accessToken)

        if (!verified?.email) return fail(c, t('api.invalidCredentials'), 401)

        if (verified.email.toLowerCase() !== normalizedEmail)
            return fail(c, t('api.invalidCredentials'), 401)

        const existingUser = await db
            .select()
            .from(users)
            .where(eq(users.email, normalizedEmail))
            .limit(1)
            .then((rows) => rows[0])

        if (!existingUser) return fail(c, t('api.userNotFound'), 404)

        const method =
            providerId === oauthProviderId.google
                ? authMethod.google
                : authMethod.github
        await Promise.all([
            auth()
                .updateUser(existingUser.id, {
                    providerToLink: {
                        providerId,
                        uid: verified.providerUid,
                        email: verified.email,
                        displayName: verified.displayName
                    }
                })
                .catch(() => {}),
            db
                .update(users)
                .set({
                    authMethods: sql`CASE
                    WHEN ${method} = ANY(COALESCE(${users.authMethods}, '{}'))
                    THEN COALESCE(${users.authMethods}, '{}')
                    ELSE array_append(COALESCE(${users.authMethods}, '{}'), ${method})
                END`
                })
                .where(eq(users.id, existingUser.id))
        ])

        if (ip) await setRateLimit(`resolve-conflict:${ip}`)

        const customToken = await auth().createCustomToken(existingUser.id)
        return ok(c, { customToken }, t('api.accountLinked'))
    }
)

export default resolveCredentialConflict