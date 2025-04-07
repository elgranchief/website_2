// /app/[lang]/portfolio/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react'; // Import Suspense
import { getPublishedGalleries } from '@/lib/payload';
import { PayloadGallery } from '@/types/payload';
import { ScrollReveal } from '@/components/ScrollReveal'; // Import animation component

export const metadata: Metadata = {
  title: 'Portfolio | David Josue Photography',
  description: 'Browse wedding, boudoir, and event photography galleries captured by David Josue.',
};

// Revalidate portfolio index periodically
export const revalidate = 3600; // Revalidate every hour

export default async function PortfolioIndexPage({ params }: { params: { lang: string } }) {
  const lang = params.lang === 'es-MX' ? 'es-MX' : 'en-US';

  let galleriesData;
  try {
    // Fetch first page of galleries (e.g., 20)
    galleriesData = await getPublishedGalleries(lang, 20, 1);
  } catch (error) {
    console.error("Failed to fetch galleries:", error);
    galleriesData = { docs: [], totalPages: 0, page: 1, hasNextPage: false, hasPrevPage: false }; // Added pagination defaults for consistency
  }

  const galleries = galleriesData.docs;

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
          {lang === 'es-MX' ? 'Una selección de mis trabajos favoritos en bodas, boudoir y eventos.' : 'A selection of my favorite work across weddings, boudoir, and events.'}
        </p>
        {/* Optional: Filtering UI */}
      </div>

          {/* Gallery grid logic remains inside ScrollReveal */}
          {galleries && galleries.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {galleries.map((gallery: PayloadGallery) => { // Added type
               const featuredImageUrl = (typeof gallery.featuredImage === 'object' && gallery.featuredImage?.url)
                                      ? gallery.featuredImage.url : '/david-josue-photography-portfolio-gallery-thumbnail.jpg'; // Fallback image
             const featuredImageAlt = (typeof gallery.featuredImage === 'object' && gallery.featuredImage?.alt)
                                      ? gallery.featuredImage.alt : (gallery.title || 'Gallery thumbnail');

            return (
              <Link key={gallery.id} href={`/${lang}/portfolio/${gallery.slug}`} className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                 <div className="aspect-square overflow-hidden bg-gray-100 relative">
                    {/* Temporarily replaced next/image with standard img for debugging */}
                    <img 
                       src={featuredImageUrl} 
                       alt={featuredImageAlt} 
                       style={{width: '100%', height: '100%', objectFit: 'cover'}}
                       className="transition-transform duration-300 group-hover:scale-105" 
                       loading="lazy" 
                    />
                    {/* <Image
                       src={featuredImageUrl}
                       alt={featuredImageAlt}
                       fill
                       style={{objectFit: 'cover'}}
                       className="transition-transform duration-300 group-hover:scale-105"
                       sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    /> */}
                    {/* Optional overlay */}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                       <h2 className="text-lg font-semibold text-white leading-tight">{gallery.title}</h2>
                    </div>
                </div>
              </Link>
            );
          })}
        </div>
         // TODO: Add pagination if totalPages > 1
      ) : (
        // This is the correct "else" block for when no galleries are found
        <div className="text-center py-16">
          <p className="text-gray-500">
            {lang === 'es-MX' ? 'No se encontraron galerías en el portafolio por el momento.' : 'No portfolio galleries found at this time.'}
          </p>
        </div>
      )}
    </div>
  </ScrollReveal>
</Suspense>
  );
}
