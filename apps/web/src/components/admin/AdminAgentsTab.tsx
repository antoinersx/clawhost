import type { FC, ReactNode } from 'react'
import type { AdminResourceTabProps } from '@/ts/Interfaces'

import { Fragment, useState } from 'react'
import { t } from '@openclaw/i18n'
import { formatDate } from '@/lib'
import { SORT_ORDER } from '@/lib/constants'
import {
    useAdminAgentsList,
    useDebouncedValue,
    useInfiniteScrollObserver,
    usePaginationState
} from '@/hooks'
import {
    Card,
    CardContent,
    Input,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger
} from '@/components/ui'
import { EmptyState, ErrorState } from '@/components'
import { HardDrivesIcon, MagnifyingGlassIcon } from '@phosphor-icons/react'
import { AdminStatusBadge } from '@/components/admin'
import AdminUserSkeleton from '@/pages/AdminUserSkeleton'

const PAGE_SIZE = 20

const AdminAgentsTab: FC<AdminResourceTabProps> = ({
    onSelectEntity
}): ReactNode => {
    const [search, setSearch] = useState('')
    const [sortOrder, setSortOrder] = useState<string>(SORT_ORDER.NEWEST)
    const debouncedSearch = useDebouncedValue(search, 300)

    const {
        data,
        isLoading,
        isError,
        refetch,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage
    } = useAdminAgentsList(PAGE_SIZE, debouncedSearch || undefined, sortOrder)

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
            <div className='mb-4 flex flex-col gap-3 sm:flex-row sm:items-center'>
                <h3 className='text-xl font-semibold'>{t('admin.clawsTab')}</h3>
                <div className='relative flex-1'>
                    <MagnifyingGlassIcon className='text-muted-foreground absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2' />
                    <Input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder={t('admin.searchClaws')}
                        className='bg-background h-10 pl-9'
                    />
                </div>
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
                        title={t('admin.failedToLoadAgents')}
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
                            <HardDrivesIcon className='text-primary h-10 w-10' />
                        }
                        title={t('admin.noClawsFound')}
                        description={t('admin.genericEmptyDescription')}
                    />
                </div>
            ) : (
                <div className='space-y-1.5'>
                    {allItems.map((agent) => (
                        <Card
                            key={agent.id}
                            className='hover:bg-foreground/10 cursor-pointer transition-colors'
                            onClick={() =>
                                onSelectEntity({
                                    type: 'agent',
                                    id: agent.id,
                                    data: agent
                                })
                            }
                        >
                            <CardContent className='py-4'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex min-w-0 items-center gap-3'>
                                        <div className='bg-muted flex h-9 w-9 shrink-0 items-center justify-center rounded-full'>
                                            <HardDrivesIcon className='text-muted-foreground h-4 w-4' />
                                        </div>
                                        <div className='min-w-0'>
                                            <div className='flex items-center gap-2'>
                                                <span className='truncate font-medium'>
                                                    {agent.name}
                                                </span>
                                                <AdminStatusBadge
                                                    status={agent.status}
                                                />
                                            </div>
                                            <p className='text-muted-foreground truncate text-sm'>
                                                {agent.ownerEmail} ·{' '}
                                                {agent.planId} ·{' '}
                                                {agent.location ||
                                                    t('admin.notSet')}
                                            </p>
                                        </div>
                                    </div>
                                    <span className='text-muted-foreground hidden shrink-0 text-sm sm:block'>
                                        {formatDate(agent.createdAt)}
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

export default AdminAgentsTab