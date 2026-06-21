import type { RotateGatewayTokenBody } from '@/ts/Interfaces'

import { eq } from 'drizzle-orm'
import { t } from '@openclaw/i18n'
import { inputValidation } from '@openclaw/shared'
import { db } from '@/db'
import { agents } from '@/db/schema'
import { ok, fail } from '@/lib/response'
import { executeSSH } from '@/services'
import { encrypt } from '@/lib/encryption'
import {
    withAgent,
    generateToken,
    getAgentConfig
} from '@/controllers/agents/helpers'

const rotateGatewayToken = withAgent({
    requireSSH: 'api.failedToRotateGatewayToken'
})(async (c, agent) => {
    try {
        const body = await c.req
            .json<RotateGatewayTokenBody>()
            .catch(() => ({}) as RotateGatewayTokenBody)
        const newToken = body.token || generateToken()

        if (
            newToken.length < inputValidation.GATEWAY_TOKEN.MIN ||
            newToken.length > inputValidation.GATEWAY_TOKEN.MAX
        )
            return fail(
                c,
                t('api.invalidGatewayToken', {
                    min: inputValidation.GATEWAY_TOKEN.MIN,
                    max: inputValidation.GATEWAY_TOKEN.MAX
                }),
                400
            )

        const agentConfig = getAgentConfig(agent.agentType)
        const configPath = agentConfig.configFile
        if (!configPath)
            return fail(c, t('api.failedToRotateGatewayToken'), 400)
        const tokenBase64 = Buffer.from(newToken).toString('base64')

        const updateCommand = [
            `export TOKEN=$(echo '${tokenBase64}' | base64 -d)`,
            `&& node -e "const fs=require('fs');const j=JSON.parse(fs.readFileSync('${configPath}','utf8'));j.gateway.auth.token=process.env.TOKEN;j.gateway.remote.token=process.env.TOKEN;fs.writeFileSync('${configPath}',JSON.stringify(j,null,2))"`,
            `&& chown ${agentConfig.user}:${agentConfig.user} ${configPath}`,
            `&& systemctl restart ${agentConfig.serviceName}`
        ].join(' ')

        const oldEncryptedToken = agent.gatewayToken
            ? encrypt(agent.gatewayToken)
            : agent.gatewayToken

        await db
            .update(agents)
            .set({ gatewayToken: encrypt(newToken) })
            .where(eq(agents.id, agent.id))

        try {
            await executeSSH(
                agent.ip!,
                agent.rootPassword!,
                updateCommand,
                30000
            )
        } catch (sshError) {
            if (oldEncryptedToken) {
                await db
                    .update(agents)
                    .set({ gatewayToken: oldEncryptedToken })
                    .where(eq(agents.id, agent.id))
            }
            throw sshError
        }

        return ok(c, { rotated: true }, t('api.gatewayTokenRotated'))
    } catch (error) {
        console.error('rotateGatewayToken', error)
        return fail(c, t('api.failedToRotateGatewayToken'), 500)
    }
})

export default rotateGatewayToken