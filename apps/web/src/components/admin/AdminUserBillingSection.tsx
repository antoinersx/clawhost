import type { FC, ReactNode } from 'react'
import type {
    AdminUserBillingSectionProps,
    BillingOrder
} from '@/ts/Interfaces'

import { t } from '@openclaw/i18n'
import { Card, CardContent } from '@/components/ui'
import { ReceiptIcon } from '@phosphor-icons/react'
import { AdminStatusBadge } from '@/components/admin'

const AdminUserBillingSection: FC<AdminUserBillingSectionProps> = ({
    billingOrders,
    formatDate,
    formatCurrency
}): ReactNode => (
    <div className='space-y-3'>
        <div className='flex items-center gap-2'>
            <ReceiptIcon className='h-4 w-4' />
            <h4 className='text-sm font-medium'>
                {t('admin.billing')}
                {billingOrders.length > 0 && ` (${billingOrders.length})`}
            </h4>
        </div>
        {billingOrders.length === 0 ? (
            <div className='border-border rounded-lg border p-4 text-center'>
                <p className='text-muted-foreground text-sm'>
                    {t('admin.noBilling')}
                </p>
            </div>
        ) : (
            <div className='space-y-2'>
                {billingOrders.map((order: BillingOrder) => (
                    <Card key={order.id}>
                        <CardContent className='py-3'>
                            <div className='flex items-center justify-between gap-2'>
                                <div className='min-w-0'>
                                    <span className='truncate font-medium'>
                                        {order.productName ||
                                            order.billingReason}
                                    </span>
                                    <p className='text-muted-foreground truncate text-xs'>
                                        {formatDate(order.createdAt)}
                                    </p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <div className='text-right text-sm'>
                                        <div className='flex items-center gap-2 font-medium'>
                                            {order.discountAmount > 0 && (
                                                <span className='text-muted-foreground line-through'>
                                                    {formatCurrency(
                                                        order.subtotalAmount,
                                                        order.currency
                                                    )}
                                                </span>
                                            )}
                                            <span>
                                                {formatCurrency(
                                                    order.totalAmount,
                                                    order.currency
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                    <AdminStatusBadge status={order.status} />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        )}
    </div>
)

export default AdminUserBillingSection