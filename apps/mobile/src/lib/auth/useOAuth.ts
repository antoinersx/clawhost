import type { AuthCredential } from 'firebase/auth'

import { useCallback } from 'react'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import { useAuthRequest, makeRedirectUri } from 'expo-auth-session'
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth'
import { externalUrls } from '@openclaw/shared'
import api from '@/lib/api'

WebBrowser.maybeCompleteAuthSession()

const githubDiscovery = {
    authorizationEndpoint: externalUrls.GITHUB.OAUTH_AUTHORIZE,
    tokenEndpoint: externalUrls.GITHUB.OAUTH_TOKEN
}

const redirectUri = makeRedirectUri({ scheme: 'clawhost', path: 'oauth' })

const useOAuth = () => {
    const [, , promptGoogle] = Google.useIdTokenAuthRequest({
        clientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
        iosClientId: process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID,
        androidClientId: process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID
    })

    const [, , promptGithub] = useAuthRequest(
        {
            clientId: process.env.EXPO_PUBLIC_GITHUB_OAUTH_CLIENT_ID || '',
            scopes: ['identity', 'user:email'],
            redirectUri
        },
        githubDiscovery
    )

    const getGoogleCredential =
        useCallback(async (): Promise<AuthCredential | null> => {
            const result = await promptGoogle()
            if (result?.type !== 'success') return null
            const idToken = result.params?.id_token
            if (!idToken) return null
            return GoogleAuthProvider.credential(idToken)
        }, [promptGoogle])

    const getGithubCredential =
        useCallback(async (): Promise<AuthCredential | null> => {
            const result = await promptGithub()
            if (result?.type !== 'success') return null
            const code = result.params?.code
            if (!code) return null
            const { accessToken } = await api.githubExchange(code, redirectUri)
            return GithubAuthProvider.credential(accessToken)
        }, [promptGithub])

    return { getGoogleCredential, getGithubCredential }
}

export default useOAuth