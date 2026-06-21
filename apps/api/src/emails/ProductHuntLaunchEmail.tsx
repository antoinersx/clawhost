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

const ProductHuntLaunchEmail: FC = (): ReactNode => {
    return (
        <FeatureEmailLayout
            preview={t('emails.features.productHuntLaunch.preview')}
        >
            <Text style={subheading}>
                {t('emails.features.productHuntLaunch.tag')}
            </Text>
            <Text style={heading}>
                {t('emails.features.productHuntLaunch.heading')}
            </Text>

            <Text style={paragraph}>
                {t('emails.features.productHuntLaunch.description')}
            </Text>

            <Section style={buttonContainer}>
                <Button
                    href={externalUrls.SOCIAL.PRODUCT_HUNT}
                    style={button}
                >
                    {t('emails.features.productHuntLaunch.cta')}
                </Button>
            </Section>
        </FeatureEmailLayout>
    )
}

export default ProductHuntLaunchEmail