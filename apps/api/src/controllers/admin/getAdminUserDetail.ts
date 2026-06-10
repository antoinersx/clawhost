import type { PolarOrder } from '@/ts/Interfaces'
import type { AuthenticatedContext } from '@/ts/Types'

import { eq } from 'drizzle-orm'
import { db } from '@/db'
import { users, agents, sshKeys, volumes } from '@/db/schema'
import { orders } from '@/lib/polar'
import { ok, fail } from '@/lib/response'
import { t } from '@openclaw/i18n'
import { withErrorHandler } from '@/lib'

const getAdminUserDetail = withErrorHandler(
    'getAdminUserDetail',
    'api.failedToGetAdminUserDetail'
)(async (c: AuthenticatedContext) => {
    const userId = c.req.param('id')
    if (!userId) return fail(c, t('api.userNotFound'), 404)

    const user = await db
        .select({
            id: users.id,
            email: users.email,
            name: users.name,
            role: users.role,
            authMethods: users.authMethods,
            hasLicense: users.hasLicense,
            polarCustomerId: users.polarCustomerId,
            referralCode: users.referralCode,
            referralCodeChanged: users.referralCodeChanged,
            referredBy: users.referredBy,
            createdAt: users.createdAt
        })
        .from(users)
        .where(eq(users.id, userId))
        .limit(1)

    if (!user[0]) return fail(c, t('api.userNotFound'), 404)

    const [userClaws, userSshKeys, userVolumes] = await Promise.all([
        db
            .select({
                id: agents.id,
                name: agents.name,
                status: agents.status,
                ip: agents.ip,
                planId: agents.planId,
                location: agents.location,
                subdomain: agents.subdomain,
                subscriptionStatus: agents.subscriptionStatus,
                billingInterval: agents.billingInterval,
                deletionScheduledAt: agents.deletionScheduledAt,
                createdAt: agents.createdAt
            })
            .from(agents)
            .where(eq(agents.userId, userId)),
        db
            .select({
                id: sshKeys.id,
                name: sshKeys.name,
                fingerprint: sshKeys.fingerprint,
                createdAt: sshKeys.createdAt
            })
            .from(sshKeys)
            .where(eq(sshKeys.userId, userId)),
        db
            .select({
                id: volumes.id,
                name: volumes.name,
                size: volumes.size,
                location: volumes.location,
                status: volumes.status,
                createdAt: volumes.createdAt
            })
            .from(volumes)
            .where(eq(volumes.userId, userId))
    ])

    let billingOrders: PolarOrder[] = []
    const polarCustomerId = user[0].polarCustomerId
    if (polarCustomerId) {
        try {
            const result = await orders.listByCustomer(polarCustomerId, 1, 50)
            billingOrders = result.items
        } catch {}
    }

    return ok(
        c,
        {
            ...user[0],
            agents: userClaws,
            sshKeys: userSshKeys,
            volumes: userVolumes,
            billingOrders
        },
        t('api.adminUserDetailFetched')
    )
})

export default getAdminUserDetail