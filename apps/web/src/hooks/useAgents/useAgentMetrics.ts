import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib'
import { usePageVisibility } from '@/hooks'
import { AGENT_METRICS_QUERY_KEY } from '@/hooks/useAgents'

const useAgentMetrics = (agentId: string, enabled: boolean) => {
    const isVisible = usePageVisibility()

    return useQuery({
        queryKey: [...AGENT_METRICS_QUERY_KEY, agentId],
        queryFn: () => api.getAgentMetrics(agentId),
        enabled,
        refetchInterval: isVisible ? 5_000 : false,
        gcTime: 10_000,
        retry: (_, error) => {
            if (
                'code' in error &&
                (error as Error & { code: number }).code === 422
            )
                return false
            return true
        }
    })
}

export default useAgentMetrics