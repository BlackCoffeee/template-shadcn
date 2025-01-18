/**
 * Komponen Logo untuk branding aplikasi
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-18
 */

export function Logo() {
    return (
        <a className='mr-6 flex items-center space-x-2' href='/'>
            <span className='font-bold text-3xl'>
                {import.meta.env.VITE_APP_NAME}
            </span>
        </a>
    )
}
