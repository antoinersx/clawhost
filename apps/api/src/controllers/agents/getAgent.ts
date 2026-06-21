import { eq } from 'drizzle-orm'
import { db } from '@/db'
import { agents } from '@/db/schema'
import { getProvider } from '@/services/provider'
import { sanitizeAgent, withAgent } from '@/controllers/agents/helpers'
import { ok } from '@/lib/response'
import { t } from '@openclaw/i18n'
import { withErrorHandler } from '@/lib'

const getAgent = withErrorHandler('getAgent')(
    withAgent()(async (c, agent) => {
        const id = c.req.param('id')!
        const sync = c.req.query('sync') === 'true'

        if (sync && agent.providerServerId) {
            try {
                const provider = getProvider()
                const serverStatus = await provider.getServer(
                    agent.providerServerId
                )
                if (
                    serverStatus.status !== agent.status ||
                    serverStatus.ip !== agent.ip
                ) {
                    await db
                        .update(agents)
                        .set({
                            status: serverStatus.status,
                            ip: serverStatus.ip
                        })
                        .where(eq(agents.id, id))
                    return ok(
                        c,
                        sanitizeAgent({
                            ...agent,
                            status: serverStatus.status,
                            ip: serverStatus.ip
                        }),
                        t('api.agentFetched')
                    )
                }
            } catch (error) {
                console.error('getAgent', error)
            }
        }

        return ok(c, sanitizeAgent(agent), t('api.agentFetched'))
    })
)

export default getAgent