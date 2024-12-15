/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  root: './',
  publicDir: './src/assets',

  test: {
    setupFiles: ['./vitest.setup.ts'],
    environment: 'happy-dom',
    coverage: {
      provider: 'v8',
      reporter: ['default', 'text', 'json', 'html'],
    },
  },

  plugins: [
    react()
  ],
})
