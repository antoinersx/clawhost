import type { FC, ReactNode } from 'react'

import { Fragment } from 'react'
import { ArrowUpIcon } from '@phosphor-icons/react'
import { t } from '@openclaw/i18n'
import { PRODUCT_HUNT_URL } from '@/lib/links'

const ProductHuntBanner: FC = (): ReactNode => {
    return (
        <Fragment>
            <span className='mb-[3px] inline-flex items-center gap-2 align-middle'>
                <svg width='16' height='16' viewBox='0 0 256 256'>
                    <defs>
                        <linearGradient
                            x1='50%'
                            y1='0%'
                            x2='50%'
                            y2='100%'
                            id='ph-gradient'
                        >
                            <stop stopColor='#DA552F' offset='0%' />
                            <stop stopColor='#D04B25' offset='100%' />
                        </linearGradient>
                    </defs>
                    <path
                        d='M128,256 C198.6944,256 256,198.6944 256,128 C256,57.3056 198.6944,0 128,0 C57.3056,0 0,57.3056 0,128 C0,198.6944 57.3056,256 128,256 L128,256 Z'
                        fill='url(#ph-gradient)'
                    />
                    <path
                        d='M96,76.8 L96,179.2 L115.2,179.2 L115.2,147.2 L144.256,147.2 C163.552,146.688 179.2,131.04 179.2,112 C179.2,92.448 163.552,76.8 144.256,76.8 L96,76.8 L96,76.8 Z M144.4928,128 L115.2,128 L115.2,96 L144.4928,96 C153.056,96 160,103.168 160,112 C160,120.832 153.056,128 144.4928,128 L144.4928,128 Z'
                        fill='#FFFFFF'
                    />
                </svg>
                <span className='font-semibold text-white'>
                    {t('productHunt.productHunt')}
                </span>
            </span>
            <span className='hidden text-white/30 sm:inline'>
                {'  —  '}
            </span>
            <span className='hidden text-white/70 sm:inline'>
                {t('productHunt.celebrate')}{' '}
                <span className='font-semibold text-[#ff6154]'>
                    {t('productHunt.discount')}
                </span>{' '}
                {t('productHunt.yourFirstMonth')}.
            </span>
            <a
                href={PRODUCT_HUNT_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='ml-3 inline-flex items-center gap-1 rounded-md bg-[#ff6154] px-2.5 py-0.5 align-middle text-xs font-semibold text-white transition hover:bg-[#ff6154]/90'
            >
                <ArrowUpIcon size={11} weight='bold' />
                {t('productHunt.upvoteNow')}
            </a>
        </Fragment>
    )
}

export default ProductHuntBanner