import type { FC, ReactNode } from 'react'
import type { AgentSecurityContentProps } from '@/ts/Interfaces'

import { t } from '@openclaw/i18n'
import { ShieldCheckIcon, FingerprintIcon } from '@phosphor-icons/react'
import { Skeleton } from '@/components/ui'
import { CopyableField } from '@/components/dashboard'
import {
    useAgentCredentials,
    useRotatePassword,
    useRotateGatewayToken,
    useToast,
    useAbortController
} from '@/hooks'
import { useUIStore } from '@/lib/store'
import { useAuth } from '@/lib/auth'
import { handleAbortToast } from '@/lib'
import { generatePassword, generateToken } from '@/lib/agent-utils'
import {
    SecuritySection,
    SecretField,
    SecuritySSHKeySection
} from '@/components/dashboard/AgentSecurityContent'

const DEMO_PASSWORD = 'x9Kf2mPq7wLn4R'
const DEMO_TOKEN = 'gw_demo_4a8b2c1d3e5f6789'

const AgentSecurityContent: FC<AgentSecurityContentProps> = ({
    agent,
    sshKeys,
    readOnly
}): ReactNode => {
    const { isLocal } = useAuth()
    const credentials = useAgentCredentials(readOnly ? '' : agent.id)
    const rotatePassword = useRotatePassword()
    const rotateGatewayToken = useRotateGatewayToken()
    const toast = useToast()
    const { showToast } = useUIStore()
    const getPasswordSignal = useAbortController()
    const getTokenSignal = useAbortController()

    const handleSavePassword = () => {
        if (!credentials.password) return
        rotatePassword.mutate(
            {
                id: agent.id,
                password: credentials.password,
                signal: getPasswordSignal()
            },
            {
                onSuccess: () => {
                    toast.success(t('api.passwordRotated'))
                    credentials.confirmPasswordSaved()
                },
                onError: (err) => {
                    if (
                        handleAbortToast(
                            err,
                            showToast,
                            'clawDetail.savePasswordCanceledNavigation'
                        )
                    )
                        return
                    toast.error(err.message || t('api.failedToRotatePassword'))
                }
            }
        )
    }

    const handleSaveGatewayToken = () => {
        if (!credentials.gatewayToken) return
        rotateGatewayToken.mutate(
            {
                id: agent.id,
                token: credentials.gatewayToken,
                signal: getTokenSignal()
            },
            {
                onSuccess: () => {
                    toast.success(t('api.gatewayTokenRotated'))
                    credentials.confirmTokenSaved()
                },
                onError: (err) => {
                    if (
                        handleAbortToast(
                            err,
                            showToast,
                            'clawDetail.saveGatewayTokenCanceledNavigation'
                        )
                    )
                        return
                    toast.error(
                        err.message || t('api.failedToRotateGatewayToken')
                    )
                }
            }
        )
    }

    return (
        <div className='h-full space-y-4 overflow-y-auto p-5'>
            {!isLocal && (
                <SecuritySSHKeySection
                    agentId={agent.id}
                    sshKeyId={agent.sshKeyId}
                    sshKeys={sshKeys}
                    readOnly={readOnly}
                />
            )}

            <SecuritySection
                title={t('clawDetail.securityPassword')}
                icon={<ShieldCheckIcon className='h-4 w-4 text-blue-500' />}
            >
                {!readOnly && credentials.loading ? (
                    <Skeleton className='h-10 w-full rounded-lg' />
                ) : (
                    <SecretField
                        value={readOnly ? DEMO_PASSWORD : credentials.password}
                        onChange={credentials.setPassword}
                        onRandomize={() =>
                            credentials.setPassword(generatePassword())
                        }
                        onSave={handleSavePassword}
                        placeholder={t('createClaw.rootPasswordPlaceholder')}
                        saveTooltip={t('clawDetail.securitySavePassword')}
                        hasChanges={
                            readOnly ? false : credentials.passwordChanged
                        }
                        saving={rotatePassword.isPending}
                        readOnly={readOnly}
                    />
                )}
            </SecuritySection>

            <SecuritySection
                title={t('clawDetail.securityGatewayToken')}
                icon={<ShieldCheckIcon className='h-4 w-4 text-purple-500' />}
            >
                {!readOnly && credentials.loading ? (
                    <Skeleton className='h-10 w-full rounded-lg' />
                ) : (
                    <SecretField
                        value={readOnly ? DEMO_TOKEN : credentials.gatewayToken}
                        onChange={credentials.setGatewayToken}
                        onRandomize={() =>
                            credentials.setGatewayToken(generateToken())
                        }
                        onSave={handleSaveGatewayToken}
                        placeholder={t('createClaw.gatewayTokenPlaceholder')}
                        saveTooltip={t('clawDetail.securitySaveToken')}
                        hasChanges={readOnly ? false : credentials.tokenChanged}
                        saving={rotateGatewayToken.isPending}
                        readOnly={readOnly}
                    />
                )}
            </SecuritySection>

            {agent.hostKeyFingerprint && (
                <SecuritySection
                    title={t('clawDetail.securityHostKey')}
                    icon={
                        <FingerprintIcon className='h-4 w-4 text-emerald-500' />
                    }
                >
                    <CopyableField
                        label={t('clawDetail.securityHostKey')}
                        value={agent.hostKeyFingerprint}
                    />
                </SecuritySection>
            )}
        </div>
    )
}

export default AgentSecurityContent