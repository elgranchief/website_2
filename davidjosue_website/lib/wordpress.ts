// WordPress API Client for NextJS
import { formatISO, parseISO } from 'date-fns';

export interface WPMediaDetails {
  file: string;
  width: number;
  height: number;
  sizes: {
    [key: string]: {
      file: string;
      width: number;
      height: number;
      mime_type: string;
      source_url: string;
    };
  };
}

export interface WPFeaturedMedia {
  id: number;
  source_url: string;
  alt_text?: string;
  media_details?: WPMediaDetails;
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count?: number;
  description?: string;
  link?: string;
}

export interface WPTag {
  id: number;
  name: string;
  slug: string;
}

export interface WPAuthor {
  id: number;
  name: string;
  url?: string;
  description?: string;
  avatar_urls?: {
    [key: string]: string;
  };
}

export interface WPPost {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  date: string;
  modified: string;
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: WPFeaturedMedia[];
    'wp:term'?: Array<WPCategory[] | WPTag[]>;
    author?: WPAuthor[];
  };
  categories?: number[];
  tags?: number[];
  status: string;
  link: string;
}

export interface WPPostsResponse {
  posts: WPPost[];
  totalPages: number;
  page: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

// Convert WordPress posts to a format similar to our Payload format
export interface AdaptedPost {
  id: string;
  title: string;
  slug: string;
  status: string;
  publishedDate: string;
  content: string;
  excerpt?: string;
  featuredImage?: {
    id: string;
    url: string;
    alt?: string;
    width?: number;
    height?: number;
  };
  categories?: {
    id: string;
    name: string;
    slug: string;
  }[];
  tags?: {
    id: string;
    name: string;
    slug: string;
  }[];
  author?: {
    id: string;
    name: string;
    avatar?: string;
  };
}

const WP_API_URL = process.env.WORDPRESS_API_URL || 'https://your-wordpress-site.com/wp-json/wp/v2';

/**
 * Get posts from WordPress with proper pagination and embedding
 */
export async function getWordPressPosts(
  lang: string = 'en-US',
  perPage: number = 10,
  page: number = 1,
  categories?: number[],
  tags?: number[]
): Promise<WPPostsResponse> {
  // Build the query parameters
  const params = new URLSearchParams({
    per_page: perPage.toString(),
    page: page.toString(),
    _embed: 'true', // Embed featured media, terms, and authors
    orderby: 'date',
    order: 'desc',
    status: 'publish',
  });

  // Add language parameter
  if (lang === 'es-MX') {
    params.append('lang', 'es'); // Assuming WordPress uses 'es' for Spanish
  }

  // Add categories if provided
  if (categories && categories.length > 0) {
    params.append('categories', categories.join(','));
  }

  // Add tags if provided
  if (tags && tags.length > 0) {
    params.append('tags', tags.join(','));
  }

  try {
    // Fetch posts from WordPress
    const response = await fetch(`${WP_API_URL}/posts?${params.toString()}`, {
      headers: {
        'Accept': 'application/json',
      },
      next: { revalidate: 60 }, // Cache for 1 minute
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch WordPress posts: ${response.status} ${response.statusText}`);
    }

    const posts: WPPost[] = await response.json();
    
    // Get the total number of pages from the headers
    const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1', 10);
    
    return {
      posts,
      totalPages,
      page,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1
    };
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    throw error;
  }
}

/**
 * Get a single post by slug
 */
export async function getWordPressPostBySlug(slug: string, lang: string = 'en-US'): Promise<WPPost | null> {
  const params = new URLSearchParams({
    slug,
    _embed: 'true',
    status: 'publish',
  });

  // Add language parameter
  if (lang === 'es-MX') {
    params.append('lang', 'es');
  }

  try {
    const response = await fetch(`${WP_API_URL}/posts?${params.toString()}`, {
      headers: {
        'Accept': 'application/json',
      },
      next: { revalidate: 60 }, // Cache for 1 minute
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch WordPress post: ${response.status} ${response.statusText}`);
    }

    const posts: WPPost[] = await response.json();
    
    // Return the first post that matches the slug (should only be one)
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error(`Error fetching WordPress post with slug "${slug}":`, error);
    return null;
  }
}

/**
 * Adapt WordPress post to our internal format
 */
export function adaptWordPressPost(wpPost: WPPost): AdaptedPost {
  // Extract featured image if available
  const featuredMedia = wpPost._embedded?.['wp:featuredmedia']?.[0];
  const featuredImage = featuredMedia ? {
    id: featuredMedia.id.toString(),
    url: featuredMedia.source_url,
    alt: featuredMedia.alt_text || '',
    width: featuredMedia.media_details?.width,
    height: featuredMedia.media_details?.height
  } : undefined;

  // Extract categories if available
  const categoryTerms = wpPost._embedded?.['wp:term']?.[0] as WPCategory[] | undefined;
  const categories = categoryTerms?.map(cat => ({
    id: cat.id.toString(),
    name: cat.name,
    slug: cat.slug
  }));

  // Extract tags if available
  const tagTerms = wpPost._embedded?.['wp:term']?.[1] as WPTag[] | undefined;
  const tags = tagTerms?.map(tag => ({
    id: tag.id.toString(),
    name: tag.name,
    slug: tag.slug
  }));

  // Extract author if available
  const wpAuthor = wpPost._embedded?.author?.[0];
  const author = wpAuthor ? {
    id: wpAuthor.id.toString(),
    name: wpAuthor.name,
    avatar: wpAuthor.avatar_urls?.['96'] // Use medium-sized avatar
  } : undefined;

  // Clean up the excerpt (remove HTML tags and unwrap from p tags)
  const excerpt = wpPost.excerpt.rendered
    .replace(/<\/?p>/g, '')
    .replace(/<\/?[^>]+(>|$)/g, "")
    .trim();

  return {
    id: wpPost.id.toString(),
    title: wpPost.title.rendered,
    slug: wpPost.slug,
    status: wpPost.status,
    publishedDate: wpPost.date,
    content: wpPost.content.rendered,
    excerpt,
    featuredImage,
    categories,
    tags,
    author
  };
}

/**
 * Get and adapt WordPress posts to match our expected format
 */
export async function getPublishedWordPressPosts(
  lang: string = 'en-US',
  limit: number = 10,
  page: number = 1
): Promise<{ 
  docs: AdaptedPost[],
  totalPages: number,
  page: number,
  hasNextPage: boolean,
  hasPrevPage: boolean
}> {
  try {
    const { posts, totalPages, page: currentPage, hasNextPage, hasPrevPage } = 
      await getWordPressPosts(lang, limit, page);
    
    // Adapt each post to our internal format
    const adaptedPosts = posts.map(adaptWordPressPost);
    
    return {
      docs: adaptedPosts,
      totalPages,
      page: currentPage,
      hasNextPage,
      hasPrevPage
    };
  } catch (error) {
    console.error('Error fetching and adapting WordPress posts:', error);
    throw error;
  }
}

/**
 * Get and adapt a single WordPress post by slug
 */
export async function getPublishedWordPressPostBySlug(
  slug: string,
  lang: string = 'en-US'
): Promise<AdaptedPost | null> {
  try {
    const post = await getWordPressPostBySlug(slug, lang);
    return post ? adaptWordPressPost(post) : null;
  } catch (error) {
    console.error(`Error fetching and adapting WordPress post with slug "${slug}":`, error);
    return null;
  }
}
