import type { AuthenticatedContext } from '@/ts/Types'

import { sshStream } from '@/services'
import { findUserAgent, getAgentConfig } from '@/controllers/agents/helpers'
import { checkRateLimit, setRateLimit } from '@/controllers/auth/rateLimit'
import { t } from '@openclaw/i18n'
import { fail } from '@/lib/response'

const EXPORT_RATE_LIMIT_WINDOW = 3_600_000

const exportAgent = async (c: AuthenticatedContext) => {
    try {
        const userId = c.get('userId')
        const id = c.req.param('id')!
        const agent = await findUserAgent(userId, id, c.get('isAdmin'))

        if (!agent) return fail(c, t('api.agentNotFound'), 404)

        if (!agent.ip || !agent.rootPassword)
            return fail(c, t('api.agentNotReady'), 400)

        const retryAfter = await checkRateLimit(
            `export:${id}`,
            EXPORT_RATE_LIMIT_WINDOW
        )

        if (retryAfter > 3)
            return fail(c, t('api.exportRateLimited'), 429, { retryAfter })

        const agentConfig = getAgentConfig(agent.agentType)
        const configDirName = agentConfig.configDir.split('/').pop()

        const stream = await sshStream(
            agent.ip,
            agent.rootPassword,
            `tar czf - -C ${agentConfig.homeDir} ${configDirName}`
        )

        await setRateLimit(`export:${id}`)

        const safeName = agent.name.replace(/[^a-zA-Z0-9._-]/g, '_')
        const filename = `${safeName}-export.tar.gz`

        return new Response(stream, {
            headers: {
                'Content-Type': 'application/gzip',
                'Content-Disposition': `attachment; filename="${filename}"`
            }
        })
    } catch (error) {
        console.error('exportAgent', error)
        return fail(c, t('api.failedToExportAgent'), 500)
    }
}

export default exportAgent