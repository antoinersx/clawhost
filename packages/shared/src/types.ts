export interface RequestOptions extends Omit<RequestInit, 'body'> {
    body?: unknown
    dedupKey?: string
}

export interface RequestConfig {
    baseUrl: string
    getHeaders?: () => Promise<Record<string, string>> | Record<string, string>
    onUnauthorized?: () => Promise<boolean>
    getNetworkErrorMessage?: () => string
}

export interface ApiEnvelope<T = unknown> {
    success: boolean
    data: T
    message: string
    code: number
    version: string
}