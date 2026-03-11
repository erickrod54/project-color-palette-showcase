import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Add it to the plugins array
  ],
  server: {
    host: true,
    port: 5174, // Opcional, para asegurar el puerto
  }
})