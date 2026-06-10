import type { HetznerVolumeResponse, VolumeDetails } from '@/ts/Interfaces'

import { getClient } from '@/services/hetzner'

const getVolume = async (volumeId: number): Promise<VolumeDetails> => {
    const data = await getClient().get<HetznerVolumeResponse>(
        `/volumes/${volumeId}`
    )
    return {
        id: data.volume.id,
        size: data.volume.size,
        status: data.volume.status,
        serverId: data.volume.server
    }
}

export default getVolume