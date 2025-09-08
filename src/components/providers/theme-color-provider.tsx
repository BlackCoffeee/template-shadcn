/**
 * Provider untuk mengelola warna tema aplikasi
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2024-01-19
 */

import { useThemeStore } from '@/store/theme-store'
import { useEffect } from 'react'

interface ThemeColorProviderProps {
    children: React.ReactNode
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

export function ThemeColorProvider({ children }: ThemeColorProviderProps) {
    const { primaryColor } = useThemeStore()

    useEffect(() => {
        // Terapkan warna yang tersimpan saat komponen dimount
        const oklchColor = hslToOklch(primaryColor)
        document.documentElement.style.setProperty('--primary', oklchColor)
    }, [primaryColor])

    return <>{children}</>
}
