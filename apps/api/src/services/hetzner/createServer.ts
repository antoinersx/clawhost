import type {
    CreateServerResult,
    HetznerCreateServerResponse
} from '@/ts/Interfaces'

import { getClient } from '@/services/hetzner'

const createServer = async (
    name: string,
    serverType: string,
    location: string,
    rootPassword?: string,
    sshKeyIds?: number[],
    snapshotId?: string,
    userData?: string
): Promise<CreateServerResult> => {
    const body: Record<string, unknown> = {
        name,
        server_type: serverType,
        location,
        start_after_create: true,
        image: snapshotId || 'ubuntu-24.04'
    }

    if (rootPassword) {
        body.root_password = rootPassword
    }

    if (sshKeyIds?.length) {
        body.ssh_keys = sshKeyIds
    }

    if (userData) {
        body.user_data = userData
    }

    const data = await getClient().post<HetznerCreateServerResponse>(
        '/servers',
        body
    )

    return {
        serverId: data.server.id,
        ip: data.server.public_net.ipv4.ip,
        rootPassword: data.root_password
    }
}

export default createServer