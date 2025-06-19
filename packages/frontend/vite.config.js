import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // 1. Import the 'path' module

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 2. Use path.resolve to create a correct alias
      '@': path.resolve(__dirname, './src'),
    },
  },
});