import type { FC, ReactNode } from 'react'

import { useEffect, useRef } from 'react'
import { Animated, StyleSheet, View } from 'react-native'

const BillingSkeleton: FC = (): ReactNode => {
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
        <View style={styles.container}>
            <View style={styles.leftSection}>
                <Animated.View
                    style={[styles.namePlaceholder, { opacity: pulseAnim }]}
                />
                <Animated.View
                    style={[styles.datePlaceholder, { opacity: pulseAnim }]}
                />
            </View>
            <View style={styles.rightSection}>
                <Animated.View
                    style={[styles.amountPlaceholder, { opacity: pulseAnim }]}
                />
                <Animated.View
                    style={[styles.badgePlaceholder, { opacity: pulseAnim }]}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255,255,255,0.02)',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.05)',
        borderRadius: 10,
        padding: 14
    },
    leftSection: {
        gap: 6
    },
    namePlaceholder: {
        width: 128,
        height: 16,
        borderRadius: 6,
        backgroundColor: 'rgba(255,255,255,0.1)'
    },
    datePlaceholder: {
        width: 96,
        height: 12,
        borderRadius: 4,
        backgroundColor: 'rgba(255,255,255,0.1)'
    },
    rightSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    amountPlaceholder: {
        width: 56,
        height: 16,
        borderRadius: 6,
        backgroundColor: 'rgba(255,255,255,0.1)'
    },
    badgePlaceholder: {
        width: 48,
        height: 20,
        borderRadius: 100,
        backgroundColor: 'rgba(255,255,255,0.1)'
    }
})

export default BillingSkeleton