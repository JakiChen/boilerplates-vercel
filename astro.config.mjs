// @ts-check
import { defineConfig } from 'astro/config';

import { env, vite } from './config';
import { storyblok, sitemap, robots } from './config/integrations';

console.log((await import('./config/vercel/server')).default)

// https://astro.build/config
export default defineConfig({
  site: env.SITE_URL,
  //
  scopedStyleStrategy: 'attribute',
  build: {
    inlineStylesheets: 'never',
    assets: '_app',
    format: 'file',
    // assetsPrefix: env.SITE_URL
  },
  image: {
    domains: ['a.storyblok.com'],
  },
  //
  i18n: {
    locales: ['en', 'zh-CN'],
    defaultLocale: 'zh-CN',
  },
  //
  vite,
  //
  ...(await import('./config/vercel/server')).default,
  //
  integrations: [
    storyblok,
    robots,
    sitemap,
  ]
});