import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'ui-kit',
    },
    rollupOptions: {
      external: ['vue', 'autoprefixer', 'postcss', 'tailwindcss'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@button': fileURLToPath(new URL('./src/components/button', import.meta.url)),
      '@calendar': fileURLToPath(new URL('./src/components/calendar', import.meta.url)),
      '@card': fileURLToPath(new URL('./src/components/card', import.meta.url)),
      '@input': fileURLToPath(new URL('./src/components/input', import.meta.url)),
      '@select': fileURLToPath(new URL('./src/components/select', import.meta.url)),
      '@transition': fileURLToPath(new URL('./src/components/transition', import.meta.url)),
    },
  },
})
