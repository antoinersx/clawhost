import type { RotateGatewayTokenMutationParams } from '@/ts/Interfaces'

import { api } from '@/lib'
import { createApiMutation } from '@/hooks'
import { AGENTS_QUERY_KEY } from '@/hooks/useAgents'

const useRotateGatewayToken = createApiMutation(
    ({ id, token, signal }: RotateGatewayTokenMutationParams) =>
        api.rotateGatewayToken(id, token, signal),
    {
        invalidateKeys: [AGENTS_QUERY_KEY]
    }
)

export default useRotateGatewayToken