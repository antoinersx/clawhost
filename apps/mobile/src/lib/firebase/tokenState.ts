let cachedToken: string | null = null
let tokenExpiry = 0

const tokenState = {
    getToken: (): string | null => cachedToken,
    getExpiry: (): number => tokenExpiry,
    setToken: (token: string | null, expiry: number): void => {
        cachedToken = token
        tokenExpiry = expiry
    },
    clear: (): void => {
        cachedToken = null
        tokenExpiry = 0
    }
}

export default tokenState