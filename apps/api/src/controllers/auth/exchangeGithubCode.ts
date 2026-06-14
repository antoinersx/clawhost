import type { Context } from 'hono'
import type { GithubExchangeBody, GithubTokenResponse } from '@/ts/Interfaces'

import { externalUrls, httpMethod } from '@openclaw/shared'
import { t } from '@openclaw/i18n'
import { ok, fail } from '@/lib/response'

const exchangeGithubCode = async (c: Context) => {
    try {
        const { code, redirectUri } = await c.req.json<GithubExchangeBody>()
        if (!code) return fail(c, t('api.githubExchangeFailed'), 400)

        const response = await fetch(externalUrls.GITHUB.OAUTH_TOKEN, {
            method: httpMethod.POST,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code,
                redirect_uri: redirectUri
            })
        })

        const data = (await response.json()) as GithubTokenResponse
        if (!data.access_token)
            return fail(c, t('api.githubExchangeFailed'), 400)

        return ok(c, { accessToken: data.access_token })
    } catch (error) {
        console.error('exchangeGithubCode', error)
        return fail(c, t('api.githubExchangeFailed'), 500)
    }
}

export default exchangeGithubCode