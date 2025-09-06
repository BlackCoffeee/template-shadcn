import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// Staging-specific Vite configuration
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
    },
    build: {
        sourcemap: true,
        minify: 'terser',
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                    ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog'],
                },
            },
        },
    },
    define: {
        __APP_VERSION__: JSON.stringify('2.0.0-beta'),
        __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
    },
})
