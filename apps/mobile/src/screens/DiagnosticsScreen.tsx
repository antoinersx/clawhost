import type { FC, ReactNode } from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from '@/ts/Types'

import {
    ActivityIndicator,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { CaretLeft, Wrench } from 'phosphor-react-native'
import { t } from '@openclaw/i18n'
import { useDiagnostics } from '@/hooks'
import { COLORS, SPACING, TYPOGRAPHY } from '@/lib/theme'

type Props = NativeStackScreenProps<RootStackParamList, 'Diagnostics'>

const DiagnosticsScreen: FC<Props> = ({ route, navigation }): ReactNode => {
    const { clawId } = route.params
    const insets = useSafeAreaInsets()
    const { status, logs, repair } = useDiagnostics(clawId, true)

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <View style={styles.header}>
                <Pressable
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                    hitSlop={12}
                >
                    <CaretLeft size={22} color={COLORS.text} />
                </Pressable>
                <Text style={styles.headerTitle}>{t('dashboard.diagnostics')}</Text>
            </View>

            <ScrollView
                contentContainerStyle={[
                    styles.content,
                    { paddingBottom: insets.bottom + SPACING.xl }
                ]}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>
                        {t('dashboard.diagnosticsStatus')}
                    </Text>
                    {status.isPending ? (
                        <ActivityIndicator color={COLORS.accent} />
                    ) : (
                        <View style={styles.statusGrid}>
                            <View style={styles.statusItem}>
                                <Text style={styles.statusLabel}>
                                    {t('dashboard.diagnosticsPort')}
                                </Text>
                                <Text style={styles.statusValue}>
                                    {status.data?.port || '-'}
                                </Text>
                            </View>
                            <View style={styles.statusItem}>
                                <Text style={styles.statusLabel}>
                                    {t('dashboard.diagnosticsMemory')}
                                </Text>
                                <Text style={styles.statusValue}>
                                    {status.data?.memory || '-'}
                                </Text>
                            </View>
                        </View>
                    )}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>
                        {t('dashboard.diagnosticsLogs')}
                    </Text>
                    {logs.isPending ? (
                        <ActivityIndicator color={COLORS.accent} />
                    ) : logs.data?.logs ? (
                        <ScrollView
                            horizontal
                            style={styles.logsBox}
                            showsHorizontalScrollIndicator={false}
                        >
                            <Text style={styles.logsText}>{logs.data.logs}</Text>
                        </ScrollView>
                    ) : (
                        <Text style={styles.emptyText}>
                            {t('dashboard.diagnosticsNoLogs')}
                        </Text>
                    )}
                </View>

                <Pressable
                    style={styles.repairButton}
                    disabled={repair.isPending}
                    onPress={() => repair.mutate()}
                >
                    {repair.isPending ? (
                        <ActivityIndicator size='small' color={COLORS.white} />
                    ) : (
                        <Wrench size={18} color={COLORS.white} />
                    )}
                    <Text style={styles.repairText}>
                        {t('dashboard.diagnosticsRepair')}
                    </Text>
                </Pressable>
            </ScrollView>
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
        alignItems: 'center',
        gap: SPACING.sm,
        paddingHorizontal: SPACING.lg,
        paddingVertical: SPACING.md,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border
    },
    backButton: {
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        ...TYPOGRAPHY.subtitle,
        color: COLORS.text
    },
    content: {
        padding: SPACING.lg,
        gap: SPACING.lg
    },
    section: {
        backgroundColor: COLORS.containerBackground,
        borderWidth: 1,
        borderColor: COLORS.containerBorder,
        borderRadius: 12,
        padding: SPACING.lg,
        gap: SPACING.md
    },
    sectionTitle: {
        fontSize: 15,
        fontFamily: 'ClashDisplay-Semibold',
        color: COLORS.text
    },
    statusGrid: {
        flexDirection: 'row',
        gap: SPACING.lg
    },
    statusItem: {
        flex: 1
    },
    statusLabel: {
        fontSize: 12,
        fontFamily: 'Satoshi-Regular',
        color: COLORS.textMuted
    },
    statusValue: {
        fontSize: 15,
        fontFamily: 'Satoshi-Medium',
        color: COLORS.text,
        marginTop: 2
    },
    logsBox: {
        backgroundColor: '#0a0a0a',
        borderRadius: 8,
        padding: SPACING.md,
        maxHeight: 280
    },
    logsText: {
        fontFamily: 'Satoshi-Regular',
        fontSize: 12,
        color: '#d1d5db'
    },
    emptyText: {
        fontSize: 13,
        fontFamily: 'Satoshi-Regular',
        color: COLORS.textMuted
    },
    repairButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        backgroundColor: COLORS.accent,
        borderRadius: 10,
        paddingVertical: SPACING.md
    },
    repairText: {
        fontSize: 14,
        fontFamily: 'Satoshi-Bold',
        color: COLORS.white
    }
})

export default DiagnosticsScreen