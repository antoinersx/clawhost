import type { LocalAgentConfig, ConfigFile } from '@/ts/Interfaces'

import fs from 'fs'
import path from 'path'
import os from 'os'
import crypto from 'crypto'

const BASE_DIR = path.join(os.homedir(), '.clawhostgo')
const CONFIG_PATH = path.join(BASE_DIR, 'config.json')

const DEFAULT_CONFIG: ConfigFile = {
    agents: [],
    defaultVersion: '',
    portRange: { min: 18789, max: 18889 },
    createdAt: new Date().toISOString()
}

const cleanupOrphanAgentDirs = (): void => {
    const agentsDir = path.join(BASE_DIR, 'agents')
    if (!fs.existsSync(agentsDir)) return
    const knownNames = new Set(readConfig().agents.map((a) => a.name))
    for (const entry of fs.readdirSync(agentsDir, { withFileTypes: true })) {
        if (!entry.isDirectory()) continue
        if (knownNames.has(entry.name)) continue
        try {
            fs.rmSync(path.join(agentsDir, entry.name), {
                recursive: true,
                force: true
            })
        } catch (error) {
            console.error('cleanupOrphanAgentDirs', error)
        }
    }
}

const ensureDirectories = (): void => {
    const dirs = [
        BASE_DIR,
        path.join(BASE_DIR, 'agents'),
        path.join(BASE_DIR, 'versions'),
        path.join(BASE_DIR, 'node'),
        path.join(BASE_DIR, 'certs')
    ]
    for (const dir of dirs) {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true })
        }
    }
    if (!fs.existsSync(CONFIG_PATH)) {
        fs.writeFileSync(CONFIG_PATH, JSON.stringify(DEFAULT_CONFIG, null, 4))
    } else {
        const config = readConfig()
        let dirty = false
        if (!config.createdAt) {
            config.createdAt = new Date().toISOString()
            dirty = true
        }
        for (const agent of config.agents) {
            if (!agent.subdomain) {
                agent.subdomain = generateSlug(agent.id)
                dirty = true
            }
        }
        if (dirty) writeConfig(config)
    }
    cleanupOrphanAgentDirs()
}

const readConfig = (): ConfigFile => {
    try {
        const raw = fs.readFileSync(CONFIG_PATH, 'utf-8')
        return JSON.parse(raw) as ConfigFile
    } catch {
        return { ...DEFAULT_CONFIG }
    }
}

const writeConfig = (config: ConfigFile): void => {
    const tmpPath = CONFIG_PATH + '.tmp'
    fs.writeFileSync(tmpPath, JSON.stringify(config, null, 4))
    fs.renameSync(tmpPath, CONFIG_PATH)
}

const generateSlug = (id: string): string => {
    const chars = 'abcdefghjkmnpqrstuvwxyz23456789'
    const hash = crypto.createHash('sha256').update(id).digest()
    let slug = ''
    for (let i = 0; i < 8; i++) {
        slug += chars[hash[i] % chars.length]
    }
    return slug
}

const findAgent = (id: string): LocalAgentConfig | null => {
    const config = readConfig()
    return config.agents.find((c) => c.id === id) || null
}

const findAgentBySubdomain = (subdomain: string): LocalAgentConfig | null => {
    const config = readConfig()
    return config.agents.find((c) => c.subdomain === subdomain) || null
}

const addAgent = (agent: LocalAgentConfig): void => {
    const config = readConfig()
    config.agents.push(agent)
    writeConfig(config)
}

const removeAgent = (id: string): void => {
    const config = readConfig()
    config.agents = config.agents.filter((c) => c.id !== id)
    writeConfig(config)
}

const updateAgent = (id: string, updates: Partial<LocalAgentConfig>): void => {
    const config = readConfig()
    const index = config.agents.findIndex((c) => c.id === id)
    if (index !== -1) {
        config.agents[index] = { ...config.agents[index], ...updates }
        writeConfig(config)
    }
}

const getNextAvailablePort = (): number => {
    const config = readConfig()
    const usedPorts = new Set(config.agents.map((c) => c.port))
    for (
        let port = config.portRange.min;
        port <= config.portRange.max;
        port++
    ) {
        if (!usedPorts.has(port)) {
            return port
        }
    }
    return config.portRange.max + 1
}

const getAgentDir = (name: string): string => {
    return path.join(BASE_DIR, 'agents', name)
}

const getVersionDir = (version: string): string => {
    return path.join(BASE_DIR, 'versions', version)
}

const getBaseDir = (): string => BASE_DIR

const configStore = {
    ensureDirectories,
    readConfig,
    writeConfig,
    generateSlug,
    findAgent,
    findAgentBySubdomain,
    addAgent,
    removeAgent,
    updateAgent,
    getNextAvailablePort,
    getAgentDir,
    getVersionDir,
    getBaseDir
}

export default configStore