import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib'
import { AGENT_FILES_QUERY_KEY } from '@/hooks/useAgents'

const useAgentFiles = (agentId: string, enabled: boolean) => {
    return useQuery({
        queryKey: [...AGENT_FILES_QUERY_KEY, agentId],
        queryFn: () => api.listAgentFiles(agentId),
        enabled,
        gcTime: 0
    })
}

export default useAgentFiles