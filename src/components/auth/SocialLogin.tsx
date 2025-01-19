/**
 * Komponen untuk login menggunakan social media
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-19
 */

import { Button } from '@/components/ui/button'

export const SocialLogin = () => {
    return (
        <div className='space-y-4'>
            <p className='text-center text-sm text-muted-foreground'>
                atau lanjutkan dengan
            </p>
            <div className='grid grid-cols-2 gap-4'>
                <Button variant='outline'>
                    <img
                        src='/google.svg'
                        alt='Google'
                        className='mr-2 h-4 w-4'
                    />
                    Google
                </Button>
                <Button variant='outline'>
                    <img
                        src='/github.svg'
                        alt='Github'
                        className='mr-2 h-4 w-4'
                    />
                    Github
                </Button>
            </div>
        </div>
    )
}
