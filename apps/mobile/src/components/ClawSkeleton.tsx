import type { FC, ReactNode } from 'react'

import { useEffect, useRef } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import { COLORS } from '@/lib/theme'

const ClawSkeleton: FC = (): ReactNode => {
    const pulseAnim = useRef(new Animated.Value(0.3)).current

    useEffect(() => {
        const animation = Animated.loop(
            Animated.sequence([
                Animated.timing(pulseAnim, {
                    toValue: 0.7,
                    duration: 1000,
                    useNativeDriver: true
                }),
                Animated.timing(pulseAnim, {
                    toValue: 0.3,
                    duration: 1000,
                    useNativeDriver: true
                })
            ])
        )
        animation.start()
        return () => animation.stop()
    }, [pulseAnim])

    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Animated.View
                    style={[styles.mascotPlaceholder, { opacity: pulseAnim }]}
                />
                <View style={styles.textPlaceholders}>
                    <Animated.View
                        style={[styles.namePlaceholder, { opacity: pulseAnim }]}
                    />
                    <Animated.View
                        style={[
                            styles.subdomainPlaceholder,
                            { opacity: pulseAnim }
                        ]}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.cardBackground,
        borderWidth: 1,
        borderColor: COLORS.cardBorder,
        borderRadius: 12,
        padding: 16
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12
    },
    mascotPlaceholder: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: 'rgba(255,255,255,0.1)'
    },
    textPlaceholders: {
        flex: 1,
        gap: 8
    },
    namePlaceholder: {
        width: 128,
        height: 20,
        borderRadius: 6,
        backgroundColor: 'rgba(255,255,255,0.1)'
    },
    subdomainPlaceholder: {
        width: 192,
        height: 16,
        borderRadius: 6,
        backgroundColor: 'rgba(255,255,255,0.1)'
    }
})

export default ClawSkeleton