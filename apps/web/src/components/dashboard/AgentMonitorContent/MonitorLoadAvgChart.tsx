import type { FC, ReactNode } from 'react'
import type { MonitorLoadAvgChartProps } from '@/ts/Interfaces'

import { t } from '@openclaw/i18n'
import { GaugeIcon } from '@phosphor-icons/react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from 'recharts'
import { MetricCard } from '@/components/dashboard/AgentMonitorContent'

const tooltipStyle = {
    backgroundColor: 'hsl(var(--background))',
    border: '1px solid hsl(var(--border))',
    borderRadius: '8px',
    fontSize: '12px'
}

const MonitorLoadAvgChart: FC<MonitorLoadAvgChartProps> = ({
    load1,
    load5,
    load15
}): ReactNode => (
    <MetricCard
        title={t('clawDetail.metricsLoadAvg')}
        icon={<GaugeIcon className='h-4 w-4 text-amber-500' />}
    >
        <ResponsiveContainer width='100%' height={80}>
            <BarChart
                data={[
                    { name: t('clawDetail.metricsLoad1'), value: load1 },
                    { name: t('clawDetail.metricsLoad5'), value: load5 },
                    { name: t('clawDetail.metricsLoad15'), value: load15 }
                ]}
            >
                <CartesianGrid
                    strokeDasharray='3 3'
                    stroke='hsl(var(--border))'
                />
                <XAxis
                    dataKey='name'
                    tick={{
                        fontSize: 10,
                        fill: 'hsl(var(--muted-foreground))'
                    }}
                    axisLine={false}
                    tickLine={false}
                />
                <YAxis
                    tick={{
                        fontSize: 10,
                        fill: 'hsl(var(--muted-foreground))'
                    }}
                    axisLine={false}
                    tickLine={false}
                    width={30}
                />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey='value' fill='#f59e0b' radius={[4, 4, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    </MetricCard>
)

export default MonitorLoadAvgChart