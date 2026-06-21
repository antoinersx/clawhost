import type { StatusConfig } from '@/ts/Interfaces'

import { t } from '@openclaw/i18n'
import { agentStatus } from '@openclaw/shared'
import { COLORS } from '@/lib/theme'

const getStatusConfig = (): Record<string, StatusConfig> => {
    return {
        [agentStatus.running]: {
            color: COLORS.statusRunning,
            bgColor: COLORS.statusRunningBg,
            label: t('dashboard.status.running')
        },
        [agentStatus.stopped]: {
            color: COLORS.statusStopped,
            bgColor: COLORS.statusStoppedBg,
            label: t('dashboard.status.stopped')
        },
        [agentStatus.starting]: {
            color: COLORS.statusStarting,
            bgColor: COLORS.statusStartingBg,
            label: t('dashboard.status.starting'),
            pulse: true
        },
        [agentStatus.stopping]: {
            color: COLORS.statusStarting,
            bgColor: COLORS.statusStartingBg,
            label: t('dashboard.status.stopping'),
            pulse: true
        },
        [agentStatus.creating]: {
            color: COLORS.statusCreating,
            bgColor: COLORS.statusCreatingBg,
            label: t('dashboard.status.creating'),
            pulse: true
        },
        [agentStatus.configuring]: {
            color: COLORS.statusCreating,
            bgColor: COLORS.statusCreatingBg,
            label: t('dashboard.status.configuring'),
            pulse: true
        },
        [agentStatus.initializing]: {
            color: COLORS.statusCreating,
            bgColor: COLORS.statusCreatingBg,
            label: t('dashboard.status.initializing'),
            pulse: true
        },
        [agentStatus.migrating]: {
            color: COLORS.statusMigrating,
            bgColor: COLORS.statusMigratingBg,
            label: t('dashboard.status.migrating'),
            pulse: true
        },
        [agentStatus.rebuilding]: {
            color: COLORS.statusRebuilding,
            bgColor: COLORS.statusRebuildingBg,
            label: t('dashboard.status.rebuilding'),
            pulse: true
        },
        [agentStatus.restarting]: {
            color: COLORS.statusStarting,
            bgColor: COLORS.statusStartingBg,
            label: t('dashboard.status.restarting'),
            pulse: true
        },
        [agentStatus.unreachable]: {
            color: COLORS.statusDeleting,
            bgColor: COLORS.statusDeletingBg,
            label: t('dashboard.status.unreachable')
        },
        [agentStatus.deleting]: {
            color: COLORS.statusDeleting,
            bgColor: COLORS.statusDeletingBg,
            label: t('dashboard.status.deleting'),
            pulse: true
        },
        [agentStatus.unknown]: {
            color: COLORS.statusStopped,
            bgColor: COLORS.statusStoppedBg,
            label: t('dashboard.status.unknown')
        }
    }
}

export default getStatusConfig