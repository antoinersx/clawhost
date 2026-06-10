import { getAgentConfig } from '@/controllers/agents/helpers'

const getBaseDir = (agentType?: string | null): string =>
    getAgentConfig(agentType).configDir

export default getBaseDir