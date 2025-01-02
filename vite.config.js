import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/assets': '/src/assets',
      '@/constant': '/src/constant',
      '@/componant': '/src/componant',
      '@/comman': '/src/comman',
    },
  },
})
