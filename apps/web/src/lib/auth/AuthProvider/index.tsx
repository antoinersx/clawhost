import type { FC, ReactNode } from 'react'
import type { User } from 'firebase/auth'
import type {
    AuthProviderProps,
    CachedProfile,
    ElectronWindow,
    FirebaseErrorLike,
    OAuthWindowResult,
    PendingConflict
} from '@/ts/Interfaces'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import {
    GoogleAuthProvider,
    GithubAuthProvider,
    onAuthStateChanged,
    signInWithCustomToken,
    getRedirectResult,
    linkWithPopup,
    unlink,
    signOut as firebaseSignOut
} from 'firebase/auth'
import { t } from '@openclaw/i18n'
import { auth, AUTH_STORAGE_KEY, PROFILE_CACHE_KEY } from '@/lib/firebase'
import { api } from '@/lib'
import { ApiError } from '@openclaw/shared'
import AuthContext from '@/lib/auth/AuthContext'
import STORAGE_KEYS from '@/lib/storageKeys'
import {
    PROFILE_QUERY_KEY,
    AGENTS_QUERY_KEY,
    USER_STATS_QUERY_KEY
} from '@/hooks'
import readCachedProfile from '@/lib/auth/AuthProvider/readCachedProfile'
import handleCredentialConflict from '@/lib/auth/AuthProvider/handleCredentialConflict'
import signInWithGoogleFn from '@/lib/auth/AuthProvider/signInWithGoogle'
import signInWithGithubFn from '@/lib/auth/AuthProvider/signInWithGithub'

const AuthProvider: FC<AuthProviderProps> = ({ children }): ReactNode => {
    const queryClient = useQueryClient()
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const [cachedProfile, setCachedProfile] = useState<CachedProfile | null>(
        readCachedProfile
    )
    const [pendingConflict, setPendingConflict] =
        useState<PendingConflict | null>(null)
    const fetchedRef = useRef(false)

    useEffect(() => {
        const unsubscribe = queryClient.getQueryCache().subscribe((event) => {
            if (
                event.type === 'updated' &&
                event.action.type === 'success' &&
                event.query.queryKey[0] === PROFILE_QUERY_KEY[0]
            ) {
                const profile = event.query.state.data as
                    | CachedProfile
                    | undefined
                if (profile) {
                    const existing = localStorage.getItem(PROFILE_CACHE_KEY)
                    const serialized = JSON.stringify(profile)
                    if (existing !== serialized) {
                        setCachedProfile(profile)
                        localStorage.setItem(PROFILE_CACHE_KEY, serialized)
                    }
                }
            }
        })
        return unsubscribe
    }, [queryClient])

    const updateCachedProfile = useCallback((data: Partial<CachedProfile>) => {
        setCachedProfile((prev) => {
            const updated = { ...prev, ...data } as CachedProfile
            const existing = localStorage.getItem(PROFILE_CACHE_KEY)
            const serialized = JSON.stringify(updated)
            if (existing !== serialized) {
                localStorage.setItem(PROFILE_CACHE_KEY, serialized)
            }
            return updated
        })
    }, [])

    const resolveConflict = useCallback(handleCredentialConflict, [])

    useEffect(() => {
        getRedirectResult(auth).catch(async (error) => {
            const firebaseError = error as FirebaseErrorLike
            if (
                firebaseError.code ===
                'auth/account-exists-with-different-credential'
            ) {
                const conflictEmail = firebaseError.customData?.email as
                    | string
                    | undefined
                const googleCred = GoogleAuthProvider.credentialFromError(
                    error as Parameters<
                        typeof GoogleAuthProvider.credentialFromError
                    >[0]
                )
                if (googleCred) {
                    const pending = handleCredentialConflict(
                        googleCred,
                        'google.com',
                        conflictEmail
                    )
                    if (pending) {
                        setPendingConflict(pending)
                        await api.sendOtp(pending.email)
                    }
                    return
                }
                const githubCred = GithubAuthProvider.credentialFromError(
                    error as Parameters<
                        typeof GithubAuthProvider.credentialFromError
                    >[0]
                )
                if (githubCred) {
                    const pending = handleCredentialConflict(
                        githubCred,
                        'github.com',
                        conflictEmail
                    )
                    if (pending) {
                        setPendingConflict(pending)
                        await api.sendOtp(pending.email)
                    }
                    return
                }
            }
            console.error('getRedirectResult', error)
        })
    }, [])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            setUser(user)
            setLoading(false)

            if (user) {
                localStorage.setItem(AUTH_STORAGE_KEY, 'true')

                const cached = readCachedProfile()
                if (cached) {
                    setCachedProfile(cached)
                    queryClient.setQueryData(PROFILE_QUERY_KEY, cached)
                }

                if (fetchedRef.current) return
                fetchedRef.current = true

                try {
                    const [_profile] = await Promise.all([
                        queryClient.fetchQuery({
                            queryKey: PROFILE_QUERY_KEY,
                            queryFn: api.getProfile,
                            staleTime: 0
                        }),
                        queryClient.prefetchQuery({
                            queryKey: AGENTS_QUERY_KEY,
                            queryFn: () => api.getAgents()
                        }),
                        queryClient.prefetchQuery({
                            queryKey: USER_STATS_QUERY_KEY,
                            queryFn: api.getUserStats
                        })
                    ])
                } catch (error) {
                    const isAuthError =
                        error instanceof ApiError ? error.code === 401 : false
                    if (isAuthError) await firebaseSignOut(auth)
                }
            } else {
                fetchedRef.current = false
                localStorage.removeItem(AUTH_STORAGE_KEY)
                localStorage.removeItem(PROFILE_CACHE_KEY)
                localStorage.removeItem(STORAGE_KEYS.OTP_SENT_AT)
                setCachedProfile(null)
                queryClient.clear()
            }
        })
        return unsubscribe
    }, [queryClient])

    const sendOtp = useCallback(async (email: string) => {
        await api.sendOtp(email)
    }, [])

    const verifyOtp = useCallback(
        async (email: string, code: string) => {
            if (
                pendingConflict &&
                pendingConflict.email.toLowerCase() === email.toLowerCase()
            ) {
                const { customToken } = await api.resolveCredentialConflict({
                    accessToken: pendingConflict.accessToken,
                    providerId: pendingConflict.providerId,
                    email: pendingConflict.email,
                    code
                })
                setPendingConflict(null)
                await signInWithCustomToken(auth, customToken)
                return
            }
            const { customToken } = await api.verifyOtp(email, code)
            await signInWithCustomToken(auth, customToken)
        },
        [pendingConflict]
    )

    const electronOAuth = useCallback(
        async (providerUrl: string, callbackPrefix: string) => {
            const electronAPI = (window as unknown as ElectronWindow)
                .electronAPI
            const result = (await electronAPI!.invoke(
                'oauth-window',
                providerUrl,
                callbackPrefix,
                t('auth.signIn')
            )) as OAuthWindowResult
            return result
        },
        []
    )

    const signInWithGoogle = useCallback(async () => {
        const pending = await signInWithGoogleFn(resolveConflict, electronOAuth)
        if (pending) {
            setPendingConflict(pending)
            await api.sendOtp(pending.email)
        }
    }, [resolveConflict, electronOAuth])

    const signInWithGithub = useCallback(async () => {
        const pending = await signInWithGithubFn(resolveConflict, electronOAuth)
        if (pending) {
            setPendingConflict(pending)
            await api.sendOtp(pending.email)
        }
    }, [resolveConflict, electronOAuth])

    const linkGoogle = useCallback(async () => {
        if (!user) return
        const result = await linkWithPopup(user, new GoogleAuthProvider())
        const linked = result.user.providerData.find(
            (p) => p.providerId === 'google.com'
        )
        if (
            linked?.email &&
            user.email &&
            linked.email.toLowerCase() !== user.email.toLowerCase()
        ) {
            await unlink(result.user, 'google.com')
            throw new Error(t('account.providerEmailMismatch'))
        }
    }, [user])

    const linkGithub = useCallback(async () => {
        if (!user) return
        const result = await linkWithPopup(user, new GithubAuthProvider())
        const linked = result.user.providerData.find(
            (p) => p.providerId === 'github.com'
        )
        if (
            linked?.email &&
            user.email &&
            linked.email.toLowerCase() !== user.email.toLowerCase()
        ) {
            await unlink(result.user, 'github.com')
            throw new Error(t('account.providerEmailMismatch'))
        }
    }, [user])

    const unlinkGoogle = useCallback(async () => {
        if (!user) return
        await unlink(user, 'google.com')
    }, [user])

    const unlinkGithub = useCallback(async () => {
        if (!user) return
        await unlink(user, 'github.com')
    }, [user])

    const signOut = useCallback(async () => {
        await firebaseSignOut(auth)
    }, [])

    const clearPendingConflict = useCallback(() => {
        setPendingConflict(null)
    }, [])

    const isLocal =
        document.documentElement.getAttribute('data-electron') === 'true'

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                cachedProfile,
                pendingConflict,
                updateCachedProfile,
                sendOtp,
                verifyOtp,
                signInWithGoogle,
                signInWithGithub,
                linkGoogle,
                linkGithub,
                unlinkGoogle,
                unlinkGithub,
                signOut,
                clearPendingConflict,
                isLocal
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider