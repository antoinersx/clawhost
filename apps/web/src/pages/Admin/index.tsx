import type { FC, ReactNode } from 'react'
import type { AdminEntitySelection } from '@/ts/Interfaces'

import { Fragment, useState } from 'react'
import { Navigate, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { t } from '@openclaw/i18n'
import { userRole } from '@openclaw/shared'
import { useAuth } from '@/lib/auth'
import { ROUTES } from '@/lib'
import { useAdminStats, useProfile } from '@/hooks'
import {
    Header,
    LandingFooter,
    PageBackground,
    PageTitle,
    PageHeader
} from '@/components'
import {
    AdminAnalyticsTab,
    AdminBillingTab,
    AdminAgentsTab,
    AdminEmailsTab,
    AdminPendingAgentsTab,
    AdminReferralsTab,
    AdminSSHKeysTab,
    AdminDetailModal,
    AdminSettingsTab,
    AdminVolumesTab
} from '@/components/admin'
import {
    Skeleton,
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui'
import {
    UsersIcon,
    HardDrivesIcon,
    KeyIcon,
    DatabaseIcon,
    HandshakeIcon,
    HourglassIcon,
    EnvelopeIcon,
    ChartLineUpIcon,
    CreditCardIcon,
    GearSixIcon
} from '@phosphor-icons/react'
import AdminUserSkeleton from '@/pages/AdminUserSkeleton'
import { UsersTab } from '@/pages/Admin/tabs'

const ADMIN_TABS = {
    ANALYTICS: 'analytics',
    USERS: 'users',
    AGENTS: 'agents',
    PENDING_AGENTS: 'pending',
    SSH_KEYS: 'ssh-keys',
    VOLUMES: 'volumes',
    REFERRALS: 'referrals',
    EMAILS: 'emails',
    BILLING: 'billing',
    SETTINGS: 'settings'
}

const Admin: FC = (): ReactNode => {
    const { loading: authLoading } = useAuth()
    const { data: profile, isLoading: isProfileLoading } = useProfile()
    const [searchParams, setSearchParams] = useSearchParams()
    const tabParam = searchParams.get('tab') || ADMIN_TABS.ANALYTICS
    const validTabs = Object.values(ADMIN_TABS) as string[]
    const activeTab = validTabs.includes(tabParam)
        ? tabParam
        : ADMIN_TABS.ANALYTICS
    const [selectedEntity, setSelectedEntity] =
        useState<AdminEntitySelection | null>(null)
    const isAdmin = profile?.role === userRole.admin
    const { data: stats } = useAdminStats()

    const setActiveTab = (tab: string) => {
        setSearchParams({ tab })
    }

    if (!authLoading && !isProfileLoading && !isAdmin)
        return <Navigate to={ROUTES.AGENTS} replace />

    const isPageLoading = authLoading || isProfileLoading

    return (
        <div className='bg-background text-foreground relative flex min-h-screen flex-col'>
            <PageTitle
                title={t('admin.title')}
                description={t('admin.description')}
                noIndex
            />
            <PageBackground />
            <Header />

            <motion.main
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className='relative mx-auto w-full max-w-6xl flex-1 px-4 pb-16 pt-8 sm:px-6'
            >
                {isPageLoading ? (
                    <Fragment>
                        <div className='mb-2 space-y-2'>
                            <Skeleton className='h-8 w-48' />
                            <Skeleton className='h-5 w-72' />
                        </div>
                        <div className='mb-6 flex flex-wrap gap-1'>
                            <Skeleton className='h-9 w-24 rounded-lg' />
                            <Skeleton className='h-9 w-20 rounded-lg' />
                            <Skeleton className='h-9 w-28 rounded-lg' />
                            <Skeleton className='h-9 w-24 rounded-lg' />
                        </div>
                        <div className='border-border bg-foreground/5 rounded-xl border p-4 sm:p-8'>
                            <div className='space-y-1.5'>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <AdminUserSkeleton key={i} />
                                ))}
                            </div>
                        </div>
                    </Fragment>
                ) : (
                    <Fragment>
                        <PageHeader
                            title={t('admin.title')}
                            description={t('admin.description')}
                        />

                        <TooltipProvider delayDuration={200}>
                            <div className='mb-6 flex flex-wrap gap-1'>
                                {[
                                    {
                                        key: ADMIN_TABS.ANALYTICS,
                                        icon: ChartLineUpIcon,
                                        label: t('admin.analyticsTab'),
                                        count: undefined,
                                        showLabel: true
                                    },
                                    {
                                        key: ADMIN_TABS.USERS,
                                        icon: UsersIcon,
                                        label: t('admin.usersTab'),
                                        count: stats?.users
                                    },
                                    {
                                        key: ADMIN_TABS.AGENTS,
                                        icon: HardDrivesIcon,
                                        label: t('admin.clawsTab'),
                                        count: stats?.agents
                                    },
                                    {
                                        key: ADMIN_TABS.SSH_KEYS,
                                        icon: KeyIcon,
                                        label: t('admin.sshKeysTab'),
                                        count: stats?.sshKeys
                                    },
                                    {
                                        key: ADMIN_TABS.VOLUMES,
                                        icon: DatabaseIcon,
                                        label: t('admin.volumesTab'),
                                        count: stats?.volumes
                                    },
                                    {
                                        key: ADMIN_TABS.PENDING_AGENTS,
                                        icon: HourglassIcon,
                                        label: t('admin.pendingClawsTab'),
                                        count: stats?.pendingAgents
                                    },
                                    {
                                        key: ADMIN_TABS.REFERRALS,
                                        icon: HandshakeIcon,
                                        label: t('admin.referralsTab'),
                                        count: stats?.referrals
                                    },
                                    {
                                        key: ADMIN_TABS.EMAILS,
                                        icon: EnvelopeIcon,
                                        label: t('admin.emailsTab'),
                                        count: stats?.emails
                                    },
                                    {
                                        key: ADMIN_TABS.BILLING,
                                        icon: CreditCardIcon,
                                        label: t('admin.billingTab'),
                                        count: stats?.billing
                                    },
                                    {
                                        key: ADMIN_TABS.SETTINGS,
                                        icon: GearSixIcon,
                                        label: t('admin.settingsTab'),
                                        count: undefined,
                                        showLabel: true
                                    }
                                ].map((tab) => {
                                    const isActive = activeTab === tab.key
                                    return (
                                        <Tooltip key={tab.key}>
                                            <TooltipTrigger asChild>
                                                <button
                                                    onClick={() =>
                                                        !isActive &&
                                                        setActiveTab(tab.key)
                                                    }
                                                    disabled={isActive}
                                                    className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                                                        isActive
                                                            ? 'bg-foreground/10 text-foreground cursor-default'
                                                            : 'text-muted-foreground hover:text-foreground'
                                                    }`}
                                                >
                                                    <tab.icon className='h-4 w-4' />
                                                    {tab.count !== undefined ? (
                                                        <span className='text-muted-foreground text-xs'>
                                                            {tab.count}
                                                        </span>
                                                    ) : tab.showLabel ? (
                                                        <span className='text-xs'>
                                                            {tab.label}
                                                        </span>
                                                    ) : null}
                                                </button>
                                            </TooltipTrigger>
                                            {!isActive && (
                                                <TooltipContent>
                                                    {tab.label}
                                                </TooltipContent>
                                            )}
                                        </Tooltip>
                                    )
                                })}
                            </div>
                        </TooltipProvider>

                        <div className='border-border bg-foreground/5 rounded-xl border p-4 backdrop-blur-sm sm:p-8'>
                            {activeTab === ADMIN_TABS.AGENTS && (
                                <AdminAgentsTab
                                    onSelectEntity={setSelectedEntity}
                                />
                            )}
                            {activeTab === ADMIN_TABS.PENDING_AGENTS && (
                                <AdminPendingAgentsTab
                                    onSelectEntity={setSelectedEntity}
                                />
                            )}
                            {activeTab === ADMIN_TABS.SSH_KEYS && (
                                <AdminSSHKeysTab
                                    onSelectEntity={setSelectedEntity}
                                />
                            )}
                            {activeTab === ADMIN_TABS.VOLUMES && (
                                <AdminVolumesTab
                                    onSelectEntity={setSelectedEntity}
                                />
                            )}
                            {activeTab === ADMIN_TABS.REFERRALS && (
                                <AdminReferralsTab
                                    onSelectEntity={setSelectedEntity}
                                />
                            )}
                            {activeTab === ADMIN_TABS.EMAILS && (
                                <AdminEmailsTab
                                    onSelectEntity={setSelectedEntity}
                                />
                            )}
                            {activeTab === ADMIN_TABS.BILLING && (
                                <AdminBillingTab
                                    onSelectEntity={setSelectedEntity}
                                />
                            )}
                            {activeTab === ADMIN_TABS.ANALYTICS && (
                                <AdminAnalyticsTab />
                            )}
                            {activeTab === ADMIN_TABS.USERS && (
                                <UsersTab onSelectEntity={setSelectedEntity} />
                            )}
                            {activeTab === ADMIN_TABS.SETTINGS && (
                                <AdminSettingsTab />
                            )}
                        </div>
                    </Fragment>
                )}
            </motion.main>

            <LandingFooter />

            <AdminDetailModal
                entity={selectedEntity}
                onClose={() => setSelectedEntity(null)}
                onNavigateToUser={(userId) =>
                    setSelectedEntity({
                        type: 'user',
                        id: userId,
                        data: null
                    })
                }
            />
        </div>
    )
}

export default Admin