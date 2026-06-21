import { getPolarClient } from '@/lib/polar'

const getInvoiceUrl = async (orderId: string): Promise<string> => {
    const polar = getPolarClient()
    try {
        const invoice = await polar.orders.invoice({ id: orderId })
        return invoice.url
    } catch {
        await polar.orders.generateInvoice({ id: orderId })
        const invoice = await polar.orders.invoice({ id: orderId })
        return invoice.url
    }
}

export default getInvoiceUrl