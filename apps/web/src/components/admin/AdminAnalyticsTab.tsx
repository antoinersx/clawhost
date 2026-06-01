import type { FC, ReactNode } from 'react'
import type { AdminAnalyticsResponse } from '@/ts/Interfaces'
import type { AdminAnalyticsRange } from '@/ts/Types'

import { useState } from 'react'
import { t } from '@openclaw/i18n'
import { useAdminAnalytics } from '@/hooks'
import {
    Button,
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    Skeleton
} from '@/components/ui'
import { ErrorState } from '@/components'
import {
    UsersIcon,
    HardDrivesIcon,
    KeyIcon,
    DatabaseIcon,
    HourglassIcon,
    HandshakeIcon,
    EnvelopeIcon,
    ChartLineUpIcon,
    FunnelIcon
} from '@phosphor-icons/react'
import AdminAnalyticsChart from '@/components/admin/AdminAnalyticsChart'

const RANGES = [
    { key: 'day' as AdminAnalyticsRange, label: 'admin.analyticsDay' as const },
    {
        key: 'week' as AdminAnalyticsRange,
        label: 'admin.analyticsWeek' as const
    },
    {
        key: 'month' as AdminAnalyticsRange,
        label: 'admin.analyticsMonth' as const
    },
    {
        key: 'year' as AdminAnalyticsRange,
        label: 'admin.analyticsYear' as const
    },
    {
        key: 'all' as AdminAnalyticsRange,
        label: 'admin.analyticsAllTime' as const
    }
]

const RESOURCES = [
    {
        key: 'users' as keyof AdminAnalyticsResponse,
        label: 'admin.usersTab' as const,
        icon: UsersIcon,
        color: '#8b5cf6'
    },
    {
        key: 'agents' as keyof AdminAnalyticsResponse,
        label: 'admin.clawsTab' as const,
        icon: HardDrivesIcon,
        color: '#3b82f6'
    },
    {
        key: 'sshKeys' as keyof AdminAnalyticsResponse,
        label: 'admin.sshKeysTab' as const,
        icon: KeyIcon,
        color: '#f59e0b'
    },
    {
        key: 'volumes' as keyof AdminAnalyticsResponse,
        label: 'admin.volumesTab' as const,
        icon: DatabaseIcon,
        color: '#10b981'
    },
    {
        key: 'pendingAgents' as keyof AdminAnalyticsResponse,
        label: 'admin.pendingClawsTab' as const,
        icon: HourglassIcon,
        color: '#f97316'
    },
    {
        key: 'referrals' as keyof AdminAnalyticsResponse,
        label: 'admin.referralsTab' as const,
        icon: HandshakeIcon,
        color: '#ec4899'
    },
    {
        key: 'emails' as keyof AdminAnalyticsResponse,
        label: 'admin.emailsTab' as const,
        icon: EnvelopeIcon,
        color: '#a855f7'
    }
]

const AdminAnalyticsTab: FC = (): ReactNode => {
    const [range, setRange] = useState<AdminAnalyticsRange>('week')
    const [visible, setVisible] = useState<Set<string>>(
        () => new Set(RESOURCES.map((r) => r.key))
    )

    const { data, isLoading, isError, refetch } = useAdminAnalytics(range)

    const toggleResource = (key: string) => {
        setVisible((prev) => {
            const next = new Set(prev)
            if (next.has(key)) {
                next.delete(key)
            } else {
                next.add(key)
            }
            return next
        })
    }

    const allSelected = visible.size === RESOURCES.length
    const toggleAll = () => {
        if (allSelected) {
            setVisible(new Set())
        } else {
            setVisible(new Set(RESOURCES.map((r) => r.key)))
        }
    }

    const visibleResources = RESOURCES.filter((r) => visible.has(r.key))

    return (
        <div className='space-y-6'>
            <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
                <div className='flex items-center gap-4'>
                    <h3 className='text-xl font-semibold'>
                        {t('admin.analyticsTab')}
                    </h3>
                    <div className='bg-muted flex rounded-lg p-1'>
                        {RANGES.map((r) => (
                            <button
                                key={r.key}
                                onClick={() => setRange(r.key)}
                                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                                    range === r.key
                                        ? 'bg-background text-foreground shadow-sm'
                                        : 'text-muted-foreground hover:text-foreground'
                                }`}
                            >
                                {t(r.label)}
                            </button>
                        ))}
                    </div>
                </div>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant='outline' size='sm' className='gap-2'>
                            <FunnelIcon className='h-3.5 w-3.5' />
                            {t('admin.analyticsFilter')}
                            <span className='text-muted-foreground text-xs'>
                                ({visible.size}/{RESOURCES.length})
                            </span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end' className='w-48'>
                        <DropdownMenuLabel>
                            {t('admin.analyticsResources')}
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            onSelect={(e) => {
                                e.preventDefault()
                                toggleAll()
                            }}
                        >
                            {allSelected
                                ? t('admin.analyticsDeselectAll')
                                : t('admin.analyticsSelectAll')}
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {RESOURCES.map((r) => (
                            <DropdownMenuCheckboxItem
                                key={r.key}
                                checked={visible.has(r.key)}
                                onCheckedChange={() => toggleResource(r.key)}
                                onSelect={(e) => e.preventDefault()}
                            >
                                <div className='flex items-center gap-2'>
                                    <r.icon
                                        className='h-3.5 w-3.5'
                                        style={{ color: r.color }}
                                    />
                                    {t(r.label)}
                                </div>
                            </DropdownMenuCheckboxItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {isError ? (
                <div className='py-8'>
                    <ErrorState
                        title={t('admin.failedToLoadAnalytics')}
                        description={t('admin.genericErrorDescription')}
                        onRetry={() => refetch()}
                    />
                </div>
            ) : isLoading ? (
                <div className='flex flex-col gap-4'>
                    {Array.from({ length: visible.size || 1 }).map((_, i) => (
                        <Skeleton key={i} className='h-52 w-full rounded-lg' />
                    ))}
                </div>
            ) : data && visibleResources.length > 0 ? (
                <div className='flex flex-col gap-4'>
                    {visibleResources.map((r) => (
                        <AdminAnalyticsChart
                            key={r.key}
                            title={t(r.label)}
                            data={data[r.key] || []}
                            color={r.color}
                            range={range}
                        />
                    ))}
                </div>
            ) : (
                <div className='flex flex-col items-center justify-center py-12'>
                    <ChartLineUpIcon className='text-muted-foreground mb-3 h-10 w-10' />
                    <p className='text-muted-foreground text-sm'>
                        {t('admin.noAnalyticsData')}
                    </p>
                </div>
            )}
        </div>
    )
}

export default AdminAnalyticsTab