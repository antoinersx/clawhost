import type { FC, ReactNode } from 'react'
import type { ManageBillingButtonProps } from '@/ts/Interfaces'

import { t } from '@openclaw/i18n'
import { subscriptionStatus } from '@openclaw/shared'
import { CreditCardIcon, CircleNotchIcon } from '@phosphor-icons/react'
import { useCustomerPortal } from '@/hooks'
import { Button } from '@/components/ui'

const ManageBillingButton: FC<ManageBillingButtonProps> = ({
    agent
}): ReactNode => {
    const { openPortal, isLoading } = useCustomerPortal()

    if (!agent.polarSubscriptionId) return null

    const isPastDue = agent.subscriptionStatus === subscriptionStatus.pastDue

    return (
        <Button
            variant='outline'
            size='sm'
            onClick={() => openPortal(agent.id)}
            disabled={isLoading}
            className={
                isPastDue
                    ? 'border-orange-500/50 text-orange-600 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-400'
                    : ''
            }
        >
            {isLoading ? (
                <CircleNotchIcon className='mr-2 h-3.5 w-3.5 animate-spin' />
            ) : (
                <CreditCardIcon className='mr-2 h-3.5 w-3.5' />
            )}
            {isPastDue
                ? t('dashboard.updatePayment')
                : t('billing.manageBilling')}
        </Button>
    )
}

export default ManageBillingButton