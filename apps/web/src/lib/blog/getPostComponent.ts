import type { ComponentType } from 'react'

import { lazy } from 'react'
import { moduleEntries, loaders } from '@/lib/blog'

const cache = new Map<string, ComponentType>()

const getPostComponent = (slug: string): ComponentType | null => {
    if (cache.has(slug)) return cache.get(slug)!
    const entry = moduleEntries.find(([, fm]) => fm.slug === slug)
    if (!entry) return null
    const [path] = entry
    const loader = loaders[path]
    if (!loader) return null
    const LazyComponent = lazy(() => loader())
    cache.set(slug, LazyComponent)
    return LazyComponent
}

export default getPostComponent