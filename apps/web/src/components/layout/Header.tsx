import type { FC, ReactNode } from 'react'
import type { HeaderProps, ElectronWindow } from '@/ts/Interfaces'

import { Fragment, useState, useEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { t } from '@openclaw/i18n'
import { useAuth } from '@/lib/auth'
import { useProfile } from '@/hooks'
import { Button, Skeleton } from '@/components/ui'
import {
    AcquiredBanner,
    BetaBadge,
    Logo,
    ProductSwitcher
} from '@/components/layout'
import {
    LanguageSelector,
    ThemeToggle,
    UserDropdown
} from '@/components/shared'
import { ROUTES } from '@/lib'
import { GETOPENCLAW_CLOUD_URL } from '@/lib/links'
import { LightningIcon, ListIcon, XIcon } from '@phosphor-icons/react'

const Header: FC<HeaderProps> = ({
    showNavLinks = false,
    navLinks = [],
    activeSection = ''
}): ReactNode => {
    const { user, loading: authLoading, cachedProfile, signOut } = useAuth()
    const location = useLocation()
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), [])

    useEffect(() => {
        if (!mobileMenuOpen) return
        const onScroll = () => setMobileMenuOpen(false)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [mobileMenuOpen])

    const isDesktop = !!(window as unknown as ElectronWindow).electronAPI
        ?.isDesktop

    const { data: profile } = useProfile({
        enabled: !!user
    })

    const displayName =
        profile?.name ||
        cachedProfile?.name ||
        user?.email ||
        cachedProfile?.email ||
        ''

    const normalizedPath =
        location.pathname.length > 1 && location.pathname.endsWith('/')
            ? location.pathname.slice(0, -1)
            : location.pathname
    const isLandingPage =
        normalizedPath === ROUTES.HOME || normalizedPath === ROUTES.GO

    return (
        <Fragment>
            <header
                className={`${isLandingPage ? 'fixed' : 'relative'} left-0 right-0 top-0 z-50 transition-all duration-300 ${
                    mobileMenuOpen
                        ? 'bg-background border-b border-transparent backdrop-blur-xl'
                        : scrolled
                          ? 'border-border bg-background/80 border-b backdrop-blur-xl'
                          : 'border-b border-transparent bg-transparent'
                }`}
            >
                <AcquiredBanner />
                <div className='mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4'>
                    <div className='flex items-center gap-3'>
                        <Logo />
                        {isDesktop && <BetaBadge />}
                        <ProductSwitcher />
                    </div>

                    {showNavLinks && navLinks.length > 0 ? (
                        <nav
                            className='hidden items-center justify-center gap-6 md:flex'
                            aria-label={t('nav.mainNavigation')}
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    aria-current={
                                        activeSection === link.id
                                            ? 'true'
                                            : undefined
                                    }
                                    className={`text-sm font-medium transition ${
                                        activeSection === link.id
                                            ? 'text-foreground'
                                            : 'text-muted-foreground hover:text-foreground'
                                    }`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    ) : (
                        <div />
                    )}

                    <div className='flex items-center gap-3'>
                        <div className='hidden items-center gap-1.5 sm:flex'>
                            <LanguageSelector />
                            <ThemeToggle />
                        </div>
                        {authLoading && !cachedProfile ? (
                            <Button
                                variant='ghost'
                                size='sm'
                                className='pointer-events-none ml-auto flex w-auto items-center gap-2 px-1.5 py-5'
                            >
                                <Skeleton className='bg-foreground/10 h-7 w-7 shrink-0 rounded-full' />
                                <Skeleton className='bg-foreground/10 hidden h-4 w-16 rounded sm:block' />
                            </Button>
                        ) : user || cachedProfile ? (
                            <UserDropdown
                                displayName={displayName}
                                onSignOut={signOut}
                                onOpen={closeMobileMenu}
                            />
                        ) : (
                            <div className='flex items-center gap-2'>
                                <a
                                    href={GETOPENCLAW_CLOUD_URL}
                                    className='text-muted-foreground hover:text-foreground hidden px-3 py-1.5 text-sm transition sm:block'
                                >
                                    {t('nav.login')}
                                </a>
                                <Button
                                    size='lg'
                                    className='gap-2 border-0 bg-gradient-to-r from-[#ef5350] to-[#c62828] px-4 text-white hover:opacity-90'
                                    asChild
                                >
                                    <a href={GETOPENCLAW_CLOUD_URL}>
                                        <LightningIcon
                                            className='h-4 w-4'
                                            weight='fill'
                                        />
                                        <span className='sm:hidden'>
                                            {t('nav.deploy')}
                                        </span>
                                        <span className='hidden sm:inline'>
                                            {t('nav.deployOpenClaw')}
                                        </span>
                                    </a>
                                </Button>
                            </div>
                        )}
                        {showNavLinks && navLinks.length > 0 && (
                            <button
                                onClick={() =>
                                    setMobileMenuOpen(!mobileMenuOpen)
                                }
                                aria-label={t('nav.toggleMenu')}
                                aria-expanded={mobileMenuOpen}
                                className='text-muted-foreground hover:bg-foreground/10 hover:text-foreground rounded-lg p-1.5 transition-colors md:hidden'
                            >
                                {mobileMenuOpen ? (
                                    <XIcon className='h-5 w-5' weight='bold' />
                                ) : (
                                    <ListIcon
                                        className='h-5 w-5'
                                        weight='bold'
                                    />
                                )}
                            </button>
                        )}
                    </div>
                </div>

                <AnimatePresence>
                    {mobileMenuOpen && showNavLinks && navLinks.length > 0 && (
                        <Fragment>
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className='border-border bg-background border-b px-6 pb-6 pt-2 md:hidden'
                            >
                                <nav className='flex flex-col gap-1'>
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            onClick={closeMobileMenu}
                                            className={`rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                                                activeSection === link.id
                                                    ? 'bg-foreground/10 text-foreground'
                                                    : 'text-muted-foreground hover:bg-foreground/5 hover:text-foreground'
                                            }`}
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </nav>
                                <div className='border-border flex items-center gap-1.5 border-t pt-4 sm:hidden'>
                                    <LanguageSelector />
                                    <ThemeToggle />
                                </div>
                            </motion.div>
                        </Fragment>
                    )}
                </AnimatePresence>
            </header>

            <AnimatePresence>
                {mobileMenuOpen && showNavLinks && navLinks.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className='fixed inset-0 z-40 md:hidden'
                        onClick={closeMobileMenu}
                    />
                )}
            </AnimatePresence>
        </Fragment>
    )
}

export default Header