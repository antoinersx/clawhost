import type {
    BillingHistoryResponse,
    BillingInvoiceResponse,
    CheckSubdomainResponse,
    Claw,
    ClawCredentialsResponse,
    ClawFilesResponse,
    ClawVersionResponse,
    ClawVersionsResponse,
    CreateSSHKeyData,
    CustomerPortalResponse,
    DeleteClawResponse,
    DiagnosticsLogsResponse,
    DiagnosticsStatusResponse,
    GithubExchangeResponse,
    InstallClawVersionResponse,
    Location,
    PlanAvailability,
    PurchaseClawData,
    PurchaseClawResponse,
    ReadClawFileResponse,
    RenameClawData,
    SSHKey,
    UpdateClawFileData,
    UpdateProfileData,
    UserProfile,
    UserStats,
    VerifyOtpResponse,
    VolumePricing
} from '@/ts/Interfaces'

import { RequestClient, apiPaths } from '@openclaw/shared'
import { getCachedToken, clearTokenCache } from '@/lib/firebase'

const BASE_URL = process.env.EXPO_PUBLIC_API_URL || 'https://api.clawhost.com'

const client = new RequestClient({
    baseUrl: BASE_URL,
    getHeaders: async (): Promise<Record<string, string>> => {
        const token = await getCachedToken()
        return token ? { Authorization: `Bearer ${token}` } : {}
    },
    onUnauthorized: async (): Promise<boolean> => {
        clearTokenCache()
        await getCachedToken(true)
        return true
    }
})

const publicClient = new RequestClient({
    baseUrl: BASE_URL
})

const api = {
    sendOtp: (email: string): Promise<void> =>
        publicClient.post<void>(apiPaths.AUTH.SEND_OTP, { email }),
    verifyOtp: (email: string, code: string): Promise<VerifyOtpResponse> =>
        publicClient.post<VerifyOtpResponse>(apiPaths.AUTH.VERIFY_OTP, {
            email,
            code
        }),
    githubExchange: (
        code: string,
        redirectUri: string
    ): Promise<GithubExchangeResponse> =>
        publicClient.post<GithubExchangeResponse>(
            apiPaths.AUTH.GITHUB_EXCHANGE,
            { code, redirectUri }
        ),
    connectAuthMethod: (method: string): Promise<void> =>
        client.post<void>(apiPaths.USERS.AUTH_METHOD(method)),
    disconnectAuthMethod: (method: string): Promise<void> =>
        client.delete<void>(apiPaths.USERS.AUTH_METHOD(method)),
    getClaws: (): Promise<Claw[]> => client.get<Claw[]>(apiPaths.CLAWS.BASE),
    getClaw: (id: string): Promise<Claw> =>
        client.get<Claw>(apiPaths.CLAWS.byId(id)),
    syncClaw: (id: string): Promise<Claw> =>
        client.post<Claw>(apiPaths.CLAWS.SYNC(id)),
    startClaw: (id: string): Promise<Claw> =>
        client.post<Claw>(apiPaths.CLAWS.START(id)),
    stopClaw: (id: string): Promise<Claw> =>
        client.post<Claw>(apiPaths.CLAWS.STOP(id)),
    restartClaw: (id: string): Promise<Claw> =>
        client.post<Claw>(apiPaths.CLAWS.RESTART(id)),
    renameClaw: (id: string, data: RenameClawData): Promise<Claw> =>
        client.patch<Claw>(apiPaths.CLAWS.byId(id), data),
    deleteClaw: (id: string): Promise<DeleteClawResponse> =>
        client.delete<DeleteClawResponse>(apiPaths.CLAWS.byId(id)),
    cancelDeletion: (id: string): Promise<Claw> =>
        client.post<Claw>(apiPaths.CLAWS.CANCEL_DELETION(id)),
    getCredentials: (id: string): Promise<ClawCredentialsResponse> =>
        client.get<ClawCredentialsResponse>(apiPaths.CLAWS.CREDENTIALS(id)),
    rotatePassword: (id: string, password?: string): Promise<void> =>
        client.post<void>(
            apiPaths.CLAWS.ROTATE_PASSWORD(id),
            password ? { password } : {}
        ),
    rotateGatewayToken: (id: string, token?: string): Promise<void> =>
        client.post<void>(
            apiPaths.CLAWS.ROTATE_GATEWAY_TOKEN(id),
            token ? { token } : {}
        ),
    getDiagnostics: (id: string): Promise<DiagnosticsStatusResponse> =>
        client.post<DiagnosticsStatusResponse>(
            apiPaths.CLAWS.DIAGNOSTICS.STATUS(id)
        ),
    getLogs: (id: string): Promise<DiagnosticsLogsResponse> =>
        client.post<DiagnosticsLogsResponse>(
            apiPaths.CLAWS.DIAGNOSTICS.LOGS(id)
        ),
    repairClaw: (id: string): Promise<void> =>
        client.post<void>(apiPaths.CLAWS.DIAGNOSTICS.REPAIR(id)),
    reinstallClaw: (id: string): Promise<void> =>
        client.post<void>(apiPaths.CLAWS.REINSTALL(id)),
    getVersion: (id: string): Promise<ClawVersionResponse> =>
        client.post<ClawVersionResponse>(apiPaths.CLAWS.VERSION(id)),
    getVersions: (id: string): Promise<ClawVersionsResponse> =>
        client.post<ClawVersionsResponse>(apiPaths.CLAWS.VERSIONS(id)),
    installVersion: (
        id: string,
        version: string
    ): Promise<InstallClawVersionResponse> =>
        client.post<InstallClawVersionResponse>(
            apiPaths.CLAWS.INSTALL_VERSION(id),
            { version }
        ),
    listFiles: (id: string): Promise<ClawFilesResponse> =>
        client.post<ClawFilesResponse>(apiPaths.CLAWS.FILES.BASE(id)),
    readFile: (id: string, path: string): Promise<ReadClawFileResponse> =>
        client.post<ReadClawFileResponse>(apiPaths.CLAWS.FILES.READ(id), {
            path
        }),
    updateFile: (id: string, data: UpdateClawFileData): Promise<void> =>
        client.put<void>(apiPaths.CLAWS.FILES.BASE(id), data),
    checkSubdomain: (subdomain: string): Promise<CheckSubdomainResponse> =>
        client.get<CheckSubdomainResponse>(
            `${apiPaths.CLAWS.CHECK_SUBDOMAIN}?subdomain=${encodeURIComponent(subdomain)}`
        ),
    getProfile: (): Promise<UserProfile> =>
        client.get<UserProfile>(apiPaths.USERS.ME),
    updateProfile: (data: UpdateProfileData): Promise<UserProfile> =>
        client.put<UserProfile>(apiPaths.USERS.ME, data),
    getUserStats: (): Promise<UserStats> =>
        client.get<UserStats>(apiPaths.USERS.STATS),
    getBillingHistory: (
        page: number = 1,
        limit: number = 10
    ): Promise<BillingHistoryResponse> =>
        client.get<BillingHistoryResponse>(
            `${apiPaths.USERS.BILLING}?page=${page}&limit=${limit}`
        ),
    getOrderInvoice: (orderId: string): Promise<BillingInvoiceResponse> =>
        client.get<BillingInvoiceResponse>(
            apiPaths.USERS.ORDER_INVOICE(orderId)
        ),
    getCustomerPortal: (): Promise<CustomerPortalResponse> =>
        client.post<CustomerPortalResponse>(apiPaths.USERS.BILLING_PORTAL),
    getLocations: (provider?: string): Promise<Location[]> =>
        client.get<Location[]>(
            `${apiPaths.PLANS.LOCATIONS}${provider ? `?provider=${provider}` : ''}`
        ),
    getVolumePricing: (provider?: string): Promise<VolumePricing> =>
        client.get<VolumePricing>(
            `${apiPaths.PLANS.VOLUME_PRICING}${provider ? `?provider=${provider}` : ''}`
        ),
    getPlanAvailability: (provider?: string): Promise<PlanAvailability> =>
        client.get<PlanAvailability>(
            `${apiPaths.PLANS.AVAILABILITY}${provider ? `?provider=${provider}` : ''}`
        ),
    getSSHKeys: (): Promise<SSHKey[]> =>
        client.get<SSHKey[]>(apiPaths.SSH_KEYS.BASE),
    createSSHKey: (data: CreateSSHKeyData): Promise<SSHKey> =>
        client.post<SSHKey>(apiPaths.SSH_KEYS.BASE, data),
    deleteSSHKey: (id: string): Promise<void> =>
        client.delete<void>(apiPaths.SSH_KEYS.byId(id)),
    purchaseClaw: (data: PurchaseClawData): Promise<PurchaseClawResponse> =>
        client.post<PurchaseClawResponse>(apiPaths.CLAWS.PURCHASE, data)
}

export default api