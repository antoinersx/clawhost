import type { UpdateProfileData } from '@/ts/Interfaces'

import { api } from '@/lib'
import { createApiMutation } from '@/hooks'
import { PROFILE_QUERY_KEY } from '@/hooks/useUser'

const useUpdateProfile = createApiMutation(
    (data: UpdateProfileData) => api.updateProfile(data),
    {
        invalidateKeys: [PROFILE_QUERY_KEY]
    }
)

export default useUpdateProfile