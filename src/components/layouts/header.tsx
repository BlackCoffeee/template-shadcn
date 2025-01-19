/**
 * Komponen Header untuk layout utama
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-18
 */
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { NavigationMenu } from '@/components/navigation/navigation-menu'
import { NavigationSettings } from '@/components/navigation/navigation-settings'
import { useNavigationStore } from '@/store/navigation-store'
import { Logo } from '@/components/brand/logo'
import { UserProfile } from '@/components/layouts/user/user-profile'
import { NavigationCollapseButton } from '@/components/navigation/collapse/navigation-collapse-button'
import { NavigationMobileTrigger } from '@/components/navigation/mobile/navigation-mobile-trigger'
import { NavigationMobileMenu } from '@/components/navigation/mobile/navigation-mobile-menu'
import { cn } from '@/lib/utils'

interface HeaderProps {
    className?: string
}

export function Header({ className }: HeaderProps) {
    const { orientation } = useNavigationStore()

    return (
        <header className={cn('w-full', className)}>
            <div className='container flex h-14 items-center px-4'>
                <div className='mr-4 flex items-center gap-2'>
                    <NavigationMobileTrigger>
                        <NavigationMobileMenu />
                    </NavigationMobileTrigger>
                    <Logo className='md:hidden' />
                    <NavigationCollapseButton />
                </div>
                {orientation === 'horizontal' && (
                    <div className='hidden md:block flex-1'>
                        <NavigationMenu />
                    </div>
                )}
                <div className='flex flex-1 items-center justify-end space-x-4'>
                    <nav className='flex items-center gap-4'>
                        <NavigationSettings />
                        <ThemeToggle />
                        <UserProfile />
                    </nav>
                </div>
            </div>
        </header>
    )
}
