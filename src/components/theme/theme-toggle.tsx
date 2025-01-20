/**
 * Komponen untuk toggle tema (light/dark mode)
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-18
 */
import { Monitor, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTheme } from '@/components/providers/theme-provider'

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='ghost' size='icon'>
                    <Sun
                        className={`h-[1.2rem] w-[1.2rem] transition-all ${
                            theme === 'light'
                                ? 'rotate-0 scale-100'
                                : '-rotate-90 scale-0'
                        }`}
                    />
                    <Moon
                        className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
                            theme === 'dark'
                                ? 'rotate-0 scale-100'
                                : 'rotate-90 scale-0'
                        }`}
                    />
                    <Monitor
                        className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
                            theme === 'system'
                                ? 'rotate-0 scale-100'
                                : 'rotate-90 scale-0'
                        }`}
                    />
                    <span className='sr-only'>Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                <DropdownMenuItem onClick={() => setTheme('light')}>
                    <Sun className='h-4 w-4' />
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                    <Moon className='h-4 w-4' />
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>
                    <Monitor className='h-4 w-4' />
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
