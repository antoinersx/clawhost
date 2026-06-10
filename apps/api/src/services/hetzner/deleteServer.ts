import { getClient } from '@/services/hetzner'

const deleteServer = async (serverId: string): Promise<void> => {
    await getClient().delete(`/servers/${serverId}`)
}

export default deleteServer