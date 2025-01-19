/**
 * Komponen form registrasi untuk pendaftaran pengguna baru
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-19
 */

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'

export const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    return (
        <form className='space-y-4'>
            <div className='grid gap-4 md:grid-cols-2'>
                <div className='space-y-2'>
                    <Label htmlFor='firstName'>Nama Depan</Label>
                    <Input id='firstName' placeholder='Muhammad' />
                </div>
                <div className='space-y-2'>
                    <Label htmlFor='lastName'>Nama Belakang</Label>
                    <Input id='lastName' placeholder='Arif' />
                </div>
            </div>

            <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input id='email' type='email' placeholder='nama@example.com' />
            </div>

            <div className='space-y-2'>
                <Label htmlFor='username'>Username</Label>
                <Input id='username' type='text' placeholder='blackcoffeee' />
            </div>

            <div className='space-y-2'>
                <Label htmlFor='password'>Password</Label>
                <div className='relative'>
                    <Input
                        id='password'
                        type={showPassword ? 'text' : 'password'}
                        placeholder='••••••'
                    />
                    <Button
                        type='button'
                        variant='ghost'
                        size='icon'
                        className='absolute right-2 top-1/2 -translate-y-1/2'
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

            <div className='space-y-2'>
                <Label htmlFor='confirmPassword'>Konfirmasi Password</Label>
                <div className='relative'>
                    <Input
                        id='confirmPassword'
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder='••••••'
                    />
                    <Button
                        type='button'
                        variant='ghost'
                        size='icon'
                        className='absolute right-2 top-1/2 -translate-y-1/2'
                        onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                        }
                    >
                        {showConfirmPassword ? (
                            <EyeOffIcon className='h-4 w-4' />
                        ) : (
                            <EyeIcon className='h-4 w-4' />
                        )}
                    </Button>
                </div>
            </div>

            <div className='flex items-center space-x-2'>
                <Checkbox id='terms' />
                <Label htmlFor='terms' className='text-sm'>
                    Saya setuju dengan{' '}
                    <Button variant='link' className='p-0'>
                        syarat dan ketentuan
                    </Button>
                </Label>
            </div>

            <Button type='submit' className='w-full'>
                Daftar
            </Button>
        </form>
    )
}
