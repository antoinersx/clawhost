import type { Context } from 'hono'
import type {
    AgentStarCount,
    CacheEntry,
    StarsCacheData
} from '@/ts/Interfaces'

import { agentType, externalUrls } from '@openclaw/shared'
import { ok } from '@/lib/response'
import { t } from '@openclaw/i18n'
import { withErrorHandler } from '@/lib'

const STARS_CACHE_TTL = 60 * 60 * 1000

const GITHUB_REPOS: Record<string, string> = {
    [agentType.OPENCLAW]: 'openclaw/openclaw',
    [agentType.HERMES]: 'NousResearch/hermes-agent'
}

let starsCache: CacheEntry<StarsCacheData> | null = null

const fetchStars = async (repo: string): Promise<number> => {
    const response = await fetch(`${externalUrls.GITHUB.API}/repos/${repo}`, {
        headers: { Accept: 'application/vnd.github+json' }
    })
    if (!response.ok) return 0
    const data = (await response.json()) as { stargazers_count?: number }
    return data.stargazers_count ?? 0
}

const getAgentStars = withErrorHandler('getAgentStars')(async (c: Context) => {
    if (starsCache && Date.now() < starsCache.expiry) {
        return ok(
            c,
            { stars: starsCache.data.stars },
            t('api.agentStarsFetched')
        )
    }

    const stars: AgentStarCount[] = await Promise.all(
        Object.entries(GITHUB_REPOS).map(async ([type, repo]) => ({
            agentType: type,
            stars: await fetchStars(repo)
        }))
    )

    starsCache = {
        data: { stars },
        expiry: Date.now() + STARS_CACHE_TTL
    }

    return ok(c, { stars }, t('api.agentStarsFetched'))
})

export default getAgentStars