import type { FC, ReactNode } from 'react'
import type { AdminResourceTabProps } from '@/ts/Interfaces'

import { Fragment, useState } from 'react'
import { t } from '@openclaw/i18n'
import { formatDate, formatCurrency } from '@/lib'
import { SORT_ORDER } from '@/lib/constants'
import {
    useAdminReferralsList,
    useInfiniteScrollObserver,
    usePaginationState
} from '@/hooks'
import {
    Badge,
    Card,
    CardContent,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger
} from '@/components/ui'
import { EmptyState, ErrorState } from '@/components'
import { HandshakeIcon } from '@phosphor-icons/react'
import AdminUserSkeleton from '@/pages/AdminUserSkeleton'

const PAGE_SIZE = 20

const AdminReferralsTab: FC<AdminResourceTabProps> = ({
    onSelectEntity
}): ReactNode => {
    const [sortOrder, setSortOrder] = useState<string>(SORT_ORDER.NEWEST)

    const {
        data,
        isLoading,
        isError,
        refetch,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage
    } = useAdminReferralsList(PAGE_SIZE, sortOrder)

    const loadMoreRef = useInfiniteScrollObserver({
        isFetchingNextPage,
        hasNextPage,
        fetchNextPage
    })
    const { allItems, skeletonCount } = usePaginationState({
        data,
        pageSize: PAGE_SIZE
    })

    return (
        <Fragment>
            <div className='mb-4 flex items-center justify-between'>
                <h3 className='text-xl font-semibold'>
                    {t('admin.referralsTab')}
                </h3>
                <Select value={sortOrder} onValueChange={setSortOrder}>
                    <SelectTrigger
                        className='h-10 w-full sm:w-40'
                        placeholder={
                            sortOrder === SORT_ORDER.NEWEST
                                ? t('admin.sortNewest')
                                : t('admin.sortOldest')
                        }
                    />
                    <SelectContent>
                        <SelectItem value={SORT_ORDER.NEWEST}>
                            {t('admin.sortNewest')}
                        </SelectItem>
                        <SelectItem value={SORT_ORDER.OLDEST}>
                            {t('admin.sortOldest')}
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {isError ? (
                <div className='py-8'>
                    <ErrorState
                        title={t('admin.failedToLoadReferrals')}
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
            ) : !allItems.length ? (
                <div className='py-8'>
                    <EmptyState
                        icon={
                            <HandshakeIcon className='text-primary h-10 w-10' />
                        }
                        title={t('admin.noReferralsFound')}
                        description={t('admin.genericEmptyDescription')}
                    />
                </div>
            ) : (
                <div className='space-y-1.5'>
                    {allItems.map((item) => (
                        <Card
                            key={item.id}
                            className='hover:bg-foreground/10 cursor-pointer transition-colors'
                            onClick={() =>
                                onSelectEntity({
                                    type: 'referral',
                                    id: item.id,
                                    data: item
                                })
                            }
                        >
                            <CardContent className='py-4'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex min-w-0 items-center gap-3'>
                                        <div className='bg-muted flex h-9 w-9 shrink-0 items-center justify-center rounded-full'>
                                            <HandshakeIcon className='text-muted-foreground h-4 w-4' />
                                        </div>
                                        <div className='min-w-0'>
                                            <div className='flex items-center gap-2'>
                                                <span className='truncate font-medium'>
                                                    {item.referrerEmail} →{' '}
                                                    {item.referredEmail}
                                                </span>
                                                <Badge
                                                    variant='outline'
                                                    className='pointer-events-none shrink-0'
                                                >
                                                    {item.paymentCount}{' '}
                                                    {t('affiliate.payments')}
                                                </Badge>
                                            </div>
                                            <p className='text-muted-foreground text-sm'>
                                                {formatCurrency(
                                                    item.totalEarned
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                    <span className='text-muted-foreground hidden shrink-0 text-sm sm:block'>
                                        {formatDate(item.createdAt)}
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

export default AdminReferralsTab