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

const ExportConfigEmail: FC = (): ReactNode => {
    return (
        <FeatureEmailLayout preview={t('emails.features.exportConfig.preview')}>
            <Text style={subheading}>
                {t('emails.features.exportConfig.tag')}
            </Text>
            <Text style={heading}>
                {t('emails.features.exportConfig.heading')}
            </Text>

            <Text style={paragraph}>
                {t('emails.features.exportConfig.description')}
            </Text>

            <Section style={featureGifSection}>
                <Img
                    src={CDN_ASSETS.FEATURE_EXPORT_CONFIG}
                    width='560'
                    alt={t('emails.features.exportConfig.tag')}
                    style={featureGif}
                />
            </Section>

            <Section style={buttonContainer}>
                <Button href='https://clawhost.cloud' style={button}>
                    {t('emails.features.exportConfig.cta')}
                </Button>
            </Section>
        </FeatureEmailLayout>
    )
}

export default ExportConfigEmail