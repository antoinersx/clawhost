import { api } from '@/lib'
import { createAgentLifecycleMutation } from '@/hooks/useAgents'

const useStartAgent = createAgentLifecycleMutation((id) => api.startAgent(id))

export default useStartAgent