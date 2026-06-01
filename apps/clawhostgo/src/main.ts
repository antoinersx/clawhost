import { app, BrowserWindow } from 'electron'
import { execFile } from 'child_process'
import path from 'path'
import {
    configStore,
    processManager,
    nodeBinary,
    reverseProxy,
    dnsResolver,
    certManager,
    appUpdater
} from '@/main/services'
import { registerAllHandlers } from '@/main/ipc'
import registerHooks from '@/main/ipc/hooks'

declare const MAIN_WINDOW_VITE_DEV_SERVER_URL: string
declare const MAIN_WINDOW_VITE_NAME: string

app.setName('ClawHostGo')
const gotLock = app.requestSingleInstanceLock()

if (!gotLock) {
    app.quit()
} else {
    let mainWindow: BrowserWindow | null = null

    const createWindow = (): void => {
        mainWindow = new BrowserWindow({
            width: 1200,
            height: 800,
            minWidth: 900,
            minHeight: 600,
            show: false,
            backgroundColor: '#0a0a0f',
            titleBarStyle: 'hiddenInset',
            trafficLightPosition: { x: 16, y: 13 },
            hasShadow: true,
            webPreferences: {
                preload: path.join(__dirname, 'preload.js'),
                contextIsolation: true,
                nodeIntegration: false,
                devTools: !!MAIN_WINDOW_VITE_DEV_SERVER_URL
            }
        })

        mainWindow.once('ready-to-show', () => {
            mainWindow?.show()
        })

        mainWindow.webContents.setWindowOpenHandler(({ url }) => {
            execFile('open', [url])
            return { action: 'deny' }
        })

        if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
            mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL)
        } else {
            mainWindow.loadFile(
                path.join(
                    __dirname,
                    `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`
                )
            )
        }
    }

    app.on('second-instance', () => {
        if (mainWindow) {
            if (mainWindow.isMinimized()) mainWindow.restore()
            mainWindow.focus()
        }
    })

    app.whenReady().then(() => {
        configStore.ensureDirectories()
        processManager.cleanOrphanedProcesses()
        registerHooks()
        registerAllHandlers()
        createWindow()
        certManager.ensureCerts()
        nodeBinary.ensureNode()
        reverseProxy.start()
        dnsResolver.startDns()
        appUpdater.start()
    })

    app.on('before-quit', () => {
        reverseProxy.stop()
        dnsResolver.stopDns()
    })

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    })

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
}