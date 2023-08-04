import adapter from "@bun-community/sveltekit-adapter-bun";
import adapter_auto from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: process.env.VERCEL_ENV === 'production'
      ? adapter_auto()
      : adapter({
        dynamic_origin: true,
      })
  },
};

export default config;
