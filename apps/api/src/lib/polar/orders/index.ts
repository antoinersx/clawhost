import mapOrder from '@/lib/polar/orders/mapOrder'
import listByCustomer from '@/lib/polar/orders/listByCustomer'
import listAll from '@/lib/polar/orders/listAll'
import get from '@/lib/polar/orders/get'
import getInvoiceUrl from '@/lib/polar/orders/getInvoiceUrl'

const orders = {
    listByCustomer,
    listAll,
    get,
    getInvoiceUrl
}

export default orders
export { mapOrder }