import type { Context } from 'hono'
import type { FeatureEmailKey } from '@/ts/Types'

import crypto from 'crypto'
import { eq, sql } from 'drizzle-orm'
import { db } from '@/db'
import { users, emails } from '@/db/schema'
import { getResend, FROM_EMAIL } from '@/services/resend'
import FEATURE_EMAILS from '@/lib/featureEmails'
import { ok, fail } from '@/lib/response'
import { t } from '@openclaw/i18n'

const BATCH_SIZE = 4
const BATCH_DELAY_MS = 200
const FEATURE_COUNT = FEATURE_EMAILS.length

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const parseBatchSize = (param: string | undefined): number => {
    if (!param) return BATCH_SIZE
    const parsed = parseInt(param, 10)
    if (isNaN(parsed) || parsed < 1) return BATCH_SIZE
    return Math.min(parsed, 50)
}

const markAndSend = async (
    resend: ReturnType<typeof getResend>,
    userId: string,
    userEmail: string,
    feature: (typeof FEATURE_EMAILS)[number]
): Promise<boolean> => {
    try {
        await db.insert(emails).values({
            id: crypto.randomUUID(),
            userId,
            feature: feature.key
        })
    } catch {
        return false
    }

    const { error } = await resend.emails.send({
        from: FROM_EMAIL,
        to: userEmail,
        subject: feature.subject,
        react: feature.render()
    })

    if (error) {
        await db
            .delete(emails)
            .where(
                sql`${emails.userId} = ${userId} AND ${emails.feature} = ${feature.key}`
            )
        return false
    }

    return true
}

const DISABLED = true

const sendFeatureEmails = async (c: Context) => {
    if (DISABLED) {
        return ok(
            c,
            { sent: 0, disabled: true },
            t('api.featureEmailsDisabled')
        )
    }

    try {
        const featureParam = c.req.query('feature') as
            | FeatureEmailKey
            | undefined
        const batchSize = parseBatchSize(c.req.query('batch'))
        const resend = getResend()

        if (featureParam) {
            const targetFeature = FEATURE_EMAILS.find(
                (f) => f.key === featureParam
            )
            if (!targetFeature) return fail(c, t('api.invalidFeatureKey'), 400)

            const pendingUsers = await db
                .select({ id: users.id, email: users.email })
                .from(users)
                .where(
                    sql`${users.id} NOT IN (
                        SELECT ${emails.userId} FROM ${emails}
                        WHERE ${emails.feature} = ${featureParam}
                    )`
                )
                .limit(batchSize)

            let totalSent = 0

            for (const user of pendingUsers) {
                const sent = await markAndSend(
                    resend,
                    user.id,
                    user.email,
                    targetFeature
                )
                if (sent) totalSent++
                await sleep(BATCH_DELAY_MS)
            }

            return ok(
                c,
                {
                    feature: featureParam,
                    sent: totalSent,
                    done: pendingUsers.length < batchSize
                },
                t('api.featureEmailsSent')
            )
        }

        const pendingUsers = await db
            .select({ id: users.id, email: users.email })
            .from(users)
            .where(
                sql`(
                    SELECT COUNT(*) FROM ${emails}
                    WHERE ${emails.userId} = ${users.id}
                ) < ${FEATURE_COUNT}`
            )
            .limit(batchSize)

        let totalSent = 0

        for (const user of pendingUsers) {
            const sentEmails = await db
                .select({ feature: emails.feature })
                .from(emails)
                .where(eq(emails.userId, user.id))

            const sentFeatures = new Set(sentEmails.map((e) => e.feature))

            const nextFeature = FEATURE_EMAILS.find(
                (f) => !sentFeatures.has(f.key)
            )
            if (!nextFeature) continue

            const sent = await markAndSend(
                resend,
                user.id,
                user.email,
                nextFeature
            )
            if (sent) totalSent++
            await sleep(BATCH_DELAY_MS)
        }

        return ok(
            c,
            {
                sent: totalSent,
                done: pendingUsers.length < batchSize
            },
            t('api.featureEmailsSent')
        )
    } catch {
        return fail(c, t('api.featureEmailsFailed'), 500)
    }
}

export default sendFeatureEmails