import type { Auth, Persistence } from 'firebase/auth'

import { initializeAuth, getAuth } from 'firebase/auth'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
import app from '@/lib/firebase/config'

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { getReactNativePersistence } = require('firebase/auth') as {
    getReactNativePersistence: (
        storage: typeof ReactNativeAsyncStorage
    ) => Persistence
}

const getFirebaseAuth = (): Auth | null => {
    if (!app) return null
    try {
        return initializeAuth(app, {
            persistence: getReactNativePersistence(ReactNativeAsyncStorage)
        })
    } catch {
        return getAuth(app)
    }
}

const auth: Auth | null = getFirebaseAuth()

export default auth