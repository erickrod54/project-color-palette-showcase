import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';
import BasicSsl from '@vitejs/plugin-basic-ssl';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Add it to the plugins array
    BasicSsl()
  ],
  server: {
    host: true,
    port: 5174, // Opcional, para asegurar el puerto
    https:true
  }
})