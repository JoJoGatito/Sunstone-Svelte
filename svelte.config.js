import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  
  kit: {
    adapter: adapter({
      // defaults to process.env.PORT or 3000
      out: 'build'
    }),
    // If you are using a custom domain, you might want to set this
    // paths: {
    //   base: process.env.NODE_ENV === 'production' ? '' : ''
    // }
  }
};

export default config;