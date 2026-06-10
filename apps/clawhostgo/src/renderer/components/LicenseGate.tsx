import type { FC, ReactNode } from 'react'
import type { LicenseGateProps } from '@/ts/Interfaces'

import { Fragment } from 'react'
import { useAuth } from '@/lib/auth'
import { useProfile } from '@/hooks'
import {
    Logo,
    LanguageSelector,
    LocalBackground,
    ThemeToggle,
    UserDropdown,
    LicenseRequired
} from '@/components'
import { CircleNotchIcon } from '@phosphor-icons/react'
import { ROUTES } from '@/lib'

const POLL_INTERVAL = 10_000

const LicenseGate: FC<LicenseGateProps> = ({ children }): ReactNode => {
    const { user, signOut } = useAuth()
    const { data: profile, isLoading } = useProfile({
        staleTime: POLL_INTERVAL,
        refetchInterval: POLL_INTERVAL
    })

    const displayName = profile?.name || user?.email || ''

    if (isLoading) {
        return (
            <div className='bg-background flex min-h-screen items-center justify-center'>
                <CircleNotchIcon className='text-foreground/50 h-7 w-7 animate-spin' />
            </div>
        )
    }

    if (!profile?.hasLicense) {
        return (
            <div className='bg-background text-foreground fixed inset-0 flex flex-col'>
                <LocalBackground />

                <div className='border-border bg-background md:bg-background/80 relative z-10 flex shrink-0 items-center justify-between border-b px-6 py-3 md:backdrop-blur-xl'>
                    <Logo to={ROUTES.AGENTS} />
                    <div className='flex items-center gap-1.5 sm:gap-3'>
                        <div className='flex items-center gap-1.5'>
                            <LanguageSelector />
                            <ThemeToggle />
                        </div>
                        <UserDropdown
                            displayName={displayName}
                            onSignOut={signOut}
                            hideSSHKeys
                        />
                    </div>
                </div>

                <LicenseRequired />
            </div>
        )
    }

    return <Fragment>{children}</Fragment>
}

export default LicenseGate