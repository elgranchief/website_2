// Type definitions for static content

// Basic image type
export interface StaticImage {
  id: string;
  url: string;
  alt?: string;
  width?: number;
  height?: number;
}

// Static gallery type
export interface StaticGallery {
  id: string;
  title: string;
  titleEs?: string;
  slug: string;
  slugEs?: string;
  description?: string;
  descriptionEs?: string;
  featuredImage: StaticImage;
  images: StaticImage[];
  metaTitle?: string;
  metaTitleEs?: string;
  metaDescription?: string;
  metaDescriptionEs?: string;
}

// Static blog post type
export interface StaticBlogPost {
  id: string;
  title: string;
  titleEs?: string;
  slug: string;
  slugEs?: string;
  content: string;
  contentEs?: string;
  featuredImage: StaticImage;
  excerpt?: string;
  excerptEs?: string;
  author?: string;
  date: string;
  tags?: string[];
}
