import type { Context } from 'hono'
import type { Environment } from '@/ts/Types'

import { PROD, DEV } from '@/lib/environment'

const client = process.env.CLIENT || ''
const isLocalServer =
    client.includes('localhost') || client.includes('127.0.0.1')

const getEnvironment = (_c: Context): Environment => {
    return isLocalServer ? DEV : PROD
}

export default getEnvironment