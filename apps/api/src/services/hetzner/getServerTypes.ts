import type {
    HetznerServerTypesResponse,
    ServerTypeInfo
} from '@/ts/Interfaces'

import { getClient } from '@/services/hetzner'

const getServerTypes = async (): Promise<ServerTypeInfo[]> => {
    const data =
        await getClient().get<HetznerServerTypesResponse>('/server_types')

    return data.server_types.map((t) => {
        const ashPrice = t.prices.find((p) => p.location === 'ash')
        const price = ashPrice || t.prices[0]

        return {
            name: t.name,
            description: t.description,
            cores: t.cores,
            memory: t.memory,
            disk: t.disk,
            architecture: t.architecture,
            priceHourly: parseFloat(price.price_hourly.gross),
            priceMonthly: parseFloat(price.price_monthly.gross)
        }
    })
}

export default getServerTypes