import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import path from 'path'; // Not needed for simple alias

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  resolve: {
    alias: {
      '@': './src', // Use string path for alias
    },
  },
  assetsInclude: ['**/*.JPG'],
});
// If you get errors about __dirname or path, use string alias as above for Windows compatibility.