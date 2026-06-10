import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib'
import { ADMIN_USERS_QUERY_KEY } from '@/hooks/useAdmin'

const useAdminUserDetail = (userId: string | null) => {
    return useQuery({
        queryKey: [...ADMIN_USERS_QUERY_KEY, 'detail', userId],
        queryFn: () => api.getAdminUserDetail(userId!),
        enabled: !!userId,
        staleTime: 2 * 60 * 1000
    })
}

export default useAdminUserDetail