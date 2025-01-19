/**
 * Komponen untuk memilih warna tema
 * @author Muhammad Arif <https://github.com/BlackCoffeee>
 * @createAt 2024-01-19
 */

import { Label } from '@/components/ui/label'
import { useThemeStore } from '@/store/theme-store'

const predefinedColors = [
    { name: 'Merah', value: 'hsl(346.8, 77.2%, 49.8%)' },
    { name: 'Biru', value: 'hsl(221.2, 83.2%, 53.3%)' },
    { name: 'Hijau', value: 'hsl(142.1, 76.2%, 36.3%)' },
    { name: 'Ungu', value: 'hsl(262.1, 83.3%, 57.8%)' },
    { name: 'Oranye', value: 'hsl(24.6, 95%, 53.1%)' },
]

export function ColorPicker() {
    const { primaryColor, setPrimaryColor } = useThemeStore()

    return (
        <div className='space-y-4'>
            <div className='space-y-2'>
                <Label>Warna Utama</Label>
                <div className='grid grid-cols-5 gap-2'>
                    {predefinedColors.map(color => (
                        <button
                            key={color.value}
                            className={`w-full aspect-square rounded-md border-2 transition-all ${
                                primaryColor === color.value
                                    ? 'border-primary scale-110'
                                    : 'border-transparent hover:scale-105'
                            }`}
                            style={{ backgroundColor: color.value }}
                            onClick={() => setPrimaryColor(color.value)}
                            title={color.name}
                        />
                    ))}
                </div>
            </div>

            <div className='space-y-2'>
                <Label htmlFor='custom-color'>Warna Kustom</Label>
                <input
                    id='custom-color'
                    type='color'
                    value={primaryColor}
                    onChange={e => {
                        const hex = e.target.value
                        const r = parseInt(hex.slice(1, 3), 16) / 255
                        const g = parseInt(hex.slice(3, 5), 16) / 255
                        const b = parseInt(hex.slice(5, 7), 16) / 255

                        const max = Math.max(r, g, b)
                        const min = Math.min(r, g, b)
                        let h,
                            s,
                            l = (max + min) / 2

                        if (max === min) {
                            h = s = 0
                        } else {
                            const d = max - min
                            s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
                            switch (max) {
                                case r:
                                    h = (g - b) / d + (g < b ? 6 : 0)
                                    break
                                case g:
                                    h = (b - r) / d + 2
                                    break
                                case b:
                                    h = (r - g) / d + 4
                                    break
                                default:
                                    h = 0
                            }
                            h /= 6
                        }

                        setPrimaryColor(
                            `hsl(${Math.round(h * 360)}, ${Math.round(
                                s * 100
                            )}%, ${Math.round(l * 100)}%)`
                        )
                    }}
                    className='w-full h-10 rounded-md cursor-pointer'
                />
            </div>
        </div>
    )
}
