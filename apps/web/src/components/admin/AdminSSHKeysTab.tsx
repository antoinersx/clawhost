import type { FC, ReactNode } from 'react'
import type { AdminResourceTabProps } from '@/ts/Interfaces'

import { Fragment, useState } from 'react'
import { t } from '@openclaw/i18n'
import { formatDate } from '@/lib'
import { SORT_ORDER } from '@/lib/constants'
import {
    useAdminSSHKeysList,
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
import { KeyIcon, MagnifyingGlassIcon } from '@phosphor-icons/react'
import AdminUserSkeleton from '@/pages/AdminUserSkeleton'

const PAGE_SIZE = 20

const AdminSSHKeysTab: FC<AdminResourceTabProps> = ({
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
    } = useAdminSSHKeysList(PAGE_SIZE, debouncedSearch || undefined, sortOrder)

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
                <h3 className='text-xl font-semibold'>
                    {t('admin.sshKeysTab')}
                </h3>
                <div className='relative flex-1'>
                    <MagnifyingGlassIcon className='text-muted-foreground absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2' />
                    <Input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder={t('admin.searchSSHKeys')}
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
                        title={t('admin.failedToLoadSSHKeys')}
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
                        icon={<KeyIcon className='text-primary h-10 w-10' />}
                        title={t('admin.noSSHKeysFound')}
                        description={t('admin.genericEmptyDescription')}
                    />
                </div>
            ) : (
                <div className='space-y-1.5'>
                    {allItems.map((key) => (
                        <Card
                            key={key.id}
                            className='hover:bg-foreground/10 cursor-pointer transition-colors'
                            onClick={() =>
                                onSelectEntity({
                                    type: 'ssh-key',
                                    id: key.id,
                                    data: key
                                })
                            }
                        >
                            <CardContent className='py-4'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex min-w-0 items-center gap-3'>
                                        <div className='bg-muted flex h-9 w-9 shrink-0 items-center justify-center rounded-full'>
                                            <KeyIcon className='text-muted-foreground h-4 w-4' />
                                        </div>
                                        <div className='min-w-0'>
                                            <span className='truncate font-medium'>
                                                {key.name}
                                            </span>
                                            <p className='text-muted-foreground truncate text-sm'>
                                                {key.ownerEmail} ·{' '}
                                                <span className='font-mono text-xs'>
                                                    {key.fingerprint}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <span className='text-muted-foreground hidden shrink-0 text-sm sm:block'>
                                        {formatDate(key.createdAt)}
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

export default AdminSSHKeysTab