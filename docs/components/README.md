# 🧩 Components Documentation

Dokumentasi lengkap untuk semua komponen yang tersedia dalam Template Shadcn.

## 📋 Daftar Komponen

### 🎨 UI Components

- [Button](./ui-components.md#button) - Komponen tombol dengan berbagai variant
- [Input](./ui-components.md#input) - Input field dengan validasi
- [Card](./ui-components.md#card) - Container untuk konten
- [Dialog](./ui-components.md#dialog) - Modal dialog
- [Table](./ui-components.md#table) - Tabel data dengan sorting dan pagination

### 🔐 Authentication Components

- [LoginForm](./auth-components.md#login-form) - Form login
- [RegisterForm](./auth-components.md#register-form) - Form registrasi
- [ForgotPasswordForm](./auth-components.md#forgot-password-form) - Form reset password
- [SocialLogin](./auth-components.md#social-login) - Login dengan social media

### 📊 Dashboard Components

- [StatCard](./dashboard-components.md#stat-card) - Kartu statistik
- [OverviewChart](./dashboard-components.md#overview-chart) - Chart overview
- [RecentActivities](./dashboard-components.md#recent-activities) - Aktivitas terbaru

### 🧭 Navigation Components

- [NavigationMenu](./navigation-components.md#navigation-menu) - Menu navigasi utama
- [MobileMenu](./navigation-components.md#mobile-menu) - Menu untuk mobile
- [Breadcrumb](./navigation-components.md#breadcrumb) - Breadcrumb navigation

### 🎭 Layout Components

- [Header](./layout-components.md#header) - Header aplikasi
- [Footer](./layout-components.md#footer) - Footer aplikasi
- [Sidebar](./layout-components.md#sidebar) - Sidebar navigasi

### 🔧 Utility Components

- [ThemeToggle](./utility-components.md#theme-toggle) - Toggle tema dark/light
- [LoadingSpinner](./utility-components.md#loading-spinner) - Spinner loading
- [ErrorBoundary](./utility-components.md#error-boundary) - Error boundary

## 🚀 Quick Start

### Import Komponen

```tsx
// Import komponen UI
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'

// Import komponen auth
import { LoginForm } from '@/components/auth/LoginForm'
import { RegisterForm } from '@/components/auth/RegisterForm'

// Import komponen dashboard
import { StatCard } from '@/components/dashboard/StatCard'
import { OverviewChart } from '@/components/dashboard/OverviewChart'
```

### Penggunaan Dasar

```tsx
import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MyComponent() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>My Card</CardTitle>
            </CardHeader>
            <CardContent>
                <Button>Click me</Button>
            </CardContent>
        </Card>
    )
}
```

## 🎨 Styling

Semua komponen menggunakan Tailwind CSS dan dapat dikustomisasi dengan mudah:

```tsx
// Custom styling dengan className
<Button className="bg-blue-500 hover:bg-blue-600">
  Custom Button
</Button>

// Menggunakan variant props
<Button variant="destructive" size="lg">
  Delete
</Button>
```

## 🔧 Customization

### Theme Customization

Komponen mendukung tema yang dapat dikustomisasi melalui CSS variables:

```css
:root {
    --primary: 222.2 84% 4.9%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96%;
    --secondary-foreground: 222.2 84% 4.9%;
}
```

### Component Props

Setiap komponen memiliki props yang dapat dikustomisasi:

```tsx
interface ButtonProps {
    variant?:
        | 'default'
        | 'destructive'
        | 'outline'
        | 'secondary'
        | 'ghost'
        | 'link'
    size?: 'default' | 'sm' | 'lg' | 'icon'
    className?: string
    children: React.ReactNode
    onClick?: () => void
}
```

## 📱 Responsive Design

Semua komponen sudah responsive dan mobile-friendly:

```tsx
// Responsive classes
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
    <Card>Content 1</Card>
    <Card>Content 2</Card>
    <Card>Content 3</Card>
</div>
```

## 🧪 Testing

Komponen dapat ditest menggunakan testing library:

```tsx
import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/button'

test('renders button with text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
})
```

## 📚 Dokumentasi Detail

- [UI Components](./ui-components.md) - Komponen UI dasar
- [Auth Components](./auth-components.md) - Komponen autentikasi
- [Dashboard Components](./dashboard-components.md) - Komponen dashboard
- [Navigation Components](./navigation-components.md) - Komponen navigasi
- [Layout Components](./layout-components.md) - Komponen layout
- [Utility Components](./utility-components.md) - Komponen utility

## 🤝 Contributing

Untuk menambah komponen baru:

1. Buat file komponen di folder yang sesuai
2. Export komponen dari index file
3. Tambahkan dokumentasi
4. Buat test untuk komponen
5. Update dokumentasi ini

---

**Need Help?** Lihat [Getting Started](../getting-started.md) atau [Development Guide](../development/).
