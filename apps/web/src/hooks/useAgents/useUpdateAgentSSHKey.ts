import type { UpdateAgentSSHKeyMutationParams } from '@/ts/Interfaces'

import { api } from '@/lib'
import { createApiMutation } from '@/hooks'
import { AGENTS_QUERY_KEY } from '@/hooks/useAgents'

const useUpdateAgentSSHKey = createApiMutation(
    ({ id, sshKeyId, signal }: UpdateAgentSSHKeyMutationParams) =>
        api.updateAgentSSHKey(id, sshKeyId, signal),
    {
        invalidateKeys: [AGENTS_QUERY_KEY]
    }
)

export default useUpdateAgentSSHKey