import type { AppUpdateInfo } from '@/ts/Interfaces'

import { autoUpdater, BrowserWindow, app } from 'electron'
import { updateElectronApp, UpdateSourceType } from 'update-electron-app'

let pendingUpdate: AppUpdateInfo | null = null

const start = (): void => {
    if (!app.isPackaged) return

    updateElectronApp({
        updateSource: {
            type: UpdateSourceType.StaticStorage,
            baseUrl: 'https://cdn.clawhost.cloud/go/${platform}/${arch}'
        },
        updateInterval: '1 hour',
        notifyUser: false
    })

    autoUpdater.on(
        'update-downloaded',
        (_event, _releaseNotes, releaseName) => {
            pendingUpdate = {
                hasUpdate: true,
                currentVersion: app.getVersion(),
                latestVersion: releaseName
            }
            for (const win of BrowserWindow.getAllWindows()) {
                win.webContents.send('update-downloaded', pendingUpdate)
            }
        }
    )
}

const getPendingUpdate = (): AppUpdateInfo => {
    if (pendingUpdate) return pendingUpdate
    return { hasUpdate: false, currentVersion: app.getVersion() }
}

const quitAndInstall = (): void => {
    autoUpdater.quitAndInstall()
}

const CHECK_TIMEOUT_MS = 30000

const UPDATE_EVENTS = [
    'update-downloaded',
    'update-not-available',
    'error'
] as const

const checkForUpdatesNow = (): Promise<AppUpdateInfo> =>
    new Promise((resolve) => {
        if (!app.isPackaged) {
            resolve({ hasUpdate: false, currentVersion: app.getVersion() })
            return
        }
        let timer: NodeJS.Timeout | null = null
        const finish = (info: AppUpdateInfo): void => {
            for (const event of UPDATE_EVENTS) {
                autoUpdater.removeAllListeners(event)
            }
            if (timer) clearTimeout(timer)
            resolve(info)
        }
        autoUpdater.once(
            'update-downloaded',
            (_event, _notes, releaseName: string) => {
                pendingUpdate = {
                    hasUpdate: true,
                    currentVersion: app.getVersion(),
                    latestVersion: releaseName
                }
                finish(pendingUpdate)
            }
        )
        autoUpdater.once('update-not-available', () => {
            finish({ hasUpdate: false, currentVersion: app.getVersion() })
        })
        autoUpdater.once('error', (error: Error) => {
            console.error('checkForUpdatesNow', error)
            finish({ hasUpdate: false, currentVersion: app.getVersion() })
        })
        timer = setTimeout(
            () => finish({ hasUpdate: false, currentVersion: app.getVersion() }),
            CHECK_TIMEOUT_MS
        )
        autoUpdater.checkForUpdates()
    })

const appUpdater = {
    start,
    getPendingUpdate,
    quitAndInstall,
    checkForUpdatesNow
}

export default appUpdater