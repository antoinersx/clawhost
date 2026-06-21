import type { FC, ReactNode } from 'react'
import type { AgentMonitorContentProps } from '@/ts/Interfaces'

import { t } from '@openclaw/i18n'
import {
    ChartLineUpIcon,
    CpuIcon,
    HardDriveIcon,
    ClockIcon,
    GaugeIcon
} from '@phosphor-icons/react'
import { Skeleton } from '@/components/ui'
import { PanelPlaceholder, LiveBadge } from '@/components/shared'
import { useAgentMetrics } from '@/hooks'
import { demoMetrics } from '@/data'
import {
    MetricCard,
    UsageBar,
    MonitorChart,
    MonitorNetworkCard,
    MonitorLoadAvgChart,
    MonitorProcessTable,
    useMetricsHistory,
    formatBytes,
    getUsageColor
} from '@/components/dashboard/AgentMonitorContent'

const AgentMonitorContent: FC<AgentMonitorContentProps> = ({
    agentId,
    readOnly
}): ReactNode => {
    const {
        data: liveData,
        isPending,
        isError
    } = useAgentMetrics(agentId, !readOnly)
    const data = readOnly ? demoMetrics : liveData
    const { cpuHistory, memHistory } = useMetricsHistory(data)

    if (isError)
        return (
            <div className='flex h-full items-center justify-center p-5'>
                <PanelPlaceholder
                    icon={
                        <ChartLineUpIcon
                            className='text-muted-foreground h-6 w-6'
                            weight='duotone'
                        />
                    }
                    title={t('clawDetail.metricsError')}
                    description={t('clawDetail.metricsErrorDescription')}
                />
            </div>
        )

    if (isPending && !data)
        return (
            <div className='space-y-4 p-5'>
                <Skeleton className='h-8 w-48 rounded-md' />
                <div className='grid grid-cols-1 gap-4'>
                    <Skeleton className='h-[180px] w-full rounded-lg' />
                    <Skeleton className='h-[180px] w-full rounded-lg' />
                    <Skeleton className='h-[120px] w-full rounded-lg' />
                    <Skeleton className='h-[200px] w-full rounded-lg' />
                </div>
            </div>
        )

    if (!data) return null

    const memPercent =
        data.memory.total > 0
            ? Math.round((data.memory.used / data.memory.total) * 1000) / 10
            : 0
    const cpuColor = getUsageColor(data.cpu.usagePercent)
    const memColor = getUsageColor(memPercent, {
        high: '#ef4444',
        medium: '#f59e0b',
        low: '#3b82f6'
    })
    const diskColor = getUsageColor(data.disk.usagePercent, {
        high: '#ef4444',
        medium: '#f59e0b',
        low: '#8b5cf6'
    })

    return (
        <div className='h-full space-y-4 overflow-y-auto p-5'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <h3 className='text-sm font-medium'>
                        {t('clawDetail.metricsTitle')}
                    </h3>
                    <LiveBadge />
                </div>
                {data.uptime && (
                    <div className='text-muted-foreground flex items-center gap-1.5 text-xs'>
                        <ClockIcon className='h-3.5 w-3.5' />
                        {t('clawDetail.metricsUptime')}: {data.uptime}
                    </div>
                )}
            </div>
            <MetricCard
                title={t('clawDetail.metricsCpu')}
                icon={
                    <CpuIcon className='h-4 w-4' style={{ color: cpuColor }} />
                }
            >
                <UsageBar
                    value={data.cpu.usagePercent}
                    color={cpuColor}
                    label={`${data.cpu.usagePercent}%`}
                    detail={`${data.cpu.cores} ${data.cpu.cores === 1 ? 'core' : 'cores'}`}
                />
                {cpuHistory.length > 1 && (
                    <MonitorChart
                        data={cpuHistory}
                        color={cpuColor}
                        label='CPU'
                    />
                )}
            </MetricCard>
            <MetricCard
                title={t('clawDetail.metricsMemory')}
                icon={
                    <GaugeIcon
                        className='h-4 w-4'
                        style={{ color: memColor }}
                    />
                }
            >
                <UsageBar
                    value={memPercent}
                    color={memColor}
                    label={`${memPercent}%`}
                    detail={`${formatBytes(data.memory.used)} / ${formatBytes(data.memory.total)}`}
                />
                {memHistory.length > 1 && (
                    <MonitorChart
                        data={memHistory}
                        color={memColor}
                        label='MEM'
                    />
                )}
            </MetricCard>
            <MetricCard
                title={t('clawDetail.metricsDisk')}
                icon={
                    <HardDriveIcon
                        className='h-4 w-4'
                        style={{ color: diskColor }}
                    />
                }
            >
                <UsageBar
                    value={data.disk.usagePercent}
                    color={diskColor}
                    label={`${data.disk.usagePercent}%`}
                    detail={`${formatBytes(data.disk.used)} / ${formatBytes(data.disk.total)}`}
                />
            </MetricCard>
            <MonitorNetworkCard
                rxBytes={data.network.rxBytes}
                txBytes={data.network.txBytes}
            />
            <MonitorLoadAvgChart
                load1={data.loadAvg.load1}
                load5={data.loadAvg.load5}
                load15={data.loadAvg.load15}
            />
            <MonitorProcessTable processes={data.processes} />
        </div>
    )
}

export default AgentMonitorContent