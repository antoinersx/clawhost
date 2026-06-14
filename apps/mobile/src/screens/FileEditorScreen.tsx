import type { FC, ReactNode } from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from '@/ts/Types'

import { useEffect, useState } from 'react'
import {
    ActivityIndicator,
    Alert,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { CaretLeft } from 'phosphor-react-native'
import { t } from '@openclaw/i18n'
import { useFile } from '@/hooks'
import { COLORS, SPACING, TYPOGRAPHY } from '@/lib/theme'

type Props = NativeStackScreenProps<RootStackParamList, 'FileEditor'>

const FileEditorScreen: FC<Props> = ({ route, navigation }): ReactNode => {
    const { clawId, path, name } = route.params
    const insets = useSafeAreaInsets()
    const { file, update } = useFile(clawId, path)
    const [content, setContent] = useState('')
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (file.data && !loaded) {
            setContent(file.data.content)
            setLoaded(true)
        }
    }, [file.data, loaded])

    const save = (): void => {
        update.mutate(
            { path, content },
            { onSuccess: () => Alert.alert(t('mobile.fileSaved')) }
        )
    }

    return (
        <KeyboardAvoidingView
            style={[styles.container, { paddingTop: insets.top }]}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <View style={styles.header}>
                <Pressable
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                    hitSlop={12}
                >
                    <CaretLeft size={22} color={COLORS.text} />
                </Pressable>
                <Text style={styles.headerTitle} numberOfLines={1}>
                    {name}
                </Text>
                <Pressable
                    style={styles.saveButton}
                    disabled={update.isPending || !loaded}
                    onPress={save}
                >
                    {update.isPending ? (
                        <ActivityIndicator size='small' color={COLORS.white} />
                    ) : (
                        <Text style={styles.saveText}>{t('common.save')}</Text>
                    )}
                </Pressable>
            </View>

            {file.isPending ? (
                <View style={styles.center}>
                    <ActivityIndicator size='large' color={COLORS.accent} />
                </View>
            ) : (
                <TextInput
                    value={content}
                    onChangeText={setContent}
                    style={[
                        styles.editor,
                        { paddingBottom: insets.bottom + SPACING.lg }
                    ]}
                    multiline
                    autoCapitalize='none'
                    autoCorrect={false}
                    textAlignVertical='top'
                />
            )}
        </KeyboardAvoidingView>
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
    saveButton: {
        backgroundColor: COLORS.accent,
        borderRadius: 8,
        paddingHorizontal: SPACING.lg,
        paddingVertical: SPACING.sm,
        minWidth: 64,
        alignItems: 'center'
    },
    saveText: {
        fontSize: 14,
        fontFamily: 'Satoshi-Bold',
        color: COLORS.white
    },
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    editor: {
        flex: 1,
        padding: SPACING.lg,
        color: COLORS.text,
        fontFamily: 'Satoshi-Regular',
        fontSize: 13
    }
})

export default FileEditorScreen