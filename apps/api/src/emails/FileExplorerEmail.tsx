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

const FileExplorerEmail: FC = (): ReactNode => {
    return (
        <FeatureEmailLayout preview={t('emails.features.fileExplorer.preview')}>
            <Text style={subheading}>
                {t('emails.features.fileExplorer.tag')}
            </Text>
            <Text style={heading}>
                {t('emails.features.fileExplorer.heading')}
            </Text>

            <Text style={paragraph}>
                {t('emails.features.fileExplorer.description')}
            </Text>

            <Section style={featureGifSection}>
                <Img
                    src={CDN_ASSETS.FEATURE_FILE_EXPLORER}
                    width='560'
                    alt={t('emails.features.fileExplorer.tag')}
                    style={featureGif}
                />
            </Section>

            <Section style={buttonContainer}>
                <Button href='https://clawhost.cloud' style={button}>
                    {t('emails.features.fileExplorer.cta')}
                </Button>
            </Section>
        </FeatureEmailLayout>
    )
}

export default FileExplorerEmail