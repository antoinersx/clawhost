import { getLanguage } from '@openclaw/i18n'

const LOCALE_MAP: Record<string, string> = {
    en: 'en-US',
    fr: 'fr-FR',
    es: 'es-ES',
    de: 'de-DE'
}

const getLocale = (): string => LOCALE_MAP[getLanguage()] || 'en-US'

export default getLocale