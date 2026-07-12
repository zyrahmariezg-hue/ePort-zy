import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // GitHub Pages serves this project from /ePort-zy/, not the domain root.
  base: '/ePort-zy/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
