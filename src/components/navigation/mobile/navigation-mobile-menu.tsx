/**
 * Komponen menu navigasi untuk tampilan mobile
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2024-01-19
 */
import { ScrollArea } from '@/components/ui/scroll-area'
import { SheetContent, SheetHeader } from '@/components/ui/sheet'
import { menuItems } from '../menu-items'
import { NavigationMenuItem } from '../items/navigation-menu-item'
import { Logo } from '@/components/brand/logo'

export function NavigationMobileMenu() {
    return (
        <SheetContent side='left' className='w-72 p-0'>
            <SheetHeader className='border-b p-4'>
                <Logo className='mr-0' />
            </SheetHeader>
            <ScrollArea className='h-[calc(100vh-4rem)]'>
                <div className='flex flex-col gap-2 p-4'>
                    <nav className='flex flex-col gap-1'>
                        {menuItems.map(item => (
                            <NavigationMenuItem key={item.href} item={item} />
                        ))}
                    </nav>
                </div>
            </ScrollArea>
        </SheetContent>
    )
}
