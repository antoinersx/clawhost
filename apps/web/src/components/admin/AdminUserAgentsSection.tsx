import type { FC, ReactNode } from 'react'
import type {
    AdminUserAgentsSectionProps,
    AdminUserDetailAgent
} from '@/ts/Interfaces'

import { t } from '@openclaw/i18n'
import { Card, CardContent } from '@/components/ui'
import { HardDrivesIcon } from '@phosphor-icons/react'
import { AdminStatusBadge } from '@/components/admin'

const AdminUserAgentsSection: FC<AdminUserAgentsSectionProps> = ({
    agents
}): ReactNode => (
    <div className='space-y-3'>
        <div className='flex items-center gap-2'>
            <HardDrivesIcon className='h-4 w-4' />
            <h4 className='text-sm font-medium'>
                {t('admin.claws')}
                {agents.length > 0 && ` (${agents.length})`}
            </h4>
        </div>
        {agents.length === 0 ? (
            <div className='border-border rounded-lg border p-4 text-center'>
                <p className='text-muted-foreground text-sm'>
                    {t('admin.noClaws')}
                </p>
            </div>
        ) : (
            <div className='space-y-2'>
                {agents.map((agent: AdminUserDetailAgent) => (
                    <Card key={agent.id}>
                        <CardContent className='py-3'>
                            <div className='flex items-center justify-between gap-2'>
                                <div className='flex min-w-0 items-center gap-3'>
                                    <div className='bg-muted flex h-9 w-9 shrink-0 items-center justify-center rounded-full'>
                                        <HardDrivesIcon className='text-muted-foreground h-4 w-4' />
                                    </div>
                                    <div className='min-w-0'>
                                        <span className='truncate font-medium'>
                                            {agent.name}
                                        </span>
                                        <p className='text-muted-foreground truncate text-xs'>
                                            {agent.ip || t('admin.notSet')} ·{' '}
                                            {agent.planId} ·{' '}
                                            {agent.location ||
                                                t('admin.notSet')}
                                        </p>
                                    </div>
                                </div>
                                <AdminStatusBadge status={agent.status} />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        )}
    </div>
)

export default AdminUserAgentsSection