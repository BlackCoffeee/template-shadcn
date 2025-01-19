/**
 * Komponen Router utama aplikasi
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-18
 */

import { Routes, Route } from 'react-router-dom'
import { RootLayout } from '@/components/layouts/root-layout'
import { Dashboard, Login, Register } from '@/pages'

export function AppRouter() {
    return (
        <Routes>
            <Route element={<RootLayout />}>
                <Route path='/' element={<Dashboard />} />
                <Route path='/ecommerce' element={<div>Ecommerce Page</div>} />
                <Route path='/project' element={<div>Project Page</div>} />
                <Route path='/marketing' element={<div>Marketing Page</div>} />

                {/* Tambahkan route lainnya sesuai kebutuhan */}
            </Route>
            <Route path='/pages/auth/login' element={<Login />} />
            <Route
                path='/pages/auth/forgot-password'
                element={<div>Forgot Password Page</div>}
            />
            <Route path='/pages/auth/register' element={<Register />} />
        </Routes>
    )
}
