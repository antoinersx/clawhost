import type { HetznerVolumeResponse, VolumeInfo } from '@/ts/Interfaces'

import { getClient } from '@/services/hetzner'

const createVolume = async (
    name: string,
    size: number,
    location: string,
    serverId?: number
): Promise<VolumeInfo> => {
    const body: Record<string, unknown> = {
        name,
        size,
        location,
        automount: true,
        format: 'ext4'
    }

    if (serverId) {
        body.server = serverId
    }

    const data = await getClient().post<HetznerVolumeResponse>('/volumes', body)

    return {
        id: data.volume.id,
        size: data.volume.size,
        location: data.volume.location.name
    }
}

export default createVolume