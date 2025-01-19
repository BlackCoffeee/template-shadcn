/**
 * Komponen Logo untuk branding aplikasi
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-18
 */

import { cn } from '../../lib/utils'

export interface LogoProps {
    className?: string
}

export function Logo({ className }: LogoProps) {
    return (
        <a className={cn('flex items-center space-x-2', className)} href='/'>
            <span className='font-bold text-3xl'>
                {import.meta.env.VITE_APP_NAME}
            </span>
        </a>
    )
}
