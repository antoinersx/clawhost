import type { SSHKey, CreateSSHKeyData } from '@/ts/Interfaces'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '@/lib'
import { SSH_KEYS_QUERY_KEY } from '@/hooks/useSSHKeys'
import { USER_STATS_QUERY_KEY } from '@/hooks/useUser'

const useCreateSSHKey = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: CreateSSHKeyData) => api.createSSHKey(data),
        onSuccess: (newKey) => {
            queryClient.setQueryData<SSHKey[]>(SSH_KEYS_QUERY_KEY, (old) => {
                if (!old) return [newKey]
                if (old.some((k) => k.id === newKey.id)) return old
                return [...old, newKey]
            })
            queryClient.invalidateQueries({ queryKey: USER_STATS_QUERY_KEY })
        }
    })
}

export default useCreateSSHKey