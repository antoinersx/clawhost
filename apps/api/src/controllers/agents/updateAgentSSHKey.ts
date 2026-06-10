import type { UpdateAgentSSHKeyBody } from '@/ts/Interfaces'

import { eq, and } from 'drizzle-orm'
import { t } from '@openclaw/i18n'
import { agentStatus } from '@openclaw/shared'
import { db } from '@/db'
import { agents, sshKeys } from '@/db/schema'
import { ok, fail } from '@/lib/response'
import { executeSSH } from '@/services'
import { withAgent } from '@/controllers/agents/helpers'

const updateAgentSSHKey = withAgent()(async (c, agent) => {
    try {
        const { sshKeyId } = await c.req.json<UpdateAgentSSHKeyBody>()
        const userId = c.get('userId')

        let publicKey: string | null = null

        if (sshKeyId) {
            const key = await db
                .select()
                .from(sshKeys)
                .where(
                    and(eq(sshKeys.id, sshKeyId), eq(sshKeys.userId, userId))
                )
                .limit(1)

            if (!key[0]) return fail(c, t('api.sshKeyNotFound'), 404)
            publicKey = key[0].publicKey
        }

        if (
            agent.ip &&
            agent.rootPassword &&
            agent.status === agentStatus.running
        ) {
            const authKeysContent = publicKey ? publicKey.trim() : ''
            await executeSSH(
                agent.ip,
                agent.rootPassword,
                `mkdir -p ~/.ssh && echo '${authKeysContent.replace(/'/g, "'\\''")}' > ~/.ssh/authorized_keys && chmod 700 ~/.ssh && chmod 600 ~/.ssh/authorized_keys`
            )
        }

        await db
            .update(agents)
            .set({ sshKeyId: sshKeyId || null })
            .where(eq(agents.id, agent.id))

        return ok(c, { sshKeyId: sshKeyId || null }, t('api.sshKeyUpdated'))
    } catch (error) {
        console.error('updateAgentSSHKey', error)
        return fail(c, t('api.failedToUpdateSSHKey'), 500)
    }
})

export default updateAgentSSHKey