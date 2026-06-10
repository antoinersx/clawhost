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

const MultiLanguageEmail: FC = (): ReactNode => {
    return (
        <FeatureEmailLayout
            preview={t('emails.features.multiLanguage.preview')}
        >
            <Text style={subheading}>
                {t('emails.features.multiLanguage.tag')}
            </Text>
            <Text style={heading}>
                {t('emails.features.multiLanguage.heading')}
            </Text>

            <Text style={paragraph}>
                {t('emails.features.multiLanguage.description')}
            </Text>

            <Section style={featureGifSection}>
                <Img
                    src={CDN_ASSETS.FEATURE_MULTI_LANGUAGE}
                    width='560'
                    alt={t('emails.features.multiLanguage.tag')}
                    style={featureGif}
                />
            </Section>

            <Section style={buttonContainer}>
                <Button href='https://clawhost.cloud' style={button}>
                    {t('emails.features.multiLanguage.cta')}
                </Button>
            </Section>
        </FeatureEmailLayout>
    )
}

export default MultiLanguageEmail