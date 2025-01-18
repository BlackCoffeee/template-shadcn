/**
 * Komponen NavigationMenuItemCollapsed untuk menampilkan item menu navigasi dalam keadaan collapsed
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-18
 */

import { cn } from '@/lib/utils'
import { Link, useLocation } from 'react-router-dom'
import { MenuItem } from '../menu-items'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip'

interface NavigationMenuItemCollapsedProps {
    item: MenuItem
}

export function NavigationMenuItemCollapsed({
    item,
}: NavigationMenuItemCollapsedProps) {
    const location = useLocation()
    const isActive = location.pathname === item.href

    return (
        <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
                <Link
                    to={item.href}
                    className='flex items-center justify-center h-10 w-10 rounded-md hover:bg-accent/50'
                >
                    {item.icon && (
                        <item.icon
                            className={cn(
                                'h-4 w-4',
                                isActive
                                    ? 'text-primary'
                                    : 'text-muted-foreground'
                            )}
                        />
                    )}
                </Link>
            </TooltipTrigger>
            <TooltipContent side='right'>{item.title}</TooltipContent>
        </Tooltip>
    )
}
