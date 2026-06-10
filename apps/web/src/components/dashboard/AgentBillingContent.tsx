import type { FC, ReactNode } from 'react'
import type { AgentBillingContentProps } from '@/ts/Interfaces'

import {
    AgentBillingSubscription,
    AgentBillingHistory
} from '@/components/dashboard'

const AgentBillingContent: FC<AgentBillingContentProps> = ({
    agent,
    plans,
    readOnly
}): ReactNode => {
    const plan = plans.find((p) => p.id === agent.planId)

    return (
        <div className='h-full space-y-3 overflow-y-auto px-5 py-3.5'>
            <AgentBillingSubscription
                agent={agent}
                plan={plan}
                readOnly={readOnly}
            />
            <div className='h-5' />
            <AgentBillingHistory agentId={agent.id} readOnly={readOnly} />
        </div>
    )
}

export default AgentBillingContent