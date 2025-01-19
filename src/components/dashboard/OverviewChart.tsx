/**
 * Komponen grafik overview untuk dashboard
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2024-03-20
 */

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts'

const data = [
    { bulan: 'Jan', pendapatan: 4000, pengeluaran: 2400 },
    { bulan: 'Feb', pendapatan: 3000, pengeluaran: 1398 },
    { bulan: 'Mar', pendapatan: 2000, pengeluaran: 9800 },
    { bulan: 'Apr', pendapatan: 2780, pengeluaran: 3908 },
    { bulan: 'Mei', pendapatan: 1890, pengeluaran: 4800 },
    { bulan: 'Jun', pendapatan: 2390, pengeluaran: 3800 },
    { bulan: 'Jul', pendapatan: 3490, pengeluaran: 4300 },
    { bulan: 'Agu', pendapatan: 4000, pengeluaran: 2400 },
    { bulan: 'Sep', pendapatan: 3000, pengeluaran: 1398 },
    { bulan: 'Okt', pendapatan: 2000, pengeluaran: 9800 },
    { bulan: 'Nov', pendapatan: 2780, pengeluaran: 3908 },
    { bulan: 'Des', pendapatan: 1890, pengeluaran: 4800 },
]

export const OverviewChart = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Overview Keuangan</CardTitle>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width='100%' height={400}>
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis
                            dataKey='bulan'
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={value =>
                                `Rp${value.toLocaleString()}`
                            }
                        />
                        <Tooltip
                            content={({ active, payload }) => {
                                if (
                                    active &&
                                    payload?.[0]?.value !== undefined &&
                                    payload?.[1]?.value !== undefined
                                ) {
                                    return (
                                        <div className='rounded-lg border bg-background p-2 shadow-sm'>
                                            <div className='grid grid-cols-2 gap-2'>
                                                <div className='flex flex-col'>
                                                    <span className='text-[0.70rem] uppercase text-muted-foreground'>
                                                        Pendapatan
                                                    </span>
                                                    <span className='font-bold text-green-500'>
                                                        Rp
                                                        {(
                                                            payload[0]
                                                                .value as number
                                                        ).toLocaleString()}
                                                    </span>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <span className='text-[0.70rem] uppercase text-muted-foreground'>
                                                        Pengeluaran
                                                    </span>
                                                    <span className='font-bold text-red-500'>
                                                        Rp
                                                        {(
                                                            payload[1]
                                                                .value as number
                                                        ).toLocaleString()}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                return null
                            }}
                        />
                        <Area
                            type='monotone'
                            dataKey='pendapatan'
                            stroke='#22c55e'
                            fill='#22c55e'
                            fillOpacity={0.2}
                            strokeWidth={2}
                        />
                        <Area
                            type='monotone'
                            dataKey='pengeluaran'
                            stroke='#ef4444'
                            fill='#ef4444'
                            fillOpacity={0.2}
                            strokeWidth={2}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}
