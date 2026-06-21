import type { HetznerServersResponse, ServerStatus } from '@/ts/Interfaces'

import { getClient, mapStatus } from '@/services/hetzner'

const getServers = async (): Promise<Map<string, ServerStatus>> => {
    const result = new Map<string, ServerStatus>()
    const first = await getClient().get<HetznerServersResponse>(
        '/servers?per_page=50&page=1'
    )

    for (const server of first.servers) {
        result.set(String(server.id), {
            status: mapStatus(server.status),
            ip: server.public_net.ipv4.ip
        })
    }

    const lastPage = first.meta.pagination.last_page
    if (lastPage > 1) {
        const remaining = await Promise.all(
            Array.from({ length: lastPage - 1 }, (_, i) =>
                getClient().get<HetznerServersResponse>(
                    `/servers?per_page=50&page=${i + 2}`
                )
            )
        )

        for (const data of remaining) {
            for (const server of data.servers) {
                result.set(String(server.id), {
                    status: mapStatus(server.status),
                    ip: server.public_net.ipv4.ip
                })
            }
        }
    }

    return result
}

export default getServers