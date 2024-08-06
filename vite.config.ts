import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@button': fileURLToPath(new URL('./src/components/button', import.meta.url)),
      '@card': fileURLToPath(new URL('./src/components/card', import.meta.url)),
      '@select': fileURLToPath(new URL('./src/components/select', import.meta.url)),
    },
  },
})
