import { getResend } from '@/services/resend'

const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID

const addContact = (email: string, name?: string) => {
    if (!AUDIENCE_ID) return

    const nameParts = name?.split(' ') || []

    getResend()
        .contacts.create({
            audienceId: AUDIENCE_ID,
            email,
            firstName: nameParts[0] || '',
            lastName: nameParts.slice(1).join(' ') || ''
        })
        .catch(() => {})
}

export default addContact