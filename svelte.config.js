import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte'],
    preprocess: [vitePreprocess()],
    
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: 'index.html'
        }),
        paths: {
            base: '/bemo'
        },
        prerender: {
            handleHttpError: ({ path, referrer, message }) => {
                // Ignore 404s for the root path
                if (path === '/' || path === '/bemo/') {
                    return;
                }
                throw new Error(message);
            }
        }
    }
};

export default config;