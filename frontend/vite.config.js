import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/exercises': 'http://localhost:3000',
      '/generateVote': 'http://localhost:3000',
      '/votes': 'http://localhost:3000'
    }
  }
})
