# 🚀 Getting Started

Panduan lengkap untuk memulai menggunakan Template Shadcn dengan React, TypeScript, dan Vite.

## 📋 Prerequisites

Sebelum memulai, pastikan Anda telah menginstall:

- **Node.js** (versi 18 atau lebih baru)
- **npm** atau **yarn**
- **Git**

## 🛠️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/your-repo/template-shadcn.git
cd template-shadcn
```

### 2. Install Dependencies

```bash
npm install
# atau
yarn install
```

### 3. Setup Environment

```bash
# Copy environment template
cp .env.example .env.local

# Edit environment variables
nano .env.local
```

### 4. Start Development Server

```bash
npm run dev
# atau
yarn dev
```

Aplikasi akan berjalan di `http://localhost:5173`

## 🏗️ Project Structure

```
template-shadcn/
├── src/
│   ├── components/          # Komponen React
│   ├── pages/              # Halaman aplikasi
│   ├── router/             # Routing configuration
│   ├── store/              # State management
│   ├── types/              # TypeScript types
│   └── lib/                # Utility functions
├── config/                 # Environment configurations
├── docs/                   # Dokumentasi
└── public/                 # Static assets
```

## 🎯 Available Scripts

### Development

```bash
npm run dev              # Development server
npm run dev:staging      # Development with staging config
```

### Building

```bash
npm run build:dev        # Build for development
npm run build:staging    # Build for staging
npm run build            # Build for production
```

### Preview

```bash
npm run preview          # Preview production build
npm run preview:staging  # Preview staging build
```

### Linting & Formatting

```bash
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint errors
```

## 🔧 Configuration

### Environment Setup

Template ini mendukung multiple environments:

- **Development**: Untuk development lokal
- **Staging**: Untuk testing sebelum production
- **Production**: Untuk deployment final

Lihat [Environment Configuration Guide](./environment/configuration.md) untuk detail lengkap.

### TypeScript Configuration

Template sudah dikonfigurasi dengan TypeScript yang optimal:

- **Strict mode** enabled
- **Path mapping** untuk import yang bersih
- **Type checking** untuk build process

### ESLint Configuration

ESLint dikonfigurasi dengan:

- **TypeScript support**
- **React best practices**
- **Import/export rules**
- **Code formatting**

## 🎨 UI Components

Template ini menggunakan:

- **Shadcn/ui** - Komponen UI yang modern
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Radix UI** - Headless UI primitives

## 📱 Features

### Authentication

- Login/Register forms
- Social login (Google, GitHub)
- Password reset functionality

### Dashboard

- Overview charts
- Recent activities
- Statistics cards

### Navigation

- Responsive navigation
- Mobile-friendly menu
- Theme switching

### Data Tables

- Sortable columns
- Pagination
- Search functionality

## 🔄 Development Workflow

### 1. Feature Development

```bash
# 1. Create feature branch
git checkout -b feature/your-feature-name

# 2. Make changes
# ... your code changes ...

# 3. Test changes
npm run dev

# 4. Commit changes
git add .
git commit -m "feat: add your feature"

# 5. Push to remote
git push origin feature/your-feature-name
```

### 2. Environment Testing

```bash
# Test in staging environment
npm run dev:staging

# Build for staging
npm run build:staging
```

### 3. Production Deployment

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🐛 Troubleshooting

### Common Issues

#### Port Already in Use

```bash
# Kill process on port 5173
npx kill-port 5173

# Or use different port
npm run dev -- --port 3000
```

#### TypeScript Errors

```bash
# Check TypeScript configuration
npx tsc --noEmit

# Restart TypeScript server in your IDE
```

#### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📚 Next Steps

1. **Explore Components**: Lihat [Components Documentation](./components/)
2. **Environment Setup**: Baca [Environment Configuration](./environment/configuration.md)
3. **Development Guide**: Lihat [Development Documentation](./development/)
4. **Deployment**: Ikuti [Deployment Guide](./deployment/)

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request

## 📄 License

This project is licensed under the MIT License.

---

**Need Help?** Check our [documentation index](./README.md) or create an [issue](https://github.com/your-repo/template-shadcn/issues).
