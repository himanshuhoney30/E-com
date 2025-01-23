import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Automatically open the browser on `vite dev`
  },
  build: {
    outDir: 'dist', // The output directory for the build
  },
  resolve: {
    alias: {
      '@': '/src', // Optional: Define aliases for better import paths
    },
  },
  // Configure fallback for SPA routing
  server: {
    historyApiFallback: true, // Ensure Vite serves `index.html` for all unknown routes
  },
});
