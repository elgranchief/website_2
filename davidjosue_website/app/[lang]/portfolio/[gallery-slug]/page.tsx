// /app/[lang]/portfolio/[gallery-slug]/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getGalleryBySlug, getAllGalleries } from '@/data/portfolio-galleries';
import { portfolioGalleries } from '@/data/portfolio-galleries'; // Import gallery data
import { SimpleRichText } from '@/components/SimpleRichText';
import { StaticGallery, StaticImage } from '@/types/static-content';
import { ScrollReveal } from '@/components/ScrollReveal';
// Generate Metadata
export async function generateMetadata({ params }: { params: { lang: string, 'gallery-slug': string } }): Promise<Metadata> {
    const lang = params.lang === 'es-MX' ? 'es-MX' : 'en-US';
    const gallery = getGalleryBySlug(params['gallery-slug'], lang);

    if (!gallery) {
        return { title: 'Gallery Not Found' };
    }

    const isSpanish = lang === 'es-MX';
    const title = isSpanish && gallery.titleEs ? gallery.titleEs : gallery.title;
    const description = isSpanish && gallery.descriptionEs ? gallery.descriptionEs : (gallery.description || 'View this photography gallery by David Josue.');

    return {
        title: `${title} | David Josue Portfolio`,
        description: description.substring(0, 160),
        openGraph: {
            title: `${title} | David Josue Portfolio`,
            description: description.substring(0, 160),
            images: gallery.featuredImage ? [{ url: gallery.featuredImage.url }] : [],
        },
    };
}

// Generate Static Params
export function generateStaticParams() {
  const params: { lang: string; 'gallery-slug': string }[] = [];
  const languages = ['en-US', 'es-MX'];

  try {
    for (const lang of languages) {
      const galleries = getAllGalleries(lang);
      galleries.forEach((gallery: StaticGallery) => {
        const slug = lang === 'es-MX' && gallery.slugEs ? gallery.slugEs : gallery.slug;
        params.push({ lang: lang, 'gallery-slug': slug });
      });
    }
  } catch (error) {
    console.error("Failed to generate static params for portfolio galleries:", error);
  }
  return params;
}

export default function PortfolioGalleryPage({ params }: { params: { lang: string, 'gallery-slug': string } }) {
  const lang = params.lang === 'es-MX' ? 'es-MX' : 'en-US';
  const gallery = getGalleryBySlug(params['gallery-slug'], lang);

  if (!gallery) {
    notFound();
  }

  const isSpanish = lang === 'es-MX';
  const title = isSpanish && gallery.titleEs ? gallery.titleEs : gallery.title;
  const description = isSpanish && gallery.descriptionEs ? gallery.descriptionEs : gallery.description;

  return (
    <ScrollReveal>
    <div className="container mx-auto max-w-screen-xl px-4 py-16 md:py-24">
      {/* Gallery Header */}
      <header className="mb-12 text-center">
         <h1 className="text-4xl md:text-5xl font-serif font-light mb-4">
            {title}
         </h1>
         {description && (
            <div className="prose prose-lg mx-auto text-gray-700 max-w-screen-md">
                <SimpleRichText content={description} />
            </div>
         )}
      </header>

      {/* Image Grid/Layout */}
      {gallery.images && gallery.images.length > 0 ? (
         <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
             {gallery.images.map((image) => (
                <div key={image.id} className="break-inside-avoid">
                    {image.url && (
                         <Image
                            src={image.url}
                            alt={image.alt || title || 'Portfolio image'}
                            width={image.width || 800}
                            height={image.height || 800}
                            className="w-full h-auto object-cover rounded shadow-sm"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                         />
                    )}
                </div>
             ))}
         </div>
      ) : (
         <p className="text-center text-gray-500">
             {lang === 'es-MX' ? 'No hay imágenes en esta galería.' : 'No images in this gallery.'}
         </p>
      )}

       {/* Navigation */}
       <footer className="mt-16 text-center">
           <Link href={`/${lang}/portfolio`} className="text-sm font-medium text-gray-700 hover:text-gray-900">
              ← {lang === 'es-MX' ? 'Volver al Portafolio' : 'Back to Portfolio'}
           </Link>
       </footer>
    </div>
    </ScrollReveal>
  );
}
