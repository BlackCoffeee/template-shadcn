/**
 * Halaman Register untuk pendaftaran pengguna baru
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-19
 */

import { RegisterForm } from '@/components/auth/RegisterForm'
import { SocialLogin } from '@/components/auth/SocialLogin'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const Register: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className='container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-1 lg:px-0'>
            <div className='w-full px-4 py-8 mx-auto overflow-y-auto sm:w-[450px]'>
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
                        Buat akun baru
                    </h1>
                    <p className='text-sm text-muted-foreground'>
                        Masukkan data Anda untuk membuat akun
                    </p>
                </div>

                <div className='mt-6'>
                    <RegisterForm />
                </div>

                <div className='mt-6'>
                    <SocialLogin />
                </div>

                <p className='mt-6 text-center text-sm text-muted-foreground'>
                    Sudah punya akun?{' '}
                    <Button
                        variant='link'
                        className='p-0'
                        onClick={() => navigate('/pages/auth/login')}
                    >
                        Masuk
                    </Button>
                </p>
            </div>
        </div>
    )
}

export default Register
