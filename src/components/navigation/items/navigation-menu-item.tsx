/**
 * Komponen NavigationMenuItem untuk menampilkan item menu navigasi
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-18
 */

import { cn } from '@/lib/utils'
import { Link, useLocation } from 'react-router-dom'
import { MenuItem } from '../menu-items'

interface NavigationMenuItemProps {
    item: MenuItem
}

export function NavigationMenuItem({ item }: NavigationMenuItemProps) {
    const location = useLocation()
    const isActive = location.pathname === item.href

    return (
        <Link
            to={item.href}
            className={cn(
                'flex items-center gap-2 px-3 py-1.5 h-8 rounded-md hover:bg-accent/50 whitespace-nowrap',
                isActive && 'bg-accent text-accent-foreground'
            )}
        >
            {item.icon && (
                <item.icon
                    className={cn(
                        'h-4 w-4 flex-shrink-0',
                        isActive ? 'text-primary' : 'text-foreground'
                    )}
                />
            )}
            <span
                className={cn(
                    'text-sm',
                    isActive ? 'text-primary font-medium' : 'text-foreground'
                )}
            >
                {item.title}
            </span>
        </Link>
    )
}
