import type { CreateSSHKeyBody } from '@/ts/Interfaces'
import type { AuthenticatedContext } from '@/ts/Types'

import crypto from 'crypto'
import { eq, count } from 'drizzle-orm'
import { inputValidation } from '@openclaw/shared'
import { db } from '@/db'
import { sshKeys } from '@/db/schema'
import { getProvider } from '@/services/provider'
import { ok, fail } from '@/lib/response'
import { t } from '@openclaw/i18n'
import { withErrorHandler } from '@/lib'

const createSSHKey = withErrorHandler(
    'createSSHKey',
    'api.failedToCreateSshKey'
)(async (c: AuthenticatedContext) => {
    const userId = c.get('userId')
    const { name, publicKey } = await c.req.json<CreateSSHKeyBody>()

    if (!name || !publicKey) return fail(c, t('api.nameAndKeyRequired'), 400)

    if (
        name.length > inputValidation.SSH_KEY_NAME.MAX ||
        publicKey.length > inputValidation.SSH_KEY_PUBLIC_KEY.MAX
    )
        return fail(c, t('api.inputTooLong'), 400)

    const [{ value: keyCount }] = await db
        .select({ value: count() })
        .from(sshKeys)
        .where(eq(sshKeys.userId, userId))

    if (keyCount >= inputValidation.SSH_KEYS_PER_ACCOUNT.MAX) {
        return fail(
            c,
            t('api.sshKeyLimitReached', {
                max: inputValidation.SSH_KEYS_PER_ACCOUNT.MAX
            }),
            400
        )
    }

    if (!publicKey.startsWith('ssh-') && !publicKey.startsWith('ecdsa-'))
        return fail(c, t('api.invalidSshKeyFormat'), 400)

    const keyLabel = `${name}-${userId.slice(0, 8)}`

    const hetznerKey = await getProvider().createSSHKey(keyLabel, publicKey)

    const id = crypto.randomUUID()
    await db.insert(sshKeys).values({
        id,
        userId,
        name,
        publicKey,
        fingerprint: hetznerKey.fingerprint,
        providerKeyId: hetznerKey.id
    })

    return ok(
        c,
        {
            id,
            name,
            fingerprint: hetznerKey.fingerprint,
            publicKey,
            createdAt: new Date().toISOString()
        },
        t('api.sshKeyCreated')
    )
})

export default createSSHKey