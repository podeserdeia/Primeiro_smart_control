import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Primeiro_smart_control/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
