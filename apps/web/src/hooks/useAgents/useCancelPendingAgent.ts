import type { Agent } from '@/ts/Interfaces'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '@/lib'
import { AGENTS_QUERY_KEY } from '@/hooks/useAgents'

const useCancelPendingAgent = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (pendingId: string) => api.cancelPendingAgent(pendingId),
        onSuccess: (_response, pendingId) => {
            queryClient.setQueryData<Agent[]>(AGENTS_QUERY_KEY, (old) =>
                old?.filter((c) => c.id !== `pending-${pendingId}`)
            )
        }
    })
}

export default useCancelPendingAgent