import type { AgentFileType } from '@/ts/Types'

import { agentFileType } from '@openclaw/shared'
import { executeSSH } from '@/services'
import { getBaseDir, withAgent } from '@/controllers/agents/helpers'
import { t } from '@openclaw/i18n'
import { ok } from '@/lib/response'
import { withErrorHandler } from '@/lib'

const getFileType = (name: string): AgentFileType => {
    if (name.endsWith('.json') || name.endsWith('.jsonb'))
        return agentFileType.json
    if (name.endsWith('.md')) return agentFileType.markdown
    if (name.endsWith('.js')) return agentFileType.javascript
    if (name.endsWith('.ts') || name.endsWith('.tsx'))
        return agentFileType.typescript
    if (name.endsWith('.yml') || name.endsWith('.yaml'))
        return agentFileType.yaml
    if (name.endsWith('.html') || name.endsWith('.htm'))
        return agentFileType.html
    if (
        name.endsWith('.sh') ||
        name.endsWith('.bash') ||
        name.endsWith('.zsh') ||
        name.endsWith('.fish')
    )
        return agentFileType.shell
    if (!name.includes('.')) return agentFileType.text
    return agentFileType.unknown
}

const listAgentFiles = withErrorHandler(
    'listAgentFiles',
    'api.failedToListFiles'
)(
    withAgent({ requireSSH: 'api.failedToListFiles' })(async (c, agent) => {
        const baseDir = getBaseDir(agent.agentType)

        const output = await executeSSH(
            agent.ip!,
            agent.rootPassword!,
            `find -P ${baseDir} -type f 2>/dev/null | sort`
        )

        const files = output
            .split('\n')
            .filter((line) => line.trim().length > 0)
            .map((fullPath) => {
                const relativePath = fullPath.replace(`${baseDir}/`, '')
                const name = relativePath.split('/').pop() || relativePath
                return {
                    path: relativePath,
                    name,
                    fileType: getFileType(name)
                }
            })

        return ok(c, { files }, t('api.filesFetched'))
    })
)

export default listAgentFiles