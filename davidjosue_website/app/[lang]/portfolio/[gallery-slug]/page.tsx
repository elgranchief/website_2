// /app/[lang]/portfolio/[gallery-slug]/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getGalleryBySlug, getPublishedGalleries } from '@/lib/payload'; // Corrected path alias
import { PayloadRichText } from '@/components/PayloadRichText';
import { PayloadMedia, PayloadGallery } from '@/types/payload';
import { ScrollReveal } from '@/components/ScrollReveal'; // Import animation component

// Fetch data for the specific gallery
async function getGallery(slug: string, lang: string) {
   try {
       return await getGalleryBySlug(slug, lang);
   } catch (error) {
       console.error(`Error fetching gallery "${slug}" in lang "${lang}":`, error);
       return null;
   }
}

// Generate Metadata
export async function generateMetadata({ params }: { params: { lang: string, 'gallery-slug': string } }): Promise<Metadata> {
    const lang = params.lang === 'es-MX' ? 'es-MX' : 'en-US';
    const gallery = await getGallery(params['gallery-slug'], lang);

    if (!gallery) {
        return { title: 'Gallery Not Found' };
    }

    const title = gallery.metaTitle || gallery.title || 'Portfolio Gallery'; // Add metaTitle field to Payload Gallery collection
    const description = gallery.metaDescription || 'View this photography gallery by David Josue.'; // Add metaDescription field
    const imageUrl = (typeof gallery.featuredImage === 'object' && gallery.featuredImage?.url)
                     ? gallery.featuredImage.url
                     : null;

    return {
        title: `${title} | David Josue Portfolio`,
        description: description.substring(0, 160),
        openGraph: {
            title: `${title} | David Josue Portfolio`,
            description: description.substring(0, 160),
             images: imageUrl ? [{ url: imageUrl }] : [],
        },
        // Add Twitter card if needed
    };
}

// Generate Static Params
export async function generateStaticParams() {
  const params: { lang: string; 'gallery-slug': string }[] = [];
  const languages = ['en-US', 'es-MX'];

  try {
    for (const lang of languages) {
      // Fetch all published gallery slugs
      const galleriesResponse = await getPublishedGalleries(lang, 1000); // Adjust limit
      galleriesResponse.docs.forEach((gallery: PayloadGallery) => { // Added type
        if (gallery.slug) {
          params.push({ lang: lang, 'gallery-slug': gallery.slug });
        }
      });
    }
  } catch (error) {
    console.error("Failed to generate static params for portfolio galleries:", error);
  }
  return params;
}


export default async function PortfolioGalleryPage({ params }: { params: { lang: string, 'gallery-slug': string } }) {
  const lang = params.lang === 'es-MX' ? 'es-MX' : 'en-US';
  const gallery = await getGallery(params['gallery-slug'], lang);

  if (!gallery) {
    notFound();
  }

  // Ensure images array contains populated media objects, not just IDs
  const images: PayloadMedia[] = (gallery.images || [])
      .map(img => (typeof img === 'object' ? img : null))
      .filter((img): img is PayloadMedia => img !== null); // Type guard

  return (
    <ScrollReveal>
    <div className="container mx-auto max-w-screen-xl px-4 py-16 md:py-24">
      {/* Gallery Header */}
      <header className="mb-12 text-center">
         <h1 className="text-4xl md:text-5xl font-serif font-light mb-4">
            {gallery.title}
         </h1>
         {gallery.description && (
            <div className="prose prose-lg mx-auto text-gray-700 max-w-screen-md">
                <PayloadRichText content={gallery.description} />
            </div>
         )}
      </header>

      {/* Image Grid/Layout */}
      {images.length > 0 ? (
         <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
             {images.map((image) => (
                <div key={image.id} className="break-inside-avoid"> {/* Prevent items breaking across columns */}
                    {image.url && (
                         <Image
                            src={image.url}
                            alt={image.alt || gallery.title || 'Portfolio image'}
                            width={image.width || 800} // Use dimensions from Payload if available
                            height={image.height || 800}
                            className="w-full h-auto object-cover rounded shadow-sm"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            // Add loading="lazy" potentially, but Next.js Image handles it well
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
