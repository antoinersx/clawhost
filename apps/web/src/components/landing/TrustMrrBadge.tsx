import type { FC, ReactNode } from 'react'

import { t } from '@openclaw/i18n'
import { externalUrls } from '@openclaw/shared'

const TrustMrrBadge: FC = (): ReactNode => {
    return (
        <a href={externalUrls.TRUSTMRR.STARTUP} target='_blank'>
            <img
                src={externalUrls.TRUSTMRR.EMBED_LIGHT}
                alt={t('landing.trustMrrBadgeAlt')}
                width='171'
                height='70'
                loading='lazy'
                className='block dark:hidden'
            />
            <img
                src={externalUrls.TRUSTMRR.EMBED_DARK}
                alt={t('landing.trustMrrBadgeAlt')}
                width='171'
                height='70'
                loading='lazy'
                className='hidden dark:block'
            />
        </a>
    )
}

export default TrustMrrBadge