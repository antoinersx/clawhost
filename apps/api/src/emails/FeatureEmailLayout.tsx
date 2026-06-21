import type { FC, ReactNode } from 'react'
import type { FeatureEmailLayoutProps } from '@/ts/Interfaces'

import {
    Body,
    Container,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text
} from '@react-email/components'

import { t } from '@openclaw/i18n'
import { externalUrls } from '@openclaw/shared'
import { EmailFooter } from '@/emails'

import {
    main,
    container,
    body,
    paragraphMuted,
    logoSection,
    logo
} from '@/lib/emailStyles'

import { CDN_ASSETS } from '@/lib'

const FeatureEmailLayout: FC<FeatureEmailLayoutProps> = ({
    preview,
    children
}): ReactNode => {
    return (
        <Html>
            <Preview>{preview}</Preview>

            <Body style={main}>
                <Container style={container}>
                    <Section style={logoSection}>
                        <Link href={externalUrls.CLAWHOST.BASE}>
                            <Img
                                src={CDN_ASSETS.LOGO_DARK}
                                width='140'
                                alt='ClawHost'
                                style={logo}
                            />
                        </Link>
                    </Section>

                    <Section style={body}>
                        {children}

                        <EmailFooter />
                    </Section>
                </Container>

                <Text style={{ ...paragraphMuted, marginTop: '-18px' }}>
                    {t('emails.featureFooter')}
                </Text>
            </Body>
        </Html>
    )
}

export default FeatureEmailLayout