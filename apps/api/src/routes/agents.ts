import type { HonoEnv } from '@/ts/Types'

import { Hono } from 'hono'
import {
    getAgents,
    getAdminAgents,
    getAgent,
    getAgentStars,
    initiateAgentPurchase,
    syncAgent,
    startAgent,
    stopAgent,
    restartAgent,
    deleteAgent,
    cancelDeletion,
    hardDeleteAgent,
    getAgentDiagnostics,
    getAgentLogs,
    repairAgent,
    listAgentFiles,
    readAgentFile,
    updateAgentFile,
    reinstallAgent,
    exportAgent,
    getAgentVersion,
    getAgentVersions,
    installAgentVersion,
    renameAgent,
    getAgentCredentials,
    getAgentBilling,
    cancelPendingAgent,
    updateAgentSubdomain,
    checkSubdomainAvailability,
    getAgentMetrics,
    getAgentOverview,
    enablePreview,
    rotatePassword,
    rotateGatewayToken,
    updateAgentEmoji,
    updateAgentSSHKey
} from '@/controllers/agents'
import { adminOnly } from '@/middleware'

const app = new Hono<HonoEnv>()

app.get('/', getAgents)
app.get('/admin', adminOnly, getAdminAgents)
app.get('/check-subdomain', checkSubdomainAvailability)
app.get('/stars', getAgentStars)
app.get('/:id', getAgent)
app.post('/purchase', initiateAgentPurchase)
app.delete('/pending/:id', cancelPendingAgent)
app.post('/:id/sync', syncAgent)
app.post('/:id/start', startAgent)
app.post('/:id/stop', stopAgent)
app.post('/:id/restart', restartAgent)
app.post('/:id/cancel-deletion', cancelDeletion)
app.post('/:id/hard-delete', adminOnly, hardDeleteAgent)
app.post('/:id/diagnostics/status', getAgentDiagnostics)
app.post('/:id/diagnostics/logs', getAgentLogs)
app.post('/:id/diagnostics/repair', adminOnly, repairAgent)
app.post('/:id/reinstall', reinstallAgent)
app.get('/:id/export', exportAgent)
app.post('/:id/files', listAgentFiles)
app.post('/:id/files/read', readAgentFile)
app.put('/:id/files', updateAgentFile)
app.post('/:id/version', getAgentVersion)
app.post('/:id/versions', getAgentVersions)
app.post('/:id/install-version', adminOnly, installAgentVersion)
app.get('/:id/credentials', getAgentCredentials)
app.get('/:id/billing', getAgentBilling)
app.post('/:id/metrics', getAgentMetrics)
app.post('/:id/overview', getAgentOverview)
app.post('/:id/enable-preview', enablePreview)
app.post('/:id/rotate-password', rotatePassword)
app.post('/:id/rotate-gateway-token', rotateGatewayToken)
app.patch('/:id/emoji', updateAgentEmoji)
app.patch('/:id/ssh-key', updateAgentSSHKey)
app.patch('/:id/subdomain', updateAgentSubdomain)
app.patch('/:id', renameAgent)
app.delete('/:id', deleteAgent)

export default app