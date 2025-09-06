# Environment Management Guide v2.0.0

## 🎯 Overview

Template Shadcn v2.0.0 memperkenalkan sistem environment management yang lebih robust dan terstruktur. Sistem ini memungkinkan Anda untuk mengelola konfigurasi yang berbeda untuk setiap environment tanpa mengacaukan versi sebelumnya.

## 📋 Struktur Environment v2.0.0

### Version Mapping
- **Development**: `2.0.0-dev` (Branch: `development`)
- **Staging**: `2.0.0-beta` (Branch: `staging`) 
- **Production**: `2.0.0` (Branch: `main`)

### File Structure
```
├── .env.development          # Environment variables untuk development
├── config/
│   ├── index.ts             # Config manager dengan TypeScript
│   └── environments/
│       ├── development.ts   # Development config
│       ├── staging.ts       # Staging config
│       └── production.ts    # Production config
├── vite.config.development.ts
├── vite.config.staging.ts
└── vite.config.production.ts
```

## 🔧 Cara Menggunakan Environment v2.0.0

### 1. Development Environment
```bash
# Switch ke branch development
git checkout development

# Jalankan development server
npm run dev

# Build untuk development
npm run build:dev
```

### 2. Staging Environment
```bash
# Switch ke branch staging
git checkout staging

# Jalankan dengan staging config
npm run dev:staging

# Build untuk staging
npm run build:staging
```

### 3. Production Environment
```bash
# Switch ke branch main
git checkout main

# Build untuk production
npm run build
```

## 🎨 Fitur Baru v2.0.0

### 1. Version Info Component
```tsx
import { VersionInfo } from '@/components/v2/VersionInfo'

// Menampilkan informasi versi dan environment
<VersionInfo />
```

### 2. Feature Flags System
```tsx
import { FeatureFlags } from '@/components/v2/FeatureFlags'

// Menampilkan status feature flags
<FeatureFlags />
```

### 3. Demo Page v2.0.0
Akses demo page di: `http://localhost:3000/v2/demo`

## 🔄 Workflow Development v2.0.0

### 1. Mulai Development
```bash
# 1. Switch ke development branch
git checkout development

# 2. Install dependencies (jika ada yang baru)
npm install

# 3. Copy environment template
cp .env.example .env.development

# 4. Edit environment variables
nano .env.development

# 5. Jalankan development server
npm run dev
```

### 2. Testing di Staging
```bash
# 1. Merge development ke staging
git checkout staging
git merge development

# 2. Test dengan staging config
npm run dev:staging

# 3. Build untuk staging
npm run build:staging
```

### 3. Release ke Production
```bash
# 1. Merge staging ke main
git checkout main
git merge staging

# 2. Update version di package.json
# 3. Build production
npm run build

# 4. Create tag
git tag -a v2.0.0 -m "Release version 2.0.0"
git push origin v2.0.0
```

## 🛡️ Isolasi Environment

### Environment Variables
Setiap environment memiliki file `.env` terpisah:
- `.env.development` - Development settings
- `.env.staging` - Staging settings  
- `.env.production` - Production settings

### Configuration Files
Setiap environment memiliki config TypeScript terpisah:
- `config/environments/development.ts`
- `config/environments/staging.ts`
- `config/environments/production.ts`

### Build Configurations
Setiap environment memiliki Vite config terpisah:
- `vite.config.development.ts`
- `vite.config.staging.ts`
- `vite.config.production.ts`

## 🚀 Keuntungan Sistem v2.0.0

### 1. **Isolasi Lengkap**
- Konfigurasi terpisah untuk setiap environment
- Tidak ada konflik antara versi
- Environment variables yang aman

### 2. **Type Safety**
- TypeScript-based configuration
- Auto-completion dan error checking
- Compile-time validation

### 3. **Flexibility**
- Mudah menambah environment baru
- Feature flags per environment
- Build optimization per environment

### 4. **Maintainability**
- Dokumentasi lengkap
- Struktur yang terorganisir
- Easy debugging

## 🔍 Debugging Environment

### Check Current Environment
```tsx
import config from '@/config'

console.log('Current Environment:', config.app.environment)
console.log('App Version:', config.app.version)
console.log('API Base URL:', config.api.baseUrl)
```

### Environment Variables
```bash
# Check environment variables
echo $VITE_APP_ENVIRONMENT
echo $VITE_APP_VERSION
```

## 📝 Best Practices

### 1. **Environment Variables**
- Gunakan prefix `VITE_` untuk client-side variables
- Jangan commit file `.env.*` ke git
- Gunakan `.env.example` sebagai template

### 2. **Configuration**
- Update semua environment configs saat menambah fitur baru
- Gunakan TypeScript untuk type safety
- Dokumentasikan perubahan konfigurasi

### 3. **Versioning**
- Update version di semua environment configs
- Gunakan semantic versioning
- Tag release dengan deskripsi lengkap

## 🆚 Perbedaan v1.1.0 vs v2.0.0

| Feature | v1.1.0 | v2.0.0 |
|---------|--------|--------|
| Environment Management | Basic | Advanced with TypeScript |
| Configuration | Single file | Multiple environment files |
| Version Control | Manual | Automated with config |
| Feature Flags | None | Built-in system |
| Build Optimization | Basic | Environment-specific |
| Documentation | Basic | Comprehensive |

## 🎯 Next Steps

1. **Explore Demo**: Kunjungi `/v2/demo` untuk melihat fitur baru
2. **Customize Config**: Edit environment configs sesuai kebutuhan
3. **Add Features**: Gunakan feature flags untuk fitur baru
4. **Test Thoroughly**: Test di semua environment sebelum release

---

**Note**: Sistem ini memastikan bahwa development v2.0.0 tidak akan mengacaukan versi 1.1.0 yang sudah stabil. Setiap environment berjalan secara independen dengan konfigurasi yang terisolasi.
