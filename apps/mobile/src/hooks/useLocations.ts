import type { FirebaseUser } from '@/ts/Interfaces'

import { useQuery } from '@tanstack/react-query'
import api from '@/lib/api'

const useLocations = (user: FirebaseUser | null, provider?: string) => {
    return useQuery({
        queryKey: ['locations', provider],
        queryFn: () => api.getLocations(provider),
        enabled: !!user,
        staleTime: Infinity
    })
}

export default useLocations