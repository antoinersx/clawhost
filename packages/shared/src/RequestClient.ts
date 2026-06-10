import type { ApiEnvelope, RequestConfig, RequestOptions } from '#shared/types'

import { ApiError } from '#shared/ApiError'

class RequestClient {
    private config: RequestConfig
    private inflight = new Map<string, Promise<unknown>>()

    constructor(config: RequestConfig) {
        this.config = config
    }

    private async executeRequest(
        endpoint: string,
        options: RequestOptions = {}
    ): Promise<Response> {
        const { body, dedupKey: _, ...init } = options

        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            ...(this.config.getHeaders ? await this.config.getHeaders() : {}),
            ...((init.headers as Record<string, string>) || {})
        }

        try {
            return await fetch(`${this.config.baseUrl}${endpoint}`, {
                ...init,
                headers,
                body: body ? JSON.stringify(body) : undefined
            })
        } catch (error) {
            if (
                this.config.getNetworkErrorMessage &&
                (error as Error)?.name !== 'AbortError'
            )
                throw new Error(this.config.getNetworkErrorMessage())
            throw error
        }
    }

    private isEnvelope(data: unknown): data is ApiEnvelope {
        return (
            data !== null &&
            typeof data === 'object' &&
            'success' in data &&
            'data' in data &&
            'message' in data &&
            'code' in data &&
            'version' in data
        )
    }

    private async parseResponse<T>(res: Response): Promise<T> {
        const contentType = res.headers.get('content-type')
        const contentLength = res.headers.get('content-length')
        let data: unknown

        if (res.status === 204 || contentLength === '0') {
            data = null
        } else if (contentType?.includes('application/json')) {
            const text = await res.text()
            data = text ? JSON.parse(text) : null
        } else {
            const text = await res.text()
            if (!res.ok) {
                throw new Error(text || `Request failed: ${res.status}`)
            }
            data = text
        }

        if (this.isEnvelope(data)) {
            if (!data.success) {
                throw new ApiError(
                    data.message || `Request failed: ${data.code}`,
                    data.code,
                    data.data
                )
            }
            return data.data as T
        }

        if (!res.ok) {
            const errorData = data as {
                error?: string | { message?: string; code?: string }
                message?: string
            }
            let errorMessage = `Request failed: ${res.status}`

            if (typeof errorData?.error === 'string') {
                errorMessage = errorData.error
            } else if (
                typeof errorData?.error === 'object' &&
                errorData.error?.message
            ) {
                errorMessage = errorData.error.message
            } else if (errorData?.message) {
                errorMessage = errorData.message
            }

            throw new Error(errorMessage)
        }

        return data as T
    }

    async request<T>(
        endpoint: string,
        options: RequestOptions = {}
    ): Promise<T> {
        let res = await this.executeRequest(endpoint, options)

        if (res.status === 401 && this.config.onUnauthorized) {
            const shouldRetry = await this.config.onUnauthorized()
            if (shouldRetry) {
                res = await this.executeRequest(endpoint, options)
            }
        }

        return this.parseResponse<T>(res)
    }

    private dedup<T>(key: string, fn: () => Promise<T>): Promise<T> {
        const existing = this.inflight.get(key)
        if (existing) return existing as Promise<T>

        const promise = fn().finally(() => {
            this.inflight.delete(key)
        })

        this.inflight.set(key, promise)
        return promise
    }

    get<T>(endpoint: string, options?: RequestOptions): Promise<T> {
        return this.dedup(`GET:${endpoint}`, () =>
            this.request<T>(endpoint, { ...options, method: 'GET' })
        )
    }

    post<T>(
        endpoint: string,
        body?: unknown,
        options?: RequestOptions
    ): Promise<T> {
        if (options?.dedupKey) {
            const { dedupKey, ...rest } = options
            return this.dedup(`POST:${dedupKey}`, () =>
                this.request<T>(endpoint, { ...rest, method: 'POST', body })
            )
        }
        return this.request<T>(endpoint, { ...options, method: 'POST', body })
    }

    put<T>(
        endpoint: string,
        body?: unknown,
        options?: RequestOptions
    ): Promise<T> {
        return this.request<T>(endpoint, { ...options, method: 'PUT', body })
    }

    patch<T>(
        endpoint: string,
        body?: unknown,
        options?: RequestOptions
    ): Promise<T> {
        return this.request<T>(endpoint, { ...options, method: 'PATCH', body })
    }

    delete<T>(endpoint: string, options?: RequestOptions): Promise<T> {
        return this.request<T>(endpoint, { ...options, method: 'DELETE' })
    }
}

export { RequestClient }