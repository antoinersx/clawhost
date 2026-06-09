import type { FC, ReactNode } from 'react'
import type { Faq } from '@/ts/Interfaces'

import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useScroll, useTransform } from 'framer-motion'
import { t } from '@openclaw/i18n'
import { externalUrls, PLANS } from '@openclaw/shared'
import {
    PageTitle,
    Header,
    LandingFooter,
    HeroButtons,
    HeroBadge,
    HeroTitle,
    StatsRow,
    DemoPreviewSection,
    FeaturesGrid,
    PricingSection,
    ComparisonTable,
    FaqSection,
    LandingCTA,
    JsonLd
} from '@/components'
import { getBaseDomain, SCROLL_SECTIONS } from '@/lib'
import {
    TWITTER_URL,
    FACEBOOK_URL,
    INSTAGRAM_URL,
    YOUTUBE_URL,
    TIKTOK_URL,
    TUTORIAL_URL
} from '@/lib/links'
import { GITHUB_REPO_URL } from '@/hooks'
import { usePreferencesStore } from '@/lib/store'
import { PRODUCT } from '@/lib/constants'
import {
    ShieldCheckIcon,
    GlobeIcon,
    ClockIcon,
    TerminalIcon,
    LockIcon,
    GaugeIcon,
    LinkIcon,
    PulseIcon,
    GearSixIcon,
    StackIcon,
    GitBranchIcon,
    KeyIcon
} from '@phosphor-icons/react'

const getFaqs = (): Faq[] => [
    {
        question: t('landing.faq1Question'),
        answer: t('landing.faq1Answer')
    },
    {
        question: t('landing.faq2Question'),
        answer: t('landing.faq2Answer')
    },
    {
        question: t('landing.faqHermesQuestion'),
        answer: t('landing.faqHermesAnswer')
    },
    {
        question: t('landing.faq3Question'),
        answer: t('landing.faq3Answer')
    },
    {
        question: t('landing.faq4Question'),
        answer: t('landing.faq4Answer')
    },
    {
        question: t('landing.faq5Question'),
        answer: t('landing.faq5Answer')
    },
    {
        question: t('landing.faq6Question'),
        answer: t('landing.faq6Answer')
    },
    {
        question: t('landing.faq7Question'),
        answer: t('landing.faq7Answer')
    }
]

const Landing: FC = (): ReactNode => {
    const { hash } = useLocation()
    const setProduct = usePreferencesStore((s) => s.setProduct)
    useEffect(() => {
        setProduct(PRODUCT.CLOUD)
    }, [setProduct])
    const showTutorialBadge = true
    const hetznerPlans = PLANS

    const plans = hetznerPlans

    const [activeSection, setActiveSection] = useState('')

    const previewRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress: previewProgress } = useScroll({
        target: previewRef,
        offset: ['start end', 'end start']
    })
    const previewScale = useTransform(
        previewProgress,
        [0, 0.4, 0.6, 1],
        [0.92, 1.02, 1.02, 0.92]
    )

    useEffect(() => {
        if (!hash) return
        const id = hash.replace('#', '')
        const el = document.getElementById(id)
        if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
    }, [hash])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 200) {
                setActiveSection('')
                return
            }
            const sections = SCROLL_SECTIONS
            for (const section of sections) {
                const el = document.getElementById(section)
                if (el && window.scrollY >= el.offsetTop - 100) {
                    setActiveSection(section)
                    break
                }
            }
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { label: t('landing.features'), href: '#features', id: 'features' },
        { label: t('landing.pricing'), href: '#pricing', id: 'pricing' },
        {
            label: t('landing.comparison'),
            href: '#comparison',
            id: 'comparison'
        },
        { label: t('landing.faqTitle'), href: '#faq', id: 'faq' }
    ]

    return (
        <div className='font-satoshi bg-background text-foreground min-h-screen'>
            <PageTitle
                title={t('landing.title')}
                description={t('landing.description')}
                url={`https://${getBaseDomain()}`}
            />
            <JsonLd
                data={{
                    '@context': 'https://schema.org',
                    '@type': 'Organization',
                    name: 'ClawHost',
                    url: `https://${getBaseDomain()}`,
                    logo: `${externalUrls.CLAWHOST.CDN_GENERALS}/clawhost-logo-light.png`,
                    sameAs: [
                        TWITTER_URL,
                        FACEBOOK_URL,
                        INSTAGRAM_URL,
                        YOUTUBE_URL,
                        TIKTOK_URL,
                        GITHUB_REPO_URL
                    ]
                }}
            />
            <JsonLd
                data={{
                    '@context': 'https://schema.org',
                    '@type': 'WebSite',
                    name: 'ClawHost',
                    url: `https://${getBaseDomain()}`
                }}
            />
            <JsonLd
                data={{
                    '@context': 'https://schema.org',
                    '@type': 'FAQPage',
                    mainEntity: getFaqs().map((faq) => ({
                        '@type': 'Question',
                        name: faq.question,
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: faq.answer
                        }
                    }))
                }}
            />

            <div className='landing-gradient pointer-events-none fixed inset-0' />

            <Header
                showNavLinks={true}
                navLinks={navLinks}
                activeSection={activeSection}
            />

            <main>
                <section className='relative overflow-hidden px-6 pb-16 pt-32'>
                    <div className='landing-grid pointer-events-none' />

                    <div className='animate-hero-fade-in relative mx-auto max-w-6xl'>
                        <div className='flex flex-col items-center text-center'>
                            <HeroBadge
                                tutorialBadge={showTutorialBadge}
                                tutorialLabel={t('landing.tutorialBadge')}
                                tutorialHref={TUTORIAL_URL}
                            />

                            <HeroTitle
                                line1={t('landing.heroTitle1')}
                                line2={t('landing.heroTitle2')}
                                description={t('landing.heroDescription')}
                            />

                            <div className='mb-16 flex flex-col gap-4 sm:flex-row'>
                                <HeroButtons
                                    deployLabel={t('nav.deployOpenClaw')}
                                    githubLabel={t('landing.selfHostInstead')}
                                    showStars={true}
                                />
                            </div>

                            <StatsRow
                                stats={[
                                    {
                                        value: t('landing.startingPriceValue', {
                                            price: '25'
                                        }),
                                        label: t('landing.startingPrice')
                                    },
                                    {
                                        value: '30+',
                                        label: t('landing.locations')
                                    },
                                    {
                                        value: '45+',
                                        label: t('landing.servers')
                                    },
                                    {
                                        value: t('landing.zeroCount'),
                                        label: t('landing.zeroConfig')
                                    }
                                ]}
                            />
                        </div>
                    </div>
                </section>

                <DemoPreviewSection
                    previewRef={previewRef}
                    previewScale={previewScale}
                />

                <FeaturesGrid
                    badge={t('landing.features')}
                    heading={t('landing.whyClawHost')}
                    description={t('landing.featuresDescription')}
                    features={[
                        {
                            icon: ClockIcon,
                            title: t('landing.zeroConfig'),
                            description: t('landing.zeroConfigDescription')
                        },
                        {
                            icon: LockIcon,
                            title: t('landing.ownedData'),
                            description: t('landing.ownedDataDescription')
                        },
                        {
                            icon: GaugeIcon,
                            title: t('landing.fullSpeed'),
                            description: t('landing.fullSpeedDescription')
                        },
                        {
                            icon: GlobeIcon,
                            title: t('landing.globalLocations'),
                            description: t('landing.globalLocationsDescription')
                        },
                        {
                            icon: TerminalIcon,
                            title: t('landing.fullSshAccess'),
                            description: t('landing.fullSshAccessDescription')
                        },
                        {
                            icon: KeyIcon,
                            title: t('landing.bringYourCredits'),
                            description: t(
                                'landing.bringYourCreditsDescription'
                            )
                        },
                        {
                            icon: LinkIcon,
                            title: t('landing.customSubdomains'),
                            description: t(
                                'landing.customSubdomainsDescription'
                            )
                        },
                        {
                            icon: ShieldCheckIcon,
                            title: t('landing.secure'),
                            description: t('landing.secureDescription')
                        },
                        {
                            icon: GitBranchIcon,
                            title: t('landing.autoUpdates'),
                            description: t('landing.autoUpdatesDescription')
                        },
                        {
                            icon: PulseIcon,
                            title: t('landing.openclawControl'),
                            description: t('landing.openclawControlDescription')
                        },
                        {
                            icon: GearSixIcon,
                            title: t('landing.clawHostControl'),
                            description: t('landing.clawHostControlDescription')
                        },
                        {
                            icon: StackIcon,
                            title: t('landing.multipleClaws'),
                            description: t('landing.multipleClawsDescription')
                        }
                    ]}
                />

                <PricingSection plans={plans} />

                <ComparisonTable
                    badge={t('landing.comparison')}
                    heading={t('landing.comparisonTitle')}
                    description={t('landing.comparisonDescription')}
                    rows={[
                        {
                            us: t('nav.cloudSubtitle'),
                            others: t('nav.goSubtitle')
                        },
                        {
                            us: t('landing.comparisonOpenClawUs'),
                            others: t('landing.comparisonOpenClawOthers')
                        },
                        {
                            us: t('landing.comparisonPricingUs'),
                            others: t('landing.comparisonPricingOthers')
                        },
                        {
                            us: t('landing.comparisonOwnershipUs'),
                            others: t('landing.comparisonOwnershipOthers')
                        },
                        {
                            us: t('landing.comparisonSubdomainUs'),
                            others: t('landing.comparisonSubdomainOthers')
                        },
                        {
                            us: t('landing.comparisonInfraUs'),
                            others: t('landing.comparisonInfraOthers')
                        },
                        {
                            us: t('landing.comparisonDataUs'),
                            others: t('landing.comparisonDataOthers')
                        },
                        {
                            us: t('landing.comparisonMultipleUs'),
                            others: t('landing.comparisonMultipleOthers')
                        },
                        {
                            us: t('landing.comparisonOpenSourceUs'),
                            others: t('landing.comparisonOpenSourceOthers')
                        },
                        {
                            us: t('landing.comparisonExportUs'),
                            others: t('landing.comparisonExportOthers')
                        },
                        {
                            us: t('landing.comparisonProvidersUs'),
                            others: t('landing.comparisonProvidersOthers')
                        },
                        {
                            us: t('landing.comparisonVersionUs'),
                            others: t('landing.comparisonVersionOthers')
                        },
                        {
                            us: t('landing.comparisonTerminalUs'),
                            others: t('landing.comparisonTerminalOthers')
                        }
                    ]}
                />

                <FaqSection
                    badge={t('landing.faqTitle')}
                    heading={t('landing.frequentlyAskedQuestions')}
                    description={t('landing.faqDescription')}
                    faqs={getFaqs()}
                />

                <LandingCTA
                    title={t('blog.ctaTitle')}
                    description={t('blog.ctaDescription')}
                >
                    <HeroButtons
                        deployLabel={t('blog.ctaDeploy')}
                        githubLabel={t('blog.ctaGitHub')}
                        showStars={true}
                    />
                </LandingCTA>
            </main>

            <LandingFooter />
        </div>
    )
}

export default Landing