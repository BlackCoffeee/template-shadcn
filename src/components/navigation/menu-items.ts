/**
 * Definisi tipe dan data untuk menu navigasi
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-18
 */

import { LucideIcon } from 'lucide-react'
import { Home, HelpCircle } from 'lucide-react'
export interface MenuItem {
    title: string
    href: string
    icon?: LucideIcon
}

export const menuItems: MenuItem[] = [
    {
        title: 'Dashboard',
        href: '/',
        icon: Home,
    },
    {
        title: 'Help Center',
        href: '/help',
        icon: HelpCircle,
    },
]
