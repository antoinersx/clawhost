import type { FC, ReactNode } from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from '@/ts/Types'

import { useEffect, useRef, useState } from 'react'
import {
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { CaretLeft, PaperPlaneRight } from 'phosphor-react-native'
import { t } from '@openclaw/i18n'
import { apiPaths } from '@openclaw/shared'
import { getCachedToken } from '@/lib/firebase'
import { COLORS, SPACING, TYPOGRAPHY } from '@/lib/theme'

type Props = NativeStackScreenProps<RootStackParamList, 'Terminal'>

const BASE_URL = process.env.EXPO_PUBLIC_API_URL || 'https://api.clawhost.com'
const ESC = String.fromCharCode(27)
const ANSI = new RegExp(`${ESC}\\[[0-9;?]*[ -/]*[@-~]`, 'g')
const OSC = new RegExp(`${ESC}\\][^\\u0007]*\\u0007`, 'g')

const stripAnsi = (input: string): string =>
    input.replace(ANSI, '').replace(OSC, '').replace(/\r/g, '')

const TerminalScreen: FC<Props> = ({ route, navigation }): ReactNode => {
    const { clawId } = route.params
    const insets = useSafeAreaInsets()
    const wsRef = useRef<WebSocket | null>(null)
    const scrollRef = useRef<ScrollView | null>(null)
    const [output, setOutput] = useState('')
    const [input, setInput] = useState('')
    const [connecting, setConnecting] = useState(true)
    const [connected, setConnected] = useState(false)

    const connect = async (): Promise<void> => {
        setConnecting(true)
        const token = await getCachedToken()
        if (!token) {
            setConnecting(false)
            setConnected(false)
            return
        }
        const path = `${apiPaths.CLAWS.TERMINAL(clawId)}?token=${encodeURIComponent(token)}`
        const url = `${BASE_URL.replace(/^http/, 'ws')}${path}`
        const ws = new WebSocket(url)
        wsRef.current = ws

        ws.onopen = () => {
            ws.send(JSON.stringify({ type: 'resize', cols: 80, rows: 24 }))
            setConnecting(false)
            setConnected(true)
        }
        ws.onmessage = (event) => {
            setOutput((prev) =>
                (prev + stripAnsi(String(event.data))).slice(-20000)
            )
        }
        ws.onclose = () => {
            setConnected(false)
            setConnecting(false)
        }
        ws.onerror = () => {
            setConnected(false)
            setConnecting(false)
        }
    }

    useEffect(() => {
        connect()
        return () => {
            wsRef.current?.close()
            wsRef.current = null
        }
    }, [clawId])

    const send = (): void => {
        const ws = wsRef.current
        if (!ws || ws.readyState !== WebSocket.OPEN) return
        ws.send(`${input}\r`)
        setInput('')
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
                <Text style={styles.headerTitle}>{t('mobile.terminal')}</Text>
                {connecting && (
                    <ActivityIndicator size='small' color={COLORS.accent} />
                )}
            </View>

            <ScrollView
                ref={scrollRef}
                style={styles.output}
                contentContainerStyle={styles.outputContent}
                onContentSizeChange={() =>
                    scrollRef.current?.scrollToEnd({ animated: false })
                }
            >
                <Text style={styles.outputText}>{output}</Text>
            </ScrollView>

            {!connected && !connecting && (
                <View style={styles.disconnected}>
                    <Text style={styles.disconnectedText}>
                        {t('mobile.terminalDisconnected')}
                    </Text>
                    <Pressable style={styles.reconnect} onPress={connect}>
                        <Text style={styles.reconnectText}>
                            {t('common.tryAgain')}
                        </Text>
                    </Pressable>
                </View>
            )}

            <View
                style={[
                    styles.inputBar,
                    { paddingBottom: insets.bottom + SPACING.sm }
                ]}
            >
                <TextInput
                    value={input}
                    onChangeText={setInput}
                    onSubmitEditing={send}
                    placeholder={t('mobile.terminalPlaceholder')}
                    placeholderTextColor={COLORS.textDim}
                    style={styles.input}
                    autoCapitalize='none'
                    autoCorrect={false}
                    editable={connected}
                    returnKeyType='send'
                />
                <Pressable
                    style={styles.sendButton}
                    disabled={!connected}
                    onPress={send}
                >
                    <PaperPlaneRight
                        size={18}
                        color={COLORS.white}
                        weight='fill'
                    />
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0a0a0a'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.sm,
        paddingHorizontal: SPACING.lg,
        paddingVertical: SPACING.md,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
        backgroundColor: COLORS.background
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
    output: {
        flex: 1
    },
    outputContent: {
        padding: SPACING.md
    },
    outputText: {
        fontFamily: 'Satoshi-Regular',
        fontSize: 12,
        color: '#d1d5db'
    },
    disconnected: {
        alignItems: 'center',
        gap: SPACING.sm,
        padding: SPACING.md
    },
    disconnectedText: {
        fontSize: 13,
        fontFamily: 'Satoshi-Regular',
        color: COLORS.textMuted
    },
    reconnect: {
        backgroundColor: COLORS.accent,
        borderRadius: 8,
        paddingHorizontal: SPACING.lg,
        paddingVertical: SPACING.sm
    },
    reconnectText: {
        fontSize: 13,
        fontFamily: 'Satoshi-Bold',
        color: COLORS.white
    },
    inputBar: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.sm,
        paddingHorizontal: SPACING.md,
        paddingTop: SPACING.sm,
        borderTopWidth: 1,
        borderTopColor: COLORS.border,
        backgroundColor: COLORS.background
    },
    input: {
        flex: 1,
        backgroundColor: COLORS.containerBackground,
        borderRadius: 8,
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.sm,
        color: COLORS.text,
        fontFamily: 'Satoshi-Regular',
        fontSize: 14
    },
    sendButton: {
        width: 40,
        height: 40,
        borderRadius: 8,
        backgroundColor: COLORS.accent,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default TerminalScreen