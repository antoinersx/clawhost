import mapSubscription from '@/lib/polar/subscriptions/mapSubscription'
import get from '@/lib/polar/subscriptions/get'
import getMany from '@/lib/polar/subscriptions/getMany'
import prefetchByCustomer from '@/lib/polar/subscriptions/prefetchByCustomer'
import listByCustomer from '@/lib/polar/subscriptions/listByCustomer'
import cancel from '@/lib/polar/subscriptions/cancel'
import uncancel from '@/lib/polar/subscriptions/uncancel'
import changeProduct from '@/lib/polar/subscriptions/changeProduct'
import revoke from '@/lib/polar/subscriptions/revoke'

const subscriptions = {
    get,
    getMany,
    prefetchByCustomer,
    listByCustomer,
    cancel,
    uncancel,
    changeProduct,
    revoke
}

export default subscriptions
export { mapSubscription, get, listByCustomer }