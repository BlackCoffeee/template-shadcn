/**
 * Komponen pengaturan navigasi
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-18
 */

import { Button } from '@/components/ui/button'
import { Settings } from 'lucide-react'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { useNavigationStore } from '@/store/navigation-store'
import { ScrollArea } from '@/components/ui/scroll-area'

export function NavigationSettings() {
    const setOrientation = useNavigationStore(state => state.setOrientation)

    return (
        <div className='hidden md:flex items-center'>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant='ghost' size='icon'>
                        <Settings className='h-4 w-4' />
                    </Button>
                </SheetTrigger>
                <SheetContent side='right' className='w-[300px] p-0'>
                    <SheetHeader className='p-6 border-b'>
                        <SheetTitle>Pengaturan Tampilan</SheetTitle>
                    </SheetHeader>
                    <ScrollArea className='h-[calc(100vh-4rem)]'>
                        <div className='flex flex-col gap-4 p-6'>
                            <div className='space-y-2'>
                                <h4 className='text-sm font-medium'>
                                    Tata Letak Menu
                                </h4>
                                <div className='flex flex-col gap-2'>
                                    <Button
                                        variant='outline'
                                        className='justify-start'
                                        onClick={() =>
                                            setOrientation('horizontal')
                                        }
                                    >
                                        Menu Horizontal
                                    </Button>
                                    <Button
                                        variant='outline'
                                        className='justify-start'
                                        onClick={() =>
                                            setOrientation('vertical')
                                        }
                                    >
                                        Menu Vertikal
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </ScrollArea>
                </SheetContent>
            </Sheet>
        </div>
    )
}
