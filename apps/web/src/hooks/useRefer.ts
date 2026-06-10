import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { STORAGE_KEYS } from '@/lib/constants'

const THREE_MONTHS_MS = 3 * 30 * 24 * 60 * 60 * 1000
const NO_REFERRAL_VALUE = 'none'

const useRefer = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        const refParam = searchParams.get('ref')

        if (refParam) {
            localStorage.setItem(
                STORAGE_KEYS.REFERRAL,
                JSON.stringify({ code: refParam, timestamp: Date.now() })
            )
            searchParams.delete('ref')
            setSearchParams(searchParams, { replace: true })
            return
        }

        const raw = localStorage.getItem(STORAGE_KEYS.REFERRAL)
        if (!raw || raw === NO_REFERRAL_VALUE) return

        try {
            const stored = JSON.parse(raw)
            const elapsed = Date.now() - stored.timestamp
            if (elapsed > THREE_MONTHS_MS) {
                localStorage.setItem(STORAGE_KEYS.REFERRAL, NO_REFERRAL_VALUE)
            }
        } catch {
            localStorage.setItem(STORAGE_KEYS.REFERRAL, NO_REFERRAL_VALUE)
        }
    }, [searchParams, setSearchParams])
}

export default useRefer