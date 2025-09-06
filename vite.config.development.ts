import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// Development-specific Vite configuration
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        port: 3000,
        host: true,
        open: true,
    },
    build: {
        sourcemap: true,
        minify: false,
        rollupOptions: {
            output: {
                manualChunks: undefined,
            },
        },
    },
    define: {
        __APP_VERSION__: JSON.stringify('1.0.0-dev'),
        __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
    },
})
