import type { AuthenticatedContext } from '@/ts/Types'

import { eq } from 'drizzle-orm'
import { inputValidation } from '@openclaw/shared'
import { db } from '@/db'
import { agents } from '@/db/schema'
import { t } from '@openclaw/i18n'
import { ok, fail } from '@/lib/response'
import { withErrorHandler } from '@/lib'

const checkSubdomainAvailability = withErrorHandler(
    'checkSubdomainAvailability'
)(async (c: AuthenticatedContext) => {
    const subdomain = c.req.query('subdomain')?.trim().toLowerCase()

    if (!subdomain) return fail(c, t('api.invalidSubdomain'), 400)

    const subdomainRegex = new RegExp(
        `^[a-z0-9]{${inputValidation.SUBDOMAIN.MIN},${inputValidation.SUBDOMAIN.MAX}}$`
    )
    if (!subdomainRegex.test(subdomain))
        return fail(c, t('api.invalidSubdomain'), 400)

    const [existing] = await db
        .select({ id: agents.id })
        .from(agents)
        .where(eq(agents.subdomain, subdomain))
        .limit(1)

    return ok(c, { available: !existing })
})

export default checkSubdomainAvailability