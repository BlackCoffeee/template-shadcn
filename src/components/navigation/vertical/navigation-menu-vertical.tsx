/**
 * Komponen NavigationMenuVertical untuk menampilkan menu navigasi secara vertikal
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-18
 */

import { menuItems } from '../menu-items'
import { useNavigationStore } from '@/store/navigation-store'
import { NavigationMenuItem } from '../items/navigation-menu-item'
import { NavigationMenuItemCollapsed } from '../items/navigation-menu-item-collapsed'
import { NavigationMenuItemWithChildren } from '../items/navigation-menu-item-vertical-with-children'
import { Logo } from '@/components/brand/logo'
import { cn } from '@/lib/utils'

export function NavigationMenuVertical() {
    const { collapsed } = useNavigationStore()

    const renderMenuItems = () => {
        if (collapsed) {
            return menuItems.map(item => (
                <NavigationMenuItemCollapsed key={item.href} item={item} />
            ))
        }

        return menuItems.map(item =>
            item.children ? (
                <NavigationMenuItemWithChildren key={item.href} item={item} />
            ) : (
                <NavigationMenuItem key={item.href} item={item} />
            )
        )
    }

    return (
        <div className='flex flex-col h-full'>
            <div
                className={cn(
                    'flex items-center h-14 px-4',
                    collapsed ? 'justify-center' : 'justify-start'
                )}
            >
                <Logo className='transition-all duration-300' />
            </div>

            <div className='flex flex-col gap-2 px-2'>
                <nav className='flex flex-col gap-1'>{renderMenuItems()}</nav>
            </div>
        </div>
    )
}
