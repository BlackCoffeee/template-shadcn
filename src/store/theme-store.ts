/**
 * Store untuk mengelola tema dan warna aplikasi
 * @module ThemeStore
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2024-01-19
 */

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ThemeState {
    primaryColor: string
    setPrimaryColor: (color: string) => void
}

export const useThemeStore = create<ThemeState>()(
    persist(
        set => ({
            primaryColor: 'hsl(346.8, 77.2%, 49.8%)',
            setPrimaryColor: color => {
                set({ primaryColor: color })
                // Konversi warna HSL ke format yang dibutuhkan CSS variables
                const hslMatch = color.match(
                    /hsl\((\d+\.?\d*),\s*(\d+\.?\d*)%,\s*(\d+\.?\d*)%\)/
                )
                if (hslMatch) {
                    const [_, h, s, l] = hslMatch
                    document.documentElement.style.setProperty(
                        '--primary',
                        `${h} ${s}% ${l}%`
                    )
                }
            },
        }),
        {
            name: 'theme-storage',
        }
    )
)
