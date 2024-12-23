import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = (ctx, next) => {
    ctx.locals.seo = {
        title: 'Astro Basics',
        description: 'The boilerplate for astro project with Storyblok CMS.',
        // site: "@你的Twitter账号",
        // creator: "@ACPAMOY"
    };

    return next();
};
