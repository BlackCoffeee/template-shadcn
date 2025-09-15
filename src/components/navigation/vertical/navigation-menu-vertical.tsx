/**
 * Navigation Menu Vertical - Komponen sidebar menggunakan ShadCN UI
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-19
 */
import { 
    ChevronDown,
    ChevronRight,
    PanelLeftClose,
    PanelLeftOpen
} from 'lucide-react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { menuItems, MenuItem } from '@/components/navigation/menu-items'
import { cn } from '@/lib/utils'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import { UserProfileSection } from './user-profile-section'

interface NavigationMenuVerticalProps {
    isCollapsed?: boolean
    onToggleCollapse?: () => void
}

export function NavigationMenuVertical({ 
    isCollapsed = false, 
    onToggleCollapse 
}: NavigationMenuVerticalProps) {
    const location = useLocation()
    const [expandedItems, setExpandedItems] = useState<string[]>([])
    const [expandedSubItems, setExpandedSubItems] = useState<string[]>([])

    const toggleExpanded = (itemTitle: string) => {
        setExpandedItems(prev => 
            prev.includes(itemTitle) 
                ? prev.filter(item => item !== itemTitle)
                : [...prev, itemTitle]
        )
    }

    const toggleSubExpanded = (itemTitle: string) => {
        setExpandedSubItems(prev => 
            prev.includes(itemTitle) 
                ? prev.filter(item => item !== itemTitle)
                : [...prev, itemTitle]
        )
    }

    const hasChildren = (item: MenuItem) => {
        return item.children && item.children.length > 0
    }

    const isActive = (href: string) => {
        return location.pathname === href
    }

    const isParentActive = (item: MenuItem) => {
        if (isActive(item.href)) return true
        if (item.children) {
            return item.children.some(child => 
                isActive(child.href) || 
                (child.children && child.children.some(grandChild => isActive(grandChild.href)))
            )
        }
        return false
    }

    const isChildActive = (child: MenuItem) => {
        if (isActive(child.href)) return true
        if (child.children) {
            return child.children.some(grandChild => isActive(grandChild.href))
        }
        return false
    }

    // Auto-expand menu yang aktif
    useEffect(() => {
        const newExpandedItems: string[] = []
        const newExpandedSubItems: string[] = []

        menuItems.forEach(item => {
            if (isParentActive(item)) {
                newExpandedItems.push(item.title)
                
                // Cek sub-items yang aktif
                if (item.children) {
                    item.children.forEach(child => {
                        if (isChildActive(child)) {
                            newExpandedSubItems.push(child.title)
                        }
                    })
                }
            }
        })

        setExpandedItems(newExpandedItems)
        setExpandedSubItems(newExpandedSubItems)
    }, [location.pathname])

    return (
        <TooltipProvider>
            <div className='flex flex-col sidebar-height-fallback'>
                {/* Sidebar Header */}
                <div className='flex justify-end items-center px-4 py-4 border-b border-foreground/10'>
                    {onToggleCollapse && (
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <button
                                    onClick={onToggleCollapse}
                                    className='flex justify-center items-center w-8 h-8 rounded transition-colors hover:bg-accent'
                                    aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                                >
                                    {isCollapsed ? (
                                        <PanelLeftOpen className='w-5 h-5 text-foreground/70' />
                                    ) : (
                                        <PanelLeftClose className='w-5 h-5 text-foreground/70' />
                                    )}
                                </button>
                            </TooltipTrigger>
                            <TooltipContent side="bottom" className="ml-2">
                                <p className="text-white">{isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}</p>
                            </TooltipContent>
                        </Tooltip>
                    )}
                </div>
                
                {/* Sidebar Content */}
                <div className='flex flex-col flex-1 min-h-0'>
                    {/* Navigation Content - Scrollable */}
                    <div className='overflow-y-auto flex-1 p-4'>
                        <nav className='space-y-1'>
                            {menuItems.map((item) => (
                                <div key={item.title}>
                                    {isCollapsed ? (
                                        // Collapsed state dengan tooltip
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <div className={cn(
                                                    'flex justify-center items-center px-3 py-2 text-sm rounded-lg transition-colors cursor-pointer',
                                                    isParentActive(item) 
                                                        ? 'bg-accent text-accent-foreground' 
                                                        : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                                                )}
                                                    onClick={() => hasChildren(item) && toggleExpanded(item.title)}>
                                                    {item.icon && (
                                                        <item.icon className={cn(
                                                            'flex-shrink-0 w-4 h-4',
                                                            isParentActive(item) ? 'text-primary' : ''
                                                        )} />
                                                    )}
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent side="right" className="ml-2">
                                                <p className="text-white">{item.title}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    ) : (
                                        // Expanded state
                                        <div className={cn(
                                            'flex items-center px-3 py-2 text-sm rounded-lg transition-colors cursor-pointer',
                                            isParentActive(item) 
                                                ? 'bg-accent text-accent-foreground' 
                                                : 'text-foreground hover:bg-accent hover:text-accent-foreground',
                                            'justify-between'
                                        )}
                                            onClick={() => hasChildren(item) && toggleExpanded(item.title)}>
                                            <div className='flex flex-1 gap-3 items-center min-w-0'>
                                                {item.icon && (
                                                    <item.icon className={cn(
                                                        'flex-shrink-0 w-4 h-4',
                                                        isParentActive(item) ? 'text-primary' : ''
                                                    )} />
                                                )}
                                                <span className={cn(
                                                    'overflow-hidden ml-3 whitespace-nowrap transition-all duration-300 ease-in-out origin-left',
                                                    'max-w-xs opacity-100 scale-x-100',
                                                    isParentActive(item) ? 'font-medium text-primary' : ''
                                                )}>
                                                    {item.title}
                                                </span>
                                            </div>
                                            {hasChildren(item) && (
                                                <div className='flex-shrink-0 ml-2'>
                                                    {expandedItems.includes(item.title) ? 
                                                        <ChevronDown className='w-4 h-4' /> : 
                                                        <ChevronRight className='w-4 h-4' />
                                                    }
                                                </div>
                                            )}
                                        </div>
                                    )}
                                
                                    {/* Nested items - hanya muncul saat expanded */}
                                    {!isCollapsed && hasChildren(item) && expandedItems.includes(item.title) && (
                                        <div className='pl-4 mt-1 ml-6 space-y-1 border-l border-foreground/10'>
                                            {item.children?.map((child) => (
                                                <div key={child.title}>
                                                    {/* Sub-menu item dengan expand/collapse */}
                                                    {hasChildren(child) ? (
                                                        <div>
                                                            <div className={cn(
                                                                'flex items-center px-3 py-2 text-sm rounded-lg transition-colors cursor-pointer',
                                                                isChildActive(child)
                                                                    ? 'bg-accent text-accent-foreground' 
                                                                    : 'text-foreground/80 hover:bg-accent hover:text-accent-foreground',
                                                                'justify-between'
                                                            )}
                                                                 onClick={() => toggleSubExpanded(child.title)}>
                                                                <div className='flex flex-1 gap-3 items-center min-w-0'>
                                                                    {child.icon && (
                                                                        <child.icon className={cn(
                                                                            'flex-shrink-0 w-4 h-4',
                                                                            isChildActive(child) ? 'text-primary' : ''
                                                                        )} />
                                                                    )}
                                                                    <span className={cn(
                                                                        'overflow-hidden ml-3 whitespace-nowrap',
                                                                        isChildActive(child) ? 'font-medium text-primary' : ''
                                                                    )}>
                                                                        {child.title}
                                                                    </span>
                                                                </div>
                                                                <div className='flex-shrink-0 ml-2'>
                                                                    {expandedSubItems.includes(child.title) ? 
                                                                        <ChevronDown className='w-4 h-4' /> : 
                                                                        <ChevronRight className='w-4 h-4' />
                                                                    }
                                                                </div>
                                                            </div>
                                                            
                                                            {/* Third level items */}
                                                            {expandedSubItems.includes(child.title) && (
                                                                <div className='pl-4 mt-1 ml-6 space-y-1 border-l border-foreground/10'>
                                                                    {child.children?.map((grandChild) => (
                                                                        <a
                                                                            key={grandChild.title}
                                                                            href={grandChild.href}
                                                                            className={cn(
                                                                                'flex items-center px-3 py-2 text-sm rounded-lg transition-colors',
                                                                                isActive(grandChild.href)
                                                                                    ? 'bg-accent text-accent-foreground' 
                                                                                    : 'text-foreground/70 hover:bg-accent hover:text-accent-foreground'
                                                                            )}
                                                                        >
                                                                            <span className={cn(
                                                                                'whitespace-nowrap overflow-hidden',
                                                                                isActive(grandChild.href) ? 'text-primary font-medium' : ''
                                                                            )}>
                                                                                {grandChild.title}
                                                                            </span>
                                                                        </a>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    ) : (
                                                        <a
                                                            href={child.href}
                                                            className={cn(
                                                                'flex items-center px-3 py-2 text-sm rounded-lg transition-colors gap-3',
                                                                isActive(child.href)
                                                                    ? 'bg-accent text-accent-foreground' 
                                                                    : 'text-foreground/80 hover:bg-accent hover:text-accent-foreground'
                                                            )}
                                                        >
                                                            {child.icon && (
                                                                <child.icon className={cn(
                                                                    'flex-shrink-0 w-4 h-4',
                                                                    isActive(child.href) ? 'text-primary' : ''
                                                                )} />
                                                            )}
                                                            <span className={cn(
                                                                'whitespace-nowrap overflow-hidden',
                                                                isActive(child.href) ? 'text-primary font-medium' : ''
                                                            )}>
                                                                {child.title}
                                                            </span>
                                                        </a>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>
                    </div>
                    
                    {/* User Profile Section - Fixed at bottom */}
                    <UserProfileSection isCollapsed={isCollapsed} />
            </div>
        </div>
        </TooltipProvider>
    )
}
