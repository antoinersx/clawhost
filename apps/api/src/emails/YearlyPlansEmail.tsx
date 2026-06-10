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

const YearlyPlansEmail: FC = (): ReactNode => {
    return (
        <FeatureEmailLayout preview={t('emails.features.yearlyPlans.preview')}>
            <Text style={subheading}>
                {t('emails.features.yearlyPlans.tag')}
            </Text>
            <Text style={heading}>
                {t('emails.features.yearlyPlans.heading')}
            </Text>

            <Text style={paragraph}>
                {t('emails.features.yearlyPlans.description')}
            </Text>

            <Section style={featureGifSection}>
                <Img
                    src={CDN_ASSETS.FEATURE_YEARLY_PLANS}
                    width='560'
                    alt={t('emails.features.yearlyPlans.tag')}
                    style={featureGif}
                />
            </Section>

            <Section style={buttonContainer}>
                <Button href='https://clawhost.cloud' style={button}>
                    {t('emails.features.yearlyPlans.cta')}
                </Button>
            </Section>
        </FeatureEmailLayout>
    )
}

export default YearlyPlansEmail