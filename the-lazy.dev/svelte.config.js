import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    handleHttpError: ({ path, referrer, message }) => {
      if (path.includes('static')) return;
      
      throw new Error(message);
    }
  },
  preprocess: vitePreprocess()
};
export default config;