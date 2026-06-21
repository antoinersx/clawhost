import type { OAuthCredential } from 'firebase/auth'
import type {
    MdxComponentModule,
    OAuthWindowResult,
    PendingConflict
} from '@/ts/Interfaces'
import type {
    agentType,
    authMethod,
    billingInterval,
    agentFileType,
    agentStatus,
    userRole
} from '@openclaw/shared'
import type {
    AFFILIATE_PERIOD,
    CHANGELOG_FEATURE_TYPE,
    CHECK_STATUS,
    AGENT_AVATAR_SIZE,
    AGENT_DETAIL_TABS,
    COMPARE_FEATURE_STATUS,
    COPIED_FIELD_TYPE,
    DETECTION_UNKNOWN,
    LOGIN_LOADING_METHOD,
    OAUTH_PROVIDER,
    PREVIEW_STATUS,
    PRODUCT,
    SSH_KEY_MODAL_MODE,
    TERMINAL_STATUS,
    THEMES,
    TOAST_TYPE,
    LANGUAGES,
    GO_PLATFORM,
    MAC_ARCH
} from '@/lib/constants'

export type AgentType = (typeof agentType)[keyof typeof agentType]

export type ToastType = (typeof TOAST_TYPE)[keyof typeof TOAST_TYPE]

export type CheckStatus = (typeof CHECK_STATUS)[keyof typeof CHECK_STATUS]

export type AgentStatus = (typeof agentStatus)[keyof typeof agentStatus]

export type CopiedFieldType =
    | (typeof COPIED_FIELD_TYPE)[keyof typeof COPIED_FIELD_TYPE]
    | null

export type SSHKeyModalMode =
    (typeof SSH_KEY_MODAL_MODE)[keyof typeof SSH_KEY_MODAL_MODE]

export type UserRole = (typeof userRole)[keyof typeof userRole]

export type AuthMethod = (typeof authMethod)[keyof typeof authMethod]

export type OAuthProvider = (typeof OAUTH_PROVIDER)[keyof typeof OAUTH_PROVIDER]

export type AgentDetailTab =
    (typeof AGENT_DETAIL_TABS)[keyof typeof AGENT_DETAIL_TABS]

export type PreviewStatus = (typeof PREVIEW_STATUS)[keyof typeof PREVIEW_STATUS]

export type CompareFeatureStatus =
    (typeof COMPARE_FEATURE_STATUS)[keyof typeof COMPARE_FEATURE_STATUS]

export type BillingInterval =
    (typeof billingInterval)[keyof typeof billingInterval]

export type AgentAvatarSize =
    (typeof AGENT_AVATAR_SIZE)[keyof typeof AGENT_AVATAR_SIZE]

export type LoginLoadingMethod =
    | (typeof LOGIN_LOADING_METHOD)[keyof typeof LOGIN_LOADING_METHOD]
    | null

export type ThemeMode = (typeof THEMES)[keyof typeof THEMES]

export type Language = (typeof LANGUAGES)[keyof typeof LANGUAGES]

export type AgentFileType = (typeof agentFileType)[keyof typeof agentFileType]

export type Product = (typeof PRODUCT)[keyof typeof PRODUCT]

export type TerminalStatus =
    (typeof TERMINAL_STATUS)[keyof typeof TERMINAL_STATUS]

export type AffiliatePeriod =
    (typeof AFFILIATE_PERIOD)[keyof typeof AFFILIATE_PERIOD]

export type ChangelogFeatureType =
    (typeof CHANGELOG_FEATURE_TYPE)[keyof typeof CHANGELOG_FEATURE_TYPE]

export type AdminAnalyticsRange = 'day' | 'week' | 'month' | 'year' | 'all'

export type LoginStep = 'email' | 'code'

export type ResolveConflictFn = (
    credential: OAuthCredential | null,
    providerId: string,
    conflictEmail: string | undefined
) => PendingConflict | null

export type ElectronOAuthFn = (
    providerUrl: string,
    callbackPrefix: string
) => Promise<OAuthWindowResult>

export type MdxModuleLoaders = Record<string, () => Promise<MdxComponentModule>>

export type GoPlatform = (typeof GO_PLATFORM)[keyof typeof GO_PLATFORM]

export type MacArch = (typeof MAC_ARCH)[keyof typeof MAC_ARCH]

export type DetectedMacArch = MacArch | typeof DETECTION_UNKNOWN

export type DetectedOS = GoPlatform | typeof DETECTION_UNKNOWN

export type GoDownloadVariant = 'primary' | 'secondary'