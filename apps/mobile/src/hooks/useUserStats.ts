import type { FirebaseUser } from '@/ts/Interfaces'

import { useQuery } from '@tanstack/react-query'
import api from '@/lib/api'

const useUserStats = (user: FirebaseUser | null) => {
    return useQuery({
        queryKey: ['userStats'],
        queryFn: () => api.getUserStats(),
        enabled: !!user,
        staleTime: Infinity
    })
}

export default useUserStats