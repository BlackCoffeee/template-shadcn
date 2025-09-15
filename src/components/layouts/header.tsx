/**
 * Komponen Header untuk layout utama
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-18
 */
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { NavigationMenu } from '@/components/navigation/navigation-menu'
import { NavigationSettings } from '@/components/navigation/navigation-settings'
import { useNavigationStore } from '@/store/navigation-store'
import { UserProfile } from '@/components/layouts/user/user-profile'
import { NavigationMobileTrigger } from '@/components/navigation/mobile/navigation-mobile-trigger'
import { NavigationMobileMenu } from '@/components/navigation/mobile/navigation-mobile-menu'
import { Logo } from '@/components/brand/logo'
import { cn } from '@/lib/utils'

interface HeaderProps {
    className?: string
}

export function Header({ className }: HeaderProps) {
    const { orientation } = useNavigationStore()

    return (
        <header className={cn('w-full', className)}>
            <div className='flex items-center px-4 w-full h-14'>
                <div className='flex gap-2 items-center'>
                    <NavigationMobileTrigger>
                        <NavigationMobileMenu />
                    </NavigationMobileTrigger>
                    <Logo className='ml-2' />
                </div>
                {orientation === 'horizontal' && (
                    <div className='hidden flex-1 md:block'>
                        <NavigationMenu />
                    </div>
                )}
                <div className='flex items-center ml-auto'>
                    <NavigationSettings />
                    <ThemeToggle />
                    <UserProfile />
                </div>
            </div>
        </header>
    )
}
