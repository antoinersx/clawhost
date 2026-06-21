import type { FC, ReactNode } from 'react'
import type { SimplePlanCardProps } from '@/ts/Interfaces'

import { t } from '@openclaw/i18n'
import { Button, Badge } from '@/components/ui'
import { useAuth } from '@/lib/auth'
import { GETOPENCLAW_CLOUD_URL } from '@/lib/links'
import { CheckIcon, XIcon } from '@phosphor-icons/react'

const SimplePlanCard: FC<SimplePlanCardProps> = ({
    name,
    description,
    price,
    yearlyPerMonth,
    popular,
    features
}): ReactNode => {
    const { user } = useAuth()

    return (
        <div
            className={`border-border relative flex flex-col rounded-xl border p-6 ${popular ? 'border-[#ef5350]/50 bg-[#ef5350]/5' : 'bg-foreground/[0.02]'}`}
        >
            {popular && (
                <Badge className='absolute -top-2.5 left-1/2 -translate-x-1/2 border-0 bg-gradient-to-r from-[#ef5350] to-[#c62828] text-xs text-white'>
                    {t('landing.mostPopular')}
                </Badge>
            )}
            <div className='mb-4'>
                <h3 className='font-clash text-foreground text-lg font-semibold'>
                    {name}
                </h3>
                <p className='text-muted-foreground mt-1 text-sm'>
                    {description}
                </p>
            </div>
            <div className='mb-4 flex items-baseline gap-1'>
                <span className='font-clash text-foreground text-4xl font-bold'>
                    ${price}
                </span>
                <span className='text-muted-foreground text-sm'>
                    {t('landing.perMonth')}
                </span>
                <span className='text-muted-foreground/40 text-xs'>
                    (${yearlyPerMonth}
                    {t('landing.perYear')})
                </span>
            </div>
            <div className='mb-6 flex flex-col gap-2'>
                {features.map((feature) => (
                    <div
                        key={feature.label}
                        className='flex items-center gap-2'
                    >
                        {feature.included ? (
                            <CheckIcon
                                size={14}
                                className='shrink-0 text-green-600 dark:text-green-400'
                            />
                        ) : (
                            <XIcon
                                size={14}
                                className='text-muted-foreground/40 shrink-0'
                            />
                        )}
                        <span
                            className={`text-xs ${feature.included ? 'text-foreground/70' : 'text-muted-foreground/40'}`}
                        >
                            {feature.label}
                        </span>
                    </div>
                ))}
            </div>
            <Button
                className={`mt-auto w-full gap-2 ${popular ? 'border-0 bg-gradient-to-r from-[#ef5350] to-[#c62828] text-white hover:opacity-90' : 'bg-foreground/10 text-foreground hover:bg-foreground/20 border-0'}`}
                asChild
            >
                <a href={GETOPENCLAW_CLOUD_URL}>
                    {user ? t('landing.deploy') : t('landing.choosePlan')}
                </a>
            </Button>
        </div>
    )
}

export default SimplePlanCard