import type { ReactNode } from 'react'
import type {
    AgentType,
    BillingInterval,
    FeatureEmailKey,
    SubscriptionStatus,
    WebhookEventType
} from '@/ts/Types'
import type { PgTable } from 'drizzle-orm/pg-core'
import type { TranslationKey } from '@openclaw/i18n'
import type { Client, ClientChannel } from 'ssh2'

export interface TerminalSocketData {
    ip: string
    password: string
    autoSuUser?: string | null
    sshConn?: Client
    stream?: ClientChannel
    pingTimer?: Timer
    sshReady?: boolean
}

export interface WithAgentOptions {
    requireSSH?: boolean | TranslationKey
}

export interface CloudProvider {
    createServer(
        name: string,
        serverType: string,
        location: string,
        rootPassword?: string,
        sshKeyIds?: number[],
        snapshotId?: string,
        userData?: string
    ): Promise<CreateServerResult>
    getServer(serverId: string): Promise<ServerStatus>
    getServers(): Promise<Map<string, ServerStatus>>
    startServer(serverId: string): Promise<void>
    stopServer(serverId: string): Promise<void>
    restartServer(serverId: string): Promise<void>
    deleteServer(serverId: string): Promise<void>
    getServerTypes(): Promise<ServerTypeInfo[]>
    getLocations(): Promise<LocationInfo[]>
    getRawServerTypes(): Promise<RawServerType[]>
    getDatacenters(): Promise<DatacenterAvailability[]>
    createSSHKey(name: string, publicKey: string): Promise<CreateSSHKeyResult>
    deleteSSHKey(keyId: number): Promise<void>
    getVolumePricing(): Promise<VolumePricingResult>
    createVolume(
        name: string,
        size: number,
        location: string,
        serverId?: number
    ): Promise<VolumeInfo>
    attachVolume(volumeId: number, serverId: number): Promise<void>
    detachVolume(volumeId: number): Promise<void>
    deleteVolume(volumeId: number): Promise<void>
    getVolume(volumeId: number): Promise<VolumeDetails>
}

export interface RawServerType {
    id: number
    name: string
}

export interface DatacenterAvailability {
    name: string
    locationName: string
    availableServerTypeIds: number[]
}

export interface HetznerServer {
    id: number
    name: string
    status: string
    public_net: {
        ipv4: { ip: string }
    }
}

export interface HetznerSSHKey {
    id: number
    name: string
    fingerprint: string
    public_key: string
    created: string
}

export interface HetznerServerType {
    id: number
    name: string
    description: string
    cores: number
    memory: number
    disk: number
    architecture: string
    prices: Array<{
        location: string
        price_hourly: { gross: string }
        price_monthly: { gross: string }
    }>
}

export interface HetznerLocation {
    id: number
    name: string
    description: string
    country: string
    city: string
}

export interface HetznerDatacenter {
    id: number
    name: string
    location: { name: string }
    server_types: {
        available: number[]
        supported: number[]
    }
}

export interface HetznerVolume {
    id: number
    name: string
    size: number
    location: { name: string }
    server: number | null
    status: string
    created: string
}

export interface HetznerVolumePricing {
    price_per_gb_month: { gross: string }
}

export interface HetznerCreateServerResponse {
    server: HetznerServer
    root_password: string
}

export interface HetznerServersResponse {
    servers: HetznerServer[]
    meta: {
        pagination: { total_entries: number; last_page: number }
    }
}

export interface HetznerServerResponse {
    server: HetznerServer
}

export interface HetznerServerTypesResponse {
    server_types: HetznerServerType[]
}

export interface HetznerLocationsResponse {
    locations: HetznerLocation[]
}

export interface HetznerDatacentersResponse {
    datacenters: HetznerDatacenter[]
}

export interface HetznerSSHKeyResponse {
    ssh_key: HetznerSSHKey
}

export interface HetznerPricingResponse {
    pricing: { volume: HetznerVolumePricing }
}

export interface HetznerVolumeResponse {
    volume: HetznerVolume
}

export interface ServerStatus {
    status: string
    ip: string
}

export interface CreateServerResult {
    serverId: number
    ip: string
    rootPassword: string
}

export interface ServerTypeInfo {
    name: string
    description: string
    cores: number
    memory: number
    disk: number
    architecture: string
    priceHourly: number
    priceMonthly: number
}

export interface LocationInfo {
    id: string
    name: string
    city: string
    country: string
    disabled: boolean
}

export interface CreateSSHKeyResult {
    id: number
    name: string
    fingerprint: string
}

export interface VolumeInfo {
    id: number
    size: number
    location: string
}

export interface VolumeDetails {
    id: number
    size: number
    status: string
    serverId: number | null
}

export interface VolumePricingResult {
    pricePerGbMonthly: number
}

export interface CheckoutSession {
    id: string
    url: string
    status: string
    customerId?: string
    customerEmail?: string
    productId: string
    amount: number
    currency: string
    metadata?: Record<string, string>
    subscriptionId?: string
}

export interface CreateCheckoutParams {
    productId: string
    customerEmail: string
    customerId?: string
    successUrl?: string
    cancelUrl?: string
    metadata?: Record<string, string>
}

export interface PolarSubscription {
    id: string
    status: SubscriptionStatus
    customerId: string
    productId: string
    amount: number
    currency: string
    currentPeriodStart?: Date
    currentPeriodEnd?: Date
    cancelAtPeriodEnd: boolean
    canceledAt?: Date
    endedAt?: Date
    metadata?: Record<string, string>
}

export interface PolarSubscriptionRaw {
    id: string
    status: string
    customerId: string
    productId: string
    amount?: number
    currency?: string
    currentPeriodStart?: string
    currentPeriodEnd?: string
    cancelAtPeriodEnd?: boolean
    canceledAt?: string
    endedAt?: string
    metadata?: Record<string, string>
}

export interface PolarOrder {
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

export interface PolarOrdersPage {
    items: PolarOrder[]
    totalCount: number
    maxPage: number
}

export interface PolarOrderRaw {
    id: string
    status: string
    subtotalAmount: number
    discountAmount: number
    netAmount: number
    taxAmount: number
    totalAmount: number
    currency?: string
    billingReason: string
    product?: { name: string; id: string } | null
    productId?: string | null
    subscriptionId?: string | null
    discount?: { name: string } | null
    createdAt: Date | string
}

export interface PolarCustomer {
    id: string
    email: string
    name?: string
    externalId?: string
}

export interface CreatePolarCustomerParams {
    email: string
    name?: string
    externalId: string
}

export interface WebhookEvent<T = unknown> {
    type: WebhookEventType
    data: T
}

export interface SubscriptionWebhookData {
    id: string
    status: string
    customerId: string
    customerEmail?: string
    productId: string
    priceId?: string
    amount: number
    currency: string
    currentPeriodStart?: string
    currentPeriodEnd?: string
    cancelAtPeriodEnd: boolean
    canceledAt?: string
    endedAt?: string
    metadata?: Record<string, string>
}

export interface CheckoutWebhookData {
    id: string
    status: string
    customerId?: string
    customerEmail?: string
    productId: string
    subscriptionId?: string
    amount: number
    currency: string
    metadata?: Record<string, string>
}

export interface WebhookHandlers {
    onCheckoutCreated?: (data: CheckoutWebhookData) => Promise<void>
    onCheckoutUpdated?: (data: CheckoutWebhookData) => Promise<void>
    onSubscriptionCreated?: (data: SubscriptionWebhookData) => Promise<void>
    onSubscriptionActive?: (data: SubscriptionWebhookData) => Promise<void>
    onSubscriptionUpdated?: (data: SubscriptionWebhookData) => Promise<void>
    onSubscriptionCanceled?: (data: SubscriptionWebhookData) => Promise<void>
    onSubscriptionRevoked?: (data: SubscriptionWebhookData) => Promise<void>
    onSubscriptionUncanceled?: (data: SubscriptionWebhookData) => Promise<void>
}

export interface ProvisionAgentParams {
    pendingAgentId: string
    subscriptionId: string
    customerId: string
    productId: string
}

export interface ProvisionAgentResponse {
    success: boolean
    agentId?: string
    userId?: string
    referralCode?: string | null
    error?: string
}

export interface AgentCleanupData {
    providerServerId: string | null
    subdomain: string | null
    ip: string | null
}

export interface SendOtpBody {
    email: string
}

export interface VerifyOtpBody {
    email: string
    code: string
}

export interface ResolveCredentialConflictBody {
    accessToken: string
    providerId: string
    email: string
    code: string
}

export interface GithubExchangeBody {
    code: string
    redirectUri?: string
}

export interface GithubTokenResponse {
    access_token?: string
    error?: string
}

export interface OtpCodeEmailProps {
    code: string
}

export interface CreateSSHKeyBody {
    name: string
    publicKey: string
}

export interface UpdateProfileBody {
    name?: string
}

export interface InitiateAgentPurchaseBody {
    name?: string
    agentType?: AgentType
    planId: string
    location: string
    password?: string
    gatewayToken?: string
    sshKeyId?: string
    volumeSize?: number
    priceMonthly: number
    billingInterval?: BillingInterval
}

export interface AgentConfig {
    user: string
    homeDir: string
    configDir: string
    configFile: string | null
    serviceName: string
    logFile: string
    nginxSite: string
    binary: string
    npmPackage: string | null
    githubRepo: string | null
    doctorCommand: string | null
    versionCommand: string
}

export interface CloudflareDNSRecord {
    id: string
    name: string
}

export interface CloudflareDNSLookup {
    id: string
    ip: string
}

export interface ReadAgentFileBody {
    path: string
}

export interface UpdateAgentFileBody {
    path: string
    content: string
}

export interface BillingPeriod {
    start?: string
    end?: string
}

export interface OrderCustomerResult {
    customerId: string
}

export interface PolarPaginatedResult {
    items: unknown[]
    pagination: { totalCount: number; maxPage: number }
}

export interface PolarItemsResult {
    items: unknown[]
}

export interface CacheEntry<T> {
    data: T
    expiry: number
}

export interface VersionsCacheData {
    latestVersion: string
    versions: { version: string; publishedAt: string; downloads: number }[]
}

export interface AuthCacheData {
    userId: string
    isAdmin: boolean
}

export interface RenameAgentBody {
    name: string
}

export interface UpdateAgentEmojiBody {
    emoji: string | null
    emojiColor: string | null
}

export interface UpdateAgentSubdomainBody {
    subdomain: string
}

export interface GithubEmailEntry {
    primary: boolean
    email: string
}

export interface NpmRegistryTimeResponse {
    time: Record<string, string>
}

export interface NpmRegistryVersionsResponse {
    'dist-tags': Record<string, string>
    time: Record<string, string>
}

export interface NpmDownloadsResponse {
    downloads: Record<string, number>
}

export interface AgentStarCount {
    agentType: string
    stars: number
}

export interface AgentStarsResponse {
    stars: AgentStarCount[]
}

export interface StarsCacheData {
    stars: AgentStarCount[]
}

export interface GitHubRelease {
    tag_name: string
    published_at: string
    prerelease: boolean
    draft: boolean
}

export interface InstallVersionBody {
    version: string
}

export interface UpdateAgentSSHKeyBody {
    sshKeyId: string | null
}

export interface RotatePasswordBody {
    password?: string
}

export interface RotateGatewayTokenBody {
    token?: string
}

export interface GithubUserResponse {
    id: number
    name?: string
    login: string
    email?: string
}

export interface GoogleUserinfoResponse {
    email: string
    sub: string
    name?: string
}

export interface FeatureEmailLayoutProps {
    preview: string
    children: ReactNode
}

export interface FeatureEmailDefinition {
    key: FeatureEmailKey
    subject: string
    render: () => ReactNode
}

export interface UpdateReferralCodeBody {
    code: string
}

export interface AdminAnalyticsDataPoint {
    date: string
    count: number
}

export interface AnalyticsRangeConfig {
    trunc: string
    offset: string
}

export interface AnalyticsTableConfig {
    key: string
    table: PgTable
    column: string
}

export interface AdminUpdateFields {
    name?: string | null
    referralCode?: string | null
    [key: string]: unknown
}

export interface GitHubFileEntry {
    name: string
}

export interface BlogTopicDiscovery {
    title: string
    angle: string
}

export interface GitHubRefResponse {
    object: { sha: string }
}

export interface GitHubPullRequestResponse {
    html_url: string
}

export interface ServerLifecycleResult {
    success: boolean
    status: string
}

export interface ErrorWithBody {
    body: unknown
}