import type { UpdateAgentSubdomainBody } from '@/ts/Interfaces'
import type { AuthenticatedContext } from '@/ts/Types'

import { eq, and, ne } from 'drizzle-orm'
import { inputValidation, agentStatus } from '@openclaw/shared'
import { db } from '@/db'
import { agents } from '@/db/schema'
import { cloudflare, executeSSH } from '@/services'
import { t } from '@openclaw/i18n'
import { ok, fail } from '@/lib/response'
import { withErrorHandler } from '@/lib'
import {
    findUserAgent,
    getAgentConfig,
    sanitizeAgent,
    safeShellWrite,
    DOMAIN
} from '@/controllers/agents/helpers'
import { gatewayDefaults } from '@/lib/constants'

const SUBDOMAIN_CHANGE_WINDOW = 86_400_000

const generateNginxConfig = (fullDomain: string): string => {
    return `map $http_upgrade $connection_upgrade {
    default upgrade;
    '' close;
}

server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name _;
    return 444;
}

server {
    listen 80;
    listen [::]:80;
    server_name ${fullDomain};

    location / {
        proxy_pass ${gatewayDefaults.BASE_URL};
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 86400;
        proxy_send_timeout 86400;
    }
}`
}

const updateAgentSubdomain = withErrorHandler('updateAgentSubdomain')(async (
    c: AuthenticatedContext
) => {
    const userId = c.get('userId')
    const id = c.req.param('id')!
    const body = await c.req.json<UpdateAgentSubdomainBody>()

    const subdomain = body.subdomain?.trim().toLowerCase()

    if (!subdomain) return fail(c, t('api.invalidSubdomain'), 400)

    const subdomainRegex = new RegExp(
        `^[a-z0-9]{${inputValidation.SUBDOMAIN.MIN},${inputValidation.SUBDOMAIN.MAX}}$`
    )
    if (!subdomainRegex.test(subdomain))
        return fail(c, t('api.invalidSubdomain'), 400)

    const agent = await findUserAgent(userId, id, c.get('isAdmin'))
    if (!agent) return fail(c, t('api.agentNotFound'), 404)

    const agentSubdomainConfig = getAgentConfig(agent.agentType)
    if (!agentSubdomainConfig.configFile)
        return fail(c, t('api.subdomainNotSupported'), 400)

    if (agent.status !== agentStatus.running)
        return fail(c, t('api.agentBusy'), 400)

    if (!agent.ip || !agent.rootPassword || !agent.subdomain)
        return fail(c, t('api.agentBusy'), 400)

    if (subdomain === agent.subdomain) return ok(c, sanitizeAgent(agent))

    if (!c.get('isAdmin') && agent.lastSubdomainChangedAt) {
        const elapsed = Date.now() - agent.lastSubdomainChangedAt.getTime()
        if (elapsed < SUBDOMAIN_CHANGE_WINDOW)
            return fail(c, t('api.subdomainRateLimited'), 429)
    }

    const [existing] = await db
        .select({ id: agents.id })
        .from(agents)
        .where(and(eq(agents.subdomain, subdomain), ne(agents.id, id)))
        .limit(1)

    if (existing) return fail(c, t('api.subdomainAlreadyInUse'), 409)

    const oldSubdomain = agent.subdomain
    const fullDomain = `${subdomain}.${DOMAIN}`

    const oldRecord = await cloudflare.findDNSRecord(oldSubdomain)
    if (oldRecord) await cloudflare.deleteDNSRecord(oldRecord.id)

    await cloudflare.createDNSRecord(subdomain, agent.ip)

    const { nginxSite } = getAgentConfig(agent.agentType)
    const nginxConfig = generateNginxConfig(fullDomain)
    await safeShellWrite(
        agent.ip,
        agent.rootPassword,
        `/etc/nginx/sites-available/${nginxSite}`,
        nginxConfig,
        15000
    )

    const oldFullDomain = `${oldSubdomain}.${DOMAIN}`
    const sslEmail = `ssl@${DOMAIN}`
    const q = (s: string): string => `'${s.replace(/'/g, "'\\''")}'`

    await executeSSH(
        agent.ip,
        agent.rootPassword,
        [
            `certbot delete --cert-name ${q(oldFullDomain)} --non-interactive 2>/dev/null || true`,
            'nginx -t && systemctl reload nginx',
            `for i in $(seq 1 24); do if host ${q(fullDomain)} 1.1.1.1 > /dev/null 2>&1; then sleep 15; break; fi; sleep 5; done`,
            `certbot --nginx -d ${q(fullDomain)} --non-interactive --agree-tos --email ${q(sslEmail)} --redirect`
        ].join(' && '),
        120000
    )

    await db
        .update(agents)
        .set({
            subdomain,
            lastSubdomainChangedAt: new Date()
        })
        .where(eq(agents.id, id))

    const updated = { ...agent, subdomain, lastSubdomainChangedAt: new Date() }

    return ok(c, sanitizeAgent(updated), t('api.subdomainUpdated'))
})

export default updateAgentSubdomain