import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': {}
  },
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: { target: 'ESNext' },
  optimizeDeps: {
    esbuildOptions: { target: 'ESNext', supported: { bigint: true } }
  },
  plugins: [react()],
  server: {
    port: 7777
  }
});
