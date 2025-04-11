// Placeholder for Payload CMS integration
// This stub implementation provides the expected function signatures
// but returns dummy data to allow the build to complete

import { PayloadGallery, PayloadPost } from '../types/payload';

/**
 * Get a gallery by its slug
 */
export async function getGalleryBySlug(slug: string, lang: string = 'en-US'): Promise<PayloadGallery | null> {
  console.log(`[Stub] getGalleryBySlug called with slug: ${slug}, lang: ${lang}`);
  // Return a dummy gallery object
  return {
    id: `gallery-${slug}`,
    title: `Gallery: ${slug}`,
    slug: slug,
    description: [],
    images: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

/**
 * Get all published galleries
 */
export async function getPublishedGalleries(lang: string = 'en-US', limit: number = 10, page: number = 1) {
  console.log(`[Stub] getPublishedGalleries called with lang: ${lang}, limit: ${limit}, page: ${page}`);
  // Return a dummy pagination result with empty galleries
  return {
    docs: [] as PayloadGallery[],
    totalDocs: 0,
    limit: limit,
    totalPages: 0,
    page: page,
    pagingCounter: 0,
    hasPrevPage: false,
    hasNextPage: false,
    prevPage: null,
    nextPage: null
  };
}

/**
 * Get all published posts
 */
export async function getPublishedPosts(lang: string = 'en-US', limit: number = 10, page: number = 1) {
  console.log(`[Stub] getPublishedPosts called with lang: ${lang}, limit: ${limit}, page: ${page}`);
  // Return a dummy pagination result with empty posts
  return {
    docs: [] as PayloadPost[],
    totalDocs: 0,
    limit: limit,
    totalPages: 0,
    page: page,
    pagingCounter: 0,
    hasPrevPage: false,
    hasNextPage: false,
    prevPage: null,
    nextPage: null
  };
}

/**
 * Get a post by its slug
 */
export async function getPostBySlug(slug: string, lang: string = 'en-US'): Promise<PayloadPost | null> {
  console.log(`[Stub] getPostBySlug called with slug: ${slug}, lang: ${lang}`);
  // Return a dummy post object
  return {
    id: `post-${slug}`,
    title: `Post: ${slug}`,
    slug: slug,
    content: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}
