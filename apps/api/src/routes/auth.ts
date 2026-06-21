import { Hono } from 'hono'
import {
    exchangeGithubCode,
    resolveCredentialConflict,
    sendOtp,
    verifyOtp
} from '@/controllers/auth'

const app = new Hono()

app.post('/send-otp', sendOtp)
app.post('/verify-otp', verifyOtp)
app.post('/resolve-credential-conflict', resolveCredentialConflict)
app.post('/github-exchange', exchangeGithubCode)

export default app