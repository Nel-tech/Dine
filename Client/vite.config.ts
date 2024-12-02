import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Adjust if you're deploying to a subdirectory
  build: {
    outDir: 'dist', // Output directory
  },
});
