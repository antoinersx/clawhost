import type { FC, ReactNode } from 'react'
import type { ConnectedAccountsSectionProps } from '@/ts/Interfaces'

import { t } from '@openclaw/i18n'
import { authMethod } from '@openclaw/shared'
import { OAUTH_PROVIDER } from '@/lib/constants'
import { ConnectedAccountRow } from '@/components/account'
import { GoogleIcon, GithubIcon } from '@/components/icons'
import { EnvelopeIcon } from '@phosphor-icons/react'

const ConnectedAccountsSection: FC<ConnectedAccountsSectionProps> = ({
    authMethods,
    linkingProvider,
    unlinkingProvider,
    providerBusy,
    onLink,
    onUnlink
}): ReactNode => {
    return (
        <div className='border-border bg-foreground/5 mt-6 rounded-xl border p-8 backdrop-blur-sm'>
            <div className='mb-6'>
                <h2 className='text-lg font-medium'>
                    {t('account.connectedAccounts')}
                </h2>
                <p className='text-muted-foreground mt-1 text-sm'>
                    {t('account.connectedAccountsDescription')}
                </p>
            </div>

            <div className='space-y-3'>
                <ConnectedAccountRow
                    icon={
                        <EnvelopeIcon className='text-foreground/60 h-5 w-5' />
                    }
                    label={t('account.authEmail')}
                    isConnected={true}
                    isDisabled
                    isPending={false}
                />

                <ConnectedAccountRow
                    icon={<GoogleIcon />}
                    label={t('account.authGoogle')}
                    isConnected={!!authMethods?.includes(authMethod.google)}
                    isPending={providerBusy}
                    isLoading={
                        linkingProvider === OAUTH_PROVIDER.GOOGLE ||
                        unlinkingProvider === OAUTH_PROVIDER.GOOGLE
                    }
                    onConnect={() => onLink(OAUTH_PROVIDER.GOOGLE)}
                    onDisconnect={() => onUnlink(OAUTH_PROVIDER.GOOGLE)}
                />

                <ConnectedAccountRow
                    icon={<GithubIcon />}
                    label={t('account.authGithub')}
                    isConnected={!!authMethods?.includes(authMethod.github)}
                    isPending={providerBusy}
                    isLoading={
                        linkingProvider === OAUTH_PROVIDER.GITHUB ||
                        unlinkingProvider === OAUTH_PROVIDER.GITHUB
                    }
                    onConnect={() => onLink(OAUTH_PROVIDER.GITHUB)}
                    onDisconnect={() => onUnlink(OAUTH_PROVIDER.GITHUB)}
                />
            </div>
        </div>
    )
}

export default ConnectedAccountsSection