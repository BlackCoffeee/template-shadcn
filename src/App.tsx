/**
 * Komponen utama aplikasi
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2025-01-18
 */

import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './components/providers/theme-provider'
import { TooltipProvider } from './components/providers/tooltip-provider'
import { AppRouter } from './router/AppRouter'

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <TooltipProvider>
                    <AppRouter />
                </TooltipProvider>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App
