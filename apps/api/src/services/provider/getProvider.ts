import type { CloudProvider } from '@/ts/Interfaces'

import { hetzner } from '@/services'
import { cache } from '@/services/provider'

const CACHE_TTL = 5 * 60 * 1000
const SERVERS_CACHE_TTL = 10 * 1000

const inflight = new Map<string, Promise<unknown>>()

const cached = <T>(
    key: string,
    fn: () => Promise<T>,
    ttl = CACHE_TTL
): Promise<T> => {
    const entry = cache.get(key)
    if (entry && Date.now() < entry.expiry)
        return Promise.resolve(entry.data as T)

    const pending = inflight.get(key)
    if (pending) return pending as Promise<T>

    const promise = fn()
        .then((data) => {
            cache.set(key, { data, expiry: Date.now() + ttl })
            inflight.delete(key)
            return data
        })
        .catch((err) => {
            inflight.delete(key)
            throw err
        })

    inflight.set(key, promise)
    return promise
}

let wrappedProvider: CloudProvider | null = null

const getProvider = (): CloudProvider => {
    if (wrappedProvider) return wrappedProvider

    const invalidateServer = (serverId: string) => {
        cache.delete('hetzner:servers')
        cache.delete(`hetzner:server:${serverId}`)
    }

    const wrapped: CloudProvider = {
        ...hetzner,
        getServer: (serverId: string) =>
            cached(
                `hetzner:server:${serverId}`,
                () => hetzner.getServer(serverId),
                SERVERS_CACHE_TTL
            ),
        getServers: () =>
            cached(
                'hetzner:servers',
                () => hetzner.getServers(),
                SERVERS_CACHE_TTL
            ),
        getServerTypes: () =>
            cached('hetzner:serverTypes', () => hetzner.getServerTypes()),
        getLocations: () =>
            cached('hetzner:locations', () => hetzner.getLocations()),
        getRawServerTypes: () =>
            cached('hetzner:rawServerTypes', () => hetzner.getRawServerTypes()),
        getDatacenters: () =>
            cached('hetzner:datacenters', () => hetzner.getDatacenters()),
        getVolumePricing: () =>
            cached('hetzner:volumePricing', () => hetzner.getVolumePricing()),
        createServer: async (...args) => {
            const result = await hetzner.createServer(...args)
            cache.delete('hetzner:servers')
            return result
        },
        startServer: async (serverId) => {
            await hetzner.startServer(serverId)
            invalidateServer(serverId)
        },
        stopServer: async (serverId) => {
            await hetzner.stopServer(serverId)
            invalidateServer(serverId)
        },
        restartServer: async (serverId) => {
            await hetzner.restartServer(serverId)
            invalidateServer(serverId)
        },
        deleteServer: async (serverId) => {
            await hetzner.deleteServer(serverId)
            invalidateServer(serverId)
        }
    }

    wrappedProvider = wrapped
    return wrapped
}

export default getProvider