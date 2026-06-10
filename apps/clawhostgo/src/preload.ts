import type { AppUpdateInfo } from '@/ts/Interfaces'
import type { networkStatus } from '@openclaw/shared'

import { contextBridge, ipcRenderer } from 'electron'
import IPC_CHANNEL from '@/lib/ipcChannels'

const ELECTRON_API_KEY = 'electronAPI'

type NetworkStatus = (typeof networkStatus)[keyof typeof networkStatus]

contextBridge.exposeInMainWorld(ELECTRON_API_KEY, {
    invoke: (channel: string, ...args: unknown[]) =>
        ipcRenderer.invoke(channel, ...args),
    isDesktop: true,
    getAppVersion: () => ipcRenderer.invoke(IPC_CHANNEL.GET_APP_VERSION),
    getPlatform: () => ipcRenderer.invoke(IPC_CHANNEL.GET_PLATFORM),
    getDeviceInfo: () => ipcRenderer.invoke(IPC_CHANNEL.GET_DEVICE_INFO),
    openExternal: (url: string) =>
        ipcRenderer.invoke(IPC_CHANNEL.OPEN_EXTERNAL, url),
    openWindowed: (url: string) =>
        ipcRenderer.invoke(IPC_CHANNEL.OPEN_WINDOWED, url),
    checkNetwork: () =>
        ipcRenderer.invoke(IPC_CHANNEL.CHECK_NETWORK) as Promise<NetworkStatus>,
    getDnsStatus: () => ipcRenderer.invoke(IPC_CHANNEL.GET_DNS_STATUS),
    setupDns: () => ipcRenderer.invoke(IPC_CHANNEL.SETUP_DNS),
    onTerminalData: (callback: (id: string, data: string) => void) => {
        const listener = (
            _event: Electron.IpcRendererEvent,
            id: string,
            data: string
        ) => callback(id, data)
        ipcRenderer.on(IPC_CHANNEL.TERMINAL_DATA, listener)
        return () =>
            ipcRenderer.removeListener(IPC_CHANNEL.TERMINAL_DATA, listener)
    },
    onTerminalExit: (callback: (id: string) => void) => {
        const listener = (_event: Electron.IpcRendererEvent, id: string) =>
            callback(id)
        ipcRenderer.on(IPC_CHANNEL.TERMINAL_EXIT, listener)
        return () =>
            ipcRenderer.removeListener(IPC_CHANNEL.TERMINAL_EXIT, listener)
    },
    checkAppUpdate: () => ipcRenderer.invoke(IPC_CHANNEL.CHECK_APP_UPDATE),
    checkForUpdatesNow: () =>
        ipcRenderer.invoke(IPC_CHANNEL.CHECK_FOR_UPDATES_NOW),
    quitAndInstall: () => ipcRenderer.invoke(IPC_CHANNEL.QUIT_AND_INSTALL),
    onUpdateDownloaded: (callback: (info: AppUpdateInfo) => void) => {
        const listener = (
            _event: Electron.IpcRendererEvent,
            info: AppUpdateInfo
        ) => callback(info)
        ipcRenderer.on(IPC_CHANNEL.UPDATE_DOWNLOADED, listener)
        return () =>
            ipcRenderer.removeListener(IPC_CHANNEL.UPDATE_DOWNLOADED, listener)
    }
})