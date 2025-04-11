// Utility functions for the website

/**
 * Format a date string based on locale
 * @param dateString ISO date string
 * @param locale Locale string (e.g., 'en-US', 'es-MX')
 * @returns Formatted date string
 */
export function formatDate(dateString: string, locale: string = 'en-US'): string {
  try {
    const date = new Date(dateString);
    
    // Check if date is valid
    if (isNaN(date.getTime())) {
      return 'Invalid date';
    }
    
    // Define formatting options
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    };
    
    return date.toLocaleDateString(locale, options);
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString || '';
  }
}

/**
 * Convert a string to slug format
 * @param text Text to convert to slug
 * @returns Slug formatted string
 */
export function toSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')         // Replace spaces with hyphens
    .replace(/[^\w\-]+/g, '')     // Remove all non-word characters
    .replace(/\-\-+/g, '-')       // Replace multiple hyphens with single hyphen
    .replace(/^-+/, '')           // Trim hyphens from start
    .replace(/-+$/, '');          // Trim hyphens from end
}

/**
 * Truncate text to a specific length and add ellipsis
 * @param text Text to truncate
 * @param length Maximum length
 * @returns Truncated text
 */
export function truncateText(text: string, length: number = 100): string {
  if (!text || text.length <= length) {
    return text;
  }
  
  return text.substring(0, length).trim() + '...';
}
