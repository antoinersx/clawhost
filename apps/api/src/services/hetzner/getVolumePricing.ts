import type {
    HetznerPricingResponse,
    VolumePricingResult
} from '@/ts/Interfaces'

import { getClient } from '@/services/hetzner'

const getVolumePricing = async (): Promise<VolumePricingResult> => {
    const data = await getClient().get<HetznerPricingResponse>('/pricing')
    return {
        pricePerGbMonthly: parseFloat(
            data.pricing.volume.price_per_gb_month.gross
        )
    }
}

export default getVolumePricing