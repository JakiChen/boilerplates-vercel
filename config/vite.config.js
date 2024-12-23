// @ts-check
import { defineConfig } from 'vite';

import glsl from 'vite-plugin-glsl';

export default defineConfig({
  server: {
    https: {
      key: 'config/certs/server.key',
      cert: 'config/certs/server.crt',
      ca: 'config/certs/rootCA.crt',
    },
  },
  // https://vitejs.dev/config/shared-options#css-preprocessoroptions
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // or "modern"
      },
    },
  },
  //
  build: {
    rollupOptions: {
      // https://cn.rollupjs.org/configuration-options/#output-assetfilenames
      output: {
        // entryFileNames: 'assets/js/[name].[hash].js',
        // assetFileNames: 'assets/[ext]/main.[hash:5][extname]',
        // manualChunks(id) {
        //   if (id.includes('node_modules')) {
        //     const libraries = {
        //       dayjs: 'dayjs',
        //       'focus-trap': 'focus-trap',
        //       gsap: 'gsap',
        //       'locomotive-scroll': 'lenis',
        //       'lottie-web': 'lottie-web',
        //       modujs: 'vendors',
        //       modularload: 'vendors',
        //       svg4everybody: 'vendors',
        //       tabbable: 'tabbable',
        //       three: 'three',
        //     };

        //     for (const lib in libraries) {
        //       if (id.includes(lib)) {
        //         return `chunks/${libraries[lib]}`;
        //       }
        //     }
        //   }
        // },
      },
    },
  },
  //
  plugins: [
    /**
     * Import, inline (and compress) GLSL shader files
     * https://www.npmjs.com/package/vite-plugin-glsl
     * Default Options
     */
    glsl({
      include: [
        // Glob pattern, or array of glob patterns to import
        '**/*.glsl',
        '**/*.wgsl',
        '**/*.vert',
        '**/*.frag',
        '**/*.vs',
        '**/*.fs',
      ],
      exclude: undefined, // Glob pattern, or array of glob patterns to ignore
      warnDuplicatedImports: true, // Warn if the same chunk was imported multiple times
      defaultExtension: 'glsl', // Shader suffix when no extension is specified
      compress: true, // Compress output shader code, default `false`
      watch: true, // Recompile shader on change
      root: '/', // Directory for root imports
    }),
  ],
});
