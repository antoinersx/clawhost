import type { FC, ReactNode } from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from '@/ts/Types'

import { Fragment, useState } from 'react'
import {
    ActivityIndicator,
    Alert,
    Modal,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {
    ArrowClockwise,
    ArrowsClockwise,
    CaretLeft,
    CaretRight,
    ClockCounterClockwise,
    DownloadSimple,
    FolderOpen,
    Key,
    PencilSimple,
    Play,
    Stethoscope,
    Stop,
    TerminalWindow,
    Trash
} from 'phosphor-react-native'
import { t } from '@openclaw/i18n'
import { agentStatus } from '@openclaw/shared'
import { useAuth } from '@/lib/auth'
import {
    useClaw,
    useClawActions,
    useCredentials,
    useReinstall
} from '@/hooks'
import { COLORS, SPACING, TYPOGRAPHY } from '@/lib/theme'
import { getStatusConfig } from '@/lib/claw-utils'
import StatusBadge from '@/components/StatusBadge'
import CopyableField from '@/components/CopyableField'

type Props = NativeStackScreenProps<RootStackParamList, 'ClawDetail'>

const ClawDetailScreen: FC<Props> = ({ route, navigation }): ReactNode => {
    const { clawId } = route.params
    const insets = useSafeAreaInsets()
    const { user } = useAuth()
    const { data: claw, isPending } = useClaw(user, clawId)
    const actions = useClawActions(clawId)
    const reinstall = useReinstall(clawId)
    const [showCredentials, setShowCredentials] = useState(false)
    const { data: credentials } = useCredentials(clawId, showCredentials)
    const [renameVisible, setRenameVisible] = useState(false)
    const [renameValue, setRenameValue] = useState('')

    const statuses = getStatusConfig()
    const status = claw
        ? statuses[claw.status] || statuses.unknown
        : statuses.unknown

    const isRunning = claw?.status === agentStatus.running
    const isStopped = claw?.status === agentStatus.stopped
    const busy =
        actions.start.isPending ||
        actions.stop.isPending ||
        actions.restart.isPending ||
        actions.sync.isPending

    const confirmDelete = (): void => {
        Alert.alert(
            t('dashboard.deleteClaw'),
            t('dashboard.deleteClawConfirmation'),
            [
                { text: t('common.cancel'), style: 'cancel' },
                {
                    text: t('common.delete'),
                    style: 'destructive',
                    onPress: () => actions.remove.mutate()
                }
            ]
        )
    }

    const confirmCancelDeletion = (): void => {
        Alert.alert(
            t('dashboard.cancelDeletion'),
            t('dashboard.cancelDeletionConfirmation'),
            [
                { text: t('common.cancel'), style: 'cancel' },
                {
                    text: t('dashboard.cancelDeletion'),
                    onPress: () => actions.cancelDeletion.mutate()
                }
            ]
        )
    }

    const confirmReinstall = (): void => {
        Alert.alert(
            t('dashboard.reinstallClaw'),
            t('dashboard.reinstallClawConfirmation'),
            [
                { text: t('common.cancel'), style: 'cancel' },
                {
                    text: t('mobile.reinstall'),
                    style: 'destructive',
                    onPress: () => reinstall.mutate()
                }
            ]
        )
    }

    const submitRename = (): void => {
        const name = renameValue.trim()
        if (!name) return
        actions.rename.mutate(
            { name },
            { onSuccess: () => setRenameVisible(false) }
        )
    }

    const openRename = (): void => {
        setRenameValue(claw?.name || '')
        setRenameVisible(true)
    }

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
                <Text style={styles.headerTitle} numberOfLines={1}>
                    {claw?.name || ''}
                </Text>
                {claw && <StatusBadge status={claw.status} config={status} />}
            </View>

            {isPending || !claw ? (
                <View style={styles.center}>
                    <ActivityIndicator size='large' color={COLORS.accent} />
                </View>
            ) : (
                <ScrollView
                    contentContainerStyle={[
                        styles.content,
                        { paddingBottom: insets.bottom + SPACING.xl }
                    ]}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.actionGrid}>
                        {isRunning ? (
                            <Pressable
                                style={styles.actionButton}
                                disabled={busy}
                                onPress={() => actions.stop.mutate()}
                            >
                                <Stop size={18} color={COLORS.text} />
                                <Text style={styles.actionText}>
                                    {t('dashboard.stop')}
                                </Text>
                            </Pressable>
                        ) : (
                            <Pressable
                                style={styles.actionButton}
                                disabled={busy || !isStopped}
                                onPress={() => actions.start.mutate()}
                            >
                                <Play size={18} color={COLORS.text} />
                                <Text style={styles.actionText}>
                                    {t('dashboard.start')}
                                </Text>
                            </Pressable>
                        )}
                        <Pressable
                            style={styles.actionButton}
                            disabled={busy || !isRunning}
                            onPress={() => actions.restart.mutate()}
                        >
                            <ArrowClockwise size={18} color={COLORS.text} />
                            <Text style={styles.actionText}>
                                {t('dashboard.restart')}
                            </Text>
                        </Pressable>
                        <Pressable
                            style={styles.actionButton}
                            disabled={busy}
                            onPress={() =>
                                actions.sync.mutate(undefined, {
                                    onSuccess: () =>
                                        Alert.alert(t('mobile.syncSuccess'))
                                })
                            }
                        >
                            <ArrowsClockwise size={18} color={COLORS.text} />
                            <Text style={styles.actionText}>
                                {t('mobile.sync')}
                            </Text>
                        </Pressable>
                        <Pressable
                            style={styles.actionButton}
                            onPress={openRename}
                        >
                            <PencilSimple size={18} color={COLORS.text} />
                            <Text style={styles.actionText}>
                                {t('mobile.rename')}
                            </Text>
                        </Pressable>
                    </View>

                    {busy && (
                        <ActivityIndicator
                            size='small'
                            color={COLORS.accent}
                            style={styles.busy}
                        />
                    )}

                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Key size={18} color={COLORS.textMuted} />
                            <Text style={styles.sectionTitle}>
                                {t('mobile.credentials')}
                            </Text>
                        </View>
                        {showCredentials ? (
                            <Fragment>
                                {credentials?.ip && (
                                    <CopyableField
                                        label={t('dashboard.ipAddress')}
                                        value={credentials.ip}
                                    />
                                )}
                                {credentials?.rootPassword && (
                                    <CopyableField
                                        label={t('dashboard.rootPassword')}
                                        value={credentials.rootPassword}
                                    />
                                )}
                                {credentials?.gatewayToken && (
                                    <CopyableField
                                        label={t('dashboard.gatewayToken')}
                                        value={credentials.gatewayToken}
                                    />
                                )}
                                <View style={styles.rotateRow}>
                                    <Pressable
                                        style={styles.secondaryButton}
                                        disabled={actions.rotatePassword.isPending}
                                        onPress={() =>
                                            actions.rotatePassword.mutate()
                                        }
                                    >
                                        <Text style={styles.secondaryText}>
                                            {t('mobile.rotatePassword')}
                                        </Text>
                                    </Pressable>
                                    <Pressable
                                        style={styles.secondaryButton}
                                        disabled={
                                            actions.rotateGatewayToken.isPending
                                        }
                                        onPress={() =>
                                            actions.rotateGatewayToken.mutate()
                                        }
                                    >
                                        <Text style={styles.secondaryText}>
                                            {t('mobile.rotateGatewayToken')}
                                        </Text>
                                    </Pressable>
                                </View>
                            </Fragment>
                        ) : (
                            <Pressable
                                style={styles.secondaryButton}
                                onPress={() => setShowCredentials(true)}
                            >
                                <Text style={styles.secondaryText}>
                                    {t('mobile.showCredentials')}
                                </Text>
                            </Pressable>
                        )}
                    </View>

                    <View style={styles.toolList}>
                        <Pressable
                            style={styles.toolRow}
                            onPress={() =>
                                navigation.navigate('Diagnostics', { clawId })
                            }
                        >
                            <Stethoscope size={18} color={COLORS.text} />
                            <Text style={styles.toolText}>
                                {t('dashboard.diagnostics')}
                            </Text>
                            <CaretRight size={16} color={COLORS.textMuted} />
                        </Pressable>
                        <Pressable
                            style={styles.toolRow}
                            onPress={() =>
                                navigation.navigate('Files', { clawId })
                            }
                        >
                            <FolderOpen size={18} color={COLORS.text} />
                            <Text style={styles.toolText}>
                                {t('dashboard.fileExplorer')}
                            </Text>
                            <CaretRight size={16} color={COLORS.textMuted} />
                        </Pressable>
                        <Pressable
                            style={styles.toolRow}
                            onPress={() =>
                                navigation.navigate('Terminal', { clawId })
                            }
                        >
                            <TerminalWindow size={18} color={COLORS.text} />
                            <Text style={styles.toolText}>
                                {t('mobile.terminal')}
                            </Text>
                            <CaretRight size={16} color={COLORS.textMuted} />
                        </Pressable>
                        <Pressable
                            style={styles.toolRow}
                            onPress={() =>
                                navigation.navigate('Versions', { clawId })
                            }
                        >
                            <ClockCounterClockwise
                                size={18}
                                color={COLORS.text}
                            />
                            <Text style={styles.toolText}>
                                {t('mobile.versions')}
                            </Text>
                            <CaretRight size={16} color={COLORS.textMuted} />
                        </Pressable>
                        <Pressable
                            style={styles.toolRow}
                            disabled={reinstall.isPending}
                            onPress={confirmReinstall}
                        >
                            <DownloadSimple size={18} color={COLORS.text} />
                            <Text style={styles.toolText}>
                                {t('dashboard.reinstallClaw')}
                            </Text>
                            {reinstall.isPending && (
                                <ActivityIndicator
                                    size='small'
                                    color={COLORS.accent}
                                />
                            )}
                        </Pressable>
                    </View>

                    {claw.deletionScheduledAt ? (
                        <Pressable
                            style={styles.cancelDeleteButton}
                            onPress={confirmCancelDeletion}
                        >
                            <Text style={styles.cancelDeleteText}>
                                {t('dashboard.cancelDeletion')}
                            </Text>
                        </Pressable>
                    ) : (
                        <Pressable
                            style={styles.deleteButton}
                            onPress={confirmDelete}
                        >
                            <Trash size={18} color={COLORS.destructive} />
                            <Text style={styles.deleteText}>
                                {t('dashboard.deleteClaw')}
                            </Text>
                        </Pressable>
                    )}
                </ScrollView>
            )}

            <Modal
                visible={renameVisible}
                transparent
                animationType='fade'
                onRequestClose={() => setRenameVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalCard}>
                        <Text style={styles.modalTitle}>
                            {t('mobile.rename')}
                        </Text>
                        <TextInput
                            value={renameValue}
                            onChangeText={setRenameValue}
                            placeholder={t('mobile.newName')}
                            placeholderTextColor={COLORS.textDim}
                            style={styles.input}
                            autoFocus
                            autoCapitalize='none'
                        />
                        <View style={styles.modalActions}>
                            <Pressable
                                style={styles.modalCancel}
                                onPress={() => setRenameVisible(false)}
                            >
                                <Text style={styles.modalCancelText}>
                                    {t('common.cancel')}
                                </Text>
                            </Pressable>
                            <Pressable
                                style={styles.modalSave}
                                disabled={actions.rename.isPending}
                                onPress={submitRename}
                            >
                                <Text style={styles.modalSaveText}>
                                    {t('common.save')}
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
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
        color: COLORS.text,
        flex: 1
    },
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        padding: SPACING.lg
    },
    actionGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: SPACING.sm
    },
    actionButton: {
        flexGrow: 1,
        flexBasis: '47%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        backgroundColor: COLORS.containerBackground,
        borderWidth: 1,
        borderColor: COLORS.containerBorder,
        borderRadius: 10,
        paddingVertical: SPACING.md
    },
    actionText: {
        fontSize: 14,
        fontFamily: 'Satoshi-Medium',
        color: COLORS.text
    },
    busy: {
        marginTop: SPACING.md
    },
    section: {
        marginTop: SPACING.xl,
        backgroundColor: COLORS.containerBackground,
        borderWidth: 1,
        borderColor: COLORS.containerBorder,
        borderRadius: 12,
        padding: SPACING.lg,
        gap: SPACING.md
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    sectionTitle: {
        fontSize: 15,
        fontFamily: 'ClashDisplay-Semibold',
        color: COLORS.text
    },
    rotateRow: {
        flexDirection: 'row',
        gap: SPACING.sm,
        marginTop: SPACING.xs
    },
    secondaryButton: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: 8,
        paddingVertical: SPACING.sm
    },
    secondaryText: {
        fontSize: 13,
        fontFamily: 'Satoshi-Medium',
        color: COLORS.text
    },
    toolList: {
        marginTop: SPACING.xl,
        backgroundColor: COLORS.containerBackground,
        borderWidth: 1,
        borderColor: COLORS.containerBorder,
        borderRadius: 12,
        overflow: 'hidden'
    },
    toolRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.md,
        paddingHorizontal: SPACING.lg,
        paddingVertical: SPACING.md,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border
    },
    toolText: {
        flex: 1,
        fontSize: 14,
        fontFamily: 'Satoshi-Medium',
        color: COLORS.text
    },
    deleteButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        marginTop: SPACING.xl,
        borderWidth: 1,
        borderColor: 'rgba(239,83,80,0.4)',
        borderRadius: 10,
        paddingVertical: SPACING.md
    },
    deleteText: {
        fontSize: 14,
        fontFamily: 'Satoshi-Bold',
        color: COLORS.destructive
    },
    cancelDeleteButton: {
        alignItems: 'center',
        marginTop: SPACING.xl,
        backgroundColor: COLORS.accent,
        borderRadius: 10,
        paddingVertical: SPACING.md
    },
    cancelDeleteText: {
        fontSize: 14,
        fontFamily: 'Satoshi-Bold',
        color: COLORS.white
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: SPACING.xl
    },
    modalCard: {
        width: '100%',
        backgroundColor: COLORS.surface,
        borderWidth: 1,
        borderColor: COLORS.containerBorder,
        borderRadius: 14,
        padding: SPACING.lg,
        gap: SPACING.md
    },
    modalTitle: {
        ...TYPOGRAPHY.subtitle,
        color: COLORS.text
    },
    input: {
        borderWidth: 1,
        borderColor: COLORS.containerBorder,
        borderRadius: 8,
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.sm,
        color: COLORS.text,
        fontFamily: 'Satoshi-Regular',
        fontSize: 15
    },
    modalActions: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: SPACING.sm
    },
    modalCancel: {
        paddingHorizontal: SPACING.lg,
        paddingVertical: SPACING.sm
    },
    modalCancelText: {
        fontSize: 14,
        fontFamily: 'Satoshi-Medium',
        color: COLORS.textMuted
    },
    modalSave: {
        backgroundColor: COLORS.accent,
        borderRadius: 8,
        paddingHorizontal: SPACING.lg,
        paddingVertical: SPACING.sm
    },
    modalSaveText: {
        fontSize: 14,
        fontFamily: 'Satoshi-Bold',
        color: COLORS.white
    }
})

export default ClawDetailScreen