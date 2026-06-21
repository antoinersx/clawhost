import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib'
import { ADMIN_STATS_QUERY_KEY } from '@/hooks/useAdmin'

const useAdminStats = () => {
    return useQuery({
        queryKey: ADMIN_STATS_QUERY_KEY,
        queryFn: api.getAdminStats,
        staleTime: 30 * 1000,
        refetchInterval: 30 * 1000
    })
}

export default useAdminStats