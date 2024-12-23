// @ts-check
import sitemap from '@astrojs/sitemap';

export default sitemap({
  // xslURL: '/sitemap.xsl',
  changefreq: 'yearly',
  priority: 0.9,
  lastmod: new Date(),
  i18n: {
    defaultLocale: 'cn',
    locales: {
      cn: 'zh-CN',
      en: 'en-GB',
    },
  },
  serialize(item) {
    if (/exclude-from-sitemap/.test(item.url)) {
      return undefined;
    }
    if (/no-javascript/.test(item.url)) {
      // @ts-ignore
      item.changefreq = 'daily';
      item.lastmod = new Date().toDateString();
      item.priority = 0.8;
    }
    return item;
  },
});
