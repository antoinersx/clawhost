import type { AgentIdMutationParams } from '@/ts/Interfaces'

import { api } from '@/lib'
import { createApiMutation } from '@/hooks'
import { AGENTS_QUERY_KEY, ADMIN_AGENTS_QUERY_KEY } from '@/hooks/useAgents'

const useReinstallAgent = createApiMutation(
    ({ id, signal }: AgentIdMutationParams) => api.reinstallAgent(id, signal),
    {
        invalidateKeys: [AGENTS_QUERY_KEY, ADMIN_AGENTS_QUERY_KEY]
    }
)

export default useReinstallAgent