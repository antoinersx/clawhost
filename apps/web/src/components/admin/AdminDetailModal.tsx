import type { FC, ReactNode } from 'react'
import type {
    AdminDetailModalProps,
    AdminAgentListItem,
    AdminSSHKeyListItem,
    AdminVolumeListItem,
    AdminPendingAgentListItem,
    AdminReferralListItem,
    AdminEmailListItem,
    BillingOrder
} from '@/ts/Interfaces'

import { Dialog, DialogContent } from '@/components/ui'
import {
    AdminAgentDetailView,
    AdminSSHKeyDetailView,
    AdminVolumeDetailView,
    AdminPendingAgentDetailView,
    AdminReferralDetailView,
    AdminEmailDetailView,
    AdminBillingDetailView,
    AdminUserDetailView
} from '@/components/admin'

const AdminDetailModal: FC<AdminDetailModalProps> = ({
    entity,
    onClose,
    onNavigateToUser
}): ReactNode => {
    const renderEntityContent = () => {
        if (!entity) return null

        switch (entity.type) {
            case 'user':
                return (
                    <AdminUserDetailView userId={entity.id} onClose={onClose} />
                )
            case 'agent':
                return (
                    <AdminAgentDetailView
                        agent={entity.data as AdminAgentListItem}
                        onClose={onClose}
                        onNavigateToUser={onNavigateToUser}
                    />
                )
            case 'ssh-key':
                return (
                    <AdminSSHKeyDetailView
                        sshKey={entity.data as AdminSSHKeyListItem}
                        onClose={onClose}
                        onNavigateToUser={onNavigateToUser}
                    />
                )
            case 'volume':
                return (
                    <AdminVolumeDetailView
                        volume={entity.data as AdminVolumeListItem}
                        onClose={onClose}
                        onNavigateToUser={onNavigateToUser}
                    />
                )
            case 'pending-agent':
                return (
                    <AdminPendingAgentDetailView
                        pendingAgent={entity.data as AdminPendingAgentListItem}
                        onClose={onClose}
                        onNavigateToUser={onNavigateToUser}
                    />
                )
            case 'referral':
                return (
                    <AdminReferralDetailView
                        referral={entity.data as AdminReferralListItem}
                        onClose={onClose}
                        onNavigateToUser={onNavigateToUser}
                    />
                )
            case 'email':
                return (
                    <AdminEmailDetailView
                        email={entity.data as AdminEmailListItem}
                        onClose={onClose}
                        onNavigateToUser={onNavigateToUser}
                    />
                )
            case 'billing':
                return (
                    <AdminBillingDetailView
                        order={entity.data as BillingOrder}
                        onClose={onClose}
                    />
                )
            default:
                return null
        }
    }

    return (
        <Dialog open={!!entity} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className='max-h-[85vh] w-[calc(100vw-2rem)] max-w-2xl overflow-y-auto'>
                {renderEntityContent()}
            </DialogContent>
        </Dialog>
    )
}

export default AdminDetailModal