import { getLocale } from '@/lib'

const formatCompactNumber = (value: number): string => {
    return new Intl.NumberFormat(getLocale(), {
        notation: 'compact',
        maximumFractionDigits: 1
    }).format(value)
}

export default formatCompactNumber