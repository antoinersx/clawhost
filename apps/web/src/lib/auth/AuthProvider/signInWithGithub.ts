import type {
    ElectronWindow,
    FirebaseErrorLike,
    OAuthWindowResult,
    PendingConflict
} from '@/ts/Interfaces'
import type { ElectronOAuthFn, ResolveConflictFn } from '@/ts/Types'

import {
    GithubAuthProvider,
    signInWithCredential,
    signInWithPopup
} from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { Envs } from '@/lib'

const signInWithGithub = async (
    resolveConflict: ResolveConflictFn,
    electronOAuth: ElectronOAuthFn
): Promise<PendingConflict | null> => {
    const electronAPI = (window as unknown as ElectronWindow).electronAPI

    if (electronAPI?.isDesktop) {
        const authDomain = `${Envs.VITE_FIREBASE_PROJECT_ID}.firebaseapp.com`
        const clientId = import.meta.env.VITE_GITHUB_OAUTH_CLIENT_ID
        const redirectUri = `https://${authDomain}/__/auth/handler`
        const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=user:email`

        const result = await electronOAuth(url, redirectUri)
        if (!result?.code) throw new Error('OAuth failed')

        const tokenResult = (await electronAPI.invoke(
            'oauth-github-exchange',
            result.code
        )) as OAuthWindowResult
        if (!tokenResult?.accessToken) throw new Error('OAuth failed')

        const credential = GithubAuthProvider.credential(
            tokenResult.accessToken
        )
        try {
            await signInWithCredential(auth, credential)
        } catch (error) {
            const firebaseError = error as FirebaseErrorLike
            if (
                firebaseError.code ===
                'auth/account-exists-with-different-credential'
            ) {
                const conflictEmail = firebaseError.customData?.email as
                    | string
                    | undefined
                const pending = resolveConflict(
                    GithubAuthProvider.credentialFromError(
                        error as Parameters<
                            typeof GithubAuthProvider.credentialFromError
                        >[0]
                    ),
                    'github.com',
                    conflictEmail
                )
                if (pending) return pending
            }
            throw error
        }
        return null
    }

    try {
        await signInWithPopup(auth, new GithubAuthProvider())
    } catch (error) {
        const firebaseError = error as FirebaseErrorLike
        if (
            firebaseError.code ===
            'auth/account-exists-with-different-credential'
        ) {
            const conflictEmail = firebaseError.customData?.email as
                | string
                | undefined
            const pending = resolveConflict(
                GithubAuthProvider.credentialFromError(
                    error as Parameters<
                        typeof GithubAuthProvider.credentialFromError
                    >[0]
                ),
                'github.com',
                conflictEmail
            )
            if (pending) return pending
        }
        throw error
    }
    return null
}

export default signInWithGithub