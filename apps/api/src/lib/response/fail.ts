import type { Context } from 'hono'
import type { ContentfulStatusCode } from 'hono/utils/http-status'

import { version } from '@/lib/response'

const fail = <T = null>(
    c: Context,
    message: string,
    code: ContentfulStatusCode = 400,
    data: T = null as T
) => {
    return c.json(
        {
            success: false,
            data,
            message,
            code,
            version
        },
        code
    )
}

export default fail