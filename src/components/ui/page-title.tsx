/**
 * Komponen PageTitle untuk menampilkan judul dan subtitle halaman
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-19
 */

import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface PageTitleProps {
    title: string
    subtitle?: string
    className?: string
    action?: ReactNode
}

export function PageTitle({
    title,
    subtitle,
    className,
    action,
}: PageTitleProps) {
    return (
        <div
            className={cn('mb-8 flex items-center justify-between', className)}
        >
            <div>
                <h1 className='text-3xl font-bold tracking-tight'>{title}</h1>
                {subtitle && (
                    <p className='mt-1 text-muted-foreground'>{subtitle}</p>
                )}
            </div>
            {action && <div className='ml-auto'>{action}</div>}
        </div>
    )
}
