import { getClient } from '@/services/hetzner'

const deleteVolume = async (volumeId: number): Promise<void> => {
    await getClient().delete(`/volumes/${volumeId}`)
}

export default deleteVolume