import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib'
import { usePageVisibility } from '@/hooks'
import { AGENT_VERSION_QUERY_KEY } from '@/hooks/useAgents'

const useAgentVersion = (agentId: string, enabled: boolean) => {
    const isVisible = usePageVisibility()

    return useQuery({
        queryKey: [...AGENT_VERSION_QUERY_KEY, agentId],
        queryFn: () => api.getAgentVersion(agentId),
        enabled,
        staleTime: 1000 * 60 * 5,
        refetchInterval: isVisible ? 10_000 : false,
        retry: 1
    })
}

export default useAgentVersion