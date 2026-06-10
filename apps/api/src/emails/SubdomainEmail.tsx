import type { FC, ReactNode } from 'react'

import { t } from '@openclaw/i18n'
import { Button, Img, Section, Text } from '@react-email/components'
import { FeatureEmailLayout } from '@/emails'

import {
    subheading,
    heading,
    paragraph,
    button,
    buttonContainer,
    featureGifSection,
    featureGif
} from '@/lib/emailStyles'

import { CDN_ASSETS } from '@/lib'

const SubdomainEmail: FC = (): ReactNode => {
    return (
        <FeatureEmailLayout preview={t('emails.features.subdomain.preview')}>
            <Text style={subheading}>{t('emails.features.subdomain.tag')}</Text>
            <Text style={heading}>
                {t('emails.features.subdomain.heading')}
            </Text>

            <Text style={paragraph}>
                {t('emails.features.subdomain.description')}
            </Text>

            <Section style={featureGifSection}>
                <Img
                    src={CDN_ASSETS.FEATURE_SUBDOMAIN}
                    width='560'
                    alt={t('emails.features.subdomain.tag')}
                    style={featureGif}
                />
            </Section>

            <Section style={buttonContainer}>
                <Button href='https://clawhost.cloud' style={button}>
                    {t('emails.features.subdomain.cta')}
                </Button>
            </Section>
        </FeatureEmailLayout>
    )
}

export default SubdomainEmail