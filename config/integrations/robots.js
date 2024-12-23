// @ts-check
import robots from 'astro-robots';

export default robots({
  policy: [
    {
      userAgent: [
        'Baiduspider',
        'Googlebot',
        '360Spider',
        'bingbot',
        'Yandex',
      ],
      disallow: ['/admin', '/login'],
      crawlDelay: 5,
    },
    {
      userAgent: '*',
      allow: '/',
      disallow: '/editor.html',
    },
  ],
});
