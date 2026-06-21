import type { CacheEntry } from '@/ts/Interfaces'

import { DOMAIN } from '@/controllers/agents/helpers'
import { gatewayDefaults } from '@/lib/constants'

const READY_CACHE_TTL = 5_000
const readyCache = new Map<string, CacheEntry<boolean>>()
const readyInflight = new Map<string, Promise<boolean>>()

const checkSubdomainReady = (subdomain: string): Promise<boolean> => {
    const entry = readyCache.get(subdomain)
    if (entry && Date.now() < entry.expiry) return Promise.resolve(entry.data)

    const pending = readyInflight.get(subdomain)
    if (pending) return pending

    const promise = fetch(`https://${subdomain}.${DOMAIN}`, {
        signal: AbortSignal.timeout(gatewayDefaults.SUBDOMAIN_CHECK_TIMEOUT_MS)
    })
        .then((response) => {
            const result = response.ok
            readyCache.set(subdomain, {
                data: result,
                expiry: Date.now() + READY_CACHE_TTL
            })
            readyInflight.delete(subdomain)
            return result
        })
        .catch(() => {
            readyCache.set(subdomain, {
                data: false,
                expiry: Date.now() + READY_CACHE_TTL
            })
            readyInflight.delete(subdomain)
            return false
        })

    readyInflight.set(subdomain, promise)
    return promise
}

export default checkSubdomainReady