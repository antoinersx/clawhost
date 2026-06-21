import type { FC, ReactNode } from 'react'
import type { MonitorProcessTableProps } from '@/ts/Interfaces'

import { t } from '@openclaw/i18n'
import { CpuIcon } from '@phosphor-icons/react'
import { MetricCard } from '@/components/dashboard/AgentMonitorContent'

const MonitorProcessTable: FC<MonitorProcessTableProps> = ({
    processes
}): ReactNode => (
    <MetricCard
        title={t('clawDetail.metricsProcesses')}
        icon={<CpuIcon className='h-4 w-4 text-emerald-500' />}
    >
        <div className='overflow-x-auto'>
            <table className='w-full text-xs'>
                <thead>
                    <tr className='text-muted-foreground border-border border-b'>
                        <th className='pb-2 pr-3 text-left font-medium'>
                            {t('clawDetail.metricsProcessPid')}
                        </th>
                        <th className='pb-2 pr-3 text-left font-medium'>
                            {t('clawDetail.metricsProcessUser')}
                        </th>
                        <th className='pb-2 pr-3 text-right font-medium'>
                            {t('clawDetail.metricsProcessCpu')}
                        </th>
                        <th className='pb-2 pr-3 text-right font-medium'>
                            {t('clawDetail.metricsProcessMem')}
                        </th>
                        <th className='pb-2 text-left font-medium'>
                            {t('clawDetail.metricsProcessCommand')}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {processes.map((proc) => (
                        <tr
                            key={proc.pid}
                            className='border-border border-b last:border-0'
                        >
                            <td className='text-muted-foreground py-1.5 pr-3'>
                                {proc.pid}
                            </td>
                            <td className='py-1.5 pr-3'>{proc.user}</td>
                            <td className='py-1.5 pr-3 text-right'>
                                {proc.cpu.toFixed(1)}
                            </td>
                            <td className='py-1.5 pr-3 text-right'>
                                {proc.mem.toFixed(1)}
                            </td>
                            <td className='max-w-[200px] truncate py-1.5 font-mono'>
                                {proc.command}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </MetricCard>
)

export default MonitorProcessTable