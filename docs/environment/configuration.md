# Environment Configuration Guide

## Overview

This project supports multiple environments with different configurations for development, staging, and production.

## Environment Files

### 1. Environment Variables

- `.env.example` - Template file (committed to git)
- `.env.local` - Local development (not committed)
- `.env.development` - Development environment
- `.env.staging` - Staging environment
- `.env.production` - Production environment

### 2. Configuration Files

- `config/environments/development.ts` - Development config
- `config/environments/staging.ts` - Staging config
- `config/environments/production.ts` - Production config

### 3. Vite Configurations

- `vite.config.development.ts` - Development build config
- `vite.config.staging.ts` - Staging build config
- `vite.config.production.ts` - Production build config

## Setup Instructions

### 1. Copy Environment Template

```bash
cp .env.example .env.local
```

### 2. Fill in Your Values

Edit `.env.local` with your actual values:

```env
VITE_APP_NAME=Your App Name
VITE_API_BASE_URL=https://your-api.com
VITE_AUTH_SECRET=your-secret-key
```

## Available Scripts

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

## Environment-Specific Features

### Development

- Source maps enabled
- Debug mode on
- Analytics disabled
- Hot reload enabled

### Staging

- Source maps enabled
- Debug mode on
- Analytics enabled
- Optimized build

### Production

- Source maps disabled
- Debug mode off
- Analytics enabled
- Fully optimized build

## Version Management

Each environment can have different versions:

- Development: `1.0.0-dev`
- Staging: `2.0.0-beta`
- Production: `2.0.0`

## Branch Strategy

- `development` branch → Development environment
- `staging` branch → Staging environment
- `main` branch → Production environment

## Security Notes

- Never commit `.env.local` or any `.env.*` files
- Use different secrets for each environment
- Production secrets should be managed by your deployment platform
