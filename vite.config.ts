import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// User site (username.github.io) is served from the domain root.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
