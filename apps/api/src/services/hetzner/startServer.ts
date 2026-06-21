import { getClient } from '@/services/hetzner'

const startServer = async (serverId: string): Promise<void> => {
    await getClient().post(`/servers/${serverId}/actions/poweron`)
}

export default startServer