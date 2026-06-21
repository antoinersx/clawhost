import type { RenameAgentBody } from '@/ts/Interfaces'
import type { AuthenticatedContext } from '@/ts/Types'

import { eq } from 'drizzle-orm'
import { inputValidation } from '@openclaw/shared'
import { db } from '@/db'
import { agents } from '@/db/schema'
import { findUserAgent, sanitizeAgent } from '@/controllers/agents/helpers'
import { t } from '@openclaw/i18n'
import { ok, fail } from '@/lib/response'
import { withErrorHandler } from '@/lib'

const renameAgent = withErrorHandler('renameAgent')(async (
    c: AuthenticatedContext
) => {
    const userId = c.get('userId')
    const id = c.req.param('id')!
    const body = await c.req.json<RenameAgentBody>()

    const name = body.name?.trim()

    if (!name || name.length > inputValidation.CLAW_NAME.MAX) {
        return fail(
            c,
            t('api.invalidAgentName', {
                max: inputValidation.CLAW_NAME.MAX
            }),
            400
        )
    }

    const agent = await findUserAgent(userId, id, c.get('isAdmin'))

    if (!agent) return fail(c, t('api.agentNotFound'), 404)

    await db.update(agents).set({ name }).where(eq(agents.id, id))

    const updated = { ...agent, name }

    return ok(c, sanitizeAgent(updated), t('api.agentRenamed'))
})

export default renameAgent