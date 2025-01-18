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
            className='flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent/50'
        >
            {item.icon && (
                <item.icon
                    className={cn(
                        'h-4 w-4',
                        isActive ? 'text-primary' : 'text-muted-foreground'
                    )}
                />
            )}
            <span
                className={cn(
                    isActive
                        ? 'text-primary font-medium'
                        : 'text-muted-foreground'
                )}
            >
                {item.title}
            </span>
        </Link>
    )
}
