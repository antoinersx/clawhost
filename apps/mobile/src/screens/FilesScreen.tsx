import type { FC, ReactNode } from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from '@/ts/Types'

import {
    ActivityIndicator,
    FlatList,
    Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { CaretLeft, CaretRight, File } from 'phosphor-react-native'
import { t } from '@openclaw/i18n'
import { useAuth } from '@/lib/auth'
import { useFiles } from '@/hooks'
import { COLORS, SPACING, TYPOGRAPHY } from '@/lib/theme'

type Props = NativeStackScreenProps<RootStackParamList, 'Files'>

const FilesScreen: FC<Props> = ({ route, navigation }): ReactNode => {
    const { clawId } = route.params
    const insets = useSafeAreaInsets()
    const { user } = useAuth()
    const { data, isPending } = useFiles(user, clawId)

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
                <Text style={styles.headerTitle}>
                    {t('dashboard.fileExplorer')}
                </Text>
            </View>

            {isPending ? (
                <View style={styles.center}>
                    <ActivityIndicator size='large' color={COLORS.accent} />
                </View>
            ) : (
                <FlatList
                    data={data?.files || []}
                    keyExtractor={(item) => item.path}
                    contentContainerStyle={[
                        styles.list,
                        { paddingBottom: insets.bottom + SPACING.xl }
                    ]}
                    renderItem={({ item }) => (
                        <Pressable
                            style={styles.row}
                            onPress={() =>
                                navigation.navigate('FileEditor', {
                                    clawId,
                                    path: item.path,
                                    name: item.name
                                })
                            }
                        >
                            <File size={18} color={COLORS.textMuted} />
                            <Text style={styles.fileName} numberOfLines={1}>
                                {item.name}
                            </Text>
                            <CaretRight size={16} color={COLORS.textMuted} />
                        </Pressable>
                    )}
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
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.md,
        backgroundColor: COLORS.containerBackground,
        borderWidth: 1,
        borderColor: COLORS.containerBorder,
        borderRadius: 10,
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.md
    },
    fileName: {
        flex: 1,
        minWidth: 0,
        fontSize: 14,
        fontFamily: 'Satoshi-Medium',
        color: COLORS.text
    }
})

export default FilesScreen