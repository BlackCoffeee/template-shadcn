/**
 * Komponen ProfileTabs untuk menampilkan tab navigasi pada halaman profile
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2024-03-20
 */

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { ProfileTimeline } from './profile-timeline'
import { ProfileAbout } from './profile-about'

export function ProfileTabs() {
    return (
        <Tabs defaultValue='about' className='w-full'>
            <TabsList className='grid w-full grid-cols-2 bg-background'>
                <TabsTrigger
                    className='data-[state=active]:bg-primary/10 data-[state=active]:text-primary'
                    value='about'
                >
                    About
                </TabsTrigger>
                <TabsTrigger
                    className='data-[state=active]:bg-primary/10 data-[state=active]:text-primary'
                    value='timeline'
                >
                    Timeline
                </TabsTrigger>
            </TabsList>
            <TabsContent value='about'>
                <ProfileAbout />
            </TabsContent>
            <TabsContent value='timeline'>
                <ProfileTimeline />
            </TabsContent>
        </Tabs>
    )
}
