import type { GitHubStarsData } from '@/ts/Interfaces'

import { useQuery } from '@tanstack/react-query'
import { externalUrls } from '@openclaw/shared'
import { GITHUB_STARS_QUERY_KEY } from '@/hooks/useGitHubStars'

const formatStars = (count: number): string => {
    if (count >= 1000)
        return `${(count / 1000).toFixed(1).replace(/\.0$/, '')}k`
    return count.toString()
}

let inflightStars: Promise<GitHubStarsData> | null = null

const fetchGitHubStars = (): Promise<GitHubStarsData> => {
    if (inflightStars) return inflightStars

    inflightStars = fetch(
        externalUrls.GITHUB.REPO_INFO(externalUrls.GITHUB.CLAWHOST_REPO)
    )
        .then((response) => {
            if (!response.ok) throw new Error('Failed to fetch GitHub stars')
            return response.json()
        })
        .then((data) => {
            const count = data.stargazers_count ?? 0
            return { count, formatted: formatStars(count) }
        })
        .finally(() => {
            inflightStars = null
        })

    return inflightStars
}

const useGitHubStars = () => {
    return useQuery({
        queryKey: GITHUB_STARS_QUERY_KEY,
        queryFn: fetchGitHubStars
    })
}

export default useGitHubStars