import type { FC, ReactNode } from 'react'
import type { PlanSelectorProps, Plan } from '@/ts/Interfaces'

import { Fragment, useState } from 'react'
import { t } from '@openclaw/i18n'
import { billingInterval } from '@openclaw/shared'
import { PLAN_TIERS } from '@/lib/constants'
import { Button } from '@/components/ui'
import {
    Label,
    Skeleton,
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    TooltipProvider
} from '@/components/ui'
import { CaretDownIcon, CaretUpIcon } from '@phosphor-icons/react'

const SIMPLE_PLAN_IDS = ['cx23', 'cpx21', 'ccx23', 'ccx33']

const SIMPLE_PLAN_NAMES: Record<string, string> = {
    cx23: 'landing.planStarter',
    cpx21: 'landing.planGrowth',
    ccx23: 'landing.planPro',
    ccx33: 'landing.planBusiness'
}

const PlanSelector: FC<PlanSelectorProps> = ({
    plans,
    planId,
    location,
    billingCycle,
    isLoading,
    preselectedPlanId,
    isLocationAvailableForPlan,
    isPlanAvailable,
    onPlanChange,
    onLocationChange,
    getFirstAvailableLocation
}): ReactNode => {
    const preselectedIsAdvanced =
        !!preselectedPlanId && !SIMPLE_PLAN_IDS.includes(preselectedPlanId)
    const [showAllPlans, setShowAllPlans] = useState(preselectedIsAdvanced)

    const simplePlans = plans.filter((p) => SIMPLE_PLAN_IDS.includes(p.id))
    const visiblePlans = showAllPlans ? plans : simplePlans

    const renderPlanCard = (
        plan: Plan,
        isSelected: boolean,
        isDisabled: boolean
    ): ReactNode => {
        const nameKey = SIMPLE_PLAN_NAMES[plan.id]
        const displayName =
            !showAllPlans && nameKey
                ? t(nameKey as 'landing.planStarter')
                : plan.name.replace(/([A-Za-z])(\d)/, '$1 $2')

        return (
            <label
                className={`flex items-center justify-between rounded-lg p-3 transition ${
                    isDisabled
                        ? 'bg-muted/50 cursor-not-allowed border border-transparent opacity-50'
                        : isSelected
                          ? 'cursor-pointer border border-[#ef5350]/50 bg-[#ef5350]/20'
                          : 'bg-muted hover:bg-muted/80 cursor-pointer border border-transparent'
                }`}
            >
                <div className='flex items-center gap-3'>
                    <input
                        type='radio'
                        name='plan'
                        value={plan.id}
                        checked={isSelected}
                        disabled={isDisabled}
                        onChange={(e) => {
                            const newPlanId = e.target.value
                            onPlanChange(newPlanId)
                            if (
                                !isLocationAvailableForPlan(location, newPlanId)
                            ) {
                                onLocationChange(
                                    getFirstAvailableLocation(newPlanId)
                                )
                            }
                        }}
                        className='sr-only'
                    />
                    <div>
                        <p className='text-sm font-medium'>{displayName}</p>
                        <p className='text-muted-foreground text-xs'>
                            {t('createClaw.planSpec', {
                                cpu: String(plan.cpu),
                                memory: String(plan.memory),
                                disk: String(plan.disk)
                            })}
                        </p>
                    </div>
                </div>
                <span className='text-sm font-semibold'>
                    $
                    {billingCycle === billingInterval.YEAR
                        ? plan.priceYearly.toFixed(2)
                        : plan.priceMonthly.toFixed(2)}
                    {billingCycle === billingInterval.YEAR
                        ? t('landing.perYear')
                        : t('landing.perMonth')}
                </span>
            </label>
        )
    }

    return (
        <div className='space-y-2'>
            <Label>
                {t('createClaw.plan')}
                <span className='text-red-600 dark:text-red-400'> *</span>
            </Label>
            {isLoading ? (
                <div className='space-y-2'>
                    {Array.from({ length: 4 }).map((_, i) => (
                        <Skeleton key={i} className='h-14 rounded-lg' />
                    ))}
                </div>
            ) : (
                <TooltipProvider delayDuration={200}>
                    <div className='space-y-2'>
                        {visiblePlans.map((plan, index) => {
                            const isSelected = planId === plan.id
                            const unavailableForLocation =
                                location &&
                                !isLocationAvailableForPlan(location, plan.id)
                            const isDisabled =
                                !isPlanAvailable(plan.id) ||
                                !!unavailableForLocation

                            const tierStarts: Record<string, string> = {
                                [PLAN_TIERS.SHARED_START]:
                                    t('landing.tierShared'),
                                [PLAN_TIERS.ARM_START]: t('landing.tierArm'),
                                [PLAN_TIERS.DEDICATED_START]: t(
                                    'landing.tierDedicated'
                                )
                            }
                            const providerTiers = tierStarts
                            const tierLabel = providerTiers?.[plan.id]

                            const separator =
                                showAllPlans && tierLabel && index > 0 ? (
                                    <div
                                        key={`tier-${plan.id}`}
                                        className='pb-1 pt-4'
                                    >
                                        <span className='text-muted-foreground text-xs font-semibold uppercase tracking-wider'>
                                            {tierLabel}
                                        </span>
                                    </div>
                                ) : null

                            const card = renderPlanCard(
                                plan,
                                isSelected,
                                isDisabled
                            )

                            if (isDisabled) {
                                const tooltipText = unavailableForLocation
                                    ? t('createClaw.planUnavailableForLocation')
                                    : t('createClaw.planUnavailable')
                                return (
                                    <Fragment key={plan.id}>
                                        {separator}
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <div>{card}</div>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                {tooltipText}
                                            </TooltipContent>
                                        </Tooltip>
                                    </Fragment>
                                )
                            }

                            return (
                                <Fragment key={plan.id}>
                                    {separator}
                                    <div>{card}</div>
                                </Fragment>
                            )
                        })}
                        <div className='flex justify-center pt-1'>
                            <Button
                                type='button'
                                variant='ghost'
                                size='sm'
                                className='text-muted-foreground hover:text-foreground gap-1.5 text-xs'
                                onClick={() => setShowAllPlans(!showAllPlans)}
                            >
                                {showAllPlans
                                    ? t('landing.simplePricing')
                                    : t('landing.showAllPlans')}
                                {showAllPlans ? (
                                    <CaretUpIcon size={12} />
                                ) : (
                                    <CaretDownIcon size={12} />
                                )}
                            </Button>
                        </div>
                    </div>
                </TooltipProvider>
            )}
        </div>
    )
}

export default PlanSelector