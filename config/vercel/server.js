// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    isr: {
      // 在首次请求时缓存所有页面，并保存 1 天
      expiration: 60 * 60 * 24,
    },
  }),
});
