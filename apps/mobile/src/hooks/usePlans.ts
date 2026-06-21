import type { FirebaseUser, Plan, PlansResponse } from '@/ts/Interfaces'

import { PLANS } from '@openclaw/shared'
import usePlanAvailability from '@/hooks/usePlanAvailability'

const usePlans = (user: FirebaseUser | null, provider?: string) => {
    const {
        data: availability,
        isPending,
        isError
    } = usePlanAvailability(user, provider)

    const isAvailable = (id: string): boolean => {
        if (!availability) return true
        const locations = availability[id]
        if (!locations) return true
        return locations.length > 0
    }

    const plans: Plan[] = PLANS.map((plan) => ({
        ...plan,
        disabled: !isAvailable(plan.id)
    }))

    const data: PlansResponse = {
        plans,
        atCapacity: plans.every((plan) => plan.disabled)
    }

    return { data, isPending, isError }
}

export default usePlans