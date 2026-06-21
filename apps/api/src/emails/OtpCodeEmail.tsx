import type { CSSProperties, FC, ReactNode } from 'react'
import type { OtpCodeEmailProps } from '@/ts/Interfaces'

import { t } from '@openclaw/i18n'

import {
    Body,
    Container,
    Html,
    Img,
    Preview,
    Section,
    Text
} from '@react-email/components'

import { CDN_ASSETS } from '@/lib'
import {
    main,
    container,
    body,
    paragraph,
    title,
    logoSection,
    logo
} from '@/lib/emailStyles'

const codeWrapper: CSSProperties = {
    textAlign: 'center',
    margin: '8px 0 20px'
}

const codeBox: CSSProperties = {
    backgroundColor: '#f4f4f5',
    borderRadius: '8px',
    padding: '16px 24px',
    display: 'inline-block'
}

const codeStyle: CSSProperties = {
    fontSize: '32px',
    fontWeight: '700',
    letterSpacing: '8px',
    color: '#18181b',
    margin: '0',
    fontFamily: 'monospace'
}

const OtpCodeEmail: FC<OtpCodeEmailProps> = ({ code }): ReactNode => {
    const formattedCode = code || '000000'

    return (
        <Html>
            <Preview>{t('emails.otpPreview', { code: formattedCode })}</Preview>

            <Body style={main}>
                <Container style={container}>
                    <Section style={logoSection}>
                        <Img
                            src={CDN_ASSETS.LOGO_DARK}
                            width='140'
                            alt='ClawHost'
                            style={logo}
                        />
                    </Section>

                    <Section style={body}>
                        <Text style={title}>{t('emails.otpHeading')}</Text>

                        <div style={codeWrapper}>
                            <div style={codeBox}>
                                <Text style={codeStyle}>{formattedCode}</Text>
                            </div>
                        </div>

                        <Text style={paragraph}>{t('emails.otpExpiry')}</Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    )
}

export default OtpCodeEmail