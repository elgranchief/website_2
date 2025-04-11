// Static blog post data
import { StaticBlogPost } from '@/types/static-content';

// Define available blog posts
export const blogPosts: StaticBlogPost[] = [
  {
    id: 'destination-wedding-tips',
    title: 'Top 10 Tips for Planning a Destination Wedding',
    titleEs: '10 Consejos para Planificar una Boda en Destino',
    slug: 'destination-wedding-planning-tips',
    slugEs: 'consejos-boda-destino',
    content: 'Planning a destination wedding can be both exciting and challenging. Here are my top 10 tips to help make your destination wedding planning smoother and more enjoyable...',
    contentEs: 'Planificar una boda en un destino puede ser emocionante y desafiante. Aquí están mis 10 mejores consejos para hacer que la planificación de tu boda en destino sea más sencilla y agradable...',
    featuredImage: {
      id: 'blog-destination-wedding',
      url: '/images/david-josue-destination-wedding-photography-service.jpg',
      alt: 'Destination Wedding Photography',
      width: 1200,
      height: 800
    },
    excerpt: 'Expert tips to help you plan the perfect destination wedding without the stress.',
    excerptEs: 'Consejos de expertos para ayudarte a planificar la boda perfecta en destino sin estrés.',
    author: 'David Josue',
    date: '2025-03-15',
    tags: ['destination wedding', 'wedding planning', 'travel']
  },
  {
    id: 'boudoir-session-preparation',
    title: 'How to Prepare for Your Boudoir Photography Session',
    titleEs: 'Cómo Prepararte para tu Sesión de Fotografía Boudoir',
    slug: 'boudoir-session-preparation-guide',
    slugEs: 'guia-preparacion-sesion-boudoir',
    content: 'A boudoir photography session is an intimate and empowering experience. Here are my best tips to help you prepare and feel confident for your upcoming boudoir session...',
    contentEs: 'Una sesión de fotografía boudoir es una experiencia íntima y empoderadora. Aquí están mis mejores consejos para ayudarte a prepararte y sentirte segura para tu próxima sesión de boudoir...',
    featuredImage: {
      id: 'blog-boudoir',
      url: '/images/david-josue-boudoir-photography-service.jpg',
      alt: 'Boudoir Photography Session',
      width: 1200,
      height: 800
    },
    excerpt: 'Tips and advice to help you feel comfortable and confident during your boudoir photoshoot.',
    excerptEs: 'Consejos para ayudarte a sentir cómoda y segura durante tu sesión fotográfica boudoir.',
    author: 'David Josue',
    date: '2025-02-18',
    tags: ['boudoir', 'photography tips', 'confidence']
  },
  {
    id: 'portrait-photography-guide',
    title: 'The Ultimate Guide to Natural Portrait Photography',
    titleEs: 'La Guía Definitiva para la Fotografía de Retratos Naturales',
    slug: 'natural-portrait-photography-guide',
    slugEs: 'guia-fotografia-retratos-naturales',
    content: 'Natural portrait photography focuses on capturing authentic moments and genuine expressions. In this guide, I share my approach to creating beautiful, natural portraits that truly reflect your personality...',
    contentEs: 'La fotografía de retratos naturales se centra en capturar momentos auténticos y expresiones genuinas. En esta guía, comparto mi enfoque para crear hermosos retratos naturales que realmente reflejen tu personalidad...',
    featuredImage: {
      id: 'blog-portrait',
      url: '/images/david-josue-portrait-photography-service.jpg',
      alt: 'Natural Portrait Photography',
      width: 1200,
      height: 800
    },
    excerpt: 'Learn how to create stunning, natural portraits that capture authentic emotions and personality.',
    excerptEs: 'Aprende a crear retratos naturales impresionantes que capturen emociones y personalidad auténticas.',
    author: 'David Josue',
    date: '2025-01-25',
    tags: ['portrait photography', 'photography tips', 'lighting']
  }
];

// Helper function to get post by slug
export function getPostBySlug(slug: string, lang: string = 'en-US'): StaticBlogPost | null {
  const isSpanish = lang === 'es-MX';
  return blogPosts.find(post => 
    isSpanish ? post.slugEs === slug : post.slug === slug
  ) || null;
}

// Helper function to get all posts
export function getAllPosts(lang: string = 'en-US'): StaticBlogPost[] {
  return blogPosts;
}
