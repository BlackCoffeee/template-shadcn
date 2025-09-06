/**
 * Komponen Router utama aplikasi
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-18
 */

import { Routes, Route } from 'react-router-dom'
import { RootLayout } from '@/components/layouts/root-layout'
import {
    Dashboard,
    Login,
    Register,
    ForgotPassword,
    Profile,
    DataTablesPage,
    Page404,
    Page500,
} from '@/pages'
import { V2Demo } from '@/pages/v2/V2Demo'

export function AppRouter() {
    return (
        <Routes>
            <Route element={<RootLayout />}>
                <Route path='/' element={<Dashboard />} />
                <Route path='/account/profile' element={<Profile />} />
                <Route path='/ui/data-tables' element={<DataTablesPage />} />
                <Route path='/v2/demo' element={<V2Demo />} />
            </Route>
            <Route path='/pages/auth/login' element={<Login />} />
            <Route
                path='/pages/auth/forgot-password'
                element={<ForgotPassword />}
            />
            <Route path='/pages/auth/register' element={<Register />} />
            <Route path='/pages/error/404' element={<Page404 />} />
            <Route path='/pages/error/500' element={<Page500 />} />
        </Routes>
    )
}
