import type { ServerLifecycleResult } from '@/ts/Interfaces'
import type { AgentRow } from '@/ts/Types'

import { eq } from 'drizzle-orm'
import { agentStatus } from '@openclaw/shared'
import { db } from '@/db'
import { agents } from '@/db/schema'
import { getProvider, updateCachedServerStatus } from '@/services/provider'

const LIFECYCLE_CONFIG = {
    start: {
        transitionalStatus: agentStatus.starting,
        providerMethod: 'startServer'
    },
    stop: {
        transitionalStatus: agentStatus.stopping,
        providerMethod: 'stopServer'
    },
    restart: {
        transitionalStatus: agentStatus.restarting,
        providerMethod: 'restartServer'
    }
}

const executeServerLifecycle = async (
    agent: AgentRow,
    operation: 'start' | 'stop' | 'restart'
): Promise<ServerLifecycleResult> => {
    const config = LIFECYCLE_CONFIG[operation]
    const previousStatus = agent.status

    await db
        .update(agents)
        .set({ status: config.transitionalStatus })
        .where(eq(agents.id, agent.id))

    try {
        const provider = getProvider()
        await (
            provider[config.providerMethod as keyof typeof provider] as (
                id: string
            ) => Promise<void>
        )(agent.providerServerId!)
        updateCachedServerStatus(
            agent.providerServerId!,
            config.transitionalStatus
        )
        return { success: true, status: config.transitionalStatus }
    } catch {
        await db
            .update(agents)
            .set({ status: previousStatus })
            .where(eq(agents.id, agent.id))
        return { success: false, status: previousStatus }
    }
}

export default executeServerLifecycle