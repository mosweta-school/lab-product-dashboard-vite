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
