import type { AuthContextValue } from '@/ts/Interfaces'

import { createContext } from 'react'

const noop = async () => {}

const AuthContext = createContext<AuthContextValue>({
    user: null,
    loading: true,
    sendOtp: noop,
    verifyOtp: noop,
    signInWithGoogle: noop,
    signInWithGithub: noop,
    signOut: noop
})

export default AuthContext