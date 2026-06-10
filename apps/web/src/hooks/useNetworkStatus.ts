import type { ElectronWindow } from '@/ts/Interfaces'

import { useState, useEffect, useCallback } from 'react'
import { networkStatus, externalUrls } from '@openclaw/shared'

const CHECK_INTERVAL = 10_000
const PING_URL = externalUrls.GOOGLE.GENERATE_204
const LATENCY_THRESHOLD = 3_000
const PING_TIMEOUT = 5_000

const useNetworkStatus = (): boolean => {
    const [isOffline, setIsOffline] = useState(false)

    const checkConnection = useCallback(async () => {
        const api = (window as unknown as ElectronWindow).electronAPI

        if (api?.checkNetwork) {
            try {
                const result = await api.checkNetwork()
                setIsOffline(result === networkStatus.OFFLINE)
            } catch {
                setIsOffline(false)
            }
            return
        }

        if (!navigator.onLine) {
            setIsOffline(true)
            return
        }

        try {
            const controller = new AbortController()
            const timeout = setTimeout(() => controller.abort(), PING_TIMEOUT)
            const start = Date.now()

            await fetch(PING_URL, {
                method: 'HEAD',
                mode: 'no-cors',
                cache: 'no-store',
                signal: controller.signal
            })

            clearTimeout(timeout)
            const latency = Date.now() - start
            setIsOffline(latency > LATENCY_THRESHOLD)
        } catch {
            setIsOffline(true)
        }
    }, [])

    useEffect(() => {
        checkConnection()
        const interval = setInterval(checkConnection, CHECK_INTERVAL)

        const handleOffline = () => setIsOffline(true)

        window.addEventListener('online', checkConnection)
        window.addEventListener('offline', handleOffline)

        return () => {
            clearInterval(interval)
            window.removeEventListener('online', checkConnection)
            window.removeEventListener('offline', handleOffline)
        }
    }, [checkConnection])

    return isOffline
}

export default useNetworkStatus