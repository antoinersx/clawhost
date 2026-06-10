const inputValidation = {
    CLAW_NAME: { MAX: 50 },
    USER_NAME: { MAX: 100 },
    SSH_KEY_NAME: { MAX: 100 },
    SSH_KEY_PUBLIC_KEY: { MAX: 10000 },
    SSH_KEYS_PER_ACCOUNT: { MAX: 50 },
    EMAIL: { MAX: 320 },
    FILE_CONTENT: { MAX: 1024 * 1024 },
    ENV_VAR_KEY: { MAX: 256 },
    ENV_VAR_VALUE: { MAX: 10000 },
    VOLUME_SIZE: { MIN: 10, MAX: 10240 },
    CLAWS_PER_ACCOUNT: { MAX: 10 },
    SSH_OUTPUT: { MAX: 5 * 1024 * 1024 },
    SUBDOMAIN: { MIN: 3, MAX: 20 },
    MIN_MEMORY_GB: { MIN: 4 },
    OTP_MAX_ATTEMPTS: { MAX: 5 },
    LOG_LINES: { DEFAULT: 100 },
    REFERRAL_CODE: { MIN: 3, MAX: 32, DEFAULT_LENGTH: 6 },
    PASSWORD: { MIN: 8, MAX: 128 },
    GATEWAY_TOKEN: { MIN: 16, MAX: 256 }
}

export { inputValidation }