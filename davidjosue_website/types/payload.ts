// Type definitions for Payload CMS data

// Common fields for Payload documents
export interface PayloadBase {
  id: string;
  createdAt: string;
  updatedAt: string;
  locale?: string;
}

// Media/Asset type
export interface PayloadMedia extends PayloadBase {
  url?: string;
  alt?: string;
  width?: number;
  height?: number;
  filename?: string;
  mimeType?: string;
}

// Rich text content (uses Slate format)
export type PayloadRichTextNode = {
  type?: string;
  // Generic node properties
  text?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
  
  // Link properties
  url?: string;
  newTab?: boolean;
  
  // Upload/media properties
  value?: PayloadMedia | string | any;
  
  // Children nodes
  children?: PayloadRichTextNode[];
  
  // Allow for additional properties
  [key: string]: any;
};

// Gallery collection
export interface PayloadGallery extends PayloadBase {
  title: string;
  slug: string;
  description?: PayloadRichTextNode[] | any[];
  images?: PayloadMedia[] | string[];
  featuredImage?: PayloadMedia | string;
  metaTitle?: string;
  metaDescription?: string;
  tags?: string[];
  published?: boolean;
}

// Blog Post collection
export interface PayloadPost extends PayloadBase {
  title: string;
  slug: string;
  content?: PayloadRichTextNode[] | any[];
  featuredImage?: PayloadMedia | string;
  excerpt?: string;
  metaTitle?: string;
  metaDescription?: string;
  author?: string;
  categories?: string[];
  tags?: string[];
  published?: boolean;
}
