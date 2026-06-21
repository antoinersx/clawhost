import type { FirebaseUser } from '@/ts/Interfaces'

import { useQuery } from '@tanstack/react-query'
import api from '@/lib/api'

const useSSHKeys = (user: FirebaseUser | null) => {
    return useQuery({
        queryKey: ['ssh-keys'],
        queryFn: api.getSSHKeys,
        enabled: !!user
    })
}

export default useSSHKeys