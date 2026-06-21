import { useInfiniteQuery } from '@tanstack/react-query'
import { api } from '@/lib'
import { ADMIN_REFERRALS_QUERY_KEY } from '@/hooks/useAdmin'

const useAdminReferralsList = (limit: number = 20, sort?: string) => {
    return useInfiniteQuery({
        queryKey: [...ADMIN_REFERRALS_QUERY_KEY, limit, sort],
        queryFn: ({ pageParam }) =>
            api.listAdminReferrals(pageParam, limit, sort),
        initialPageParam: 1,
        getNextPageParam: (lastPage) =>
            lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
        staleTime: 0
    })
}

export default useAdminReferralsList