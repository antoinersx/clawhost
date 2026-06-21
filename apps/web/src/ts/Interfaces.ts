import type {
    ComponentType,
    ElementType,
    FC,
    FormEvent,
    MouseEvent,
    MutableRefObject,
    ReactNode,
    RefObject
} from 'react'
import type { MotionValue } from 'framer-motion'
import type { User } from 'firebase/auth'
import type { QueryClient } from '@tanstack/react-query'
import type { TranslationKey } from '@openclaw/i18n'
import type {
    AdminAnalyticsRange,
    AffiliatePeriod,
    AgentType,
    AuthMethod,
    BillingInterval,
    AgentAvatarSize,
    AgentStatus,
    Language,
    LoginLoadingMethod,
    OAuthProvider,
    AgentDetailTab,
    ThemeMode,
    AgentFileType,
    CompareFeatureStatus,
    TerminalStatus,
    ToastType,
    UserRole,
    Product,
    ChangelogFeatureType,
    CopiedFieldType,
    GoDownloadVariant,
    GoPlatform,
    MacArch
} from '@/ts/Types'

export interface Volume {
    id: string
    name: string
    size: number
    status: string
}

export interface Agent {
    id: string
    name: string
    agentType: AgentType
    emoji: string | null
    emojiColor: string | null
    status: AgentStatus
    ip: string | null
    planId: string
    location: string | null
    rootPassword: string | null
    hasRootPassword: boolean
    sshKeyId: string | null
    providerServerId: string | null
    subdomain: string | null
    gatewayToken: string | null
    hostKeyFingerprint: string | null
    subscriptionStatus: string | null
    polarSubscriptionId: string | null
    billingInterval: string | null
    currentPeriodStart: string | null
    currentPeriodEnd: string | null
    volumes?: Volume[]
    ownerEmail?: string | null
    deletionScheduledAt: string | null
    lastSubdomainChangedAt: string | null
    checkoutUrl?: string | null
    createdAt: string
    port?: number
}

export interface VolumePricing {
    pricePerGbMonthly: number
    minSize: number
    maxSize: number
}

export interface Plan {
    id: string
    name: string
    cpu: number
    memory: number
    disk: number
    priceMonthly: number
    priceYearly: number
    architecture: string
}

export interface Location {
    id: string
    name: string
    city: string
    country: string
    disabled: boolean
}

export interface SSHKey {
    id: string
    name: string
    fingerprint: string
    publicKey: string
    createdAt: string
}

export interface UserProfile {
    id: string
    email: string
    name: string | null
    role: UserRole
    authMethods: AuthMethod[]
    hasLicense: boolean
    referralCode: string | null
    referralCodeChanged: boolean
    createdAt: string
}

export interface LicenseCheckoutResponse {
    checkoutUrl: string
}

export interface UserStats {
    agentCount: number
    sshKeyCount: number
    orderCount: number
}

export interface AccountProfileSectionProps {
    name: string
    profileName: string | null
    email: string
    isLocal: boolean
    joinedDate: string | undefined
    agentCount: number
    sshKeyCount: number
    hasChanges: boolean
    isPending: boolean
    onNameChange: (value: string) => void
    onSave: () => void
}

export interface AccountSettingsSectionProps {
    openLinksWindowed: boolean
    setOpenLinksWindowed: (value: boolean) => void
}

export interface AccountBillingSectionProps {
    isPortalLoading: boolean
    onManageBilling: () => void
}

export interface ConnectedAccountsSectionProps {
    authMethods: AuthMethod[] | undefined
    linkingProvider: AuthMethod | null
    unlinkingProvider: AuthMethod | null
    providerBusy: boolean
    onLink: (provider: OAuthProvider) => void
    onUnlink: (provider: OAuthProvider) => void
}

export interface AboutAppSectionProps {
    version: string
    deviceInfo: DeviceInfo | null
}

export interface UseLinkedProviderReturn {
    linkingProvider: AuthMethod | null
    unlinkingProvider: AuthMethod | null
    providerBusy: boolean
    handleLinkProvider: (provider: OAuthProvider) => Promise<void>
    handleUnlinkProvider: (provider: OAuthProvider) => Promise<void>
}

export interface BillingOrder {
    id: string
    status: string
    subtotalAmount: number
    discountAmount: number
    totalAmount: number
    taxAmount: number
    currency: string
    billingReason: string
    productName: string | null
    productId: string | null
    subscriptionId: string | null
    discountName: string | null
    createdAt: string
}

export interface BillingHistoryResponse {
    items: BillingOrder[]
    total: number
    page: number
    totalPages: number
}

export interface BillingInvoiceResponse {
    url: string
}

export interface ToastData {
    message: string
    type: ToastType
    duration?: number
}

export interface UseToastReturn {
    success: (text: string) => void
    error: (text: string) => void
    warning: (text: string) => void
    info: (text: string) => void
}

export interface UseCopyWithFeedbackReturn {
    copied: boolean
    copy: (value: string) => void
}

export interface UseCreateAgentFormValues {
    name: string
    agentType: AgentType
    planId: string
    location: string
    password: string
    showPassword: boolean
    gatewayToken: string
    showGatewayToken: boolean
    selectedSshKeyId: string
    volumeSize: number
    billingCycle: BillingInterval
    showAdvanced: boolean
    agreedToTerms: boolean
}

export interface UseCreateAgentFormErrors {
    name: string
}

export interface UseCreateAgentFormReturn {
    values: UseCreateAgentFormValues
    errors: UseCreateAgentFormErrors
    setField: <K extends keyof UseCreateAgentFormValues>(
        key: K,
        value: UseCreateAgentFormValues[K]
    ) => void
    reset: () => void
}

export interface UIState {
    toast: ToastData | null
    showToast: (message: string, type?: ToastType, duration?: number) => void
    hideToast: () => void
}

export interface PreferencesState {
    adminMode: boolean
    setAdminMode: (mode: boolean) => void
    theme: ThemeMode
    setTheme: (theme: ThemeMode) => void
    language: Language
    setLanguage: (language: Language) => void
    openLinksWindowed: boolean
    setOpenLinksWindowed: (value: boolean) => void
    product: Product
    setProduct: (product: Product) => void
    affiliatePeriod: AffiliatePeriod
    setAffiliatePeriod: (period: AffiliatePeriod) => void
    sidebarCollapsed: boolean
    setSidebarCollapsed: (collapsed: boolean) => void
}

export interface VersionsState {
    installingVersion: string | null
    setInstallingVersion: (value: string | null) => void
    confirmVersion: string | null
    setConfirmVersion: (value: string | null) => void
}

export interface UseTerminalConnectionReturn {
    containerRef: React.RefObject<HTMLDivElement>
    status: TerminalStatus
    showScrollButton: boolean
    showOverlay: boolean
    connect: () => Promise<void>
    handleTerminalScrollToBottom: () => void
}

export interface TerminalState {
    status: TerminalStatus
    setStatus: (
        value: TerminalStatus | ((prev: TerminalStatus) => TerminalStatus)
    ) => void
    showScrollButton: boolean
    setShowScrollButton: (value: boolean) => void
}

export interface DashboardState {
    chatSettingsAgentId: string | null
    setChatSettingsAgentId: (value: string | null) => void
    chatAgentTab: AgentDetailTab | null
    setChatAgentTab: (value: AgentDetailTab | null) => void
    showCreate: boolean
    setShowCreate: (value: boolean) => void
    preselectedPlanId: string | null
    setPreselectedPlanId: (value: string | null) => void
}

export interface CreatingAgentsState {
    creatingAgents: Agent[]
    addCreatingAgent: (agent: Agent) => void
    removeCreatingAgent: (id: string) => void
}

export interface CachedProfile {
    id: string
    email: string
    name: string | null
    role: UserRole
    authMethods: AuthMethod[]
    hasLicense: boolean
    referralCode: string | null
    referralCodeChanged: boolean
    createdAt: string
}

export interface VerifyOtpResponse {
    customToken: string
}

export interface ResolveCredentialConflictData {
    accessToken: string
    providerId: string
    email: string
    code: string
}

export interface PendingConflict {
    accessToken: string
    providerId: string
    email: string
}

export interface AuthContextType {
    user: User | null
    loading: boolean
    cachedProfile: CachedProfile | null
    pendingConflict: PendingConflict | null
    updateCachedProfile: (data: Partial<CachedProfile>) => void
    sendOtp: (email: string) => Promise<void>
    verifyOtp: (email: string, code: string) => Promise<void>
    signInWithGoogle: () => Promise<void>
    signInWithGithub: () => Promise<void>
    linkGoogle: () => Promise<void>
    linkGithub: () => Promise<void>
    unlinkGoogle: () => Promise<void>
    unlinkGithub: () => Promise<void>
    signOut: () => Promise<void>
    clearPendingConflict: () => void
    isLocal?: boolean
}

export interface FooterLink {
    label: string
    href: string
    external?: boolean
}

export interface FooterSocialLink {
    url: string
    ariaKey: TranslationKey
    Icon: ElementType
}

export interface FooterRouteLink {
    route: string
    labelKey: TranslationKey
}

export interface LogoProps {
    to?: string
}

export interface LogoSvgProps {
    className?: string
}

export interface IconProps {
    size?: number | string
    className?: string
}

export interface AgentTypeMascotProps {
    agentType?: AgentType | null
    className?: string
}

export interface NavLink {
    label: string
    href: string
    id: string
}

export interface AgentMascotProps {
    className?: string
}

export interface AgentAvatarProps {
    emoji?: string | null
    emojiColor?: string | null
    agentType?: AgentType | null
    size?: AgentAvatarSize
    className?: string
}

export interface SupportButtonProps {
    showLabel?: boolean
}

export interface DitherHoverHandlers {
    onMouseMove: (e: MouseEvent<HTMLElement>) => void
    onMouseLeave: (e: MouseEvent<HTMLElement>) => void
    resetDither: (el: HTMLElement | null) => void
}

export interface HeaderProps {
    showNavLinks?: boolean
    navLinks?: NavLink[]
    activeSection?: string
}

export interface FeatureItem {
    icon: ElementType
    title: string
    description: string
}

export interface FeaturesGridProps {
    badge: string
    heading: string
    description: string
    features: FeatureItem[]
    hideBorderTop?: boolean
}

export interface LandingDemoPreviewProps {
    urlOverride?: string
    hideTitleBar?: boolean
}

export interface UserDropdownProps {
    displayName: string
    onSignOut: () => Promise<void>
    onOpen?: () => void
    hideSSHKeys?: boolean
    hideSignOut?: boolean
}

export interface EmptyStateProps {
    icon: ReactNode
    title: string
    description: string
    actionLabel?: string
    actionIcon?: ReactNode
    onAction?: () => void
}

export interface ErrorStateProps {
    title?: string
    description?: string
    onRetry?: () => void
}

export interface PanelPlaceholderProps {
    icon: ReactNode
    title: string
    description?: string
    action?: ReactNode
}

export interface PageTitleProps {
    title: string
    description?: string
    image?: string
    url?: string
    type?: string
    noIndex?: boolean
    keywords?: string[]
    publishedAt?: string
    modifiedAt?: string
    author?: string
}

export interface LegalPageLayoutProps {
    titleKey: TranslationKey
    descriptionKey: TranslationKey
    lastUpdatedKey: TranslationKey
    image?: string
    url: string
    children: ReactNode
}

export interface LegalSectionProps {
    titleKey: TranslationKey
    textKey?: TranslationKey
    items?: TranslationKey[]
    children?: ReactNode
}

export interface LegalContactSectionProps {
    titleKey: TranslationKey
    textKey: TranslationKey
}

export interface PageHeaderProps {
    title: string
    description?: string
    action?: ReactNode
}

export interface ActionButtonProps {
    onClick: () => void
    label: string
    icon: ReactNode
    size?: 'default' | 'sm' | 'lg'
}

export interface StatusConfig {
    color: string
    bgColor: string
    label: string
    pulse?: boolean
}

export interface CopyableFieldProps {
    label: string
    value: string
    icon?: ReactNode
    secret?: boolean
}

export interface PlanAvailability {
    [planId: string]: string[]
}

export interface CreateAgentModalProps {
    plans: Plan[]
    locations: Location[]
    sshKeys: SSHKey[]
    volumePricing?: VolumePricing
    planAvailability?: PlanAvailability
    preselectedPlanId?: string | null
    onClose: () => void
    onNavigateToSSHKeys: () => void
}

export interface AgentCardActions {
    onStart: () => void
    onShowStartModal: () => void
    onShowStopModal: () => void
    onShowRestartModal: () => void
    onShowDeleteModal: () => void
    onCancelDeletion: () => void
    onShowHardDeleteModal: () => void
    onShowDiagnostics: () => void
    onShowLogs: () => void
    onShowReinstallModal: () => void
    onShowCredentials: () => void
    onExport: () => void
    onResumeCheckout: () => void
    onCancelPending: () => void
    onUpdatePayment: () => void
}

export interface AgentCredentialsDialogProps {
    agentIp: string
    rootPassword: string | null
    open: boolean
    onOpenChange: (open: boolean) => void
}

export interface AgentCardDialogsProps {
    agentName: string
    agentType: string
    showStartModal: boolean
    setShowStartModal: (open: boolean) => void
    showDeleteModal: boolean
    setShowDeleteModal: (open: boolean) => void
    showStopModal: boolean
    setShowStopModal: (open: boolean) => void
    showRestartModal: boolean
    setShowRestartModal: (open: boolean) => void
    showHardDeleteModal: boolean
    setShowHardDeleteModal: (open: boolean) => void
    onStart: () => void
    onDelete: () => void
    onStop: () => void
    onRestart: () => void
    onHardDelete: () => void
    isStartPending: boolean
    isDeletePending: boolean
    isStopPending: boolean
    isRestartPending: boolean
    isHardDeletePending: boolean
    showReinstallModal: boolean
    setShowReinstallModal: (open: boolean) => void
    onReinstall: () => void
    isReinstallPending: boolean
    showCancelDeletionModal: boolean
    setShowCancelDeletionModal: (show: boolean) => void
    onCancelDeletion: () => void
    isCancelDeletionPending: boolean
}

export interface UseAgentCardActionsParams {
    agent: Agent | null
}

export interface UseAgentCardActionsReturn {
    actions: AgentCardActions | null
    isMutating: boolean
    dialogsProps: AgentCardDialogsBundleProps | null
}

export interface AgentCardDialogsBundleProps {
    agentId: string
    agentName: string
    agentType: AgentType
    agentIp: string
    showStartModal: boolean
    setShowStartModal: (open: boolean) => void
    showDeleteModal: boolean
    setShowDeleteModal: (open: boolean) => void
    showStopModal: boolean
    setShowStopModal: (open: boolean) => void
    showRestartModal: boolean
    setShowRestartModal: (open: boolean) => void
    showHardDeleteModal: boolean
    setShowHardDeleteModal: (open: boolean) => void
    showReinstallModal: boolean
    setShowReinstallModal: (open: boolean) => void
    showDiagnostics: boolean
    setShowDiagnostics: (open: boolean) => void
    showLogs: boolean
    setShowLogs: (open: boolean) => void
    showCredentials: boolean
    setShowCredentials: (open: boolean) => void
    credentialsPassword: string | null
    onStart: () => void
    onDelete: () => void
    onStop: () => void
    onRestart: () => void
    onHardDelete: () => void
    onReinstall: () => void
    isStartPending: boolean
    isDeletePending: boolean
    isStopPending: boolean
    isRestartPending: boolean
    isHardDeletePending: boolean
    isReinstallPending: boolean
    showCancelDeletionModal: boolean
    setShowCancelDeletionModal: (show: boolean) => void
    onCancelDeletion: () => void
    isCancelDeletionPending: boolean
}

export interface SSHKeyCardProps {
    sshKey: SSHKey
}

export interface CreateSSHKeyModalProps {
    onClose: () => void
}

export interface GeneratedKeyPair {
    publicKey: string
    privateKey: string
}

export interface GoDownloadButtonProps {
    className?: string
}

export interface GoMacUrls {
    arm64: string | null
    x64: string | null
}

export interface GoManifest {
    version: string | null
    mac: GoMacUrls
    windows: string | null
    loading: boolean
}

export interface GoPlatformButtonProps {
    variant: GoDownloadVariant
    attached?: boolean
}

export interface GoDownloadVariantsDropdownProps {
    attached?: boolean
}

export interface UseGoBinaryDownloadReturn {
    trigger: (platform: GoPlatform, macArch?: MacArch) => Promise<void>
    isFetching: boolean
}

export interface SSHKeyUploadFormProps {
    name: string
    publicKey: string
    copied: CopiedFieldType
    isPending: boolean
    onNameChange: (value: string) => void
    onPublicKeyChange: (value: string) => void
    onCopyToClipboard: (
        text: string,
        type: NonNullable<CopiedFieldType>
    ) => void
    onSubmit: () => void
    onClose: () => void
}

export interface SSHKeyGenerateFormProps {
    name: string
    generatedKeys: GeneratedKeyPair | null
    copied: CopiedFieldType
    isPending: boolean
    onNameChange: (value: string) => void
    onGenerateKeyPair: () => void
    onCopyToClipboard: (
        text: string,
        type: NonNullable<CopiedFieldType>
    ) => void
    onDownloadPrivateKey: () => void
    onSubmit: () => void
    onClose: () => void
}

export interface ProtectedRouteProps {
    children: ReactNode
}

export interface LicenseGateProps {
    children: ReactNode
}

export interface AuthProviderProps {
    children: ReactNode
}

export interface PurchaseAgentData {
    name: string
    agentType: AgentType
    planId: string
    location: string
    password?: string
    gatewayToken?: string
    sshKeyId?: string
    volumeSize?: number
    priceMonthly: number
    billingInterval?: 'month' | 'year'
}

export interface CreateLocalAgentData {
    name?: string
    agentType?: string
    gatewayToken?: string
    password?: string
}

export interface DeleteAgentResponse {
    scheduled: boolean
    deletionScheduledAt?: string
    agent?: Agent
}

export interface PurchaseAgentResponse {
    checkoutUrl: string
    checkoutId: string
    pendingAgentId: string
    expiresAt: string
}

export interface RenameAgentData {
    name: string
}

export interface UpdateAgentSubdomainData {
    subdomain: string
}

export interface CheckSubdomainResponse {
    available: boolean
}

export interface CreateSSHKeyData {
    name: string
    publicKey: string
}

export interface UpdateProfileData {
    name?: string
}

export interface CustomerPortalResponse {
    url: string
}

export interface UseCustomerPortalReturn {
    openPortal: (agentId?: string) => Promise<void>
    isLoading: boolean
}

export interface GitHubStarsData {
    count: number
    formatted: string
}

export interface BlogPostFrontmatter {
    title: string
    slug: string
    description: string
    author: string
    publishedAt: string
    updatedAt?: string
    tags: string[]
}

export interface BlogPostMeta extends BlogPostFrontmatter {
    readingTime: number
}

export interface JsonLdProps {
    data: Record<string, unknown>
}

export interface PrerenderMeta {
    title: string
    description: string
    url: string
    type: string
    image: string
    jsonLd?: Record<string, unknown>
    articleMeta?: ArticleMeta
}

export interface ArticleMeta {
    publishedTime: string
    modifiedTime?: string
    author: string
    tags: string[]
}

export interface AgentVersionResponse {
    version: string
}

export interface OpenAgentVersionEntry {
    version: string
    publishedAt: string
    downloads: number
}

export interface AgentVersionsResponse {
    currentVersion: string
    latestVersion: string
    versions: OpenAgentVersionEntry[]
}

export interface InstallAgentVersionResponse {
    version: string
}

export interface AgentStarCount {
    agentType: string
    stars: number
}

export interface AgentStarsResponse {
    stars: AgentStarCount[]
}

export interface AgentVersionsContentProps {
    agentId: string
    agentType: AgentType
    readOnly?: boolean
}

export interface AgentCredentialsResponse {
    rootPassword: string | null
    gatewayToken: string | null
    ip: string | null
}

export interface DiagnosticsStatusResponse {
    service: string
    port: string
    memory: string
}

export interface DiagnosticsLogsResponse {
    logs: string
}

export interface AgentMetricsCpu {
    usagePercent: number
    cores: number
}

export interface AgentMetricsMemory {
    total: number
    used: number
    available: number
}

export interface AgentMetricsDisk {
    total: number
    used: number
    available: number
    usagePercent: number
}

export interface AgentMetricsLoadAvg {
    load1: number
    load5: number
    load15: number
}

export interface AgentMetricsNetwork {
    rxBytes: number
    txBytes: number
    interface: string
}

export interface AgentMetricsProcess {
    pid: number
    user: string
    cpu: number
    mem: number
    command: string
}

export interface AgentMetricsResponse {
    cpu: AgentMetricsCpu
    memory: AgentMetricsMemory
    disk: AgentMetricsDisk
    loadAvg: AgentMetricsLoadAvg
    network: AgentMetricsNetwork
    processes: AgentMetricsProcess[]
    uptime: string
    timestamp: number
}

export interface AgentOverviewSession {
    key: string
    name: string
    model: string
    started: string
    updated: string
    messageCount: number
}

export interface AgentOverviewGateway {
    active: boolean
    reachable: boolean
    portListening: boolean
    ready: boolean
}

export interface AgentOverviewInstance {
    version: string | null
    model: string | null
    contextWindow: string | null
    activeSessions: number
    memory: string | null
    agents: string | null
    heartbeat: string | null
    events: string | null
    probes: string | null
}

export interface AgentOverviewConfig {
    browserEnabled: boolean
    commandsEnabled: boolean
    tools: string[]
}

export interface AgentOverviewResponse {
    gateway: AgentOverviewGateway
    instance: AgentOverviewInstance
    config: AgentOverviewConfig | null
    sessions: AgentOverviewSession[] | null
    apiStatus: Record<string, unknown> | null
    timestamp: number
}

export interface AgentOverviewContentProps {
    agentId: string
    agentType?: AgentType | null
    readOnly?: boolean
    onSwitchToTerminal?: () => void
}

export interface OverviewGatewayCardProps {
    gateway: AgentOverviewGateway
    agentId: string
}

export interface OverviewInstanceCardProps {
    instance: AgentOverviewInstance
}

export interface OverviewSessionsTableProps {
    sessions: AgentOverviewSession[] | null
}

export interface OverviewConfigCardProps {
    config: AgentOverviewConfig | null
}

export interface AgentMonitorContentProps {
    agentId: string
    readOnly?: boolean
}

export interface AgentVolumesContentProps {
    volumes: Volume[]
    readOnly?: boolean
}

export interface AgentSecurityContentProps {
    agent: Agent
    sshKeys: SSHKey[]
    readOnly?: boolean
}

export interface SecretFieldProps {
    value: string
    onChange: (value: string) => void
    onRandomize: () => void
    onSave: () => void
    placeholder: string
    saveTooltip: string
    hasChanges: boolean
    saving: boolean
    readOnly?: boolean
}

export interface SecuritySSHKeySectionProps {
    agentId: string
    sshKeyId: string | null
    sshKeys: SSHKey[]
    readOnly?: boolean
}

export interface SecuritySectionProps {
    title: string
    icon: ReactNode
    children: ReactNode
}

export interface MetricCardProps {
    title: string
    icon: ReactNode
    children: ReactNode
}

export interface UsageBarProps {
    value: number
    color: string
    label: string
    detail: string
}

export interface MetricsHistoryPoint {
    time: string
    value: number
}

export interface MonitorChartProps {
    data: MetricsHistoryPoint[]
    color: string
    label: string
}

export interface MonitorProcessTableProps {
    processes: AgentMetricsProcess[]
}

export interface MonitorLoadAvgChartProps {
    load1: number
    load5: number
    load15: number
}

export interface MonitorNetworkCardProps {
    rxBytes: number
    txBytes: number
}

export interface AgentServerContentProps {
    agent: Agent
    plans: Plan[]
    readOnly?: boolean
}

export interface AgentFileEntry {
    path: string
    name: string
    fileType: AgentFileType
}

export interface AgentFilesResponse {
    files: AgentFileEntry[]
}

export interface ReadAgentFileResponse {
    content: string
    path: string
}

export interface UpdateAgentFileData {
    path: string
    content: string
}

export interface UpdateAgentFileParams {
    id: string
    data: UpdateAgentFileData
    signal?: AbortSignal
}

export interface RotatePasswordMutationParams {
    id: string
    password?: string
    signal?: AbortSignal
}

export interface RotateGatewayTokenMutationParams {
    id: string
    token?: string
    signal?: AbortSignal
}

export interface UpdateAgentSSHKeyMutationParams {
    id: string
    sshKeyId: string | null
    signal?: AbortSignal
}

export interface InstallAgentVersionMutationParams {
    version: string
    signal: AbortSignal
}

export interface AgentDiagnosticsDialogProps {
    agentId: string
    open: boolean
    onOpenChange: (open: boolean) => void
}

export interface AgentLogsDialogProps {
    agentId: string
    agentType?: AgentType
    open: boolean
    onOpenChange: (open: boolean) => void
}

export interface AgentLogsContentProps {
    agentId: string
    agentType?: AgentType
    enabled: boolean
    embedded?: boolean
    mockLogs?: string
}

export interface ParsedLogLine {
    time: string | null
    text: string
}

export interface AgentTerminalContentProps {
    agentId: string
    enabled: boolean
}

export interface AgentDiagnosticsContentProps {
    agentId: string
    enabled: boolean
    mockData?: DiagnosticsStatusResponse
}

export interface AgentFileExplorerContentProps {
    agentId: string
    readOnly?: boolean
}

export interface FileTreeProps {
    folders: [string, AgentFileEntry[]][]
    rootFiles: AgentFileEntry[]
    selectedPath: string
    onSelectFile: (path: string) => void
}

export interface FileTreeItemProps {
    file: AgentFileEntry
    isLast: boolean
    selectedPath: string
    onSelectFile: (path: string) => void
}

export interface FileEditorProps {
    selectedFile: AgentFileEntry | undefined
    fileType: AgentFileType
    isEditable: boolean
    isJson: boolean
    displayContent: string
    hasUnsavedChanges: boolean
    jsonError: boolean
    resolvedTheme: string
    isSaving: boolean
    onChange: (value: string) => void
    onJsonChange: (value: string) => void
    onClose: () => void
    onSave: () => void
}

export interface UseFileEditorParams {
    agentId: string
    files: AgentFileEntry[] | undefined
    readOnly?: boolean
}

export interface UseFileEditorReturn {
    selectedPath: string
    editedContent: string
    jsonError: boolean
    selectedFile: AgentFileEntry | undefined
    fileType: AgentFileType
    isEditable: boolean
    isJson: boolean
    displayContent: string
    hasUnsavedChanges: boolean
    fileContentIsPending: boolean
    fileContentIsError: boolean
    fileContentError: Error | null
    fileContentData: ReadAgentFileResponse | undefined
    isSaving: boolean
    handleSelectFile: (path: string) => void
    handleChange: (value: string) => void
    handleJsonChange: (value: string) => void
    handleSave: () => void
    reset: () => void
}

export interface UseProfileOptions {
    enabled?: boolean
    staleTime?: number
    refetchInterval?: number | false
}

export interface Faq {
    question: string
    answer: string
}

export interface FaqSectionProps {
    badge: string
    heading: string
    description: string
    faqs: Faq[]
}

export interface AgentDetailPanelProps {
    agent: Agent
    plans: Plan[]
    sshKeys: SSHKey[]
    onClose: () => void
    readOnly?: boolean
    initialTab?: AgentDetailTab
    onTabChange?: (tab: AgentDetailTab) => void
    fullScreen?: boolean
}

export interface UpdateAvailableBannerProps {
    latestVersion: string
    agentType?: AgentType | null
    onGoToVersions: () => void
}

export interface AgentBillingContentProps {
    agent: Agent
    plans: Plan[]
    readOnly?: boolean
}

export interface AgentBillingSubscriptionProps {
    agent: Agent
    plan: Plan | undefined
    readOnly?: boolean
}

export interface AgentBillingHistoryProps {
    agentId: string
    readOnly?: boolean
}

export interface ManageBillingButtonProps {
    agent: Agent
}

export interface TotalSpentTileProps {
    loading: boolean
    value: string | null
}

export interface AgentDetailSettingsTabProps {
    agent: Agent
    currentEmoji: string | null
    currentEmojiColor: string | null
    settingsName: string
    settingsNameError: string
    settingsSubdomain: string
    settingsSubdomainError: string
    settingsHasChanges: boolean
    renamePending: boolean
    subdomainPending: boolean
    emojiPending: boolean
    onNameChange: (value: string) => void
    onSubdomainChange: (value: string) => void
    onEmojiChange: (emoji: string | null, emojiColor: string | null) => void
    onSave: () => void
    readOnly?: boolean
}

export interface SectionHeaderProps {
    title: string
    action?: ReactNode
}

export interface ColorSwatchProps {
    color: string | null
    selected: boolean
    onClick: () => void
}

export interface EmojiColorPickerProps {
    emoji: string | null
    emojiColor: string | null
    agentType?: AgentType | null
    onEmojiChange: (emoji: string | null, color: string | null) => void
}

export interface ExportSectionProps {
    agentId: string
}

export interface AgentPreviewContentProps {
    agent: Agent
    readOnly?: boolean
}

export interface HeaderActionButtonProps {
    icon: ElementType
    label: string
    onClick: () => void
    disabled: boolean
}

export interface AgentDetailHeaderProps {
    agent: Agent
    onClose: () => void
    fullScreen?: boolean
    versionDisplay?: string | null
    versionLoading?: boolean
    readOnly?: boolean
}

export interface AgentDetailTabBarProps {
    activeTab: AgentDetailTab
    fullScreen?: boolean
    hiddenTabs?: AgentDetailTab[]
    setActiveTab: (tab: AgentDetailTab) => void
}

export interface AgentDetailTabState {
    tabStateMap: Record<string, AgentDetailTab>
    setTab: (agentId: string, tab: AgentDetailTab) => void
}

export interface UseAgentSettingsFormReturn {
    settingsEmoji: string | null
    settingsEmojiColor: string | null
    settingsName: string
    settingsNameError: string
    settingsSubdomain: string
    settingsSubdomainError: string
    settingsHasChanges: boolean
    renamePending: boolean
    subdomainPending: boolean
    emojiPending: boolean
    handleEmojiChange: (emoji: string | null, emojiColor: string | null) => void
    handleSettingsNameChange: (value: string) => void
    handleSettingsSubdomainChange: (value: string) => void
    handleSettingsSave: () => void
}

export interface LanguageOption {
    value: Language
    label: string
    flag: string
}

export interface HeroButtonsProps {
    deployLabel: string
    githubLabel: string
    showStars: boolean
    large?: boolean
}

export interface StatItem {
    value: string
    label: string
}

export interface StatsRowProps {
    stats: StatItem[]
}

export interface HeroBadgeProps {
    label?: string
    tutorialBadge?: boolean
    tutorialLabel?: string
    tutorialHref?: string
}

export interface HeroTitleProps {
    line1: string
    line2: string
    description: string
}

export interface DemoPreviewSectionProps {
    previewRef: RefObject<HTMLDivElement>
    previewScale: MotionValue<number>
}

export interface MacosDesktopPreviewProps {
    previewRef: RefObject<HTMLDivElement>
    previewScale: MotionValue<number>
}

export interface GoPricingCardProps {
    price: string
    label: string
    features: string[]
}

export interface SelfHostButtonProps {
    label: string
    showStars?: boolean
    large?: boolean
    className?: string
}

export interface LandingCTAProps {
    title: string
    description: string
    children: ReactNode
}

export interface VideoModalProps {
    open: boolean
    onClose: () => void
    videoUrl: string
}

export interface PricingSectionProps {
    plans: Plan[]
    hideBorderTop?: boolean
}

export interface SimplePlanFeature {
    label: string
    included: boolean
}

export interface SimplePlanData {
    planId: string
    name: string
    desc: string
    price: number
    yearlyPerMonth: number
    popular: boolean
    features: SimplePlanFeature[]
}

export interface SimplePlanCardProps {
    name: string
    description: string
    price: number
    yearlyPerMonth: number
    planId: string
    popular?: boolean
    features: SimplePlanFeature[]
}

export interface AdminUserAgentsSectionProps {
    agents: AdminUserDetailAgent[]
}

export interface AdminUserSSHKeysSectionProps {
    sshKeys: AdminUserDetailSSHKey[]
    formatDate: (dateString: string | null | undefined) => string
}

export interface AdminUserVolumesSectionProps {
    volumes: AdminUserDetailVolume[]
}

export interface AdminUserBillingSectionProps {
    billingOrders: BillingOrder[]
    formatDate: (dateString: string | null | undefined) => string
    formatCurrency: (amount: number, currency?: string) => string
}

export interface AgentDetailTabConfig<T extends string = string> {
    id: T
    label: string
    icon: ElementType
}

export interface AdminPaginatedQueryParams {
    page: number
    limit: number
    search?: string
    sort?: string
    [key: string]: string | number | boolean | undefined
}

export interface CompareData {
    competitors: CompareCompetitor[]
    categories: CompareCategory[]
}

export interface CompareCompetitor {
    id: string
    nameKey: string
    highlighted: boolean
}

export interface CompareFeatureValue {
    status: CompareFeatureStatus
    detailKey?: string
}

export interface CompareFeature {
    nameKey: string
    values: Record<string, CompareFeatureValue>
}

export interface CompareCategory {
    id: string
    nameKey: string
    features: CompareFeature[]
}

export interface DeviceInfo {
    platform: NodeJS.Platform
    arch: string
}

export interface AppUpdateInfo {
    hasUpdate: boolean
    currentVersion: string
    latestVersion?: string
}

export interface ElectronAPI {
    isDesktop?: boolean
    getAppVersion: () => Promise<string>
    getDeviceInfo?: () => Promise<DeviceInfo>
    openExternal: (url: string) => Promise<void>
    openWindowed: (url: string) => Promise<void>
    checkNetwork: () => Promise<'online' | 'unstable' | 'offline'>
    getDnsStatus: () => Promise<boolean>
    setupDns: () => Promise<boolean>
    invoke: (channel: string, ...args: unknown[]) => Promise<unknown>
    onTerminalData: (cb: (id: string, data: string) => void) => () => void
    onTerminalExit: (cb: (id: string) => void) => () => void
    checkAppUpdate?: () => Promise<AppUpdateInfo>
    checkForUpdatesNow?: () => Promise<AppUpdateInfo>
    quitAndInstall?: () => Promise<void>
    onUpdateDownloaded?: (cb: (info: AppUpdateInfo) => void) => () => void
}

export interface WebVitalsMetric {
    name: string
    delta: number
    id: string
}

export interface GTagWindow {
    gtag?: (...args: unknown[]) => void
}

export interface EmojiMartData {
    emojis: Record<string, { skins: { native: string }[] }>
}

export interface ScrollToBottomButtonProps {
    visible: boolean
    onClick: () => void
    className?: string
}

export interface UseScrollToBottomOptions {
    threshold?: number
}

export interface ElectronWindow {
    electronAPI?: ElectronAPI
}

export interface UAHighEntropyValues {
    architecture?: string
}

export interface UADataLike {
    getHighEntropyValues?: (keys: string[]) => Promise<UAHighEntropyValues>
}

export interface NavigatorWithUAData {
    userAgentData?: UADataLike
}

export interface OAuthWindowResult {
    accessToken: string | null
    idToken: string | null
    code: string | null
}

export interface RenameAgentMutationParams extends RenameAgentData {
    id: string
    signal?: AbortSignal
}

export interface UpdateAgentSubdomainMutationParams extends UpdateAgentSubdomainData {
    id: string
    signal?: AbortSignal
}

export interface UpdateAgentEmojiMutationParams {
    id: string
    emoji: string | null
    emojiColor: string | null
    signal?: AbortSignal
}

export interface AgentIdMutationParams {
    id: string
    signal?: AbortSignal
}

export interface SelectContextValue {
    value: string
    onValueChange: (value: string) => void
    displayText: string
    setDisplayText: (text: string) => void
}

export interface SelectProps {
    value: string
    onValueChange: (value: string) => void
    children: ReactNode
    disabled?: boolean
    displayValue?: string
}

export interface SelectTriggerProps {
    placeholder?: string
    className?: string
    icon?: ReactNode
    disabled?: boolean
}

export interface SelectContentProps {
    children: ReactNode
    className?: string
    align?: 'start' | 'center' | 'end'
}

export interface SelectItemProps {
    value: string
    children: ReactNode
    className?: string
}

export interface FirebaseErrorLike {
    code?: string
    customData?: Record<string, unknown>
}

export interface ErrorWithMessage {
    message: unknown
}

export interface ErrorResponse {
    error?: string
}

export interface SitemapRoute {
    path: string
    priority: string
    changefreq: string
}

export interface ComparisonRow {
    us: string
    others: string
}

export interface ComparisonTableProps {
    badge: string
    heading: string
    description: string
    rows: ComparisonRow[]
    showFullComparisonLink?: boolean
    logoSuffix?: string
}

export interface LocationSelectorProps {
    locations: Location[]
    location: string
    planId: string
    isLoading: boolean
    isLocationAvailableForPlan: (locationId: string, planId: string) => boolean
    onLocationChange: (location: string) => void
    onPlanChange: (planId: string) => void
    plans: Plan[]
    isPlanAvailable: (id: string) => boolean
}

export interface BillingIntervalSelectorProps {
    billingCycle: BillingInterval
    onBillingCycleChange: (cycle: BillingInterval) => void
}

export interface PlanSelectorProps {
    plans: Plan[]
    planId: string
    location: string
    billingCycle: BillingInterval
    isLoading: boolean
    preselectedPlanId?: string | null
    isLocationAvailableForPlan: (locationId: string, planId: string) => boolean
    isPlanAvailable: (id: string) => boolean
    onPlanChange: (planId: string) => void
    onLocationChange: (location: string) => void
    getFirstAvailableLocation: (planId: string) => string
}

export interface AdvancedOptionsProps {
    showAdvanced: boolean
    onToggleAdvanced: () => void
    password: string
    onPasswordChange: (password: string) => void
    showPassword: boolean
    onToggleShowPassword: () => void
    gatewayToken: string
    onGatewayTokenChange: (token: string) => void
    showGatewayToken: boolean
    onToggleShowGatewayToken: () => void
    sshKeys: SSHKey[]
    selectedSshKeyId: string
    onSshKeyChange: (id: string) => void
    onNavigateToSSHKeys: () => void
    volumePricing?: VolumePricing
    volumeSize: number
    onVolumeSizeChange: (size: number) => void
    hideInfrastructureOptions?: boolean
    selectedAgentType?: AgentType
}

export interface OrderSummaryProps {
    selectedPlan: Plan
    name: string
    location: string
    locations: Location[]
    billingCycle: BillingInterval
    volumeSize: number
    volumePricing?: VolumePricing
}

export interface AgentTypeOption {
    type: AgentType
    Icon: FC<IconProps>
    nameKey: TranslationKey
    descriptionKey: TranslationKey
    docsUrl: string
}

export interface AgentNameFieldProps {
    name: string
    nameError?: string
    onChange: (name: string) => void
}

export interface AgentTypeSelectorProps {
    selectedAgentType: AgentType
    onAgentTypeChange: (type: AgentType) => void
    starsFor: (type: AgentType) => string | null
}

export interface TermsAgreementProps {
    agreedToTerms: boolean
    onAgreedChange: (agreed: boolean) => void
}

export interface CreateAgentSubmitActionsProps {
    isLocal: boolean
    isCreatingLocal: boolean
    isPurchasing: boolean
    selectedPlan?: Plan
    location: string
    nameError?: string
    agreedToTerms: boolean
    totalAmount: string
    onCancel: () => void
}

export interface AffiliatePaymentEntry {
    id: string
    referredEmail: string
    amount: number
    type: string
    createdAt: string
}

export interface AffiliateInfo {
    referralCount: number
    totalEarnings: number
    payments: AffiliatePaymentEntry[]
}

export interface GenerateReferralCodeResponse {
    referralCode: string
}

export interface UpdateReferralCodeData {
    code: string
}

export interface UpdateReferralCodeResponse {
    referralCode: string
}

export interface AdminUserListItem {
    id: string
    email: string
    name: string | null
    role: string
    authMethods: string[]
    hasLicense: boolean
    referralCode: string | null
    createdAt: string
    agentCount: number
    sshKeyCount: number
}

export interface AdminUsersResponse {
    items: AdminUserListItem[]
    total: number
    page: number
    totalPages: number
}

export interface AdminUserDetailAgent {
    id: string
    name: string
    status: string
    ip: string | null
    planId: string
    location: string | null
    subdomain: string | null
    subscriptionStatus: string | null
    billingInterval: string | null
    deletionScheduledAt: string | null
    createdAt: string
}

export interface AdminUserDetailSSHKey {
    id: string
    name: string
    fingerprint: string
    createdAt: string
}

export interface AdminUserDetailVolume {
    id: string
    name: string
    size: number
    location: string
    status: string
    createdAt: string
}

export interface AdminUserDetail {
    id: string
    email: string
    name: string | null
    role: string
    authMethods: string[]
    hasLicense: boolean
    polarCustomerId: string | null
    referralCode: string | null
    referralCodeChanged: boolean
    referredBy: string | null
    createdAt: string
    agents: AdminUserDetailAgent[]
    sshKeys: AdminUserDetailSSHKey[]
    volumes: AdminUserDetailVolume[]
    billingOrders: BillingOrder[]
}

export interface AdminUserRowProps {
    user: AdminUserListItem
    onSelect: (userId: string) => void
}

export interface AdminUsersTabProps {
    onSelectEntity: (entity: AdminEntitySelection) => void
}

export interface AdminAnalyticsDataPoint {
    date: string
    count: number
}

export interface AdminAnalyticsResponse {
    users: AdminAnalyticsDataPoint[]
    agents: AdminAnalyticsDataPoint[]
    pendingAgents: AdminAnalyticsDataPoint[]
    sshKeys: AdminAnalyticsDataPoint[]
    volumes: AdminAnalyticsDataPoint[]
    referrals: AdminAnalyticsDataPoint[]
    emails: AdminAnalyticsDataPoint[]
}

export interface AdminAnalyticsChartProps {
    title: string
    data: AdminAnalyticsDataPoint[]
    color: string
    range: AdminAnalyticsRange
}

export interface AdminStats {
    users: number
    agents: number
    pendingAgents: number
    sshKeys: number
    volumes: number
    referrals: number
    emails: number
    billing: number
}

export interface AdminReferralListItem {
    id: string
    referrerId: string
    referredUserId: string
    paymentCount: number
    totalEarned: number
    createdAt: string
    referrerEmail: string | null
    referredEmail: string | null
}

export interface AdminPendingAgentListItem {
    id: string
    name: string
    planId: string
    location: string
    priceMonthly: number
    billingInterval: string | null
    createdAt: string
    expiresAt: string
    userId: string
    ownerEmail: string | null
}

export interface AdminEmailListItem {
    id: string
    feature: string
    sentAt: string
    userId: string
    ownerEmail: string | null
}

export interface AdminBillingApiResponse {
    items: BillingOrder[]
    totalCount: number
    maxPage: number
}

export interface AdminBillingDetailViewProps {
    order: BillingOrder
    onClose: () => void
}

export interface AdminPaginatedResponse<T> {
    items: T[]
    total: number
    page: number
    totalPages: number
}

export interface AdminAgentListItem {
    id: string
    name: string
    status: string
    ip: string | null
    planId: string
    location: string | null
    subdomain: string | null
    subscriptionStatus: string | null
    billingInterval: string | null
    deletionScheduledAt: string | null
    createdAt: string
    userId: string
    ownerEmail: string | null
}

export interface AdminAgentsResponse {
    items: AdminAgentListItem[]
    total: number
    page: number
    totalPages: number
}

export interface AdminSSHKeyListItem {
    id: string
    name: string
    fingerprint: string
    createdAt: string
    userId: string
    ownerEmail: string | null
}

export interface AdminSSHKeysResponse {
    items: AdminSSHKeyListItem[]
    total: number
    page: number
    totalPages: number
}

export interface AdminVolumeListItem {
    id: string
    name: string
    size: number
    location: string
    status: string
    createdAt: string
    userId: string
    ownerEmail: string | null
}

export interface AdminVolumesResponse {
    items: AdminVolumeListItem[]
    total: number
    page: number
    totalPages: number
}

export interface UpdateAdminUserData {
    name?: string | null
    referralCode?: string | null
}

export interface UpdateAdminUserMutationParams {
    id: string
    data: UpdateAdminUserData
}

export interface CreateApiMutationOptions<TArgs, TResult> {
    invalidateKeys?:
        | ReadonlyArray<readonly unknown[]>
        | ((args: TArgs, result: TResult) => ReadonlyArray<readonly unknown[]>)
    onSuccess?: (result: TResult, args: TArgs, queryClient: QueryClient) => void
}

export interface RangeBucketConfig {
    count: number
    stepMs: number
    offsetMs: number
}

export interface AdminEntitySelection {
    type:
        | 'user'
        | 'agent'
        | 'ssh-key'
        | 'volume'
        | 'pending-agent'
        | 'referral'
        | 'email'
        | 'billing'
    id: string
    data: unknown
}

export interface AdminResourceTabProps {
    onSelectEntity: (entity: AdminEntitySelection) => void
}

export interface AdminDetailModalProps {
    entity: AdminEntitySelection | null
    onClose: () => void
    onNavigateToUser: (userId: string) => void
}

export interface AdminDetailFieldProps {
    label: string
    value: ReactNode
    className?: string
}

export interface AdminOwnerLinkProps {
    userId: string
    email: string | null
    onNavigateToUser: (userId: string) => void
}

export interface AdminStatusBadgeProps {
    status: string
}

export interface AdminAgentDetailViewProps {
    agent: AdminAgentListItem
    onClose: () => void
    onNavigateToUser: (userId: string) => void
}

export interface AdminSSHKeyDetailViewProps {
    sshKey: AdminSSHKeyListItem
    onClose: () => void
    onNavigateToUser: (userId: string) => void
}

export interface AdminVolumeDetailViewProps {
    volume: AdminVolumeListItem
    onClose: () => void
    onNavigateToUser: (userId: string) => void
}

export interface AdminPendingAgentDetailViewProps {
    pendingAgent: AdminPendingAgentListItem
    onClose: () => void
    onNavigateToUser: (userId: string) => void
}

export interface AdminReferralDetailViewProps {
    referral: AdminReferralListItem
    onClose: () => void
    onNavigateToUser: (userId: string) => void
}

export interface AdminEmailDetailViewProps {
    email: AdminEmailListItem
    onClose: () => void
    onNavigateToUser: (userId: string) => void
}

export interface AdminUserDetailViewProps {
    userId: string
    onClose: () => void
}

export interface AdminUserFiltersProps {
    search: string
    onSearchChange: (value: string) => void
    hasAgents: string
    onHasAgentsChange: (value: string) => void
    sortOrder: string
    onSortOrderChange: (value: string) => void
}

export interface AffiliatePeriodSelectorProps {
    period: AffiliatePeriod
    onPeriodChange: (period: AffiliatePeriod) => void
}

export interface AffiliateStatsGridProps {
    referralCode: string | null
    referralCodeChanged: boolean
    isLoading: boolean
    referralCount: number
    totalEarnings: number
    formatCurrency: (cents: number) => string
    onSave: (code: string) => void
    onCopy: () => void
    isPending: boolean
}

export interface AffiliatePaymentHistoryProps {
    payments: AffiliatePaymentEntry[]
    isLoading: boolean
    formatCurrency: (cents: number) => string
}

export interface AffiliateConfirmDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    onConfirm: () => void
    isPending: boolean
}

export interface ConfirmationDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    title: string
    description: ReactNode
    confirmLabel: string
    onConfirm: () => void
    isPending: boolean
    variant?: 'default' | 'destructive'
}

export interface ChangelogFeature {
    key: TranslationKey
    type: ChangelogFeatureType
}

export interface ChangelogRelease {
    dateKey: TranslationKey
    titleKey: TranslationKey
    descriptionKey: TranslationKey
    features: ChangelogFeature[]
}

export interface DashboardHeaderProps {
    isLocal: boolean
    isLoading: boolean
    displayedAgents: Agent[]
    displayName: string
    dnsSetup: boolean | null
    dnsLoading: boolean
    onCreateClick: () => void
    onDnsSetup: () => void
    onSignOut: () => Promise<void>
}

export interface DashboardChatViewProps {
    displayedAgents: Agent[]
    plans: Plan[]
    sshKeys: SSHKey[]
    adminMode: boolean
    chatSettingsAgentId: string | null
    chatAgentTab: AgentDetailTab | null
    onSettingsAgentChange: (agentId: string | null) => void
    onAgentTabChange: (tab: AgentDetailTab | null) => void
    onCreateClick: () => void
}

export interface ChatSidebarProps {
    agents: Agent[]
    selectedAgentId: string | null
    readOnly?: boolean
    onOpenAgentSettings: (agentId: string) => void
    onClose?: () => void
}

export interface ChatSidebarTreeViewProps {
    agents: Agent[]
    selectedAgentId: string | null
    readOnly?: boolean
    onOpenAgentSettings: (agentId: string) => void
}

export interface ChatSidebarSearchProps {
    value: string
    onChange: (value: string) => void
}

export interface ChatSidebarAgentHeaderProps {
    agent: Agent
    isSelected: boolean
    statusConfig: StatusConfig
    onOpenAgentSettings: (agentId: string) => void
}

export interface UseURLStateRestorationParams {
    searchParams: URLSearchParams
    setSearchParams: (
        params: Record<string, string>,
        options?: { replace?: boolean }
    ) => void
    chatSettingsAgentId: string | null
    setChatSettingsAgentId: (value: string | null) => void
    chatAgentTab: AgentDetailTab | null
    setChatAgentTab: (value: AgentDetailTab | null) => void
    setShowCreate: (value: boolean) => void
    setPreselectedPlanId: (value: string | null) => void
    showToast: (message: string, type: ToastType) => void
    awaitingAgent: boolean
}

export interface UseInfiniteScrollObserverParams {
    isFetchingNextPage: boolean
    hasNextPage: boolean
    fetchNextPage: () => void
}

export interface InfinitePageData<T> {
    items: T[]
    total: number
}

export interface UsePaginationStateParams<T> {
    data: { pages: InfinitePageData<T>[] } | undefined
    pageSize: number
}

export interface ConnectedAccountRowProps {
    icon: ReactNode
    label: string
    isConnected: boolean
    isDisabled?: boolean
    isPending: boolean
    isLoading?: boolean
    onConnect?: () => void
    onDisconnect?: () => void
}

export interface UsePaginationStateReturn<T> {
    allItems: T[]
    total: number
    remaining: number
    skeletonCount: number
}

export interface AgentPendingViewProps {
    status: string
    agentType?: AgentType | null
    checkoutUrl?: string | null
    onCancel?: () => void
    cancelPending?: boolean
    isLocal?: boolean
}

export interface BillingOrderCardProps {
    order: BillingOrder
    loadingInvoiceIds: Set<string>
    onViewInvoice: (orderId: string) => void
    readOnly?: boolean
}

export interface BillingStatusConfig {
    className: string
    labelKey: TranslationKey
}

export interface BillingStatusBadgeProps {
    status: string
}

export interface BetaBadgeProps {
    version?: string
}

export interface CompareTableMobileProps {
    categories: CompareCategory[]
    clawhost: CompareCompetitor
    selectedCompetitorId: string
    selectedCompetitorNameKey: string
    renderValue: (value: CompareFeatureValue) => ReactNode
}

export interface CompareTableDesktopProps {
    categories: CompareCategory[]
    competitors: CompareCompetitor[]
    colSpan: number
    renderValue: (value: CompareFeatureValue) => ReactNode
}

export interface UseOtpFlowParams {
    email: string
    cooldown: number
    startCooldown: () => void
    onCodeSent: () => void
}

export interface UseOtpFlowReturn {
    code: string[]
    codeError: boolean
    emailError: string
    loadingMethod: LoginLoadingMethod
    isCodeComplete: boolean
    inputRefs: MutableRefObject<(HTMLInputElement | null)[]>
    setEmailError: (value: string) => void
    handleSendOtp: () => Promise<void>
    handleVerifyOtp: (fullCode: string) => Promise<void>
    handleCodeChange: (value: string, index: number) => void
    handleCodeKeyDown: (key: string, index: number) => void
    handleResend: () => Promise<void>
    handleOAuth: (provider: OAuthProvider) => Promise<void>
    resetCode: () => void
}

export interface EmailStepProps {
    email: string
    setEmail: (value: string) => void
    emailError: string
    loadingMethod: LoginLoadingMethod
    cooldown: number
    onSubmit: (e: FormEvent) => void
    onOAuth: (provider: OAuthProvider) => void
}

export interface OtpCodeStepProps {
    email: string
    code: string[]
    codeError: boolean
    isCodeComplete: boolean
    loadingMethod: LoginLoadingMethod
    cooldown: number
    inputRefs: MutableRefObject<(HTMLInputElement | null)[]>
    onCodeChange: (value: string, index: number) => void
    onCodeKeyDown: (key: string, index: number) => void
    onVerify: () => void
    onResend: () => void
    onChangeEmail: () => void
}

export interface UseRoutePrefetchReturn {
    prefetchRoute: (path: string) => void
}

export interface UseMetricsHistoryReturn {
    cpuHistory: MetricsHistoryPoint[]
    memHistory: MetricsHistoryPoint[]
}

export interface UsageColors {
    high: string
    medium: string
    low: string
}

export interface EmojiSelectEvent {
    native: string
}

export interface EnablePreviewResponse {
    enabled: boolean
}

export interface VolumeStatusEntry {
    icon: ReactNode
    className: string
}

export interface MdxComponentModule {
    default: ComponentType
}