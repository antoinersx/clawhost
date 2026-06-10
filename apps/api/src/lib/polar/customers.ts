import type { PolarCustomer, CreatePolarCustomerParams } from '@/ts/Interfaces'

import { getPolarClient } from '@/lib/polar'

const customers = {
    async create(data: CreatePolarCustomerParams): Promise<PolarCustomer> {
        const polar = getPolarClient()

        const customer = await polar.customers.create({
            email: data.email,
            name: data.name,
            externalId: data.externalId
        })

        return {
            id: customer.id,
            email: customer.email,
            name: customer.name ?? undefined,
            externalId: customer.externalId ?? undefined
        }
    },

    async getByExternalId(externalId: string): Promise<PolarCustomer | null> {
        const polar = getPolarClient()

        try {
            const customer = await polar.customers.getExternal({ externalId })
            return {
                id: customer.id,
                email: customer.email,
                name: customer.name ?? undefined,
                externalId: customer.externalId ?? undefined
            }
        } catch {
            return null
        }
    },

    async getOrCreate(data: CreatePolarCustomerParams): Promise<PolarCustomer> {
        const existing = await this.getByExternalId(data.externalId)
        if (existing) return existing
        return this.create(data)
    },

    async get(customerId: string): Promise<PolarCustomer | null> {
        const polar = getPolarClient()

        try {
            const customer = await polar.customers.get({ id: customerId })
            return {
                id: customer.id,
                email: customer.email,
                name: customer.name ?? undefined,
                externalId: customer.externalId ?? undefined
            }
        } catch {
            return null
        }
    }
}

export default customers