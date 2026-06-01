import type {
    AdminAnalyticsResponse,
    AdminBillingApiResponse,
    AdminAgentsResponse,
    AdminEmailListItem,
    AdminPaginatedResponse,
    AdminPendingAgentListItem,
    AdminReferralListItem,
    AdminSSHKeysResponse,
    AdminStats,
    AdminUserDetail,
    AdminUsersResponse,
    AdminVolumesResponse,
    UpdateAdminUserData
} from '@/ts/Interfaces'
import type { AdminAnalyticsRange } from '@/ts/Types'

import { apiPaths as API_PATHS } from '@openclaw/shared'
import { client } from '@/lib/api/client'
import buildAdminPaginatedQuery from '@/lib/api/buildAdminPaginatedQuery'

const admin = {
    getAdminStats: () => client.get<AdminStats>(API_PATHS.ADMIN.STATS),
    getAdminAnalytics: (range: AdminAnalyticsRange) =>
        client.get<AdminAnalyticsResponse>(
            `${API_PATHS.ADMIN.ANALYTICS}?range=${range}`
        ),
    listAdminBilling: async (page: number = 1, limit: number = 20) => {
        const qs = buildAdminPaginatedQuery({ page, limit })
        const res = await client.get<AdminBillingApiResponse>(
            `${API_PATHS.ADMIN.BILLING}?${qs}`
        )
        return { items: res.items, total: res.totalCount, maxPage: res.maxPage }
    },
    getAdminUsers: (
        page: number = 1,
        limit: number = 20,
        search?: string,
        hasAgents?: string,
        sort?: string
    ) =>
        client.get<AdminUsersResponse>(
            `${API_PATHS.ADMIN.USERS}?${buildAdminPaginatedQuery({ page, limit, search, sort, hasAgents })}`
        ),
    getAdminUserDetail: (id: string) =>
        client.get<AdminUserDetail>(API_PATHS.ADMIN.USER(id)),
    updateAdminUser: (id: string, data: UpdateAdminUserData) =>
        client.put<void>(API_PATHS.ADMIN.UPDATE_USER(id), data),
    listAdminAgents: (
        page: number = 1,
        limit: number = 20,
        search?: string,
        sort?: string
    ) =>
        client.get<AdminAgentsResponse>(
            `${API_PATHS.ADMIN.CLAWS}?${buildAdminPaginatedQuery({ page, limit, search, sort })}`
        ),
    listAdminSSHKeys: (
        page: number = 1,
        limit: number = 20,
        search?: string,
        sort?: string
    ) =>
        client.get<AdminSSHKeysResponse>(
            `${API_PATHS.ADMIN.SSH_KEYS}?${buildAdminPaginatedQuery({ page, limit, search, sort })}`
        ),
    listAdminVolumes: (page: number = 1, limit: number = 20, sort?: string) =>
        client.get<AdminVolumesResponse>(
            `${API_PATHS.ADMIN.VOLUMES}?${buildAdminPaginatedQuery({ page, limit, sort })}`
        ),
    listAdminPendingAgents: (
        page: number = 1,
        limit: number = 20,
        sort?: string
    ) =>
        client.get<AdminPaginatedResponse<AdminPendingAgentListItem>>(
            `${API_PATHS.ADMIN.PENDING_CLAWS}?${buildAdminPaginatedQuery({ page, limit, sort })}`
        ),
    listAdminReferrals: (page: number = 1, limit: number = 20, sort?: string) =>
        client.get<AdminPaginatedResponse<AdminReferralListItem>>(
            `${API_PATHS.ADMIN.REFERRALS}?${buildAdminPaginatedQuery({ page, limit, sort })}`
        ),
    listAdminEmails: (page: number = 1, limit: number = 20, sort?: string) =>
        client.get<AdminPaginatedResponse<AdminEmailListItem>>(
            `${API_PATHS.ADMIN.EMAILS}?${buildAdminPaginatedQuery({ page, limit, sort })}`
        )
}

export default admin