import type { Context } from 'hono'
import type { WebhookEvent } from '@/ts/Interfaces'

import { getPolarConfig } from '@/lib/polar'
import { verifyWebhookSignature, snakeToCamel } from '@/lib/polar/webhooks'

const parseWebhook = async (c: Context): Promise<WebhookEvent | null> => {
    const config = getPolarConfig()

    if (!config.webhookSecret) return null

    const webhookId = c.req.header('webhook-id')
    const timestamp = c.req.header('webhook-timestamp')
    const signature = c.req.header('webhook-signature')

    if (!webhookId || !timestamp || !signature) return null

    const WEBHOOK_TOLERANCE_SECONDS = 300
    const ts = parseInt(timestamp, 10)
    if (
        isNaN(ts) ||
        Math.abs(Date.now() / 1000 - ts) > WEBHOOK_TOLERANCE_SECONDS
    ) {
        return null
    }

    const payload = await c.req.text()

    if (
        !verifyWebhookSignature(
            payload,
            webhookId,
            timestamp,
            signature,
            config.webhookSecret
        )
    ) {
        return null
    }

    try {
        const raw = JSON.parse(payload)
        const event = snakeToCamel(raw) as WebhookEvent
        return event
    } catch (error) {
        console.error('parseWebhook', error)
        return null
    }
}

export default parseWebhook