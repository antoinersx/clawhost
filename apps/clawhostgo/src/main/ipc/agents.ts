import type { IpcMainInvokeEvent } from 'electron'
import type { CreateAgentData, RenameAgentData } from '@/ts/Interfaces'

import { dialog, BrowserWindow, net as electronNet } from 'electron'
import fs from 'fs'
import path from 'path'
import crypto from 'crypto'
import { execFile } from 'child_process'
import { agentProvider, agentStatus, agentType } from '@openclaw/shared'
import { t } from '@openclaw/i18n'
import {
    configStore,
    processManager,
    versionManager,
    agentSpec
} from '@/main/services'
import domainEvents from '@/main/ipc/domainEvents'
import DOMAIN_EVENT from '@/main/ipc/domainEventNames'
import ipcPipeline from '@/main/ipc/pipeline'

const adjectives = [
    'cozy',
    'swift',
    'brave',
    'calm',
    'tiny',
    'wild',
    'warm',
    'cool',
    'happy',
    'lucky',
    'fuzzy',
    'snowy',
    'dusty',
    'misty',
    'sunny',
    'sleepy',
    'clever',
    'gentle',
    'mighty',
    'silent',
    'golden',
    'cosmic',
    'polar',
    'rusty',
    'nimble',
    'jolly',
    'witty',
    'noble',
    'vivid',
    'crisp'
]

const nouns = [
    'agent',
    'panda',
    'otter',
    'fox',
    'wolf',
    'bear',
    'falcon',
    'lynx',
    'raven',
    'crane',
    'pike',
    'owl',
    'hare',
    'frog',
    'moth',
    'finch',
    'cedar',
    'maple',
    'birch',
    'reef',
    'dune',
    'peak',
    'brook',
    'grove',
    'ember',
    'spark',
    'drift',
    'frost',
    'cloud',
    'storm'
]

const generateAgentName = (): string => {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)]
    const noun = nouns[Math.floor(Math.random() * nouns.length)]
    return `${adj}-${noun}`
}

const GATEWAY_READY_TIMEOUT_MS = 300_000
const GATEWAY_READY_POLL_INTERVAL_MS = 1_000
const GATEWAY_READY_REQUIRED_HITS = 3

const probeHttp = (port: number, token: string): Promise<boolean> =>
    new Promise((resolve) => {
        let done = false
        const settle = (ok: boolean): void => {
            if (done) return
            done = true
            resolve(ok)
        }
        try {
            const request = electronNet.request({
                method: 'GET',
                url: `http://127.0.0.1:${port}/?token=${encodeURIComponent(token)}`,
                redirect: 'manual'
            })
            request.on('response', (response) => {
                response.on('data', () => {})
                response.on('error', () => settle(false))
                settle(response.statusCode === 200)
            })
            request.on('error', () => settle(false))
            request.on('abort', () => settle(false))
            setTimeout(() => {
                try {
                    request.abort()
                } catch {}
                settle(false)
            }, 2_000)
            request.end()
        } catch {
            settle(false)
        }
    })

const waitForGatewayReady = async (
    port: number,
    token: string
): Promise<boolean> => {
    const deadline = Date.now() + GATEWAY_READY_TIMEOUT_MS
    let consecutiveHits = 0
    while (Date.now() < deadline) {
        if (await probeHttp(port, token)) {
            consecutiveHits += 1
            if (consecutiveHits >= GATEWAY_READY_REQUIRED_HITS) return true
        } else {
            consecutiveHits = 0
        }
        await new Promise((r) =>
            setTimeout(r, GATEWAY_READY_POLL_INTERVAL_MS)
        )
    }
    return false
}

const resolveGatewayToken = (
    agent: NonNullable<ReturnType<typeof configStore.findAgent>>
): string => {
    if (agent.gatewayToken) return agent.gatewayToken
    try {
        const spec = agentSpec.getAgentSpec(agent.agentType)
        const configPath = path.join(
            configStore.getAgentDir(agent.name),
            spec.configFileName
        )
        const raw = fs.readFileSync(configPath, 'utf-8')
        const cfg = JSON.parse(raw)
        const token = cfg?.gateway?.auth?.token
        if (token) {
            configStore.updateAgent(agent.id, { gatewayToken: token })
            return token
        }
    } catch {}
    return ''
}

const mapAgentToResponse = (
    agent: ReturnType<typeof configStore.findAgent>
) => {
    if (!agent) return null
    const gatewayToken = resolveGatewayToken(agent)
    return {
        id: agent.id,
        name: agent.name,
        agentType: agent.agentType || agentType.OPENCLAW,
        provider: agentProvider.local,
        status: processManager.isRunning(agent.id)
            ? agentStatus.running
            : agentStatus.stopped,
        ip: '127.0.0.1',
        planId: agentProvider.local,
        location: agentProvider.local,
        rootPassword: agent.password || null,
        hasRootPassword: !!agent.password,
        sshKeyId: null,
        providerServerId: null,
        subdomain: agent.subdomain,
        gatewayToken,
        subscriptionStatus: null,
        currentPeriodStart: null,
        currentPeriodEnd: null,
        volumes: [],
        ownerEmail: null,
        deletionScheduledAt: null,
        createdAt: agent.createdAt,
        port: agent.port
    }
}

const registerAgentHandlers = (): void => {
    ipcPipeline.handle('getAgents', () => {
        const config = configStore.readConfig()
        return config.agents.map((agent) => mapAgentToResponse(agent))
    })

    ipcPipeline.handle('getAgent', (_event: IpcMainInvokeEvent, id: string) => {
        const agent = configStore.findAgent(id)
        return mapAgentToResponse(agent)
    })

    ipcPipeline.handle(
        'createAgent',
        async (_event: IpcMainInvokeEvent, data: CreateAgentData) => {
            const config = configStore.readConfig()
            const name = data.name || generateAgentName()
            const nameRegex = /^[a-zA-Z0-9-]+$/
            if (!nameRegex.test(name)) {
                throw new Error(t('go.invalidAgentName'))
            }

            const duplicate = config.agents.find(
                (c) => c.name.toLowerCase() === name.toLowerCase()
            )
            if (duplicate) {
                throw new Error(t('go.clawNameAlreadyExists'))
            }

            const selectedAgentType =
                data.agentType === agentType.HERMES
                    ? agentType.HERMES
                    : agentType.OPENCLAW
            const spec = agentSpec.getAgentSpec(selectedAgentType)

            const version =
                await versionManager.getLatestVersion(selectedAgentType)
            if (!version) throw new Error(t('go.failedToFetchLatestVersion'))

            const id = crypto.randomUUID()
            const port = configStore.getNextAvailablePort()
            const gatewayToken =
                data.gatewayToken || crypto.randomBytes(24).toString('hex')
            const subdomain = configStore.generateSlug(id)

            const agentDir = configStore.getAgentDir(name)
            fs.mkdirSync(agentDir, { recursive: true })
            fs.mkdirSync(path.join(agentDir, 'agents', 'main', 'agent'), {
                recursive: true
            })

            await versionManager.installVersionTo(
                selectedAgentType,
                version,
                agentDir
            )

            const defaultConfig = spec.defaultConfig(
                subdomain,
                gatewayToken || undefined
            )
            const configPath = path.join(agentDir, spec.configFileName)
            fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 4))
            fs.writeFileSync(path.join(agentDir, '.env'), '')

            const newAgent = {
                id,
                name,
                agentType: selectedAgentType,
                port,
                version,
                gatewayToken,
                subdomain,
                ...(data.password && { password: data.password }),
                createdAt: new Date().toISOString()
            }

            const cleanupOnFailure = async (): Promise<void> => {
                try {
                    await processManager.stopGateway(id)
                } catch {}
                if (fs.existsSync(agentDir)) {
                    fs.rmSync(agentDir, { recursive: true, force: true })
                }
            }

            if (version) {
                try {
                    await processManager.startGateway(
                        id,
                        agentDir,
                        port,
                        version,
                        gatewayToken,
                        selectedAgentType
                    )
                } catch (error) {
                    await cleanupOnFailure()
                    throw error
                }
                const ready = await waitForGatewayReady(port, gatewayToken)
                if (!ready) {
                    await cleanupOnFailure()
                    throw new Error(t('go.gatewayNotReady'))
                }
                setTimeout(() => {
                    try {
                        const raw = fs.readFileSync(configPath, 'utf-8')
                        const cfg = JSON.parse(raw)
                        if (!cfg.gateway?.controlUi) return
                        const origins = cfg.gateway.controlUi.allowedOrigins
                        if (
                            JSON.stringify(origins) !== JSON.stringify(['*'])
                        ) {
                            cfg.gateway.controlUi.allowedOrigins = ['*']
                            fs.writeFileSync(
                                configPath,
                                JSON.stringify(cfg, null, 4)
                            )
                        }
                    } catch {}
                }, 5000)
            }

            configStore.addAgent(newAgent)
            domainEvents.emit(DOMAIN_EVENT.AGENT_CREATED, {
                id: newAgent.id,
                name: newAgent.name,
                subdomain: newAgent.subdomain
            })

            return mapAgentToResponse(newAgent)
        }
    )

    ipcPipeline.handle(
        'deleteAgent',
        (_event: IpcMainInvokeEvent, id: string) => {
            const agent = configStore.findAgent(id)
            if (!agent) throw new Error(t('go.clawNotFound'))

            const agentDir = configStore.getAgentDir(agent.name)
            configStore.removeAgent(id)
            domainEvents.emit(DOMAIN_EVENT.AGENT_DELETED, {
                id: agent.id,
                name: agent.name,
                subdomain: agent.subdomain
            })

            ;(async () => {
                try {
                    if (processManager.isRunning(id)) {
                        await processManager.stopGateway(id)
                    }
                    if (fs.existsSync(agentDir)) {
                        await fs.promises.rm(agentDir, {
                            recursive: true,
                            force: true
                        })
                    }
                } catch (error) {
                    console.error('deleteAgent', error)
                }
            })()

            return { success: true }
        }
    )

    ipcPipeline.handle(
        'renameAgent',
        (_event: IpcMainInvokeEvent, id: string, data: RenameAgentData) => {
            const agent = configStore.findAgent(id)
            if (!agent) throw new Error(t('go.clawNotFound'))

            const nameRegex = /^[a-zA-Z0-9-]+$/
            if (!data.name || !nameRegex.test(data.name)) {
                throw new Error(t('go.invalidAgentName'))
            }

            const config = configStore.readConfig()
            const duplicate = config.agents.find(
                (c) =>
                    c.id !== id &&
                    c.name.toLowerCase() === data.name.toLowerCase()
            )
            if (duplicate) {
                throw new Error(t('go.clawNameAlreadyExists'))
            }

            const oldDir = configStore.getAgentDir(agent.name)
            const newDir = configStore.getAgentDir(data.name)

            if (fs.existsSync(oldDir)) {
                fs.renameSync(oldDir, newDir)
            }

            configStore.updateAgent(id, { name: data.name })
            const updated = configStore.findAgent(id)
            return mapAgentToResponse(updated)
        }
    )

    ipcPipeline.handle(
        'updateAgentSubdomain',
        (
            _event: IpcMainInvokeEvent,
            id: string,
            data: { subdomain: string }
        ) => {
            const agent = configStore.findAgent(id)
            if (!agent) throw new Error(t('go.clawNotFound'))

            const slugRegex = /^[a-z0-9]{3,20}$/
            if (!data.subdomain || !slugRegex.test(data.subdomain)) {
                throw new Error(t('go.invalidSubdomain'))
            }

            const config = configStore.readConfig()
            const duplicate = config.agents.find(
                (c) => c.id !== id && c.subdomain === data.subdomain
            )
            if (duplicate) {
                throw new Error(t('go.subdomainAlreadyInUse'))
            }

            const oldSubdomain = agent.subdomain
            configStore.updateAgent(id, { subdomain: data.subdomain })
            domainEvents.emit(DOMAIN_EVENT.AGENT_DELETED, {
                id: agent.id,
                name: agent.name,
                subdomain: oldSubdomain
            })
            domainEvents.emit(DOMAIN_EVENT.AGENT_CREATED, {
                id: agent.id,
                name: agent.name,
                subdomain: data.subdomain
            })
            const updated = configStore.findAgent(id)
            return mapAgentToResponse(updated)
        }
    )

    ipcPipeline.handle('syncAgent', (_event: IpcMainInvokeEvent, id: string) => {
        const agent = configStore.findAgent(id)
        if (!agent) throw new Error(t('go.clawNotFound'))
        return mapAgentToResponse(agent)
    })

    ipcPipeline.handle(
        'cancelDeletion',
        (_event: IpcMainInvokeEvent, id: string) => {
            const agent = configStore.findAgent(id)
            if (!agent) throw new Error(t('go.clawNotFound'))
            return mapAgentToResponse(agent)
        }
    )

    ipcPipeline.handle(
        'hardDeleteAgent',
        (_event: IpcMainInvokeEvent, id: string) => {
            const agent = configStore.findAgent(id)
            if (!agent) throw new Error(t('go.clawNotFound'))

            const agentDir = configStore.getAgentDir(agent.name)
            configStore.removeAgent(id)
            domainEvents.emit(DOMAIN_EVENT.AGENT_DELETED, {
                id: agent.id,
                name: agent.name,
                subdomain: agent.subdomain
            })

            ;(async () => {
                try {
                    if (processManager.isRunning(id)) {
                        await processManager.stopGateway(id)
                    }
                    if (fs.existsSync(agentDir)) {
                        await fs.promises.rm(agentDir, {
                            recursive: true,
                            force: true
                        })
                    }
                } catch (error) {
                    console.error('hardDeleteAgent', error)
                }
            })()

            return { success: true }
        }
    )

    ipcPipeline.handle('getNextAvailablePort', () => {
        return configStore.getNextAvailablePort()
    })

    ipcPipeline.handle(
        'exportAgent',
        async (_event: IpcMainInvokeEvent, id: string, filename: string) => {
            const agent = configStore.findAgent(id)
            if (!agent) throw new Error(t('go.clawNotFound'))

            const agentDir = configStore.getAgentDir(agent.name)
            if (!fs.existsSync(agentDir))
                throw new Error(t('go.clawDirectoryNotFound'))

            const win = BrowserWindow.getFocusedWindow()
            const result = await dialog.showSaveDialog(win!, {
                defaultPath: filename,
                filters: [{ name: 'Tar Archive', extensions: ['tar.gz'] }]
            })

            if (result.canceled || !result.filePath) return

            await new Promise<void>((resolve, reject) => {
                execFile(
                    'tar',
                    [
                        '-czf',
                        result.filePath!,
                        '-C',
                        path.dirname(agentDir),
                        path.basename(agentDir)
                    ],
                    (error) => {
                        if (error) reject(new Error(t('go.exportFailed')))
                        else resolve()
                    }
                )
            })
        }
    )
}

export default registerAgentHandlers