import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib'
import { usePageVisibility } from '@/hooks'
import { AGENT_OVERVIEW_QUERY_KEY } from '@/hooks/useAgents'

const useAgentOverview = (agentId: string, enabled: boolean) => {
    const isVisible = usePageVisibility()

    return useQuery({
        queryKey: [...AGENT_OVERVIEW_QUERY_KEY, agentId],
        queryFn: () => api.getAgentOverview(agentId),
        enabled,
        refetchInterval: isVisible ? 30_000 : false,
        gcTime: 60_000,
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

export default useAgentOverview