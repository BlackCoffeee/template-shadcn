/**
 * Komponen NavigationCollapseButton untuk mengontrol collapsed state dari navigasi
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-18
 */

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronLeft } from 'lucide-react'
import { useNavigationStore } from '@/store/navigation-store'

interface NavigationCollapseButtonProps {
    /** Class tambahan untuk container button */
    className?: string
}

export function NavigationCollapseButton({
    className,
}: NavigationCollapseButtonProps) {
    const { collapsed, toggleCollapsed } = useNavigationStore()

    return (
        <div className={cn('flex items-center', className)}>
            <Button
                variant='ghost'
                size='icon'
                onClick={toggleCollapsed}
                className='h-8 w-8'
            >
                <ChevronLeft
                    className={cn(
                        'h-4 w-4 transition-transform',
                        collapsed && 'rotate-180'
                    )}
                />
            </Button>
        </div>
    )
}
