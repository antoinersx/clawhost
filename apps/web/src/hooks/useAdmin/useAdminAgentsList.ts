import { useInfiniteQuery } from '@tanstack/react-query'
import { api } from '@/lib'
import { ADMIN_AGENTS_QUERY_KEY } from '@/hooks/useAgents'

const useAdminAgentsList = (
    limit: number = 20,
    search?: string,
    sort?: string
) => {
    return useInfiniteQuery({
        queryKey: [...ADMIN_AGENTS_QUERY_KEY, limit, search, sort],
        queryFn: ({ pageParam }) =>
            api.listAdminAgents(pageParam, limit, search, sort),
        initialPageParam: 1,
        getNextPageParam: (lastPage) =>
            lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
        staleTime: 0
    })
}

export default useAdminAgentsList