import type { Agent } from '@/ts/Interfaces'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateAgentInCaches } from '@/hooks/useAgents'

const createAgentLifecycleMutation = (
    apiFn: (id: string) => Promise<Agent>
) => {
    const useAgentLifecycleMutation = () => {
        const queryClient = useQueryClient()

        return useMutation({
            mutationFn: (id: string) => apiFn(id),
            onSuccess: (updatedAgent, id) => {
                updateAgentInCaches(queryClient, id, updatedAgent)
            }
        })
    }

    return useAgentLifecycleMutation
}

export default createAgentLifecycleMutation