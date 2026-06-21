import type { FirebaseUser } from '@/ts/Interfaces'

import { useQuery } from '@tanstack/react-query'
import api from '@/lib/api'

const CLAWS_QUERY_KEY = ['claws']

const useClaws = (user: FirebaseUser | null) => {
    return useQuery({
        queryKey: CLAWS_QUERY_KEY,
        queryFn: () => api.getClaws(),
        refetchInterval: 3000,
        enabled: !!user
    })
}

export default useClaws