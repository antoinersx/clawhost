import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib'
import { PLAN_AVAILABILITY_QUERY_KEY } from '@/hooks/usePlans'

const usePlanAvailability = () => {
    return useQuery({
        queryKey: PLAN_AVAILABILITY_QUERY_KEY,
        queryFn: api.getPlanAvailability,
        staleTime: 60_000,
        refetchInterval: 60_000,
        retry: false
    })
}

export default usePlanAvailability