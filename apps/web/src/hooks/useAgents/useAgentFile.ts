import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib'
import { AGENT_FILE_QUERY_KEY } from '@/hooks/useAgents'

const useAgentFile = (agentId: string, path: string, enabled: boolean) => {
    return useQuery({
        queryKey: [...AGENT_FILE_QUERY_KEY, agentId, path],
        queryFn: () => api.readAgentFile(agentId, path),
        enabled: enabled && path.length > 0,
        gcTime: 0
    })
}

export default useAgentFile