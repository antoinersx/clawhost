import { initializeApp } from 'firebase/app'

import Envs from '@/lib/Envs'

const firebaseConfig = {
    apiKey: Envs.VITE_FIREBASE_API_KEY,
    authDomain: Envs.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: Envs.VITE_FIREBASE_PROJECT_ID,
    storageBucket: Envs.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: Envs.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: Envs.VITE_FIREBASE_APP_ID
}

const app = initializeApp(firebaseConfig)

export default app