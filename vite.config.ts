import {defineConfig} from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@data': path.resolve(__dirname, 'src/data'),
      '@entities': path.resolve(__dirname, 'src/entities'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@stores': path.resolve(__dirname, 'src/stores'),
    }
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
})
