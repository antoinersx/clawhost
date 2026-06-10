import type { FC, ReactNode } from 'react'
import type { AgentDiagnosticsDialogProps } from '@/ts/Interfaces'

import { t } from '@openclaw/i18n'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from '@/components/ui'
import { AgentDiagnosticsContent } from '@/components/dashboard'

const AgentDiagnosticsDialog: FC<AgentDiagnosticsDialogProps> = ({
    agentId,
    open,
    onOpenChange
}): ReactNode => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className='flex max-h-[80vh] max-w-2xl flex-col'>
                <DialogHeader>
                    <DialogTitle>{t('dashboard.diagnostics')}</DialogTitle>
                    <DialogDescription>
                        {t('dashboard.diagnosticsDescription')}
                    </DialogDescription>
                </DialogHeader>

                <div className='mt-4 h-[600px]'>
                    <AgentDiagnosticsContent agentId={agentId} enabled={open} />
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default AgentDiagnosticsDialog