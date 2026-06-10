import type {
    AgentCreatedEvent,
    AgentDeletedEvent
} from '@/ts/Interfaces'

import domainEvents from '@/main/ipc/domainEvents'
import DOMAIN_EVENT from '@/main/ipc/domainEventNames'
import ipcPipeline from '@/main/ipc/pipeline'
import certManager from '@/main/services/certManager'
import dnsResolver from '@/main/services/dnsResolver'
import reverseProxy from '@/main/services/reverseProxy'

const refreshCerts = (): void => {
    try {
        certManager.regenerateServerCert()
        reverseProxy.reloadCerts()
    } catch (error) {
        console.error('refreshCerts', error)
    }
}

const registerHooks = (): void => {
    ipcPipeline.onError((channel, _args, error) => {
        console.error(`ipc.${channel}`, error)
    })

    domainEvents.on<AgentCreatedEvent>(
        DOMAIN_EVENT.AGENT_CREATED,
        async (payload) => {
            refreshCerts()
            try {
                await dnsResolver.addHostEntry(payload.subdomain)
            } catch (error) {
                console.error('addHostEntry', error)
            }
        }
    )

    domainEvents.on<AgentDeletedEvent>(
        DOMAIN_EVENT.AGENT_DELETED,
        async (payload) => {
            refreshCerts()
            try {
                await dnsResolver.removeHostEntry(payload.subdomain)
            } catch (error) {
                console.error('removeHostEntry', error)
            }
        }
    )
}

export default registerHooks