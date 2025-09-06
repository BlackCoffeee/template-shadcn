export const productionConfig = {
    app: {
        name: 'Template Shadcn',
        version: '2.0.0',
        environment: 'production',
    },
    api: {
        baseUrl: 'https://api.yourdomain.com/api',
        timeout: 20000,
    },
    auth: {
        secret: process.env.VITE_AUTH_SECRET || 'production-secret-key',
        jwtExpiresIn: '1d',
    },
    features: {
        analytics: true,
        debug: false,
        maintenance: false,
    },
    build: {
        target: 'production',
        sourceMap: false,
    },
} as const
