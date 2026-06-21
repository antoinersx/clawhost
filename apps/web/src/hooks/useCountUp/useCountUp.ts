import { useState, useEffect, useRef } from 'react'
import { COUNT_UP_DURATION, COUNT_UP_DELAY } from '@/hooks/useCountUp/constants'
import { interpolate } from '@/hooks/useCountUp'

const useCountUp = (target: number): number => {
    const [value, setValue] = useState(0)
    const prevTarget = useRef(0)

    useEffect(() => {
        if (target === prevTarget.current) return
        const start = prevTarget.current
        prevTarget.current = target

        const timeout = setTimeout(() => {
            const startTime = performance.now()

            const tick = (now: number) => {
                const elapsed = now - startTime
                const progress = Math.min(elapsed / COUNT_UP_DURATION, 1)
                setValue(interpolate(start, target, progress))
                if (progress < 1) requestAnimationFrame(tick)
            }

            requestAnimationFrame(tick)
        }, COUNT_UP_DELAY)

        return () => clearTimeout(timeout)
    }, [target])

    return value
}

export default useCountUp