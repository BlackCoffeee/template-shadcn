# 🚀 Deployment Guide

Panduan lengkap untuk deployment Template Shadcn ke berbagai platform.

## 📋 Prerequisites

Sebelum deployment, pastikan:

- ✅ Aplikasi berjalan dengan baik di development
- ✅ Semua tests passed
- ✅ Build production berhasil
- ✅ Environment variables sudah dikonfigurasi
- ✅ Domain dan SSL certificate sudah siap

## 🏗️ Build Process

### Production Build

```bash
# Build untuk production
npm run build

# Build untuk staging
npm run build:staging

# Preview build
npm run preview
```

### Build Optimization

```bash
# Analyze bundle size
npm run build:analyze

# Check build output
ls -la dist/
```

## 🌐 Deployment Platforms

### 1. Vercel (Recommended)

#### Setup

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

#### Configuration

Create `vercel.json`:

```json
{
    "buildCommand": "npm run build",
    "outputDirectory": "dist",
    "framework": "vite",
    "rewrites": [
        {
            "source": "/(.*)",
            "destination": "/index.html"
        }
    ]
}
```

#### Environment Variables

Set di Vercel Dashboard:

- `VITE_APP_NAME`
- `VITE_API_BASE_URL`
- `VITE_AUTH_SECRET`

### 2. Netlify

#### Setup

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

#### Configuration

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. GitHub Pages

#### Setup

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run deploy
```

#### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
    push:
        branches: [main]

jobs:
    deploy:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v3
            - uses: actions/setup-node@v3
              with:
                  node-version: '18'
            - run: npm install
            - run: npm run build
            - uses: peaceiris/actions-gh-pages@v3
              with:
                  github_token: ${{ secrets.GITHUB_TOKEN }}
                  publish_dir: ./dist
```

### 4. AWS S3 + CloudFront

#### Setup

```bash
# Install AWS CLI
aws configure

# Create S3 bucket
aws s3 mb s3://your-bucket-name

# Upload files
aws s3 sync dist/ s3://your-bucket-name --delete

# Create CloudFront distribution
aws cloudfront create-distribution --distribution-config file://cloudfront-config.json
```

#### Configuration

Create `cloudfront-config.json`:

```json
{
    "CallerReference": "your-app-2024",
    "Comment": "Your App Distribution",
    "DefaultRootObject": "index.html",
    "Origins": {
        "Quantity": 1,
        "Items": [
            {
                "Id": "S3-your-bucket-name",
                "DomainName": "your-bucket-name.s3.amazonaws.com",
                "S3OriginConfig": {
                    "OriginAccessIdentity": ""
                }
            }
        ]
    },
    "DefaultCacheBehavior": {
        "TargetOriginId": "S3-your-bucket-name",
        "ViewerProtocolPolicy": "redirect-to-https",
        "TrustedSigners": {
            "Enabled": false,
            "Quantity": 0
        },
        "ForwardedValues": {
            "QueryString": false,
            "Cookies": {
                "Forward": "none"
            }
        }
    },
    "Enabled": true
}
```

### 5. Docker

#### Dockerfile

```dockerfile
# Build stage
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### nginx.conf

```nginx
events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    server {
        listen 80;
        server_name localhost;
        root /usr/share/nginx/html;
        index index.html;

        location / {
            try_files $uri $uri/ /index.html;
        }

        location /static/ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }
}
```

#### Build & Run

```bash
# Build Docker image
docker build -t your-app .

# Run container
docker run -p 80:80 your-app
```

## 🔧 Environment Configuration

### Production Environment

```env
# .env.production
VITE_APP_NAME=Your App Name
VITE_APP_VERSION=2.0.0
VITE_APP_ENVIRONMENT=production
VITE_API_BASE_URL=https://api.yourdomain.com
VITE_AUTH_SECRET=your-production-secret
VITE_ANALYTICS_ID=your-analytics-id
```

### Staging Environment

```env
# .env.staging
VITE_APP_NAME=Your App Name (Staging)
VITE_APP_VERSION=2.0.0-beta
VITE_APP_ENVIRONMENT=staging
VITE_API_BASE_URL=https://staging-api.yourdomain.com
VITE_AUTH_SECRET=your-staging-secret
VITE_ANALYTICS_ID=your-staging-analytics-id
```

## 🔒 Security Considerations

### Environment Variables

- ✅ Never commit `.env` files
- ✅ Use different secrets for each environment
- ✅ Rotate secrets regularly
- ✅ Use environment-specific configurations

### HTTPS

- ✅ Always use HTTPS in production
- ✅ Redirect HTTP to HTTPS
- ✅ Use HSTS headers
- ✅ Implement CSP headers

### Headers

```nginx
# Security headers
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';" always;
```

## 📊 Monitoring & Analytics

### Performance Monitoring

```tsx
// Add performance monitoring
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

function sendToAnalytics(metric) {
    // Send to your analytics service
    console.log(metric)
}

getCLS(sendToAnalytics)
getFID(sendToAnalytics)
getFCP(sendToAnalytics)
getLCP(sendToAnalytics)
getTTFB(sendToAnalytics)
```

### Error Tracking

```tsx
// Error boundary with tracking
import { ErrorBoundary } from 'react-error-boundary'

function ErrorFallback({ error, resetErrorBoundary }) {
    // Send error to tracking service
    console.error('Error caught by boundary:', error)

    return (
        <div role='alert'>
            <h2>Something went wrong:</h2>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
}

;<ErrorBoundary FallbackComponent={ErrorFallback}>
    <App />
</ErrorBoundary>
```

## 🚀 CI/CD Pipeline

### GitHub Actions

```yaml
name: Deploy

on:
    push:
        branches: [main, staging]

jobs:
    test:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v3
            - uses: actions/setup-node@v3
              with:
                  node-version: '18'
            - run: npm install
            - run: npm run lint
            - run: npm run test
            - run: npm run build

    deploy-staging:
        if: github.ref == 'refs/heads/staging'
        needs: test
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v3
            - uses: actions/setup-node@v3
              with:
                  node-version: '18'
            - run: npm install
            - run: npm run build:staging
            - name: Deploy to Staging
              run: |
                  # Deploy to staging environment
                  echo "Deploying to staging..."

    deploy-production:
        if: github.ref == 'refs/heads/main'
        needs: test
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v3
            - uses: actions/setup-node@v3
              with:
                  node-version: '18'
            - run: npm install
            - run: npm run build
            - name: Deploy to Production
              run: |
                  # Deploy to production environment
                  echo "Deploying to production..."
```

## 🔄 Rollback Strategy

### Quick Rollback

```bash
# Rollback to previous version
git checkout previous-commit-hash
npm run build
# Redeploy
```

### Blue-Green Deployment

1. Deploy new version to staging
2. Test thoroughly
3. Switch traffic to new version
4. Keep old version as backup

### Canary Deployment

1. Deploy to small percentage of users
2. Monitor metrics
3. Gradually increase traffic
4. Full deployment if successful

## 📈 Performance Optimization

### Bundle Analysis

```bash
# Analyze bundle size
npm run build:analyze

# Check for large dependencies
npm ls --depth=0
```

### Caching Strategy

```nginx
# Cache static assets
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

# Cache HTML files
location ~* \.html$ {
    expires 1h;
    add_header Cache-Control "public";
}
```

### CDN Configuration

- Use CDN for static assets
- Enable gzip compression
- Optimize images
- Use WebP format when possible

## 🆘 Troubleshooting

### Common Issues

#### Build Failures

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check for TypeScript errors
npm run type-check

# Check for linting errors
npm run lint
```

#### Runtime Errors

- Check browser console for errors
- Verify environment variables
- Check network requests
- Validate API endpoints

#### Performance Issues

- Analyze bundle size
- Check for memory leaks
- Optimize images
- Enable compression

## 📚 Additional Resources

- [Vercel Deployment Guide](https://vercel.com/docs)
- [Netlify Deployment Guide](https://docs.netlify.com/)
- [AWS S3 Static Website Hosting](https://docs.aws.amazon.com/s3/latest/userguide/WebsiteHosting.html)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)

---

**Ready to deploy?** Check [Environment Configuration](../environment/configuration.md) first!
