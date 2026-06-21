import { getClient } from '@/services/hetzner'

const attachVolume = async (
    volumeId: number,
    serverId: number
): Promise<void> => {
    await getClient().post(`/volumes/${volumeId}/actions/attach`, {
        server: serverId,
        automount: true
    })
}

export default attachVolume