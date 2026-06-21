import type { FC, ReactNode } from 'react'
import type { ComparisonTableProps } from '@/ts/Interfaces'

import { Link } from 'react-router-dom'
import { CheckIcon, XIcon, ArrowRightIcon } from '@phosphor-icons/react'
import { t } from '@openclaw/i18n'
import { LogoSvg } from '@/components/layout'
import { Badge } from '@/components/ui'
import { ROUTES } from '@/lib'

const ComparisonTable: FC<ComparisonTableProps> = ({
    badge,
    heading,
    description,
    rows,
    showFullComparisonLink = true,
    logoSuffix
}): ReactNode => {
    return (
        <section
            id='comparison'
            className='cv-auto border-border relative scroll-mt-24 border-t px-6 py-24'
        >
            <div className='mx-auto max-w-3xl'>
                <div className='mb-16 text-center'>
                    <Badge
                        variant='outline'
                        className='border-border bg-foreground/5 text-foreground/80 mb-4'
                    >
                        {badge}
                    </Badge>
                    <h2 className='font-clash from-foreground to-muted-foreground mb-4 bg-gradient-to-b bg-clip-text text-4xl font-bold text-transparent md:text-5xl'>
                        {heading}
                    </h2>
                    <p className='text-muted-foreground mx-auto max-w-xl text-lg'>
                        {description}
                    </p>
                </div>

                <div className='border-border overflow-hidden rounded-xl border'>
                    <table className='w-full'>
                        <thead>
                            <tr className='border-border bg-foreground/[0.02] border-b'>
                                <th className='px-6 py-4'>
                                    <div className='flex items-center justify-center gap-2'>
                                        <LogoSvg className='h-6' />

                                        {logoSuffix && (
                                            <span className='font-clash text-foreground translate-y-px text-sm font-bold'>
                                                {logoSuffix}
                                            </span>
                                        )}
                                    </div>
                                </th>
                                <th className='px-6 py-4 text-center'>
                                    <span className='text-muted-foreground font-medium'>
                                        {t('landing.others')}
                                    </span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className='divide-border divide-y'>
                            {rows.map((row, index) => (
                                <tr
                                    key={index}
                                    className={
                                        index % 2 !== 0
                                            ? 'bg-foreground/[0.01]'
                                            : undefined
                                    }
                                >
                                    <td className='px-6 py-4'>
                                        <div className='flex items-center gap-3'>
                                            <CheckIcon className='h-5 w-5 flex-shrink-0 text-green-600 dark:text-green-400' />
                                            <span className='text-foreground'>
                                                {row.us}
                                            </span>
                                        </div>
                                    </td>
                                    <td className='px-6 py-4'>
                                        <div className='flex items-center gap-3'>
                                            <XIcon className='h-5 w-5 flex-shrink-0 text-red-600 dark:text-red-400' />
                                            <span className='text-muted-foreground'>
                                                {row.others}
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {showFullComparisonLink && (
                    <Link
                        to={ROUTES.COMPARE}
                        className='border-border hover:border-foreground/20 bg-foreground/[0.02] mt-6 flex items-center justify-between rounded-xl border px-6 py-5 transition'
                    >
                        <div>
                            <p className='text-foreground font-semibold'>
                                {t('landing.seeFullComparison')}
                            </p>
                            <p className='text-muted-foreground mt-1 text-sm'>
                                {t('landing.comparisonCtaText')}
                            </p>
                        </div>
                        <ArrowRightIcon className='text-foreground h-5 w-5 flex-shrink-0' />
                    </Link>
                )}
            </div>
        </section>
    )
}

export default ComparisonTable