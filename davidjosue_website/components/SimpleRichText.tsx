// Simple rich text component for displaying formatted content
import React from 'react';

interface SimpleRichTextProps {
  content: string | null | undefined;
}

export const SimpleRichText: React.FC<SimpleRichTextProps> = ({ content }) => {
  if (!content) return null;
  
  // Basic paragraph formatting
  const formattedContent = content.split('\n').map((paragraph, index) => (
    <p key={index} className="mb-4">{paragraph}</p>
  ));
  
  return (
    <div className="simple-rich-text">
      {formattedContent}
    </div>
  );
};

export default SimpleRichText;
