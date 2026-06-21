import type { CreateSSHKeyResult, HetznerSSHKeyResponse } from '@/ts/Interfaces'

import { getClient } from '@/services/hetzner'

const createSSHKey = async (
    name: string,
    publicKey: string
): Promise<CreateSSHKeyResult> => {
    const data = await getClient().post<HetznerSSHKeyResponse>('/ssh_keys', {
        name,
        public_key: publicKey
    })

    return {
        id: data.ssh_key.id,
        name: data.ssh_key.name,
        fingerprint: data.ssh_key.fingerprint
    }
}

export default createSSHKey