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
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { ColorPicker, LayoutSettings } from './settings'

export function NavigationSettings() {
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
                        <SheetDescription>
                            Sesuaikan tampilan aplikasi sesuai preferensi Anda
                        </SheetDescription>
                    </SheetHeader>
                    <ScrollArea className='h-[calc(100vh-4rem)]'>
                        <div className='flex flex-col gap-6 p-6'>
                            <LayoutSettings />
                            <Separator />
                            <ColorPicker />
                        </div>
                    </ScrollArea>
                </SheetContent>
            </Sheet>
        </div>
    )
}
