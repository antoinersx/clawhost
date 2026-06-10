import createApiMutation from '@/hooks/createApiMutation'
import usePageVisibility from '@/hooks/usePageVisibility'

import {
    useAdminAnalytics,
    useAdminBillingList,
    useAdminAgentsList,
    useAdminEmailsList,
    useAdminPendingAgentsList,
    useAdminReferralsList,
    useAdminSSHKeysList,
    useAdminStats,
    useAdminUsers,
    useAdminUserDetail,
    useAdminVolumesList,
    useUpdateAdminUser
} from '@/hooks/useAdmin'

import {
    useAffiliate,
    useGenerateReferralCode,
    useUpdateReferralCode,
    AFFILIATE_QUERY_KEY
} from '@/hooks/useAffiliate'

import {
    useAgents,
    useAgentStars,
    useAdminAgents,
    usePurchaseAgent,
    useStartAgent,
    useStopAgent,
    useRestartAgent,
    useDeleteAgent,
    useCancelDeletion,
    useHardDeleteAgent,
    useAgentDiagnostics,
    useAgentLogs,
    useRepairAgent,
    useAgentFiles,
    useAgentFile,
    useUpdateAgentFile,
    useReinstallAgent,
    useAgentVersion,
    useCancelPendingAgent,
    AGENTS_QUERY_KEY,
    AGENT_FILE_QUERY_KEY,
    AGENT_VERSION_QUERY_KEY,
    AGENT_VERSIONS_QUERY_KEY,
    useAgentMetrics,
    useAgentOverview,
    useAgentCredentials,
    useAgentBilling,
    useRotatePassword,
    useRotateGatewayToken,
    useUpdateAgentSSHKey,
    useExportAgent
} from '@/hooks/useAgents'

import {
    useSSHKeys,
    useCreateSSHKey,
    useDeleteSSHKey
} from '@/hooks/useSSHKeys'

import {
    useProfile,
    useUpdateProfile,
    useUserStats,
    PROFILE_QUERY_KEY,
    USER_STATS_QUERY_KEY
} from '@/hooks/useUser'

import {
    useLocations,
    useVolumePricing,
    usePlanAvailability
} from '@/hooks/usePlans'

import { useGitHubStars, GITHUB_REPO_URL } from '@/hooks/useGitHubStars'

import useAgentCardActions from '@/hooks/useAgentCardActions'
import useScrollToBottom from '@/hooks/useScrollToBottom'
import { useCountUp } from '@/hooks/useCountUp'
import useDebouncedValue from '@/hooks/useDebouncedValue'
import useNetworkStatus from '@/hooks/useNetworkStatus'
import useThemeEffect from '@/hooks/useThemeEffect'
import useLanguageEffect from '@/hooks/useLanguageEffect'
import useAppVersion from '@/hooks/useAppVersion'
import useLocalFooterLinks from '@/hooks/useLocalFooterLinks'
import useRefer from '@/hooks/useRefer'
import useRoutePrefetch from '@/hooks/useRoutePrefetch'
import useInfiniteScrollObserver from '@/hooks/useInfiniteScrollObserver'
import usePaginationState from '@/hooks/usePaginationState'
import useURLStateRestoration from '@/hooks/useURLStateRestoration'
import useAgentSettingsForm from '@/hooks/useAgentSettingsForm'
import useLinkedProvider from '@/hooks/useLinkedProvider'
import useToast from '@/hooks/useToast'
import useCopyWithFeedback from '@/hooks/useCopyWithFeedback'
import useCreateAgentForm from '@/hooks/useCreateAgentForm'
import useCustomerPortal from '@/hooks/useCustomerPortal'
import useTerminalConnection from '@/hooks/useTerminalConnection'
import useVideoSync from '@/hooks/useVideoSync'
import useDitherHover from '@/hooks/useDitherHover'
import useAbortController from '@/hooks/useAbortController'
import useDetectedOS from '@/hooks/useDetectedOS'
import useDeviceInfo from '@/hooks/useDeviceInfo'
import useGoBinaryDownload from '@/hooks/useGoBinaryDownload'
import useMacArch from '@/hooks/useMacArch'

export {
    createApiMutation,
    usePageVisibility,
    useAdminAnalytics,
    useAdminBillingList,
    useAdminAgentsList,
    useAdminEmailsList,
    useAdminPendingAgentsList,
    useAdminReferralsList,
    useAdminSSHKeysList,
    useAdminStats,
    useAdminUsers,
    useAdminUserDetail,
    useAdminVolumesList,
    useUpdateAdminUser,
    useAffiliate,
    useGenerateReferralCode,
    useUpdateReferralCode,
    AFFILIATE_QUERY_KEY,
    useAgents,
    useAgentStars,
    useAdminAgents,
    usePurchaseAgent,
    useStartAgent,
    useStopAgent,
    useRestartAgent,
    useDeleteAgent,
    useCancelDeletion,
    useHardDeleteAgent,
    useAgentDiagnostics,
    useAgentLogs,
    useRepairAgent,
    useAgentFiles,
    useAgentFile,
    useUpdateAgentFile,
    useReinstallAgent,
    useAgentVersion,
    useCancelPendingAgent,
    AGENTS_QUERY_KEY,
    AGENT_FILE_QUERY_KEY,
    AGENT_VERSION_QUERY_KEY,
    AGENT_VERSIONS_QUERY_KEY,
    useAgentMetrics,
    useAgentOverview,
    useAgentCredentials,
    useAgentBilling,
    useRotatePassword,
    useRotateGatewayToken,
    useUpdateAgentSSHKey,
    useExportAgent,
    useSSHKeys,
    useCreateSSHKey,
    useDeleteSSHKey,
    useProfile,
    useUpdateProfile,
    useUserStats,
    PROFILE_QUERY_KEY,
    USER_STATS_QUERY_KEY,
    useLocations,
    useVolumePricing,
    usePlanAvailability,
    useGitHubStars,
    GITHUB_REPO_URL,
    useAgentCardActions,
    useCountUp,
    useDebouncedValue,
    useNetworkStatus,
    useScrollToBottom,
    useThemeEffect,
    useLanguageEffect,
    useAppVersion,
    useLocalFooterLinks,
    useRefer,
    useRoutePrefetch,
    useInfiniteScrollObserver,
    usePaginationState,
    useURLStateRestoration,
    useAgentSettingsForm,
    useLinkedProvider,
    useToast,
    useCopyWithFeedback,
    useCreateAgentForm,
    useCustomerPortal,
    useTerminalConnection,
    useVideoSync,
    useDitherHover,
    useAbortController,
    useDetectedOS,
    useDeviceInfo,
    useGoBinaryDownload,
    useMacArch
}