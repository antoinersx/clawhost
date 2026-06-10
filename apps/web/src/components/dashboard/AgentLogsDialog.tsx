import type { FC, ReactNode } from 'react'
import type { AgentLogsDialogProps } from '@/ts/Interfaces'

import { t } from '@openclaw/i18n'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from '@/components/ui'
import { AgentLogsContent } from '@/components/dashboard'

const AgentLogsDialog: FC<AgentLogsDialogProps> = ({
    agentId,
    agentType,
    open,
    onOpenChange
}): ReactNode => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className='flex max-h-[80vh] max-w-2xl flex-col'>
                <DialogHeader>
                    <DialogTitle>{t('dashboard.diagnosticsLogs')}</DialogTitle>
                    <DialogDescription>
                        {t('dashboard.logsDescription')}
                    </DialogDescription>
                </DialogHeader>

                <div className='mt-4 h-[600px]'>
                    <AgentLogsContent
                        agentId={agentId}
                        agentType={agentType}
                        enabled={open}
                    />
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default AgentLogsDialog