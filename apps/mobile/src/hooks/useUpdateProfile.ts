import type { UpdateProfileData } from '@/ts/Interfaces'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import api from '@/lib/api'
import PROFILE_QUERY_KEY from '@/hooks/PROFILE_QUERY_KEY'

const useUpdateProfile = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: UpdateProfileData) => api.updateProfile(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: PROFILE_QUERY_KEY })
        }
    })
}

export default useUpdateProfile