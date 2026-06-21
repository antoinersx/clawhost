import type { FC, ReactNode } from 'react'

import { t } from '@openclaw/i18n'
import { GETOPENCLAW_CLOUD_URL } from '@/lib/links'

const AcquiredBanner: FC = (): ReactNode => {
    return (
        <div className='animate-banner-enter relative z-50 overflow-hidden border-b border-white/5 bg-[#111114]'>
            <a
                href={GETOPENCLAW_CLOUD_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='relative flex flex-wrap items-center justify-center gap-x-2 px-4 pb-2 pt-3 text-center text-sm leading-6 transition-opacity hover:opacity-80'
            >
                <span className='font-semibold text-white'>
                    {t('acquiredBanner.title')}
                </span>
                <span className='hidden text-white/30 sm:inline'>
                    {'  —  '}
                </span>
                <span className='text-white/70'>
                    {t('acquiredBanner.message')}
                </span>
            </a>
        </div>
    )
}

export default AcquiredBanner