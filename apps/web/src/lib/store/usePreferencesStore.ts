import type { PreferencesState } from '@/ts/Interfaces'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { setLanguage as setI18nLanguage, loadLanguage } from '@openclaw/i18n'
import {
    AFFILIATE_PERIOD,
    THEMES,
    LANGUAGES,
    STORAGE_KEYS
} from '@/lib/constants'

const usePreferencesStore = create<PreferencesState>()(
    persist(
        (set) => ({
            adminMode: false,
            setAdminMode: (mode) => set({ adminMode: mode }),
            theme: THEMES.DARK,
            setTheme: (theme) => set({ theme }),
            language: LANGUAGES.EN,
            setLanguage: (language) => {
                loadLanguage(language).then(() => {
                    setI18nLanguage(language)
                    set({ language })
                })
            },
            openLinksWindowed: false,
            setOpenLinksWindowed: (value) => set({ openLinksWindowed: value }),
            product: 'cloud',
            setProduct: (product) => set({ product }),
            affiliatePeriod: AFFILIATE_PERIOD.ALL,
            setAffiliatePeriod: (period) => set({ affiliatePeriod: period }),
            sidebarCollapsed: false,
            setSidebarCollapsed: (collapsed) =>
                set({ sidebarCollapsed: collapsed })
        }),
        {
            name: STORAGE_KEYS.PREFERENCES,
            migrate: (persisted, version) => {
                const state = persisted as PreferencesState
                if (version < 2) {
                    state.theme = state.theme || THEMES.SYSTEM
                }
                if (version < 3) {
                    state.language = state.language || LANGUAGES.EN
                }
                if (version < 4) {
                    state.openLinksWindowed = state.openLinksWindowed ?? false
                }
                if (version < 6) {
                    state.product = state.product || 'cloud'
                }
                if (version < 7) {
                    state.affiliatePeriod =
                        state.affiliatePeriod || AFFILIATE_PERIOD.ALL
                }
                if (version < 8) {
                    state.sidebarCollapsed = state.sidebarCollapsed ?? false
                }
                return state
            },
            version: 9
        }
    )
)

export default usePreferencesStore