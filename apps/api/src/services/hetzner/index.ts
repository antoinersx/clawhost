import type { CloudProvider } from '@/ts/Interfaces'

import getClient from '@/services/hetzner/hetznerClient'
import mapStatus from '@/services/hetzner/mapStatus'
import attachVolume from '@/services/hetzner/attachVolume'
import createSSHKey from '@/services/hetzner/createSSHKey'
import createServer from '@/services/hetzner/createServer'
import createVolume from '@/services/hetzner/createVolume'
import deleteSSHKey from '@/services/hetzner/deleteSSHKey'
import deleteServer from '@/services/hetzner/deleteServer'
import deleteVolume from '@/services/hetzner/deleteVolume'
import detachVolume from '@/services/hetzner/detachVolume'
import getDatacenters from '@/services/hetzner/getDatacenters'
import getLocations from '@/services/hetzner/getLocations'
import getRawServerTypes from '@/services/hetzner/getRawServerTypes'
import getServer from '@/services/hetzner/getServer'
import getServerTypes from '@/services/hetzner/getServerTypes'
import getServers from '@/services/hetzner/getServers'
import getVolume from '@/services/hetzner/getVolume'
import getVolumePricing from '@/services/hetzner/getVolumePricing'
import restartServer from '@/services/hetzner/restartServer'
import startServer from '@/services/hetzner/startServer'
import stopServer from '@/services/hetzner/stopServer'

const hetzner: CloudProvider = {
    createServer,
    getServer,
    getServers,
    startServer,
    stopServer,
    restartServer,
    deleteServer,
    getServerTypes,
    getLocations,
    getRawServerTypes,
    getDatacenters,
    createSSHKey,
    deleteSSHKey,
    getVolumePricing,
    createVolume,
    attachVolume,
    detachVolume,
    deleteVolume,
    getVolume
}

export default hetzner
export { getClient, mapStatus }