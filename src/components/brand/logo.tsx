/**
 * Komponen Logo untuk branding aplikasi
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-18
 */

import { cn } from '../../lib/utils'
import { useNavigationStore } from '@/store/navigation-store'

export interface LogoProps {
    className?: string
}

export function Logo({ className }: LogoProps) {
    const { collapsed, orientation } = useNavigationStore()

    return (
        <a className={cn('inline-flex items-center', className)} href='/'>
            <img
                src='/logo.svg'
                alt='Logo'
                className={cn(
                    'h-8 w-8 transition-transform duration-300',
                    collapsed && 'scale-90'
                )}
            />
            <span
                className={cn(
                    'ml-2 font-bold text-xl transition-all duration-300',
                    collapsed && orientation === 'vertical' && 'hidden',
                    orientation === 'horizontal' && 'ml-3'
                )}
            >
                {import.meta.env.VITE_APP_NAME}
            </span>
        </a>
    )
}
