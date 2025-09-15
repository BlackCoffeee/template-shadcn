/**
 * Layout Vertical - Layout dengan sidebar ShadCN
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-19
 */
import { ReactNode, useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from './footer'
import { Header } from './header'
import { NavigationMenuVertical } from '@/components/navigation/vertical/navigation-menu-vertical'

interface VerticalLayoutProps {
    children?: ReactNode
}

export function VerticalLayout({ children }: VerticalLayoutProps) {
    // Initialize state with localStorage value or default to expanded (false)
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(() => {
        const savedSidebarState = localStorage.getItem('sidebar-collapsed')
        return savedSidebarState !== null ? JSON.parse(savedSidebarState) : false
    })

    // Save sidebar state to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('sidebar-collapsed', JSON.stringify(isSidebarCollapsed))
    }, [isSidebarCollapsed])

    const toggleSidebarCollapse = () => {
        setIsSidebarCollapsed((prev: boolean) => !prev)
    }

    return (
        <div className='flex flex-col min-h-screen bg-background'>
            {/* Header - Fixed position di atas */}
            <div className='fixed top-0 right-0 left-0 z-50'>
                <Header className='border-b border-foreground/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60' />
            </div>

            {/* Main content area dengan sidebar */}
            <div className='flex flex-1 pt-14'>
                {/* Sidebar */}
                <div className={`hidden md:block fixed left-0 top-14 h-[calc(100vh-3.5rem)] border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-foreground/10 z-40 transition-all duration-300 ${isSidebarCollapsed ? 'w-16' : 'w-64'}`}>
                    <NavigationMenuVertical 
                        isCollapsed={isSidebarCollapsed}
                        onToggleCollapse={toggleSidebarCollapse}
                    />
                </div>
                
                {/* Main content area dengan footer */}
                <div className={`flex-1 flex flex-col min-h-[calc(100vh-3.5rem)] md:transition-all md:duration-300 ${isSidebarCollapsed ? 'md:ml-16' : 'md:ml-64'}`}>
                    {/* Main content */}
                    <main className='flex-1 px-4 bg-page'>
                        <div className='container flex-1 py-6 mx-auto space-y-4'>
                            {children || <Outlet />}
                        </div>
                    </main>
                    
                    {/* Footer - sama lebar dengan content area */}
                    <Footer />
                </div>
            </div>
        </div>
    )
}
