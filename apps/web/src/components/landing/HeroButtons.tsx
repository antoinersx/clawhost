import type { FC, ReactNode } from 'react'
import type { HeroButtonsProps } from '@/ts/Interfaces'

import { Fragment } from 'react'
import { Button } from '@/components/ui'
import { SelfHostButton } from '@/components/landing'
import { GETOPENCLAW_CLOUD_URL } from '@/lib/links'
import { LightningIcon } from '@phosphor-icons/react'

const HeroButtons: FC<HeroButtonsProps> = ({
    deployLabel,
    githubLabel,
    showStars,
    large
}): ReactNode => {
    return (
        <Fragment>
            <Button
                size='lg'
                className={`gap-2 border-0 bg-gradient-to-r from-[#ef5350] to-[#c62828] font-semibold text-white hover:opacity-90 ${large ? 'px-8 py-6 text-lg' : 'px-6'}`}
                asChild
            >
                <a href={GETOPENCLAW_CLOUD_URL}>
                    <LightningIcon className='h-5 w-5' weight='fill' />
                    {deployLabel}
                </a>
            </Button>
            <SelfHostButton
                label={githubLabel}
                showStars={showStars}
                large={large}
            />
        </Fragment>
    )
}

export default HeroButtons