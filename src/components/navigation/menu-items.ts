/**
 * Definisi tipe dan data untuk menu navigasi
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-18
 */

import { KeyRound, LucideIcon } from 'lucide-react'
import {
    Home,
    HelpCircle,
    LayoutDashboard,
    Settings,
    Users,
} from 'lucide-react'

export interface MenuItem {
    title: string
    href: string
    icon?: LucideIcon
    children?: MenuItem[]
}

export const menuItems: MenuItem[] = [
    {
        title: 'Dashboard',
        href: '/',
        icon: Home,
    },
    {
        title: 'Pages',
        href: '/pages',
        icon: LayoutDashboard,
        children: [
            {
                title: 'Authentication',
                href: '/pages/auth',
                icon: KeyRound,
                children: [
                    {
                        title: 'Login',
                        href: '/pages/auth/login',
                    },
                    {
                        title: 'Register',
                        href: '/pages/auth/register',
                    },
                ],
            },
            {
                title: 'Settings',
                href: '/pages/settings',
                icon: Settings,
                children: [
                    {
                        title: 'General',
                        href: '/pages/settings/general',
                    },
                    {
                        title: 'Security',
                        href: '/pages/settings/security',
                    },
                ],
            },
        ],
    },
    {
        title: 'Account',
        href: '/account',
        icon: Users,
        children: [
            {
                title: 'Profile',
                href: '/account/profile',
            },
        ],
    },
    {
        title: 'Help',
        href: '/help',
        icon: HelpCircle,
    },
]
