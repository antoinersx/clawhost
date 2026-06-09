import type { FC, ReactNode } from 'react'

import { Fragment } from 'react'
import { t } from '@openclaw/i18n'
import { HermesIcon } from '@/components/icons'

const HermesBanner: FC = (): ReactNode => {
    return (
        <Fragment>
            <span className='mb-[3px] inline-flex items-center gap-2 align-middle'>
                <HermesIcon size={16} />
                <span className='font-semibold text-white'>
                    {t('hermesBanner.title')}
                </span>
            </span>
            <span className='hidden text-white/30 sm:inline'>
                {'  —  '}
            </span>
            <span className='hidden text-white/70 sm:inline'>
                {t('hermesBanner.message')}
            </span>
        </Fragment>
    )
}

export default HermesBanner