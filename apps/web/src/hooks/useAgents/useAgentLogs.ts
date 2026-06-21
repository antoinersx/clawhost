import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib'
import { usePageVisibility } from '@/hooks'
import { AGENT_LOGS_QUERY_KEY } from '@/hooks/useAgents'

const useAgentLogs = (agentId: string, enabled: boolean) => {
    const isVisible = usePageVisibility()

    return useQuery({
        queryKey: [...AGENT_LOGS_QUERY_KEY, agentId],
        queryFn: () => api.getAgentLogs(agentId),
        enabled,
        refetchInterval: isVisible ? 10_000 : false,
        gcTime: 30_000
    })
}

export default useAgentLogs