import type { FC, ReactNode } from 'react'
import type { AdminAgentDetailViewProps } from '@/ts/Interfaces'

import { Fragment } from 'react'
import { t } from '@openclaw/i18n'
import { getLocale } from '@/lib'
import { DialogHeader, DialogTitle, Button } from '@/components/ui'
import { HardDrivesIcon } from '@phosphor-icons/react'
import {
    AdminDetailField,
    AdminOwnerLink,
    AdminStatusBadge
} from '@/components/admin'

const AdminAgentDetailView: FC<AdminAgentDetailViewProps> = ({
    agent,
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
                    <HardDrivesIcon className='h-5 w-5' />
                    {agent.name}
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
                                userId={agent.userId}
                                email={agent.ownerEmail}
                                onNavigateToUser={onNavigateToUser}
                            />
                        </div>
                        <div className='space-y-1'>
                            <p className='text-muted-foreground text-xs'>
                                {t('admin.status')}
                            </p>
                            <AdminStatusBadge status={agent.status} />
                        </div>
                        <AdminDetailField
                            label={t('admin.ip')}
                            value={
                                <span className='font-mono text-xs'>
                                    {agent.ip || t('admin.notSet')}
                                </span>
                            }
                        />
                        <AdminDetailField
                            label={t('admin.plan')}
                            value={agent.planId}
                        />
                        <AdminDetailField
                            label={t('admin.location')}
                            value={agent.location || t('admin.notSet')}
                        />
                        <AdminDetailField
                            label={t('admin.subdomain')}
                            value={
                                <span className='font-mono text-xs'>
                                    {agent.subdomain || t('admin.notSet')}
                                </span>
                            }
                        />
                        <AdminDetailField
                            label={t('admin.subscription')}
                            value={
                                agent.subscriptionStatus || t('admin.notSet')
                            }
                        />
                        <AdminDetailField
                            label={t('admin.billingInterval')}
                            value={agent.billingInterval || t('admin.notSet')}
                        />
                        <AdminDetailField
                            label={t('admin.joined')}
                            value={formatDate(agent.createdAt)}
                            className='sm:col-span-2'
                        />
                        {agent.deletionScheduledAt && (
                            <div className='col-span-2 space-y-1'>
                                <p className='text-xs text-red-500'>
                                    {t('admin.deletionScheduled')}
                                </p>
                                <p className='text-red-500'>
                                    {formatDate(agent.deletionScheduledAt)}
                                </p>
                            </div>
                        )}
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

export default AdminAgentDetailView