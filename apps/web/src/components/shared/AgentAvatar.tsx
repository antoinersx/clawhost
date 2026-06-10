import type { FC, ReactNode } from 'react'
import type { AgentAvatarProps } from '@/ts/Interfaces'

import { AgentTypeMascot } from '@/components/shared'
import { AGENT_AVATAR_SIZE } from '@/lib/constants'

const sizeMap = {
    [AGENT_AVATAR_SIZE.SM]: {
        container: 'h-8 w-8 rounded-lg',
        icon: 'h-4 w-4',
        emoji: 'text-base'
    },
    [AGENT_AVATAR_SIZE.MD]: {
        container: 'h-10 w-10 rounded-xl',
        icon: 'h-5 w-5',
        emoji: 'text-xl'
    },
    [AGENT_AVATAR_SIZE.LG]: {
        container: 'h-12 w-12 rounded-xl',
        icon: 'h-6 w-6',
        emoji: 'text-2xl'
    }
}

const AgentAvatar: FC<AgentAvatarProps> = ({
    emoji,
    emojiColor,
    agentType,
    size = AGENT_AVATAR_SIZE.MD,
    className = ''
}): ReactNode => {
    const s = sizeMap[size]

    return (
        <div
            className={`flex shrink-0 items-center justify-center ${!emojiColor ? 'bg-muted' : ''} ${s.container} ${className}`}
            style={emojiColor ? { backgroundColor: emojiColor } : undefined}
        >
            {emoji ? (
                <span className={s.emoji}>{emoji}</span>
            ) : (
                <AgentTypeMascot agentType={agentType} className={s.icon} />
            )}
        </div>
    )
}

export default AgentAvatar