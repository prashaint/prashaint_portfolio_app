# Deployment Guide

## Table of Contents
1. [Deployment Overview](#deployment-overview)
2. [Build Process](#build-process)
3. [Netlify Deployment](#netlify-deployment)
4. [Vercel Deployment](#vercel-deployment)
5. [Docker Deployment](#docker-deployment)
6. [AWS S3 + CloudFront](#aws-s3--cloudfront)
7. [GitHub Pages](#github-pages)
8. [Environment Configuration](#environment-configuration)
9. [Performance Optimization](#performance-optimization)
10. [Monitoring & Analytics](#monitoring--analytics)
11. [Troubleshooting](#troubleshooting)

## Deployment Overview

### Deployment Architecture
```
Source Code → Build Process → Static Assets → Hosting Platform → CDN → Users
     │              │              │              │           │       │
     ▼              ▼              ▼              ▼           ▼       ▼
   GitHub        Vite Build      dist/folder    Netlify    CloudFlare Browser
   GitLab        npm run build   HTML/CSS/JS    Vercel     AWS CF     Request
```

### Deployment Options
- **Netlify** (Recommended): Automatic deployments with Git integration
- **Vercel**: Excellent performance and developer experience
- **Docker**: Containerized deployment for any platform
- **AWS S3 + CloudFront**: Scalable cloud deployment
- **GitHub Pages**: Free hosting for public repositories

## Build Process

### Production Build
```bash
# Install dependencies
npm install

# Create production build
npm run build

# Preview build locally
npm run preview
```

### Build Configuration
```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['lucide-react', '@radix-ui/react-slot'],
        },
      },
    },
    // Optimize for performance
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  // Ensure proper asset handling
  base: '/',
});
```

### Build Output Structure
```
dist/
├── index.html                 # Main HTML file
├── assets/                    # Static assets
│   ├── index-[hash].js       # Main JavaScript bundle
│   ├── vendor-[hash].js      # Vendor dependencies
│   ├── router-[hash].js      # React Router bundle
│   ├── index-[hash].css      # Compiled CSS
│   └── [images]              # Optimized images
├── favicon.ico               # Site favicon
├── manifest.json             # PWA manifest
└── robots.txt               # SEO robots file
```

## Netlify Deployment

### Automatic Deployment Setup

#### 1. Connect Repository
```bash
# Push your code to GitHub/GitLab
git add .
git commit -m "Initial commit"
git push origin main
```

#### 2. Netlify Configuration
Create `netlify.toml` in project root:
```toml
# netlify.toml
[build]
  publish = "dist"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"
  NPM_VERSION = "9"

# Redirect rules for React Router
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# Security headers
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self';"

# Cache static assets
[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

# Performance optimizations
[build.processing]
  skip_processing = false

[build.processing.css]
  bundle = true
  minify = true

[build.processing.js]
  bundle = true
  minify = true

[build.processing.html]
  pretty_urls = true

[build.processing.images]
  compress = true
```

#### 3. Environment Variables in Netlify
Set in Netlify Dashboard → Site Settings → Environment Variables:
```
NODE_ENV=production
VITE_APP_URL=https://yourdomain.netlify.app
VITE_ANALYTICS_ID=your-analytics-id
```

### Manual Deployment
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

### Branch Deployments
```toml
# netlify.toml - Branch deployments
[context.production]
  command = "npm run build"
  
[context.deploy-preview]
  command = "npm run build:preview"
  
[context.branch-deploy]
  command = "npm run build:dev"
```

## Vercel Deployment

### Automatic Deployment

#### 1. Install Vercel CLI
```bash
npm install -g vercel
```

#### 2. Deploy from CLI
```bash
# Login to Vercel
vercel login

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

#### 3. Vercel Configuration
Create `vercel.json`:
```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
```

### GitHub Integration
1. Connect GitHub repository in Vercel dashboard
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Set install command: `npm install`

## Docker Deployment

### Dockerfile
```dockerfile
# Multi-stage Dockerfile for React Portfolio App
FROM node:18-alpine AS base

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apk add --no-cache git python3 make g++

# Copy package files
COPY package*.json ./

# Stage 2: Dependencies installation
FROM base AS deps
RUN rm -f package-lock.json
RUN npm install --only=production --no-optional --silent
RUN cp -R node_modules prod_node_modules
RUN npm install --silent

# Stage 3: Build stage
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN rm -f package-lock.json
ENV NODE_ENV=production
RUN npm run build

# Stage 4: Production stage
FROM nginx:alpine AS production
RUN apk add --no-cache curl

# Create nginx config
RUN echo 'server { \
    listen 80; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
    \
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ { \
        expires 1y; \
        add_header Cache-Control "public, immutable"; \
    } \
    \
    add_header X-Frame-Options "SAMEORIGIN" always; \
    add_header X-Content-Type-Options "nosniff" always; \
    add_header Referrer-Policy "no-referrer-when-downgrade" always; \
}' > /etc/nginx/conf.d/default.conf

# Copy built application
COPY --from=builder /app/dist /usr/share/nginx/html

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost/ || exit 1

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Docker Compose
```yaml
# docker-compose.prod.yml
version: '3.8'

services:
  portfolio-prod:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "80:80"
    environment:
      - NODE_ENV=production
    networks:
      - portfolio-network
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost/"]
      timeout: 10s
      interval: 30s
      retries: 3
      start_period: 40s

networks:
  portfolio-network:
    driver: bridge
```

### Deploy with Docker
```bash
# Build and run production container
docker-compose -f docker-compose.prod.yml up -d

# Scale if needed
docker-compose -f docker-compose.prod.yml up -d --scale portfolio-prod=3

# Check logs
docker-compose -f docker-compose.prod.yml logs -f
```

## AWS S3 + CloudFront

### S3 Bucket Setup
```bash
# Install AWS CLI
npm install -g aws-cli

# Configure AWS credentials
aws configure

# Create S3 bucket
aws s3 mb s3://your-portfolio-bucket

# Enable static website hosting
aws s3 website s3://your-portfolio-bucket \
  --index-document index.html \
  --error-document index.html
```

### Upload Build
```bash
# Build the application
npm run build

# Upload to S3
aws s3 sync dist/ s3://your-portfolio-bucket \
  --delete \
  --cache-control "max-age=31536000" \
  --exclude "*.html" \
  --exclude "service-worker.js"

# Upload HTML files with different cache settings
aws s3 sync dist/ s3://your-portfolio-bucket \
  --delete \
  --cache-control "max-age=0, no-cache, no-store, must-revalidate" \
  --include "*.html" \
  --include "service-worker.js"
```

### CloudFront Distribution
```json
{
  "DistributionConfig": {
    "CallerReference": "portfolio-deployment",
    "Origins": [
      {
        "Id": "S3-portfolio-bucket",
        "DomainName": "your-portfolio-bucket.s3.amazonaws.com",
        "S3OriginConfig": {
          "OriginAccessIdentity": ""
        }
      }
    ],
    "DefaultCacheBehavior": {
      "TargetOriginId": "S3-portfolio-bucket",
      "ViewerProtocolPolicy": "redirect-to-https",
      "CachePolicyId": "managed-caching-optimized",
      "ResponseHeadersPolicyId": "managed-security-headers"
    },
    "CustomErrorResponses": [
      {
        "ErrorCode": 403,
        "ResponseCode": 200,
        "ResponsePagePath": "/index.html"
      },
      {
        "ErrorCode": 404,
        "ResponseCode": 200,
        "ResponsePagePath": "/index.html"
      }
    ],
    "Enabled": true
  }
}
```

### Deployment Script
```bash
#!/bin/bash
# deploy-aws.sh

# Build the application
echo "Building application..."
npm run build

# Upload to S3
echo "Uploading to S3..."
aws s3 sync dist/ s3://your-portfolio-bucket \
  --delete \
  --cache-control "max-age=31536000" \
  --exclude "*.html" \
  --exclude "service-worker.js"

aws s3 sync dist/ s3://your-portfolio-bucket \
  --delete \
  --cache-control "max-age=0, no-cache, no-store, must-revalidate" \
  --include "*.html" \
  --include "service-worker.js"

# Invalidate CloudFront cache
echo "Invalidating CloudFront cache..."
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"

echo "Deployment complete!"
```

## GitHub Pages

### Setup GitHub Actions
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      env:
        NODE_ENV: production
        VITE_APP_URL: https://yourusername.github.io/repository-name
        
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
        cname: yourdomain.com  # Optional: for custom domain
```

### Manual GitHub Pages Setup
```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Add deploy script to package.json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}

# Deploy
npm run deploy
```

### Custom Domain
Create `public/CNAME` file:
```
yourdomain.com
```

## Environment Configuration

### Environment Variables

#### Development (.env.development)
```env
VITE_APP_TITLE=Portfolio Development
VITE_APP_URL=http://localhost:5173
VITE_APP_ENV=development
VITE_API_BASE_URL=http://localhost:3001/api
VITE_ANALYTICS_ID=
VITE_DEBUG=true
```

#### Production (.env.production)
```env
VITE_APP_TITLE=Prashaint Mishra Portfolio
VITE_APP_URL=https://prashaintmishra.in
VITE_APP_ENV=production
VITE_API_BASE_URL=https://api.prashaintmishra.in
VITE_ANALYTICS_ID=G-XXXXXXXXXX
VITE_DEBUG=false
```

### Runtime Configuration
```javascript
// src/config/index.js
const config = {
  app: {
    title: import.meta.env.VITE_APP_TITLE || 'Portfolio',
    url: import.meta.env.VITE_APP_URL || 'http://localhost:5173',
    env: import.meta.env.VITE_APP_ENV || 'development',
  },
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || '/api',
  },
  analytics: {
    googleAnalyticsId: import.meta.env.VITE_ANALYTICS_ID,
  },
  features: {
    debug: import.meta.env.VITE_DEBUG === 'true',
  },
};

export default config;
```

### Platform-Specific Environment Variables

#### Netlify
```bash
# Netlify CLI
netlify env:set NODE_ENV production
netlify env:set VITE_APP_URL https://yoursite.netlify.app
```

#### Vercel
```bash
# Vercel CLI
vercel env add VITE_APP_URL production
vercel env add VITE_ANALYTICS_ID production
```

## Performance Optimization

### Build Optimizations
```javascript
// vite.config.js
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'react';
            }
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            return 'vendor';
          }
        },
      },
    },
    // Optimize chunk sizes
    chunkSizeWarningLimit: 1000,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});
```

### Asset Optimization
```bash
# Image optimization script
npm install --save-dev imagemin imagemin-webp imagemin-mozjpeg imagemin-pngquant

# optimize-images.js
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';

const optimizeImages = async () => {
  await imagemin(['public/assets/images/*.{jpg,png}'], {
    destination: 'public/assets/images/optimized',
    plugins: [
      imageminMozjpeg({ quality: 80 }),
      imageminPngquant({ quality: [0.6, 0.8] }),
      imageminWebp({ quality: 80 })
    ]
  });
};

optimizeImages();
```

### CDN Configuration
```javascript
// For external CDN assets
const CDN_URL = 'https://cdn.yourdomain.com';

// Asset helper
export const getAssetUrl = (path) => {
  if (import.meta.env.PROD) {
    return `${CDN_URL}${path}`;
  }
  return path;
};

// Usage
<img src={getAssetUrl('/assets/images/hero.jpg')} alt="Hero" />
```

## Monitoring & Analytics

### Performance Monitoring
```javascript
// Performance monitoring setup
const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Send to analytics
reportWebVitals((metric) => {
  gtag('event', metric.name, {
    event_category: 'Web Vitals',
    value: Math.round(metric.value),
    event_label: metric.id,
  });
});
```

### Error Tracking
```javascript
// Error boundary with reporting
class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    // Send to error tracking service
    if (import.meta.env.PROD) {
      fetch('/api/errors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          error: error.toString(),
          errorInfo: errorInfo.componentStack,
          url: window.location.href,
          userAgent: navigator.userAgent,
          timestamp: new Date().toISOString(),
        }),
      });
    }
  }
}
```

### Deployment Analytics
```bash
# Lighthouse CI for automated testing
npm install -g @lhci/cli

# lighthouserc.js
module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:5173'],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['warn', { minScore: 0.9 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
```

## Troubleshooting

### Common Issues

#### 1. Build Failures
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check Node.js version
node --version  # Should be 18+

# Verbose build output
npm run build --verbose
```

#### 2. Routing Issues in Production
```javascript
// Ensure proper redirect rules are set
// For Netlify: _redirects file
/* /index.html 200

// For Apache: .htaccess
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</IfModule>
```

#### 3. Environment Variable Issues
```javascript
// Check if variables are loaded
console.log('Environment:', {
  NODE_ENV: import.meta.env.MODE,
  VITE_APP_URL: import.meta.env.VITE_APP_URL,
  // Only VITE_ prefixed variables are available in client
});

// Ensure variables are prefixed with VITE_
// ❌ APP_URL (won't work)
// ✅ VITE_APP_URL (will work)
```

#### 4. Performance Issues
```javascript
// Bundle analysis
npm install --save-dev rollup-plugin-visualizer

// vite.config.js
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: 'dist/stats.html',
      open: true
    })
  ]
});
```

### Debugging Deployment
```bash
# Check build output
ls -la dist/

# Verify assets
find dist/ -name "*.js" -exec ls -lh {} \;

# Test locally
npm run preview

# Check network requests
curl -I https://yourdomain.com

# Verify headers
curl -H "Accept: text/html" https://yourdomain.com
```

### Rollback Strategy
```bash
# Git-based rollback
git log --oneline -10
git checkout <previous-commit-hash>
git push origin main --force

# Platform-specific rollback
# Netlify: Use deploy history in dashboard
# Vercel: Use deployments tab to promote previous version
# AWS: Restore from S3 versioning + CloudFront invalidation
```

This deployment guide provides comprehensive instructions for deploying the portfolio application to various platforms with proper configuration, optimization, and monitoring setup.