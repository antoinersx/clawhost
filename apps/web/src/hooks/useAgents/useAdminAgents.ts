import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib'
import { ADMIN_AGENTS_QUERY_KEY } from '@/hooks/useAgents'

const useAdminAgents = (enabled = true) => {
    return useQuery({
        queryKey: ADMIN_AGENTS_QUERY_KEY,
        queryFn: () => api.getAdminAgents(),
        placeholderData: (previousData) => previousData,
        refetchInterval: 30_000,
        enabled
    })
}

export default useAdminAgents