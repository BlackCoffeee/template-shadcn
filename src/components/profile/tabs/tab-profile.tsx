/**
 * Komponen informasi detail profil pengguna
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-22
 */

import { ProfileAbout } from '../profile-about'
import { ProfileTimeline } from '../profile-timeline'

const TabProfile = () => {
    return (
        <div className='grid gap-4 md:grid-cols-3 sm:grid-cols-1'>
            <div>
                <ProfileAbout />
            </div>
            <div className='md:col-span-2'>
                <ProfileTimeline />
            </div>
        </div>
    )
}

export default TabProfile
