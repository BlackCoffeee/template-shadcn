/**
 * Komponen Footer untuk layout utama
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-18
 */

export function Footer() {
    return (
        <footer className='border-t py-6 bg-background'>
            <div className='container flex items-center justify-center'>
                <p className='text-sm text-muted-foreground'>
                    © {new Date().getFullYear()}{' '}
                    {import.meta.env.VITE_APP_NAME}. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
