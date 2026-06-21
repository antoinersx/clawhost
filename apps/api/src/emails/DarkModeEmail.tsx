import type { FC, ReactNode } from 'react'

import { CDN_ASSETS } from '@/lib'

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

const DarkModeEmail: FC = (): ReactNode => {
    return (
        <FeatureEmailLayout preview={t('emails.features.darkMode.preview')}>
            <Text style={subheading}>{t('emails.features.darkMode.tag')}</Text>
            <Text style={heading}>{t('emails.features.darkMode.heading')}</Text>

            <Text style={paragraph}>
                {t('emails.features.darkMode.description')}
            </Text>

            <Section style={featureGifSection}>
                <Img
                    src={CDN_ASSETS.FEATURE_DARK_MODE}
                    width='560'
                    alt={t('emails.features.darkMode.tag')}
                    style={featureGif}
                />
            </Section>

            <Section style={buttonContainer}>
                <Button href='https://clawhost.cloud' style={button}>
                    {t('emails.features.darkMode.cta')}
                </Button>
            </Section>
        </FeatureEmailLayout>
    )
}

export default DarkModeEmail