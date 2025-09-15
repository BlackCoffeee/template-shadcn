/**
 * Komponen UserProfileSection untuk sidebar vertical
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-18
 */

import { User, Settings, LogOut, ChevronsUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { 
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuSeparator, 
    DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu'
import { 
    Tooltip, 
    TooltipContent, 
    TooltipTrigger 
} from '@/components/ui/tooltip'

interface UserProfileSectionProps {
    isCollapsed: boolean
}

export function UserProfileSection({ isCollapsed }: UserProfileSectionProps) {
    return (
        <div className='flex-shrink-0 p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
            {isCollapsed ? (
                // Collapsed state dengan tooltip
                <Tooltip>
                    <TooltipTrigger asChild>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button 
                                    variant="ghost" 
                                    className="flex justify-center items-center p-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700"
                                >
                                    <User className='w-4 h-4 text-white' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent side="right" className="ml-2 w-56">
                                <DropdownMenuItem>
                                    <User className="mr-2 w-4 h-4" />
                                    <span>Profile</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Settings className="mr-2 w-4 h-4" />
                                    <span>Settings</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <LogOut className="mr-2 w-4 h-4" />
                                    <span>Log out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="ml-2">
                        <p className="text-white">User Profile</p>
                    </TooltipContent>
                </Tooltip>
            ) : (
                // Expanded state dengan dropdown
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button 
                            variant="ghost" 
                            className="flex gap-3 justify-start items-center p-2 w-full h-auto hover:bg-accent"
                        >
                            <div className='flex flex-shrink-0 justify-center items-center w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full'>
                                <User className='w-4 h-4 text-white' />
                            </div>
                            <div className='flex overflow-hidden flex-col flex-1 items-start transition-all duration-300 ease-in-out'>
                                <span className='text-sm font-semibold whitespace-nowrap text-foreground'>shadcn</span>
                                <span className='text-xs whitespace-nowrap text-foreground/70'>m@example.com</span>
                            </div>
                            <div className='flex-shrink-0'>
                                <ChevronsUpDown className='w-4 h-4 text-foreground/70' />
                            </div>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side="top" className="mb-2 w-56">
                        <DropdownMenuItem>
                            <User className="mr-2 w-4 h-4" />
                            <span>Profile</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Settings className="mr-2 w-4 h-4" />
                            <span>Settings</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <LogOut className="mr-2 w-4 h-4" />
                            <span>Log out</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )}
        </div>
    )
}
