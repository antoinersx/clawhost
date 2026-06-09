import type { FC, ReactNode } from 'react'

import { t } from '@openclaw/i18n'
import { externalUrls } from '@openclaw/shared'
import { Button, Section, Text } from '@react-email/components'
import { FeatureEmailLayout } from '@/emails'

import {
    subheading,
    heading,
    paragraph,
    button,
    buttonContainer
} from '@/lib/emailStyles'

const GO_DOWNLOAD_URL = `${externalUrls.CLAWHOST.BASE}/go`

const ClawHostGoLaunchEmail: FC = (): ReactNode => {
    return (
        <FeatureEmailLayout
            preview={t('emails.features.clawHostGoLaunch.preview')}
        >
            <Text style={subheading}>
                {t('emails.features.clawHostGoLaunch.tag')}
            </Text>
            <Text style={heading}>
                {t('emails.features.clawHostGoLaunch.heading')}
            </Text>

            <Text style={paragraph}>
                {t('emails.features.clawHostGoLaunch.description')}
            </Text>

            <Section style={buttonContainer}>
                <Button href={GO_DOWNLOAD_URL} style={button}>
                    {t('emails.features.clawHostGoLaunch.cta')}
                </Button>
            </Section>
        </FeatureEmailLayout>
    )
}

export default ClawHostGoLaunchEmail