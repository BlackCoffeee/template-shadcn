/**
 * Halaman Profile pengguna
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2024-03-20
 */

import { ProfileHeader } from '@/components/profile/profile-header'
import { ProfileTabs } from '@/components/profile/profile-tabs'

const Profile: React.FC = () => {
    return (
        <div className='space-y-6'>
            <div className='relative h-[300px] rounded-t-xl bg-gradient-to-r from-cyan-400 via-teal-200 to-rose-300'>
                <ProfileHeader />
            </div>
            <div className='pt-20'>
                <ProfileTabs />
            </div>
        </div>
    )
}

export default Profile
