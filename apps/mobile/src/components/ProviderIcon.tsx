import type { FC, ReactNode } from 'react'
import type { ProviderIconProps } from '@/ts/Interfaces'

import Svg, { Rect, Path } from 'react-native-svg'

const ProviderIcon: FC<ProviderIconProps> = ({
    provider,
    size = 14
}): ReactNode => {
    if (provider === 'hetzner') {
        return (
            <Svg width={size} height={size} viewBox='0 0 63 64' fill='none'>
                <Rect width='63' height='64' rx='31.5' fill='#D50C2D' />
                <Path
                    d='M17 20h10v24H17zM36 20h10v24H36zM27 30h9v4h-9z'
                    fill='white'
                />
            </Svg>
        )
    }

    return null
}

export default ProviderIcon