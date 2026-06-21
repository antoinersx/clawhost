import { RequestClient } from '@openclaw/shared'
import { t } from '@openclaw/i18n'
import { signOut } from 'firebase/auth'
import { auth, clearTokenCache, getCachedToken } from '@/lib/firebase'
import Envs from '@/lib/Envs'

const BASE_URL = Envs.VITE_API_URL

const client = new RequestClient({
    baseUrl: BASE_URL,
    getHeaders: async (): Promise<Record<string, string>> => {
        const token = await getCachedToken()
        const headers: Record<string, string> = {}
        if (token) headers.Authorization = `Bearer ${token}`
        return headers
    },
    onUnauthorized: async (): Promise<boolean> => {
        clearTokenCache()
        const token = await getCachedToken(true)
        if (!token) {
            await signOut(auth)
            return false
        }
        return true
    },
    getNetworkErrorMessage: () => t('errors.connectionFailed')
})

const publicClient = new RequestClient({
    baseUrl: BASE_URL,
    getNetworkErrorMessage: () => t('errors.connectionFailed')
})

export { client, publicClient, BASE_URL }