import type { AgentIdMutationParams } from '@/ts/Interfaces'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '@/lib'
import { updateAgentInCaches, removeAgentFromCaches } from '@/hooks/useAgents'
import { USER_STATS_QUERY_KEY } from '@/hooks/useUser'

const useDeleteAgent = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({ id, signal }: AgentIdMutationParams) =>
            api.deleteAgent(id, signal),
        onSuccess: (response, { id }) => {
            if (response.agent) {
                updateAgentInCaches(queryClient, id, response.agent)
            } else {
                removeAgentFromCaches(queryClient, id)
            }
            queryClient.invalidateQueries({ queryKey: USER_STATS_QUERY_KEY })
        }
    })
}

export default useDeleteAgent