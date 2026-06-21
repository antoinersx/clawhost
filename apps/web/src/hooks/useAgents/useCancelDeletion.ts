import type { AgentIdMutationParams } from '@/ts/Interfaces'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '@/lib'
import { updateAgentInCaches } from '@/hooks/useAgents'

const useCancelDeletion = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({ id, signal }: AgentIdMutationParams) =>
            api.cancelDeletion(id, signal),
        onSuccess: (updatedAgent, { id }) => {
            updateAgentInCaches(queryClient, id, updatedAgent)
        }
    })
}

export default useCancelDeletion