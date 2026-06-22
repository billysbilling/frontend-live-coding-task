/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    server: {
      deps: {
        // Required for MUI to work correctly in jsdom test environment
        inline: ['@mui/material', 'react-transition-group'],
      },
    },
  },
})
