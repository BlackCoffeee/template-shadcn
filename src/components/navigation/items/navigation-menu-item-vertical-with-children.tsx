/**
 * Komponen untuk menampilkan menu dengan sub-menu
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-19
 */

import { cn } from '@/lib/utils'
import { ChevronDown, Circle } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MenuItem } from '../menu-items'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible'

interface NavigationMenuItemWithChildrenProps {
    item: MenuItem
    level?: number
}

export function NavigationMenuItemWithChildren({
    item,
    level = 0,
}: NavigationMenuItemWithChildrenProps) {
    const location = useLocation()
    const [isOpen, setIsOpen] = useState(false)
    const isActive = location.pathname.startsWith(item.href)
    const hasChildren = item.children && item.children.length > 0

    if (!hasChildren) {
        return (
            <Link
                to={item.href}
                className={cn(
                    'flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent/50',
                    level > 0 && 'ml-4'
                )}
            >
                {level > 0 && (
                    <Circle className='h-1.5 w-1.5 text-foreground' />
                )}
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
            </Link>
        )
    }

    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger
                className={cn(
                    'flex w-full items-center justify-between px-3 py-2 rounded-md hover:bg-accent/50',
                    level > 0 && 'ml-4'
                )}
            >
                <div className='flex items-center gap-2'>
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
                </div>
                <ChevronDown
                    className={cn(
                        'h-4 w-4 transition-transform duration-200',
                        isOpen && 'rotate-180'
                    )}
                />
            </CollapsibleTrigger>
            <CollapsibleContent>
                {item.children?.map(child => (
                    <NavigationMenuItemWithChildren
                        key={child.href}
                        item={child}
                        level={level + 1}
                    />
                ))}
            </CollapsibleContent>
        </Collapsible>
    )
}
