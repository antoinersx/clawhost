import type { FC, ReactNode } from 'react'
import type { AgentDetailSettingsTabProps } from '@/ts/Interfaces'

import { t } from '@openclaw/i18n'
import {
    agentType,
    inputValidation,
    subscriptionStatus,
    userRole
} from '@openclaw/shared'
import {
    CircleNotchIcon,
    TrashIcon,
    ClockCountdownIcon,
    ArrowCounterClockwiseIcon
} from '@phosphor-icons/react'
import {
    EmojiColorPicker,
    ExportSection,
    AgentCardDialogsBundle
} from '@/components/dashboard'
import { useProfile, useAgentCardActions } from '@/hooks'
import { useAuth } from '@/lib/auth'
import { getLocale } from '@/lib'

const AgentDetailSettingsTab: FC<AgentDetailSettingsTabProps> = ({
    agent,
    currentEmoji,
    currentEmojiColor,
    settingsName,
    settingsNameError,
    settingsSubdomain,
    settingsSubdomainError,
    settingsHasChanges,
    renamePending,
    subdomainPending,
    emojiPending,
    onNameChange,
    onSubdomainChange,
    onEmojiChange,
    onSave,
    readOnly
}): ReactNode => {
    const { actions, dialogsProps } = useAgentCardActions({ agent })
    const { data: profile } = useProfile({ enabled: true })
    const { isLocal } = useAuth()
    const isAdmin = profile?.role === userRole.admin
    const isHermes = agent.agentType === agentType.HERMES
    const isScheduledForDeletion =
        !!agent.deletionScheduledAt &&
        new Date(agent.deletionScheduledAt) > new Date()

    return (
        <div className='h-full overflow-y-auto p-5'>
            <div className='space-y-5'>
                <EmojiColorPicker
                    emoji={currentEmoji}
                    emojiColor={currentEmojiColor}
                    agentType={agent.agentType}
                    onEmojiChange={onEmojiChange}
                />

                <div>
                    <label className='text-muted-foreground mb-2 block text-xs font-medium'>
                        {t('clawDetail.settingsName')}
                    </label>
                    <input
                        type='text'
                        value={settingsName}
                        onChange={(e) => onNameChange(e.target.value)}
                        onKeyDown={(e) => {
                            if (
                                e.key === 'Enter' &&
                                settingsHasChanges &&
                                !settingsNameError &&
                                !renamePending
                            ) {
                                onSave()
                            }
                        }}
                        placeholder={t('clawDetail.settingsNamePlaceholder')}
                        className={`bg-foreground/5 text-foreground placeholder:text-muted-foreground w-full rounded-md border px-3 py-2 text-sm outline-none transition-colors focus:border-[#ef5350]/50 ${
                            settingsNameError
                                ? 'border-red-500/50'
                                : 'border-border'
                        }`}
                    />
                    {settingsNameError ? (
                        <p className='mt-1.5 text-[11px] text-red-600 dark:text-red-400'>
                            {settingsNameError}
                        </p>
                    ) : (
                        <p className='text-muted-foreground mt-1.5 text-[11px]'>
                            {t('clawDetail.settingsNameDescription')}
                        </p>
                    )}
                </div>

                {!isHermes && (
                    <div>
                        <label className='text-muted-foreground mb-2 block text-xs font-medium'>
                            {t('clawDetail.subdomain')}
                        </label>
                        <div className='flex items-center gap-0'>
                            <input
                                type='text'
                                value={settingsSubdomain}
                                onChange={(e) =>
                                    onSubdomainChange(
                                        e.target.value.toLowerCase()
                                    )
                                }
                                onKeyDown={(e) => {
                                    if (
                                        e.key === 'Enter' &&
                                        settingsHasChanges &&
                                        !settingsSubdomainError &&
                                        !subdomainPending
                                    ) {
                                        onSave()
                                    }
                                }}
                                placeholder={t(
                                    'clawDetail.subdomainPlaceholder'
                                )}
                                className={`bg-foreground/5 text-foreground placeholder:text-muted-foreground w-full rounded-l-md border border-r-0 px-3 py-2 text-sm outline-none transition-colors focus:border-[#ef5350]/50 ${
                                    settingsSubdomainError
                                        ? 'border-red-500/50'
                                        : 'border-border'
                                }`}
                            />
                            <span className='border-border bg-foreground/5 text-muted-foreground flex items-center rounded-r-md border px-3 py-2 text-sm'>
                                .clawhost.cloud
                            </span>
                        </div>
                        {settingsSubdomainError ? (
                            <p className='mt-1.5 text-[11px] text-red-600 dark:text-red-400'>
                                {settingsSubdomainError}
                            </p>
                        ) : (
                            <p className='text-muted-foreground mt-1.5 text-[11px]'>
                                {t('clawDetail.subdomainDescription', {
                                    min: inputValidation.SUBDOMAIN.MIN,
                                    max: inputValidation.SUBDOMAIN.MAX
                                })}
                            </p>
                        )}
                    </div>
                )}

                {!readOnly && (
                    <button
                        onClick={onSave}
                        disabled={
                            !settingsHasChanges ||
                            !!settingsNameError ||
                            !!settingsSubdomainError ||
                            renamePending ||
                            subdomainPending ||
                            emojiPending
                        }
                        className='flex w-full items-center justify-center gap-2 rounded-lg bg-[#ef5350] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#e53935] disabled:cursor-not-allowed disabled:opacity-50'
                    >
                        {(renamePending ||
                            subdomainPending ||
                            emojiPending) && (
                            <CircleNotchIcon className='h-4 w-4 animate-spin' />
                        )}
                        {t('clawDetail.settingsSave')}
                    </button>
                )}

                {!readOnly && <ExportSection agentId={agent.id} />}

                {!readOnly && isLocal && actions && (
                    <div className='border-border border-t pt-5'>
                        <label className='text-muted-foreground mb-2 block text-xs font-medium'>
                            {t('dashboard.reinstallInstance')}
                        </label>
                        <button
                            onClick={actions.onShowReinstallModal}
                            disabled={dialogsProps?.isReinstallPending}
                            className={`flex items-center gap-1.5 rounded-md border border-orange-500/30 bg-orange-500/10 px-3 py-2 text-xs font-medium text-orange-600 transition-colors hover:bg-orange-500/20 dark:text-orange-400 ${dialogsProps?.isReinstallPending ? 'pointer-events-none cursor-default opacity-50' : ''}`}
                        >
                            {dialogsProps?.isReinstallPending ? (
                                <CircleNotchIcon className='h-3.5 w-3.5 animate-spin' />
                            ) : (
                                <ArrowCounterClockwiseIcon className='h-3.5 w-3.5' />
                            )}
                            {t('dashboard.reinstallInstance')}
                        </button>
                        <p className='text-muted-foreground mt-2 text-[11px]'>
                            {t('clawDetail.reinstallDescription', {
                                agentName: isHermes ? 'Hermes' : 'OpenClaw'
                            })}
                        </p>
                    </div>
                )}

                {actions && !readOnly && (
                    <div className='border-border border-t pt-5'>
                        <label className='text-muted-foreground mb-2 block text-xs font-medium'>
                            {t('clawDetail.settingsDangerZone')}
                        </label>
                        {isScheduledForDeletion ? (
                            <div className='space-y-2'>
                                <div className='flex items-center gap-2'>
                                    <button
                                        onClick={actions.onCancelDeletion}
                                        disabled={
                                            dialogsProps?.isCancelDeletionPending ||
                                            dialogsProps?.isHardDeletePending
                                        }
                                        className={`flex items-center gap-1.5 rounded-md border border-orange-500/30 bg-orange-500/10 px-3 py-2 text-xs font-medium text-orange-600 transition-colors hover:bg-orange-500/20 dark:text-orange-400 ${dialogsProps?.isCancelDeletionPending || dialogsProps?.isHardDeletePending ? 'pointer-events-none cursor-default opacity-50' : ''}`}
                                    >
                                        {dialogsProps?.isCancelDeletionPending ? (
                                            <CircleNotchIcon className='h-3.5 w-3.5 animate-spin' />
                                        ) : (
                                            <ClockCountdownIcon className='h-3.5 w-3.5' />
                                        )}
                                        {t('dashboard.cancelDeletion')}
                                    </button>
                                    {isAdmin && (
                                        <button
                                            onClick={
                                                actions.onShowHardDeleteModal
                                            }
                                            disabled={
                                                dialogsProps?.isHardDeletePending ||
                                                dialogsProps?.isCancelDeletionPending
                                            }
                                            className={`flex items-center gap-1.5 rounded-md border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs font-medium text-red-600 transition-colors hover:bg-red-500/20 dark:text-red-400 ${dialogsProps?.isHardDeletePending || dialogsProps?.isCancelDeletionPending ? 'pointer-events-none cursor-default opacity-50' : ''}`}
                                        >
                                            {dialogsProps?.isHardDeletePending ? (
                                                <CircleNotchIcon className='h-3.5 w-3.5 animate-spin' />
                                            ) : (
                                                <TrashIcon className='h-3.5 w-3.5' />
                                            )}
                                            {t('dashboard.hardDelete')}
                                        </button>
                                    )}
                                </div>
                                <p className='text-muted-foreground text-[11px]'>
                                    {t(
                                        'clawDetail.settingsScheduledDeletionDescription',
                                        {
                                            date: new Date(
                                                agent.deletionScheduledAt!
                                            ).toLocaleDateString(getLocale(), {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })
                                        }
                                    )}
                                </p>
                            </div>
                        ) : (
                            <div className='space-y-2'>
                                <button
                                    onClick={actions.onShowDeleteModal}
                                    disabled={dialogsProps?.isDeletePending}
                                    className={`flex items-center gap-1.5 rounded-md border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs font-medium text-red-600 transition-colors hover:bg-red-500/20 dark:text-red-400 ${dialogsProps?.isDeletePending ? 'pointer-events-none cursor-default opacity-50' : ''}`}
                                >
                                    {dialogsProps?.isDeletePending ? (
                                        <CircleNotchIcon className='h-3.5 w-3.5 animate-spin' />
                                    ) : (
                                        <TrashIcon className='h-3.5 w-3.5' />
                                    )}
                                    {isLocal ||
                                    agent.id.startsWith('pending-') ||
                                    agent.subscriptionStatus ===
                                        subscriptionStatus.canceled
                                        ? t('common.delete')
                                        : t('dashboard.scheduleDeletion')}
                                </button>
                                <p className='text-muted-foreground text-[11px]'>
                                    {t(
                                        isLocal
                                            ? 'clawDetail.settingsDangerZoneDescriptionLocal'
                                            : 'clawDetail.settingsDangerZoneDescription'
                                    )}
                                </p>
                            </div>
                        )}
                    </div>
                )}

                <div className='border-border border-t pt-5'>
                    <label className='text-muted-foreground mb-2 block text-xs font-medium'>
                        {t('clawDetail.settingsDetails')}
                    </label>
                    <div className='space-y-1.5 text-[11px]'>
                        {agent.createdAt && (
                            <p className='text-muted-foreground'>
                                {t('dashboard.created')}:{' '}
                                {new Date(
                                    readOnly ? Date.now() : agent.createdAt
                                ).toLocaleDateString(getLocale(), {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric'
                                })}
                            </p>
                        )}
                        {isAdmin && agent.ownerEmail && (
                            <p className='text-muted-foreground'>
                                {t('dashboard.owner')}: {agent.ownerEmail}
                            </p>
                        )}
                    </div>
                </div>
            </div>
            {dialogsProps && <AgentCardDialogsBundle {...dialogsProps} />}
        </div>
    )
}

export default AgentDetailSettingsTab