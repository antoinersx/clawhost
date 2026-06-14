import type { RenameClawData } from '@/ts/Interfaces'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import api from '@/lib/api'

const useClawActions = (id: string) => {
    const queryClient = useQueryClient()

    const invalidate = (): void => {
        queryClient.invalidateQueries({ queryKey: ['claws'] })
        queryClient.invalidateQueries({ queryKey: ['claw', id] })
    }

    const start = useMutation({
        mutationFn: () => api.startClaw(id),
        onSuccess: invalidate
    })
    const stop = useMutation({
        mutationFn: () => api.stopClaw(id),
        onSuccess: invalidate
    })
    const restart = useMutation({
        mutationFn: () => api.restartClaw(id),
        onSuccess: invalidate
    })
    const sync = useMutation({
        mutationFn: () => api.syncClaw(id),
        onSuccess: invalidate
    })
    const cancelDeletion = useMutation({
        mutationFn: () => api.cancelDeletion(id),
        onSuccess: invalidate
    })
    const rename = useMutation({
        mutationFn: (data: RenameClawData) => api.renameClaw(id, data),
        onSuccess: invalidate
    })
    const remove = useMutation({
        mutationFn: () => api.deleteClaw(id),
        onSuccess: invalidate
    })
    const rotatePassword = useMutation({
        mutationFn: () => api.rotatePassword(id),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ['claw-credentials', id]
            })
    })
    const rotateGatewayToken = useMutation({
        mutationFn: () => api.rotateGatewayToken(id),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ['claw-credentials', id]
            })
    })

    return {
        start,
        stop,
        restart,
        sync,
        cancelDeletion,
        rename,
        remove,
        rotatePassword,
        rotateGatewayToken
    }
}

export default useClawActions