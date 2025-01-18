/**
 * Komponen NavigationMenuHorizontal untuk menampilkan menu navigasi secara horizontal
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-18
 */

import { cn } from '@/lib/utils'
import { menuItems } from '../menu-items'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { NavigationMenuItem } from '../items/navigation-menu-item'

export function NavigationMenuHorizontal() {
    return (
        <ScrollArea className='max-w-[600px] lg:max-w-none'>
            <nav className={cn('flex items-center gap-1 px-2')}>
                {menuItems.map(item => (
                    <NavigationMenuItem key={item.href} item={item} />
                ))}
            </nav>
            <ScrollBar orientation='horizontal' />
        </ScrollArea>
    )
}
