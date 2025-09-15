/**
 * Layout Horizontal - Menu navigasi di header
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-19
 */
import { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from './footer'
import { Header } from './header'

interface HorizontalLayoutProps {
    children?: ReactNode
}

export function HorizontalLayout({ children }: HorizontalLayoutProps) {
    return (
        <div className='flex flex-col min-h-screen bg-background'>
            {/* Header dengan menu horizontal */}
            <div className='fixed top-0 right-0 left-0 z-50'>
                <Header className='border-b border-foreground/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60' />
            </div>

            {/* Main content area */}
            <div className='flex flex-1 pt-14'>
                <main className='flex-1 flex flex-col min-h-[calc(100vh-3.5rem)] bg-page px-4'>
                    <div className='container flex-1 py-6 mx-auto space-y-4'>
                        {children || <Outlet />}
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    )
}
