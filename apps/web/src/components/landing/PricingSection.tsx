import type { FC, ReactNode } from 'react'
import type { PricingSectionProps } from '@/ts/Interfaces'

import { Fragment, useState } from 'react'
import { t } from '@openclaw/i18n'
import { Button, Badge } from '@/components/ui'
import { useAuth } from '@/lib/auth'
import { GETOPENCLAW_CLOUD_URL } from '@/lib/links'
import { PLAN_TIERS } from '@/lib/constants'
import { CaretDownIcon, CaretUpIcon } from '@phosphor-icons/react'
import { SimplePlanCard, buildSimplePlans } from '@/components/landing'

const RECOMMENDED_PLAN_ID = 'cax41'

const PricingSection: FC<PricingSectionProps> = ({ plans }): ReactNode => {
    const { user } = useAuth()
    const [showAllPlans, setShowAllPlans] = useState(false)

    return (
        <section
            id='pricing'
            className='cv-auto border-border relative scroll-mt-24 border-t px-6 py-24'
        >
            <div className='mx-auto max-w-6xl'>
                <div className='mb-16 text-center'>
                    <Badge
                        variant='outline'
                        className='border-border bg-foreground/5 text-foreground/80 mb-4'
                    >
                        {t('landing.pricing')}
                    </Badge>

                    <h2 className='font-clash from-foreground to-muted-foreground mb-4 bg-gradient-to-b bg-clip-text text-4xl font-bold text-transparent md:text-5xl'>
                        {t('landing.simpleTransparentPricing')}
                    </h2>

                    <p className='text-muted-foreground mx-auto max-w-xl text-lg'>
                        {t('landing.pricingDescription')}
                    </p>
                </div>

                <Fragment>
                    {!showAllPlans ? (
                        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
                            {buildSimplePlans(plans).map((sp) => (
                                <SimplePlanCard
                                    key={sp.planId}
                                    name={sp.name}
                                    description={sp.desc}
                                    price={sp.price}
                                    yearlyPerMonth={sp.yearlyPerMonth}
                                    planId={sp.planId}
                                    popular={sp.popular}
                                    features={sp.features}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className='overflow-x-auto'>
                            <table className='w-full border-collapse'>
                                <thead>
                                    <tr className='border-border border-b'>
                                        <th className='font-clash text-foreground px-4 py-4 text-left font-semibold'>
                                            {t('landing.planColumn')}
                                        </th>
                                        <th className='font-clash text-foreground whitespace-nowrap px-4 py-4 text-center font-semibold'>
                                            {t('landing.vCpuColumn')}
                                        </th>
                                        <th className='font-clash text-foreground whitespace-nowrap px-4 py-4 text-center font-semibold'>
                                            {t('landing.ramColumn')}
                                        </th>
                                        <th className='font-clash text-foreground whitespace-nowrap px-4 py-4 text-center font-semibold'>
                                            {t('landing.storageColumn')}
                                        </th>
                                        <th className='font-clash text-foreground whitespace-nowrap px-4 py-4 text-center font-semibold'>
                                            {t('landing.monthlyColumn')}
                                        </th>
                                        <th className='px-4 py-4 text-right'></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {plans.map((plan, index) => {
                                        const totalMonthly = Math.round(
                                            plan.priceMonthly
                                        )
                                        const totalYearly = Math.round(
                                            plan.priceYearly
                                        )
                                        const isRecommended =
                                            plan.id === RECOMMENDED_PLAN_ID
                                        const tierStarts: Record<
                                            string,
                                            string
                                        > = {
                                            [PLAN_TIERS.SHARED_START]:
                                                t('landing.tierShared'),
                                            [PLAN_TIERS.ARM_START]:
                                                t('landing.tierArm'),
                                            [PLAN_TIERS.DEDICATED_START]: t(
                                                'landing.tierDedicated'
                                            )
                                        }

                                        const providerTiers = tierStarts
                                        const tierLabel =
                                            providerTiers?.[plan.id]
                                        const showTier = tierLabel && index > 0

                                        return (
                                            <Fragment key={plan.id}>
                                                {showTier && (
                                                    <tr>
                                                        <td
                                                            colSpan={6}
                                                            className='px-4 pb-2 pt-6'
                                                        >
                                                            <span className='font-clash text-muted-foreground text-xs font-semibold uppercase tracking-wider'>
                                                                {tierLabel}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                )}
                                                <tr
                                                    className={`border-border border-b ${
                                                        isRecommended
                                                            ? 'bg-[#ef5350]/5'
                                                            : ''
                                                    }`}
                                                >
                                                    <td className='px-4 py-4'>
                                                        <div className='flex items-center gap-2'>
                                                            <span className='text-foreground font-medium'>
                                                                {plan.name.replace(
                                                                    /([A-Za-z])(\d)/,
                                                                    '$1 $2'
                                                                )}
                                                            </span>
                                                            {isRecommended && (
                                                                <Badge className='border-0 bg-gradient-to-r from-[#ef5350] to-[#c62828] text-xs text-white'>
                                                                    {t(
                                                                        'landing.recommended'
                                                                    )}
                                                                </Badge>
                                                            )}
                                                        </div>
                                                    </td>
                                                    <td className='text-foreground/80 px-4 py-4 text-center'>
                                                        {plan.cpu}
                                                    </td>
                                                    <td className='text-foreground/80 whitespace-nowrap px-4 py-4 text-center'>
                                                        {plan.memory} GB
                                                    </td>
                                                    <td className='text-foreground/80 whitespace-nowrap px-4 py-4 text-center'>
                                                        {plan.disk} GB
                                                    </td>
                                                    <td className='whitespace-nowrap px-4 py-4 text-center'>
                                                        <div className='flex items-baseline justify-center gap-1'>
                                                            <span className='font-clash text-foreground font-bold'>
                                                                ${totalMonthly}
                                                            </span>
                                                            <span className='text-muted-foreground text-sm'>
                                                                {t(
                                                                    'landing.perMonth'
                                                                )}
                                                            </span>
                                                            <span className='text-muted-foreground/40 text-xs'>
                                                                ($
                                                                {Math.round(
                                                                    totalYearly /
                                                                        12
                                                                )}
                                                                {t(
                                                                    'landing.perYear'
                                                                )}
                                                                )
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className='px-4 py-4 text-right'>
                                                        <Button
                                                            size='sm'
                                                            className={`gap-2 px-4 ${
                                                                isRecommended
                                                                    ? 'border-0 bg-gradient-to-r from-[#ef5350] to-[#c62828] text-white hover:opacity-90'
                                                                    : 'bg-foreground/10 text-foreground hover:bg-foreground/20 border-0'
                                                            }`}
                                                            asChild
                                                        >
                                                            <a
                                                                href={
                                                                    GETOPENCLAW_CLOUD_URL
                                                                }
                                                                aria-label={
                                                                    user
                                                                        ? t(
                                                                              'landing.deployPlanLabel',
                                                                              {
                                                                                  plan: plan.name
                                                                              }
                                                                          )
                                                                        : t(
                                                                              'landing.selectPlanLabel',
                                                                              {
                                                                                  plan: plan.name
                                                                              }
                                                                          )
                                                                }
                                                            >
                                                                {user
                                                                    ? t(
                                                                          'landing.deploy'
                                                                      )
                                                                    : t(
                                                                          'landing.select'
                                                                      )}
                                                            </a>
                                                        </Button>
                                                    </td>
                                                </tr>
                                            </Fragment>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )}

                    <div className='mt-6 flex justify-center'>
                        <Button
                            variant='ghost'
                            className='text-muted-foreground hover:text-foreground gap-2 text-sm'
                            onClick={() => setShowAllPlans(!showAllPlans)}
                        >
                            {showAllPlans
                                ? t('landing.simplePricing')
                                : t('landing.showAllPlans')}
                            {showAllPlans ? (
                                <CaretUpIcon size={14} />
                            ) : (
                                <CaretDownIcon size={14} />
                            )}
                        </Button>
                    </div>
                </Fragment>
            </div>
        </section>
    )
}

export default PricingSection