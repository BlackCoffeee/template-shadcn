/**
 * Store untuk mengelola state navigasi aplikasi
 * @module NavigationStore
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-18
 */

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { NavigationOrientation } from '@/types/navigation'

/**
 * Interface yang mendefinisikan state dan actions untuk navigasi
 * @interface NavigationState
 */
interface NavigationState {
    /** Orientasi tampilan navigasi (horizontal/vertical) */
    orientation: NavigationOrientation
    /** Status collapse sidebar */
    collapsed: boolean
    /**
     * Mengubah orientasi navigasi
     * @param orientation - Orientasi baru yang akan diset
     */
    setOrientation: (orientation: NavigationOrientation) => void
    /**
     * Mengubah status collapse sidebar
     * @param collapsed - Status collapse yang akan diset
     */
    setCollapsed: (collapsed: boolean) => void
    /**
     * Toggle status collapse sidebar
     */
    toggleCollapsed: () => void
}

/**
 * Custom hook untuk mengakses dan memanipulasi state navigasi
 * @returns {NavigationState} Object yang berisi state dan actions navigasi
 */
export const useNavigationStore = create<NavigationState>()(
    persist(
        set => ({
            orientation: 'horizontal',
            collapsed: false,
            setOrientation: orientation => set({ orientation }),
            setCollapsed: collapsed => set({ collapsed }),
            toggleCollapsed: () =>
                set(state => ({ collapsed: !state.collapsed })),
        }),
        {
            name: 'navigation-storage',
        }
    )
)
