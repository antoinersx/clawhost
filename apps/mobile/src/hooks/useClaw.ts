import type { FirebaseUser } from '@/ts/Interfaces'

import { useQuery } from '@tanstack/react-query'
import api from '@/lib/api'

const useClaw = (user: FirebaseUser | null, id: string) => {
    return useQuery({
        queryKey: ['claw', id],
        queryFn: () => api.getClaw(id),
        refetchInterval: 5000,
        enabled: !!user && !!id
    })
}

export default useClaw