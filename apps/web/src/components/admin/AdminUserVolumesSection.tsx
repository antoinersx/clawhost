import type { FC, ReactNode } from 'react'
import type {
    AdminUserVolumesSectionProps,
    AdminUserDetailVolume
} from '@/ts/Interfaces'

import { t } from '@openclaw/i18n'
import { Card, CardContent } from '@/components/ui'
import { DatabaseIcon } from '@phosphor-icons/react'
import { AdminStatusBadge } from '@/components/admin'

const AdminUserVolumesSection: FC<AdminUserVolumesSectionProps> = ({
    volumes
}): ReactNode => (
    <div className='space-y-3'>
        <div className='flex items-center gap-2'>
            <DatabaseIcon className='h-4 w-4' />
            <h4 className='text-sm font-medium'>
                {t('admin.volumes')}
                {volumes.length > 0 && ` (${volumes.length})`}
            </h4>
        </div>
        {volumes.length === 0 ? (
            <div className='border-border rounded-lg border p-4 text-center'>
                <p className='text-muted-foreground text-sm'>
                    {t('admin.noVolumes')}
                </p>
            </div>
        ) : (
            <div className='space-y-2'>
                {volumes.map((vol: AdminUserDetailVolume) => (
                    <Card key={vol.id}>
                        <CardContent className='py-3'>
                            <div className='flex items-center justify-between gap-2'>
                                <div className='min-w-0'>
                                    <span className='truncate font-medium'>
                                        {vol.name}
                                    </span>
                                    <p className='text-muted-foreground truncate text-xs'>
                                        {t('admin.unitGB', {
                                            size: vol.size
                                        })}{' '}
                                        · {vol.location}
                                    </p>
                                </div>
                                <AdminStatusBadge status={vol.status} />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        )}
    </div>
)

export default AdminUserVolumesSection