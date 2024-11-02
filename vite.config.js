import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  root: '.', 
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), 
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html', 
    },
  },
  server: {
    open: '/index.html', 
  },
})
