import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 3000,
  },
  css:{
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/scss/common" as *;`,
      },
    },
  },
})
