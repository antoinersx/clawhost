import type { Agent } from '@/ts/Interfaces'
import type { QueryClient } from '@tanstack/react-query'

import { AGENTS_QUERY_KEY, ADMIN_AGENTS_QUERY_KEY } from '@/hooks/useAgents'

const removeAgentFromCaches = (queryClient: QueryClient, id: string) => {
    queryClient.setQueryData<Agent[]>(AGENTS_QUERY_KEY, (old) =>
        old?.filter((c) => c.id !== id)
    )
    queryClient.setQueryData<Agent[]>(ADMIN_AGENTS_QUERY_KEY, (old) =>
        old?.filter((c) => c.id !== id)
    )
}

export default removeAgentFromCaches