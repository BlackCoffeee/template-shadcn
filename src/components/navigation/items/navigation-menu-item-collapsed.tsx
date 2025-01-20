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
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronRight } from 'lucide-react'

interface NavigationMenuItemCollapsedProps {
    item: MenuItem
}

export function NavigationMenuItemCollapsed({
    item,
}: NavigationMenuItemCollapsedProps) {
    const location = useLocation()
    const isActive = location.pathname.startsWith(item.href)
    const hasChildren = item.children && item.children.length > 0

    const renderMenuItem = (menuItem: MenuItem, level = 0) => {
        if (menuItem.children) {
            return (
                <DropdownMenu key={menuItem.href}>
                    <DropdownMenuTrigger
                        className='w-full focus:outline-none'
                        asChild
                    >
                        <div
                            className={cn(
                                'flex items-center justify-between w-full px-2 py-1.5 hover:bg-accent/50 rounded-sm',
                                level > 0 && 'pl-6'
                            )}
                        >
                            <div className='flex items-center gap-2'>
                                {menuItem.icon && (
                                    <menuItem.icon className='h-4 w-4' />
                                )}
                                <span>{menuItem.title}</span>
                            </div>
                            <ChevronRight className='h-4 w-4' />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side='right' className='min-w-[200px]'>
                        {menuItem.children.map(child =>
                            renderMenuItem(child, level + 1)
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }

        return (
            <DropdownMenuItem key={menuItem.href} asChild>
                <Link
                    to={menuItem.href}
                    className={cn(
                        'flex items-center gap-2 w-full',
                        level > 0 && 'pl-6'
                    )}
                >
                    {menuItem.icon && <menuItem.icon className='h-4 w-4' />}
                    <span>{menuItem.title}</span>
                </Link>
            </DropdownMenuItem>
        )
    }

    if (!hasChildren) {
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
                                        : 'text-foreground'
                                )}
                            />
                        )}
                    </Link>
                </TooltipTrigger>
                <TooltipContent side='right'>{item.title}</TooltipContent>
            </Tooltip>
        )
    }

    return (
        <DropdownMenu>
            <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                    <DropdownMenuTrigger asChild>
                        <button className='flex items-center justify-center h-10 w-10 rounded-md hover:bg-accent/50'>
                            {item.icon && (
                                <item.icon
                                    className={cn(
                                        'h-4 w-4',
                                        isActive
                                            ? 'text-primary'
                                            : 'text-foreground'
                                    )}
                                />
                            )}
                        </button>
                    </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent side='right'>{item.title}</TooltipContent>
            </Tooltip>
            <DropdownMenuContent side='right' className='min-w-[200px]'>
                {item.children?.map(child => renderMenuItem(child))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
