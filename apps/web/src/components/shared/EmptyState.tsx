import type { FC, ReactNode } from 'react'
import type { EmptyStateProps } from '@/ts/Interfaces'

import { ActionButton } from '@/components/shared'
import { LightningIcon } from '@phosphor-icons/react'

const EmptyState: FC<EmptyStateProps> = ({
    icon,
    title,
    description,
    actionLabel,
    actionIcon,
    onAction
}): ReactNode => {
    return (
        <div className='py-16 text-center'>
            <div className='from-primary/20 to-primary/5 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br'>
                {icon}
            </div>
            <h3 className='mb-2 text-xl font-semibold'>{title}</h3>
            <p className='text-muted-foreground mx-auto mb-6 max-w-sm'>
                {description}
            </p>
            {actionLabel && onAction && (
                <ActionButton
                    onClick={onAction}
                    icon={
                        actionIcon || (
                            <LightningIcon className='h-5 w-5' weight='fill' />
                        )
                    }
                    label={actionLabel}
                    size='lg'
                />
            )}
        </div>
    )
}

export default EmptyState