import type { AgentRow } from '@/ts/Types'
import type { ServerStatus } from '@/ts/Interfaces'

import { eq } from 'drizzle-orm'
import { agentStatus } from '@openclaw/shared'
import { db } from '@/db'
import { agents } from '@/db/schema'
import { getProvider } from '@/services/provider'
import { cloudflare } from '@/services'
import { checkAgentReady } from '@/controllers/agents/helpers'
import { decrypt } from '@/lib/encryption'

const transitionCompletedBy: Record<string, string[]> = {
    [agentStatus.stopping]: [agentStatus.stopped],
    [agentStatus.starting]: [agentStatus.running],
    [agentStatus.creating]: [agentStatus.running],
    [agentStatus.initializing]: [agentStatus.running],
    [agentStatus.migrating]: [agentStatus.running],
    [agentStatus.rebuilding]: [agentStatus.running],
    [agentStatus.restarting]: [agentStatus.running]
}

const syncAgentServers = async (clawList: AgentRow[]): Promise<AgentRow[]> => {
    let serverMap = new Map<string, ServerStatus>()

    try {
        serverMap = await getProvider().getServers()
    } catch (error) {
        console.error('syncAgentServers', error)
    }

    const syncedAgents = await Promise.all(
        clawList.map(async (agent) => {
            if (!agent.providerServerId) return agent

            const live = serverMap.get(agent.providerServerId)
            if (!live) return agent

            if (agent.status === agentStatus.configuring) {
                if (
                    live.ip &&
                    agent.subdomain &&
                    (!agent.ip || agent.ip !== live.ip)
                ) {
                    await Promise.all([
                        cloudflare
                            .findDNSRecord(agent.subdomain)
                            .then(async (existing) => {
                                if (existing && existing.ip !== live.ip) {
                                    await cloudflare.updateDNSRecord(
                                        existing.id,
                                        agent.subdomain!,
                                        live.ip!
                                    )
                                } else if (!existing) {
                                    await cloudflare.createDNSRecord(
                                        agent.subdomain!,
                                        live.ip!
                                    )
                                }
                            })
                            .catch((error) => {
                                console.error('syncAgentServers', error)
                            }),
                        db
                            .update(agents)
                            .set({ ip: live.ip })
                            .where(eq(agents.id, agent.id))
                    ])
                }

                if (live.status === agentStatus.running) {
                    const decryptedRootPassword = agent.rootPassword
                        ? decrypt(agent.rootPassword)
                        : null
                    const ready = await checkAgentReady(
                        agent.agentType,
                        agent.subdomain,
                        live.ip,
                        decryptedRootPassword
                    )
                    if (ready) {
                        await db
                            .update(agents)
                            .set({
                                status: agentStatus.running,
                                ip: live.ip
                            })
                            .where(eq(agents.id, agent.id))
                        return {
                            ...agent,
                            status: agentStatus.running,
                            ip: live.ip
                        }
                    }
                }
                return { ...agent, ip: live.ip }
            }

            if (agent.status === agentStatus.unreachable)
                return { ...agent, ip: live.ip }

            const completionStates = transitionCompletedBy[agent.status]
            if (completionStates && !completionStates.includes(live.status)) {
                return { ...agent, ip: live.ip }
            }

            if (agent.status !== live.status) {
                await db
                    .update(agents)
                    .set({ status: live.status, ip: live.ip })
                    .where(eq(agents.id, agent.id))
            }

            return { ...agent, status: live.status, ip: live.ip }
        })
    )

    return syncedAgents
}

export default syncAgentServers