import * as Crypto from 'expo-crypto'

const generatePassword = (length = 16): string => {
    const chars =
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*'
    const array = Crypto.getRandomBytes(length)
    return Array.from(array, (byte) => chars[byte % chars.length]).join('')
}

export default generatePassword