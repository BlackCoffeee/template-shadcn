export const stagingConfig = {
    app: {
        name: 'Template Shadcn v2',
        version: '2.0.0-beta',
        environment: 'staging',
    },
    api: {
        baseUrl: 'https://staging-api.yourdomain.com/api',
        timeout: 15000,
    },
    auth: {
        secret: process.env.VITE_AUTH_SECRET || 'staging-secret-key',
        jwtExpiresIn: '3d',
    },
    features: {
        analytics: true,
        debug: true,
        maintenance: false,
    },
    build: {
        target: 'staging',
        sourceMap: true,
    },
} as const
