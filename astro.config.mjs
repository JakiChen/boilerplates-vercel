// @ts-check
import { defineConfig } from 'astro/config';

import { env, vite } from './config';
import { favicons, storyblok, sitemap, robots } from './config/integrations';

// https://astro.build/config
export default defineConfig({
  site: env.SITE_URL,
  trailingSlash: 'ignore',
  //
  ...(await import('./config/vercel/server')).default,
  //
  vite,
  integrations: [
    favicons,
    storyblok,
    robots,
    sitemap,
  ],
  //
  compressHTML: import.meta.env.PROD,
  scopedStyleStrategy: 'attribute',
  security: {
    checkOrigin: true,
  },
  build: {
    format: 'file',
    inlineStylesheets: 'never',
    assets: '_app',
    // assetsPrefix: env.SITE_URL
  },
  image: {
    domains: ['a.storyblok.com'],
  },
  //
  i18n: {
    locales: ['zh-CN', 'zh-HK', 'en'], defaultLocale: 'zh-CN'
  },
});