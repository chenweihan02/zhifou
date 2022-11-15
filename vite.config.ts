import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// import { fileURLToPath, URL } from 'node:url'
// const path = require('path')
import path from 'path'
// import jsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // jsx()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '*': path.resolve('')
    }
  },
  server: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8081',
        changeOrigin: false
      }
    }
  }
})
