import type { AuthenticatedContext } from '@/ts/Types'

import { eq } from 'drizzle-orm'
import { db } from '@/db'
import { users } from '@/db/schema'
import { customers, checkouts } from '@/lib/polar'
import { metadataType } from '@/lib/constants'
import { getEnvironment } from '@/lib/environment'
import { ok, fail } from '@/lib/response'
import { t } from '@openclaw/i18n'

const purchaseLicense = async (c: AuthenticatedContext) => {
    try {
        const userId = c.get('userId')

        const user = await db
            .select({
                id: users.id,
                email: users.email,
                name: users.name,
                polarCustomerId: users.polarCustomerId,
                hasLicense: users.hasLicense
            })
            .from(users)
            .where(eq(users.id, userId))
            .limit(1)

        if (!user[0]) return fail(c, t('api.userNotFound'), 404)

        if (user[0].hasLicense)
            return fail(c, t('api.licenseAlreadyPurchased'), 400)

        const productId = process.env.POLAR_PRODUCT_LICENSE
        if (!productId) return fail(c, t('api.licenseNotAvailable'), 500)

        const customer = await customers.getOrCreate({
            email: user[0].email,
            name: user[0].name || undefined,
            externalId: userId
        })

        if (!user[0].polarCustomerId) {
            await db
                .update(users)
                .set({ polarCustomerId: customer.id })
                .where(eq(users.id, userId))
        }

        const url = process.env.CLIENT
        const successUrl = `https://${url}/account?payment=success&checkout_id={CHECKOUT_ID}`

        const referralCode = c.req.header('X-Referral-Code') || null

        const checkout = await checkouts.create({
            productId,
            customerEmail: user[0].email,
            customerId: customer.id,
            successUrl,
            metadata: {
                type: metadataType.license,
                userId,
                environment: getEnvironment(c),
                ...(referralCode ? { referralCode } : {})
            }
        })

        return ok(
            c,
            { checkoutUrl: checkout.url },
            t('api.licenseCheckoutCreated')
        )
    } catch (error) {
        console.error('purchaseLicense', error)
        return fail(c, t('api.failedToPurchaseLicense'), 500)
    }
}

export default purchaseLicense