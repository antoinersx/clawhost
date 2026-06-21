import type { FirebaseApp } from 'firebase/app'

import { initializeApp, getApps } from 'firebase/app'

const apiKey = process.env.EXPO_PUBLIC_FIREBASE_API_KEY

let app: FirebaseApp | null = null

if (apiKey) {
    app =
        getApps().length === 0
            ? initializeApp({
                  apiKey,
                  authDomain:
                      process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
                  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID || ''
              })
            : getApps()[0]
}

export default app