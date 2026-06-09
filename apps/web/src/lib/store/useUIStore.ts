import type { UIState } from '@/ts/Interfaces'

import { create } from 'zustand'
import { TOAST_TYPE } from '@/lib/constants'
import STORAGE_KEYS from '@/lib/storageKeys'

const HERMES_BANNER_EXPIRY = new Date('2026-06-28T00:00:00Z')
const PH_BANNER_EXPIRY = new Date('2026-07-15T00:00:00Z')

const isHermesBannerActive = (): boolean => {
    if (new Date() > HERMES_BANNER_EXPIRY) return false
    return !localStorage.getItem(STORAGE_KEYS.HERMES_BANNER_DISMISSED)
}

const isPhBannerActive = (): boolean => {
    if (new Date() > PH_BANNER_EXPIRY) return false
    return !localStorage.getItem(STORAGE_KEYS.PH_BANNER_DISMISSED)
}

const useUIStore = create<UIState>((set) => ({
    toast: null,
    showToast: (message, type = TOAST_TYPE.INFO, duration = 5000) =>
        set({ toast: { message, type, duration } }),
    hideToast: () => set({ toast: null }),

    hermesBannerVisible: isHermesBannerActive(),
    dismissHermesBanner: () => {
        localStorage.setItem(STORAGE_KEYS.HERMES_BANNER_DISMISSED, '1')
        set({ hermesBannerVisible: false })
    },

    phBannerVisible: isPhBannerActive(),
    dismissPhBanner: () => {
        localStorage.setItem(STORAGE_KEYS.PH_BANNER_DISMISSED, '1')
        set({ phBannerVisible: false })
    }
}))

export default useUIStore