import type { GoPlatform, MacArch } from '@/ts/Types'

import fetchGoManifest from '@/lib/fetchGoManifest'
import GO_PLATFORM from '@/lib/constants/goPlatform'

const downloadGoBinary = async (
    platform: GoPlatform,
    macArch?: MacArch
): Promise<void> => {
    const manifest = await fetchGoManifest()
    let url: string | null
    if (platform === GO_PLATFORM.MAC) {
        if (!macArch) throw new Error('mac arch required')
        url = manifest.mac[macArch]
    } else {
        url = manifest.windows
    }
    if (!url) throw new Error(`${platform} url missing`)

    const head = await fetch(url, { method: 'HEAD', cache: 'no-cache' })
    if (!head.ok) throw new Error(`${platform} binary not available (${head.status})`)

    const filename = url.split('/').pop() || `clawhost-${platform}`
    const a = document.createElement('a')
    a.href = url
    a.download = decodeURIComponent(filename)
    a.rel = 'noopener'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}

export default downloadGoBinary