import type { AuthenticatedContext } from '@/ts/Types'

import { eq } from 'drizzle-orm'
import { db } from '@/db'
import { users } from '@/db/schema'
import { ok, fail } from '@/lib/response'
import { t } from '@openclaw/i18n'
import { generateReferralCode } from '@/lib'

const generateCode = async (c: AuthenticatedContext) => {
    try {
        const userId = c.get('userId')

        const user = await db
            .select({ referralCode: users.referralCode })
            .from(users)
            .where(eq(users.id, userId))
            .limit(1)

        if (!user[0]) return fail(c, t('api.userNotFound'), 404)

        if (user[0].referralCode) {
            return ok(
                c,
                { referralCode: user[0].referralCode },
                t('api.affiliateFetched')
            )
        }

        let code = generateReferralCode()
        let attempts = 0
        while (attempts < 5) {
            const existing = await db
                .select({ id: users.id })
                .from(users)
                .where(eq(users.referralCode, code))
                .limit(1)
            if (!existing[0]) break
            code = generateReferralCode()
            attempts++
        }

        await db
            .update(users)
            .set({ referralCode: code })
            .where(eq(users.id, userId))

        return ok(c, { referralCode: code }, t('api.referralCodeGenerated'))
    } catch (error) {
        console.error('generateCode', error)
        return fail(c, t('api.failedToGenerateReferralCode'), 500)
    }
}

export default generateCode