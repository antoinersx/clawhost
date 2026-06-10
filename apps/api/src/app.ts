import type { AuthCacheData, CacheEntry } from '@/ts/Interfaces'
import type { HonoEnv } from '@/ts/Types'

import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { bodyLimit } from 'hono/body-limit'
import { verifyToken } from '@/services/firebase'
import { eq, sql } from 'drizzle-orm'
import { db } from '@/db'
import { users } from '@/db/schema'
import {
    apiPaths,
    authMethod,
    externalUrls,
    httpMethod,
    providerId,
    userRole
} from '@openclaw/shared'
import { environment } from '@/lib/constants'
import { ok, fail } from '@/lib/response'
import { addContact } from '@/services/resend'
import { t } from '@openclaw/i18n'

import {
    adminRoutes,
    affiliateRoutes,
    authRoutes,
    clawsRoutes,
    cronRoutes,
    plansRoutes,
    sshKeysRoutes,
    usersRoutes,
    webhooksRoutes
} from '@/routes'

const app = new Hono<HonoEnv>()

const isDev = process.env.NODE_ENV !== environment.production

app.use(
    '*',
    cors({
        origin: isDev
            ? [
                  externalUrls.CLAWHOST.BASE,
                  externalUrls.CLAWHOST.WWW,
                  externalUrls.LOCAL.WEB,
                  externalUrls.LOCAL.WEB_HTTPS,
                  externalUrls.LOCAL.API,
                  externalUrls.LOCAL.API_HTTPS,
                  externalUrls.LOCAL.DESKTOP,
                  externalUrls.LOCAL.DESKTOP_HTTPS
              ]
            : [externalUrls.CLAWHOST.BASE, externalUrls.CLAWHOST.WWW],
        allowMethods: httpMethod.ALL,
        allowHeaders: ['Content-Type', 'Authorization', 'X-Referral-Code'],
        exposeHeaders: [],
        maxAge: 86400
    })
)

app.use('*', logger())
app.use('*', bodyLimit({ maxSize: 1024 * 1024 }))

app.use('*', async (c, next) => {
    await next()
    c.header('X-Content-Type-Options', 'nosniff')
    c.header('X-Frame-Options', 'DENY')
    c.header('Referrer-Policy', 'strict-origin-when-cross-origin')
    c.header(
        'Strict-Transport-Security',
        'max-age=31536000; includeSubDomains; preload'
    )
    c.header('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
    c.header(
        'Content-Security-Policy',
        "default-src 'self'; script-src 'self' https://www.googletagmanager.com https://datafa.st; style-src 'self' 'unsafe-inline'; img-src 'self' https: data:; connect-src 'self' https://*.clawhost.cloud https://*.googleapis.com https://*.firebaseio.com https://datafa.st; font-src 'self'; frame-ancestors 'none'"
    )
})

app.get('/', (c) => ok(c, null, t('api.healthOk')))

app.route('/auth', authRoutes)
app.route('/cron', cronRoutes)
app.route('/plans', plansRoutes)
app.route('/webhooks', webhooksRoutes)

const AUTH_CACHE_TTL = 5 * 60 * 1000
const AUTH_CACHE_CLEANUP_INTERVAL = 10 * 60 * 1000
const authCache = new Map<string, CacheEntry<AuthCacheData>>()

setInterval(() => {
    const now = Date.now()
    for (const [key, entry] of authCache) {
        if (now >= entry.expiry) authCache.delete(key)
    }
}, AUTH_CACHE_CLEANUP_INTERVAL)

app.use('/*', async (c, next) => {
    try {
        const authHeader = c.req.header('Authorization')
        if (!authHeader?.startsWith('Bearer ')) {
            return fail(c, t('api.unauthorized'), 401)
        }

        const token = authHeader.slice(7)

        const cachedAuth = authCache.get(token)
        if (cachedAuth && Date.now() < cachedAuth.expiry) {
            c.set('userId', cachedAuth.data.userId)
            c.set('isAdmin', cachedAuth.data.isAdmin)
            return next()
        }

        const decoded = await verifyToken(token)

        if (!decoded) return fail(c, t('api.invalidToken'), 401)

        const signInProvider = decoded.firebase?.sign_in_provider
        const resolvedAuthMethod =
            signInProvider === providerId.google
                ? authMethod.google
                : signInProvider === providerId.github
                  ? authMethod.github
                  : authMethod.email

        const existingUser = await db
            .select({ id: users.id, role: users.role })
            .from(users)
            .where(eq(users.id, decoded.uid))
            .then((rows) => rows[0])

        if (existingUser) {
            await db
                .update(users)
                .set({
                    ...(decoded.email ? { email: decoded.email } : {}),
                    authMethods: sql`CASE
                        WHEN ${resolvedAuthMethod} = ANY(COALESCE(${users.authMethods}, '{}'))
                        THEN COALESCE(${users.authMethods}, '{}')
                        ELSE array_append(COALESCE(${users.authMethods}, '{}'), ${resolvedAuthMethod})
                    END`
                })
                .where(eq(users.id, decoded.uid))
        } else if (decoded.email) {
            await db
                .insert(users)
                .values({
                    id: decoded.uid,
                    email: decoded.email,
                    authMethods: [resolvedAuthMethod]
                })
                .onConflictDoUpdate({
                    target: users.id,
                    set: {
                        email: decoded.email,
                        authMethods: sql`CASE
                            WHEN ${resolvedAuthMethod} = ANY(COALESCE(${users.authMethods}, '{}'))
                            THEN COALESCE(${users.authMethods}, '{}')
                            ELSE array_append(COALESCE(${users.authMethods}, '{}'), ${resolvedAuthMethod})
                        END`
                    }
                })

            addContact(decoded.email, decoded.name)
        } else return fail(c, t('api.unauthorized'), 401)

        const admin = existingUser?.role === userRole.admin

        authCache.set(token, {
            data: { userId: decoded.uid, isAdmin: admin },
            expiry: Date.now() + AUTH_CACHE_TTL
        })

        c.set('userId', decoded.uid)
        c.set('isAdmin', admin)
        return next()
    } catch (error) {
        console.error('authMiddleware', error)
        return fail(c, t('api.internalServerError'), 500)
    }
})

app.route('/admin', adminRoutes)
app.route('/affiliate', affiliateRoutes)
app.route(apiPaths.CLAWS.BASE, clawsRoutes)
app.route('/ssh-keys', sshKeysRoutes)
app.route('/users', usersRoutes)

app.notFound((c) => fail(c, t('api.notFound'), 404))

export default app