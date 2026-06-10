import type { FC, ReactNode } from 'react'
import type { BillingOrderCardProps } from '@/ts/Interfaces'

import { t } from '@openclaw/i18n'
import {
    Button,
    Tooltip,
    TooltipContent,
    TooltipTrigger
} from '@/components/ui'
import { CircleNotchIcon, DownloadSimpleIcon } from '@phosphor-icons/react'
import { formatLongDate, formatCurrencyFromCents } from '@/lib/formatters'
import { billingReasonLabels } from '@/lib/billing'
import { BillingStatusBadge } from '@/components/billing'

const BillingOrderCard: FC<BillingOrderCardProps> = ({
    order,
    loadingInvoiceIds,
    onViewInvoice,
    readOnly
}): ReactNode => {
    const reasonLabelKey = billingReasonLabels[order.billingReason]
    const reasonLabel = reasonLabelKey ? t(reasonLabelKey) : order.billingReason

    return (
        <div className='bg-foreground/5 flex items-center justify-between rounded-lg px-3 py-2.5'>
            <div className='min-w-0 flex-1'>
                <p className='text-sm font-medium'>
                    {order.productName || reasonLabel}
                </p>
                <p className='text-muted-foreground text-xs'>
                    {formatLongDate(order.createdAt)}
                </p>
            </div>
            <div className='flex items-center gap-3'>
                <div className='text-right text-sm'>
                    <div className='flex items-center gap-1.5 font-medium'>
                        {order.discountAmount > 0 && (
                            <span className='text-muted-foreground text-xs line-through'>
                                {formatCurrencyFromCents(
                                    order.subtotalAmount,
                                    order.currency
                                )}
                            </span>
                        )}
                        <span>
                            {formatCurrencyFromCents(
                                order.totalAmount,
                                order.currency
                            )}
                        </span>
                    </div>
                    {order.discountName && (
                        <p className='text-muted-foreground text-xs'>
                            {t('billing.couponApplied', {
                                name: order.discountName
                            })}
                        </p>
                    )}
                </div>
                <BillingStatusBadge status={order.status} />
                {!readOnly && (
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant='ghost'
                                size='icon'
                                className='h-7 w-7'
                                onClick={() => onViewInvoice(order.id)}
                                disabled={loadingInvoiceIds.has(order.id)}
                                aria-label={t('billing.downloadInvoice')}
                            >
                                {loadingInvoiceIds.has(order.id) ? (
                                    <CircleNotchIcon className='h-4 w-4 animate-spin' />
                                ) : (
                                    <DownloadSimpleIcon className='h-4 w-4' />
                                )}
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            {t('billing.downloadInvoice')}
                        </TooltipContent>
                    </Tooltip>
                )}
            </div>
        </div>
    )
}

export default BillingOrderCard