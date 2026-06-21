import type { NavigatorWithUAData } from '@/ts/Interfaces'
import type { DetectedMacArch } from '@/ts/Types'

import { useEffect, useState } from 'react'
import { DETECTION_UNKNOWN, MAC_ARCH } from '@/lib/constants'

const UA_ARCH = {
    ARM: 'arm',
    X86: 'x86'
} as const

const fromUserAgentData = async (): Promise<DetectedMacArch> => {
    const uaData = (navigator as unknown as NavigatorWithUAData).userAgentData
    if (!uaData?.getHighEntropyValues) return DETECTION_UNKNOWN
    try {
        const data = await uaData.getHighEntropyValues(['architecture'])
        if (data.architecture === UA_ARCH.ARM) return MAC_ARCH.ARM64
        if (data.architecture === UA_ARCH.X86) return MAC_ARCH.X64
    } catch (error) {
        console.error('fromUserAgentData', error)
    }
    return DETECTION_UNKNOWN
}

const fromWebGL = (): DetectedMacArch => {
    try {
        const canvas = document.createElement('canvas')
        const gl = canvas.getContext('webgl') as WebGLRenderingContext | null
        if (!gl) return DETECTION_UNKNOWN
        const ext = gl.getExtension('WEBGL_debug_renderer_info')
        if (!ext) return DETECTION_UNKNOWN
        const renderer = String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL))
        if (/Apple\s+(M\d|GPU)/i.test(renderer)) return MAC_ARCH.ARM64
        if (/Intel|AMD|Radeon/i.test(renderer)) return MAC_ARCH.X64
    } catch (error) {
        console.error('fromWebGL', error)
    }
    return DETECTION_UNKNOWN
}

const useMacArch = (enabled: boolean): DetectedMacArch => {
    const [arch, setArch] = useState<DetectedMacArch>(DETECTION_UNKNOWN)

    useEffect(() => {
        if (!enabled) return
        let cancelled = false
        fromUserAgentData().then((result) => {
            if (cancelled) return
            if (result !== DETECTION_UNKNOWN) {
                setArch(result)
                return
            }
            const fallback = fromWebGL()
            if (!cancelled) setArch(fallback)
        })
        return () => {
            cancelled = true
        }
    }, [enabled])

    return arch
}

export default useMacArch