import type { AffiliatePeriod } from '@/ts/Types'

import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib'
import { AFFILIATE_QUERY_KEY } from '@/hooks/useAffiliate'

const useAffiliate = (period: AffiliatePeriod) => {
    return useQuery({
        queryKey: [...AFFILIATE_QUERY_KEY, period],
        queryFn: () => api.getAffiliate(period),
        refetchOnWindowFocus: true,
        refetchOnMount: 'always',
        staleTime: 0,
        refetchInterval: 10_000
    })
}

export default useAffiliate