const generateSlug = (id: string): string => {
    const chars = 'abcdefghjkmnpqrstuvwxyz23456789'
    let hash = 0
    for (let i = 0; i < id.length; i++) {
        hash = (hash << 5) - hash + id.charCodeAt(i)
        hash = hash & hash
    }
    let slug = ''
    let num = Math.abs(hash)
    for (let i = 0; i < 7; i++) {
        slug += chars[num % chars.length]
        num = Math.floor(num / chars.length) + id.charCodeAt(i % id.length)
    }
    return slug
}

export default generateSlug