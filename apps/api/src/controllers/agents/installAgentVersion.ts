import type { AuthenticatedContext } from '@/ts/Types'
import type {
    InstallVersionBody,
    NpmRegistryTimeResponse
} from '@/ts/Interfaces'

import { eq } from 'drizzle-orm'
import { externalUrls } from '@openclaw/shared'
import { db } from '@/db'
import { agents } from '@/db/schema'
import { executeSSH } from '@/services'
import {
    invalidateVersionCache,
    getAgentConfig,
    DOMAIN
} from '@/controllers/agents/helpers'
import { t } from '@openclaw/i18n'
import { ok, fail } from '@/lib/response'
import { gatewayDefaults, gatewayMarkers } from '@/lib/constants'

const VERSION_REGEX = /^[a-zA-Z0-9._-]+$/
const OUTDATED_CUTOFF = new Date('2026-02-01')
const OUTDATED_VERSION_ERROR = 'outdated_version'

const buildNpmInstallCommands = async (
    version: string,
    npmPackage: string,
    serviceName: string,
    user: string,
    doctorCommand: string | null,
    nginxSite: string
): Promise<string> => {
    const registryUrl = externalUrls.NPM.REGISTRY(npmPackage)
    const registryResponse = await fetch(registryUrl, {
        headers: { Accept: 'application/json' }
    })

    if (registryResponse.ok) {
        const registry =
            (await registryResponse.json()) as NpmRegistryTimeResponse
        const publishedAt = registry.time?.[version]
        if (publishedAt && new Date(publishedAt) < OUTDATED_CUTOFF)
            throw new Error(OUTDATED_VERSION_ERROR)
    }

    const nginxPatch = `(grep -q 'proxy_hide_header Content-Security-Policy' /etc/nginx/sites-available/${nginxSite} || sed -i 's|proxy_send_timeout 86400;|proxy_send_timeout 86400;\\n            proxy_hide_header Content-Security-Policy;\\n            proxy_hide_header X-Frame-Options;\\n            add_header Content-Security-Policy "frame-ancestors https://${DOMAIN} https://*.${DOMAIN} http://localhost:* https://localhost:*" always;|g' /etc/nginx/sites-available/${nginxSite}) && nginx -t && systemctl reload nginx || true`

    return [
        `systemctl stop ${serviceName} || true`,
        `npm install -g ${npmPackage}@${version}`,
        ...(doctorCommand
            ? [`su - ${user} -c "${doctorCommand}" || true`]
            : []),
        nginxPatch,
        `systemctl restart ${serviceName}`,
        'sleep 15',
        `curl -sf -o /dev/null --max-time 5 ${gatewayDefaults.BASE_URL} && echo "${gatewayMarkers.OK}" || echo "${gatewayMarkers.FAILED}"`
    ].join(' && ')
}

const buildGitHubInstallCommands = (
    version: string,
    githubRepo: string,
    serviceName: string,
    user: string,
    versionCommand: string
): string => {
    return [
        `systemctl stop ${serviceName} 2>/dev/null || true`,
        `su - ${user} -c 'curl -fsSL https://raw.githubusercontent.com/${githubRepo}/main/scripts/install.sh | HERMES_VERSION=${version} bash -s -- --skip-setup'`,
        `systemctl restart ${serviceName} 2>/dev/null || su - ${user} -c 'systemctl --user restart ${serviceName}' 2>/dev/null || true`,
        'sleep 5',
        `su - ${user} -c '${versionCommand}' >/dev/null 2>&1 && echo "${gatewayMarkers.OK}" || echo "${gatewayMarkers.FAILED}"`
    ].join(' && ')
}

const installAgentVersion = async (c: AuthenticatedContext) => {
    try {
        const id = c.req.param('id')!
        const { version } = await c.req.json<InstallVersionBody>()

        if (!version || !VERSION_REGEX.test(version))
            return fail(c, t('api.invalidVersion'), 400)

        const [agentResult] = await Promise.all([
            db.select().from(agents).where(eq(agents.id, id)).limit(1)
        ])

        const agent = agentResult

        if (!agent[0]) return fail(c, t('api.agentNotFound'), 404)

        if (!agent[0].ip || !agent[0].rootPassword) {
            console.error(
                'installAgentVersion',
                new Error(
                    `agent ${id} missing ip or rootPassword (ip=${!!agent[0].ip}, rootPassword=${!!agent[0].rootPassword})`
                )
            )
            return fail(c, t('api.failedToInstallVersion'), 400)
        }

        const agentConfig = getAgentConfig(agent[0].agentType)

        let installCommands: string

        if (agentConfig.githubRepo) {
            installCommands = buildGitHubInstallCommands(
                version,
                agentConfig.githubRepo,
                agentConfig.serviceName,
                agentConfig.user,
                agentConfig.versionCommand
            )
        } else if (agentConfig.npmPackage) {
            try {
                installCommands = await buildNpmInstallCommands(
                    version,
                    agentConfig.npmPackage,
                    agentConfig.serviceName,
                    agentConfig.user,
                    agentConfig.doctorCommand,
                    agentConfig.nginxSite
                )
            } catch (error) {
                if (
                    error instanceof Error &&
                    error.message === OUTDATED_VERSION_ERROR
                )
                    return fail(c, t('api.outdatedVersion'), 400)
                throw error
            }
        } else {
            console.error(
                'installAgentVersion',
                new Error(
                    `agent ${id} type ${agent[0].agentType} has no githubRepo or npmPackage configured`
                )
            )
            return fail(c, t('api.failedToInstallVersion'), 400)
        }

        let output: string
        try {
            output = await executeSSH(
                agent[0].ip,
                agent[0].rootPassword,
                installCommands,
                120000
            )
        } catch (sshError) {
            console.error('installAgentVersion', sshError)
            return fail(c, t('api.failedToInstallVersion'), 500)
        }

        invalidateVersionCache(agent[0].ip)

        const success = output.includes(gatewayMarkers.OK)

        if (success) return ok(c, { version }, t('api.installVersionSuccess'))

        console.error(
            'installAgentVersion',
            new Error(
                `agent ${id} version ${version} install did not reach ${gatewayMarkers.OK}. Output tail:\n${output.slice(-2000)}`
            )
        )
        return fail(c, t('api.failedToInstallVersion'), 500)
    } catch (error) {
        console.error('installAgentVersion', error)
        return fail(c, t('api.failedToInstallVersion'), 500)
    }
}

export default installAgentVersion