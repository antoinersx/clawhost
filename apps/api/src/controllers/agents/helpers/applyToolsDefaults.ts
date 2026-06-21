const toolsDefaults = {
    PROFILE: 'full',
    EXEC_HOST: 'gateway',
    EXEC_SECURITY: 'full',
    EXEC_ASK: 'off'
} as const

const applyToolsDefaults = (config: Record<string, unknown>): void => {
    const tools = (config.tools || {}) as Record<string, unknown>
    if (!tools.profile) {
        tools.profile = toolsDefaults.PROFILE
    }
    if (!tools.elevated) {
        tools.elevated = { enabled: true }
    }
    tools.exec = {
        host: toolsDefaults.EXEC_HOST,
        security: toolsDefaults.EXEC_SECURITY,
        ask: toolsDefaults.EXEC_ASK
    }
    config.tools = tools
}

export default applyToolsDefaults