import { developmentConfig } from './environments/development'
import { stagingConfig } from './environments/staging'
import { productionConfig } from './environments/production'

export type Environment = 'development' | 'staging' | 'production'

export type AppConfig =
    | typeof developmentConfig
    | typeof stagingConfig
    | typeof productionConfig

const getEnvironment = (): Environment => {
    const env = import.meta.env.VITE_APP_ENVIRONMENT || import.meta.env.MODE

    if (env === 'development' || env === 'dev') return 'development'
    if (env === 'staging' || env === 'stage') return 'staging'
    if (env === 'production' || env === 'prod') return 'production'

    // Default fallback
    return 'development'
}

const configs = {
    development: developmentConfig,
    staging: stagingConfig,
    production: productionConfig,
}

export const getConfig = (): AppConfig => {
    const environment = getEnvironment()
    return configs[environment]
}

export const config = getConfig()
export default config
