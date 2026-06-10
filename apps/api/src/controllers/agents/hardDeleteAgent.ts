import type { AuthenticatedContext } from '@/ts/Types'

import { eq } from 'drizzle-orm'
import { db } from '@/db'
import { agents } from '@/db/schema'
import { subscriptions } from '@/lib/polar'
import { cleanupAgent } from '@/controllers/agents/helpers'
import { ok, fail } from '@/lib/response'
import { t } from '@openclaw/i18n'
import { withErrorHandler } from '@/lib'

const hardDeleteAgent = withErrorHandler(
    'hardDeleteAgent',
    'api.failedToHardDeleteAgent'
)(async (c: AuthenticatedContext) => {
    const id = c.req.param('id')!
    const agent = await db
        .select()
        .from(agents)
        .where(eq(agents.id, id))
        .limit(1)

    if (!agent[0]) return fail(c, t('api.agentNotFound'), 404)

    if (!agent[0].deletionScheduledAt)
        return fail(c, t('api.agentNotScheduledForDeletion'), 400)

    await Promise.all([
        agent[0].polarSubscriptionId
            ? subscriptions
                  .revoke(agent[0].polarSubscriptionId)
                  .catch((subError) => {
                      console.error('hardDeleteAgent', subError)
                  })
            : Promise.resolve(),
        cleanupAgent(id, {
            providerServerId: agent[0].providerServerId,
            subdomain: agent[0].subdomain,
            ip: agent[0].ip
        })
    ])

    return ok(c, null, t('api.agentHardDeleted'))
})

export default hardDeleteAgent