import type { FC, ReactNode } from 'react'

import { t } from '@openclaw/i18n'
import { HeroButtons } from '@/components/landing'

const BlogCTA: FC = (): ReactNode => {
    return (
        <div className='border-border/50 mt-16 rounded-2xl border bg-gradient-to-b from-white/[0.03] to-transparent px-6 py-12 text-center'>
            <h2 className='font-clash mb-4 text-3xl font-bold'>
                {t('blog.ctaTitle')}
            </h2>
            <p className='text-muted-foreground mx-auto mb-8 max-w-xl text-base'>
                {t('blog.ctaDescription')}
            </p>
            <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
                <HeroButtons
                    deployLabel={t('blog.ctaDeploy')}
                    githubLabel={t('blog.ctaGitHub')}
                    showStars={true}
                />
            </div>
        </div>
    )
}

export default BlogCTA