import type { FC, ReactNode } from 'react'
import type { StatusBadgeProps } from '@/ts/Interfaces'

import { useEffect, useRef } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'
import { agentStatus } from '@openclaw/shared'

const StatusBadge: FC<StatusBadgeProps> = ({ status, config }): ReactNode => {
    const pulseAnim = useRef(new Animated.Value(1)).current

    useEffect(() => {
        if (config.pulse) {
            const animation = Animated.loop(
                Animated.sequence([
                    Animated.timing(pulseAnim, {
                        toValue: 0.3,
                        duration: 800,
                        useNativeDriver: true
                    }),
                    Animated.timing(pulseAnim, {
                        toValue: 1,
                        duration: 800,
                        useNativeDriver: true
                    })
                ])
            )
            animation.start()
            return () => animation.stop()
        }
        pulseAnim.setValue(1)
        return undefined
    }, [config.pulse, pulseAnim])

    const isRunning = status === agentStatus.running

    return (
        <View style={[styles.badge, { backgroundColor: config.bgColor }]}>
            <Animated.View
                style={[
                    styles.dot,
                    {
                        backgroundColor: config.color,
                        opacity: pulseAnim
                    },
                    isRunning && {
                        shadowColor: config.color,
                        shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: 0.8,
                        shadowRadius: 4,
                        elevation: 4
                    }
                ]}
            />
            <Text style={[styles.label, { color: config.color }]}>
                {config.label}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    badge: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 100
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        marginRight: 6
    },
    label: {
        fontSize: 12,
        fontFamily: 'Satoshi-Medium'
    }
})

export default StatusBadge