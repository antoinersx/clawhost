import { ipcMain, app, BrowserWindow, net } from 'electron'
import { execFile } from 'child_process'
import registerAgentHandlers from '@/main/ipc/agents'
import registerAgentProcessHandlers from '@/main/ipc/agentProcess'

import registerAgentFileHandlers from '@/main/ipc/agentFiles'
import registerAgentVersionHandlers from '@/main/ipc/agentVersions'
import registerStubHandlers from '@/main/ipc/stubs'
import registerAgentTerminalHandlers from '@/main/ipc/agentTerminal'
import { appUpdater, dnsResolver } from '@/main/services'
import { networkStatus } from '@openclaw/shared'
import { t } from '@openclaw/i18n'
import IPC_CHANNEL from '@/lib/ipcChannels'

const registerAllHandlers = (): void => {
    ipcMain.handle(IPC_CHANNEL.GET_APP_VERSION, () => app.getVersion())
    ipcMain.handle(IPC_CHANNEL.GET_PLATFORM, () => process.platform)
    ipcMain.handle(IPC_CHANNEL.GET_DEVICE_INFO, () => ({
        platform: process.platform,
        arch: process.arch
    }))
    ipcMain.handle(IPC_CHANNEL.OPEN_EXTERNAL, (_event: unknown, url: string) => {
        execFile('open', [url])
    })
    ipcMain.handle(IPC_CHANNEL.OPEN_WINDOWED, (_event: unknown, url: string) => {
        const win = new BrowserWindow({
            width: 1280,
            height: 800,
            webPreferences: {
                nodeIntegration: false,
                contextIsolation: true
            }
        })
        win.setMenuBarVisibility(false)
        win.loadURL(url)
    })
    ipcMain.handle(IPC_CHANNEL.CHECK_NETWORK, async () => {
        const PING_URL = 'https://clients3.google.com/generate_204'
        const LATENCY_THRESHOLD = 3000

        if (!net.isOnline()) return networkStatus.OFFLINE

        try {
            const start = Date.now()
            const response = await net.fetch(PING_URL, { cache: 'no-store' })
            const latency = Date.now() - start
            if (!response.ok && response.status !== 204)
                return networkStatus.UNSTABLE
            return latency > LATENCY_THRESHOLD
                ? networkStatus.UNSTABLE
                : networkStatus.ONLINE
        } catch {
            return networkStatus.UNSTABLE
        }
    })
    ipcMain.handle(IPC_CHANNEL.GET_DNS_STATUS, () => dnsResolver.isDnsSetup())
    ipcMain.handle(IPC_CHANNEL.SETUP_DNS, () => dnsResolver.setupResolver())
    ipcMain.handle(IPC_CHANNEL.CHECK_APP_UPDATE, () => appUpdater.getPendingUpdate())
    ipcMain.handle(IPC_CHANNEL.CHECK_FOR_UPDATES_NOW, () => appUpdater.checkForUpdatesNow())
    ipcMain.handle(IPC_CHANNEL.QUIT_AND_INSTALL, () => appUpdater.quitAndInstall())
    ipcMain.handle(
        IPC_CHANNEL.OAUTH_WINDOW,
        (
            _event: unknown,
            url: string,
            callbackPrefix: string,
            title: string
        ) => {
            return new Promise((resolve, reject) => {
                const win = new BrowserWindow({
                    width: 500,
                    height: 700,
                    title,
                    autoHideMenuBar: true
                })

                let resolved = false

                const tryResolve = (navUrl: string) => {
                    if (resolved || !navUrl.startsWith(callbackPrefix)) return
                    resolved = true
                    const parsed = new URL(navUrl)
                    const hashParams = new URLSearchParams(parsed.hash.slice(1))
                    const queryParams = parsed.searchParams
                    resolve({
                        accessToken:
                            hashParams.get('access_token') ||
                            queryParams.get('access_token'),
                        idToken:
                            hashParams.get('id_token') ||
                            queryParams.get('id_token'),
                        code: queryParams.get('code')
                    })
                    setImmediate(() => win.close())
                }

                win.webContents.on('did-navigate', () => {
                    const pageUrl = win.webContents.getURL()
                    try {
                        const host = new URL(pageUrl).host
                        win.setTitle(`${host} — ${title}`)
                    } catch {}
                    tryResolve(pageUrl)
                })

                win.webContents.on('will-redirect', (_e, redirectUrl) => {
                    tryResolve(redirectUrl)
                })

                win.webContents.on('will-navigate', (_e, navUrl) => {
                    tryResolve(navUrl)
                })

                win.webContents.on('did-finish-load', async () => {
                    try {
                        const currentUrl: string =
                            await win.webContents.executeJavaScript(
                                'location.href'
                            )
                        tryResolve(currentUrl)
                    } catch {}
                })

                win.on('closed', () => {
                    if (!resolved) reject(new Error(t('go.oauthCancelled')))
                })

                win.loadURL(url)
            })
        }
    )

    ipcMain.handle(
        IPC_CHANNEL.OAUTH_GITHUB_EXCHANGE,
        async (_event: unknown, code: string) => {
            const response = await net.fetch(
                'https://github.com/login/oauth/access_token',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json'
                    },
                    body: JSON.stringify({
                        client_id: process.env.GITHUB_CLIENT_ID,
                        client_secret: process.env.GITHUB_CLIENT_SECRET,
                        code
                    })
                }
            )
            const data = (await response.json()) as Record<string, string>
            return { accessToken: data.access_token }
        }
    )

    registerAgentHandlers()
    registerAgentProcessHandlers()
    registerAgentFileHandlers()
    registerAgentVersionHandlers()
    registerStubHandlers()
    registerAgentTerminalHandlers()
}

export { registerAllHandlers }