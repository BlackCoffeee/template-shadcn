/**
 * Komponen untuk menampilkan menu dropdown pada navigasi horizontal
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-19
 */

import * as React from 'react'
import { cn } from '@/lib/utils'
import { ChevronDown, Dot } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { MenuItem } from '../menu-items'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible'

interface NavigationMenuItemHorizontalWithChildrenProps {
    item: MenuItem
}

export function NavigationMenuItemHorizontalWithChildren({
    item,
}: NavigationMenuItemHorizontalWithChildrenProps) {
    const location = useLocation()
    const isActive = location.pathname.startsWith(item.href)

    const renderMenuItem = (menuItem: MenuItem, level = 0) => {
        if (menuItem.children) {
            return (
                <Collapsible key={menuItem.href}>
                    <CollapsibleTrigger className='w-full'>
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
                            <ChevronDown className='h-4 w-4' />
                        </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        {menuItem.children.map(child =>
                            renderMenuItem(child, level + 1)
                        )}
                    </CollapsibleContent>
                </Collapsible>
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
                    {level > 0 && <Dot className='h-1 w-1 text-foreground' />}
                    {menuItem.icon && <menuItem.icon className='h-4 w-4' />}
                    <span>{menuItem.title}</span>
                </Link>
            </DropdownMenuItem>
        )
    }

    const renderMenuItems = (items: MenuItem[], level = 0): JSX.Element[] => {
        return items.map(menuItem => (
            <React.Fragment key={menuItem.href}>
                {renderMenuItem(menuItem, level)}
            </React.Fragment>
        ))
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                className={cn(
                    'flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent/50',
                    isActive && 'text-primary'
                )}
            >
                {item.icon && (
                    <item.icon
                        className={cn(
                            'h-4 w-4',
                            isActive ? 'text-primary' : 'text-foreground'
                        )}
                    />
                )}
                <span
                    className={cn(
                        isActive
                            ? 'text-primary font-medium'
                            : 'text-foreground'
                    )}
                >
                    {item.title}
                </span>
                <ChevronDown className='h-4 w-4' />
            </DropdownMenuTrigger>
            <DropdownMenuContent align='start' className='min-w-[200px]'>
                {item.children && renderMenuItems(item.children)}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
