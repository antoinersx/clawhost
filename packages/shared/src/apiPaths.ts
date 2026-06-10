const AGENTS = '/agents'

const apiPaths = {
    AUTH: {
        SEND_OTP: '/auth/send-otp',
        VERIFY_OTP: '/auth/verify-otp',
        RESOLVE_CONFLICT: '/auth/resolve-credential-conflict'
    },
    PLANS: {
        BASE: '/plans',
        LOCATIONS: '/plans/locations',
        VOLUME_PRICING: '/plans/volume-pricing',
        AVAILABILITY: '/plans/availability'
    },
    CLAWS: {
        BASE: AGENTS,
        ADMIN: `${AGENTS}/admin`,
        STARS: `${AGENTS}/stars`,
        PURCHASE: `${AGENTS}/purchase`,
        byId: (id: string) => `${AGENTS}/${id}`,
        PENDING: (id: string) => `${AGENTS}/pending/${id}`,
        SYNC: (id: string) => `${AGENTS}/${id}/sync`,
        START: (id: string) => `${AGENTS}/${id}/start`,
        STOP: (id: string) => `${AGENTS}/${id}/stop`,
        RESTART: (id: string) => `${AGENTS}/${id}/restart`,
        CANCEL_DELETION: (id: string) => `${AGENTS}/${id}/cancel-deletion`,
        HARD_DELETE: (id: string) => `${AGENTS}/${id}/hard-delete`,
        SUBDOMAIN: (id: string) => `${AGENTS}/${id}/subdomain`,
        CHECK_SUBDOMAIN: `${AGENTS}/check-subdomain`,
        REINSTALL: (id: string) => `${AGENTS}/${id}/reinstall`,
        CREDENTIALS: (id: string) => `${AGENTS}/${id}/credentials`,
        EXPORT: (id: string) => `${AGENTS}/${id}/export`,
        DIAGNOSTICS: {
            STATUS: (id: string) => `${AGENTS}/${id}/diagnostics/status`,
            LOGS: (id: string) => `${AGENTS}/${id}/diagnostics/logs`,
            REPAIR: (id: string) => `${AGENTS}/${id}/diagnostics/repair`
        },
        VERSION: (id: string) => `${AGENTS}/${id}/version`,
        VERSIONS: (id: string) => `${AGENTS}/${id}/versions`,
        INSTALL_VERSION: (id: string) => `${AGENTS}/${id}/install-version`,
        FILES: {
            BASE: (id: string) => `${AGENTS}/${id}/files`,
            READ: (id: string) => `${AGENTS}/${id}/files/read`
        },
        TERMINAL: (id: string) => `${AGENTS}/${id}/terminal`,
        METRICS: (id: string) => `${AGENTS}/${id}/metrics`,
        OVERVIEW: (id: string) => `${AGENTS}/${id}/overview`,
        ENABLE_PREVIEW: (id: string) => `${AGENTS}/${id}/enable-preview`,
        ROTATE_PASSWORD: (id: string) => `${AGENTS}/${id}/rotate-password`,
        ROTATE_GATEWAY_TOKEN: (id: string) =>
            `${AGENTS}/${id}/rotate-gateway-token`,
        EMOJI: (id: string) => `${AGENTS}/${id}/emoji`,
        SSH_KEY: (id: string) => `${AGENTS}/${id}/ssh-key`,
        BILLING: (id: string) => `${AGENTS}/${id}/billing`
    },
    AFFILIATE: {
        BASE: '/affiliate',
        GENERATE: '/affiliate/generate',
        CODE: '/affiliate/code'
    },
    SSH_KEYS: {
        BASE: '/ssh-keys',
        byId: (id: string) => `/ssh-keys/${id}`
    },
    USERS: {
        ME: '/users/me',
        STATS: '/users/me/stats',
        BILLING: '/users/me/billing',
        BILLING_PORTAL: '/users/me/billing/portal',
        LICENSE_CHECKOUT: '/users/me/license/checkout',
        ORDER_INVOICE: (orderId: string) =>
            `/users/me/billing/${orderId}/invoice`,
        AUTH_METHOD: (method: string) => `/users/me/auth/${method}`
    },
    ADMIN: {
        USERS: '/admin/users',
        USER: (id: string) => `/admin/users/${id}`,
        UPDATE_USER: (id: string) => `/admin/users/${id}`,
        STATS: '/admin/stats',
        ANALYTICS: '/admin/analytics',
        BILLING: '/admin/billing',
        CLAWS: `/admin${AGENTS}`,
        PENDING_CLAWS: `/admin/pending-agents`,
        SSH_KEYS: '/admin/ssh-keys',
        VOLUMES: '/admin/volumes',
        REFERRALS: '/admin/referrals',
        EMAILS: '/admin/emails'
    },
    WEBHOOKS: {
        POLAR: '/webhooks/polar'
    }
}

export { apiPaths }