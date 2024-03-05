import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // keep in alphabetical order
      '~components': '/src/components',
      '~utils': '/src/utils'
    }
  }
});
