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

const SshKeysEmail: FC = (): ReactNode => {
    return (
        <FeatureEmailLayout preview={t('emails.features.sshKeys.preview')}>
            <Text style={subheading}>{t('emails.features.sshKeys.tag')}</Text>
            <Text style={heading}>{t('emails.features.sshKeys.heading')}</Text>

            <Text style={paragraph}>
                {t('emails.features.sshKeys.description')}
            </Text>

            <Section style={featureGifSection}>
                <Img
                    src={CDN_ASSETS.FEATURE_SSH_KEYS}
                    width='560'
                    alt={t('emails.features.sshKeys.tag')}
                    style={featureGif}
                />
            </Section>

            <Section style={buttonContainer}>
                <Button href='https://clawhost.cloud' style={button}>
                    {t('emails.features.sshKeys.cta')}
                </Button>
            </Section>
        </FeatureEmailLayout>
    )
}

export default SshKeysEmail