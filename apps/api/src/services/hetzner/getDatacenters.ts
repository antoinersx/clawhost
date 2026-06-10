import type {
    DatacenterAvailability,
    HetznerDatacentersResponse
} from '@/ts/Interfaces'

import { getClient } from '@/services/hetzner'

const getDatacenters = async (): Promise<DatacenterAvailability[]> => {
    const data =
        await getClient().get<HetznerDatacentersResponse>('/datacenters')
    return data.datacenters.map((dc) => ({
        name: dc.name,
        locationName: dc.location.name,
        availableServerTypeIds: dc.server_types.available
    }))
}

export default getDatacenters