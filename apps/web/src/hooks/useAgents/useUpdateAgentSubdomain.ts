import type { UpdateAgentSubdomainMutationParams } from '@/ts/Interfaces'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '@/lib'
import { updateAgentInCaches } from '@/hooks/useAgents'

const useUpdateAgentSubdomain = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({
            id,
            subdomain,
            signal
        }: UpdateAgentSubdomainMutationParams) =>
            api.updateAgentSubdomain(id, { subdomain }, signal),
        onSuccess: (updatedAgent, { id }) => {
            updateAgentInCaches(queryClient, id, updatedAgent)
        }
    })
}

export default useUpdateAgentSubdomain