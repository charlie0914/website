    // @ts-check
    import { defineConfig } from 'astro/config';

    import tailwindcss from '@tailwindcss/vite';

    // https://astro.build/config
    export default defineConfig({

      site: 'https://charlieliao.taipei',

      // Old page URLs now point to sections of the one-page site
      redirects: {
        '/about': '/#about',
        '/pastwork': '/#pastwork',
        '/contact': '/#contact'
      },

      vite: {
        plugins: [tailwindcss()]
      }
      
    });