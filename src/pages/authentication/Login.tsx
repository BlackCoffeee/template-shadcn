/**
 * Halaman Login untuk autentikasi pengguna
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-19
 */

import { LoginForm } from '@/components/auth/LoginForm'
import { SocialLogin } from '@/components/auth/SocialLogin'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className='container flex h-screen w-screen flex-col items-center justify-center'>
            <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
                <div className='flex flex-col space-y-2 text-center'>
                    <img
                        src='/logo.svg'
                        alt='Logo'
                        className='mx-auto h-12 w-12'
                    />
                    <h1 className='text-4xl font-semibold tracking-tight mb-3'>
                        {import.meta.env.VITE_APP_NAME}
                    </h1>
                    <h1 className='text-2xl font-semibold tracking-tight'>
                        Selamat datang kembali!
                    </h1>
                    <p className='text-sm text-muted-foreground'>
                        Silakan masukkan kredensial Anda untuk masuk
                    </p>
                </div>

                <LoginForm />

                <SocialLogin />

                <p className='text-center text-sm text-muted-foreground'>
                    Belum punya akun?{' '}
                    <Button
                        variant='link'
                        className='p-0'
                        onClick={() => navigate('/pages/auth/register')}
                    >
                        Daftar
                    </Button>
                </p>
            </div>
        </div>
    )
}

export default Login
