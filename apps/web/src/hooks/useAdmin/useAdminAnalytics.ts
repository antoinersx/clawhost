import type { AdminAnalyticsRange } from '@/ts/Types'

import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib'
import { ADMIN_ANALYTICS_QUERY_KEY } from '@/hooks/useAdmin'

const useAdminAnalytics = (range: AdminAnalyticsRange) => {
    return useQuery({
        queryKey: [...ADMIN_ANALYTICS_QUERY_KEY, range],
        queryFn: () => api.getAdminAnalytics(range),
        staleTime: 10 * 1000,
        refetchInterval: 10 * 1000
    })
}

export default useAdminAnalytics