import type { FC, ReactNode } from 'react'
import type { AgentCardDialogsBundleProps } from '@/ts/Interfaces'

import { Fragment } from 'react'
import {
    AgentCardDialogs,
    AgentCredentialsDialog,
    AgentDiagnosticsDialog,
    AgentLogsDialog
} from '@/components/dashboard'

const AgentCardDialogsBundle: FC<AgentCardDialogsBundleProps> = ({
    agentId,
    agentName,
    agentType,
    agentIp,
    showStartModal,
    setShowStartModal,
    showDeleteModal,
    setShowDeleteModal,
    showStopModal,
    setShowStopModal,
    showRestartModal,
    setShowRestartModal,
    showHardDeleteModal,
    setShowHardDeleteModal,
    showReinstallModal,
    setShowReinstallModal,
    showDiagnostics,
    setShowDiagnostics,
    showLogs,
    setShowLogs,
    showCredentials,
    setShowCredentials,
    credentialsPassword,
    onStart,
    onDelete,
    onStop,
    onRestart,
    onHardDelete,
    onReinstall,
    isStartPending,
    isDeletePending,
    isStopPending,
    isRestartPending,
    isHardDeletePending,
    isReinstallPending,
    showCancelDeletionModal,
    setShowCancelDeletionModal,
    onCancelDeletion,
    isCancelDeletionPending
}): ReactNode => {
    return (
        <Fragment>
            <AgentCardDialogs
                agentName={agentName}
                agentType={agentType}
                showStartModal={showStartModal}
                setShowStartModal={setShowStartModal}
                showDeleteModal={showDeleteModal}
                setShowDeleteModal={setShowDeleteModal}
                showStopModal={showStopModal}
                setShowStopModal={setShowStopModal}
                showRestartModal={showRestartModal}
                setShowRestartModal={setShowRestartModal}
                showHardDeleteModal={showHardDeleteModal}
                setShowHardDeleteModal={setShowHardDeleteModal}
                onStart={onStart}
                onDelete={onDelete}
                onStop={onStop}
                onRestart={onRestart}
                onHardDelete={onHardDelete}
                isStartPending={isStartPending}
                isDeletePending={isDeletePending}
                isStopPending={isStopPending}
                isRestartPending={isRestartPending}
                isHardDeletePending={isHardDeletePending}
                showReinstallModal={showReinstallModal}
                setShowReinstallModal={setShowReinstallModal}
                onReinstall={onReinstall}
                isReinstallPending={isReinstallPending}
                showCancelDeletionModal={showCancelDeletionModal}
                setShowCancelDeletionModal={setShowCancelDeletionModal}
                onCancelDeletion={onCancelDeletion}
                isCancelDeletionPending={isCancelDeletionPending}
            />
            <AgentDiagnosticsDialog
                agentId={agentId}
                open={showDiagnostics}
                onOpenChange={setShowDiagnostics}
            />
            <AgentLogsDialog
                agentId={agentId}
                agentType={agentType}
                open={showLogs}
                onOpenChange={setShowLogs}
            />
            <AgentCredentialsDialog
                agentIp={agentIp}
                rootPassword={credentialsPassword}
                open={showCredentials}
                onOpenChange={setShowCredentials}
            />
        </Fragment>
    )
}

export default AgentCardDialogsBundle