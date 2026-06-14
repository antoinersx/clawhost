import type { FC, ReactNode } from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from '@/ts/Types'

import { useState } from 'react'
import {
    Alert,
    FlatList,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { CaretLeft, Plus, Trash } from 'phosphor-react-native'
import { t } from '@openclaw/i18n'
import { useAuth } from '@/lib/auth'
import { useSSHKeys, useCreateSSHKey, useDeleteSSHKey } from '@/hooks'
import { COLORS, SPACING, TYPOGRAPHY } from '@/lib/theme'

type Props = NativeStackScreenProps<RootStackParamList, 'SSHKeys'>

const SSHKeysScreen: FC<Props> = ({ navigation }): ReactNode => {
    const insets = useSafeAreaInsets()
    const { user } = useAuth()
    const { data: keys } = useSSHKeys(user)
    const createKey = useCreateSSHKey()
    const deleteKey = useDeleteSSHKey()
    const [adding, setAdding] = useState(false)
    const [name, setName] = useState('')
    const [publicKey, setPublicKey] = useState('')

    const submit = (): void => {
        if (!name.trim() || !publicKey.trim()) return
        createKey.mutate(
            { name: name.trim(), publicKey: publicKey.trim() },
            {
                onSuccess: () => {
                    setName('')
                    setPublicKey('')
                    setAdding(false)
                }
            }
        )
    }

    const confirmDelete = (id: string): void => {
        Alert.alert(
            t('sshKeys.deleteKey'),
            t('sshKeys.deleteKeyConfirmation'),
            [
                { text: t('common.cancel'), style: 'cancel' },
                {
                    text: t('common.delete'),
                    style: 'destructive',
                    onPress: () => deleteKey.mutate(id)
                }
            ]
        )
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
                <Text style={styles.headerTitle}>{t('sshKeys.title')}</Text>
                <Pressable
                    onPress={() => setAdding((value) => !value)}
                    style={styles.addButton}
                    hitSlop={12}
                >
                    <Plus size={20} color={COLORS.accent} />
                </Pressable>
            </View>

            {adding && (
                <View style={styles.form}>
                    <TextInput
                        value={name}
                        onChangeText={setName}
                        placeholder={t('sshKeys.namePlaceholder')}
                        placeholderTextColor={COLORS.textDim}
                        style={styles.input}
                        autoCapitalize='none'
                    />
                    <TextInput
                        value={publicKey}
                        onChangeText={setPublicKey}
                        placeholder={t('sshKeys.publicKeyPlaceholder')}
                        placeholderTextColor={COLORS.textDim}
                        style={[styles.input, styles.multiline]}
                        autoCapitalize='none'
                        multiline
                    />
                    <Pressable
                        style={styles.saveButton}
                        disabled={createKey.isPending}
                        onPress={submit}
                    >
                        <Text style={styles.saveText}>
                            {t('sshKeys.addSshKey')}
                        </Text>
                    </Pressable>
                </View>
            )}

            <FlatList
                data={keys || []}
                keyExtractor={(item) => item.id}
                contentContainerStyle={[
                    styles.list,
                    { paddingBottom: insets.bottom + SPACING.xl }
                ]}
                ListEmptyComponent={
                    <View style={styles.empty}>
                        <Text style={styles.emptyTitle}>
                            {t('sshKeys.noSshKeysYet')}
                        </Text>
                        <Text style={styles.emptyDescription}>
                            {t('sshKeys.noSshKeysDescription')}
                        </Text>
                    </View>
                }
                renderItem={({ item }) => (
                    <View style={styles.keyRow}>
                        <View style={styles.keyInfo}>
                            <Text style={styles.keyName} numberOfLines={1}>
                                {item.name}
                            </Text>
                            <Text
                                style={styles.keyFingerprint}
                                numberOfLines={1}
                            >
                                {item.fingerprint}
                            </Text>
                        </View>
                        <Pressable
                            onPress={() => confirmDelete(item.id)}
                            hitSlop={12}
                        >
                            <Trash size={18} color={COLORS.destructive} />
                        </Pressable>
                    </View>
                )}
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
    addButton: {
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        padding: SPACING.lg,
        gap: SPACING.sm,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border
    },
    input: {
        borderWidth: 1,
        borderColor: COLORS.containerBorder,
        borderRadius: 8,
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.sm,
        color: COLORS.text,
        fontFamily: 'Satoshi-Regular',
        fontSize: 14
    },
    multiline: {
        minHeight: 90,
        textAlignVertical: 'top'
    },
    saveButton: {
        alignItems: 'center',
        backgroundColor: COLORS.accent,
        borderRadius: 8,
        paddingVertical: SPACING.md
    },
    saveText: {
        fontSize: 14,
        fontFamily: 'Satoshi-Bold',
        color: COLORS.white
    },
    list: {
        padding: SPACING.lg,
        gap: SPACING.sm
    },
    empty: {
        alignItems: 'center',
        paddingTop: SPACING.xxl
    },
    emptyTitle: {
        ...TYPOGRAPHY.subtitle,
        color: COLORS.text,
        marginBottom: SPACING.sm
    },
    emptyDescription: {
        ...TYPOGRAPHY.body,
        color: COLORS.textMuted,
        textAlign: 'center'
    },
    keyRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.md,
        backgroundColor: COLORS.containerBackground,
        borderWidth: 1,
        borderColor: COLORS.containerBorder,
        borderRadius: 10,
        padding: SPACING.md
    },
    keyInfo: {
        flex: 1,
        minWidth: 0
    },
    keyName: {
        fontSize: 14,
        fontFamily: 'Satoshi-Medium',
        color: COLORS.text
    },
    keyFingerprint: {
        fontSize: 12,
        fontFamily: 'Satoshi-Regular',
        color: COLORS.textMuted,
        marginTop: 2
    }
})

export default SSHKeysScreen