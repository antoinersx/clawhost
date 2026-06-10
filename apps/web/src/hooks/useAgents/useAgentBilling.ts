import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib'
import { AGENT_BILLING_QUERY_KEY } from '@/hooks/useAgents'

const useAgentBilling = (agentId: string, enabled: boolean = true) => {
    return useQuery({
        queryKey: [...AGENT_BILLING_QUERY_KEY, agentId],
        queryFn: () => api.getAgentBilling(agentId),
        staleTime: 0,
        gcTime: 0,
        refetchOnMount: 'always',
        enabled
    })
}

export default useAgentBilling