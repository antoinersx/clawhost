import type { Context } from 'hono'
import type { SubscriptionWebhookData } from '@/ts/Interfaces'

import { eq } from 'drizzle-orm'
import { db } from '@/db'
import { agents } from '@/db/schema'
import { getEnvironment, PROD } from '@/lib/environment'
import { provisionAgent } from '@/controllers/agents'
import { subscriptions } from '@/lib/polar'
import { trackReferral } from '@/controllers/webhooks/polar'

const onSubscriptionActive = async (
    data: SubscriptionWebhookData,
    c: Context
) => {
    const currentEnv = getEnvironment(c)
    const eventEnv = data.metadata?.environment || PROD

    if (eventEnv !== currentEnv) return

    const existingAgent = await db
        .select({ id: agents.id })
        .from(agents)
        .where(eq(agents.polarSubscriptionId, data.id))
        .limit(1)

    if (existingAgent[0]) return

    const pendingAgentId = data.metadata?.pendingAgentId
    if (!pendingAgentId) return

    provisionAgent({
        pendingAgentId,
        subscriptionId: data.id,
        customerId: data.customerId,
        productId: data.productId
    })
        .then((result) => {
            if (!result.success) {
                subscriptions.revoke(data.id).catch((revokeError) => {
                    console.error('onSubscriptionActive', revokeError)
                })
                return
            }
            if (result.referralCode && result.userId) {
                trackReferral(
                    result.userId,
                    result.referralCode,
                    'purchase'
                )
            }
        })
        .catch((error) => console.error('onSubscriptionActive', error))
}

export default onSubscriptionActive