import type { FC, ReactNode } from 'react'
import type { AdminReferralDetailViewProps } from '@/ts/Interfaces'

import { Fragment } from 'react'
import { t } from '@openclaw/i18n'
import { getLocale } from '@/lib'
import { DialogHeader, DialogTitle, Button } from '@/components/ui'
import { HandshakeIcon } from '@phosphor-icons/react'
import { AdminDetailField, AdminOwnerLink } from '@/components/admin'

const AdminReferralDetailView: FC<AdminReferralDetailViewProps> = ({
    referral,
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

    const formatCurrency = (amount: number, currency: string = 'usd') => {
        return new Intl.NumberFormat(getLocale(), {
            style: 'currency',
            currency: currency.toUpperCase()
        }).format(amount / 100)
    }

    return (
        <Fragment>
            <DialogHeader>
                <DialogTitle className='flex items-center gap-2'>
                    <HandshakeIcon className='h-5 w-5' />
                    {t('admin.referralsTab')}
                </DialogTitle>
            </DialogHeader>
            <div className='space-y-4 pt-8'>
                <div className='border-border rounded-lg border p-4'>
                    <div className='grid grid-cols-1 gap-4 text-sm sm:grid-cols-2'>
                        <div className='space-y-1'>
                            <p className='text-muted-foreground text-xs'>
                                {t('admin.referrer')}
                            </p>
                            <AdminOwnerLink
                                userId={referral.referrerId}
                                email={referral.referrerEmail}
                                onNavigateToUser={onNavigateToUser}
                            />
                        </div>
                        <div className='space-y-1'>
                            <p className='text-muted-foreground text-xs'>
                                {t('admin.referred')}
                            </p>
                            <AdminOwnerLink
                                userId={referral.referredUserId}
                                email={referral.referredEmail}
                                onNavigateToUser={onNavigateToUser}
                            />
                        </div>
                        <AdminDetailField
                            label={t('affiliate.payments')}
                            value={referral.paymentCount}
                        />
                        <AdminDetailField
                            label={t('admin.earned')}
                            value={formatCurrency(referral.totalEarned)}
                        />
                        <AdminDetailField
                            label={t('admin.joined')}
                            value={formatDate(referral.createdAt)}
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

export default AdminReferralDetailView