import { defineConfig } from 'vite';

export default defineConfig({
  base: '/client/', // Base URL matches the subdirectory
  build: {
    outDir: 'dist',
  },
  publicDir: 'public',
});
