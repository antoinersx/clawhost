import { versionCache } from '@/controllers/agents/helpers'

const invalidateVersionCache = (ip: string): void => {
    versionCache.delete(ip)
}

export default invalidateVersionCache