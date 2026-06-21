import { useQuery } from '@tanstack/react-query'
import api from '@/lib/api'

const useCredentials = (id: string, enabled: boolean) => {
    return useQuery({
        queryKey: ['claw-credentials', id],
        queryFn: () => api.getCredentials(id),
        enabled: enabled && !!id
    })
}

export default useCredentials