/**
 * Definisi tipe dan data untuk menu navigasi
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-18
 */

import { LucideIcon } from 'lucide-react'
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
                title: 'Users',
                href: '/pages/users',
                icon: Users,
                children: [
                    {
                        title: 'List',
                        href: '/pages/users/list',
                    },
                    {
                        title: 'Create',
                        href: '/pages/users/create',
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
        title: 'Help',
        href: '/help',
        icon: HelpCircle,
    },
]
