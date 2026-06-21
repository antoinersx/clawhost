import { getLocale } from '@/lib'

const formatCurrencyFromCents = (
    amount: number,
    currency: string = 'USD'
): string => {
    return new Intl.NumberFormat(getLocale(), {
        style: 'currency',
        currency: currency.toUpperCase()
    }).format(amount / 100)
}

export default formatCurrencyFromCents