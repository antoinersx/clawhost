import { auth } from '@/services/firebase'

const verifyToken = async (token: string) => {
    try {
        const decoded = await auth().verifyIdToken(token)
        return decoded
    } catch {
        return null
    }
}

export default verifyToken