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

const DiagnosticsEmail: FC = (): ReactNode => {
    return (
        <FeatureEmailLayout preview={t('emails.features.diagnostics.preview')}>
            <Text style={subheading}>
                {t('emails.features.diagnostics.tag')}
            </Text>
            <Text style={heading}>
                {t('emails.features.diagnostics.heading')}
            </Text>

            <Text style={paragraph}>
                {t('emails.features.diagnostics.description')}
            </Text>

            <Section style={featureGifSection}>
                <Img
                    src={CDN_ASSETS.FEATURE_DIAGNOSTICS}
                    width='560'
                    alt={t('emails.features.diagnostics.tag')}
                    style={featureGif}
                />
            </Section>

            <Section style={buttonContainer}>
                <Button href='https://clawhost.cloud' style={button}>
                    {t('emails.features.diagnostics.cta')}
                </Button>
            </Section>
        </FeatureEmailLayout>
    )
}

export default DiagnosticsEmail