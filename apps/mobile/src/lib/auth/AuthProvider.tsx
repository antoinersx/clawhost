import type { FC, ReactNode } from 'react'
import type { AuthProviderProps, FirebaseUser } from '@/ts/Interfaces'
import type { User } from 'firebase/auth'

import { useState, useEffect, useCallback } from 'react'
import {
    onAuthStateChanged,
    signInWithCredential,
    signInWithCustomToken,
    signOut as firebaseSignOut
} from 'firebase/auth'
import { auth, clearTokenCache } from '@/lib/firebase'
import api from '@/lib/api'
import AuthContext from '@/lib/auth/AuthContext'
import useOAuth from '@/lib/auth/useOAuth'

const AuthProvider: FC<AuthProviderProps> = ({ children }): ReactNode => {
    const [user, setUser] = useState<FirebaseUser | null>(null)
    const [loading, setLoading] = useState(true)
    const { getGoogleCredential, getGithubCredential } = useOAuth()

    useEffect(() => {
        if (!auth) {
            setLoading(false)
            return undefined
        }

        const unsubscribe = onAuthStateChanged(
            auth,
            (firebaseUser: User | null) => {
                if (firebaseUser) {
                    setUser({
                        uid: firebaseUser.uid,
                        email: firebaseUser.email,
                        displayName: firebaseUser.displayName
                    })
                } else {
                    setUser(null)
                }
                setLoading(false)
            }
        )
        return unsubscribe
    }, [])

    const sendOtp = useCallback(async (email: string): Promise<void> => {
        await api.sendOtp(email)
    }, [])

    const verifyOtp = useCallback(
        async (email: string, code: string): Promise<void> => {
            if (!auth) throw new Error('Auth not initialized')
            const { customToken } = await api.verifyOtp(email, code)
            await signInWithCustomToken(auth, customToken)
        },
        []
    )

    const signInWithGoogle = useCallback(async (): Promise<void> => {
        if (!auth) throw new Error('Auth not initialized')
        const credential = await getGoogleCredential()
        if (!credential) return
        await signInWithCredential(auth, credential)
    }, [getGoogleCredential])

    const signInWithGithub = useCallback(async (): Promise<void> => {
        if (!auth) throw new Error('Auth not initialized')
        const credential = await getGithubCredential()
        if (!credential) return
        await signInWithCredential(auth, credential)
    }, [getGithubCredential])

    const signOut = useCallback(async (): Promise<void> => {
        if (!auth) return
        clearTokenCache()
        await firebaseSignOut(auth)
    }, [])

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                sendOtp,
                verifyOtp,
                signInWithGoogle,
                signInWithGithub,
                signOut
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider