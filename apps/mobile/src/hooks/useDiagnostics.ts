import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import api from '@/lib/api'

const useDiagnostics = (id: string, enabled: boolean) => {
    const queryClient = useQueryClient()

    const status = useQuery({
        queryKey: ['claw-diagnostics', id],
        queryFn: () => api.getDiagnostics(id),
        enabled: enabled && !!id
    })
    const logs = useQuery({
        queryKey: ['claw-logs', id],
        queryFn: () => api.getLogs(id),
        enabled: enabled && !!id
    })
    const repair = useMutation({
        mutationFn: () => api.repairClaw(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['claw-diagnostics', id]
            })
            queryClient.invalidateQueries({ queryKey: ['claw-logs', id] })
        }
    })

    return { status, logs, repair }
}

export default useDiagnostics