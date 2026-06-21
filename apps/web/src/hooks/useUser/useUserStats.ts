import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib'
import { USER_STATS_QUERY_KEY } from '@/hooks/useUser'

const useUserStats = () => {
    return useQuery({
        queryKey: USER_STATS_QUERY_KEY,
        queryFn: api.getUserStats,
        staleTime: Infinity
    })
}

export default useUserStats