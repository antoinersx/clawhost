import type { FC, ReactNode } from 'react'
import type { LogoProps } from '@/ts/Interfaces'

import { Link, useLocation, useNavigate } from 'react-router-dom'
import { t } from '@openclaw/i18n'
import LogoSvg from '@/components/layout/LogoSvg'
import { ROUTES } from '@/lib'
import { usePreferencesStore } from '@/lib/store'
import { PRODUCT } from '@/lib/constants'

const Logo: FC<LogoProps> = ({ to }): ReactNode => {
    const { pathname, hash, search } = useLocation()
    const product = usePreferencesStore((s) => s.product)
    const destination = to || (product === PRODUCT.GO ? ROUTES.GO : ROUTES.HOME)
    const navigate = useNavigate()
    const isSamePage = pathname === destination

    const handleClick = (e: React.MouseEvent) => {
        if (isSamePage) {
            e.preventDefault()
            if (hash || search) navigate(destination, { replace: true })
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    return (
        <div className='flex items-center gap-3'>
            <Link
                to={destination}
                onClick={handleClick}
                className='flex items-center gap-2 transition hover:opacity-80'
                aria-label={t('common.brandName')}
            >
                <LogoSvg className='h-8' />
            </Link>
        </div>
    )
}

export default Logo