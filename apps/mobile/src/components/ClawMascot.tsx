import type { FC, ReactNode } from 'react'
import type { ClawMascotProps } from '@/ts/Interfaces'

import Svg, { Path, Circle } from 'react-native-svg'

const ClawMascot: FC<ClawMascotProps> = ({
    size = 20,
    color = '#fafafa'
}): ReactNode => {
    return (
        <Svg width={size} height={size} viewBox='0 0 120 120' fill='none'>
            <Path
                d='M60 10 C30 10 15 35 15 55 C15 75 30 95 45 100 L45 110 L55 110 L55 100 C55 100 60 102 65 100 L65 110 L75 110 L75 100 C90 95 105 75 105 55 C105 35 90 10 60 10Z'
                fill={color}
            />
            <Path
                d='M20 45 C5 40 0 50 5 60 C10 70 20 65 25 55 C28 48 25 45 20 45Z'
                fill={color}
            />
            <Path
                d='M100 45 C115 40 120 50 115 60 C110 70 100 65 95 55 C92 48 95 45 100 45Z'
                fill={color}
            />
            <Path
                d='M45 15 Q35 5 30 8'
                stroke={color}
                strokeWidth='2'
                strokeLinecap='round'
            />
            <Path
                d='M75 15 Q85 5 90 8'
                stroke={color}
                strokeWidth='2'
                strokeLinecap='round'
            />
            <Circle cx='45' cy='35' r='6' fill='#0a0a0f' />
            <Circle cx='75' cy='35' r='6' fill='#0a0a0f' />
            <Circle cx='46' cy='34' r='2' fill='#4dd0e1' />
            <Circle cx='76' cy='34' r='2' fill='#4dd0e1' />
        </Svg>
    )
}

export default ClawMascot