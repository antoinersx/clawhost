import type { FC, ReactNode } from 'react'
import type { AdminBillingDetailViewProps } from '@/ts/Interfaces'

import { Fragment } from 'react'
import { t } from '@openclaw/i18n'
import { formatDate, formatCurrency } from '@/lib'
import { DialogHeader, DialogTitle, Button } from '@/components/ui'
import { CreditCardIcon } from '@phosphor-icons/react'
import { AdminDetailField, AdminStatusBadge } from '@/components/admin'

const AdminBillingDetailView: FC<AdminBillingDetailViewProps> = ({
    order,
    onClose
}): ReactNode => {
    return (
        <Fragment>
            <DialogHeader>
                <DialogTitle className='flex items-center gap-2'>
                    <CreditCardIcon className='h-5 w-5' />
                    {order.productName || order.billingReason}
                </DialogTitle>
            </DialogHeader>
            <div className='space-y-4 pt-8'>
                <div className='border-border rounded-lg border p-4'>
                    <div className='grid grid-cols-1 gap-4 text-sm sm:grid-cols-2'>
                        <div className='space-y-1'>
                            <p className='text-muted-foreground text-xs'>
                                {t('admin.status')}
                            </p>
                            <AdminStatusBadge status={order.status} />
                        </div>
                        <AdminDetailField
                            label={t('admin.billingReason')}
                            value={order.billingReason}
                        />
                        <AdminDetailField
                            label={t('admin.billingSubtotal')}
                            value={formatCurrency(order.subtotalAmount)}
                        />
                        {order.discountAmount > 0 && (
                            <AdminDetailField
                                label={t('admin.billingDiscount')}
                                value={`-${formatCurrency(order.discountAmount)}${order.discountName ? ` (${order.discountName})` : ''}`}
                            />
                        )}
                        <AdminDetailField
                            label={t('admin.billingTax')}
                            value={formatCurrency(order.taxAmount)}
                        />
                        <AdminDetailField
                            label={t('admin.billingTotal')}
                            value={formatCurrency(order.totalAmount)}
                        />
                        <AdminDetailField
                            label={t('admin.billingType')}
                            value={
                                order.subscriptionId
                                    ? t('admin.billingFilterService')
                                    : t('admin.billingFilterLicense')
                            }
                        />
                        <AdminDetailField
                            label={t('admin.joined')}
                            value={formatDate(order.createdAt)}
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

export default AdminBillingDetailView