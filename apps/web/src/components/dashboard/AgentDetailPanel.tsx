import type { FC, ReactNode } from 'react'
import type { AgentDetailPanelProps } from '@/ts/Interfaces'
import type { AgentDetailTab } from '@/ts/Types'

import {
    Fragment,
    Suspense,
    lazy,
    useCallback,
    useMemo,
    useEffect,
    useState
} from 'react'
import { motion } from 'framer-motion'
import { useQuery } from '@tanstack/react-query'
import { t } from '@openclaw/i18n'
import { agentStatus, agentType, UNKNOWN_VERSION } from '@openclaw/shared'
import { useAuth } from '@/lib/auth'
import { AGENT_DETAIL_TABS } from '@/lib/constants'
import {
    AgentLogsContent,
    AgentOverviewContent,
    AgentVolumesContent,
    AgentSecurityContent,
    AgentBillingContent,
    AgentServerContent,
    AgentPreviewContent,
    AgentDetailSettingsTab,
    AgentDetailHeader,
    AgentDetailTabBar,
    AgentPendingView,
    UpdateAvailableBanner,
    DemoTerminal
} from '@/components/dashboard'
import {
    useAgentVersion,
    useAgentSettingsForm,
    useCancelPendingAgent,
    AGENT_VERSIONS_QUERY_KEY
} from '@/hooks'
import { api } from '@/lib'
import { useAgentDetailTabStore } from '@/lib/store'

const AgentTerminalContent = lazy(
    () => import('@/components/dashboard/AgentTerminalContent')
)
const AgentMonitorContent = lazy(
    () =>
        import('@/components/dashboard/AgentMonitorContent/AgentMonitorContent')
)
const AgentConfigContent = lazy(
    () => import('@/components/dashboard/AgentConfigDialog/AgentConfigContent')
)
const AgentVersionsContent = lazy(
    () => import('@/components/dashboard/AgentVersionsContent')
)

const TabFallback: FC = (): ReactNode => (
    <div className='flex flex-1 items-center justify-center p-8'>
        <div className='border-primary h-5 w-5 animate-spin rounded-full border-2 border-t-transparent' />
    </div>
)

const AgentDetailPanel: FC<AgentDetailPanelProps> = ({
    agent,
    plans,
    sshKeys,
    onClose,
    readOnly,
    initialTab,
    onTabChange,
    fullScreen
}): ReactNode => {
    const isPending =
        agent.status === agentStatus.configuring ||
        agent.status === agentStatus.creating ||
        agent.status === agentStatus.awaitingPayment
    const cancelPending = useCancelPendingAgent()
    const { isLocal } = useAuth()
    const isHermes = agent.agentType === agentType.HERMES
    const hiddenTabs = useMemo<AgentDetailTab[]>(() => {
        const hidden: AgentDetailTab[] = []
        if (isHermes) {
            hidden.push(AGENT_DETAIL_TABS.PREVIEW, AGENT_DETAIL_TABS.OVERVIEW)
        }
        if (isLocal)
            hidden.push(
                AGENT_DETAIL_TABS.BILLING,
                AGENT_DETAIL_TABS.VOLUMES,
                AGENT_DETAIL_TABS.MONITOR,
                AGENT_DETAIL_TABS.SERVER
            )
        return hidden
    }, [isHermes, isLocal])
    const defaultTab = isHermes
        ? AGENT_DETAIL_TABS.TERMINAL
        : AGENT_DETAIL_TABS.OVERVIEW
    const tabStateMap = useAgentDetailTabStore((s) => s.tabStateMap)
    const setTab = useAgentDetailTabStore((s) => s.setTab)
    const storedTab = tabStateMap[agent.id] || defaultTab
    const activeTab = hiddenTabs.includes(storedTab) ? defaultTab : storedTab
    const setActiveTab = useCallback(
        (tab: AgentDetailTab) => {
            if (hiddenTabs.includes(tab)) return
            setTab(agent.id, tab)
            if (onTabChange) onTabChange(tab)
        },
        [agent.id, hiddenTabs, onTabChange, setTab]
    )
    useEffect(() => {
        if (
            initialTab &&
            initialTab !== tabStateMap[agent.id] &&
            !hiddenTabs.includes(initialTab)
        )
            setTab(agent.id, initialTab)
    }, [initialTab, agent.id, tabStateMap, setTab, hiddenTabs])
    useEffect(() => {
        if (hiddenTabs.includes(storedTab)) setTab(agent.id, defaultTab)
    }, [storedTab, hiddenTabs, defaultTab, agent.id, setTab])

    const [terminalMounted, setTerminalMounted] = useState(false)
    useEffect(() => {
        if (activeTab === AGENT_DETAIL_TABS.TERMINAL && !readOnly)
            setTerminalMounted(true)
    }, [activeTab, readOnly])
    const terminalActive = activeTab === AGENT_DETAIL_TABS.TERMINAL

    const {
        settingsEmoji,
        settingsEmojiColor,
        settingsName,
        settingsNameError,
        settingsSubdomain,
        settingsSubdomainError,
        settingsHasChanges,
        renamePending,
        subdomainPending,
        emojiPending,
        handleEmojiChange,
        handleSettingsNameChange,
        handleSettingsSubdomainChange,
        handleSettingsSave
    } = useAgentSettingsForm(agent)

    const canQuery = !readOnly && !!agent.ip && !isPending
    const versionQuery = useAgentVersion(agent.id, canQuery)
    const versionsQuery = useQuery({
        queryKey: [...AGENT_VERSIONS_QUERY_KEY, agent.id],
        queryFn: () => api.getAgentVersions(agent.id),
        enabled: canQuery,
        staleTime: 1000 * 60 * 30,
        retry: 1
    })
    const latestVersion = versionsQuery.data?.latestVersion ?? null
    const versionDisplay = useMemo(() => {
        if (versionQuery.isLoading) return null
        if (versionQuery.isError || !versionQuery.data) return null
        if (versionQuery.data.version === UNKNOWN_VERSION) return null
        return versionQuery.data.version
    }, [versionQuery.isLoading, versionQuery.isError, versionQuery.data])
    const isOutdated =
        !!versionDisplay && !!latestVersion && versionDisplay !== latestVersion

    const handleCancelPending = useCallback(() => {
        cancelPending.mutate(agent.id.replace('pending-', ''))
        onClose()
    }, [cancelPending, agent.id, onClose])

    const Wrapper = fullScreen ? 'div' : motion.div
    const wrapperProps = fullScreen
        ? { className: 'flex h-full w-full flex-col overflow-hidden' }
        : {
              initial: { x: '100%' },
              animate: { x: 0 },
              exit: { x: '100%' },
              transition: { type: 'tween', duration: 0.2 },
              className:
                  'fixed inset-0 z-40 overflow-hidden md:relative md:inset-auto md:z-auto md:h-full md:w-[380px] md:shrink-0'
          }

    return (
        <Wrapper {...(wrapperProps as Record<string, unknown>)}>
            <div
                className={`flex h-full w-full flex-col ${fullScreen ? 'bg-background' : 'bg-background md:border-border md:bg-background/95 md:border-l md:backdrop-blur-xl'}`}
            >
                <AgentDetailHeader
                    agent={agent}
                    onClose={onClose}
                    fullScreen={fullScreen}
                    versionDisplay={versionDisplay}
                    versionLoading={versionQuery.isLoading}
                    readOnly={readOnly}
                />

                {isPending ? (
                    <AgentPendingView
                        status={agent.status}
                        agentType={agent.agentType}
                        checkoutUrl={agent.checkoutUrl}
                        onCancel={
                            agent.status === agentStatus.awaitingPayment
                                ? handleCancelPending
                                : undefined
                        }
                        cancelPending={cancelPending.isPending}
                        isLocal={!!isLocal}
                    />
                ) : (
                    <Fragment>
                        <AgentDetailTabBar
                            activeTab={activeTab}
                            fullScreen={fullScreen}
                            hiddenTabs={hiddenTabs}
                            setActiveTab={setActiveTab}
                        />

                        <div className='flex min-h-0 flex-1 flex-col overflow-hidden'>
                            {isOutdated &&
                                latestVersion &&
                                activeTab !== AGENT_DETAIL_TABS.VERSIONS && (
                                    <UpdateAvailableBanner
                                        latestVersion={latestVersion}
                                        agentType={agent.agentType}
                                        onGoToVersions={() =>
                                            setActiveTab(
                                                AGENT_DETAIL_TABS.VERSIONS
                                            )
                                        }
                                    />
                                )}

                            {activeTab === AGENT_DETAIL_TABS.OVERVIEW && (
                                <AgentOverviewContent
                                    agentId={agent.id}
                                    agentType={agent.agentType}
                                    readOnly={readOnly}
                                    onSwitchToTerminal={() =>
                                        setActiveTab(AGENT_DETAIL_TABS.TERMINAL)
                                    }
                                />
                            )}

                            {activeTab === AGENT_DETAIL_TABS.PREVIEW && (
                                <AgentPreviewContent
                                    agent={agent}
                                    readOnly={readOnly}
                                />
                            )}

                            {activeTab === AGENT_DETAIL_TABS.LOGS && (
                                <AgentLogsContent
                                    agentId={agent.id}
                                    agentType={agent.agentType}
                                    enabled
                                    embedded
                                    mockLogs={
                                        readOnly
                                            ? t('clawDetail.mockLogsContent', {
                                                  starting: t(
                                                      'clawDetail.mockLogStarting'
                                                  ),
                                                  loadingModel: t(
                                                      'clawDetail.mockLogLoadingModel'
                                                  ),
                                                  agentReady: t(
                                                      'clawDetail.mockLogAgentReady'
                                                  ),
                                                  connected: t(
                                                      'clawDetail.mockLogConnected'
                                                  ),
                                                  requestReceived: t(
                                                      'clawDetail.mockLogRequestReceived'
                                                  ),
                                                  responseSent1: t(
                                                      'clawDetail.mockLogResponseSent1'
                                                  ),
                                                  responseSent2: t(
                                                      'clawDetail.mockLogResponseSent2'
                                                  ),
                                                  healthCheck: t(
                                                      'clawDetail.mockLogHealthCheck'
                                                  )
                                              })
                                            : undefined
                                    }
                                />
                            )}

                            {terminalActive && readOnly && <DemoTerminal />}
                            {!readOnly && terminalMounted && (
                                <div
                                    className={
                                        terminalActive
                                            ? 'flex min-h-0 flex-1 flex-col'
                                            : 'hidden'
                                    }
                                >
                                    <Suspense fallback={<TabFallback />}>
                                        <AgentTerminalContent
                                            agentId={agent.id}
                                            enabled={terminalActive}
                                        />
                                    </Suspense>
                                </div>
                            )}

                            {activeTab === AGENT_DETAIL_TABS.VERSIONS && (
                                <Suspense fallback={<TabFallback />}>
                                    <AgentVersionsContent
                                        agentId={agent.id}
                                        agentType={agent.agentType}
                                        readOnly={readOnly}
                                    />
                                </Suspense>
                            )}

                            {activeTab === AGENT_DETAIL_TABS.FILES && (
                                <Suspense fallback={<TabFallback />}>
                                    <AgentConfigContent
                                        agentId={agent.id}
                                        readOnly={readOnly}
                                    />
                                </Suspense>
                            )}

                            {activeTab === AGENT_DETAIL_TABS.MONITOR && (
                                <Suspense fallback={<TabFallback />}>
                                    <AgentMonitorContent
                                        agentId={agent.id}
                                        readOnly={readOnly}
                                    />
                                </Suspense>
                            )}

                            {activeTab === AGENT_DETAIL_TABS.VOLUMES && (
                                <AgentVolumesContent
                                    volumes={agent.volumes || []}
                                    readOnly={readOnly}
                                />
                            )}

                            {activeTab === AGENT_DETAIL_TABS.SECURITY && (
                                <AgentSecurityContent
                                    agent={agent}
                                    sshKeys={sshKeys}
                                    readOnly={readOnly}
                                />
                            )}

                            {activeTab === AGENT_DETAIL_TABS.BILLING && (
                                <AgentBillingContent
                                    agent={agent}
                                    plans={plans}
                                    readOnly={readOnly}
                                />
                            )}

                            {activeTab === AGENT_DETAIL_TABS.SERVER && (
                                <AgentServerContent
                                    agent={agent}
                                    plans={plans}
                                    readOnly={readOnly}
                                />
                            )}

                            {activeTab === AGENT_DETAIL_TABS.SETTINGS && (
                                <AgentDetailSettingsTab
                                    agent={agent}
                                    currentEmoji={settingsEmoji}
                                    currentEmojiColor={settingsEmojiColor}
                                    settingsName={settingsName}
                                    settingsNameError={settingsNameError}
                                    settingsSubdomain={settingsSubdomain}
                                    settingsSubdomainError={
                                        settingsSubdomainError
                                    }
                                    settingsHasChanges={settingsHasChanges}
                                    renamePending={renamePending}
                                    subdomainPending={subdomainPending}
                                    emojiPending={emojiPending}
                                    onNameChange={handleSettingsNameChange}
                                    onSubdomainChange={
                                        handleSettingsSubdomainChange
                                    }
                                    onEmojiChange={handleEmojiChange}
                                    onSave={handleSettingsSave}
                                    readOnly={readOnly}
                                />
                            )}
                        </div>
                    </Fragment>
                )}
            </div>
        </Wrapper>
    )
}

export default AgentDetailPanel