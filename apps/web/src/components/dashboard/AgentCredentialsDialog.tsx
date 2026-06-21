import type { FC, ReactNode } from 'react'
import type { CopiedFieldType } from '@/ts/Types'
import type { AgentCredentialsDialogProps } from '@/ts/Interfaces'

import { useState, useEffect } from 'react'
import { t } from '@openclaw/i18n'
import { useToast } from '@/hooks'
import { copyToClipboard } from '@/lib'
import { COPIED_FIELD_TYPE } from '@/lib/constants'
import {
    CheckIcon,
    CopyIcon,
    EyeIcon,
    EyeSlashIcon,
    TerminalIcon,
    KeyIcon
} from '@phosphor-icons/react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from '@/components/ui'

const AgentCredentialsDialog: FC<AgentCredentialsDialogProps> = ({
    agentIp,
    rootPassword,
    open,
    onOpenChange
}): ReactNode => {
    const toast = useToast()
    const [showPassword, setShowPassword] = useState(false)
    const [showSsh, setShowSsh] = useState(false)
    const [copiedField, setCopiedField] = useState<CopiedFieldType>(null)

    const sshCommand = rootPassword
        ? `sshpass -p '${rootPassword}' ssh -o StrictHostKeyChecking=no root@${agentIp}`
        : `ssh root@${agentIp}`

    useEffect(() => {
        if (!open) {
            setShowPassword(false)
            setShowSsh(false)
            setCopiedField(null)
        }
    }, [open])

    const handleCopy = async (value: string, field: CopiedFieldType) => {
        await copyToClipboard(value)
        setCopiedField(field)
        toast.success(t('common.copied'))
        setTimeout(() => setCopiedField(null), 2000)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className='max-w-md space-y-4'>
                <DialogHeader>
                    <DialogTitle>
                        {t('dashboard.serverCredentials')}
                    </DialogTitle>
                    <DialogDescription>
                        {t('dashboard.serverCredentialsDescription')}
                    </DialogDescription>
                </DialogHeader>
                <div className='space-y-2'>
                    <div className='bg-foreground/5 group rounded-lg p-3'>
                        <div className='mb-1.5 flex items-center justify-between'>
                            <span className='text-muted-foreground flex items-center gap-1.5 text-xs'>
                                <TerminalIcon className='h-3.5 w-3.5' />
                                {t('dashboard.sshCommand')}
                            </span>
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
                                        handleCopy(
                                            sshCommand,
                                            COPIED_FIELD_TYPE.SSH
                                        )
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
                        <p className='break-all font-mono text-sm'>
                            {showSsh
                                ? sshCommand
                                : '\u2022'.repeat(
                                      Math.min(sshCommand.length, 40)
                                  )}
                        </p>
                    </div>
                    {rootPassword && (
                        <div className='bg-foreground/5 group rounded-lg p-3'>
                            <div className='mb-1.5 flex items-center justify-between'>
                                <span className='text-muted-foreground flex items-center gap-1.5 text-xs'>
                                    <KeyIcon className='h-3.5 w-3.5' />
                                    {t('dashboard.rootPassword')}
                                </span>
                                <div className='flex items-center gap-1'>
                                    <button
                                        onClick={() =>
                                            setShowPassword((p) => !p)
                                        }
                                        className='text-muted-foreground hover:text-foreground rounded-md p-1 transition-colors'
                                    >
                                        {showPassword ? (
                                            <EyeSlashIcon className='h-3.5 w-3.5' />
                                        ) : (
                                            <EyeIcon className='h-3.5 w-3.5' />
                                        )}
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleCopy(
                                                rootPassword,
                                                COPIED_FIELD_TYPE.PASSWORD
                                            )
                                        }
                                        className='text-muted-foreground hover:text-foreground rounded-md p-1 transition-colors'
                                    >
                                        {copiedField ===
                                        COPIED_FIELD_TYPE.PASSWORD ? (
                                            <CheckIcon className='h-3.5 w-3.5 text-green-500' />
                                        ) : (
                                            <CopyIcon className='h-3.5 w-3.5' />
                                        )}
                                    </button>
                                </div>
                            </div>
                            <p className='break-all font-mono text-sm'>
                                {showPassword
                                    ? rootPassword
                                    : '\u2022'.repeat(
                                          Math.min(rootPassword.length, 32)
                                      )}
                            </p>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default AgentCredentialsDialog