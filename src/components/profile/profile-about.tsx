/**
 * Komponen informasi detail profil pengguna
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2024-03-20
 */

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Star, Globe2, Languages } from 'lucide-react'

export function ProfileAbout() {
    // TODO: Ganti dengan data user yang sebenarnya
    const user = {
        fullName: 'John Doe',
        status: 'Active',
        role: 'Developer',
        country: 'USA',
        languages: 'English',
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-base'>ABOUT</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
                <div className='flex items-center gap-2'>
                    <Star className='h-4 w-4 text-muted-foreground' />
                    <div>
                        <div className='font-medium'>Full Name:</div>
                        <div className='text-sm text-muted-foreground'>
                            {user.fullName}
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <Star className='h-4 w-4 text-muted-foreground' />
                    <div>
                        <div className='font-medium'>Status:</div>
                        <div className='text-sm text-muted-foreground'>
                            {user.status}
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <Star className='h-4 w-4 text-muted-foreground' />
                    <div>
                        <div className='font-medium'>Role:</div>
                        <div className='text-sm text-muted-foreground'>
                            {user.role}
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <Globe2 className='h-4 w-4 text-muted-foreground' />
                    <div>
                        <div className='font-medium'>Country:</div>
                        <div className='text-sm text-muted-foreground'>
                            {user.country}
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <Languages className='h-4 w-4 text-muted-foreground' />
                    <div>
                        <div className='font-medium'>Languages:</div>
                        <div className='text-sm text-muted-foreground'>
                            {user.languages}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
