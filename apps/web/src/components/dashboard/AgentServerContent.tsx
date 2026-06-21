import type { FC, ReactNode } from 'react'
import type { CopiedFieldType } from '@/ts/Types'
import type { AgentServerContentProps } from '@/ts/Interfaces'

import { useState, useEffect, useCallback } from 'react'
import { t } from '@openclaw/i18n'
import {
    TerminalIcon,
    CopyIcon,
    CheckIcon,
    EyeIcon,
    EyeSlashIcon,
    ArrowCounterClockwiseIcon,
    CircleNotchIcon
} from '@phosphor-icons/react'
import { Button, Skeleton } from '@/components/ui'
import { CopyableField } from '@/components/dashboard'
import { ConfirmationDialog } from '@/components/shared'
import { api, copyToClipboard, handleAbortToast } from '@/lib'
import { useReinstallAgent, useToast, useAbortController } from '@/hooks'
import {
    getAgentDisplayName,
    locationFlags,
    locationNames
} from '@/lib/agent-utils'
import { COPIED_FIELD_TYPE, TOAST_TYPE } from '@/lib/constants'
import { useUIStore } from '@/lib/store'

const AgentServerContent: FC<AgentServerContentProps> = ({
    agent,
    plans,
    readOnly
}): ReactNode => {
    const toast = useToast()
    const { showToast } = useUIStore()
    const reinstallMutation = useReinstallAgent()
    const getReinstallSignal = useAbortController()

    const [loading, setLoading] = useState(true)
    const [rootPassword, setRootPassword] = useState<string | null>(null)
    const [showSsh, setShowSsh] = useState(false)
    const [copiedField, setCopiedField] = useState<CopiedFieldType>(null)
    const [showReinstallModal, setShowReinstallModal] = useState(false)

    const plan = plans.find((p) => p.id === agent.planId)
    const locationName = agent.location
        ? locationNames[agent.location] || agent.location
        : t('common.unknown')
    const flag = agent.location ? locationFlags[agent.location] : null

    useEffect(() => {
        if (readOnly) {
            setRootPassword('demoP@ss123')
            setLoading(false)
            return
        }
        const fetchCredentials = async () => {
            try {
                const res = await api.getAgentCredentials(agent.id)
                setRootPassword(res.rootPassword || null)
            } catch {
                setRootPassword(null)
            } finally {
                setLoading(false)
            }
        }
        fetchCredentials()
    }, [agent.id, readOnly])

    const sshCommand = rootPassword
        ? `sshpass -p '${rootPassword}' ssh -o StrictHostKeyChecking=no root@${agent.ip}`
        : `ssh root@${agent.ip}`

    const handleCopy = useCallback(
        async (value: string, field: CopiedFieldType) => {
            await copyToClipboard(value)
            setCopiedField(field)
            toast.success(t('common.copied'))
            setTimeout(() => setCopiedField(null), 2000)
        },
        [toast]
    )

    const handleReinstall = useCallback(() => {
        reinstallMutation.mutate(
            { id: agent.id, signal: getReinstallSignal() },
            {
                onSuccess: () => {
                    setShowReinstallModal(false)
                    showToast(
                        t('dashboard.reinstallInstanceSuccess'),
                        TOAST_TYPE.SUCCESS
                    )
                },
                onError: (err: Error) => {
                    setShowReinstallModal(false)
                    if (
                        handleAbortToast(
                            err,
                            showToast,
                            'dashboard.reinstallCanceledNavigation'
                        )
                    )
                        return
                    showToast(
                        err.message || t('dashboard.reinstallInstanceFailed'),
                        TOAST_TYPE.ERROR
                    )
                }
            }
        )
    }, [agent.id, reinstallMutation, showToast, getReinstallSignal])

    if (loading) {
        return (
            <div className='h-full overflow-y-auto p-5'>
                <div className='space-y-3'>
                    <Skeleton className='h-24 w-full rounded-lg' />
                    <Skeleton className='h-24 w-full rounded-lg' />
                </div>
            </div>
        )
    }

    return (
        <div className='h-full space-y-4 overflow-y-auto p-5'>
            <div className='grid grid-cols-2 gap-2'>
                {agent.ip && (
                    <CopyableField
                        label={t('clawDetail.serverIpAddress')}
                        value={agent.ip}
                    />
                )}

                {agent.providerServerId && (
                    <CopyableField
                        label={t('dashboard.serverId')}
                        value={`#${agent.providerServerId}`}
                    />
                )}

                <CopyableField
                    label={t('dashboard.location')}
                    value={`${flag || ''} ${locationName}`.trim()}
                />

                {plan && (
                    <CopyableField
                        label={t('dashboard.plan')}
                        value={`${plan.name.replace(/([A-Za-z])(\d)/, '$1 $2')} (${plan.cpu} vCPU, ${plan.memory}GB RAM, ${plan.disk}GB SSD)`}
                    />
                )}
            </div>

            <div className='border-border rounded-lg border p-4'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <TerminalIcon className='h-4 w-4 text-blue-500' />
                        <h4 className='text-sm font-medium'>
                            {t('dashboard.sshCommand')}
                        </h4>
                    </div>

                    <div className='flex items-center gap-1'>
                        <button
                            onClick={() => setShowSsh((p) => !p)}
                            className='text-muted-foreground hover:text-foreground rounded-md p-1 transition-colors'
                        >
                            {showSsh ? (
                                <EyeSlashIcon className='h-3.5 w-3.5' />
                            ) : (
                                <EyeIcon className='h-3.5 w-3.5' />
                            )}
                        </button>
                        <button
                            onClick={() =>
                                handleCopy(sshCommand, COPIED_FIELD_TYPE.SSH)
                            }
                            className='text-muted-foreground hover:text-foreground rounded-md p-1 transition-colors'
                        >
                            {copiedField === COPIED_FIELD_TYPE.SSH ? (
                                <CheckIcon className='h-3.5 w-3.5 text-green-500' />
                            ) : (
                                <CopyIcon className='h-3.5 w-3.5' />
                            )}
                        </button>
                    </div>
                </div>
                <p className='mt-2 break-all font-mono text-sm'>
                    {showSsh
                        ? sshCommand
                        : '\u2022'.repeat(Math.min(sshCommand.length, 40))}
                </p>
            </div>

            {!readOnly && (
                <div className='border-border rounded-lg border p-4'>
                    <div className='mb-3 flex items-center gap-2'>
                        <ArrowCounterClockwiseIcon className='h-4 w-4 text-red-500' />
                        <h4 className='text-sm font-medium'>
                            {t('dashboard.reinstallInstance')}
                        </h4>
                    </div>
                    <p className='text-muted-foreground mb-3 text-sm'>
                        {t('clawDetail.reinstallDescription', {
                            agentName: getAgentDisplayName(agent.agentType)
                        })}
                    </p>
                    <Button
                        variant='destructive'
                        size='sm'
                        onClick={() => setShowReinstallModal(true)}
                        disabled={reinstallMutation.isPending}
                    >
                        {reinstallMutation.isPending && (
                            <CircleNotchIcon className='mr-2 h-4 w-4 animate-spin' />
                        )}
                        {t('dashboard.reinstallInstance')}
                    </Button>
                </div>
            )}

            <ConfirmationDialog
                open={showReinstallModal}
                onOpenChange={setShowReinstallModal}
                title={t('dashboard.reinstallClaw')}
                description={t('dashboard.reinstallClawConfirmation', {
                    agentName: getAgentDisplayName(agent.agentType)
                })}
                confirmLabel={t('common.confirm')}
                onConfirm={handleReinstall}
                isPending={reinstallMutation.isPending}
                variant='destructive'
            />
        </div>
    )
}

export default AgentServerContent