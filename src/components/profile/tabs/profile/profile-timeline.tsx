/**
 * Komponen timeline aktivitas pengguna
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2024-03-20
 */

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { EllipsisVertical, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

type Participant = {
    name: string
    role: string
    avatar: string
}

type Activity = {
    id: number
    title: string
    description: string
    time: string
    type: 'invoice' | 'meeting'
} & (
    | { type: 'invoice'; attachment: string }
    | { type: 'meeting'; participant: Participant }
)

export function ProfileTimeline() {
    // TODO: Ganti dengan data aktivitas yang sebenarnya
    const activities: Activity[] = [
        {
            id: 1,
            title: '12 Invoices have been paid 12 Invoices have been paid',
            description: 'Invoices have been paid to the company',
            time: '12 min ago',
            type: 'invoice',
            attachment: 'invoices.pdf',
        },
        {
            id: 2,
            title: 'Client Meeting',
            description: 'Project meeting with john @10:15am',
            time: '45 min ago',
            type: 'meeting',
            participant: {
                name: 'Lester McCarthy',
                role: 'CEO of Pixinvent',
                avatar: 'https://github.com/blackcoffeee.png',
            },
        },
    ]

    return (
        <Card>
            <CardHeader className='flex flex-row items-center justify-between py-4'>
                <CardTitle className='text-base'>Activity Timeline</CardTitle>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant='ghost' size='icon'>
                            <EllipsisVertical className='w-4 h-4' />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                        <DropdownMenuItem>Share Timeline</DropdownMenuItem>
                        <DropdownMenuItem>Suggest Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Report Bug</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </CardHeader>
            <CardContent className='pb-12 space-y-8'>
                {activities.map(activity => (
                    <div
                        key={activity.id}
                        className='relative flex gap-4 pb-8 last:pb-0'
                    >
                        <div className='absolute w-px top-7 -bottom-7 left-2 bg-muted-foreground last:hidden' />
                        <div className='relative z-10 w-4 h-4 mt-1 rounded-full bg-primary' />
                        <div className='flex-1 space-y-3'>
                            <div className='flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between'>
                                <p className='font-medium'>{activity.title}</p>
                                <span className='text-sm text-muted-foreground'>
                                    {activity.time}
                                </span>
                            </div>
                            <p className='text-sm text-muted-foreground'>
                                {activity.description}
                            </p>
                            {activity.type === 'invoice' && (
                                <div className='flex items-center gap-2 p-2 border rounded-md border-muted-foreground w-fit'>
                                    <FileText className='w-4 h-4 text-muted-foreground' />
                                    <span className='text-sm'>
                                        {activity.attachment}
                                    </span>
                                </div>
                            )}
                            {activity.type === 'meeting' && (
                                <div className='flex items-center gap-3'>
                                    <Avatar>
                                        <AvatarImage
                                            src={activity.participant.avatar}
                                            alt={activity.participant.name}
                                        />
                                        <AvatarFallback>
                                            {activity.participant.name.charAt(
                                                0
                                            )}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className='font-medium'>
                                            {activity.participant.name}
                                        </p>
                                        <p className='text-sm text-muted-foreground'>
                                            {activity.participant.role}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}
