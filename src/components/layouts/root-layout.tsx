/**
 * Layout utama aplikasi
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-18
 */
import { Outlet } from 'react-router-dom'
import { Footer } from './footer'
import { useNavigationStore } from '@/store/navigation-store'
import { cn } from '@/lib/utils'
import { Header } from './header'
import { NavigationMenu } from '@/components/navigation/navigation-menu'

export function RootLayout() {
    const { orientation, collapsed } = useNavigationStore()

    return (
        <div className='min-h-screen bg-background flex flex-col'>
            <Header />
            <div className='container flex-grow flex gap-6 py-6'>
                {orientation === 'vertical' && (
                    <aside
                        className={cn(
                            'hidden md:block transition-all duration-300',
                            collapsed ? 'w-16' : 'w-64'
                        )}
                    >
                        <NavigationMenu />
                    </aside>
                )}
                <main className='flex-grow'>
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    )
}
