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

const ReinstallEmail: FC = (): ReactNode => {
    return (
        <FeatureEmailLayout preview={t('emails.features.reinstall.preview')}>
            <Text style={subheading}>{t('emails.features.reinstall.tag')}</Text>
            <Text style={heading}>
                {t('emails.features.reinstall.heading')}
            </Text>

            <Text style={paragraph}>
                {t('emails.features.reinstall.description')}
            </Text>

            <Section style={featureGifSection}>
                <Img
                    src={CDN_ASSETS.FEATURE_REINSTALL}
                    width='560'
                    alt={t('emails.features.reinstall.tag')}
                    style={featureGif}
                />
            </Section>

            <Section style={buttonContainer}>
                <Button href='https://clawhost.cloud' style={button}>
                    {t('emails.features.reinstall.cta')}
                </Button>
            </Section>
        </FeatureEmailLayout>
    )
}

export default ReinstallEmail