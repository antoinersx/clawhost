import type { FC, ReactNode } from 'react'

import { useState, useEffect, useRef, useCallback } from 'react'
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
import { LinearGradient } from 'expo-linear-gradient'
import { GoogleLogo, GithubLogo } from 'phosphor-react-native'
import { t } from '@openclaw/i18n'
import { useAuth } from '@/lib/auth'
import { COLORS, SPACING, TYPOGRAPHY } from '@/lib/theme'
import { ClawMascot } from '@/components'

const COOLDOWN_DURATION = 60
const CODE_LENGTH = 6

const LoginScreen: FC = (): ReactNode => {
    const insets = useSafeAreaInsets()
    const { sendOtp, verifyOtp, signInWithGoogle, signInWithGithub } = useAuth()

    const [email, setEmail] = useState('')
    const [step, setStep] = useState<'email' | 'code'>('email')
    const [code, setCode] = useState<string[]>(Array(CODE_LENGTH).fill(''))
    const [loading, setLoading] = useState(false)
    const [cooldown, setCooldown] = useState(0)
    const [error, setError] = useState<string | null>(null)

    const inputRefs = useRef<(TextInput | null)[]>([])

    useEffect(() => {
        if (cooldown <= 0) return
        const interval = setInterval(() => {
            setCooldown((prev) => Math.max(0, prev - 1))
        }, 1000)
        return () => clearInterval(interval)
    }, [cooldown])

    const handleSendOtp = useCallback(async () => {
        if (!email.trim() || loading || cooldown > 0) return
        setLoading(true)
        setError(null)
        try {
            await sendOtp(email.trim())
            setCooldown(COOLDOWN_DURATION)
            setStep('code')
            setCode(Array(CODE_LENGTH).fill(''))
        } catch (err: unknown) {
            const message =
                err instanceof Error
                    ? err.message
                    : t('errors.failedToLoadAgents')
            Alert.alert(t('errors.somethingWentWrong'), message)
        } finally {
            setLoading(false)
        }
    }, [email, loading, cooldown, sendOtp])

    const handleVerifyOtp = useCallback(
        async (fullCode: string) => {
            if (loading) return
            setLoading(true)
            setError(null)
            try {
                await verifyOtp(email.trim(), fullCode)
            } catch (err: unknown) {
                const message =
                    err instanceof Error ? err.message : t('mobile.invalidCode')
                setError(message)
                setCode(Array(CODE_LENGTH).fill(''))
                inputRefs.current[0]?.focus()
            } finally {
                setLoading(false)
            }
        },
        [email, loading, verifyOtp]
    )

    const handleCodeChange = useCallback(
        (value: string, index: number) => {
            if (!/^\d*$/.test(value)) return

            const newCode = [...code]

            if (value.length > 1) {
                const digits = value.split('').slice(0, CODE_LENGTH)
                digits.forEach((digit, i) => {
                    if (index + i < CODE_LENGTH) {
                        newCode[index + i] = digit
                    }
                })
                setCode(newCode)
                const nextIndex = Math.min(
                    index + digits.length,
                    CODE_LENGTH - 1
                )
                inputRefs.current[nextIndex]?.focus()

                const fullCode = newCode.join('')
                if (
                    fullCode.length === CODE_LENGTH &&
                    newCode.every((d) => d !== '')
                ) {
                    handleVerifyOtp(fullCode)
                }
                return
            }

            newCode[index] = value
            setCode(newCode)

            if (value && index < CODE_LENGTH - 1) {
                inputRefs.current[index + 1]?.focus()
            }

            const fullCode = newCode.join('')
            if (
                fullCode.length === CODE_LENGTH &&
                newCode.every((d) => d !== '')
            ) {
                handleVerifyOtp(fullCode)
            }
        },
        [code, handleVerifyOtp]
    )

    const handleCodeKeyPress = useCallback(
        (key: string, index: number) => {
            if (key === 'Backspace' && !code[index] && index > 0) {
                const newCode = [...code]
                newCode[index - 1] = ''
                setCode(newCode)
                inputRefs.current[index - 1]?.focus()
            }
        },
        [code]
    )

    const handleResend = useCallback(async () => {
        if (cooldown > 0 || loading) return
        setLoading(true)
        setError(null)
        try {
            await sendOtp(email.trim())
            setCooldown(COOLDOWN_DURATION)
        } catch (err: unknown) {
            const message =
                err instanceof Error
                    ? err.message
                    : t('errors.failedToLoadAgents')
            Alert.alert(t('errors.somethingWentWrong'), message)
        } finally {
            setLoading(false)
        }
    }, [email, cooldown, loading, sendOtp])

    const handleChangeEmail = useCallback(() => {
        setStep('email')
        setCode(Array(CODE_LENGTH).fill(''))
        setError(null)
    }, [])

    const handleOAuth = useCallback(
        async (provider: 'google' | 'github') => {
            if (loading) return
            setLoading(true)
            try {
                if (provider === 'google') await signInWithGoogle()
                else await signInWithGithub()
            } catch (err: unknown) {
                const message =
                    err instanceof Error
                        ? err.message
                        : t('errors.somethingWentWrong')
                Alert.alert(t('errors.somethingWentWrong'), message)
            } finally {
                setLoading(false)
            }
        },
        [loading, signInWithGoogle, signInWithGithub]
    )

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <LinearGradient
                colors={[
                    'rgba(239,83,80,0.25)',
                    'rgba(198,40,40,0.15)',
                    'transparent'
                ]}
                locations={[0, 0.3, 0.7]}
                style={styles.gradient}
            />

            <KeyboardAvoidingView
                style={styles.content}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.logoContainer}>
                    <View style={styles.mascotContainer}>
                        <ClawMascot size={40} />
                    </View>
                </View>

                {step === 'email' ? (
                    <View style={styles.formContainer}>
                        <Text style={styles.title}>{t('mobile.signIn')}</Text>
                        <Text style={styles.subtitle}>
                            {t('mobile.signInDescription')}
                        </Text>

                        <View style={styles.inputContainer}>
                            <Text style={styles.inputLabel}>
                                {t('mobile.enterEmail')}
                            </Text>
                            <TextInput
                                style={styles.textInput}
                                value={email}
                                onChangeText={setEmail}
                                placeholder={t('mobile.emailPlaceholder')}
                                placeholderTextColor={COLORS.textDim}
                                keyboardType='email-address'
                                autoCapitalize='none'
                                autoCorrect={false}
                                autoComplete='email'
                                returnKeyType='go'
                                onSubmitEditing={handleSendOtp}
                                editable={!loading}
                            />
                        </View>

                        <Pressable
                            style={[
                                styles.button,
                                (loading || cooldown > 0 || !email.trim()) &&
                                    styles.buttonDisabled
                            ]}
                            onPress={handleSendOtp}
                            disabled={loading || cooldown > 0 || !email.trim()}
                        >
                            {loading ? (
                                <View style={styles.buttonContent}>
                                    <ActivityIndicator
                                        size='small'
                                        color={COLORS.white}
                                    />
                                    <Text style={styles.buttonText}>
                                        {t('mobile.sending')}
                                    </Text>
                                </View>
                            ) : cooldown > 0 ? (
                                <Text style={styles.buttonText}>
                                    {t('mobile.resendIn', {
                                        seconds: String(cooldown)
                                    })}
                                </Text>
                            ) : (
                                <Text style={styles.buttonText}>
                                    {t('mobile.continueWithEmail')}
                                </Text>
                            )}
                        </Pressable>

                        <View style={styles.divider}>
                            <View style={styles.dividerLine} />
                            <Text style={styles.dividerText}>
                                {t('auth.or')}
                            </Text>
                            <View style={styles.dividerLine} />
                        </View>

                        <Pressable
                            style={styles.oauthButton}
                            onPress={() => handleOAuth('google')}
                            disabled={loading}
                        >
                            <GoogleLogo
                                size={20}
                                color={COLORS.text}
                                weight='bold'
                            />
                            <Text style={styles.oauthButtonText}>
                                {t('auth.continueWithGoogle')}
                            </Text>
                        </Pressable>

                        <Pressable
                            style={styles.oauthButton}
                            onPress={() => handleOAuth('github')}
                            disabled={loading}
                        >
                            <GithubLogo
                                size={20}
                                color={COLORS.text}
                                weight='fill'
                            />
                            <Text style={styles.oauthButtonText}>
                                {t('auth.continueWithGithub')}
                            </Text>
                        </Pressable>

                        <Text style={styles.description}>
                            {t('mobile.otpDescription')}
                        </Text>
                    </View>
                ) : (
                    <View style={styles.formContainer}>
                        <Text style={styles.title}>
                            {t('mobile.checkYourEmail')}
                        </Text>
                        <Text style={styles.subtitle}>
                            {t('mobile.codeSentTo')}{' '}
                            <Text style={styles.emailHighlight}>{email}</Text>
                        </Text>

                        <View style={styles.codeContainer}>
                            {code.map((digit, index) => (
                                <TextInput
                                    key={index}
                                    ref={(ref: TextInput | null) => {
                                        inputRefs.current[index] = ref
                                    }}
                                    style={[
                                        styles.codeInput,
                                        digit ? styles.codeInputFilled : null,
                                        error ? styles.codeInputError : null
                                    ]}
                                    value={digit}
                                    onChangeText={(value: string) =>
                                        handleCodeChange(value, index)
                                    }
                                    onKeyPress={({
                                        nativeEvent
                                    }: {
                                        nativeEvent: { key: string }
                                    }) =>
                                        handleCodeKeyPress(
                                            nativeEvent.key,
                                            index
                                        )
                                    }
                                    keyboardType='number-pad'
                                    maxLength={index === 0 ? CODE_LENGTH : 1}
                                    selectTextOnFocus
                                    editable={!loading}
                                />
                            ))}
                        </View>

                        {error && <Text style={styles.errorText}>{error}</Text>}

                        {loading && (
                            <View style={styles.loadingRow}>
                                <ActivityIndicator
                                    size='small'
                                    color={COLORS.accent}
                                />
                                <Text style={styles.loadingText}>
                                    {t('mobile.signingIn')}
                                </Text>
                            </View>
                        )}

                        <View style={styles.linksContainer}>
                            <Pressable
                                onPress={handleResend}
                                disabled={cooldown > 0 || loading}
                            >
                                <Text
                                    style={[
                                        styles.linkText,
                                        (cooldown > 0 || loading) &&
                                            styles.linkDisabled
                                    ]}
                                >
                                    {cooldown > 0
                                        ? t('mobile.resendIn', {
                                              seconds: String(cooldown)
                                          })
                                        : t('mobile.resendCode')}
                                </Text>
                            </Pressable>

                            <Pressable
                                onPress={handleChangeEmail}
                                disabled={loading}
                            >
                                <Text
                                    style={[
                                        styles.linkText,
                                        loading && styles.linkDisabled
                                    ]}
                                >
                                    {t('mobile.changeEmail')}
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                )}
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background
    },
    gradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 400
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: SPACING.xxl
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: SPACING.xxxl
    },
    mascotContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: 'rgba(239,83,80,0.1)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    formContainer: {
        backgroundColor: COLORS.containerBackground,
        borderWidth: 1,
        borderColor: COLORS.containerBorder,
        borderRadius: 16,
        padding: SPACING.xxl
    },
    title: {
        ...TYPOGRAPHY.title,
        color: COLORS.text,
        textAlign: 'center',
        marginBottom: SPACING.sm
    },
    subtitle: {
        ...TYPOGRAPHY.body,
        color: COLORS.textMuted,
        textAlign: 'center',
        marginBottom: SPACING.xl
    },
    emailHighlight: {
        color: COLORS.text,
        fontFamily: 'Satoshi-Bold'
    },
    inputContainer: {
        marginBottom: SPACING.lg
    },
    inputLabel: {
        ...TYPOGRAPHY.label,
        color: COLORS.textMuted,
        marginBottom: SPACING.sm
    },
    textInput: {
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 10,
        paddingHorizontal: SPACING.lg,
        paddingVertical: 14,
        fontSize: 16,
        color: COLORS.text
    },
    button: {
        backgroundColor: COLORS.accent,
        borderRadius: 10,
        paddingVertical: 14,
        alignItems: 'center',
        marginBottom: SPACING.lg
    },
    buttonDisabled: {
        opacity: 0.5
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.sm
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 16,
        fontFamily: 'Satoshi-Bold'
    },
    description: {
        ...TYPOGRAPHY.caption,
        color: COLORS.textDim,
        textAlign: 'center'
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.md,
        marginBottom: SPACING.lg
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: COLORS.border
    },
    dividerText: {
        ...TYPOGRAPHY.caption,
        color: COLORS.textDim
    },
    oauthButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: SPACING.sm,
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 10,
        paddingVertical: 14,
        marginBottom: SPACING.md
    },
    oauthButtonText: {
        color: COLORS.text,
        fontSize: 15,
        fontFamily: 'Satoshi-Bold'
    },
    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: SPACING.sm,
        marginBottom: SPACING.lg
    },
    codeInput: {
        width: 44,
        height: 52,
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'ClashDisplay-Bold',
        color: COLORS.text
    },
    codeInputFilled: {
        borderColor: COLORS.accent
    },
    codeInputError: {
        borderColor: COLORS.destructive
    },
    errorText: {
        ...TYPOGRAPHY.caption,
        color: COLORS.destructive,
        textAlign: 'center',
        marginBottom: SPACING.md
    },
    loadingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: SPACING.sm,
        marginBottom: SPACING.md
    },
    loadingText: {
        ...TYPOGRAPHY.body,
        color: COLORS.textMuted
    },
    linksContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    linkText: {
        ...TYPOGRAPHY.body,
        color: COLORS.accent
    },
    linkDisabled: {
        color: COLORS.textDim
    }
})

export default LoginScreen