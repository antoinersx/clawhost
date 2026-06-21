import type { PolarSubscription } from '@/ts/Interfaces'

import { get } from '@/lib/polar/subscriptions'

const getMany = async (
    ids: string[]
): Promise<Map<string, PolarSubscription>> => {
    const result = new Map<string, PolarSubscription>()
    if (ids.length === 0) return result

    const unique = [...new Set(ids)]
    const results = await Promise.all(
        unique.map((id) => get(id).then((sub) => ({ id, sub })))
    )

    for (const { id, sub } of results) {
        if (sub) result.set(id, sub)
    }

    return result
}

export default getMany