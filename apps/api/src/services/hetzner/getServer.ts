import type { HetznerServerResponse, ServerStatus } from '@/ts/Interfaces'

import { getClient, mapStatus } from '@/services/hetzner'

const getServer = async (serverId: string): Promise<ServerStatus> => {
    const data = await getClient().get<HetznerServerResponse>(
        `/servers/${serverId}`
    )
    return {
        status: mapStatus(data.server.status),
        ip: data.server.public_net.ipv4.ip
    }
}

export default getServer