import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  
  // If you're having issues with HMR, you can add the following
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..'],
    },
  },
  
  // Optimizations for production builds
  build: {
    target: 'esnext',
    minify: true,
  }
});