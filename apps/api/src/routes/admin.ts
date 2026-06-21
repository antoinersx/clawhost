import type { HonoEnv } from '@/ts/Types'

import { Hono } from 'hono'
import { apiPaths } from '@openclaw/shared'
import {
    getAdminAnalytics,
    getAdminBilling,
    getAdminAgents,
    getAdminEmails,
    getAdminPendingAgents,
    getAdminReferrals,
    getAdminSSHKeys,
    getAdminStats,
    getAdminUsers,
    getAdminUserDetail,
    getAdminVolumes,
    updateAdminUser
} from '@/controllers/admin'
import { adminOnly } from '@/middleware'

const app = new Hono<HonoEnv>()

app.use('/*', adminOnly)
app.get('/stats', getAdminStats)
app.get('/analytics', getAdminAnalytics)
app.get('/billing', getAdminBilling)
app.get('/users', getAdminUsers)
app.get('/users/:id', getAdminUserDetail)
app.put('/users/:id', updateAdminUser)
app.get(apiPaths.CLAWS.BASE, getAdminAgents)
app.get(`/pending${apiPaths.CLAWS.BASE}`, getAdminPendingAgents)
app.get('/ssh-keys', getAdminSSHKeys)
app.get('/volumes', getAdminVolumes)
app.get('/referrals', getAdminReferrals)
app.get('/emails', getAdminEmails)

export default app