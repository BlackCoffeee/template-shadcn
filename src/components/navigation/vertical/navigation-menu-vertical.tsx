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

export function NavigationMenuVertical() {
    const { collapsed } = useNavigationStore()

    if (collapsed) {
        return (
            <div className='flex flex-col gap-2'>
                <nav className='flex flex-col gap-1'>
                    {menuItems.map(item => (
                        <NavigationMenuItemCollapsed
                            key={item.href}
                            item={item}
                        />
                    ))}
                </nav>
            </div>
        )
    }

    return (
        <div className='flex flex-col gap-2'>
            <nav className='flex flex-col gap-1'>
                {menuItems.map(item =>
                    item.children ? (
                        <NavigationMenuItemWithChildren
                            key={item.href}
                            item={item}
                        />
                    ) : (
                        <NavigationMenuItem key={item.href} item={item} />
                    )
                )}
            </nav>
        </div>
    )
}
