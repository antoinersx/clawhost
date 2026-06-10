import type {
    HetznerDatacentersResponse,
    HetznerLocationsResponse,
    LocationInfo
} from '@/ts/Interfaces'

import { getClient } from '@/services/hetzner'

const getLocations = async (): Promise<LocationInfo[]> => {
    const [locData, dcData] = await Promise.all([
        getClient().get<HetznerLocationsResponse>('/locations'),
        getClient().get<HetznerDatacentersResponse>('/datacenters')
    ])

    const enabledLocations = new Set<string>()
    for (const dc of dcData.datacenters) {
        if (dc.server_types.available.length > 0) {
            enabledLocations.add(dc.location.name)
        }
    }

    const seen = new Set<string>()
    return locData.locations
        .map((l) => ({
            id: l.name.replace(/-dc\d+$/, ''),
            name: l.description,
            city: l.city,
            country: l.country,
            disabled: !enabledLocations.has(l.name.replace(/-dc\d+$/, ''))
        }))
        .filter((l) => {
            if (seen.has(l.id)) return false
            seen.add(l.id)
            return true
        })
}

export default getLocations