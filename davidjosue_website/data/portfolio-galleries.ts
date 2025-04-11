// Static portfolio gallery data
import { StaticGallery, StaticImage } from '@/types/static-content';

// Define available galleries
export const portfolioGalleries: StaticGallery[] = [
  {
    id: 'weddings',
    title: 'Wedding Photography',
    titleEs: 'Fotografía de Bodas',
    slug: 'wedding-photography',
    slugEs: 'fotografia-de-bodas',
    description: 'A collection of my favorite wedding photography moments, capturing love and celebration.',
    descriptionEs: 'Una colección de mis momentos favoritos de fotografía de bodas, capturando amor y celebración.',
    featuredImage: {
      id: 'wedding-featured',
      url: '/images/david-josue-wedding-photography-hero-image.jpg',
      alt: 'David Josue Wedding Photography',
      width: 1200,
      height: 800
    },
    images: [
      {
        id: 'wedding-1',
        url: '/images/david-josue-wedding-photography-hero-image.jpg',
        alt: 'Couple at sunset beach wedding',
        width: 1200,
        height: 800
      },
      {
        id: 'wedding-2',
        url: '/images/david-josue-cabo-san-lucas-wedding-destination.jpg',
        alt: 'Cabo San Lucas wedding',
        width: 1200,
        height: 800
      },
      {
        id: 'wedding-3',
        url: '/images/david-josue-valle-de-guadalupe-wedding-destination.jpg',
        alt: 'Valle de Guadalupe wedding',
        width: 1200,
        height: 800
      }
    ]
  },
  {
    id: 'boudoir',
    title: 'Boudoir Photography',
    titleEs: 'Fotografía Boudoir',
    slug: 'boudoir-photography',
    slugEs: 'fotografia-boudoir',
    description: 'Elegant and tasteful boudoir photography that celebrates confidence and beauty.',
    descriptionEs: 'Fotografía boudoir elegante y de buen gusto que celebra la confianza y la belleza.',
    featuredImage: {
      id: 'boudoir-featured',
      url: '/images/david-josue-boudoir-photography-service.jpg',
      alt: 'David Josue Boudoir Photography',
      width: 1200,
      height: 800
    },
    images: [
      {
        id: 'boudoir-1',
        url: '/images/david-josue-boudoir-photography-service.jpg',
        alt: 'Elegant boudoir portrait',
        width: 1200,
        height: 800
      }
    ]
  },
  {
    id: 'portraits',
    title: 'Portrait Photography',
    titleEs: 'Fotografía de Retratos',
    slug: 'portrait-photography',
    slugEs: 'fotografia-de-retratos',
    description: 'Authentic portrait photography that captures personality and emotion.',
    descriptionEs: 'Fotografía de retratos auténtica que captura la personalidad y la emoción.',
    featuredImage: {
      id: 'portrait-featured',
      url: '/images/david-josue-portrait-photography-service.jpg',
      alt: 'David Josue Portrait Photography',
      width: 1200,
      height: 800
    },
    images: [
      {
        id: 'portrait-1',
        url: '/images/david-josue-portrait-photography-service.jpg',
        alt: 'Professional portrait',
        width: 1200,
        height: 800
      },
      {
        id: 'portrait-2',
        url: '/images/selfie-davidjosue.jpg',
        alt: 'David Josue selfie',
        width: 800,
        height: 1200
      }
    ]
  }
];

// Helper function to get gallery by slug
export function getGalleryBySlug(slug: string, lang: string = 'en-US'): StaticGallery | null {
  const isSpanish = lang === 'es-MX';
  return portfolioGalleries.find(gallery => 
    isSpanish ? gallery.slugEs === slug : gallery.slug === slug
  ) || null;
}

// Helper function to get all galleries
export function getAllGalleries(lang: string = 'en-US'): StaticGallery[] {
  return portfolioGalleries;
}
