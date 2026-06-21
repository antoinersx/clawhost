import type { FC, MouseEvent, ReactNode } from 'react'

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { t } from '@openclaw/i18n'
import { Logo } from '@/components/layout'
import { TrustMrrBadge } from '@/components/landing'
import { ROUTES } from '@/lib'
import { SCROLL_SPY } from '@/lib/constants'
import { GITHUB_REPO_URL } from '@/hooks'
import {
    TWITTER_URL,
    FACEBOOK_URL,
    INSTAGRAM_URL,
    THREADS_URL,
    YOUTUBE_URL,
    TIKTOK_URL,
    SUPPORT_EMAIL
} from '@/lib/links'
import {
    FacebookLogoIcon,
    GithubLogoIcon,
    InstagramLogoIcon,
    ThreadsLogoIcon,
    TiktokLogoIcon,
    XLogoIcon,
    YoutubeLogoIcon
} from '@phosphor-icons/react'

const LANDING_SECTIONS = ['features', 'pricing', 'comparison', 'faq']

const LandingFooter: FC = (): ReactNode => {
    const { pathname } = useLocation()
    const isLanding = pathname === ROUTES.HOME
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        if (!isLanding) return

        const handleScroll = (): void => {
            for (const section of [...LANDING_SECTIONS].reverse()) {
                const el = document.getElementById(section)
                if (
                    el &&
                    window.scrollY >= el.offsetTop - SCROLL_SPY.SECTION_OFFSET
                ) {
                    setActiveSection(section)
                    return
                }
            }
            if (window.scrollY < SCROLL_SPY.TOP_THRESHOLD) setActiveSection('')
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [isLanding])

    const hashClass = (section: string): string =>
        `transition ${isLanding && activeSection === section ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`

    const pageClass = (route: string): string =>
        `transition ${pathname === route || pathname.startsWith(route + '/') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`

    const handleHashClick = (e: MouseEvent, section: string): void => {
        if (isLanding) {
            e.preventDefault()
            const el = document.getElementById(section)
            if (el) el.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <footer className='border-border border-t px-6 py-16'>
            <div className='mx-auto max-w-6xl'>
                <div className='grid gap-12 md:grid-cols-4'>
                    <div className='md:col-span-2'>
                        <Logo />
                        <p className='text-muted-foreground mt-4 max-w-sm text-[15.5px]'>
                            {t('footer.productDescription')}
                        </p>
                        <div className='mt-6'>
                            <TrustMrrBadge />
                        </div>
                        <div className='mt-6 flex items-center gap-3'>
                            <a
                                href={GITHUB_REPO_URL}
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label={t('footer.ariaGithub')}
                                className='bg-foreground/5 text-muted-foreground hover:bg-foreground/10 hover:text-foreground rounded-lg p-2 transition'
                            >
                                <GithubLogoIcon
                                    className='h-5 w-5'
                                    weight='fill'
                                />
                            </a>
                            <a
                                href={TWITTER_URL}
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label={t('footer.ariaX')}
                                className='bg-foreground/5 text-muted-foreground hover:bg-foreground/10 hover:text-foreground rounded-lg p-2 transition'
                            >
                                <XLogoIcon className='h-5 w-5' weight='fill' />
                            </a>
                            <a
                                href={FACEBOOK_URL}
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label={t('footer.ariaFacebook')}
                                className='bg-foreground/5 text-muted-foreground hover:bg-foreground/10 hover:text-foreground rounded-lg p-2 transition'
                            >
                                <FacebookLogoIcon
                                    className='h-5 w-5'
                                    weight='fill'
                                />
                            </a>
                            <a
                                href={INSTAGRAM_URL}
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label={t('footer.ariaInstagram')}
                                className='bg-foreground/5 text-muted-foreground hover:bg-foreground/10 hover:text-foreground rounded-lg p-2 transition'
                            >
                                <InstagramLogoIcon
                                    className='h-5 w-5'
                                    weight='fill'
                                />
                            </a>
                            <a
                                href={THREADS_URL}
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label={t('footer.ariaThreads')}
                                className='bg-foreground/5 text-muted-foreground hover:bg-foreground/10 hover:text-foreground rounded-lg p-2 transition'
                            >
                                <ThreadsLogoIcon
                                    className='h-5 w-5'
                                    weight='fill'
                                />
                            </a>
                            <a
                                href={YOUTUBE_URL}
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label={t('footer.ariaYoutube')}
                                className='bg-foreground/5 text-muted-foreground hover:bg-foreground/10 hover:text-foreground rounded-lg p-2 transition'
                            >
                                <YoutubeLogoIcon
                                    className='h-5 w-5'
                                    weight='fill'
                                />
                            </a>
                            <a
                                href={TIKTOK_URL}
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label={t('footer.ariaTiktok')}
                                className='bg-foreground/5 text-muted-foreground hover:bg-foreground/10 hover:text-foreground rounded-lg p-2 transition'
                            >
                                <TiktokLogoIcon
                                    className='h-5 w-5'
                                    weight='fill'
                                />
                            </a>
                        </div>
                        <div className='mt-5 hidden items-center gap-3'>
                            <a
                                href='#'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label={t('footer.downloadAndroid')}
                                className='opacity-80 transition hover:opacity-100'
                            >
                                <img
                                    src='/badges/google-play-dark.svg'
                                    alt={t('footer.downloadAndroid')}
                                    loading='lazy'
                                    className='hidden h-10 dark:block'
                                />
                                <img
                                    src='/badges/google-play-light.svg'
                                    alt={t('footer.downloadAndroid')}
                                    loading='lazy'
                                    className='block h-10 dark:hidden'
                                />
                            </a>
                            <a
                                href='#'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label={t('footer.downloadIos')}
                                className='opacity-80 transition hover:opacity-100'
                            >
                                <img
                                    src='/badges/app-store-light.svg'
                                    alt={t('footer.downloadIos')}
                                    loading='lazy'
                                    className='block h-10 dark:hidden'
                                />
                                <img
                                    src='/badges/app-store-dark.svg'
                                    alt={t('footer.downloadIos')}
                                    loading='lazy'
                                    className='hidden h-10 dark:block'
                                />
                            </a>
                        </div>
                        <p className='text-muted-foreground mt-4 text-sm'>
                            &copy; {new Date().getFullYear()}{' '}
                            {t('footer.copyrightName')}{' '}
                            <span className='text-muted-foreground/60 text-[11px]'>
                                ({__APP_VERSION__})
                            </span>
                            . {t('footer.copyrightRights')}
                        </p>
                    </div>

                    <nav aria-label={t('footer.product')}>
                        <h4 className='font-clash text-foreground mb-4 font-semibold'>
                            {t('footer.product')}
                        </h4>
                        <ul className='space-y-3 text-sm'>
                            <li>
                                <Link
                                    to={`${ROUTES.HOME}#features`}
                                    onClick={(e) =>
                                        handleHashClick(e, 'features')
                                    }
                                    className={hashClass('features')}
                                >
                                    {t('landing.features')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`${ROUTES.HOME}#pricing`}
                                    onClick={(e) =>
                                        handleHashClick(e, 'pricing')
                                    }
                                    className={hashClass('pricing')}
                                >
                                    {t('landing.pricing')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`${ROUTES.HOME}#comparison`}
                                    onClick={(e) =>
                                        handleHashClick(e, 'comparison')
                                    }
                                    className={hashClass('comparison')}
                                >
                                    {t('landing.comparison')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`${ROUTES.HOME}#faq`}
                                    onClick={(e) => handleHashClick(e, 'faq')}
                                    className={hashClass('faq')}
                                >
                                    {t('landing.faqTitle')}
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <nav aria-label={t('footer.legalAndMore')}>
                        <h4 className='font-clash text-foreground mb-4 font-semibold'>
                            {t('footer.legalAndMore')}
                        </h4>
                        <ul className='space-y-3 text-sm'>
                            <li>
                                <Link
                                    to={ROUTES.COMPARE}
                                    className={pageClass(ROUTES.COMPARE)}
                                >
                                    {t('footer.compare')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={ROUTES.CHANGELOG}
                                    className={pageClass(ROUTES.CHANGELOG)}
                                >
                                    {t('footer.changelog')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={ROUTES.PRIVACY}
                                    className={pageClass(ROUTES.PRIVACY)}
                                >
                                    {t('footer.privacyPolicy')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={ROUTES.TERMS}
                                    className={pageClass(ROUTES.TERMS)}
                                >
                                    {t('footer.termsOfService')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={ROUTES.AFFILIATE_PROGRAM}
                                    className={pageClass(
                                        ROUTES.AFFILIATE_PROGRAM
                                    )}
                                >
                                    {t('footer.affiliateProgram')}
                                </Link>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${SUPPORT_EMAIL}`}
                                    className='text-muted-foreground hover:text-foreground transition'
                                >
                                    {t('footer.getInTouch')}
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default LandingFooter