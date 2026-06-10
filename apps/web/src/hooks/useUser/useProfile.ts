import type { UseProfileOptions } from '@/ts/Interfaces'

import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib'
import { PROFILE_QUERY_KEY } from '@/hooks/useUser'

const useProfile = (options?: UseProfileOptions) => {
    return useQuery({
        queryKey: PROFILE_QUERY_KEY,
        queryFn: api.getProfile,
        enabled: options?.enabled ?? true,
        staleTime: options?.staleTime ?? Infinity,
        refetchInterval: options?.refetchInterval ?? 10_000
    })
}

export default useProfile