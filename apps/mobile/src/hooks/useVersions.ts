import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import api from '@/lib/api'

const useVersions = (id: string, enabled: boolean) => {
    const queryClient = useQueryClient()

    const versions = useQuery({
        queryKey: ['claw-versions', id],
        queryFn: () => api.getVersions(id),
        enabled: enabled && !!id
    })
    const install = useMutation({
        mutationFn: (version: string) => api.installVersion(id, version),
        onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: ['claw-versions', id] })
    })

    return { versions, install }
}

export default useVersions