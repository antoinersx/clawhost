import type { UpdateAgentFileBody } from '@/ts/Interfaces'
import type { AuthenticatedContext } from '@/ts/Types'

import path from 'path'
import { inputValidation } from '@openclaw/shared'
import {
    findUserAgent,
    getAgentConfig,
    getBaseDir,
    safeShellWrite
} from '@/controllers/agents/helpers'
import { executeSSH } from '@/services'
import { t } from '@openclaw/i18n'
import { ok, fail } from '@/lib/response'
import { withErrorHandler } from '@/lib'

const updateAgentFile = withErrorHandler(
    'updateAgentFile',
    'api.failedToUpdateFile'
)(async (c: AuthenticatedContext) => {
    const userId = c.get('userId')
    const id = c.req.param('id')!
    const body = await c.req.json<UpdateAgentFileBody>()

    if (
        !body.path ||
        typeof body.path !== 'string' ||
        !body.content ||
        typeof body.content !== 'string'
    )
        return fail(c, t('api.missingRequiredFields'), 400)

    if (body.content.length > inputValidation.FILE_CONTENT.MAX)
        return fail(c, t('api.fileTooLarge'), 400)

    const normalized = path.posix.normalize(body.path)
    if (
        normalized.includes('..') ||
        normalized.startsWith('/') ||
        normalized.includes('\0')
    ) {
        return fail(c, t('api.invalidFilePath'), 400)
    }

    const fileName = normalized.split('/').pop() || normalized
    const isEditable =
        normalized.endsWith('.json') ||
        normalized.endsWith('.jsonb') ||
        normalized.endsWith('.md') ||
        normalized.endsWith('.js') ||
        normalized.endsWith('.ts') ||
        normalized.endsWith('.tsx') ||
        normalized.endsWith('.yml') ||
        normalized.endsWith('.yaml') ||
        !fileName.includes('.')

    if (!isEditable) return fail(c, t('api.fileNotEditable'), 400)

    if (normalized.endsWith('.json') || normalized.endsWith('.jsonb')) {
        try {
            JSON.parse(body.content)
        } catch {
            return fail(c, t('api.invalidJsonConfig'), 400)
        }
    }

    const agent = await findUserAgent(userId, id, c.get('isAdmin'))

    if (!agent) return fail(c, t('api.agentNotFound'), 404)

    if (!agent.ip || !agent.rootPassword)
        return fail(c, t('api.failedToUpdateFile'), 400)

    const agentConfig = getAgentConfig(agent.agentType)
    const baseDir = getBaseDir(agent.agentType)
    const fullPath = `${baseDir}/${normalized}`

    await safeShellWrite(agent.ip, agent.rootPassword, fullPath, body.content)

    if (agentConfig.configFile) {
        const restartParts = agentConfig.doctorCommand
            ? `(su - ${agentConfig.user} -c "${agentConfig.doctorCommand}" || true) && systemctl restart ${agentConfig.serviceName}`
            : `systemctl restart ${agentConfig.serviceName}`

        await executeSSH(agent.ip, agent.rootPassword, restartParts, 20000)
    }

    return ok(c, null, t('api.fileSaveSuccess'))
})

export default updateAgentFile