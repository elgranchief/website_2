// /lib/utils.ts
import { ReadonlyURLSearchParams } from 'next/navigation';

export function generateSlug(text: string): string {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/ /g, '-') // Replace spaces with hyphens
    .replace(/[^\w-]+/g, ''); // Remove all non-word chars except hyphens
}

export function formatDate(dateString: string | undefined | null, locale: string = 'en-US'): string {
  if (!dateString) return '';
  try {
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(dateString));
  } catch (error) {
    console.error("Error formatting date:", error);
    return ''; // Return empty or original string on error
  }
}

// Helper to create query strings for search params
export const createQueryString = (
    params: Record<string, string | number | null>,
    searchParams?: ReadonlyURLSearchParams
  ): string => {
    const newSearchParams = new URLSearchParams(searchParams?.toString() ?? "");

    for (const [key, value] of Object.entries(params)) {
      if (value === null) {
        newSearchParams.delete(key);
      } else {
        newSearchParams.set(key, String(value));
      }
    }

    return newSearchParams.toString();
  };
