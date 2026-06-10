import type { FC, ReactNode } from 'react'
import type { Agent, ElectronWindow } from '@/ts/Interfaces'

import { useState, useEffect, useMemo, useCallback } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { t } from '@openclaw/i18n'
import { userRole, PLANS } from '@openclaw/shared'
import {
    useUIStore,
    usePreferencesStore,
    useDashboardStore,
    useCreatingAgentsStore
} from '@/lib/store'
import { TOAST_TYPE } from '@/lib/constants'
import { ROUTES, AGENT_DETAIL_TABS } from '@/lib'
import { tabs as agentDetailTabs } from '@/lib/agentDetailTabs'
import {
    useAgents,
    useAdminAgents,
    useSSHKeys,
    useLocations,
    useVolumePricing,
    usePlanAvailability,
    useProfile,
    useNetworkStatus,
    useURLStateRestoration
} from '@/hooks'
import { ErrorState, NetworkStatus, PageTitle } from '@/components'
import {
    CreateAgentModal,
    DashboardChatView,
    DashboardHeader,
    DashboardLoadingState
} from '@/components/dashboard'
import { useAuth } from '@/lib/auth'

const PAYMENT_PARAM = 'payment'
const PAYMENT_SUCCESS_VALUE = 'success'

const Dashboard: FC = (): ReactNode => {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const [awaitingAgent, setAwaitingAgent] = useState(
        () => searchParams.get(PAYMENT_PARAM) === PAYMENT_SUCCESS_VALUE
    )
    const {
        chatSettingsAgentId,
        setChatSettingsAgentId,
        chatAgentTab,
        setChatAgentTab,
        showCreate,
        setShowCreate,
        preselectedPlanId,
        setPreselectedPlanId
    } = useDashboardStore()
    const { showToast } = useUIStore()
    const { adminMode: adminModeRaw } = usePreferencesStore()

    const [minLoadingMet, setMinLoadingMet] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setMinLoadingMet(true), 1500)
        return () => clearTimeout(timer)
    }, [])

    const {
        user,
        loading: authLoading,
        cachedProfile,
        signOut,
        isLocal
    } = useAuth()
    const { data: profile } = useProfile({
        enabled: !!user,
        staleTime: 1000 * 60 * 5
    })
    const isOffline = useNetworkStatus()
    const isAdmin = profile?.role === userRole.admin
    const adminMode = !!isAdmin && adminModeRaw

    const [dnsSetup, setDnsSetup] = useState<boolean | null>(null)
    const [dnsLoading, setDnsLoading] = useState(false)

    useEffect(() => {
        if (!isLocal) return
        const api = (window as unknown as ElectronWindow).electronAPI
        if (!api?.getDnsStatus) return
        const refresh = () => api.getDnsStatus!().then(setDnsSetup)
        refresh()
        const onFocus = () => refresh()
        window.addEventListener('focus', onFocus)
        return () => window.removeEventListener('focus', onFocus)
    }, [isLocal])

    const handleDnsSetup = useCallback(async () => {
        const api = (window as unknown as ElectronWindow).electronAPI
        if (!api?.setupDns) return
        setDnsLoading(true)
        try {
            const success = await api.setupDns()
            if (success) {
                setDnsSetup(true)
                showToast(t('dashboard.dnsSetupSuccess'), TOAST_TYPE.SUCCESS)
            } else {
                showToast(t('dashboard.dnsSetupError'), TOAST_TYPE.ERROR)
            }
        } catch {
            showToast(t('dashboard.dnsSetupError'), TOAST_TYPE.ERROR)
        }
        setDnsLoading(false)
    }, [showToast])

    const displayName =
        profile?.name ||
        cachedProfile?.name ||
        (isLocal
            ? t('account.noNameSet')
            : user?.email || cachedProfile?.email || '')

    useURLStateRestoration({
        searchParams,
        setSearchParams,
        chatSettingsAgentId,
        setChatSettingsAgentId,
        chatAgentTab,
        setChatAgentTab,
        setShowCreate,
        setPreselectedPlanId,
        showToast,
        awaitingAgent
    })

    const {
        data: agents,
        isLoading: isAgentsLoading,
        isError,
        refetch
    } = useAgents()
    const {
        data: adminAgents,
        isLoading: isAdminAgentsLoading,
        isError: isAdminAgentsError,
        refetch: refetchAdmin
    } = useAdminAgents(adminMode)

    useEffect(() => {
        if (awaitingAgent && !isAgentsLoading) {
            setAwaitingAgent(false)
        }
    }, [awaitingAgent, isAgentsLoading])

    const creatingAgents = useCreatingAgentsStore((s) => s.creatingAgents)

    const displayedAgents = useMemo((): Agent[] => {
        const base = adminMode ? adminAgents || [] : agents || []
        if (creatingAgents.length === 0) return base
        const baseNames = new Set(base.map((a) => a.name.toLowerCase()))
        const stillCreating = creatingAgents.filter(
            (c) => !baseNames.has(c.name.toLowerCase())
        )
        return [...base, ...stillCreating]
    }, [agents, adminMode, adminAgents, creatingAgents])

    const hetznerPlans = PLANS
    const plans = [...hetznerPlans]
    const { data: locations } = useLocations()
    const { data: sshKeys } = useSSHKeys()
    const { data: volumePricing } = useVolumePricing()
    const { data: planAvailability } = usePlanAvailability()

    const activeAgentsLoading = adminMode
        ? isAdminAgentsLoading
        : isAgentsLoading
    const activeIsError = adminMode ? isAdminAgentsError : isError
    const activeRefetch = adminMode ? refetchAdmin : refetch
    const isLoading =
        authLoading || activeAgentsLoading || (!awaitingAgent && !minLoadingMet)

    const selectedAgent = useMemo(
        () =>
            chatSettingsAgentId
                ? displayedAgents.find((c) => c.id === chatSettingsAgentId)
                : null,
        [chatSettingsAgentId, displayedAgents]
    )

    const pageTitle = useMemo(() => {
        if (!selectedAgent) return t('dashboard.title')
        const tabConfig =
            chatAgentTab && chatAgentTab !== AGENT_DETAIL_TABS.OVERVIEW
                ? agentDetailTabs.find((tab) => tab.id === chatAgentTab)
                : null
        const tabLabel = tabConfig
            ? ` ${t(tabConfig.label as Parameters<typeof t>[0])}`
            : ''
        return `${selectedAgent.name}${tabLabel}`
    }, [selectedAgent, chatAgentTab])

    const chatEmpty =
        !isLoading && !activeIsError && displayedAgents.length === 0
    const showFullBackground = chatEmpty || activeIsError || isLoading

    const handleCreateClick = useCallback(() => {
        setShowCreate(true)
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className={`bg-background text-foreground fixed inset-0 flex flex-col ${showFullBackground && !isLocal ? 'playground-grid' : ''}`}
        >
            {isOffline && <NetworkStatus />}
            {isLocal && showFullBackground && (
                <div className='playground-grid pointer-events-none fixed inset-0 opacity-50' />
            )}
            <div
                className={`playground-gradient pointer-events-none fixed inset-0 ${isLocal || (!isLoading && !activeIsError && displayedAgents.length > 0) ? 'opacity-30' : ''}`}
            />
            <PageTitle
                title={pageTitle}
                description={t('dashboard.description')}
                noIndex
            />

            <DashboardHeader
                isLocal={!!isLocal}
                isLoading={isLoading}
                displayedAgents={displayedAgents}
                displayName={displayName}
                dnsSetup={dnsSetup}
                dnsLoading={dnsLoading}
                onCreateClick={handleCreateClick}
                onDnsSetup={handleDnsSetup}
                onSignOut={signOut}
            />

            <div className='flex flex-1 overflow-hidden'>
                {activeIsError ? (
                    <div className='flex h-full min-w-0 flex-1 items-center justify-center'>
                        <div className='-mt-20'>
                            <ErrorState
                                title={t('errors.failedToLoadAgents')}
                                description={t(
                                    'errors.failedToLoadAgentsDescription'
                                )}
                                onRetry={() => activeRefetch()}
                            />
                        </div>
                    </div>
                ) : isLoading ? (
                    <div className='flex h-full min-w-0 flex-1 items-center justify-center'>
                        <DashboardLoadingState />
                    </div>
                ) : (
                    <DashboardChatView
                        displayedAgents={displayedAgents}
                        plans={plans}
                        sshKeys={sshKeys || []}
                        adminMode={adminMode}
                        chatSettingsAgentId={chatSettingsAgentId}
                        chatAgentTab={chatAgentTab}
                        onSettingsAgentChange={setChatSettingsAgentId}
                        onAgentTabChange={setChatAgentTab}
                        onCreateClick={handleCreateClick}
                    />
                )}
            </div>

            {showCreate && (isLocal || plans.length > 0) && (
                <CreateAgentModal
                    plans={plans}
                    locations={locations || []}
                    sshKeys={sshKeys || []}
                    volumePricing={volumePricing}
                    planAvailability={planAvailability}
                    preselectedPlanId={preselectedPlanId}
                    onClose={() => {
                        setShowCreate(false)
                        setPreselectedPlanId(null)
                    }}
                    onNavigateToSSHKeys={() => {
                        setShowCreate(false)
                        setPreselectedPlanId(null)
                        navigate(ROUTES.SSH_KEYS)
                    }}
                />
            )}
        </motion.div>
    )
}

export default Dashboard