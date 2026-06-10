import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib'
import { AGENTS_QUERY_KEY } from '@/hooks/useAgents'

const useAgents = () => {
    return useQuery({
        queryKey: AGENTS_QUERY_KEY,
        queryFn: () => api.getAgents(),
        placeholderData: (previousData) => previousData,
        refetchInterval: 30_000
    })
}

export default useAgents