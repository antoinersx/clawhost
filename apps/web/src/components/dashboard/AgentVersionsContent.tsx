import type { FC, ReactNode } from 'react'
import type {
    AgentVersionsContentProps,
    InstallAgentVersionMutationParams
} from '@/ts/Interfaces'

import { Fragment, useState, useMemo, useRef } from 'react'
import { useDebouncedValue, useAbortController } from '@/hooks'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { t } from '@openclaw/i18n'
import {
    agentType as agentTypeConst,
    isVersionSupported,
    externalUrls
} from '@openclaw/shared'
import {
    CircleNotchIcon,
    MagnifyingGlassIcon,
    DownloadSimpleIcon,
    ArrowSquareOutIcon,
    InfoIcon,
    XIcon
} from '@phosphor-icons/react'
import {
    AgentMascot,
    AgentTypeMascot,
    PanelPlaceholder
} from '@/components/shared'
import {
    Button,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    Skeleton,
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui'
import { api, getLocale, handleAbortToast } from '@/lib'
import { useUIStore, useVersionsStore } from '@/lib/store'
import { TOAST_TYPE } from '@/lib/constants'
import { AGENT_VERSIONS_QUERY_KEY, AGENT_VERSION_QUERY_KEY } from '@/hooks'
import { demoVersions } from '@/data'

const CHANGELOG_URLS: Record<string, (version: string) => string> = {
    [agentTypeConst.OPENCLAW]: (version) =>
        externalUrls.NPM.PACKAGE_VERSION(agentTypeConst.OPENCLAW, version),
    [agentTypeConst.HERMES]: (version) =>
        externalUrls.GITHUB.RELEASE_TAG(
            externalUrls.GITHUB.HERMES_AGENT_REPO,
            version
        )
}

const AgentVersionsContent: FC<AgentVersionsContentProps> = ({
    agentId,
    agentType,
    readOnly
}): ReactNode => {
    const getChangelogUrl =
        CHANGELOG_URLS[agentType] || CHANGELOG_URLS[agentTypeConst.OPENCLAW]
    const showDownloads = agentType !== agentTypeConst.HERMES
    const [search, setSearch] = useState('')
    const debouncedSearch = useDebouncedValue(search.trim().toLowerCase(), 300)
    const {
        installingVersion,
        setInstallingVersion,
        confirmVersion,
        setConfirmVersion
    } = useVersionsStore()
    const { showToast } = useUIStore()
    const queryClient = useQueryClient()
    const getInstallSignal = useAbortController()
    const scrollRef = useRef<HTMLDivElement | null>(null)

    const {
        data: liveVersionsData,
        isLoading: liveLoading,
        isError
    } = useQuery({
        queryKey: [...AGENT_VERSIONS_QUERY_KEY, agentId],
        queryFn: () => api.getAgentVersions(agentId),
        staleTime: 0,
        gcTime: 0,
        retry: 1,
        refetchOnMount: 'always',
        enabled: !readOnly
    })
    const versionsData = readOnly ? demoVersions : liveVersionsData
    const isLoading = readOnly ? false : liveLoading

    const installMutation = useMutation({
        mutationFn: ({ version, signal }: InstallAgentVersionMutationParams) =>
            api.installAgentVersion(agentId, version, signal),
        onSuccess: (_data, { version }) => {
            showToast(
                t('clawDetail.versionInstallSuccess', { version }),
                'success'
            )
            queryClient.invalidateQueries({
                queryKey: [...AGENT_VERSIONS_QUERY_KEY, agentId]
            })
            queryClient.invalidateQueries({
                queryKey: [...AGENT_VERSION_QUERY_KEY, agentId]
            })
            setInstallingVersion(null)
        },
        onError: (error) => {
            if (
                handleAbortToast(
                    error,
                    showToast,
                    'clawDetail.installVersionCanceledNavigation'
                )
            ) {
                setInstallingVersion(null)
                return
            }
            showToast(t('clawDetail.versionInstallFailed'), TOAST_TYPE.ERROR)
            setInstallingVersion(null)
        }
    })

    const filteredVersions = useMemo(() => {
        if (!versionsData?.versions) return []
        if (!debouncedSearch) return versionsData.versions
        return versionsData.versions.filter((v) =>
            v.version.toLowerCase().includes(debouncedSearch)
        )
    }, [versionsData?.versions, debouncedSearch])

    const handleInstall = (version: string) => {
        setConfirmVersion(version)
    }

    const handleConfirmInstall = () => {
        if (!confirmVersion) return
        setInstallingVersion(confirmVersion)
        installMutation.mutate({
            version: confirmVersion,
            signal: getInstallSignal()
        })
        setConfirmVersion(null)
    }

    const hasItems = isLoading || filteredVersions.length > 0

    return (
        <Fragment>
            <div
                ref={scrollRef}
                className='flex h-full flex-col overflow-y-auto px-5 pb-5'
            >
                <div className='bg-background sticky top-0 z-10 pb-3 pt-5'>
                    <div className='relative'>
                        <MagnifyingGlassIcon className='text-muted-foreground absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2' />
                        <input
                            type='text'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder={
                                versionsData?.versions.length
                                    ? t('clawDetail.versionsSearchCount', {
                                          count: versionsData.versions.length
                                      })
                                    : t('clawDetail.versionsSearch')
                            }
                            className='border-border bg-foreground/5 text-foreground placeholder:text-muted-foreground w-full rounded-md border py-2 pl-8 pr-8 text-xs outline-none transition-colors focus:border-[#ef5350]/50'
                        />
                        {search && (
                            <button
                                onClick={() => setSearch('')}
                                className='text-muted-foreground hover:text-foreground absolute right-2.5 top-1/2 -translate-y-1/2 transition-colors'
                            >
                                <XIcon className='h-3.5 w-3.5' />
                            </button>
                        )}
                    </div>
                </div>

                <div className='flex min-h-0 flex-1 flex-col'>
                    {hasItems ? (
                        <div className='space-y-1.5 pb-3'>
                            {isLoading &&
                                Array.from({ length: 12 }).map((_, i) => (
                                    <Skeleton
                                        key={`ver-skel-${i}`}
                                        className='h-14 w-full rounded-lg'
                                    />
                                ))}

                            {!isLoading &&
                                filteredVersions.map((entry, idx) => {
                                    const isCurrent =
                                        versionsData?.currentVersion ===
                                        entry.version
                                    const isBeta =
                                        entry.version.includes('beta')
                                    const latestStableIdx = !debouncedSearch
                                        ? filteredVersions.findIndex(
                                              (v) => !v.version.includes('beta')
                                          )
                                        : -1
                                    const isLatest =
                                        idx === latestStableIdx && !isBeta
                                    const isInstalling =
                                        installingVersion === entry.version
                                    const isSupported = isVersionSupported(
                                        entry.version
                                    )

                                    return (
                                        <div
                                            key={entry.version}
                                            className='border-border bg-foreground/[0.02] flex items-center justify-between rounded-lg border px-3 py-2.5 transition-colors'
                                        >
                                            <div className='min-w-0 flex-1'>
                                                <div className='flex items-center gap-2'>
                                                    <AgentTypeMascot
                                                        agentType={agentType}
                                                        className='h-3 w-3 shrink-0'
                                                    />
                                                    <span className='text-foreground text-xs font-medium'>
                                                        {entry.version}
                                                    </span>
                                                    {isCurrent && (
                                                        <span className='rounded bg-emerald-500/15 px-1.5 py-0.5 text-[10px] font-medium text-emerald-500'>
                                                            {t(
                                                                'clawDetail.versionCurrent'
                                                            )}
                                                        </span>
                                                    )}
                                                    {isLatest && (
                                                        <span className='rounded bg-blue-500/20 px-1.5 py-0.5 text-[10px] font-medium text-blue-400'>
                                                            {t(
                                                                'clawDetail.versionLatest'
                                                            )}
                                                        </span>
                                                    )}
                                                    {isSupported && (
                                                        <TooltipProvider>
                                                            <Tooltip>
                                                                <TooltipTrigger
                                                                    asChild
                                                                >
                                                                    <span className='flex cursor-default items-center gap-0.5 rounded bg-blue-500/20 px-1.5 py-0.5 text-[10px] font-medium text-blue-400'>
                                                                        {t(
                                                                            'clawDetail.versionSupported'
                                                                        )}
                                                                        <InfoIcon className='h-2.5 w-2.5' />
                                                                    </span>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    {t(
                                                                        'clawDetail.versionSupportedTooltip'
                                                                    )}
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </TooltipProvider>
                                                    )}
                                                </div>
                                                <div className='mt-0.5 flex items-center gap-2'>
                                                    <span className='text-muted-foreground text-[10px]'>
                                                        {new Date(
                                                            entry.publishedAt
                                                        ).toLocaleDateString(
                                                            getLocale(),
                                                            {
                                                                year: 'numeric',
                                                                month: 'short',
                                                                day: 'numeric'
                                                            }
                                                        )}
                                                    </span>
                                                    {showDownloads && (
                                                        <Fragment>
                                                            <span className='text-muted-foreground text-[10px]'>
                                                                ·
                                                            </span>
                                                            <span className='text-muted-foreground text-[10px]'>
                                                                {t(
                                                                    'clawDetail.versionDownloads',
                                                                    {
                                                                        count: new Intl.NumberFormat(
                                                                            getLocale()
                                                                        ).format(
                                                                            entry.downloads
                                                                        )
                                                                    }
                                                                )}
                                                            </span>
                                                        </Fragment>
                                                    )}
                                                    <span className='text-muted-foreground text-[10px]'>
                                                        ·
                                                    </span>
                                                    <a
                                                        href={getChangelogUrl(
                                                            entry.version
                                                        )}
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        onClick={(e) =>
                                                            e.stopPropagation()
                                                        }
                                                        className='text-muted-foreground hover:text-foreground flex items-center gap-0.5 text-[10px] transition-colors'
                                                    >
                                                        <ArrowSquareOutIcon className='h-2.5 w-2.5' />
                                                        {t(
                                                            'clawDetail.versionChangelog'
                                                        )}
                                                    </a>
                                                </div>
                                            </div>

                                            {!isCurrent && !readOnly && (
                                                <button
                                                    onClick={() =>
                                                        handleInstall(
                                                            entry.version
                                                        )
                                                    }
                                                    disabled={
                                                        installingVersion !==
                                                        null
                                                    }
                                                    className='bg-foreground/5 text-foreground/80 hover:bg-foreground/10 ml-3 flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50'
                                                >
                                                    {isInstalling ? (
                                                        <Fragment>
                                                            <CircleNotchIcon className='h-3 w-3 animate-spin' />
                                                            {t(
                                                                'clawDetail.versionInstalling'
                                                            )}
                                                        </Fragment>
                                                    ) : (
                                                        <Fragment>
                                                            <DownloadSimpleIcon className='h-3 w-3' />
                                                            {t(
                                                                'clawDetail.versionInstall'
                                                            )}
                                                        </Fragment>
                                                    )}
                                                </button>
                                            )}
                                        </div>
                                    )
                                })}
                        </div>
                    ) : (
                        <div className='flex flex-1 items-center justify-center'>
                            {isError ? (
                                <PanelPlaceholder
                                    icon={<AgentMascot className='h-5 w-5' />}
                                    title={t('clawDetail.versionsEmpty')}
                                    description={t(
                                        'clawDetail.versionsErrorDescription'
                                    )}
                                />
                            ) : (
                                <PanelPlaceholder
                                    icon={<AgentMascot className='h-5 w-5' />}
                                    title={t('clawDetail.versionsEmpty')}
                                    description={t(
                                        'clawDetail.versionsEmptyDescription'
                                    )}
                                />
                            )}
                        </div>
                    )}
                </div>
            </div>

            <Dialog
                open={confirmVersion !== null}
                onOpenChange={(open) => {
                    if (!open) setConfirmVersion(null)
                }}
            >
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            {t('clawDetail.versionInstallConfirmTitle', {
                                version: confirmVersion ?? ''
                            })}
                        </DialogTitle>
                        <DialogDescription>
                            {t('clawDetail.versionInstallConfirmDescription')}
                        </DialogDescription>
                    </DialogHeader>
                    <div className='mt-4 flex justify-end gap-3'>
                        <Button
                            variant='outline'
                            onClick={() => setConfirmVersion(null)}
                        >
                            {t('common.cancel')}
                        </Button>
                        <Button
                            variant='destructive'
                            onClick={handleConfirmInstall}
                        >
                            {t('clawDetail.versionInstall')}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </Fragment>
    )
}

export default AgentVersionsContent