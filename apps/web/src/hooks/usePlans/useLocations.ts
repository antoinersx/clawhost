import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib'
import { LOCATIONS_QUERY_KEY } from '@/hooks/usePlans'

const useLocations = () => {
    return useQuery({
        queryKey: LOCATIONS_QUERY_KEY,
        queryFn: api.getLocations,
        staleTime: 60_000,
        refetchInterval: 60_000,
        retry: false
    })
}

export default useLocations