# 📥 Panduan Instalasi Template Shadcn v2.0.0

Panduan lengkap untuk download, install, dan setup template ini.

## 🎯 Prerequisites

Pastikan sistem Anda sudah memiliki:

- **Node.js** (versi 18.0 atau lebih baru)
- **npm** (versi 9.0 atau lebih baru)
- **Git** (untuk clone repository)

### Cek Versi
```bash
node --version    # Harus 18.0+
npm --version     # Harus 9.0+
git --version     # Versi terbaru
```

## 📥 Cara Download Template

### 🚀 Metode 1: Clone dari GitHub (Recommended)

**Keuntungan:** Mendapatkan versi terbaru, bisa update dengan mudah

```bash
# Clone repository
git clone https://github.com/BlackCoffeee/template-shadcn.git my-app-name
cd my-app-name

# Install dependencies
npm install
```

### 📦 Metode 2: Download ZIP

**Keuntungan:** Tidak perlu Git, download langsung

1. **Kunjungi Repository:**
   - Buka: https://github.com/BlackCoffeee/template-shadcn

2. **Download ZIP:**
   - Klik tombol **"Code"** (hijau)
   - Pilih **"Download ZIP"**
   - Extract ke folder yang diinginkan

3. **Setup Project:**
```bash
# Masuk ke folder yang sudah di-extract
cd template-shadcn-main

# Rename folder jika perlu
mv template-shadcn-main my-app-name
cd my-app-name

# Install dependencies
npm install
```

### 🏷️ Metode 3: Download dari Release

**Keuntungan:** Mendapatkan versi stabil yang sudah ditest

1. **Kunjungi Releases:**
   - https://github.com/BlackCoffeee/template-shadcn/releases
   - Pilih versi terbaru (v2.0.0)

2. **Download Assets:**
   - Download `Source code (zip)` atau `Source code (tar.gz)`

3. **Setup Project:**
```bash
# Extract file
unzip template-shadcn-2.0.0.zip
cd template-shadcn-2.0.0

# Install dependencies
npm install
```

## ⚙️ Setup Environment

### 1. Buat File Environment

```bash
# Copy template environment
cp .env.example .env.local

# Edit file environment (opsional)
nano .env.local
```

### 2. Konfigurasi Environment

File `.env.local` berisi konfigurasi untuk development:

```env
# Application Environment
VITE_APP_ENV=development
VITE_APP_NAME="My App"
VITE_APP_VERSION="2.0.0"

# API Configuration
VITE_API_URL=http://localhost:3000/api

# Feature Flags
VITE_FEATURE_FLAGS_ENABLED=true
VITE_FEATURE_V2_DEMO=true

# Theme Configuration
VITE_DEFAULT_THEME=light
VITE_ENABLE_DARK_MODE=true
```

## 🚀 Menjalankan Aplikasi

### Development Mode

```bash
# Start development server
npm run dev

# Aplikasi akan berjalan di: http://localhost:5173
```

### Build untuk Production

```bash
# Build untuk production
npm run build

# Preview build production
npm run preview
```

### Build untuk Staging

```bash
# Build untuk staging
npm run build:staging

# Preview build staging
npm run preview:staging
```

## 🛠️ Scripts yang Tersedia

```bash
# Development
npm run dev              # Development server
npm run dev:staging      # Development dengan staging config

# Building
npm run build:dev        # Build untuk development
npm run build:staging    # Build untuk staging
npm run build            # Build untuk production

# Preview
npm run preview          # Preview production build
npm run preview:staging  # Preview staging build

# Quality Assurance
npm run lint             # Run ESLint
npm run format           # Format code dengan Prettier
npm run format:check     # Check code formatting
```

## 📁 Struktur Project

```
template-shadcn/
├── 📁 docs/                 # Dokumentasi lengkap
├── 📁 src/
│   ├── 📁 components/       # Komponen React
│   │   ├── 📁 auth/        # Komponen authentication
│   │   ├── 📁 dashboard/   # Komponen dashboard
│   │   ├── 📁 navigation/  # Komponen navigasi
│   │   ├── 📁 ui/          # Komponen UI (Shadcn/ui)
│   │   └── 📁 v2/          # Komponen versi 2
│   ├── 📁 pages/           # Halaman aplikasi
│   ├── 📁 router/          # Konfigurasi routing
│   ├── 📁 store/           # State management (Zustand)
│   └── 📁 types/           # TypeScript types
├── 📁 config/              # Konfigurasi environment
├── 📄 package.json         # Dependencies dan scripts
├── 📄 vite.config.ts       # Konfigurasi Vite
└── 📄 tailwind.config.js   # Konfigurasi Tailwind CSS
```

## 🎨 Kustomisasi Template

### 1. Ganti Nama Aplikasi

```bash
# Edit package.json
"name": "your-app-name"

# Edit .env.local
VITE_APP_NAME="Your App Name"
```

### 2. Ganti Logo dan Branding

```bash
# Ganti file logo di folder public/
# Update komponen logo di src/components/brand/logo.tsx
```

### 3. Kustomisasi Theme

```bash
# Edit file src/index.css untuk warna custom
# Atau edit tailwind.config.js untuk theme custom
```

### 4. Tambah Komponen Baru

```bash
# Tambah komponen di src/components/
# Import dan gunakan di halaman yang diinginkan
```

## 🔧 Troubleshooting

### Error: "Cannot find module"

```bash
# Hapus node_modules dan install ulang
rm -rf node_modules package-lock.json
npm install
```

### Error: "Port already in use"

```bash
# Ganti port di vite.config.ts
server: {
  port: 5174  # Ganti ke port lain
}
```

### Error: "Environment variables not working"

```bash
# Pastikan file .env.local sudah dibuat
cp .env.example .env.local

# Restart development server
npm run dev
```

### Error: "TypeScript errors"

```bash
# Jalankan type checking
npm run type-check

# Atau restart TypeScript server di editor
```

## 📚 Dokumentasi Lebih Lengkap

- 📖 **[Getting Started Guide](./docs/getting-started.md)**
- 🌍 **[Environment Configuration](./docs/environment/configuration.md)**
- 🧩 **[Components Documentation](./docs/components/README.md)**
- 💻 **[Development Guide](./docs/development/README.md)**
- 🚀 **[Deployment Guide](./docs/deployment/README.md)**

## 🆘 Butuh Bantuan?

- 🐛 **Report Bug:** [GitHub Issues](https://github.com/BlackCoffeee/template-shadcn/issues)
- 💡 **Request Feature:** [GitHub Issues](https://github.com/BlackCoffeee/template-shadcn/issues)
- 💬 **Discussions:** [GitHub Discussions](https://github.com/BlackCoffeee/template-shadcn/discussions)

---

**⭐ Jangan lupa star repository ini jika template ini membantu!**

**📚 [Baca Dokumentasi Lengkap →](./docs/README.md)**
