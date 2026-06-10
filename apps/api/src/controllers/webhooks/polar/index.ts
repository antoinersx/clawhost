import type { Context } from 'hono'

import { t } from '@openclaw/i18n'
import { parseWebhook, handleWebhook } from '@/lib/polar'
import { ok, fail } from '@/lib/response'
import trackReferral from '@/controllers/webhooks/polar/trackReferral'
import {
    onCheckoutUpdated,
    onSubscriptionActive,
    onSubscriptionCanceled,
    onSubscriptionRevoked,
    onSubscriptionUncanceled,
    onSubscriptionUpdated
} from '@/controllers/webhooks/polar/handlers'

const handlePolarWebhook = async (c: Context) => {
    try {
        const event = await parseWebhook(c)

        if (!event) return fail(c, t('api.invalidWebhook'), 400)

        await handleWebhook(event, {
            onCheckoutUpdated: (data) => onCheckoutUpdated(data, c),
            onSubscriptionActive: (data) => onSubscriptionActive(data, c),
            onSubscriptionCanceled: (data) => onSubscriptionCanceled(data),
            onSubscriptionRevoked: (data) => onSubscriptionRevoked(data),
            onSubscriptionUncanceled: (data) => onSubscriptionUncanceled(data),
            onSubscriptionUpdated: (data) => onSubscriptionUpdated(data)
        })

        return ok(c, { received: true }, t('api.webhookReceived'))
    } catch (error) {
        console.error('handlePolarWebhook', error)
        return fail(c, t('api.webhookProcessingFailed'), 500)
    }
}

export default handlePolarWebhook
export { trackReferral }