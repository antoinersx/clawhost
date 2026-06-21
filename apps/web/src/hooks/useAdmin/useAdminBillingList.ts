import { useInfiniteQuery } from '@tanstack/react-query'
import { api } from '@/lib'
import { ADMIN_BILLING_QUERY_KEY } from '@/hooks/useAdmin'

const useAdminBillingList = (limit: number = 20) => {
    return useInfiniteQuery({
        queryKey: [...ADMIN_BILLING_QUERY_KEY, limit],
        queryFn: ({ pageParam }) => api.listAdminBilling(pageParam, limit),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            const totalPages = Math.ceil(lastPage.total / limit)
            const nextPage = allPages.length + 1
            return nextPage <= totalPages ? nextPage : undefined
        },
        staleTime: 0
    })
}

export default useAdminBillingList