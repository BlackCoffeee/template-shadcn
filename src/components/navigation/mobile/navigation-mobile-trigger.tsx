/**
 * Komponen tombol hamburger untuk menu mobile
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2024-01-19
 */
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'

interface NavigationMobileTriggerProps {
    children: React.ReactNode
}

export function NavigationMobileTrigger({
    children,
}: NavigationMobileTriggerProps) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant='ghost' size='icon' className='md:hidden'>
                    <Menu className='h-5 w-5' />
                    <span className='sr-only'>Toggle Menu</span>
                </Button>
            </SheetTrigger>
            {children}
        </Sheet>
    )
}
