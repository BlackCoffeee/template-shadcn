import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const Page404: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className='container flex h-screen w-screen flex-col items-center justify-center'>
            <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
                <div className='flex flex-col space-y-2 text-center'>
                    <img
                        src='/logo.svg'
                        alt='Logo'
                        className='mx-auto h-12 w-12'
                    />
                    <h1 className='text-4xl font-semibold  tracking-tight mb-3'>
                        {import.meta.env.VITE_APP_NAME}
                    </h1>

                    <object
                        type='image/svg+xml'
                        data='/error404.svg'
                        className='w-full h-full'
                    >
                        Your browser does not support SVG
                    </object>
                    <h1 className='text-2xl font-semibold'>
                        We couldn’t connect the dots
                    </h1>
                    <p className='text-sm text-muted-foreground'>
                        This page was not found. You may have mistyped the
                        address or the page may have moved.
                    </p>
                </div>
                <div className='mt-6 text-center'>
                    <Button
                        variant='link'
                        className='p-0'
                        onClick={() => navigate(-1)}
                    >
                        Kembali ke halaman utama
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Page404
