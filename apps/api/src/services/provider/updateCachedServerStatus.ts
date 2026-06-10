import type { CacheEntry, ServerStatus } from '@/ts/Interfaces'

import { agentProvider } from '@openclaw/shared'
import { cache } from '@/services/provider'

const updateCachedServerStatus = (serverId: string, status: string) => {
    const provider = agentProvider.hetzner

    const serversEntry = cache.get(`${provider}:servers`) as
        | CacheEntry<Map<string, ServerStatus>>
        | undefined
    if (serversEntry?.data) {
        const server = serversEntry.data.get(serverId)
        if (server) {
            server.status = status
        }
    }

    const serverEntry = cache.get(`${provider}:server:${serverId}`) as
        | CacheEntry<ServerStatus>
        | undefined
    if (serverEntry?.data) {
        serverEntry.data.status = status
    }
}

export default updateCachedServerStatus