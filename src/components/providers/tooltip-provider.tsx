/**
 * Provider untuk Tooltip
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-18
 */

import { TooltipProvider as TooltipProviderUI } from '@/components/ui/tooltip'

interface TooltipProviderProps {
    children: React.ReactNode
}

export function TooltipProvider({ children }: TooltipProviderProps) {
    return <TooltipProviderUI delayDuration={0}>{children}</TooltipProviderUI>
}
