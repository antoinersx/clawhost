import { useInfiniteQuery } from '@tanstack/react-query'
import { api } from '@/lib'
import { ADMIN_USERS_QUERY_KEY } from '@/hooks/useAdmin'

const useAdminUsers = (
    limit: number = 20,
    search?: string,
    hasAgents?: string,
    sort?: string
) => {
    return useInfiniteQuery({
        queryKey: [...ADMIN_USERS_QUERY_KEY, limit, search, hasAgents, sort],
        queryFn: ({ pageParam }) =>
            api.getAdminUsers(pageParam, limit, search, hasAgents, sort),
        initialPageParam: 1,
        getNextPageParam: (lastPage) =>
            lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
        staleTime: 0
    })
}

export default useAdminUsers