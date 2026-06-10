import type { OrderCustomerResult } from '@/ts/Interfaces'

import { getPolarClient } from '@/lib/polar'

const get = async (orderId: string): Promise<OrderCustomerResult | null> => {
    const polar = getPolarClient()
    try {
        const order = await polar.orders.get({ id: orderId })
        return { customerId: order.customerId }
    } catch {
        return null
    }
}

export default get