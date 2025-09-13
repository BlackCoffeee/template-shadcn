# ⚡ Quick Start Guide

Panduan cepat untuk memulai dengan Template Shadcn v2.0.0.

## 🚀 5 Menit Setup

### 1. Clone & Install
```bash
git clone https://github.com/BlackCoffeee/template-shadcn.git my-app
cd my-app
npm install
```

### 2. Setup Environment
```bash
cp .env.example .env.local
```

### 3. Start Development
```bash
npm run dev
```

**🎉 Selesai! Aplikasi berjalan di http://localhost:5173**

## 📱 Fitur yang Bisa Dicoba

### 🏠 Dashboard
- Navigasi ke `/dashboard` untuk melihat dashboard lengkap
- Charts, statistics, dan recent activities

### 🔐 Authentication
- Navigasi ke `/login` untuk halaman login
- `/register` untuk registrasi
- `/forgot-password` untuk reset password

### 🎨 UI Components
- Navigasi ke `/ui-component/data-tables` untuk melihat data table
- Coba semua komponen UI yang tersedia

### 🌙 Theme Toggle
- Klik tombol theme toggle di header
- Switch antara light dan dark mode

### 📱 Responsive Design
- Resize browser atau buka di mobile
- Navigation akan otomatis collapse

## 🛠️ Customization Cepat

### Ganti Nama Aplikasi
```bash
# Edit package.json
"name": "your-app-name"

# Edit .env.local
VITE_APP_NAME="Your App Name"
```

### Ganti Logo
```bash
# Ganti file di public/logo.svg
# Atau edit src/components/brand/logo.tsx
```

### Tambah Halaman Baru
```bash
# 1. Buat file di src/pages/your-page/YourPage.tsx
# 2. Tambah route di src/router/AppRouter.tsx
# 3. Tambah menu item di src/components/navigation/menu-items.ts
```

## 🎯 Build & Deploy

### Development Build
```bash
npm run build:dev
```

### Staging Build
```bash
npm run build:staging
```

### Production Build
```bash
npm run build
```

## 📚 Next Steps

1. **Baca Dokumentasi Lengkap:** [docs/README.md](./docs/README.md)
2. **Panduan Instalasi:** [INSTALLATION.md](./INSTALLATION.md)
3. **Components Guide:** [docs/components/README.md](./docs/components/README.md)
4. **Environment Config:** [docs/environment/configuration.md](./docs/environment/configuration.md)

## 🆘 Quick Help

**Port sudah digunakan?**
```bash
# Edit vite.config.ts, ganti port
server: { port: 5174 }
```

**Dependencies error?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Environment variables tidak work?**
```bash
# Pastikan file .env.local sudah ada
cp .env.example .env.local
```

---

**🎉 Selamat! Template siap digunakan!**

**⭐ Star repository ini jika membantu: https://github.com/BlackCoffeee/template-shadcn**
