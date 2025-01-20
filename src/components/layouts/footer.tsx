/**
 * Komponen Footer untuk layout utama
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-18
 */

export function Footer() {
    return (
        <footer className=' py-4 mt-auto'>
            <div className='container flex items-center justify-start'>
                <p className='text-sm text-foreground'>
                    © {new Date().getFullYear()}{' '}
                    {import.meta.env.VITE_APP_NAME}. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
