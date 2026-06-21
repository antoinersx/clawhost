import type { AgentFileType } from '@/ts/Types'

import { agentFileType } from '@openclaw/shared'

const getFileIconColor = (fileType: AgentFileType): string => {
    if (fileType === agentFileType.json)
        return 'h-3.5 w-3.5 shrink-0 text-yellow-500'
    if (fileType === agentFileType.javascript)
        return 'h-3.5 w-3.5 shrink-0 text-yellow-500'
    if (fileType === agentFileType.typescript)
        return 'h-3.5 w-3.5 shrink-0 text-blue-500'
    if (fileType === agentFileType.markdown)
        return 'h-3.5 w-3.5 shrink-0 text-blue-400'
    if (fileType === agentFileType.yaml)
        return 'h-3.5 w-3.5 shrink-0 text-purple-400'
    if (fileType === agentFileType.text)
        return 'h-3.5 w-3.5 shrink-0 text-zinc-400'
    return 'h-3.5 w-3.5 shrink-0'
}

export default getFileIconColor