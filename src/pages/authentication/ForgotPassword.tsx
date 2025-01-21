/**
 * Halaman Forgot Password untuk reset password pengguna
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-19
 */

import { ForgotPasswordForm } from '@/components/auth/ForgotPasswordForm'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const ForgotPassword: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className='container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-1 lg:px-0'>
            <div className='w-full px-4 py-8 mx-auto sm:w-[400px]'>
                <Button
                    variant='ghost'
                    className='absolute left-4 top-4 md:left-8 md:top-8'
                    onClick={() => navigate('/pages/auth/login')}
                >
                    <ArrowLeft className='mr-2 h-4 w-4' />
                    Kembali ke login
                </Button>

                <div className='flex flex-col space-y-2 text-center'>
                    <img
                        src='/logo.svg'
                        alt='Logo'
                        className='mx-auto h-12 w-12'
                    />
                    <h1 className='text-4xl font-semibold tracking-tight'>
                        {import.meta.env.VITE_APP_NAME}
                    </h1>
                    <h1 className='text-2xl font-semibold tracking-tight'>
                        Lupa Password?
                    </h1>
                    <p className='text-sm text-muted-foreground'>
                        Jangan khawatir! Kami akan membantu Anda memulihkan akun
                    </p>
                </div>

                <div className='mt-6'>
                    <ForgotPasswordForm />
                </div>

                <div className='mt-6 text-center'>
                    <p className='text-sm text-muted-foreground'>
                        Ingat password Anda?{' '}
                        <Button
                            variant='link'
                            className='p-0'
                            onClick={() => navigate('/pages/auth/login')}
                        >
                            Kembali ke login
                        </Button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
