/**
 * Komponen form login untuk autentikasi pengguna
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-19
 */

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const auth = {
        username: 'BlackCoffeee',
        password: '123456',
    }

    const handleLogin = () => {
        navigate('/')
    }

    const handleForgotPassword = () => {
        navigate('/pages/auth/forgot-password')
    }

    return (
        <form className='space-y-4'>
            <div className='space-y-2'>
                <Label htmlFor='username'>Username</Label>
                <Input
                    id='username'
                    type='text'
                    placeholder='username'
                    value={auth.username}
                />
            </div>

            <div className='space-y-2'>
                <Label htmlFor='password'>Password</Label>
                <div className='relative'>
                    <Input
                        id='password'
                        type={showPassword ? 'text' : 'password'}
                        placeholder='••••••'
                        value={auth.password}
                    />
                    <Button
                        type='button'
                        variant='ghost'
                        size='icon'
                        className='absolute right-2 top-1/2 hover:bg-transparent -translate-y-1/2'
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? (
                            <EyeOffIcon className='h-4 w-4' />
                        ) : (
                            <EyeIcon className='h-4 w-4' />
                        )}
                    </Button>
                </div>
            </div>

            <div className='text-right'>
                <Button
                    variant='link'
                    className='p-0'
                    onClick={handleForgotPassword}
                >
                    Lupa password?
                </Button>
            </div>

            <Button type='submit' className='w-full' onClick={handleLogin}>
                Masuk
            </Button>
        </form>
    )
}
