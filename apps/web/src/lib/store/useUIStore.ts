import type { UIState } from '@/ts/Interfaces'

import { create } from 'zustand'
import { TOAST_TYPE } from '@/lib/constants'

const useUIStore = create<UIState>((set) => ({
    toast: null,
    showToast: (message, type = TOAST_TYPE.INFO, duration = 5000) =>
        set({ toast: { message, type, duration } }),
    hideToast: () => set({ toast: null })
}))

export default useUIStore