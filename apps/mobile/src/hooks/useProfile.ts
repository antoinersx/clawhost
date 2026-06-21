import type { FirebaseUser } from '@/ts/Interfaces'

import { useQuery } from '@tanstack/react-query'
import api from '@/lib/api'
import PROFILE_QUERY_KEY from '@/hooks/PROFILE_QUERY_KEY'

const useProfile = (user: FirebaseUser | null) => {
    return useQuery({
        queryKey: PROFILE_QUERY_KEY,
        queryFn: () => api.getProfile(),
        enabled: !!user,
        staleTime: Infinity
    })
}

export default useProfile