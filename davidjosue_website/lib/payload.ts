// /lib/payload.ts
import { PayloadCollectionResponse, PayloadPost, PayloadGallery, PayloadMedia } from '../types/payload.js';

// Debug environment variables
console.log('Environment variables check:', {
  PAYLOAD_API_URL: process.env.PAYLOAD_API_URL || 'Not defined',
  NODE_ENV: process.env.NODE_ENV || 'Not defined'
});

// For client-side API calls
const PAYLOAD_API_URL = process.env.PAYLOAD_API_URL || 'http://localhost:3000';
const PAYLOAD_API_KEY = process.env.PAYLOAD_API_KEY;

interface FetchOptions extends RequestInit {
  // Add any custom options if needed
}

async function fetchPayloadAPI<T>(
  endpoint: string,
  options: FetchOptions = {},
  locale?: string // Optional locale parameter
): Promise<T> {
  if (!PAYLOAD_API_URL) {
    throw new Error("PAYLOAD_API_URL environment variable is not set.");
  }

  const url = new URL(`${PAYLOAD_API_URL}/api${endpoint}`); // Standard Payload API path

  // Add locale parameter if provided
  if (locale) {
    url.searchParams.append('locale', locale);
    // Payload specific: often need fallback locale for shared content
    url.searchParams.append('fallback-locale', 'none'); // Adjust as needed
  }

  const mergedOptions: RequestInit = {
    method: options.method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(PAYLOAD_API_KEY && { 'Authorization': `api-key ${PAYLOAD_API_KEY}` }), // Use 'api-key' or 'Bearer' based on Payload config
      ...options.headers,
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
    cache: 'no-store', // Default to no cache, or configure revalidation
    // next: { revalidate: 60 } // Example ISR revalidation (adjust as needed)
    ...options,
  };

  try {
    const response = await fetch(url.toString(), mergedOptions);

    if (!response.ok) {
      console.error(`Payload API Error: ${response.status} ${response.statusText}`, await response.text());
      throw new Error(`Failed to fetch from Payload API: ${response.statusText}`);
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching from Payload API:", error);
    throw error; // Re-throw the error for calling function to handle
  }
}

// Example: Get published posts with pagination and locale
export async function getPublishedPosts(
  locale: string,
  limit: number = 10,
  page: number = 1,
  sort: string = '-publishedDate' // Default sort by newest
): Promise<PayloadCollectionResponse<PayloadPost>> {
  const endpoint = `/posts?where[status][equals]=published&limit=${limit}&page=${page}&sort=${sort}&depth=1`; // depth=1 to populate featuredImage
  return fetchPayloadAPI<PayloadCollectionResponse<PayloadPost>>(endpoint, {}, locale);
}

// Example: Get a single published post by slug and locale
export async function getPostBySlug(slug: string, locale: string): Promise<PayloadPost | null> {
    // Example uses `where` clause. Adjust if slug is unique across locales differently.
    const endpoint = `/posts?where[slug][equals]=${slug}&where[status][equals]=published&limit=1&depth=2`; // depth=2 for more nested data if needed
    try {
        const response = await fetchPayloadAPI<PayloadCollectionResponse<PayloadPost>>(endpoint, {}, locale);
        if (response.docs && response.docs.length > 0) {
            // Ensure it matches the requested locale if Payload returns fallbacks
            const matchingDoc = response.docs.find((doc: any) => !doc.locale || doc.locale === locale); // Handle case where locale might not be set on older items
            return matchingDoc || response.docs[0]; // Fallback to first if exact locale not found but slug matches
        }
        return null;
    } catch (error) {
        console.error(`Error fetching post by slug "${slug}":`, error);
        return null;
    }
}

// Add functions for categories, tags, testimonials, homepage global etc. as needed

// === ADD THESE FUNCTIONS INSIDE /lib/payload.ts ===

// Function to get published portfolio galleries
export async function getPublishedGalleries(
  locale: string,
  limit: number = 20,
  page: number = 1
): Promise<PayloadCollectionResponse<PayloadGallery>> {
  const endpoint = `/galleries?where[status][equals]=published&limit=${limit}&page=${page}&sort=-updatedAt&depth=1`; // depth=1 for featuredImage
  // Note: Replace '/galleries' with your actual Payload collection slug
  return fetchPayloadAPI<PayloadCollectionResponse<PayloadGallery>>(endpoint, {}, locale);
}

// Function to get a single published gallery by slug
export async function getGalleryBySlug(slug: string, locale: string): Promise<PayloadGallery | null> {
  const endpoint = `/galleries?where[slug][equals]=${slug}&where[status][equals]=published&limit=1&depth=2`; // depth=2 to populate images array
  // Note: Replace '/galleries' with your actual Payload collection slug
  try {
    const response = await fetchPayloadAPI<PayloadCollectionResponse<PayloadGallery>>(endpoint, {}, locale);
    if (response.docs && response.docs.length > 0) {
         const matchingDoc = response.docs.find((doc: any) => !doc.locale || doc.locale === locale);
         return matchingDoc || response.docs[0];
    }
    return null;
  } catch (error) {
    console.error(`Error fetching gallery by slug "${slug}":`, error);
    return null;
  }
}

// Function to get media items based on tags (Example - Requires Payload tag setup)
// This is a conceptual placeholder - actual implementation depends heavily on Payload setup
// (e.g., using relationships or a dedicated tagging field)
export async function getMediaByTags(
    tags: string[], // Array of tag slugs to match (e.g., ['wedding', 'tulum'])
    limit: number = 12
): Promise<PayloadMedia[]> {
    // Construct the 'where' query dynamically for multiple tags (AND condition)
    const whereClauses = tags.map(tag => `[tags][slug][equals]=${tag}`).join('&'); // Adjust 'tags.slug' based on your field name and structure
    const endpoint = `/media?${whereClauses}&limit=${limit}&depth=0`; // depth=0 as we just need media items

    console.warn(`[getMediaByTags Placeholder] Fetching media with query: ${endpoint}. Actual implementation needed.`);

    // Placeholder: Return empty array - Replace with actual fetchPayloadAPI call
    // try {
    //    const response = await fetchPayloadAPI<PayloadCollectionResponse<PayloadMedia>>(endpoint);
    //    return response.docs;
    // } catch (error) {
    //    console.error("Error fetching media by tags:", error);
    //    return [];
    // }
    return []; // Return empty array for now
}


// === END OF FUNCTIONS TO ADD ===
