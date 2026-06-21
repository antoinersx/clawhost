import { useMutation, useQueryClient } from '@tanstack/react-query'
import { agentStatus } from '@openclaw/shared'
import { api } from '@/lib'
import { updateAgentInCaches } from '@/hooks/useAgents'

const useRepairAgent = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (id: string) => api.repairAgent(id),
        onSuccess: (_data, id) => {
            updateAgentInCaches(queryClient, id, {
                status: agentStatus.running
            })
        }
    })
}

export default useRepairAgent