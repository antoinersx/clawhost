import type { FC, ReactNode } from 'react'
import type { LayoutChangeEvent } from 'react-native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { ClawCardProps } from '@/ts/Interfaces'
import type { RootStackParamList } from '@/ts/Types'

import { Fragment, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { CaretDown, GearSix } from 'phosphor-react-native'
import { t } from '@openclaw/i18n'
import { agentStatus } from '@openclaw/shared'
import { COLORS } from '@/lib/theme'
import getLocale from '@/lib/getLocale'
import {
    getStatusConfig,
    locationFlags,
    locationNames,
    generateSlug
} from '@/lib/claw-utils'
import ClawMascot from '@/components/ClawMascot'
import StatusBadge from '@/components/StatusBadge'
import CopyableField from '@/components/CopyableField'

const GRID_GAP = 8
const GRID_COLUMNS = 2

const ClawCard: FC<ClawCardProps> = ({ claw, plan }): ReactNode => {
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const [fieldWidth, setFieldWidth] = useState(0)
    const [isExpanded, setIsExpanded] = useState(false)

    const handleGridLayout = (e: LayoutChangeEvent): void => {
        const gridWidth = e.nativeEvent.layout.width
        setFieldWidth(
            (gridWidth - GRID_GAP * (GRID_COLUMNS - 1)) / GRID_COLUMNS
        )
    }

    const statuses = getStatusConfig()
    const status = statuses[claw.status] || statuses.unknown

    const flag = claw.location ? locationFlags[claw.location] || '' : ''
    const locationName = claw.location
        ? locationNames[claw.location] || claw.location
        : ''

    const planLabel = plan
        ? `${plan.name.replace(/([A-Za-z])(\d)/, '$1 $2')} (${plan.cpu} vCPU, ${plan.memory}GB RAM, ${plan.disk}GB SSD)`
        : claw.planId

    const subdomain = claw.subdomain || generateSlug(claw.id)

    const formatDate = (dateString: string): string => {
        return new Date(dateString).toLocaleDateString(getLocale(), {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        })
    }

    return (
        <View style={styles.card}>
            <Pressable
                onPress={() => setIsExpanded(!isExpanded)}
                style={styles.header}
            >
                <View style={styles.mascotContainer}>
                    <ClawMascot size={20} />
                </View>
                <View style={styles.headerInfo}>
                    <View style={styles.nameRow}>
                        <Text style={styles.name} numberOfLines={1}>
                            {claw.name}
                        </Text>
                        <StatusBadge status={claw.status} config={status} />
                    </View>
                    {claw.status !== agentStatus.configuring && (
                        <Text style={styles.subdomain} numberOfLines={1}>
                            {subdomain}.clawhost.cloud
                        </Text>
                    )}
                </View>
                <View
                    style={[
                        styles.caretContainer,
                        isExpanded && styles.caretRotated
                    ]}
                >
                    <CaretDown size={18} color={COLORS.textMuted} />
                </View>
            </Pressable>

            {isExpanded && (
                <Fragment>
                    <View style={styles.separator} />

                    <View style={styles.fieldsGrid} onLayout={handleGridLayout}>
                        {claw.ownerEmail && (
                            <CopyableField
                                label={t('dashboard.owner')}
                                value={claw.ownerEmail}
                                width={fieldWidth || undefined}
                            />
                        )}

                        {claw.ip && (
                            <CopyableField
                                label={t('dashboard.ipAddress')}
                                value={claw.ip}
                                width={fieldWidth || undefined}
                            />
                        )}

                        {locationName && (
                            <CopyableField
                                label={t('dashboard.location')}
                                value={`${flag} ${locationName}`.trim()}
                                width={fieldWidth || undefined}
                            />
                        )}

                        <CopyableField
                            label={t('dashboard.plan')}
                            value={planLabel}
                            width={fieldWidth || undefined}
                        />

                        {plan && (
                            <CopyableField
                                label={t('dashboard.planCost')}
                                value={
                                    claw.billingInterval === 'year'
                                        ? `$${plan.priceYearly.toFixed(0)}${t('landing.perYear')}`
                                        : `$${plan.priceMonthly.toFixed(0)}${t('landing.perMonth')}`
                                }
                                width={fieldWidth || undefined}
                            />
                        )}

                        {claw.providerServerId && (
                            <CopyableField
                                label={t('dashboard.serverId')}
                                value={`#${claw.providerServerId}`}
                                width={fieldWidth || undefined}
                            />
                        )}

                        {claw.createdAt && (
                            <CopyableField
                                label={t('dashboard.created')}
                                value={formatDate(claw.createdAt)}
                                width={fieldWidth || undefined}
                            />
                        )}

                        {claw.currentPeriodStart && (
                            <CopyableField
                                label={t('dashboard.lastBilling')}
                                value={formatDate(claw.currentPeriodStart)}
                                width={fieldWidth || undefined}
                            />
                        )}

                        {claw.currentPeriodEnd && (
                            <CopyableField
                                label={t('dashboard.nextBilling')}
                                value={formatDate(claw.currentPeriodEnd)}
                                width={fieldWidth || undefined}
                            />
                        )}

                        {claw.volumes && claw.volumes.length > 0 && (
                            <CopyableField
                                label={t('dashboard.storage')}
                                value={`${claw.volumes.reduce((sum, v) => sum + v.size, 0)} GB`}
                                width={fieldWidth || undefined}
                            />
                        )}

                        {claw.gatewayToken && (
                            <CopyableField
                                label={t('dashboard.gatewayToken')}
                                value={claw.gatewayToken}
                                width={fieldWidth || undefined}
                            />
                        )}
                    </View>

                    {claw.deletionScheduledAt && (
                        <View style={styles.deletionWarning}>
                            <View>
                                <Text style={styles.deletionTitle}>
                                    {t('dashboard.scheduledForDeletion')}
                                </Text>
                                <Text style={styles.deletionDate}>
                                    {t('dashboard.deletionDate', {
                                        date: formatDate(
                                            claw.deletionScheduledAt
                                        )
                                    })}
                                </Text>
                            </View>
                        </View>
                    )}
                </Fragment>
            )}

            <Pressable
                style={styles.manageButton}
                onPress={() =>
                    navigation.navigate('ClawDetail', { clawId: claw.id })
                }
            >
                <GearSix size={16} color={COLORS.text} />
                <Text style={styles.manageButtonText}>{t('mobile.manage')}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.containerBackground,
        borderWidth: 1,
        borderColor: COLORS.containerBorder,
        borderRadius: 12,
        padding: 16
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12
    },
    mascotContainer: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: 'rgba(255,255,255,0.1)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerInfo: {
        flex: 1,
        minWidth: 0
    },
    nameRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        flexWrap: 'wrap'
    },
    name: {
        fontSize: 16,
        fontFamily: 'ClashDisplay-Semibold',
        color: COLORS.text
    },
    subdomain: {
        fontSize: 13,
        fontFamily: 'Satoshi-Regular',
        color: COLORS.textMuted,
        marginTop: 2
    },
    caretContainer: {
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center'
    },
    caretRotated: {
        transform: [{ rotate: '180deg' }]
    },
    separator: {
        height: 1,
        backgroundColor: COLORS.border,
        marginTop: 16,
        marginBottom: 16
    },
    fieldsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8
    },
    deletionWarning: {
        marginTop: 12,
        borderWidth: 1,
        borderColor: COLORS.containerBorder,
        backgroundColor: COLORS.containerBackground,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 12
    },
    deletionTitle: {
        fontSize: 13,
        fontFamily: 'Satoshi-Medium',
        color: '#d1d5db'
    },
    deletionDate: {
        fontSize: 12,
        fontFamily: 'Satoshi-Regular',
        color: COLORS.textDim,
        marginTop: 2
    },
    manageButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        marginTop: 16,
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderWidth: 1,
        borderColor: COLORS.containerBorder,
        borderRadius: 10,
        paddingVertical: 12
    },
    manageButtonText: {
        fontSize: 14,
        fontFamily: 'Satoshi-Bold',
        color: COLORS.text
    }
})

export default ClawCard