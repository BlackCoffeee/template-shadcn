import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// Production-specific Vite configuration
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        sourcemap: false,
        minify: 'terser',
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                    ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog'],
                    router: ['react-router-dom'],
                    charts: ['recharts'],
                },
            },
        },
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
    },
    define: {
        __APP_VERSION__: JSON.stringify('2.0.0'),
        __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
    },
})
