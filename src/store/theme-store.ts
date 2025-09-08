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

// Fungsi untuk mengkonversi HSL ke OKLCH
function hslToOklch(hsl: string): string {
    const hslMatch = hsl.match(
        /hsl\((\d+\.?\d*),\s*(\d+\.?\d*)%,\s*(\d+\.?\d*)%\)/
    )
    if (!hslMatch) return 'oklch(0.5 0.2 0)'

    const [, h, s, l] = hslMatch.map(Number)

    // Konversi langsung HSL ke OKLCH (simplified)
    const hNorm = h / 360
    const sNorm = s / 100
    const lNorm = l / 100

    const lightness = lNorm
    const chroma = sNorm * 0.4 // Approximate chroma
    const hue = hNorm * 360

    return `oklch(${lightness.toFixed(3)} ${chroma.toFixed(3)} ${hue.toFixed(1)})`
}

export const useThemeStore = create<ThemeState>()(
    persist(
        set => ({
            primaryColor: 'hsl(346.8, 77.2%, 49.8%)',
            setPrimaryColor: color => {
                set({ primaryColor: color })
                // Konversi warna HSL ke format OKLCH untuk CSS variables
                const oklchColor = hslToOklch(color)
                document.documentElement.style.setProperty(
                    '--primary',
                    oklchColor
                )
            },
        }),
        {
            name: 'theme-storage',
        }
    )
)
