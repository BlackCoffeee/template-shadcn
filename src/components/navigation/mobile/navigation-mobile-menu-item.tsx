/**
 * Komponen item menu untuk navigasi mobile
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2024-01-19
 */
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MenuItem } from '../menu-items'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible'

interface NavigationMobileMenuItemProps {
    item: MenuItem
    level?: number
}

export function NavigationMobileMenuItem({
    item,
    level = 0,
}: NavigationMobileMenuItemProps) {
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
                    level > 0 && 'ml-4',
                    isActive && 'bg-accent/50'
                )}
                onClick={() => {
                    // Tutup sheet ketika item menu diklik
                    const event = new CustomEvent('close-sheet')
                    window.dispatchEvent(event)
                }}
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
            </Link>
        )
    }

    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger
                className={cn(
                    'flex w-full items-center justify-between px-3 py-2 rounded-md hover:bg-accent/50',
                    level > 0 && 'ml-4',
                    isActive && 'bg-accent/50'
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
                    <NavigationMobileMenuItem
                        key={child.href}
                        item={child}
                        level={level + 1}
                    />
                ))}
            </CollapsibleContent>
        </Collapsible>
    )
}
