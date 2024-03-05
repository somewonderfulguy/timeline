import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // keep in alphabetical order
      '~api': '/src/api',
      '~components': '/src/components',
      '~contexts': '/src/contexts',
      '~utils': '/src/utils'
    }
  }
});
