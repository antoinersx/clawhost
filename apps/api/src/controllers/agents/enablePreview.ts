import { withAgent, getAgentConfig, DOMAIN } from '@/controllers/agents/helpers'
import { t } from '@openclaw/i18n'
import { ok, fail } from '@/lib/response'
import { executeSSH } from '@/services'

const enablePreview = withAgent({ requireSSH: 'api.failedToEnablePreview' })(
    async (c, agent) => {
        try {
            const checkOnly = c.req.query('check') === 'true'

            const { nginxSite } = getAgentConfig(agent.agentType)

            const checkResult = await executeSSH(
                agent.ip!,
                agent.rootPassword!,
                `grep -q 'proxy_hide_header Content-Security-Policy' /etc/nginx/sites-available/${nginxSite} && grep -q 'localhost' /etc/nginx/sites-available/${nginxSite} && echo 'ENABLED' || echo 'DISABLED'`
            )

            const alreadyEnabled = checkResult.trim() === 'ENABLED'

            if (alreadyEnabled || checkOnly)
                return ok(c, { enabled: alreadyEnabled })

            const patchLines = [
                'proxy_hide_header Content-Security-Policy;',
                'proxy_hide_header X-Frame-Options;',
                `add_header Content-Security-Policy "frame-ancestors https://${DOMAIN} https://*.${DOMAIN} http://localhost:* https://localhost:*" always;`
            ]
                .map((line) => `            ${line}`)
                .join('\\n')

            const command = [
                `sed -i '/proxy_hide_header Content-Security-Policy/d; /proxy_hide_header X-Frame-Options/d; /frame-ancestors/d' /etc/nginx/sites-available/${nginxSite}`,
                `sed -i 's|proxy_send_timeout 86400;|proxy_send_timeout 86400;\\n${patchLines}|g' /etc/nginx/sites-available/${nginxSite}`,
                'nginx -t && systemctl reload nginx'
            ].join(' && ')

            await executeSSH(agent.ip!, agent.rootPassword!, command)

            return ok(c, { enabled: true }, t('api.enablePreviewSuccess'))
        } catch (error) {
            console.error('enablePreview', error)
            return fail(c, t('api.failedToEnablePreview'), 500)
        }
    }
)

export default enablePreview