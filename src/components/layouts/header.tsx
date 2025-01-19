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

export function Header() {
    const { orientation } = useNavigationStore()

    return (
        <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
            <div className='container flex h-12 sm:h-14 items-center px-2 sm:px-4 md:px-8'>
                <div className='mr-2 sm:mr-4 flex items-center gap-2'>
                    <NavigationMobileTrigger>
                        <NavigationMobileMenu />
                    </NavigationMobileTrigger>
                    <Logo />
                    <NavigationCollapseButton />
                </div>
                {orientation === 'horizontal' && (
                    <div className='hidden md:block flex-1'>
                        <NavigationMenu />
                    </div>
                )}
                <div className='flex flex-1 items-center justify-end space-x-2 sm:space-x-4'>
                    <nav className='flex items-center gap-2 sm:gap-4'>
                        <NavigationSettings />
                        <ThemeToggle />
                        <UserProfile />
                    </nav>
                </div>
            </div>
        </header>
    )
}
