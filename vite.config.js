import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';
import BasicSsl from '@vitejs/plugin-basic-ssl';
import { fileURLToPath } from 'url';
import path from 'path';

// Define __dirname manualmente para ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Add it to the plugins array
    BasicSsl()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Configura el alias @
    },
  },
  server: {
    host: true,
    port: 5174, // Opcional, para asegurar el puerto
    https:true
  }
})