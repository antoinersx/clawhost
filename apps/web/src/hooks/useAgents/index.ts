import AGENTS_QUERY_KEY from '@/hooks/useAgents/AGENTS_QUERY_KEY'
import ADMIN_AGENTS_QUERY_KEY from '@/hooks/useAgents/ADMIN_AGENTS_QUERY_KEY'
import AGENT_VERSION_QUERY_KEY from '@/hooks/useAgents/AGENT_VERSION_QUERY_KEY'
import AGENT_FILE_QUERY_KEY from '@/hooks/useAgents/AGENT_FILE_QUERY_KEY'
import AGENT_FILES_QUERY_KEY from '@/hooks/useAgents/AGENT_FILES_QUERY_KEY'
import AGENT_VERSIONS_QUERY_KEY from '@/hooks/useAgents/AGENT_VERSIONS_QUERY_KEY'
import AGENT_LOGS_QUERY_KEY from '@/hooks/useAgents/AGENT_LOGS_QUERY_KEY'
import AGENT_BILLING_QUERY_KEY from '@/hooks/useAgents/AGENT_BILLING_QUERY_KEY'
import AGENT_OVERVIEW_QUERY_KEY from '@/hooks/useAgents/AGENT_OVERVIEW_QUERY_KEY'
import AGENT_METRICS_QUERY_KEY from '@/hooks/useAgents/AGENT_METRICS_QUERY_KEY'
import AGENT_DIAGNOSTICS_QUERY_KEY from '@/hooks/useAgents/AGENT_DIAGNOSTICS_QUERY_KEY'
import AGENT_STARS_QUERY_KEY from '@/hooks/useAgents/AGENT_STARS_QUERY_KEY'
import updateAgentInCaches from '@/hooks/useAgents/updateAgentInCaches'
import removeAgentFromCaches from '@/hooks/useAgents/removeAgentFromCaches'
import createAgentLifecycleMutation from '@/hooks/useAgents/createAgentLifecycleMutation'
import useAgents from '@/hooks/useAgents/useAgents'
import useAgentStars from '@/hooks/useAgents/useAgentStars'
import useAdminAgents from '@/hooks/useAgents/useAdminAgents'
import usePurchaseAgent from '@/hooks/useAgents/usePurchaseAgent'
import useStartAgent from '@/hooks/useAgents/useStartAgent'
import useStopAgent from '@/hooks/useAgents/useStopAgent'
import useRestartAgent from '@/hooks/useAgents/useRestartAgent'
import useDeleteAgent from '@/hooks/useAgents/useDeleteAgent'
import useCancelDeletion from '@/hooks/useAgents/useCancelDeletion'
import useHardDeleteAgent from '@/hooks/useAgents/useHardDeleteAgent'
import useAgentDiagnostics from '@/hooks/useAgents/useAgentDiagnostics'
import useAgentLogs from '@/hooks/useAgents/useAgentLogs'
import useRepairAgent from '@/hooks/useAgents/useRepairAgent'
import useAgentFiles from '@/hooks/useAgents/useAgentFiles'
import useAgentFile from '@/hooks/useAgents/useAgentFile'
import useUpdateAgentFile from '@/hooks/useAgents/useUpdateAgentFile'
import useReinstallAgent from '@/hooks/useAgents/useReinstallAgent'
import useAgentVersion from '@/hooks/useAgents/useAgentVersion'
import useUpdateAgentEmoji from '@/hooks/useAgents/useUpdateAgentEmoji'
import useCancelPendingAgent from '@/hooks/useAgents/useCancelPendingAgent'
import useAgentMetrics from '@/hooks/useAgents/useAgentMetrics'
import useAgentOverview from '@/hooks/useAgents/useAgentOverview'
import useAgentCredentials from '@/hooks/useAgents/useAgentCredentials'
import useAgentBilling from '@/hooks/useAgents/useAgentBilling'
import useRotatePassword from '@/hooks/useAgents/useRotatePassword'
import useRotateGatewayToken from '@/hooks/useAgents/useRotateGatewayToken'
import useUpdateAgentSSHKey from '@/hooks/useAgents/useUpdateAgentSSHKey'
import useRenameAgent from '@/hooks/useAgents/useRenameAgent'
import useUpdateAgentSubdomain from '@/hooks/useAgents/useUpdateAgentSubdomain'
import useExportAgent from '@/hooks/useAgents/useExportAgent'

export {
    AGENTS_QUERY_KEY,
    ADMIN_AGENTS_QUERY_KEY,
    AGENT_VERSION_QUERY_KEY,
    AGENT_FILE_QUERY_KEY,
    AGENT_FILES_QUERY_KEY,
    AGENT_VERSIONS_QUERY_KEY,
    AGENT_LOGS_QUERY_KEY,
    AGENT_BILLING_QUERY_KEY,
    AGENT_OVERVIEW_QUERY_KEY,
    AGENT_METRICS_QUERY_KEY,
    AGENT_DIAGNOSTICS_QUERY_KEY,
    AGENT_STARS_QUERY_KEY,
    updateAgentInCaches,
    removeAgentFromCaches,
    createAgentLifecycleMutation,
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
    useUpdateAgentEmoji,
    useCancelPendingAgent,
    useAgentMetrics,
    useAgentOverview,
    useAgentCredentials,
    useAgentBilling,
    useRotatePassword,
    useRotateGatewayToken,
    useUpdateAgentSSHKey,
    useRenameAgent,
    useUpdateAgentSubdomain,
    useExportAgent
}