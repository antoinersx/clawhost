import type { FC, ReactElement, ReactNode } from 'react'
import type { Claw, Plan } from '@/ts/Interfaces'

import { useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import { Lightning } from 'phosphor-react-native'
import { t } from '@openclaw/i18n'
import { useAuth } from '@/lib/auth'
import { useClaws, usePlans } from '@/hooks'
import { COLORS, SPACING, TYPOGRAPHY } from '@/lib/theme'
import {
    GridBackground,
    ClawMascot,
    ClawCard,
    ClawSkeleton,
    CreateClawModal
} from '@/components'

const ClawsScreen: FC = (): ReactNode => {
    const insets = useSafeAreaInsets()
    const { user, loading: authLoading } = useAuth()
    const {
        data: claws,
        isPending: isLoading,
        isError,
        refetch
    } = useClaws(user)
    const { data: hetznerPlans } = usePlans(user, 'hetzner')
    const [showCreateModal, setShowCreateModal] = useState(false)

    const plans: Plan[] = [...(hetznerPlans?.plans || [])]

    const findPlan = (planId: string): Plan | undefined => {
        return plans.find((p) => p.id === planId)
    }

    const renderClawCard = ({ item }: { item: Claw }): ReactElement => {
        return <ClawCard claw={item} plan={findPlan(item.planId)} />
    }

    const clawCount = claws?.length ?? 0
    const dataReady = !authLoading && !isLoading
    const hasClaws = dataReady && clawCount > 0
    const countLabel = `${clawCount} ${clawCount === 1 ? t('dashboard.claw') : t('dashboard.clawsPlural')}`
    const TAB_BAR_HEIGHT = 80 + insets.bottom

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <GridBackground />

            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Text style={styles.title}>{t('dashboard.title')}</Text>
                    {dataReady && claws && (
                        <Text style={styles.subtitle}>{countLabel}</Text>
                    )}
                </View>
                {hasClaws && (
                    <Pressable
                        onPress={() => setShowCreateModal(true)}
                        style={styles.deployButton}
                    >
                        <Lightning
                            size={16}
                            color={COLORS.white}
                            weight='fill'
                        />
                        <Text style={styles.deployButtonText}>
                            {t('mobile.deployClaw')}
                        </Text>
                    </Pressable>
                )}
            </View>

            {authLoading || isLoading ? (
                <View style={styles.listPadding}>
                    <ClawSkeleton />
                    <View style={styles.cardSeparator} />
                    <ClawSkeleton />
                    <View style={styles.cardSeparator} />
                    <ClawSkeleton />
                </View>
            ) : isError ? (
                <View
                    style={[
                        styles.centerContent,
                        { paddingBottom: TAB_BAR_HEIGHT }
                    ]}
                >
                    <Text style={styles.errorTitle}>
                        {t('errors.failedToLoadAgents')}
                    </Text>
                    <Text style={styles.errorDescription}>
                        {t('errors.failedToLoadAgentsDescription')}
                    </Text>
                    <Pressable
                        onPress={() => refetch()}
                        style={styles.retryButton}
                    >
                        <Text style={styles.retryText}>
                            {t('common.tryAgain')}
                        </Text>
                    </Pressable>
                </View>
            ) : clawCount === 0 ? (
                <View
                    style={[
                        styles.centerContent,
                        { paddingBottom: TAB_BAR_HEIGHT }
                    ]}
                >
                    <View style={styles.emptyIconContainer}>
                        <ClawMascot size={40} />
                    </View>
                    <Text style={styles.emptyTitle}>
                        {t('dashboard.noAgentsYet')}
                    </Text>
                    <Text style={styles.emptyDescription}>
                        {t('dashboard.noAgentsDescription')}
                    </Text>
                    <Pressable
                        onPress={() => setShowCreateModal(true)}
                        style={styles.emptyDeployButton}
                    >
                        <LinearGradient
                            colors={['#ef5350', '#c62828']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.emptyDeployGradient}
                        >
                            <Lightning
                                size={18}
                                color={COLORS.white}
                                weight='fill'
                            />
                            <Text style={styles.emptyDeployText}>
                                {t('mobile.deployYourFirstClaw')}
                            </Text>
                        </LinearGradient>
                    </Pressable>
                </View>
            ) : (
                <FlatList
                    data={claws}
                    renderItem={renderClawCard}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContent}
                    ItemSeparatorComponent={() => (
                        <View style={styles.cardSeparator} />
                    )}
                    showsVerticalScrollIndicator={false}
                />
            )}

            <LinearGradient
                colors={['transparent', 'rgba(239,83,80,0.08)']}
                style={styles.bottomGlow}
                pointerEvents='none'
            />

            <CreateClawModal
                visible={showCreateModal}
                onClose={() => setShowCreateModal(false)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background
    },
    header: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingHorizontal: SPACING.lg,
        paddingTop: SPACING.lg,
        paddingBottom: SPACING.md
    },
    headerLeft: {
        flex: 1
    },
    title: {
        ...TYPOGRAPHY.title,
        color: COLORS.text
    },
    subtitle: {
        ...TYPOGRAPHY.body,
        color: COLORS.textMuted,
        marginTop: SPACING.xs
    },
    deployButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        backgroundColor: COLORS.accent,
        borderRadius: 8,
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.sm
    },
    deployButtonText: {
        fontSize: 13,
        fontFamily: 'Satoshi-Bold',
        color: COLORS.white
    },
    listPadding: {
        paddingHorizontal: SPACING.lg
    },
    listContent: {
        paddingHorizontal: SPACING.lg,
        paddingBottom: SPACING.xl
    },
    centerContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: SPACING.xxl
    },
    emptyIconContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: 'rgba(239,83,80,0.1)',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: SPACING.lg
    },
    emptyTitle: {
        ...TYPOGRAPHY.subtitle,
        color: COLORS.text,
        marginBottom: SPACING.sm
    },
    emptyDescription: {
        ...TYPOGRAPHY.body,
        color: COLORS.textMuted,
        textAlign: 'center',
        marginBottom: SPACING.lg
    },
    emptyDeployButton: {
        borderRadius: 10,
        overflow: 'hidden'
    },
    emptyDeployGradient: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        paddingVertical: 14,
        paddingHorizontal: SPACING.xl,
        borderRadius: 10
    },
    emptyDeployText: {
        fontSize: 15,
        fontFamily: 'Satoshi-Bold',
        color: COLORS.white
    },
    errorTitle: {
        ...TYPOGRAPHY.subtitle,
        color: COLORS.text,
        marginBottom: SPACING.sm
    },
    errorDescription: {
        ...TYPOGRAPHY.body,
        color: COLORS.textMuted,
        textAlign: 'center',
        marginBottom: SPACING.lg
    },
    retryButton: {
        backgroundColor: COLORS.accent,
        paddingHorizontal: SPACING.xl,
        paddingVertical: SPACING.sm,
        borderRadius: 8
    },
    retryText: {
        color: COLORS.white,
        fontFamily: 'Satoshi-Bold',
        fontSize: 14
    },
    cardSeparator: {
        height: 10
    },
    bottomGlow: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 160
    }
})

export default ClawsScreen