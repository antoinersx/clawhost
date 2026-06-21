import type { FC, ReactNode } from 'react'
import type { CopyableFieldProps } from '@/ts/Interfaces'

import * as Clipboard from 'expo-clipboard'

import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { t } from '@openclaw/i18n'
import { COLORS } from '@/lib/theme'

const CopyableField: FC<CopyableFieldProps> = ({
    label,
    value,
    icon,
    width
}): ReactNode => {
    const [copied, setCopied] = useState(false)

    const handleCopy = async (): Promise<void> => {
        await Clipboard.setStringAsync(value)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <Pressable
            onPress={handleCopy}
            style={[styles.container, width ? { width } : undefined]}
        >
            <View style={styles.content}>
                <Text style={styles.label}>{label}</Text>
                <View style={styles.valueRow}>
                    {icon}
                    <Text style={styles.value} numberOfLines={1}>
                        {value}
                    </Text>
                </View>
            </View>
            {copied && (
                <Text style={styles.copiedText}>{t('common.copied')}</Text>
            )}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.background,
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    content: {
        flex: 1,
        minWidth: 0
    },
    label: {
        fontSize: 11,
        color: COLORS.textMuted,
        marginBottom: 2
    },
    valueRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6
    },
    value: {
        fontSize: 13,
        color: COLORS.text,
        fontFamily: 'Courier',
        flex: 1
    },
    copiedText: {
        fontSize: 11,
        color: COLORS.success,
        fontFamily: 'Satoshi-Medium'
    }
})

export default CopyableField