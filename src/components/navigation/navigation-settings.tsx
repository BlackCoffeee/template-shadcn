/**
 * Komponen pengaturan navigasi
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-18
 */

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Settings } from 'lucide-react'
import { useNavigationStore } from '@/store/navigation-store'

export function NavigationSettings() {
    const setOrientation = useNavigationStore(state => state.setOrientation)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='ghost' size='icon'>
                    <Settings className='h-4 w-4' />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                <DropdownMenuItem onClick={() => setOrientation('horizontal')}>
                    Menu Horizontal
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setOrientation('vertical')}>
                    Menu Vertikal
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
