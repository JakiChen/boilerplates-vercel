import { useStoryblokApi } from '@storyblok/astro';
import type { ISbStory, ISbStories, ISbStoryParams, ISbStoriesParams, ISbCustomFetch, ISbResult } from 'storyblok-js-client';

const version = import.meta.env.DEV ? 'draft' : 'published';

export async function get(slug: string, params?: ISbStoriesParams, fetchOptions?: ISbCustomFetch): Promise<ISbResult> {
    const storyblokApi = useStoryblokApi();
    try {
        const data = await storyblokApi.get(slug, {
            version: version,
            ...params
        }, fetchOptions);
        return data;
    } catch (error) {
        console.error(`Error fetching data for slug: ${slug}`, error);
        throw new Error('Failed to fetch data.');
    }
}

export async function getAll(slug: string, params?: ISbStoriesParams, entity?: string, fetchOptions?: ISbCustomFetch): Promise<any[]> {
    const storyblokApi = useStoryblokApi();
    try {
        const data = await storyblokApi.getAll(slug, {
            version: version,
            ...params,
        }, entity, fetchOptions);
        return data;
    } catch (error) {
        console.error(`Error fetching all data for slug: ${slug}`, error);
        throw new Error('Failed to fetch all data.');
    }
}

export async function getStory(slug: string, params?: ISbStoryParams, fetchOptions?: ISbCustomFetch): Promise<ISbStory> {
    const storyblokApi = useStoryblokApi();
    try {
        const data = await storyblokApi.getStory(slug, {
            version: version,
            ...params,
        }, fetchOptions);
        return data;
    } catch (error) {
        console.error(`Error fetching story for slug: ${slug}`, error);
        throw new Error('Failed to fetch story.');
    }
}

export async function getStories(params?: ISbStoriesParams, fetchOptions?: ISbCustomFetch): Promise<ISbStories> {
    const storyblokApi = useStoryblokApi();
    try {
        const data = await storyblokApi.getStories({
            version: version,
            ...params
        }, fetchOptions);
        return data;
    } catch (error) {
        console.error('Error fetching stories', error);
        throw new Error('Failed to fetch stories.');
    }
}
