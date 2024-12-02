import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // Output directory for the build files
    rollupOptions: {
      input: 'index.html', // Ensure the correct entry point for Vite
    },
  },
});
