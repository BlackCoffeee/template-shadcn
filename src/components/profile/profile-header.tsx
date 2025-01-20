/**
 * Komponen header profil pengguna
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2024-03-20
 */

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { MapPin, Briefcase, Calendar } from 'lucide-react'

export function ProfileHeader() {
    // TODO: Ganti dengan data user yang sebenarnya
    const user = {
        name: 'Muhammad Arif',
        avatar: 'https://github.com/BlackCoffeee.png',
        role: 'Software Engineer',
        location: 'Banjarmasin, Indonesia',
        joinedDate: 'April 2021',
    }

    return (
        <div className='absolute -bottom-[90px] w-full'>
            <div className='flex flex-col sm:flex-row items-center rounded-b-lg border-t-2 border-background bg-background shadow-sm'>
                <Avatar className='h-[120px] w-[120px] -top-16 relative sm:left-8 border-4 border-background'>
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className='flex flex-1 flex-col items-center gap-1 sm:gap-2 -mt-12 sm:mt-0 sm:items-start sm:pl-8'>
                    <h2 className='text-2xl font-bold'>{user.name}</h2>
                    <div className='grid grid-cols-2 sm:flex sm:flex-wrap justify-center sm:justify-start items-center gap-y-2 gap-x-4 sm:gap-4 text-sm text-muted-foreground'>
                        <div className='flex items-center gap-1 sm:gap-2'>
                            <Briefcase className='h-4 w-4' />
                            <span>{user.role}</span>
                        </div>
                        <div className='flex items-center gap-1 sm:gap-2'>
                            <MapPin className='h-4 w-4' />
                            <span>{user.location}</span>
                        </div>
                        <div className='flex items-center gap-1 sm:gap-2 col-span-2 justify-center sm:justify-start sm:col-span-1'>
                            <Calendar className='h-4 w-4' />
                            <span>Joined {user.joinedDate}</span>
                        </div>
                    </div>
                </div>
                <div className='sm:self-center'>
                    <Button className='bg-primary my-4 sm:mt-0 sm:mr-4'>
                        Connected
                    </Button>
                </div>
            </div>
        </div>
    )
}
