import type { FC, ReactNode } from 'react'
import type { AgentTypeMascotProps } from '@/ts/Interfaces'

import { agentType as agentTypeConst } from '@openclaw/shared'
import { HermesIcon } from '@/components/icons'
import { AgentMascot } from '@/components/shared'

const AgentTypeMascot: FC<AgentTypeMascotProps> = ({
    agentType,
    className
}): ReactNode => {
    if (agentType === agentTypeConst.HERMES)
        return <HermesIcon size='100%' className={className} />
    return <AgentMascot className={className} />
}

export default AgentTypeMascot