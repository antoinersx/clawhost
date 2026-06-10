import { useInfiniteQuery } from '@tanstack/react-query'
import { api } from '@/lib'
import { ADMIN_SSH_KEYS_QUERY_KEY } from '@/hooks/useAdmin'

const useAdminSSHKeysList = (
    limit: number = 20,
    search?: string,
    sort?: string
) => {
    return useInfiniteQuery({
        queryKey: [...ADMIN_SSH_KEYS_QUERY_KEY, limit, search, sort],
        queryFn: ({ pageParam }) =>
            api.listAdminSSHKeys(pageParam, limit, search, sort),
        initialPageParam: 1,
        getNextPageParam: (lastPage) =>
            lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
        staleTime: 0
    })
}

export default useAdminSSHKeysList