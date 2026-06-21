import type { FC, ReactNode } from 'react'
import type { AdminResourceTabProps, BillingOrder } from '@/ts/Interfaces'

import { Fragment, useState, useMemo } from 'react'
import { t } from '@openclaw/i18n'
import { formatDate, formatCurrency } from '@/lib'
import {
    useAdminBillingList,
    useInfiniteScrollObserver,
    usePaginationState
} from '@/hooks'
import {
    Card,
    CardContent,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger
} from '@/components/ui'
import { EmptyState, ErrorState } from '@/components'
import { CreditCardIcon } from '@phosphor-icons/react'
import { AdminStatusBadge } from '@/components/admin'
import AdminUserSkeleton from '@/pages/AdminUserSkeleton'

const PAGE_SIZE = 20

const BILLING_FILTER = {
    ALL: 'all',
    SERVICE: 'service',
    LICENSE: 'license'
} as const

const AdminBillingTab: FC<AdminResourceTabProps> = ({
    onSelectEntity
}): ReactNode => {
    const [billingFilter, setBillingFilter] = useState<string>(
        BILLING_FILTER.ALL
    )

    const {
        data,
        isLoading,
        isError,
        refetch,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage
    } = useAdminBillingList(PAGE_SIZE)

    const loadMoreRef = useInfiniteScrollObserver({
        isFetchingNextPage,
        hasNextPage,
        fetchNextPage
    })
    const { allItems, skeletonCount } = usePaginationState({
        data,
        pageSize: PAGE_SIZE
    })

    const filteredItems = useMemo(() => {
        if (billingFilter === BILLING_FILTER.ALL) return allItems
        if (billingFilter === BILLING_FILTER.SERVICE)
            return allItems.filter((item: BillingOrder) => item.subscriptionId)
        return allItems.filter((item: BillingOrder) => !item.subscriptionId)
    }, [allItems, billingFilter])

    return (
        <Fragment>
            <div className='mb-4 flex items-center justify-between'>
                <h3 className='text-xl font-semibold'>
                    {t('admin.billingTab')}
                </h3>
                <Select value={billingFilter} onValueChange={setBillingFilter}>
                    <SelectTrigger
                        className='h-10 w-full sm:w-48'
                        placeholder={t('admin.billingFilterAll')}
                    />
                    <SelectContent>
                        <SelectItem value={BILLING_FILTER.ALL}>
                            {t('admin.billingFilterAll')}
                        </SelectItem>
                        <SelectItem value={BILLING_FILTER.SERVICE}>
                            {t('admin.billingFilterService')}
                        </SelectItem>
                        <SelectItem value={BILLING_FILTER.LICENSE}>
                            {t('admin.billingFilterLicense')}
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {isError ? (
                <div className='py-8'>
                    <ErrorState
                        title={t('admin.failedToLoadBilling')}
                        description={t('admin.genericErrorDescription')}
                        onRetry={() => refetch()}
                    />
                </div>
            ) : isLoading ? (
                <div className='space-y-1.5'>
                    {Array.from({ length: 3 }).map((_, i) => (
                        <AdminUserSkeleton key={i} />
                    ))}
                </div>
            ) : !filteredItems.length ? (
                <div className='py-8'>
                    <EmptyState
                        icon={
                            <CreditCardIcon className='text-primary h-10 w-10' />
                        }
                        title={t('admin.noBillingFound')}
                        description={t('admin.genericEmptyDescription')}
                    />
                </div>
            ) : (
                <div className='space-y-1.5'>
                    {filteredItems.map((order: BillingOrder) => (
                        <Card
                            key={order.id}
                            className='hover:bg-foreground/10 cursor-pointer transition-colors'
                            onClick={() =>
                                onSelectEntity({
                                    type: 'billing',
                                    id: order.id,
                                    data: order
                                })
                            }
                        >
                            <CardContent className='py-4'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex min-w-0 items-center gap-3'>
                                        <div className='bg-muted flex h-9 w-9 shrink-0 items-center justify-center rounded-full'>
                                            <CreditCardIcon className='text-muted-foreground h-4 w-4' />
                                        </div>
                                        <div className='min-w-0'>
                                            <div className='flex items-center gap-2'>
                                                <span className='truncate font-medium'>
                                                    {order.productName ||
                                                        order.billingReason}
                                                </span>
                                                <AdminStatusBadge
                                                    status={order.status}
                                                />
                                            </div>
                                            <p className='text-muted-foreground truncate text-sm'>
                                                {formatCurrency(
                                                    order.totalAmount
                                                )}
                                                {t(
                                                    'admin.billingOrderTypeLabel',
                                                    {
                                                        type: order.subscriptionId
                                                            ? t(
                                                                  'admin.billingFilterService'
                                                              )
                                                            : t(
                                                                  'admin.billingFilterLicense'
                                                              )
                                                    }
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                    <span className='text-muted-foreground hidden shrink-0 text-sm sm:block'>
                                        {formatDate(order.createdAt)}
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}

                    {hasNextPage && (
                        <div ref={loadMoreRef} className='space-y-1.5'>
                            {Array.from({ length: skeletonCount }).map(
                                (_, i) => (
                                    <AdminUserSkeleton key={`skeleton-${i}`} />
                                )
                            )}
                        </div>
                    )}
                </div>
            )}
        </Fragment>
    )
}

export default AdminBillingTab