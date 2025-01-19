/**
 * Komponen utama aplikasi
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-18
 */

import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './components/providers/theme-provider'
import { TooltipProvider } from './components/providers/tooltip-provider'
import { ThemeColorProvider } from './components/providers/theme-color-provider'
import { AppRouter } from './router/AppRouter'

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <ThemeColorProvider>
                    <TooltipProvider>
                        <AppRouter />
                    </TooltipProvider>
                </ThemeColorProvider>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App
