import type { FC, ReactNode } from 'react'
import type { AdminEmailDetailViewProps } from '@/ts/Interfaces'

import { Fragment } from 'react'
import { t } from '@openclaw/i18n'
import { getLocale } from '@/lib'
import { DialogHeader, DialogTitle, Button } from '@/components/ui'
import { EnvelopeIcon } from '@phosphor-icons/react'
import { AdminDetailField, AdminOwnerLink } from '@/components/admin'

const AdminEmailDetailView: FC<AdminEmailDetailViewProps> = ({
    email,
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
                    <EnvelopeIcon className='h-5 w-5' />
                    {email.feature.charAt(0).toUpperCase() +
                        email.feature.slice(1)}
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
                                userId={email.userId}
                                email={email.ownerEmail}
                                onNavigateToUser={onNavigateToUser}
                            />
                        </div>
                        <AdminDetailField
                            label={t('admin.feature')}
                            value={email.feature}
                        />
                        <AdminDetailField
                            label={t('admin.sentAt')}
                            value={formatDate(email.sentAt)}
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

export default AdminEmailDetailView