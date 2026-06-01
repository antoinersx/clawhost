import type { FC, ReactNode } from 'react'
import type { SSHKey } from '@/ts/Interfaces'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { t } from '@openclaw/i18n'
import { useAuth } from '@/lib/auth'
import { ROUTES } from '@/lib'
import { useSSHKeys, useUserStats, useProfile } from '@/hooks'
import {
    EmptyState,
    ErrorState,
    Header,
    LandingFooter,
    LocalBackground,
    Logo,
    LanguageSelector,
    ThemeToggle,
    UserDropdown,
    PageBackground,
    PageTitle,
    PageHeader,
    ActionButton
} from '@/components'
import {
    SSHKeySkeleton,
    SSHKeyCard,
    CreateSSHKeyModal
} from '@/components/ssh-keys'
import { PlusCircleIcon, KeyIcon, CaretDownIcon } from '@phosphor-icons/react'

const SSHKeys: FC = (): ReactNode => {
    const [showCreate, setShowCreate] = useState(false)
    const { isLocal, user, cachedProfile, signOut } = useAuth()
    const { data: profile } = useProfile({
        enabled: !!user,
        staleTime: 1000 * 60 * 5
    })

    const localDisplayName =
        profile?.name || cachedProfile?.name || t('account.noNameSet')

    const queryResult = useSSHKeys()
    const sshKeys = queryResult.data as SSHKey[] | undefined
    const { isLoading, isError, refetch } = queryResult
    const { data: userStats, isLoading: isStatsLoading } = useUserStats()
    const skeletonCount = userStats?.sshKeyCount ?? 0
    const knowsCount = !isStatsLoading && userStats !== undefined

    const [howItWorksOpen, setHowItWorksOpen] = useState(false)

    return (
        <div
            className={`bg-background text-foreground ${isLocal ? 'fixed inset-0 flex flex-col overflow-hidden' : 'relative flex min-h-screen flex-col'}`}
        >
            {isLocal && <LocalBackground />}
            <PageTitle
                title={t('sshKeys.title')}
                description={t('sshKeys.description')}
                noIndex
            />
            {!isLocal && <PageBackground />}
            {isLocal ? (
                <div className='border-border bg-background relative z-10 flex items-center justify-between border-b px-6 py-3'>
                    <Logo to={ROUTES.AGENTS} />
                    <div className='flex items-center gap-1.5 sm:gap-3'>
                        <LanguageSelector />
                        <ThemeToggle />
                        <UserDropdown
                            displayName={localDisplayName}
                            onSignOut={signOut}
                        />
                    </div>
                </div>
            ) : (
                <Header />
            )}

            <motion.main
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`relative mx-auto w-full max-w-6xl flex-1 px-6 pb-16 pt-8 ${isLocal ? 'overflow-y-auto' : ''}`}
            >
                <PageHeader
                    title={t('sshKeys.title')}
                    description={t('sshKeys.keyCountDescription', {
                        count: sshKeys?.length ?? 0,
                        label:
                            sshKeys?.length === 1
                                ? t('sshKeys.key')
                                : t('sshKeys.keys')
                    })}
                    action={
                        sshKeys && sshKeys.length > 0 ? (
                            <ActionButton
                                onClick={() => setShowCreate(true)}
                                icon={
                                    <PlusCircleIcon
                                        className='h-5 w-5'
                                        weight='bold'
                                    />
                                }
                                label={t('sshKeys.addSshKey')}
                            />
                        ) : undefined
                    }
                />

                <div className='border-border bg-foreground/5 rounded-xl border p-8 backdrop-blur-sm'>
                    <div className='border-border bg-foreground/5 mb-6 rounded-lg border'>
                        <button
                            type='button'
                            onClick={() => setHowItWorksOpen(!howItWorksOpen)}
                            className='flex w-full items-center justify-between p-4 text-left'
                        >
                            <h3 className='font-semibold'>
                                {t('sshKeys.howSshKeysWork')}
                            </h3>
                            <CaretDownIcon
                                className={`text-muted-foreground h-4 w-4 transition-transform ${howItWorksOpen ? 'rotate-180' : ''}`}
                                weight='bold'
                            />
                        </button>
                        {howItWorksOpen && (
                            <ol className='text-muted-foreground list-inside list-decimal space-y-1 px-4 pb-4 text-sm'>
                                <li>{t('sshKeys.step1')}</li>
                                <li>
                                    {t('sshKeys.step2').split('public key')[0]}
                                    <strong className='text-foreground'>
                                        public key
                                    </strong>
                                    {t('sshKeys.step2').split(
                                        'public key'
                                    )[1] || ' here.'}
                                </li>
                                <li>{t('sshKeys.step3')}</li>
                                <li>
                                    {t('sshKeys.step4')}{' '}
                                    <code className='bg-foreground/10 rounded px-1'>
                                        {t('sshKeys.step4Command')}
                                    </code>{' '}
                                    {t('sshKeys.step4Suffix')}
                                </li>
                            </ol>
                        )}
                    </div>

                    {isError ? (
                        <ErrorState
                            title={t('errors.failedToLoadSSHKeys')}
                            description={t(
                                'errors.failedToLoadSSHKeysDescription'
                            )}
                            onRetry={() => refetch()}
                        />
                    ) : isLoading && knowsCount && skeletonCount === 0 ? (
                        <EmptyState
                            icon={
                                <KeyIcon className='text-primary h-10 w-10' />
                            }
                            title={t('sshKeys.noSshKeysYet')}
                            description={t('sshKeys.noSshKeysDescription')}
                            actionLabel={t('sshKeys.addSshKey')}
                            actionIcon={
                                <PlusCircleIcon
                                    className='h-5 w-5'
                                    weight='bold'
                                />
                            }
                            onAction={() => setShowCreate(true)}
                        />
                    ) : isLoading && skeletonCount > 0 ? (
                        <div className='space-y-1.5'>
                            {Array.from({ length: skeletonCount }).map(
                                (_, i) => (
                                    <SSHKeySkeleton key={i} />
                                )
                            )}
                        </div>
                    ) : sshKeys?.length === 0 ? (
                        <EmptyState
                            icon={
                                <KeyIcon className='text-primary h-10 w-10' />
                            }
                            title={t('sshKeys.noSshKeysYet')}
                            description={t('sshKeys.noSshKeysDescription')}
                            actionLabel={t('sshKeys.addSshKey')}
                            actionIcon={
                                <PlusCircleIcon
                                    className='h-5 w-5'
                                    weight='bold'
                                />
                            }
                            onAction={() => setShowCreate(true)}
                        />
                    ) : (
                        <div className='space-y-1.5'>
                            {sshKeys?.map((key) => (
                                <SSHKeyCard key={key.id} sshKey={key} />
                            ))}
                        </div>
                    )}
                </div>

                {showCreate && (
                    <CreateSSHKeyModal onClose={() => setShowCreate(false)} />
                )}
            </motion.main>

            {!isLocal && <LandingFooter />}
        </div>
    )
}

export default SSHKeys