import tokenState from '@/lib/firebase/tokenState'

const clearTokenCache = (): void => {
    tokenState.clear()
}

export default clearTokenCache