/**
 * Komponen timeline aktivitas pengguna
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2024-03-20
 */

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
            title: '12 Invoices have been paid',
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
                avatar: 'https://github.com/shadcn.png',
            },
        },
    ]

    return (
        <Card>
            <CardHeader className='flex flex-row items-center justify-between'>
                <CardTitle className='text-base'>Activity Timeline</CardTitle>
                <Button variant='ghost' size='icon'>
                    ⋮
                </Button>
            </CardHeader>
            <CardContent className='space-y-8'>
                {activities.map(activity => (
                    <div
                        key={activity.id}
                        className='flex gap-4 relative pb-8 last:pb-0'
                    >
                        <div className='absolute left-2 top-2 h-full w-px bg-border last:hidden' />
                        <div className='h-4 w-4 rounded-full bg-primary mt-1' />
                        <div className='flex-1 space-y-3'>
                            <div className='flex items-center justify-between'>
                                <p className='font-medium'>{activity.title}</p>
                                <span className='text-sm text-muted-foreground'>
                                    {activity.time}
                                </span>
                            </div>
                            <p className='text-sm text-muted-foreground'>
                                {activity.description}
                            </p>
                            {activity.type === 'invoice' && (
                                <div className='flex items-center gap-2 rounded-md border p-2 w-fit'>
                                    <FileText className='h-4 w-4 text-muted-foreground' />
                                    <span className='text-sm'>
                                        {activity.attachment}
                                    </span>
                                </div>
                            )}
                            {activity.type === 'meeting' && (
                                <div className='flex items-center gap-3 rounded-md border p-3'>
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
