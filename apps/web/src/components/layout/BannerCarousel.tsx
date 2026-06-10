import type { FC, ReactNode } from 'react'
import type { BannerSlide } from '@/ts/Interfaces'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HermesBanner, ProductHuntBanner } from '@/components/layout'
import { BANNER_CAROUSEL } from '@/lib/constants'

const SLIDES: BannerSlide[] = [
    { id: 'ph', content: <ProductHuntBanner /> },
    { id: 'hermes', content: <HermesBanner /> }
]

const BannerCarousel: FC = (): ReactNode => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (SLIDES.length <= 1) return
        const interval = setInterval(() => {
            setIndex((n) => (n + 1) % SLIDES.length)
        }, BANNER_CAROUSEL.ROTATION_MS)
        return () => clearInterval(interval)
    }, [])

    const current = SLIDES[index]

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
            </div>
        </div>
    )
}

export default BannerCarousel