import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Dev-only: forwards /api/* to the Task 7.1 backend (server/index.js,
    // default port 4000) so the Contact form can fetch('/api/enquiry') with
    // no hardcoded host. In production the static build and the API are
    // expected to share an origin (see server/.env.example ALLOWED_ORIGIN
    // and the deployment notes in the dev plan), so the same relative path
    // works there without this proxy.
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
    },
  },
})
