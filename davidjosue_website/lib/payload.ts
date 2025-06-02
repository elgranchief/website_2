// Placeholder for Payload CMS integration
// This stub implementation provides the expected function signatures
// but returns dummy data to allow the build to complete

import { StaticGallery, StaticBlogPost } from '../types/static-content'; // Use static types for stub

/**
 * Get a gallery by its slug
 */
export async function getGalleryBySlug(slug: string, lang: string = 'en-US'): Promise<StaticGallery | null> {
  console.log(`[Stub] getGalleryBySlug called with slug: ${slug}, lang: ${lang}`);
  // Return a dummy gallery object
  // Return a dummy gallery object matching StaticGallery structure (partially)
  return {
    id: `gallery-${slug}`,
    title: `Gallery: ${slug}`,
    slug: slug,
    // description: [], // StaticGallery doesn't have description array
    featuredImage: { id: 'dummy', url: '/placeholder.jpg' }, // Add required featuredImage
    images: [], // StaticGallery expects StaticImage[]
    // createdAt: new Date().toISOString(), // Not in StaticGallery
    // updatedAt: new Date().toISOString(), // Not in StaticGallery
  };
}

/**
 * Get all published galleries
 */
export async function getPublishedGalleries(lang: string = 'en-US', limit: number = 10, page: number = 1) {
  console.log(`[Stub] getPublishedGalleries called with lang: ${lang}, limit: ${limit}, page: ${page}`);
  // Return a dummy pagination result with empty galleries
  return {
    docs: [] as StaticGallery[],
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
    docs: [] as StaticBlogPost[],
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
export async function getPostBySlug(slug: string, lang: string = 'en-US'): Promise<StaticBlogPost | null> {
  console.log(`[Stub] getPostBySlug called with slug: ${slug}, lang: ${lang}`);
  // Return a dummy post object
  // Return a dummy post object matching StaticBlogPost structure (partially)
  return {
    id: `post-${slug}`,
    title: `Post: ${slug}`,
    slug: slug,
    content: '', // StaticBlogPost expects string content
    featuredImage: { id: 'dummy', url: '/placeholder.jpg' }, // Add required featuredImage
    date: new Date().toISOString().split('T')[0], // Add required date
    // createdAt: new Date().toISOString(), // Not in StaticBlogPost
    // updatedAt: new Date().toISOString(), // Not in StaticBlogPost
  };
}
