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

export function Header() {
    const { orientation } = useNavigationStore()

    return (
        <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
            <div className='container flex h-14 items-center'>
                <div className='mr-4 flex'>
                    <Logo />
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
