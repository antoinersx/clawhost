import type { FirebaseUser } from '@/ts/Interfaces'

import { useQuery } from '@tanstack/react-query'
import api from '@/lib/api'

const useVolumePricing = (user: FirebaseUser | null, provider?: string) => {
    return useQuery({
        queryKey: ['volumePricing', provider],
        queryFn: () => api.getVolumePricing(provider),
        enabled: !!user,
        staleTime: Infinity
    })
}

export default useVolumePricing