// /types/payload.ts

// Basic interface for a Media object from Payload
export interface PayloadMedia {
  id: string;
  alt?: string | null; // Ensure alt text is included
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  url?: string | null; // The direct URL to the image
  // Add other fields Payload provides for media if needed
}

// Basic interface for a Post object from Payload
export interface PayloadPost {
  id: string;
  title: string; // Assuming localized fields are flattened by API or fetched specifically
  slug: string;
  status: 'draft' | 'published';
  publishedDate?: string | null;
  // author?: User; // Define User interface if needed
  featuredImage?: PayloadMedia | string | null; // Can be ID or populated object
  content?: any | null; // Lexical rich text JSON structure
  excerpt?: string | null;
  metaTitle?: string | null;
  metaDescription?: string | null;
  // categories?: Category[]; // Define Category interface if needed
  // tags?: Tag[]; // Define Tag interface if needed
  createdAt: string;
  updatedAt: string;
  locale?: 'en-US' | 'es-MX'; // If locale is part of the response
}

// Interface for the typical API response structure for collections
export interface PayloadCollectionResponse<T> {
  docs: T[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

// Add other interfaces as needed (Category, Tag, User, Testimonial, etc.)

// Interface for Portfolio Galleries
export interface PayloadGallery {
  id: string;
  title: string; // Localized
  slug: string; // Localized
  featuredImage?: PayloadMedia | string | null;
  description?: any | null; // Rich Text or Textarea, Localized
  images?: (PayloadMedia | string)[]; // Array of Media objects or IDs
  // Add relatedService, relatedDestination if using relationships
  status?: 'draft' | 'published';
  locale?: 'en-US' | 'es-MX';
  updatedAt?: string;
  // Add meta fields if needed
  metaTitle?: string | null;
  metaDescription?: string | null;
}
