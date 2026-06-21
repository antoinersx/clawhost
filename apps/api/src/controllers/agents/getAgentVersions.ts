import type { AuthenticatedContext } from '@/ts/Types'
import type {
    CacheEntry,
    NpmRegistryVersionsResponse,
    NpmDownloadsResponse,
    GitHubRelease,
    VersionsCacheData
} from '@/ts/Interfaces'

import { externalUrls, UNKNOWN_VERSION } from '@openclaw/shared'
import {
    findUserAgent,
    fetchAgentVersion,
    getAgentConfig
} from '@/controllers/agents/helpers'
import { t } from '@openclaw/i18n'
import { ok, fail } from '@/lib/response'

const VERSIONS_CACHE_TTL = 30 * 60 * 1000
const NPM_REGISTRY_ERROR = 'npm_registry_error'
const GITHUB_REGISTRY_ERROR = 'github_registry_error'

const versionsCaches: Record<string, CacheEntry<VersionsCacheData> | null> = {}

const fetchNpmVersions = async (
    npmPackage: string
): Promise<VersionsCacheData> => {
    const cacheKey = `npm:${npmPackage}`
    const cached = versionsCaches[cacheKey]
    if (cached && Date.now() < cached.expiry) return cached.data

    const registryUrl = externalUrls.NPM.REGISTRY(npmPackage)
    const downloadsUrl = externalUrls.NPM.DOWNLOADS(npmPackage)

    const [registryResponse, downloadsResponse] = await Promise.all([
        fetch(registryUrl, {
            headers: { Accept: 'application/json' }
        }),
        fetch(downloadsUrl).catch(() => null)
    ])

    if (!registryResponse.ok) throw new Error(NPM_REGISTRY_ERROR)

    const registry =
        (await registryResponse.json()) as NpmRegistryVersionsResponse

    let downloadCounts: Record<string, number> = {}
    if (downloadsResponse?.ok) {
        const downloadsData =
            (await downloadsResponse.json()) as NpmDownloadsResponse
        downloadCounts = downloadsData.downloads || {}
    }

    const latestVersion = registry['dist-tags']?.latest || UNKNOWN_VERSION
    const timeEntries = registry.time || {}

    const versions = Object.entries(timeEntries)
        .filter(([key]) => /^\d/.test(key))
        .map(([version, publishedAt]) => ({
            version,
            publishedAt,
            downloads: downloadCounts[version] || 0
        }))
        .sort(
            (a, b) =>
                new Date(b.publishedAt).getTime() -
                new Date(a.publishedAt).getTime()
        )

    const data = { latestVersion, versions }
    versionsCaches[cacheKey] = { data, expiry: Date.now() + VERSIONS_CACHE_TTL }
    return data
}

const fetchGitHubVersions = async (
    repo: string
): Promise<VersionsCacheData> => {
    const cacheKey = `gh:${repo}`
    const cached = versionsCaches[cacheKey]
    if (cached && Date.now() < cached.expiry) return cached.data

    const response = await fetch(
        `${externalUrls.GITHUB.API}/repos/${repo}/releases?per_page=100`,
        { headers: { Accept: 'application/vnd.github+json' } }
    )

    if (!response.ok) throw new Error(GITHUB_REGISTRY_ERROR)

    const releases = (await response.json()) as GitHubRelease[]

    const stableReleases = releases.filter((r) => !r.prerelease && !r.draft)

    const latestVersion = stableReleases[0]
        ? stableReleases[0].tag_name.replace(/^v/, '')
        : UNKNOWN_VERSION

    const versions = stableReleases.map((r) => ({
        version: r.tag_name.replace(/^v/, ''),
        publishedAt: r.published_at,
        downloads: 0
    }))

    const data = { latestVersion, versions }
    versionsCaches[cacheKey] = { data, expiry: Date.now() + VERSIONS_CACHE_TTL }
    return data
}

const getAgentVersions = async (c: AuthenticatedContext) => {
    try {
        const userId = c.get('userId')
        const id = c.req.param('id')!
        const agent = await findUserAgent(userId, id, c.get('isAdmin'))

        if (!agent) return fail(c, t('api.agentNotFound'), 404)

        if (!agent.ip || !agent.rootPassword)
            return fail(c, t('api.failedToGetVersions'), 400)

        const agentConfig = getAgentConfig(agent.agentType)

        const fetchVersionsData = agentConfig.githubRepo
            ? fetchGitHubVersions(agentConfig.githubRepo)
            : agentConfig.npmPackage
              ? fetchNpmVersions(agentConfig.npmPackage)
              : null

        if (!fetchVersionsData)
            return fail(c, t('api.failedToGetVersions'), 400)

        const [currentVersion, cached] = await Promise.all([
            fetchAgentVersion(agent.ip, agent.rootPassword, agent.agentType),
            fetchVersionsData
        ])

        return ok(c, {
            currentVersion,
            latestVersion: cached.latestVersion,
            versions: cached.versions
        })
    } catch (error) {
        console.error('getAgentVersions', error)
        if (error instanceof Error && error.message === NPM_REGISTRY_ERROR)
            return fail(c, t('api.failedToGetVersions'), 502)
        if (error instanceof Error && error.message === GITHUB_REGISTRY_ERROR)
            return fail(c, t('api.failedToGetVersions'), 502)
        return fail(c, t('api.failedToGetVersions'), 500)
    }
}

export default getAgentVersions