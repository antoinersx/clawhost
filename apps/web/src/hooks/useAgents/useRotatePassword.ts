import type { RotatePasswordMutationParams } from '@/ts/Interfaces'

import { api } from '@/lib'
import { createApiMutation } from '@/hooks'
import { AGENTS_QUERY_KEY } from '@/hooks/useAgents'

const useRotatePassword = createApiMutation(
    ({ id, password, signal }: RotatePasswordMutationParams) =>
        api.rotatePassword(id, password, signal),
    {
        invalidateKeys: [AGENTS_QUERY_KEY]
    }
)

export default useRotatePassword