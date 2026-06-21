import type { CreateSSHKeyData } from '@/ts/Interfaces'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import api from '@/lib/api'

const useCreateSSHKey = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data: CreateSSHKeyData) => api.createSSHKey(data),
        onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: ['ssh-keys'] })
    })
}

export default useCreateSSHKey