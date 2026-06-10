import type { FC, ReactNode } from 'react'
import type { AdminUsersTabProps, AdminUserListItem } from '@/ts/Interfaces'

import { Fragment, useState } from 'react'
import { t } from '@openclaw/i18n'
import {
    useAdminUsers,
    useDebouncedValue,
    useInfiniteScrollObserver,
    usePaginationState
} from '@/hooks'
import { EmptyState, ErrorState } from '@/components'
import { HAS_AGENTS_FILTER, SORT_ORDER } from '@/lib/constants'
import { AdminUserRow, AdminUserFilters } from '@/components/admin'
import { UsersIcon } from '@phosphor-icons/react'
import AdminUserSkeleton from '@/pages/AdminUserSkeleton'

const ADMIN_PAGE_SIZE = 20

const UsersTab: FC<AdminUsersTabProps> = ({ onSelectEntity }): ReactNode => {
    const [search, setSearch] = useState('')
    const [hasAgents, setHasAgents] = useState<string>(HAS_AGENTS_FILTER.ALL)
    const [sortOrder, setSortOrder] = useState<string>(SORT_ORDER.NEWEST)
    const debouncedSearch = useDebouncedValue(search, 300)

    const {
        data: usersData,
        isLoading: isUsersLoading,
        isError: isUsersError,
        refetch,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage
    } = useAdminUsers(
        ADMIN_PAGE_SIZE,
        debouncedSearch || undefined,
        hasAgents === HAS_AGENTS_FILTER.ALL ? undefined : hasAgents,
        sortOrder
    )

    const loadMoreRef = useInfiniteScrollObserver({
        isFetchingNextPage,
        hasNextPage,
        fetchNextPage
    })
    const { allItems: allUsers, skeletonCount: nextPageSkeletonCount } =
        usePaginationState({ data: usersData, pageSize: ADMIN_PAGE_SIZE })

    return (
        <Fragment>
            <AdminUserFilters
                search={search}
                onSearchChange={setSearch}
                hasAgents={hasAgents}
                onHasAgentsChange={setHasAgents}
                sortOrder={sortOrder}
                onSortOrderChange={setSortOrder}
            />

            {isUsersError ? (
                <div className='py-8'>
                    <ErrorState
                        title={t('admin.failedToLoadUsers')}
                        description={t('admin.failedToLoadUsersDescription')}
                        onRetry={() => refetch()}
                    />
                </div>
            ) : isUsersLoading ? (
                <div className='space-y-1.5'>
                    {Array.from({ length: 3 }).map((_, i) => (
                        <AdminUserSkeleton key={i} />
                    ))}
                </div>
            ) : !allUsers.length ? (
                <div className='py-8'>
                    <EmptyState
                        icon={<UsersIcon className='text-primary h-10 w-10' />}
                        title={t('admin.noUsers')}
                        description={t('admin.noUsersDescription')}
                    />
                </div>
            ) : (
                <div className='space-y-1.5'>
                    {allUsers.map((user: AdminUserListItem) => (
                        <AdminUserRow
                            key={user.id}
                            user={user}
                            onSelect={(id) =>
                                onSelectEntity({
                                    type: 'user',
                                    id,
                                    data: user
                                })
                            }
                        />
                    ))}

                    {hasNextPage && (
                        <div ref={loadMoreRef} className='space-y-1.5'>
                            {Array.from({
                                length: nextPageSkeletonCount
                            }).map((_, i) => (
                                <AdminUserSkeleton key={`skeleton-${i}`} />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </Fragment>
    )
}

export default UsersTab