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

const TerminalEmail: FC = (): ReactNode => {
    return (
        <FeatureEmailLayout preview={t('emails.features.terminal.preview')}>
            <Text style={subheading}>{t('emails.features.terminal.tag')}</Text>
            <Text style={heading}>{t('emails.features.terminal.heading')}</Text>

            <Text style={paragraph}>
                {t('emails.features.terminal.description')}
            </Text>

            <Section style={featureGifSection}>
                <Img
                    src={CDN_ASSETS.FEATURE_TERMINAL}
                    width='560'
                    alt={t('emails.features.terminal.tag')}
                    style={featureGif}
                />
            </Section>

            <Section style={buttonContainer}>
                <Button href='https://clawhost.cloud' style={button}>
                    {t('emails.features.terminal.cta')}
                </Button>
            </Section>
        </FeatureEmailLayout>
    )
}

export default TerminalEmail