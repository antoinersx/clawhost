import { useMutation } from '@tanstack/react-query'
import api from '@/lib/api'

const useReinstall = (id: string) => {
    return useMutation({
        mutationFn: () => api.reinstallClaw(id)
    })
}

export default useReinstall