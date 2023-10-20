import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import VitePluginAlias from 'vite-plugin-alias';

export default defineConfig({
  cacheDir: './node_modules/.vite/boodi',

  server: {
    port: 8888,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    react(),
    nxViteTsPaths(),
    // VitePluginAlias({
    //   entries: [
    //     {
    //       find: '@boodi/colors',
    //       replacement: path.resolve(
    //         __dirname,
    //         '../boodi/src/app/styles/_colors.scss'
    //       ),
    //     },
    //   ],
    // }),
  ],

  test: {
    globals: true,
    cache: { dir: '../../node_modules/.vitest' },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
