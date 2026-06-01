const IPC_CHANNEL = {
    GET_APP_VERSION: 'get-app-version',
    GET_PLATFORM: 'get-platform',
    GET_DEVICE_INFO: 'get-device-info',
    OPEN_EXTERNAL: 'open-external',
    OPEN_WINDOWED: 'open-windowed',
    CHECK_NETWORK: 'checkNetwork',
    GET_DNS_STATUS: 'getDnsStatus',
    SETUP_DNS: 'setupDns',
    TERMINAL_DATA: 'terminal:data',
    TERMINAL_EXIT: 'terminal:exit',
    CHECK_APP_UPDATE: 'check-app-update',
    CHECK_FOR_UPDATES_NOW: 'check-for-updates-now',
    QUIT_AND_INSTALL: 'quit-and-install',
    UPDATE_DOWNLOADED: 'update-downloaded',
    OAUTH_WINDOW: 'oauth-window',
    OAUTH_GITHUB_EXCHANGE: 'oauth-github-exchange'
} as const

export default IPC_CHANNEL