/**
 * Komponen NavigationMenu yang dapat diatur orientasinya
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-18
 */

import { useNavigationStore } from '@/store/navigation-store'
import { NavigationMenuHorizontal } from './horizontal/navigation-menu-horizontal'
import { NavigationMenuVertical } from './vertical/navigation-menu-vertical'
import { cn } from '@/lib/utils'

export function NavigationMenu() {
    const { orientation } = useNavigationStore()

    if (orientation === 'horizontal') {
        return <NavigationMenuHorizontal />
    }

    return (
        <div className={cn('h-full')}>
            <NavigationMenuVertical />
        </div>
    )
}
