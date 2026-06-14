import type { FirebaseUser } from '@/ts/Interfaces'

import { useInfiniteQuery } from '@tanstack/react-query'
import api from '@/lib/api'

const useBillingHistory = (user: FirebaseUser | null, limit: number = 10) => {
    return useInfiniteQuery({
        queryKey: ['billingHistory', limit],
        queryFn: ({ pageParam }) => api.getBillingHistory(pageParam, limit),
        initialPageParam: 1,
        getNextPageParam: (lastPage) =>
            lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
        enabled: !!user,
        staleTime: 5 * 60 * 1000
    })
}

export default useBillingHistory