import { getLocale } from '@/lib'

const formatLongDate = (dateString: string | undefined): string => {
    if (!dateString) return '...'
    return new Date(dateString).toLocaleDateString(getLocale(), {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}

export default formatLongDate