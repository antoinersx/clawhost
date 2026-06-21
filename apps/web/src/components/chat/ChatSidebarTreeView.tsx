import type { FC, ReactNode } from 'react'
import type { ChatSidebarTreeViewProps } from '@/ts/Interfaces'

import { Fragment, useMemo } from 'react'
import { getStatusConfig } from '@/lib/agent-utils'
import { ChatSidebarAgentHeader } from '@/components/chat'

const ChatSidebarTreeView: FC<ChatSidebarTreeViewProps> = ({
    agents,
    selectedAgentId,
    onOpenAgentSettings
}): ReactNode => {
    const statusConfigs = useMemo(() => getStatusConfig(), [])

    return (
        <Fragment>
            {agents.map((agent) => {
                const status =
                    statusConfigs[agent.status] || statusConfigs.unknown

                return (
                    <div key={agent.id} className='mb-1.5 last:mb-0'>
                        <ChatSidebarAgentHeader
                            agent={agent}
                            isSelected={selectedAgentId === agent.id}
                            statusConfig={status}
                            onOpenAgentSettings={onOpenAgentSettings}
                        />
                    </div>
                )
            })}
        </Fragment>
    )
}

export default ChatSidebarTreeView