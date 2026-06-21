import auth from '@/lib/firebase/auth'
import tokenState from '@/lib/firebase/tokenState'

const getCachedToken = async (
    forceRefresh?: boolean
): Promise<string | null> => {
    if (!auth) return null
    const user = auth.currentUser
    if (!user) return null

    const now = Date.now()
    if (
        !forceRefresh &&
        tokenState.getToken() &&
        now < tokenState.getExpiry()
    ) {
        return tokenState.getToken()
    }

    const token = await user.getIdToken(forceRefresh)
    tokenState.setToken(token, now + 3500 * 1000)
    return token
}

export default getCachedToken