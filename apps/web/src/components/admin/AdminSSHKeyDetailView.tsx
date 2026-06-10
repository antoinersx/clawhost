import type { FC, ReactNode } from 'react'
import type { AdminSSHKeyDetailViewProps } from '@/ts/Interfaces'

import { Fragment } from 'react'
import { t } from '@openclaw/i18n'
import { getLocale } from '@/lib'
import { DialogHeader, DialogTitle, Button } from '@/components/ui'
import { KeyIcon } from '@phosphor-icons/react'
import { AdminDetailField, AdminOwnerLink } from '@/components/admin'

const AdminSSHKeyDetailView: FC<AdminSSHKeyDetailViewProps> = ({
    sshKey,
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
                    <KeyIcon className='h-5 w-5' />
                    {sshKey.name}
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
                                userId={sshKey.userId}
                                email={sshKey.ownerEmail}
                                onNavigateToUser={onNavigateToUser}
                            />
                        </div>
                        <AdminDetailField
                            label={t('admin.joined')}
                            value={formatDate(sshKey.createdAt)}
                        />
                        <AdminDetailField
                            label={t('admin.fingerprint')}
                            value={
                                <span className='break-all font-mono text-xs'>
                                    {sshKey.fingerprint}
                                </span>
                            }
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

export default AdminSSHKeyDetailView