import type { FC, ReactNode } from 'react'
import type { MonitorNetworkCardProps } from '@/ts/Interfaces'

import { t } from '@openclaw/i18n'
import { WifiHighIcon } from '@phosphor-icons/react'
import {
    MetricCard,
    formatBytes
} from '@/components/dashboard/AgentMonitorContent'

const MonitorNetworkCard: FC<MonitorNetworkCardProps> = ({
    rxBytes,
    txBytes
}): ReactNode => (
    <MetricCard
        title={t('clawDetail.metricsNetwork')}
        icon={<WifiHighIcon className='h-4 w-4 text-cyan-500' />}
    >
        <div className='grid grid-cols-2 gap-4'>
            <div className='space-y-1'>
                <span className='text-muted-foreground text-xs'>
                    {t('clawDetail.metricsReceived')}
                </span>
                <p className='text-foreground text-sm font-medium'>
                    {formatBytes(rxBytes)}
                </p>
            </div>
            <div className='space-y-1'>
                <span className='text-muted-foreground text-xs'>
                    {t('clawDetail.metricsSent')}
                </span>
                <p className='text-foreground text-sm font-medium'>
                    {formatBytes(txBytes)}
                </p>
            </div>
        </div>
    </MetricCard>
)

export default MonitorNetworkCard