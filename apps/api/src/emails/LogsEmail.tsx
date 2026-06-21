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

const LogsEmail: FC = (): ReactNode => {
    return (
        <FeatureEmailLayout preview={t('emails.features.logs.preview')}>
            <Text style={subheading}>{t('emails.features.logs.tag')}</Text>
            <Text style={heading}>{t('emails.features.logs.heading')}</Text>

            <Text style={paragraph}>
                {t('emails.features.logs.description')}
            </Text>

            <Section style={featureGifSection}>
                <Img
                    src={CDN_ASSETS.FEATURE_LOGS}
                    width='560'
                    alt={t('emails.features.logs.tag')}
                    style={featureGif}
                />
            </Section>

            <Section style={buttonContainer}>
                <Button href='https://clawhost.cloud' style={button}>
                    {t('emails.features.logs.cta')}
                </Button>
            </Section>
        </FeatureEmailLayout>
    )
}

export default LogsEmail