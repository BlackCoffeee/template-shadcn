/**
 * Tipe data untuk navigasi
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-18
 */

export type MenuItem = {
    title: string
    href: string
    icon?: React.ComponentType<{ className?: string }>
}

export type NavigationOrientation = 'horizontal' | 'vertical'
