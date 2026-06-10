import type { AuthenticatedContext } from '@/ts/Types'

import { eq } from 'drizzle-orm'
import { agentStatus } from '@openclaw/shared'
import { db } from '@/db'
import { agents, sshKeys, volumes } from '@/db/schema'
import { getProvider } from '@/services/provider'
import { cloudflare, hostKeyStore } from '@/services'
import { encrypt } from '@/lib/encryption'
import { t } from '@openclaw/i18n'
import { ok, fail } from '@/lib/response'
import {
    findUserAgent,
    generateCloudInit,
    generatePassword,
    generateServerName,
    generateToken,
    DOMAIN
} from '@/controllers/agents/helpers'

const REINSTALL_WINDOW = 86_400_000

const reinstallAgent = async (c: AuthenticatedContext) => {
    try {
        const userId = c.get('userId')
        const id = c.req.param('id')!
        const existing = await findUserAgent(userId, id, c.get('isAdmin'))

        if (!existing) return fail(c, t('api.agentNotFound'), 404)

        const nonReinstallableStatuses: string[] = [
            agentStatus.creating,
            agentStatus.deleting
        ]

        if (nonReinstallableStatuses.includes(existing.status)) {
            return fail(c, t('api.agentBusy'), 400)
        }

        if (!c.get('isAdmin') && existing.lastReinstalledAt) {
            const elapsed = Date.now() - existing.lastReinstalledAt.getTime()
            if (elapsed < REINSTALL_WINDOW)
                return fail(c, t('api.reinstallRateLimited'), 429)
        }

        const provider = getProvider()

        await db
            .update(agents)
            .set({ status: agentStatus.creating })
            .where(eq(agents.id, id))

        const [agentVolumes, sshKeyResult] = await Promise.all([
            db.select().from(volumes).where(eq(volumes.agentId, id)),
            existing.sshKeyId
                ? db
                      .select()
                      .from(sshKeys)
                      .where(eq(sshKeys.id, existing.sshKeyId))
                      .limit(1)
                : Promise.resolve(null)
        ])

        await Promise.allSettled([
            ...agentVolumes
                .filter((vol) => vol.providerVolumeId)
                .map(async (vol) => {
                    await provider.detachVolume(vol.providerVolumeId!)
                    await provider.deleteVolume(vol.providerVolumeId!)
                }),
            existing.subdomain
                ? cloudflare
                      .findDNSRecord(existing.subdomain)
                      .then((rec) =>
                          rec ? cloudflare.deleteDNSRecord(rec.id) : null
                      )
                : Promise.resolve(),
            existing.providerServerId
                ? provider.deleteServer(existing.providerServerId)
                : Promise.resolve()
        ])

        if (existing.ip) hostKeyStore.clear(existing.ip)

        const newPassword = generatePassword()
        const newGatewayToken = generateToken()

        let providerSshKeyIds: number[] | undefined
        if (sshKeyResult?.[0]) {
            if (sshKeyResult[0].providerKeyId) {
                providerSshKeyIds = [sshKeyResult[0].providerKeyId]
            }
        }

        const cloudInitScript = generateCloudInit(
            newPassword,
            existing.subdomain || '',
            DOMAIN,
            newGatewayToken,
            existing.agentType
        )

        const { serverId, ip } = await provider.createServer(
            generateServerName(existing.name, id),
            existing.planId,
            existing.location!,
            newPassword,
            providerSshKeyIds,
            '',
            cloudInitScript
        )

        await Promise.all([
            existing.subdomain
                ? cloudflare
                      .createDNSRecord(existing.subdomain, ip)
                      .catch((dnsError) =>
                          console.error('reinstallAgent', dnsError)
                      )
                : Promise.resolve(),
            db
                .update(agents)
                .set({
                    providerServerId: serverId.toString(),
                    status: agentStatus.configuring,
                    ip,
                    rootPassword: encrypt(newPassword),
                    gatewayToken: encrypt(newGatewayToken),
                    hostKeyFingerprint: null,
                    lastReinstalledAt: new Date()
                })
                .where(eq(agents.id, id))
        ])

        await Promise.allSettled(
            agentVolumes.map(async (vol) => {
                const providerVolume = await provider.createVolume(
                    vol.name,
                    vol.size,
                    vol.location,
                    serverId
                )
                await db
                    .update(volumes)
                    .set({
                        providerVolumeId: providerVolume.id,
                        status: 'available'
                    })
                    .where(eq(volumes.id, vol.id))
            })
        )

        return ok(c, null, t('api.reinstallSuccess'))
    } catch (error) {
        console.error('reinstallAgent', error)
        return fail(c, t('api.failedToReinstallAgent'), 500)
    }
}

export default reinstallAgent