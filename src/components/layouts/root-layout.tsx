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
        <div className='min-h-screen bg-background'>
            <div
                className={cn(
                    'fixed top-0 right-0 z-50',
                    'left-0',
                    orientation === 'vertical' &&
                        'md:left-[var(--sidebar-width)]',
                    collapsed
                        ? '[--sidebar-width:4rem]'
                        : '[--sidebar-width:16rem]'
                )}
            >
                <Header className='border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60' />
            </div>

            <div className='flex pt-14'>
                {orientation === 'vertical' && (
                    <aside
                        className={cn(
                            'hidden md:block fixed left-0 top-0 h-screen transition-all duration-300 bg-background border-r',
                            collapsed ? 'w-16' : 'w-64'
                        )}
                    >
                        <div className='h-full'>
                            <NavigationMenu />
                        </div>
                    </aside>
                )}

                <main
                    className={cn(
                        'flex-1 min-h-[calc(100vh-3.5rem)] bg-muted',
                        orientation === 'vertical' &&
                            (collapsed ? 'md:ml-16' : 'md:ml-64')
                    )}
                >
                    <div className='container py-6 space-y-4'>
                        <Outlet />
                    </div>
                    <Footer />
                </main>
            </div>
        </div>
    )
}
