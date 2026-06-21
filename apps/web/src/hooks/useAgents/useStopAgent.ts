import { api } from '@/lib'
import { createAgentLifecycleMutation } from '@/hooks/useAgents'

const useStopAgent = createAgentLifecycleMutation((id) => api.stopAgent(id))

export default useStopAgent