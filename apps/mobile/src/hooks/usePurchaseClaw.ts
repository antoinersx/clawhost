import type { PurchaseClawData } from '@/ts/Interfaces'

import { useMutation } from '@tanstack/react-query'
import api from '@/lib/api'

const usePurchaseClaw = () => {
    return useMutation({
        mutationFn: (data: PurchaseClawData) => api.purchaseClaw(data)
    })
}

export default usePurchaseClaw