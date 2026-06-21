import type {
    CacheEntry,
    CheckoutSession,
    CreateCheckoutParams
} from '@/ts/Interfaces'

import { getPolarClient, getPolarConfig } from '@/lib/polar'

const CHECKOUT_CACHE_TTL = 30_000
const checkoutCache = new Map<string, CacheEntry<CheckoutSession>>()

const checkouts = {
    async create(params: CreateCheckoutParams): Promise<CheckoutSession> {
        const polar = getPolarClient()
        const config = getPolarConfig()

        const checkout = await polar.checkouts.create({
            products: [params.productId],
            customerEmail: params.customerEmail,
            customerId: params.customerId,
            successUrl: params.successUrl || config.successUrl,
            metadata: params.metadata
        })

        return {
            id: checkout.id,
            url: checkout.url,
            status: checkout.status,
            customerId: checkout.customerId ?? undefined,
            customerEmail: checkout.customerEmail ?? undefined,
            productId: params.productId,
            amount: checkout.totalAmount ?? 0,
            currency: checkout.currency ?? 'usd',
            metadata: checkout.metadata as Record<string, string> | undefined
        }
    },

    async get(checkoutId: string): Promise<CheckoutSession | null> {
        const cached = checkoutCache.get(checkoutId)
        if (cached && Date.now() < cached.expiry) return cached.data

        const polar = getPolarClient()

        try {
            const checkout = await polar.checkouts.get({ id: checkoutId })
            const result: CheckoutSession = {
                id: checkout.id,
                url: checkout.url,
                status: checkout.status,
                customerId: checkout.customerId ?? undefined,
                customerEmail: checkout.customerEmail ?? undefined,
                productId: checkout.productId ?? '',
                amount: checkout.totalAmount ?? 0,
                currency: checkout.currency ?? 'usd',
                metadata: checkout.metadata as
                    | Record<string, string>
                    | undefined,
                subscriptionId: checkout.subscriptionId ?? undefined
            }
            checkoutCache.set(checkoutId, {
                data: result,
                expiry: Date.now() + CHECKOUT_CACHE_TTL
            })
            return result
        } catch {
            return null
        }
    }
}

export default checkouts