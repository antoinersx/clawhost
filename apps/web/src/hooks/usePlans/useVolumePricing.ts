import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib'
import { VOLUME_PRICING_QUERY_KEY } from '@/hooks/usePlans'

const useVolumePricing = () => {
    return useQuery({
        queryKey: VOLUME_PRICING_QUERY_KEY,
        queryFn: api.getVolumePricing,
        staleTime: 60_000,
        refetchInterval: 60_000,
        retry: false
    })
}

export default useVolumePricing