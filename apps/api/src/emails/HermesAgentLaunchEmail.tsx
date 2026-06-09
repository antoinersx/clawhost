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

const HERMES_DEPLOY_URL = `${externalUrls.CLAWHOST.BASE}/agents`

const HermesAgentLaunchEmail: FC = (): ReactNode => {
    return (
        <FeatureEmailLayout
            preview={t('emails.features.hermesAgentLaunch.preview')}
        >
            <Text style={subheading}>
                {t('emails.features.hermesAgentLaunch.tag')}
            </Text>
            <Text style={heading}>
                {t('emails.features.hermesAgentLaunch.heading')}
            </Text>

            <Text style={paragraph}>
                {t('emails.features.hermesAgentLaunch.description')}
            </Text>

            <Section style={buttonContainer}>
                <Button href={HERMES_DEPLOY_URL} style={button}>
                    {t('emails.features.hermesAgentLaunch.cta')}
                </Button>
            </Section>
        </FeatureEmailLayout>
    )
}

export default HermesAgentLaunchEmail