import { getClient } from '@/services/hetzner'

const detachVolume = async (volumeId: number): Promise<void> => {
    await getClient().post(`/volumes/${volumeId}/actions/detach`)
}

export default detachVolume