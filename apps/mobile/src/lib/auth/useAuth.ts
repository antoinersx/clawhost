import type { AuthContextValue } from '@/ts/Interfaces'

import { useContext } from 'react'
import AuthContext from '@/lib/auth/AuthContext'

const useAuth = (): AuthContextValue => useContext(AuthContext)

export default useAuth