import adapter from '@sveltejs/adapter-auto';
import adapterstatic from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    postcss: {
      plugins: [autoprefixer()]
    }
  }),

  kit: {
    adapter: adapterstatic({
      pages: 'public',
      assets: 'public',
    }),

    vite: {
      resolve: {
        alias: {
          $sections: path.resolve('./src/sections'),
          $routes: path.resolve('./src/routes'),
          $interactions: path.resolve('./src/interactions'),
          $store: path.resolve('./src/store')
        }
      }
    },
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',

    // Override http methods in the Todo forms
    methodOverride: {
      allowed: ['PATCH', 'DELETE']
    }
  }
};

export default config;
