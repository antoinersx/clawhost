import type { FirebaseUser } from '@/ts/Interfaces'

import { useQuery } from '@tanstack/react-query'
import api from '@/lib/api'

const usePlanAvailability = (user: FirebaseUser | null, provider?: string) => {
    return useQuery({
        queryKey: ['plan-availability', provider],
        queryFn: () => api.getPlanAvailability(provider),
        enabled: !!user,
        staleTime: Infinity
    })
}

export default usePlanAvailability