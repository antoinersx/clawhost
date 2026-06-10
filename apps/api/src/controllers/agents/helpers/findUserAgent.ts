import { eq } from 'drizzle-orm'
import { db } from '@/db'
import { agents } from '@/db/schema'
import { decryptAgentSecrets } from '@/controllers/agents/helpers'

const findUserAgent = async (
    userId: string,
    agentId: string,
    isAdmin = false
) => {
    const agent = await db
        .select()
        .from(agents)
        .where(eq(agents.id, agentId))
        .limit(1)

    if (!agent[0]) return null
    if (agent[0].userId !== userId && !isAdmin) return null

    return decryptAgentSecrets(agent[0])
}

export default findUserAgent