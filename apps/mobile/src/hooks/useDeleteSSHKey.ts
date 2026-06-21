import { useMutation, useQueryClient } from '@tanstack/react-query'
import api from '@/lib/api'

const useDeleteSSHKey = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (id: string) => api.deleteSSHKey(id),
        onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: ['ssh-keys'] })
    })
}

export default useDeleteSSHKey