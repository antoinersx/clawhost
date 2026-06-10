import type { UpdateAgentEmojiBody } from '@/ts/Interfaces'
import type { AuthenticatedContext } from '@/ts/Types'

import { eq } from 'drizzle-orm'
import { db } from '@/db'
import { agents } from '@/db/schema'
import { findUserAgent, sanitizeAgent } from '@/controllers/agents/helpers'
import { t } from '@openclaw/i18n'
import { ok, fail } from '@/lib/response'
import { withErrorHandler } from '@/lib'

const updateAgentEmoji = withErrorHandler('updateAgentEmoji')(async (
    c: AuthenticatedContext
) => {
    const userId = c.get('userId')
    const id = c.req.param('id')!
    const body = await c.req.json<UpdateAgentEmojiBody>()

    const emoji = body.emoji
    const emojiColor = body.emojiColor

    if (emoji !== null && emoji.length > 2)
        return fail(c, t('api.failedToUpdateEmoji'), 400)

    const agent = await findUserAgent(userId, id, c.get('isAdmin'))

    if (!agent) return fail(c, t('api.agentNotFound'), 404)

    await db.update(agents).set({ emoji, emojiColor }).where(eq(agents.id, id))

    const updated = { ...agent, emoji, emojiColor }

    return ok(c, sanitizeAgent(updated), t('api.agentEmojiUpdated'))
})

export default updateAgentEmoji