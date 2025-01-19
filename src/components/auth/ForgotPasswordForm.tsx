/**
 * Komponen form lupa password untuk reset password pengguna
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-19
 */

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const ForgotPasswordForm = () => {
    return (
        <form className='space-y-4'>
            <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                    id='email'
                    type='email'
                    placeholder='nama@example.com'
                    required
                />
                <p className='text-sm text-muted-foreground'>
                    Masukkan email yang terdaftar. Kami akan mengirimkan link
                    untuk mengatur ulang password Anda.
                </p>
            </div>

            <Button type='submit' className='w-full'>
                Kirim Link Reset Password
            </Button>
        </form>
    )
}
