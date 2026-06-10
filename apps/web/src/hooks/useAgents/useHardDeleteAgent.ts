import type { AgentIdMutationParams } from '@/ts/Interfaces'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '@/lib'
import { removeAgentFromCaches } from '@/hooks/useAgents'
import { USER_STATS_QUERY_KEY } from '@/hooks/useUser'

const useHardDeleteAgent = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({ id, signal }: AgentIdMutationParams) =>
            api.hardDeleteAgent(id, signal),
        onSuccess: (_response, { id }) => {
            removeAgentFromCaches(queryClient, id)
            queryClient.invalidateQueries({ queryKey: USER_STATS_QUERY_KEY })
        }
    })
}

export default useHardDeleteAgent