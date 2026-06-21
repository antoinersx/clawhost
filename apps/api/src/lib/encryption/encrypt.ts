import crypto from 'crypto'
import { encryptionConfig } from '@/lib/encryption'

const encrypt = (plaintext: string): string => {
    const key = encryptionConfig.getKey()
    const iv = crypto.randomBytes(encryptionConfig.IV_LENGTH)
    const cipher = crypto.createCipheriv('aes-256-gcm', key, iv)
    const encrypted = Buffer.concat([
        cipher.update(plaintext, 'utf8'),
        cipher.final()
    ])
    const tag = cipher.getAuthTag()
    return `${encryptionConfig.PREFIX}${iv.toString('hex')}:${encrypted.toString('hex')}:${tag.toString('hex')}`
}

export default encrypt