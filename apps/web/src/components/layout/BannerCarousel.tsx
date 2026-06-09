import type { FC, ReactNode } from 'react'
import type { BannerSlide } from '@/ts/Interfaces'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XIcon } from '@phosphor-icons/react'
import { t } from '@openclaw/i18n'
import { useUIStore } from '@/lib/store'
import HermesBanner from '@/components/layout/HermesBanner'
import ProductHuntBanner from '@/components/layout/ProductHuntBanner'
import { BANNER_CAROUSEL } from '@/lib/constants'

const BannerCarousel: FC = (): ReactNode => {
    const {
        hermesBannerVisible,
        dismissHermesBanner,
        phBannerVisible,
        dismissPhBanner
    } = useUIStore()

    const slides = useMemo<BannerSlide[]>(() => {
        const list: BannerSlide[] = []
        if (phBannerVisible) {
            list.push({
                id: 'ph',
                content: <ProductHuntBanner />,
                onDismiss: dismissPhBanner
            })
        }
        if (hermesBannerVisible) {
            list.push({
                id: 'hermes',
                content: <HermesBanner />,
                onDismiss: dismissHermesBanner
            })
        }
        return list
    }, [
        phBannerVisible,
        dismissPhBanner,
        hermesBannerVisible,
        dismissHermesBanner
    ])

    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (slides.length <= 1) return
        const interval = setInterval(() => {
            setIndex((n) => (n + 1) % slides.length)
        }, BANNER_CAROUSEL.ROTATION_MS)
        return () => clearInterval(interval)
    }, [slides.length])

    useEffect(() => {
        if (index >= slides.length) setIndex(0)
    }, [slides.length, index])

    if (slides.length === 0) return null
    const current = slides[Math.min(index, slides.length - 1)]

    return (
        <div className='animate-banner-enter relative z-50 overflow-hidden border-b border-white/5 bg-[#111114]'>
            <div className='relative px-4 pb-2 pt-3 text-center text-sm leading-6'>
                <AnimatePresence mode='wait'>
                    <motion.p
                        key={current.id}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: BANNER_CAROUSEL.TRANSITION_MS }}
                        className='inline-block'
                    >
                        {current.content}
                    </motion.p>
                </AnimatePresence>
                <button
                    onClick={current.onDismiss}
                    className='absolute right-4 top-1/2 -translate-y-1/2 text-white/30 transition hover:text-white/70'
                    aria-label={t('common.close')}
                >
                    <XIcon size={14} />
                </button>
            </div>
        </div>
    )
}

export default BannerCarousel