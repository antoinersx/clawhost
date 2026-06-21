import type {
    PolarOrdersPage,
    PolarOrderRaw,
    PolarPaginatedResult
} from '@/ts/Interfaces'

import { getPolarClient } from '@/lib/polar'
import { mapOrder } from '@/lib/polar/orders'

const listByCustomer = async (
    customerId: string,
    page: number = 1,
    limit: number = 10
): Promise<PolarOrdersPage> => {
    const polar = getPolarClient()

    try {
        const result = await polar.orders.list({
            customerId,
            page,
            limit,
            sorting: ['-created_at']
        })

        const data =
            'result' in result
                ? result.result
                : (result as unknown as PolarPaginatedResult)

        const items = (data.items || []) as PolarOrderRaw[]

        return {
            items: items.map(mapOrder),
            totalCount: data.pagination?.totalCount ?? 0,
            maxPage: data.pagination?.maxPage ?? 1
        }
    } catch {
        return { items: [], totalCount: 0, maxPage: 1 }
    }
}

export default listByCustomer