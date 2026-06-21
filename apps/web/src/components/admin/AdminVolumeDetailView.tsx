import type { FC, ReactNode } from 'react'
import type { AdminVolumeDetailViewProps } from '@/ts/Interfaces'

import { Fragment } from 'react'
import { t } from '@openclaw/i18n'
import { getLocale } from '@/lib'
import { DialogHeader, DialogTitle, Button } from '@/components/ui'
import { DatabaseIcon } from '@phosphor-icons/react'
import {
    AdminDetailField,
    AdminOwnerLink,
    AdminStatusBadge
} from '@/components/admin'

const AdminVolumeDetailView: FC<AdminVolumeDetailViewProps> = ({
    volume,
    onClose,
    onNavigateToUser
}): ReactNode => {
    const formatDate = (dateString: string | null | undefined) => {
        if (!dateString) return t('admin.notSet')
        return new Date(dateString).toLocaleDateString(getLocale(), {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    return (
        <Fragment>
            <DialogHeader>
                <DialogTitle className='flex items-center gap-2'>
                    <DatabaseIcon className='h-5 w-5' />
                    {volume.name}
                </DialogTitle>
            </DialogHeader>
            <div className='space-y-4 pt-8'>
                <div className='border-border rounded-lg border p-4'>
                    <div className='grid grid-cols-1 gap-4 text-sm sm:grid-cols-2'>
                        <div className='space-y-1'>
                            <p className='text-muted-foreground text-xs'>
                                {t('admin.owner')}
                            </p>
                            <AdminOwnerLink
                                userId={volume.userId}
                                email={volume.ownerEmail}
                                onNavigateToUser={onNavigateToUser}
                            />
                        </div>
                        <div className='space-y-1'>
                            <p className='text-muted-foreground text-xs'>
                                {t('admin.status')}
                            </p>
                            <AdminStatusBadge status={volume.status} />
                        </div>
                        <AdminDetailField
                            label={t('admin.fileSize')}
                            value={t('admin.unitGB', { size: volume.size })}
                        />
                        <AdminDetailField
                            label={t('admin.location')}
                            value={volume.location}
                        />
                        <AdminDetailField
                            label={t('admin.joined')}
                            value={formatDate(volume.createdAt)}
                            className='sm:col-span-2'
                        />
                    </div>
                </div>
                <div className='flex justify-end'>
                    <Button variant='outline' onClick={onClose}>
                        {t('common.close')}
                    </Button>
                </div>
            </div>
        </Fragment>
    )
}

export default AdminVolumeDetailView