// davidjosue_website/types/payload.ts

// Basic type definition based on usage in PayloadRichText.tsx
export interface PayloadRichTextNode {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote' | 'ul' | 'ol' | 'li' | 'link' | 'upload' | string; // Allow other potential types
  text?: string;
  children?: PayloadRichTextNode[];
  
  // Formatting
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;

  // Link specific
  url?: string;
  newTab?: boolean;

  // Upload specific (assuming value is an object with url and alt)
  value?: {
    url?: string;
    alt?: string;
    [key: string]: any; // Allow other potential properties within value
  } | null; // Allow null value

  // Allow other potential properties
  [key: string]: any;
} // Closing brace for PayloadRichTextNode
export interface PayloadMedia {
  id: string | number; // Payload typically uses string IDs
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  alt?: string;
  // Add other potential fields from your Payload Media collection
  [key: string]: any; 
}

// You might need more specific types for different node types (e.g., TextNode, ElementNode)
// depending on the actual structure from your Payload CMS.