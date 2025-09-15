/**
 * Root Layout - Layout utama aplikasi
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-19
 */
import { Outlet } from 'react-router-dom'
import { useNavigationStore } from '@/store/navigation-store'
import { HorizontalLayout } from './horizontal-layout'
import { VerticalLayout } from './vertical-layout'

export function RootLayout() {
    const { orientation } = useNavigationStore()

    // Render layout berdasarkan state
    if (orientation === 'horizontal') {
        return (
            <HorizontalLayout>
                <Outlet />
            </HorizontalLayout>
        )
    }

    return (
        <VerticalLayout>
            <Outlet />
        </VerticalLayout>
    )
}
