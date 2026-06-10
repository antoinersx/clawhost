import type { HetznerServerTypesResponse, RawServerType } from '@/ts/Interfaces'

import { getClient } from '@/services/hetzner'

const getRawServerTypes = async (): Promise<RawServerType[]> => {
    const data =
        await getClient().get<HetznerServerTypesResponse>('/server_types')
    return data.server_types.map((st) => ({
        id: st.id,
        name: st.name
    }))
}

export default getRawServerTypes