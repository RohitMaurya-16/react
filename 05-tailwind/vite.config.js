import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' 
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})

/* In the vite.config.js when we use any new library we need to conmfig that library in this file to make it work on you project.
 */