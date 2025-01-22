/**
 * Komponen informasi detail profil pengguna
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-21
 */

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
    Check,
    Flag,
    Github,
    Languages,
    Linkedin,
    Mail,
    Phone,
    Star,
    User,
} from 'lucide-react'
import { ThreadsIcon } from '@/components/icons/threads-icon'

export function ProfileAbout() {
    // TODO: Ganti dengan data user yang sebenarnya
    const user = {
        fullName: 'Muhammad Arif',
        status: 'Active',
        role: 'Full Stack Developer',
        country: 'Indonesia',
        languages: 'Indonesia',
    }

    const contact = {
        email: 'arif@unism.ac.id',
        phone: '+62 81234567890',
        threads: '@arifmuhammad.dev',
        github: 'BlackCoffeee',
        linkedin: 'budiman-arif',
    }

    return (
        <div>
            <Card>
                <CardHeader className='py-[27px]'>
                    <CardTitle className='text-sm text-muted-foreground'>
                        ABOUT
                    </CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                    <div className='flex items-center gap-2'>
                        <User className='w-4 h-4 text-foreground' />
                        <div className='font-medium text-foreground'>
                            Full Name:{' '}
                            <span className=' text-foreground'>
                                {user.fullName}
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Check className='w-4 h-4 text-foreground' />
                        <div className='font-medium text-foreground'>
                            Status:{' '}
                            <span className=' text-foreground'>
                                {user.status}
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Star className='w-4 h-4 text-foreground' />
                        <div className='font-medium text-foreground'>
                            Role:{' '}
                            <span className=' text-foreground'>
                                {user.role}
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Flag className='w-4 h-4 text-foreground' />
                        <div className='font-medium text-foreground'>
                            Country:{' '}
                            <span className=' text-foreground'>
                                {user.country}
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Languages className='w-4 h-4 text-foreground' />
                        <div className='font-medium text-foreground'>
                            Languages:{' '}
                            <span className=' text-foreground'>
                                {user.languages}
                            </span>
                        </div>
                    </div>
                </CardContent>
                <CardHeader>
                    <CardTitle className='text-sm text-muted-foreground'>
                        Contact
                    </CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                    <div className='flex items-center gap-2'>
                        <Mail className='w-4 h-4 text-foreground' />
                        <div className='font-medium text-foreground'>
                            Email:{' '}
                            <span className=' text-foreground'>
                                {contact.email}
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Phone className='w-4 h-4 text-foreground' />
                        <div className='font-medium text-foreground'>
                            Phone:{' '}
                            <span className=' text-foreground'>
                                {contact.phone}
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <ThreadsIcon className='w-4 h-4 text-foreground' />
                        <div className='font-medium text-foreground'>
                            Threads:{' '}
                            <span className=' text-foreground'>
                                {contact.threads}
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Github className='w-4 h-4 text-foreground' />
                        <div className='font-medium text-foreground'>
                            Github:{' '}
                            <span className=' text-foreground'>
                                {contact.github}
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Linkedin className='w-4 h-4 text-foreground' />
                        <div className='font-medium text-foreground'>
                            Linkedin:{' '}
                            <span className=' text-foreground'>
                                {contact.linkedin}
                            </span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
