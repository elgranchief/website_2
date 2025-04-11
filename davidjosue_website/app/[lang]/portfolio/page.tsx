// /app/[lang]/portfolio/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';
import { getAllGalleries } from '@/data/portfolio-galleries';
import { StaticGallery } from '@/types/static-content';
import { ScrollReveal } from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Portfolio | David Josue Photography',
  description: 'Browse wedding, boudoir, and event photography galleries captured by David Josue.',
};

// Revalidate portfolio index periodically
export const revalidate = 3600; // Revalidate every hour

export default function PortfolioIndexPage({ params }: { params: { lang: string } }) {
  const lang = params.lang === 'es-MX' ? 'es-MX' : 'en-US';
  const isSpanish = lang === 'es-MX';
  
  const galleries = getAllGalleries(lang);

  // Wrap the client component ScrollReveal in Suspense
  return (
    <Suspense fallback={<div className="text-center py-16">Loading page...</div>}> 
      <ScrollReveal>
        <div className="container mx-auto max-w-screen-xl px-4 py-16 md:py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-light mb-4">
              {lang === 'es-MX' ? 'Portafolio' : 'Portfolio'}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {lang === 'es-MX' 
                ? 'Una selección de mis trabajos favoritos en bodas, boudoir y eventos.' 
                : 'A selection of my favorite work across weddings, boudoir, and events.'}
            </p>
          </div>

          {/* Gallery grid */}
          {galleries && galleries.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {galleries.map((gallery: StaticGallery) => {
                const galleryTitle = isSpanish && gallery.titleEs ? gallery.titleEs : gallery.title;
                const gallerySlug = isSpanish && gallery.slugEs ? gallery.slugEs : gallery.slug;
                
                return (
                  <Link 
                    key={gallery.id} 
                    href={`/${lang}/portfolio/${gallerySlug}`} 
                    className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="aspect-square overflow-hidden bg-gray-100 relative">
                      <img 
                        src={gallery.featuredImage.url} 
                        alt={gallery.featuredImage.alt || galleryTitle} 
                        style={{width: '100%', height: '100%', objectFit: 'cover'}}
                        className="transition-transform duration-300 group-hover:scale-105" 
                        loading="lazy" 
                      />
                      {/* Optional overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                        <h2 className="text-lg font-semibold text-white leading-tight">{galleryTitle}</h2>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500">
                {lang === 'es-MX' 
                  ? 'No se encontraron galerías en el portafolio por el momento.' 
                  : 'No portfolio galleries found at this time.'}
              </p>
            </div>
          )}
        </div>
      </ScrollReveal>
    </Suspense>
  );
}
