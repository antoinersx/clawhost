class ApiError extends Error {
    data: unknown
    code: number

    constructor(message: string, code: number, data: unknown = null) {
        super(message)
        this.name = 'ApiError'
        this.code = code
        this.data = data
    }
}

export { ApiError }