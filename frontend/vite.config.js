import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ['axios', 'react-router-dom'],
  }, build: {
    rollupOptions: {
      external: ['axios', 'react-toastify', 'react-router-dom'], // Ensure axios is included correctly
    },
  },
  server: { port: 5173 }

})
