import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export const alias = {
  // keep in alphabetical order
  '~api': '/src/api',
  '~components': '/src/components',
  '~contexts': '/src/contexts',
  '~hooks': '/src/hooks',
  '~tests': '/src/tests',
  '~utils': '/src/utils'
};

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias
  }
});
