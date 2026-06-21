import type {
    ProvisionAgentParams,
    ProvisionAgentResponse
} from '@/ts/Interfaces'

import crypto from 'crypto'
import { eq } from 'drizzle-orm'
import { agentStatus, agentType, inputValidation } from '@openclaw/shared'
import { db } from '@/db'
import { subscriptionStatus } from '@openclaw/shared'
import { agents, pendingAgents, sshKeys, volumes } from '@/db/schema'
import { getProvider } from '@/services/provider'
import { cloudflare } from '@/services'
import {
    generateSlug,
    generateServerName,
    generateToken,
    generateCloudInit,
    DOMAIN
} from '@/controllers/agents/helpers'
import { encrypt, decrypt } from '@/lib/encryption'
import { t } from '@openclaw/i18n'

const provisionAgent = async (
    params: ProvisionAgentParams
): Promise<ProvisionAgentResponse> => {
    try {
        const existingAgent = await db
            .select()
            .from(agents)
            .where(eq(agents.polarSubscriptionId, params.subscriptionId))
            .limit(1)

        if (existingAgent[0])
            return { success: true, agentId: existingAgent[0].id }

        const claimed = await db
            .delete(pendingAgents)
            .where(eq(pendingAgents.id, params.pendingAgentId))
            .returning()

        if (!claimed[0])
            return { success: false, error: t('api.pendingAgentNotFound') }

        const pending = claimed[0]

        const provider = getProvider()

        const [serverTypes, sshKeyResult] = await Promise.all([
            provider.getServerTypes(),
            pending.sshKeyId
                ? db
                      .select()
                      .from(sshKeys)
                      .where(eq(sshKeys.id, pending.sshKeyId))
                      .limit(1)
                : Promise.resolve(null)
        ])

        const selectedPlan = serverTypes.find(
            (st) => st.name === pending.planId
        )

        if (
            !selectedPlan ||
            selectedPlan.memory < inputValidation.MIN_MEMORY_GB.MIN
        )
            return { success: false, error: t('api.planBelowMinimumMemory') }

        const id = crypto.randomUUID()
        const isHermes = pending.agentType === agentType.HERMES
        const subdomain = isHermes ? null : generateSlug(id)
        const gatewayToken = pending.gatewayToken
            ? decrypt(pending.gatewayToken)
            : generateToken()

        let providerSshKeyIds: number[] | undefined
        if (sshKeyResult && sshKeyResult[0]) {
            if (sshKeyResult[0].providerKeyId) {
                providerSshKeyIds = [sshKeyResult[0].providerKeyId]
            }
        }

        if (!pending.rootPassword)
            return { success: false, error: t('api.failedToProvisionAgent') }

        const plainRootPassword = decrypt(pending.rootPassword)

        const cloudInitScript = generateCloudInit(
            plainRootPassword,
            subdomain || '',
            DOMAIN,
            gatewayToken,
            pending.agentType
        )

        await db.insert(agents).values({
            id,
            userId: pending.userId,
            name: pending.name,
            agentType: pending.agentType,
            status: agentStatus.creating,
            planId: pending.planId,
            location: pending.location,
            rootPassword: pending.rootPassword,
            sshKeyId: pending.sshKeyId,
            subdomain,
            gatewayToken: encrypt(gatewayToken),
            polarSubscriptionId: params.subscriptionId,
            polarProductId: params.productId,
            polarCustomerId: params.customerId,
            subscriptionStatus: subscriptionStatus.active,
            billingInterval: pending.billingInterval
        })

        let serverId: number
        let ip: string

        try {
            const serverName = generateServerName(pending.name, id)
            const server = await provider.createServer(
                serverName,
                pending.planId,
                pending.location,
                plainRootPassword || undefined,
                providerSshKeyIds,
                '',
                cloudInitScript
            )
            serverId = server.serverId
            ip = server.ip
        } catch (providerErr) {
            await db.delete(agents).where(eq(agents.id, id))
            throw providerErr
        }

        await Promise.all([
            subdomain
                ? cloudflare
                      .createDNSRecord(subdomain, ip)
                      .catch((dnsError) =>
                          console.error('provisionAgent', dnsError)
                      )
                : Promise.resolve(),
            db
                .update(agents)
                .set({
                    providerServerId: serverId.toString(),
                    status: agentStatus.configuring,
                    ip
                })
                .where(eq(agents.id, id))
        ])

        if (
            pending.volumeSize &&
            pending.volumeSize >= inputValidation.VOLUME_SIZE.MIN
        ) {
            try {
                const volumeId = crypto.randomUUID()
                const providerVolume = await provider.createVolume(
                    `${pending.name}-vol-${volumeId.slice(0, 8)}`,
                    pending.volumeSize,
                    pending.location,
                    serverId
                )

                await db.insert(volumes).values({
                    id: volumeId,
                    userId: pending.userId,
                    agentId: id,
                    name: `${pending.name}-storage`,
                    size: pending.volumeSize,
                    providerVolumeId: providerVolume.id,
                    location: pending.location,
                    status: 'available'
                })
            } catch (volumeError) {
                console.error('provisionAgent', volumeError)
            }
        }

        return {
            success: true,
            agentId: id,
            userId: pending.userId,
            referralCode: pending.referralCode
        }
    } catch (error) {
        console.error('provisionAgent', error)
        return {
            success: false,
            error: t('api.failedToProvisionAgent')
        }
    }
}

export default provisionAgent