import type { FirebaseUser } from '@/ts/Interfaces'

import { useQuery } from '@tanstack/react-query'
import api from '@/lib/api'

const useFiles = (user: FirebaseUser | null, id: string) => {
    return useQuery({
        queryKey: ['claw-files', id],
        queryFn: () => api.listFiles(id),
        enabled: !!user && !!id
    })
}

export default useFiles