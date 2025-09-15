/**
 * Komponen Footer untuk layout utama
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-18
 */
import { useNavigationStore } from '@/store/navigation-store'
import { cn } from '@/lib/utils'

export function Footer() {
    const { orientation } = useNavigationStore()
    
    return (
        <footer className='py-4 mt-auto w-full border-t backdrop-blur bg-background/95 border-foreground/10'>
            <div className='container flex justify-start items-center mx-auto'>
                <p className={cn(
                    'text-sm text-muted-foreground',
                    orientation === 'vertical' && 'px-4'
                )}>
                    © {new Date().getFullYear()}{' '}
                    {import.meta.env.VITE_APP_NAME}. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
