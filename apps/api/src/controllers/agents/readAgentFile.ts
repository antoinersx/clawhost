import type { ReadAgentFileBody } from '@/ts/Interfaces'
import type { AuthenticatedContext } from '@/ts/Types'

import path from 'path'
import { executeSSH } from '@/services'
import { getBaseDir, findUserAgent } from '@/controllers/agents/helpers'
import { t } from '@openclaw/i18n'
import { ok, fail } from '@/lib/response'
import { withErrorHandler } from '@/lib'

const readAgentFile = withErrorHandler(
    'readAgentFile',
    'api.failedToReadFile'
)(async (c: AuthenticatedContext) => {
    const userId = c.get('userId')
    const id = c.req.param('id')!
    const body = await c.req.json<ReadAgentFileBody>()

    if (!body.path || typeof body.path !== 'string')
        return fail(c, t('api.missingRequiredFields'), 400)

    const normalized = path.posix.normalize(body.path)
    if (
        normalized.includes('..') ||
        normalized.startsWith('/') ||
        normalized.includes('\0')
    ) {
        return fail(c, t('api.invalidFilePath'), 400)
    }

    const agent = await findUserAgent(userId, id, c.get('isAdmin'))

    if (!agent) return fail(c, t('api.agentNotFound'), 404)

    if (!agent.ip || !agent.rootPassword)
        return fail(c, t('api.failedToReadFile'), 400)

    const baseDir = getBaseDir(agent.agentType)
    const fullPath = `${baseDir}/${normalized}`
    const content = await executeSSH(
        agent.ip,
        agent.rootPassword,
        `cat '${fullPath.replace(/'/g, "'\\''")}' 2>&1`
    )

    return ok(c, { content, path: normalized }, t('api.fileFetched'))
})

export default readAgentFile