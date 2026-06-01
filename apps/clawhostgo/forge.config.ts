import type { ForgeConfig } from '@electron-forge/shared-types'

import path from 'path'
import fs from 'fs'
import { MakerDMG } from '@electron-forge/maker-dmg'
import { MakerDeb } from '@electron-forge/maker-deb'
import { MakerSquirrel } from '@electron-forge/maker-squirrel'
import { VitePlugin } from '@electron-forge/plugin-vite'

const copyNodePty = (
    buildPath: string,
    _electronVersion: string,
    _platform: string,
    _arch: string,
    callback: (err?: Error) => void
) => {
    const rootNodeModules = path.resolve(__dirname, '../../node_modules')
    const src = path.join(rootNodeModules, NODE_PTY_PACKAGE)
    const dest = path.join(buildPath, 'node_modules', NODE_PTY_PACKAGE)

    if (!fs.existsSync(src)) {
        callback(new Error(`${NODE_PTY_PACKAGE} not found in root node_modules`))
        return
    }

    fs.cpSync(src, dest, { recursive: true })
    callback()
}

const APP_NAME = 'ClawHostGo'
const ENTITLEMENTS_PATH = './resources/entitlements.mac.plist'
const ICON_PATH = './resources/icon'
const WINDOWS_ICON_PATH = './resources/icon.ico'
const EXTRA_RESOURCES = ['./resources/node']
const NODE_PTY_PACKAGE = 'node-pty'
const NODE_PTY_ASAR_UNPACK = '**/node_modules/node-pty/**'
const DMG_FORMAT = 'ULFO'
const DARWIN_PLATFORMS: ['darwin'] = ['darwin']
const MAIN_ENTRY = 'src/main.ts'
const PRELOAD_ENTRY = 'src/preload.ts'
const MAIN_VITE_CONFIG = 'vite.main.config.ts'
const PRELOAD_VITE_CONFIG = 'vite.preload.config.ts'
const RENDERER_VITE_CONFIG = 'vite.renderer.config.ts'
const RENDERER_NAME = 'main_window'

const {
    APPLE_SIGNING_IDENTITY,
    APPLE_ID,
    APPLE_ID_PASSWORD,
    APPLE_TEAM_ID
} = process.env

const shouldSign = Boolean(
    APPLE_SIGNING_IDENTITY && APPLE_ID && APPLE_ID_PASSWORD && APPLE_TEAM_ID
)

const config: ForgeConfig = {
    packagerConfig: {
        asar: {
            unpack: NODE_PTY_ASAR_UNPACK
        },
        name: APP_NAME,
        icon: ICON_PATH,
        extraResource: EXTRA_RESOURCES,
        afterCopy: [copyNodePty],
        ...(shouldSign
            ? {
                  osxSign: {
                      identity: APPLE_SIGNING_IDENTITY,
                      optionsForFile: () => ({
                          entitlements: ENTITLEMENTS_PATH,
                          hardenedRuntime: true,
                          'gatekeeper-assess': false
                      })
                  },
                  osxNotarize: {
                      appleId: APPLE_ID as string,
                      appleIdPassword: APPLE_ID_PASSWORD as string,
                      teamId: APPLE_TEAM_ID as string
                  }
              }
            : {})
    },
    makers: [
        new MakerDMG({ format: DMG_FORMAT }, DARWIN_PLATFORMS),
        new MakerSquirrel({
            name: APP_NAME,
            setupIcon: WINDOWS_ICON_PATH,
            iconUrl:
                'https://cdn.clawhost.cloud/go/icon.ico'
        }),
        new MakerDeb({})
    ],
    plugins: [
        new VitePlugin({
            build: [
                {
                    entry: MAIN_ENTRY,
                    config: MAIN_VITE_CONFIG
                },
                {
                    entry: PRELOAD_ENTRY,
                    config: PRELOAD_VITE_CONFIG
                }
            ],
            renderer: [
                {
                    name: RENDERER_NAME,
                    config: RENDERER_VITE_CONFIG
                }
            ]
        })
    ]
}

export default config