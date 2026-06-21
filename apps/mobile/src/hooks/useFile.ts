import type { UpdateClawFileData } from '@/ts/Interfaces'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import api from '@/lib/api'

const useFile = (id: string, path: string) => {
    const queryClient = useQueryClient()

    const file = useQuery({
        queryKey: ['claw-file', id, path],
        queryFn: () => api.readFile(id, path),
        enabled: !!id && !!path
    })
    const update = useMutation({
        mutationFn: (data: UpdateClawFileData) => api.updateFile(id, data),
        onSuccess: () =>
            queryClient.invalidateQueries({
                queryKey: ['claw-file', id, path]
            })
    })

    return { file, update }
}

export default useFile