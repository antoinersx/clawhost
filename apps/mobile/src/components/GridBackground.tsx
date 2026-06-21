import type { FC, ReactNode } from 'react'

import { useWindowDimensions, StyleSheet, View } from 'react-native'
import Svg, { Line } from 'react-native-svg'
import { LinearGradient } from 'expo-linear-gradient'

const GRID_SIZE = 50
const GRID_COLOR = 'rgba(239,83,80,0.08)'

const GridBackground: FC = (): ReactNode => {
    const { width } = useWindowDimensions()
    const height = 400

    const verticalLines = Math.ceil(width / GRID_SIZE)
    const horizontalLines = Math.ceil(height / GRID_SIZE)

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={[
                    'rgba(239,83,80,0.25)',
                    'rgba(198,40,40,0.15)',
                    'transparent'
                ]}
                locations={[0, 0.3, 0.7]}
                style={styles.gradient}
            />
            <Svg width={width} height={height} style={styles.svg}>
                {Array.from({ length: verticalLines + 1 }, (_, i) => (
                    <Line
                        key={`v${i}`}
                        x1={i * GRID_SIZE}
                        y1={0}
                        x2={i * GRID_SIZE}
                        y2={height}
                        stroke={GRID_COLOR}
                        strokeWidth={1}
                    />
                ))}
                {Array.from({ length: horizontalLines + 1 }, (_, i) => (
                    <Line
                        key={`h${i}`}
                        x1={0}
                        y1={i * GRID_SIZE}
                        x2={width}
                        y2={i * GRID_SIZE}
                        stroke={GRID_COLOR}
                        strokeWidth={1}
                    />
                ))}
            </Svg>
            <LinearGradient
                colors={['transparent', 'rgba(10,10,15,1)']}
                locations={[0.3, 1]}
                style={styles.fadeOverlay}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 400
    },
    gradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    svg: {
        position: 'absolute',
        top: 0,
        left: 0
    },
    fadeOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
})

export default GridBackground