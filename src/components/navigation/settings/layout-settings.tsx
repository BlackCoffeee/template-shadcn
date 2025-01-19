/**
 * Komponen untuk mengatur tata letak menu
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2024-01-19
 */

import { Button } from '@/components/ui/button'
import { useNavigationStore } from '@/store/navigation-store'

export function LayoutSettings() {
    const setOrientation = useNavigationStore(state => state.setOrientation)

    return (
        <div className='space-y-2'>
            <h4 className='text-sm font-medium'>Tata Letak Menu</h4>
            <div className='flex flex-col gap-2'>
                <Button
                    variant='outline'
                    className='justify-center'
                    onClick={() => setOrientation('horizontal')}
                >
                    Menu Horizontal
                </Button>
                <Button
                    variant='outline'
                    className='justify-center'
                    onClick={() => setOrientation('vertical')}
                >
                    Menu Vertikal
                </Button>
            </div>
        </div>
    )
}
