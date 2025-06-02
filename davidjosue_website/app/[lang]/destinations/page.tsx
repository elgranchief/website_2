// Function to generate static paths for supported languages
export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'es-MX' }];
}
// /app/[lang]/destinations/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
// Import the static destination data
import destinationsData from '@/data/destinations.json';
import { ScrollReveal } from '@/components/ScrollReveal'; // Import animation component

interface Destination {
  id: string; // Added id for key prop
  slug_en: string;
  slug_es: string;
  name_en: string;
  name_es: string;
  region_en?: string; // Optional
  region_es?: string; // Optional
  image?: string; // Optional placeholder image path in data file
}

export const metadata: Metadata = {
  title: 'Destinations | David Josue Photography',
  description: 'Explore the beautiful wedding destinations across Mexico and worldwide where David Josue photographs.',
};

export default function DestinationsPage({ params }: { params: { lang: string } }) {
  const lang = params.lang === 'es-MX' ? 'es-MX' : 'en-US';
  const destinations: Destination[] = destinationsData; // Assuming the JSON is an array

  return (
    <ScrollReveal>
    <div className="container mx-auto max-w-screen-xl px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-light mb-4">
          {lang === 'es-MX' ? 'Destinos de Boda' : 'Wedding Destinations'}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {lang === 'es-MX' ? 'Desde las playas de Tulum hasta los viñedos de Valle de Guadalupe y más allá. Descubre los lugares donde creo recuerdos inolvidables.' : 'From the beaches of Tulum to the vineyards of Valle de Guadalupe and beyond. Discover the places where I create unforgettable memories.'}
        </p>
      </div>

      {destinations && destinations.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {destinations.map((dest) => {
            const name = lang === 'es-MX' ? dest.name_es : dest.name_en;
            const slug = lang === 'es-MX' ? dest.slug_es : dest.slug_en;
            const region = lang === 'es-MX' ? dest.region_es : dest.region_en;

            // Ensure slug exists before creating link
            if (!slug) return null;

            return (
              <Link key={dest.id} href={`/${lang}/destinations/${slug}`} className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="aspect-square overflow-hidden bg-gray-100 relative">
                  {dest.image ? (
                    <Image
                      src={dest.image} // Path from JSON data
                      alt={`Image for ${name}`}
                      fill
                      style={{objectFit: 'cover'}}
                      className="transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                    />
                  ) : (
                     <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                        <span>{name}</span>
                     </div>
                  )}
                   {/* Overlay for text */}
                   {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-4"> */}
                      {/* <h2 className="text-lg font-semibold text-white leading-tight">{name}</h2> */}
                   {/* </div> */}
                </div>
                 <div className="p-3 text-center">
                     <h2 className="font-semibold text-base leading-tight mb-0.5">{name}</h2>
                     {region && <p className="text-xs text-gray-500">{region}</p>}
                 </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-500">
            {lang === 'es-MX' ? 'No se especificaron destinos.' : 'No destinations specified.'}
          </p>
        </div>
      )}
       {/* TODO: Maybe add sections for Local Areas vs International? */}
    </div>
    </ScrollReveal>
  );
}
