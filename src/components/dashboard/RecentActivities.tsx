/**
 * Komponen daftar aktivitas terbaru
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-19
 */

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

const activities = [
    {
        user: 'Muhammad Arif',
        action: 'membuat dokumen baru',
        time: '2 menit yang lalu',
    },
    {
        user: 'Sarah Johnson',
        action: 'mengedit profil',
        time: '5 menit yang lalu',
    },
    {
        user: 'John Doe',
        action: 'mengunggah file',
        time: '10 menit yang lalu',
    },
    {
        user: 'Alice Smith',
        action: 'menghapus dokumen',
        time: '15 menit yang lalu',
    },
]

export const RecentActivities = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Aktivitas Terbaru</CardTitle>
                <CardDescription>
                    Ada {activities.length} aktivitas dalam 1 jam terakhir
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className='space-y-4'>
                    {activities.map((activity, index) => (
                        <div
                            key={index}
                            className='flex items-center gap-4 rounded-lg border p-4'
                        >
                            <div className='flex-1 space-y-1'>
                                <p className='text-sm font-medium leading-none'>
                                    {activity.user}
                                </p>
                                <p className='text-sm text-muted-foreground'>
                                    {activity.action}
                                </p>
                            </div>
                            <div className='text-sm text-muted-foreground'>
                                {activity.time}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
