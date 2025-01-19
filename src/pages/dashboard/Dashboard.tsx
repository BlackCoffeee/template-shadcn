/**
 * Halaman Dashboard utama
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2024-03-20
 */

import { StatCard } from '@/components/dashboard/StatCard'
import { RecentActivities } from '@/components/dashboard/RecentActivities'
import { OverviewChart } from '@/components/dashboard/OverviewChart'
import { Users, FileText, ShoppingCart, ArrowUpRight } from 'lucide-react'
import { PageTitle } from '@/components/ui/page-title'

const Dashboard: React.FC = () => {
    return (
        <>
            <PageTitle title='Dashboard' subtitle='Halaman Dashboard' />

            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
                <StatCard
                    title='Total Pengguna'
                    value='10,482'
                    icon={Users}
                    description='Bulan ini '
                    trend={{ value: 12.5, isPositive: true }}
                />
                <StatCard
                    title='Dokumen Aktif'
                    value='573'
                    icon={FileText}
                    description='Minggu ini '
                    trend={{ value: 8.2, isPositive: true }}
                />
                <StatCard
                    title='Penjualan'
                    value='Rp 24.5M'
                    icon={ShoppingCart}
                    description='Bulan ini '
                    trend={{ value: 4.1, isPositive: false }}
                />
                <StatCard
                    title='Konversi'
                    value='32.5%'
                    icon={ArrowUpRight}
                    description='Minggu ini '
                    trend={{ value: 2.3, isPositive: true }}
                />
            </div>

            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
                <div className='col-span-2'>
                    <OverviewChart />
                </div>
                <RecentActivities />
            </div>
        </>
    )
}

export default Dashboard
