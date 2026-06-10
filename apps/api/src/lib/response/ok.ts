import type { Context } from 'hono'

import { version } from '@/lib/response'

const ok = <T>(
    c: Context,
    data: T,
    message: string = '',
    code: number = 200
) => {
    return c.json(
        {
            success: true,
            data,
            message,
            code,
            version
        },
        code as 200
    )
}

export default ok