import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@scss', replacement: fileURLToPath(new URL('./src/scss', import.meta.url)) },
      { find: '@modules', replacement: fileURLToPath(new URL('./src/modules', import.meta.url)) },
    ],
  },
})
