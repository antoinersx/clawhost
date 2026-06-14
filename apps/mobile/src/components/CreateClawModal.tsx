import type { FC, ReactNode } from 'react'
import type { CreateClawModalProps } from '@/ts/Interfaces'

import { Fragment, useState, useEffect } from 'react'
import {
    ActivityIndicator,
    Alert,
    Linking,
    Modal,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import {
    CaretDown,
    Copy,
    ArrowClockwise,
    Eye,
    EyeSlash,
    Key,
    X
} from 'phosphor-react-native'
import * as Clipboard from 'expo-clipboard'
import { t } from '@openclaw/i18n'
import { inputValidation } from '@openclaw/shared'
import { useAuth } from '@/lib/auth'
import {
    usePlans,
    useLocations,
    useVolumePricing,
    usePlanAvailability,
    useSSHKeys,
    usePurchaseClaw
} from '@/hooks'
import { generatePassword, locationFlags } from '@/lib/claw-utils'
import { COLORS, SPACING, TYPOGRAPHY } from '@/lib/theme'
import ProviderIcon from '@/components/ProviderIcon'

const PROVIDERS: { id: string; label: string; recommended?: boolean }[] = [
    { id: 'hetzner', label: 'Hetzner', recommended: true }
]

const TIER_STARTS: Record<string, Record<string, string>> = {
    hetzner: {
        cx23: t('landing.tierShared'),
        cax11: t('landing.tierArm'),
        ccx13: t('landing.tierDedicated')
    }
}

const CreateClawModal: FC<CreateClawModalProps> = ({
    visible,
    onClose
}): ReactNode => {
    const insets = useSafeAreaInsets()
    const { user } = useAuth()

    const [name, setName] = useState('')
    const [provider, setProvider] = useState('hetzner')
    const [planId, setPlanId] = useState('')
    const [location, setLocation] = useState('')
    const [password, setPassword] = useState(generatePassword())
    const [showPassword, setShowPassword] = useState(false)
    const [selectedSshKeyId, setSelectedSshKeyId] = useState('')
    const [volumeSize, setVolumeSize] = useState(0)
    const [showAdvanced, setShowAdvanced] = useState(false)

    const {
        data: plansData,
        isPending: isLoadingPlans,
        isError: isPlansError
    } = usePlans(user, provider)
    const {
        data: locationsData,
        isPending: isLoadingLocations,
        isError: isLocationsError
    } = useLocations(user, provider)
    const { data: volumePricing } = useVolumePricing(user, provider)
    const { data: planAvailability } = usePlanAvailability(user, provider)
    const { data: sshKeys } = useSSHKeys(user)
    const purchaseMutation = usePurchaseClaw()

    const plans = plansData?.plans || []
    const atCapacity = plansData?.atCapacity || false
    const locations = locationsData || []
    const isProviderLoading = isLoadingPlans || isLoadingLocations

    const isLocationAvailableForPlan = (
        locationId: string,
        selectedPlanId: string
    ): boolean => {
        if (!planAvailability) return true
        const available = planAvailability[selectedPlanId]
        if (!available) return true
        return available.includes(locationId)
    }

    const getFirstAvailableLocation = (selectedPlanId: string): string => {
        const available = locations.find(
            (l) =>
                !l.disabled && isLocationAvailableForPlan(l.id, selectedPlanId)
        )
        return available?.id || locations[0]?.id || ''
    }

    const getFirstEnabledPlan = (): string => {
        const enabled = plans.find((p) => !p.disabled)
        return enabled?.id || ''
    }

    useEffect(() => {
        if (!planId && plans.length > 0) {
            const firstPlan = getFirstEnabledPlan()
            if (firstPlan) {
                setPlanId(firstPlan)
                setLocation(getFirstAvailableLocation(firstPlan))
            }
        }
    }, [plans, locations])

    useEffect(() => {
        if (planId && planAvailability) {
            const currentAvailable = isLocationAvailableForPlan(
                location,
                planId
            )
            const currentDisabled = locations.find(
                (l) => l.id === location
            )?.disabled
            if (!currentAvailable || currentDisabled) {
                setLocation(getFirstAvailableLocation(planId))
            }
        }
    }, [planAvailability, planId])

    const handleProviderChange = (newProvider: string): void => {
        setProvider(newProvider)
        setPlanId('')
        setLocation('')
        setVolumeSize(0)
    }

    const handlePlanSelect = (newPlanId: string): void => {
        setPlanId(newPlanId)
        if (!isLocationAvailableForPlan(location, newPlanId)) {
            setLocation(getFirstAvailableLocation(newPlanId))
        }
    }

    const handleCreate = (): void => {
        if (!location) {
            Alert.alert(t('errors.invalidLocation'))
            return
        }

        const selectedPlanData = plans.find((p) => p.id === planId)
        if (!selectedPlanData) {
            Alert.alert(t('errors.invalidPlan'))
            return
        }

        let totalPrice = selectedPlanData.priceMonthly
        if (volumeSize > 0 && volumePricing) {
            totalPrice += volumeSize * volumePricing.pricePerGbMonthly
        }

        purchaseMutation.mutate(
            {
                name,
                provider,
                planId,
                location,
                password: password || undefined,
                sshKeyId: selectedSshKeyId || undefined,
                volumeSize: volumeSize > 0 ? volumeSize : undefined,
                priceMonthly: totalPrice
            },
            {
                onSuccess: (data) => {
                    Linking.openURL(data.checkoutUrl)
                    onClose()
                },
                onError: (err: Error) => {
                    Alert.alert(err.message || t('errors.failedToCreateClaw'))
                }
            }
        )
    }

    const selectedPlan = plans.find((p) => p.id === planId && !p.disabled)

    const totalMonthly = selectedPlan
        ? selectedPlan.priceMonthly +
          (volumeSize > 0 && volumePricing
              ? volumeSize * volumePricing.pricePerGbMonthly
              : 0)
        : 0

    return (
        <Modal
            visible={visible}
            animationType='slide'
            presentationStyle='pageSheet'
        >
            <View style={[styles.container, { paddingTop: insets.top }]}>
                <View style={styles.header}>
                    <View style={styles.headerTextContainer}>
                        <Text style={styles.headerTitle}>
                            {t('createClaw.title')}
                        </Text>
                        <Text style={styles.headerDescription}>
                            {t('createClaw.description')}
                        </Text>
                    </View>
                    <Pressable onPress={onClose} style={styles.closeButton}>
                        <X size={20} color={COLORS.textMuted} />
                    </Pressable>
                </View>

                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={[
                        styles.scrollContent,
                        { paddingBottom: insets.bottom + SPACING.xxl }
                    ]}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps='handled'
                >
                    <View style={styles.section}>
                        <Text style={styles.label}>
                            {t('createClaw.clawName')}
                        </Text>
                        <TextInput
                            style={styles.input}
                            value={name}
                            onChangeText={setName}
                            placeholder={t('createClaw.clawNamePlaceholder')}
                            placeholderTextColor={COLORS.textDim}
                            maxLength={inputValidation.CLAW_NAME.MAX}
                        />
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.labelRequired}>
                            {t('createClaw.provider')}
                            <Text style={styles.requiredStar}> *</Text>
                        </Text>
                        <View style={styles.providerRow}>
                            {PROVIDERS.map((p) => (
                                <Pressable
                                    key={p.id}
                                    onPress={() => handleProviderChange(p.id)}
                                    style={[
                                        styles.providerChip,
                                        provider === p.id &&
                                            styles.providerChipSelected
                                    ]}
                                >
                                    <ProviderIcon provider={p.id} size={16} />
                                    <Text
                                        style={[
                                            styles.providerText,
                                            provider === p.id &&
                                                styles.providerTextSelected
                                        ]}
                                    >
                                        {p.label}
                                    </Text>
                                    {p.recommended && (
                                        <LinearGradient
                                            colors={['#ef5350', '#c62828']}
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 1, y: 0 }}
                                            style={styles.recommendedBadge}
                                        >
                                            <Text
                                                style={styles.recommendedText}
                                            >
                                                {t('landing.recommended')}
                                            </Text>
                                        </LinearGradient>
                                    )}
                                </Pressable>
                            ))}
                        </View>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.labelRequired}>
                            {t('createClaw.location')}
                            <Text style={styles.requiredStar}> *</Text>
                        </Text>
                        {isProviderLoading ? (
                            <View style={styles.locationGrid}>
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <View
                                        key={i}
                                        style={styles.skeletonLocation}
                                    />
                                ))}
                            </View>
                        ) : isLocationsError ? (
                            <View style={styles.errorCard}>
                                <Text style={styles.errorCardText}>
                                    {t('errors.failedToLoadLocations')}
                                </Text>
                            </View>
                        ) : (
                            <View style={styles.locationGrid}>
                                {locations.map((loc) => {
                                    const isSelected = location === loc.id
                                    const flag = locationFlags[loc.id] || ''
                                    const unavailableForPlan =
                                        !isLocationAvailableForPlan(
                                            loc.id,
                                            planId
                                        )
                                    const isDisabled =
                                        loc.disabled || unavailableForPlan
                                    const locationLabel = loc.country
                                        ? `${loc.city}, ${loc.country}`
                                        : loc.city

                                    return (
                                        <Pressable
                                            key={loc.id}
                                            onPress={() =>
                                                !isDisabled &&
                                                setLocation(loc.id)
                                            }
                                            style={[
                                                styles.locationCard,
                                                isSelected &&
                                                    styles.locationCardSelected,
                                                isDisabled &&
                                                    styles.locationCardDisabled
                                            ]}
                                        >
                                            {flag ? (
                                                <Text
                                                    style={styles.locationFlag}
                                                >
                                                    {flag}
                                                </Text>
                                            ) : null}
                                            <Text
                                                style={[
                                                    styles.locationName,
                                                    isDisabled &&
                                                        styles.textDisabled
                                                ]}
                                                numberOfLines={1}
                                            >
                                                {locationLabel}
                                            </Text>
                                        </Pressable>
                                    )
                                })}
                            </View>
                        )}
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.labelRequired}>
                            {t('createClaw.plan')}
                            <Text style={styles.requiredStar}> *</Text>
                        </Text>
                        {atCapacity && (
                            <View style={styles.capacityWarning}>
                                <Text style={styles.capacityText}>
                                    {t('createClaw.providerAtCapacity')}
                                </Text>
                            </View>
                        )}
                        {isProviderLoading ? (
                            <View style={styles.planList}>
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <View key={i} style={styles.skeletonPlan} />
                                ))}
                            </View>
                        ) : isPlansError ? (
                            <View style={styles.errorCard}>
                                <Text style={styles.errorCardText}>
                                    {t('errors.failedToLoadPlans')}
                                </Text>
                            </View>
                        ) : (
                            <View style={styles.planList}>
                                {plans.map((plan, index) => {
                                    const isSelected = planId === plan.id
                                    const isDisabled = plan.disabled
                                    const providerTiers = TIER_STARTS[provider]
                                    const tierLabel = providerTiers?.[plan.id]

                                    return (
                                        <View key={plan.id}>
                                            {tierLabel && index > 0 && (
                                                <Text style={styles.tierLabel}>
                                                    {tierLabel}
                                                </Text>
                                            )}
                                            <Pressable
                                                onPress={() =>
                                                    !isDisabled &&
                                                    handlePlanSelect(plan.id)
                                                }
                                                style={[
                                                    styles.planCard,
                                                    isSelected &&
                                                        styles.planCardSelected,
                                                    isDisabled &&
                                                        styles.planCardDisabled
                                                ]}
                                            >
                                                <View style={styles.planInfo}>
                                                    <Text
                                                        style={[
                                                            styles.planName,
                                                            isDisabled &&
                                                                styles.textDisabled
                                                        ]}
                                                    >
                                                        {plan.name.replace(
                                                            /([A-Za-z])(\d)/,
                                                            '$1 $2'
                                                        )}
                                                    </Text>
                                                    <Text
                                                        style={styles.planSpecs}
                                                    >
                                                        {plan.cpu} vCPU /{' '}
                                                        {plan.memory} GB RAM /{' '}
                                                        {plan.disk} GB SSD
                                                    </Text>
                                                </View>
                                                <Text style={styles.planPrice}>
                                                    $
                                                    {plan.priceMonthly.toFixed(
                                                        2
                                                    )}
                                                    /mo
                                                </Text>
                                            </Pressable>
                                        </View>
                                    )
                                })}
                            </View>
                        )}
                    </View>

                    <Pressable
                        onPress={() => setShowAdvanced(!showAdvanced)}
                        style={styles.advancedToggle}
                    >
                        <View
                            style={[
                                styles.advancedCaret,
                                showAdvanced && styles.caretRotated
                            ]}
                        >
                            <CaretDown size={16} color={COLORS.textMuted} />
                        </View>
                        <Text style={styles.advancedText}>
                            {t('createClaw.advancedOptions')}
                        </Text>
                    </Pressable>

                    {showAdvanced && (
                        <Fragment>
                            <View style={styles.section}>
                                <Text style={styles.label}>
                                    {t('createClaw.rootPassword')}
                                </Text>
                                <View style={styles.passwordRow}>
                                    <View style={styles.passwordInputContainer}>
                                        <TextInput
                                            style={[
                                                styles.input,
                                                styles.monoInput,
                                                styles.passwordInput
                                            ]}
                                            value={password}
                                            onChangeText={setPassword}
                                            placeholder={t(
                                                'createClaw.rootPasswordPlaceholder'
                                            )}
                                            placeholderTextColor={
                                                COLORS.textDim
                                            }
                                            secureTextEntry={!showPassword}
                                        />
                                        <Pressable
                                            onPress={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            style={styles.eyeButton}
                                        >
                                            {showPassword ? (
                                                <EyeSlash
                                                    size={18}
                                                    color={COLORS.textMuted}
                                                />
                                            ) : (
                                                <Eye
                                                    size={18}
                                                    color={COLORS.textMuted}
                                                />
                                            )}
                                        </Pressable>
                                    </View>
                                    <Pressable
                                        onPress={() => {
                                            Clipboard.setStringAsync(password)
                                            Alert.alert(
                                                t('createClaw.passwordCopied')
                                            )
                                        }}
                                        style={styles.iconButton}
                                    >
                                        <Copy
                                            size={18}
                                            color={COLORS.textMuted}
                                        />
                                    </Pressable>
                                    <Pressable
                                        onPress={() =>
                                            setPassword(generatePassword())
                                        }
                                        style={styles.iconButton}
                                    >
                                        <ArrowClockwise
                                            size={18}
                                            color={COLORS.textMuted}
                                        />
                                    </Pressable>
                                </View>
                                <Text style={styles.hint}>
                                    {t('createClaw.autoGeneratePasswordHint')}
                                </Text>
                            </View>

                            <View style={styles.section}>
                                <Text style={styles.label}>
                                    {t('createClaw.sshKeyOptional')}
                                </Text>
                                {sshKeys && sshKeys.length > 0 ? (
                                    <View style={styles.sshKeyList}>
                                        <Pressable
                                            onPress={() =>
                                                setSelectedSshKeyId('')
                                            }
                                            style={[
                                                styles.sshKeyCard,
                                                selectedSshKeyId === '' &&
                                                    styles.sshKeyCardSelected
                                            ]}
                                        >
                                            <Text style={styles.sshKeyName}>
                                                {t(
                                                    'createClaw.noSshKeyPasswordOnly'
                                                )}
                                            </Text>
                                        </Pressable>
                                        {sshKeys.map((key) => (
                                            <Pressable
                                                key={key.id}
                                                onPress={() =>
                                                    setSelectedSshKeyId(key.id)
                                                }
                                                style={[
                                                    styles.sshKeyCard,
                                                    selectedSshKeyId ===
                                                        key.id &&
                                                        styles.sshKeyCardSelected
                                                ]}
                                            >
                                                <Key
                                                    size={16}
                                                    color={COLORS.textMuted}
                                                />
                                                <View style={styles.sshKeyInfo}>
                                                    <Text
                                                        style={
                                                            styles.sshKeyName
                                                        }
                                                    >
                                                        {key.name}
                                                    </Text>
                                                    <Text
                                                        style={
                                                            styles.sshKeyFingerprint
                                                        }
                                                    >
                                                        {key.fingerprint}
                                                    </Text>
                                                </View>
                                            </Pressable>
                                        ))}
                                    </View>
                                ) : (
                                    <View style={styles.noSshKeys}>
                                        <View style={styles.noSshKeysIcon}>
                                            <Key
                                                size={20}
                                                color={COLORS.textMuted}
                                            />
                                        </View>
                                        <View style={styles.noSshKeysText}>
                                            <Text style={styles.noSshKeysTitle}>
                                                {t(
                                                    'createClaw.noSshKeysConfigured'
                                                )}
                                            </Text>
                                            <Text
                                                style={
                                                    styles.noSshKeysDescription
                                                }
                                            >
                                                {t(
                                                    'createClaw.addSshKeyForPasswordlessLogin'
                                                )}
                                            </Text>
                                        </View>
                                    </View>
                                )}
                            </View>

                            {volumePricing && (
                                <View style={styles.section}>
                                    <Text style={styles.label}>
                                        {t(
                                            'createClaw.additionalStorageOptional'
                                        )}
                                    </Text>
                                    <View style={styles.volumeCard}>
                                        <View style={styles.volumeHeader}>
                                            <Text style={styles.volumeLabel}>
                                                {t('createClaw.volumeStorage')}
                                            </Text>
                                            <Text style={styles.volumePrice}>
                                                {volumeSize > 0
                                                    ? `+$${(volumeSize * volumePricing.pricePerGbMonthly).toFixed(2)}/mo`
                                                    : t('common.none')}
                                            </Text>
                                        </View>
                                        <View style={styles.volumeInputRow}>
                                            <TextInput
                                                style={[
                                                    styles.input,
                                                    styles.volumeInput
                                                ]}
                                                value={
                                                    volumeSize > 0
                                                        ? String(volumeSize)
                                                        : ''
                                                }
                                                onChangeText={(val) => {
                                                    const num = Math.min(
                                                        Math.max(
                                                            0,
                                                            Number(val) || 0
                                                        ),
                                                        volumePricing.maxSize
                                                    )
                                                    setVolumeSize(num)
                                                }}
                                                placeholder='0'
                                                placeholderTextColor={
                                                    COLORS.textDim
                                                }
                                                keyboardType='number-pad'
                                            />
                                            <Text style={styles.volumeUnit}>
                                                GB
                                            </Text>
                                            <Text style={styles.volumeMax}>
                                                (max {volumePricing.maxSize} GB)
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            )}
                        </Fragment>
                    )}

                    {selectedPlan && (
                        <View style={styles.summaryCard}>
                            {name ? (
                                <View style={styles.summaryRow}>
                                    <Text style={styles.summaryLabel}>
                                        {t('createClaw.clawName')}
                                    </Text>
                                    <Text style={styles.summaryValue}>
                                        {name}
                                    </Text>
                                </View>
                            ) : null}
                            {location ? (
                                <View style={styles.summaryRow}>
                                    <Text style={styles.summaryLabel}>
                                        {t('createClaw.location')}
                                    </Text>
                                    <Text style={styles.summaryValue}>
                                        {locations.find(
                                            (l) => l.id === location
                                        )?.city || location}
                                    </Text>
                                </View>
                            ) : null}
                            <View style={styles.summaryRow}>
                                <Text style={styles.summaryLabel}>
                                    {selectedPlan.name.replace(
                                        /([A-Za-z])(\d)/,
                                        '$1 $2'
                                    )}
                                </Text>
                                <Text style={styles.summaryValue}>
                                    ${selectedPlan.priceMonthly.toFixed(2)}/mo
                                </Text>
                            </View>
                            {volumeSize > 0 && volumePricing && (
                                <View style={styles.summaryRow}>
                                    <Text style={styles.summaryLabel}>
                                        {t('createClaw.storageWithSize')} (
                                        {volumeSize} GB)
                                    </Text>
                                    <Text style={styles.summaryValue}>
                                        +$
                                        {(
                                            volumeSize *
                                            volumePricing.pricePerGbMonthly
                                        ).toFixed(2)}
                                        /mo
                                    </Text>
                                </View>
                            )}
                            <View
                                style={[styles.summaryRow, styles.summaryTotal]}
                            >
                                <Text style={styles.summaryLabel}>
                                    {t('createClaw.totalMonthly')}
                                </Text>
                                <Text style={styles.summaryTotalValue}>
                                    ${totalMonthly.toFixed(2)}/mo
                                </Text>
                            </View>
                        </View>
                    )}

                    <View style={styles.actions}>
                        <Pressable
                            onPress={onClose}
                            style={styles.cancelButton}
                        >
                            <Text style={styles.cancelText}>
                                {t('common.cancel')}
                            </Text>
                        </Pressable>
                        <Pressable
                            onPress={handleCreate}
                            disabled={
                                purchaseMutation.isPending ||
                                !selectedPlan ||
                                !location
                            }
                            style={[
                                styles.submitButton,
                                (purchaseMutation.isPending ||
                                    !selectedPlan ||
                                    !location) &&
                                    styles.submitButtonDisabled
                            ]}
                        >
                            <LinearGradient
                                colors={['#ef5350', '#c62828']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.submitGradient}
                            >
                                {purchaseMutation.isPending && (
                                    <ActivityIndicator
                                        size='small'
                                        color={COLORS.white}
                                    />
                                )}
                                <Text style={styles.submitText}>
                                    {!selectedPlan
                                        ? t('createClaw.selectServerToContinue')
                                        : !location
                                          ? t(
                                                'createClaw.selectLocationToContinue'
                                            )
                                          : t('createClaw.proceedToPayment', {
                                                amount: totalMonthly.toFixed(2)
                                            })}
                                </Text>
                            </LinearGradient>
                        </Pressable>
                    </View>
                </ScrollView>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background
    },
    header: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingHorizontal: SPACING.lg,
        paddingTop: SPACING.lg,
        paddingBottom: SPACING.md,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border
    },
    headerTextContainer: {
        flex: 1,
        marginRight: SPACING.md
    },
    headerTitle: {
        ...TYPOGRAPHY.title,
        color: COLORS.text
    },
    headerDescription: {
        ...TYPOGRAPHY.caption,
        color: COLORS.textMuted,
        marginTop: SPACING.xs
    },
    closeButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: COLORS.containerBackground,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollView: {
        flex: 1
    },
    scrollContent: {
        paddingHorizontal: SPACING.lg,
        paddingTop: SPACING.lg,
        gap: SPACING.lg
    },
    section: {
        gap: SPACING.sm
    },
    label: {
        ...TYPOGRAPHY.label,
        color: COLORS.text
    },
    labelRequired: {
        ...TYPOGRAPHY.label,
        color: COLORS.text
    },
    requiredStar: {
        color: '#ef5350'
    },
    input: {
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 8,
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.sm,
        color: COLORS.text,
        fontSize: 14,
        fontFamily: 'Satoshi-Regular'
    },
    monoInput: {
        fontFamily: 'Satoshi-Regular'
    },
    providerRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: SPACING.sm
    },
    providerChip: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.sm,
        borderRadius: 8,
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderWidth: 1,
        borderColor: 'transparent'
    },
    providerChipSelected: {
        backgroundColor: 'rgba(239,83,80,0.15)',
        borderColor: 'rgba(239,83,80,0.5)'
    },
    providerText: {
        fontSize: 13,
        fontFamily: 'Satoshi-Medium',
        color: COLORS.textMuted
    },
    providerTextSelected: {
        color: COLORS.text
    },
    recommendedBadge: {
        borderRadius: 4,
        paddingHorizontal: 6,
        paddingVertical: 2
    },
    recommendedText: {
        fontSize: 10,
        fontFamily: 'Satoshi-Bold',
        color: COLORS.white
    },
    locationGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: SPACING.sm
    },
    locationCard: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        width: '48%',
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.sm,
        borderRadius: 8,
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderWidth: 1,
        borderColor: 'transparent'
    },
    locationCardSelected: {
        backgroundColor: 'rgba(239,83,80,0.15)',
        borderColor: 'rgba(239,83,80,0.5)'
    },
    locationCardDisabled: {
        opacity: 0.4
    },
    locationFlag: {
        fontSize: 16
    },
    locationName: {
        fontSize: 13,
        fontFamily: 'Satoshi-Medium',
        color: COLORS.text,
        flex: 1
    },
    textDisabled: {
        color: COLORS.textDim
    },
    skeletonLocation: {
        width: '48%',
        height: 40,
        borderRadius: 8,
        backgroundColor: 'rgba(255,255,255,0.05)'
    },
    errorCard: {
        backgroundColor: 'rgba(239,83,80,0.1)',
        borderRadius: 8,
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.sm
    },
    errorCardText: {
        fontSize: 12,
        fontFamily: 'Satoshi-Regular',
        color: '#ef5350'
    },
    capacityWarning: {
        backgroundColor: 'rgba(234,179,8,0.1)',
        borderRadius: 8,
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.sm
    },
    capacityText: {
        fontSize: 12,
        fontFamily: 'Satoshi-Regular',
        color: '#eab308'
    },
    planList: {
        gap: SPACING.sm
    },
    planCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.md,
        borderRadius: 8,
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderWidth: 1,
        borderColor: 'transparent'
    },
    planCardSelected: {
        backgroundColor: 'rgba(239,83,80,0.15)',
        borderColor: 'rgba(239,83,80,0.5)'
    },
    planCardDisabled: {
        opacity: 0.4
    },
    planInfo: {
        flex: 1,
        marginRight: SPACING.sm
    },
    planName: {
        fontSize: 14,
        fontFamily: 'Satoshi-Medium',
        color: COLORS.text
    },
    planSpecs: {
        fontSize: 12,
        fontFamily: 'Satoshi-Regular',
        color: COLORS.textMuted,
        marginTop: 2
    },
    planPrice: {
        fontSize: 14,
        fontFamily: 'Satoshi-Bold',
        color: COLORS.text
    },
    tierLabel: {
        fontSize: 11,
        fontFamily: 'Satoshi-Bold',
        color: COLORS.textMuted,
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginTop: SPACING.md,
        marginBottom: SPACING.xs
    },
    skeletonPlan: {
        height: 56,
        borderRadius: 8,
        backgroundColor: 'rgba(255,255,255,0.05)'
    },
    hint: {
        fontSize: 12,
        fontFamily: 'Satoshi-Regular',
        color: COLORS.textMuted
    },
    advancedToggle: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.sm
    },
    advancedCaret: {
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    caretRotated: {
        transform: [{ rotate: '180deg' }]
    },
    advancedText: {
        fontSize: 14,
        fontFamily: 'Satoshi-Regular',
        color: COLORS.textMuted
    },
    passwordRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.sm
    },
    passwordInputContainer: {
        flex: 1,
        position: 'relative'
    },
    passwordInput: {
        paddingRight: 44
    },
    eyeButton: {
        position: 'absolute',
        right: 12,
        top: 0,
        bottom: 0,
        justifyContent: 'center'
    },
    iconButton: {
        width: 40,
        height: 40,
        borderRadius: 8,
        backgroundColor: 'rgba(255,255,255,0.05)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    sshKeyList: {
        gap: SPACING.sm
    },
    sshKeyCard: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.md,
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.md,
        borderRadius: 8,
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderWidth: 1,
        borderColor: 'transparent'
    },
    sshKeyCardSelected: {
        backgroundColor: 'rgba(239,83,80,0.15)',
        borderColor: 'rgba(239,83,80,0.5)'
    },
    sshKeyInfo: {
        flex: 1
    },
    sshKeyName: {
        fontSize: 14,
        fontFamily: 'Satoshi-Medium',
        color: COLORS.text
    },
    sshKeyFingerprint: {
        fontSize: 12,
        fontFamily: 'Satoshi-Regular',
        color: COLORS.textMuted,
        marginTop: 2
    },
    noSshKeys: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.md,
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: 8,
        padding: SPACING.md
    },
    noSshKeysIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.08)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    noSshKeysText: {
        flex: 1
    },
    noSshKeysTitle: {
        fontSize: 14,
        fontFamily: 'Satoshi-Medium',
        color: COLORS.text
    },
    noSshKeysDescription: {
        fontSize: 12,
        fontFamily: 'Satoshi-Regular',
        color: COLORS.textMuted,
        marginTop: 2
    },
    volumeCard: {
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: 8,
        padding: SPACING.md,
        gap: SPACING.md
    },
    volumeHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    volumeLabel: {
        fontSize: 14,
        fontFamily: 'Satoshi-Medium',
        color: COLORS.text
    },
    volumePrice: {
        fontSize: 14,
        fontFamily: 'Satoshi-Bold',
        color: COLORS.text
    },
    volumeInputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.sm
    },
    volumeInput: {
        width: 80,
        textAlign: 'center'
    },
    volumeUnit: {
        fontSize: 14,
        fontFamily: 'Satoshi-Regular',
        color: COLORS.textMuted
    },
    volumeMax: {
        fontSize: 12,
        fontFamily: 'Satoshi-Regular',
        color: COLORS.textDim
    },
    summaryCard: {
        backgroundColor: COLORS.containerBackground,
        borderWidth: 1,
        borderColor: COLORS.containerBorder,
        borderRadius: 12,
        padding: SPACING.lg,
        gap: SPACING.sm
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    summaryLabel: {
        fontSize: 14,
        fontFamily: 'Satoshi-Regular',
        color: COLORS.textMuted
    },
    summaryValue: {
        fontSize: 14,
        fontFamily: 'Satoshi-Regular',
        color: COLORS.text
    },
    summaryTotal: {
        borderTopWidth: 1,
        borderTopColor: COLORS.border,
        paddingTop: SPACING.sm,
        marginTop: SPACING.xs
    },
    summaryTotalValue: {
        fontSize: 14,
        fontFamily: 'Satoshi-Bold',
        color: COLORS.text
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: SPACING.md,
        marginTop: SPACING.sm
    },
    cancelButton: {
        paddingHorizontal: SPACING.xl,
        paddingVertical: SPACING.sm,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cancelText: {
        fontSize: 14,
        fontFamily: 'Satoshi-Medium',
        color: COLORS.textMuted
    },
    submitButton: {
        flex: 1,
        borderRadius: 10,
        overflow: 'hidden'
    },
    submitButtonDisabled: {
        opacity: 0.5
    },
    submitGradient: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: SPACING.sm,
        paddingVertical: SPACING.md,
        borderRadius: 10
    },
    submitText: {
        fontSize: 14,
        fontFamily: 'Satoshi-Bold',
        color: COLORS.white
    }
})

export default CreateClawModal