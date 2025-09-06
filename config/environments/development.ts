export const developmentConfig = {
    app: {
        name: 'Template Shadcn v2',
        version: '2.0.0-dev',
        environment: 'development',
    },
    api: {
        baseUrl: 'http://localhost:3001/api',
        timeout: 10000,
    },
    auth: {
        secret: import.meta.env.VITE_AUTH_SECRET || 'dev-secret-key',
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
