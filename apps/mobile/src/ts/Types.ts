export type ToastType = 'success' | 'error' | 'warning' | 'info'

import type { agentStatus } from '@openclaw/shared'

export type AgentStatus = (typeof agentStatus)[keyof typeof agentStatus]

export type UserRole = 'user' | 'admin'

export type RootTabParamList = {
    Claws: undefined
    Account: undefined
}

export type RootStackParamList = {
    Tabs: undefined
    ClawDetail: { clawId: string }
    SSHKeys: undefined
    Diagnostics: { clawId: string }
    Versions: { clawId: string }
    Files: { clawId: string }
    FileEditor: { clawId: string; path: string; name: string }
    Terminal: { clawId: string }
}