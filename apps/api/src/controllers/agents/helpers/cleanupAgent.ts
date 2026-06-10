import type { AgentCleanupData } from '@/ts/Interfaces'

import { eq } from 'drizzle-orm'
import { db } from '@/db'
import { agents, volumes } from '@/db/schema'
import { getProvider } from '@/services/provider'
import { cloudflare, hostKeyStore } from '@/services'

const cleanupAgent = async (
    agentId: string,
    agent: AgentCleanupData
): Promise<void> => {
    const provider = getProvider()

    if (agent.ip) hostKeyStore.clear(agent.ip)

    const agentVolumes = await db
        .select()
        .from(volumes)
        .where(eq(volumes.agentId, agentId))

    await Promise.allSettled([
        ...agentVolumes
            .filter((vol) => vol.providerVolumeId)
            .map(async (vol) => {
                await provider.detachVolume(vol.providerVolumeId!)
                await provider.deleteVolume(vol.providerVolumeId!)
            }),
        agent.subdomain
            ? cloudflare
                  .findDNSRecord(agent.subdomain)
                  .then((rec) =>
                      rec ? cloudflare.deleteDNSRecord(rec.id) : null
                  )
            : Promise.resolve(),
        agent.providerServerId
            ? provider.deleteServer(agent.providerServerId)
            : Promise.resolve()
    ])

    await db.delete(volumes).where(eq(volumes.agentId, agentId))
    await db.delete(agents).where(eq(agents.id, agentId))
}

export default cleanupAgent