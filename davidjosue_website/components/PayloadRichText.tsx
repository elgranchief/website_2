// Simple PayloadRichText component for rendering Payload CMS rich text content
import React from 'react';
import { PayloadRichTextNode } from '@/types/payload';

interface PayloadRichTextProps {
  content: PayloadRichTextNode[] | any[];
}

export const PayloadRichText: React.FC<PayloadRichTextProps> = ({ content }) => {
  // If content is empty or not an array, return null
  if (!content || !Array.isArray(content) || content.length === 0) {
    return null;
  }

  // Helper function to render individual nodes
  const renderNode = (node: PayloadRichTextNode, index: number): React.ReactNode => {
    // Handle text nodes
    if (node.text) {
      let textContent = node.text;
      
      // Apply formatting
      if (node.bold) {
        return <strong key={index}>{textContent}</strong>;
      }
      if (node.italic) {
        return <em key={index}>{textContent}</em>;
      }
      if (node.underline) {
        return <u key={index}>{textContent}</u>;
      }
      if (node.strikethrough) {
        return <s key={index}>{textContent}</s>;
      }
      if (node.code) {
        return <code key={index}>{textContent}</code>;
      }
      
      return <span key={index}>{textContent}</span>;
    }

    // Handle elements with children
    if (node.children) {
      const children = node.children.map((child, childIndex) => 
        renderNode(child, childIndex)
      );

      // Render different elements based on type
      switch (node.type) {
        case 'h1':
          return <h1 key={index} className="text-3xl font-bold mb-4">{children}</h1>;
        case 'h2':
          return <h2 key={index} className="text-2xl font-bold mb-3">{children}</h2>;
        case 'h3':
          return <h3 key={index} className="text-xl font-bold mb-2">{children}</h3>;
        case 'h4':
          return <h4 key={index} className="text-lg font-bold mb-2">{children}</h4>;
        case 'h5':
          return <h5 key={index} className="text-base font-bold mb-1">{children}</h5>;
        case 'h6':
          return <h6 key={index} className="text-sm font-bold mb-1">{children}</h6>;
        case 'blockquote':
          return <blockquote key={index} className="border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>;
        case 'ul':
          return <ul key={index} className="list-disc pl-6 mb-4">{children}</ul>;
        case 'ol':
          return <ol key={index} className="list-decimal pl-6 mb-4">{children}</ol>;
        case 'li':
          return <li key={index} className="mb-1">{children}</li>;
        case 'link':
          return (
            <a 
              key={index}
              href={node.url || '#'}
              target={node.newTab ? '_blank' : undefined}
              rel={node.newTab ? 'noopener noreferrer' : undefined}
              className="text-blue-600 hover:underline"
            >
              {children}
            </a>
          );
        case 'upload':
          return (
            <div key={index} className="my-4">
              <img 
                src={typeof node.value === 'object' && node.value?.url ? node.value.url : ''} 
                alt={typeof node.value === 'object' && node.value?.alt ? node.value.alt : 'Image'} 
                className="max-w-full h-auto"
              />
            </div>
          );
        default:
          // Default to paragraph for unknown types
          return <p key={index} className="mb-4">{children}</p>;
      }
    }

    // Fallback for other node types
    return <p key={index} className="mb-4">{JSON.stringify(node)}</p>;
  };

  // Map through content array and render each node
  return (
    <div className="payload-rich-text">
      {content.map((node, index) => renderNode(node, index))}
    </div>
  );
};

export default PayloadRichText;
