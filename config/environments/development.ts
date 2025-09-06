export const developmentConfig = {
    app: {
        name: 'Template Shadcn',
        version: '1.0.0',
        environment: 'development',
    },
    api: {
        baseUrl: 'http://localhost:3001/api',
        timeout: 10000,
    },
    auth: {
        secret: process.env.VITE_AUTH_SECRET || 'dev-secret-key',
        jwtExpiresIn: '7d',
    },
    features: {
        analytics: false,
        debug: true,
        maintenance: false,
    },
    build: {
        target: 'development',
        sourceMap: true,
    },
} as const
