import type { FC, ReactNode } from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from '@/ts/Types'

import { useState } from 'react'
import {
    ActivityIndicator,
    FlatList,
    Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { CaretLeft } from 'phosphor-react-native'
import { t } from '@openclaw/i18n'
import { useVersions } from '@/hooks'
import { COLORS, SPACING, TYPOGRAPHY } from '@/lib/theme'

type Props = NativeStackScreenProps<RootStackParamList, 'Versions'>

const VersionsScreen: FC<Props> = ({ route, navigation }): ReactNode => {
    const { clawId } = route.params
    const insets = useSafeAreaInsets()
    const { versions, install } = useVersions(clawId, true)
    const [installing, setInstalling] = useState<string | null>(null)

    const onInstall = (version: string): void => {
        setInstalling(version)
        install.mutate(version, {
            onSettled: () => setInstalling(null)
        })
    }

    const current = versions.data?.currentVersion

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
                <Text style={styles.headerTitle}>{t('mobile.versions')}</Text>
            </View>

            {versions.isPending ? (
                <View style={styles.center}>
                    <ActivityIndicator size='large' color={COLORS.accent} />
                </View>
            ) : (
                <FlatList
                    data={versions.data?.versions || []}
                    keyExtractor={(item) => item.version}
                    contentContainerStyle={[
                        styles.list,
                        { paddingBottom: insets.bottom + SPACING.xl }
                    ]}
                    ListHeaderComponent={
                        <View style={styles.summary}>
                            <View style={styles.summaryItem}>
                                <Text style={styles.summaryLabel}>
                                    {t('mobile.currentVersion')}
                                </Text>
                                <Text style={styles.summaryValue}>
                                    {versions.data?.currentVersion || '-'}
                                </Text>
                            </View>
                            <View style={styles.summaryItem}>
                                <Text style={styles.summaryLabel}>
                                    {t('mobile.latestVersion')}
                                </Text>
                                <Text style={styles.summaryValue}>
                                    {versions.data?.latestVersion || '-'}
                                </Text>
                            </View>
                        </View>
                    }
                    renderItem={({ item }) => {
                        const isCurrent = item.version === current
                        const isInstalling = installing === item.version
                        return (
                            <View style={styles.row}>
                                <Text style={styles.version}>
                                    {item.version}
                                </Text>
                                {isCurrent ? (
                                    <Text style={styles.currentBadge}>
                                        {t('mobile.currentVersion')}
                                    </Text>
                                ) : (
                                    <Pressable
                                        style={styles.installButton}
                                        disabled={install.isPending}
                                        onPress={() => onInstall(item.version)}
                                    >
                                        {isInstalling ? (
                                            <ActivityIndicator
                                                size='small'
                                                color={COLORS.white}
                                            />
                                        ) : (
                                            <Text style={styles.installText}>
                                                {t('mobile.install')}
                                            </Text>
                                        )}
                                    </Pressable>
                                )}
                            </View>
                        )
                    }}
                />
            )}
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
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    list: {
        padding: SPACING.lg,
        gap: SPACING.sm
    },
    summary: {
        flexDirection: 'row',
        gap: SPACING.lg,
        marginBottom: SPACING.md
    },
    summaryItem: {
        flex: 1,
        backgroundColor: COLORS.containerBackground,
        borderWidth: 1,
        borderColor: COLORS.containerBorder,
        borderRadius: 10,
        padding: SPACING.md
    },
    summaryLabel: {
        fontSize: 12,
        fontFamily: 'Satoshi-Regular',
        color: COLORS.textMuted
    },
    summaryValue: {
        fontSize: 15,
        fontFamily: 'Satoshi-Medium',
        color: COLORS.text,
        marginTop: 2
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.containerBackground,
        borderWidth: 1,
        borderColor: COLORS.containerBorder,
        borderRadius: 10,
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.md
    },
    version: {
        fontSize: 14,
        fontFamily: 'Satoshi-Medium',
        color: COLORS.text
    },
    currentBadge: {
        fontSize: 12,
        fontFamily: 'Satoshi-Medium',
        color: COLORS.accent
    },
    installButton: {
        backgroundColor: COLORS.accent,
        borderRadius: 8,
        paddingHorizontal: SPACING.lg,
        paddingVertical: SPACING.sm,
        minWidth: 80,
        alignItems: 'center'
    },
    installText: {
        fontSize: 13,
        fontFamily: 'Satoshi-Bold',
        color: COLORS.white
    }
})

export default VersionsScreen