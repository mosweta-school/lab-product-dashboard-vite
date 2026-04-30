import { defineConfig } from 'vite' // 👈 This line was missing or broken
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    // Add this to help Vitest find the dependency in restricted environments
    deps: {
      inline: [/jsdom/],
    },
  },
})
