import { getLocale } from '@/lib'

const formatCurrency = (amount: number, currency: string = 'usd'): string => {
    return new Intl.NumberFormat(getLocale(), {
        style: 'currency',
        currency: currency.toUpperCase()
    }).format(amount / 100)
}

export default formatCurrency