import type { UpdateAdminUserMutationParams } from '@/ts/Interfaces'

import { api } from '@/lib'
import { createApiMutation } from '@/hooks'
import { ADMIN_USERS_QUERY_KEY } from '@/hooks/useAdmin'

const useUpdateAdminUser = createApiMutation(
    ({ id, data }: UpdateAdminUserMutationParams) =>
        api.updateAdminUser(id, data),
    {
        invalidateKeys: [ADMIN_USERS_QUERY_KEY]
    }
)

export default useUpdateAdminUser