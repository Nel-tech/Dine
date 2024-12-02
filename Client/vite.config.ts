import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html', // Ensure the correct entry point
    },
  },
});
