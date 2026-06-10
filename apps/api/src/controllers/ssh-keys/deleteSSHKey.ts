import type { AuthenticatedContext } from '@/ts/Types'

import { eq, and } from 'drizzle-orm'
import { db } from '@/db'
import { sshKeys, agents, pendingAgents } from '@/db/schema'
import { getProvider } from '@/services/provider'
import { ok, fail } from '@/lib/response'
import { t } from '@openclaw/i18n'
import { withErrorHandler } from '@/lib'

const deleteSSHKey = withErrorHandler(
    'deleteSSHKey',
    'api.failedToDeleteSshKey'
)(async (c: AuthenticatedContext) => {
    const userId = c.get('userId')
    const id = c.req.param('id')!

    const key = await db
        .select()
        .from(sshKeys)
        .where(and(eq(sshKeys.id, id), eq(sshKeys.userId, userId)))
        .limit(1)

    if (!key[0]) return fail(c, t('api.sshKeyNotFound'), 404)

    const [references, pendingRefs] = await Promise.all([
        db
            .select({ id: agents.id })
            .from(agents)
            .where(eq(agents.sshKeyId, id))
            .limit(1),
        db
            .select({ id: pendingAgents.id })
            .from(pendingAgents)
            .where(eq(pendingAgents.sshKeyId, id))
            .limit(1)
    ])

    if (references[0] || pendingRefs[0])
        return fail(c, t('api.sshKeyInUse'), 400)

    const providerDeletions: Promise<void>[] = []
    if (key[0].providerKeyId) {
        providerDeletions.push(
            getProvider()
                .deleteSSHKey(key[0].providerKeyId)
                .catch((error) => console.error('deleteSSHKey', error))
        )
    }
    await Promise.all([
        ...providerDeletions,
        db.delete(sshKeys).where(eq(sshKeys.id, id))
    ])

    return ok(c, null, t('api.sshKeyDeleted'))
})

export default deleteSSHKey