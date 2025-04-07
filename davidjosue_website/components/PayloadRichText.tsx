// /components/PayloadRichText.tsx
import React from 'react';
// TODO: Install and import the actual Payload Lexical renderer
// Example: import { SerializedPayloadNode } from '@payloadcms/richtext-lexical'; // Adjust based on library
// Example: import { lexicalToReact } from '@payloadcms/richtext-lexical'; // Adjust based on library

interface PayloadRichTextProps {
  content: any; // The Lexical JSON object from Payload
  className?: string; // Optional Tailwind class for the container
}

// Basic Placeholder Renderer - REPLACE with actual implementation using Payload's library
const renderLexicalContent = (content: any): React.ReactNode => {
  if (!content || !content.root || !content.root.children) {
    return null;
  }

  // VERY simplified placeholder - does not handle formatting, lists, links, images etc.
  // You MUST use a proper Lexical renderer library for production.
  try {
    return content.root.children.map((node: any, index: number) => {
      if (node.type === 'paragraph') {
        // Basic paragraph rendering
        return <p key={index}>{node.children?.map((child: any) => child.text || '').join('')}</p>;
      }
      if (node.type === 'heading') {
        // Basic heading rendering (example for h2)
        const Tag = `h${node.tag?.substring(1) || '2'}` as keyof JSX.IntrinsicElements;
        return <Tag key={index}>{node.children?.map((child: any) => child.text || '').join('')}</Tag>;
      }
      // Add basic handling for other node types if needed for placeholder
      // console.log('Unhandled node type (placeholder):', node.type);
      return null;
    });
  } catch (error) {
    console.error("Error rendering Lexical content (placeholder):", error);
    return <p className="text-red-500">[Error rendering content]</p>;
  }
};

export function PayloadRichText({ content, className }: PayloadRichTextProps) {
  if (!content) {
    return null;
  }

  // NOTE: The following line is where you'd call the ACTUAL Lexical renderer
  // Example: const renderedContent = lexicalToReact(content);
  const renderedContent = renderLexicalContent(content); // Using placeholder

  // Apply Tailwind Prose for nice typography styling by default
  return (
    <div className={`prose prose-lg max-w-none ${className || ''}`}>
      {renderedContent}
      <p className="mt-4 p-2 bg-yellow-100 text-yellow-800 text-xs rounded">
        [Note: Rich text formatting (bold, links, images, etc.) requires installing and using a Payload Lexical renderer library like `@payloadcms/richtext-lexical`.]
      </p>
    </div>
  );
}
