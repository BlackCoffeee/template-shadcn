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

export function ThemeColorProvider({ children }: ThemeColorProviderProps) {
    const { primaryColor } = useThemeStore()

    useEffect(() => {
        // Terapkan warna yang tersimpan saat komponen dimount
        const hslMatch = primaryColor.match(
            /hsl\((\d+\.?\d*),\s*(\d+\.?\d*)%,\s*(\d+\.?\d*)%\)/
        )
        if (hslMatch) {
            const [, h, s, l] = hslMatch
            document.documentElement.style.setProperty(
                '--primary',
                `${h} ${s}% ${l}%`
            )
        }
    }, [primaryColor])

    return <>{children}</>
}
