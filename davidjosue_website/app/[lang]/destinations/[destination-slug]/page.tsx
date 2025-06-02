import destinationsData from '@/data/destinations.json'; // Import destination data
// /app/[lang]/destinations/[destination-slug]/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
// Import static destination data (already imported on line 1)
// TODO: Import function to fetch portfolio items/images tagged with this destination from Payload
import { ScrollReveal } from '@/components/ScrollReveal'; // Import animation component
interface Destination {
    id: string; // Added id for key prop
    slug_en: string;
    slug_es: string;
    name_en: string;
    name_es: string;
    description_en?: string; // Add description fields to your JSON
    description_es?: string;
    heroImage?: string; // Add hero image path to JSON
}

// Find destination data based on slug and lang
function getDestinationData(slug: string, lang: string): Destination | undefined {
  const destinations: Destination[] = destinationsData;
  return destinations.find(d => (lang === 'es-MX' ? d.slug_es : d.slug_en) === slug);
}

// Generate Metadata
export async function generateMetadata({ params }: { params: { lang: string, 'destination-slug': string } }): Promise<Metadata> {
  const lang = params.lang === 'es-MX' ? 'es-MX' : 'en-US';
  const destination = getDestinationData(params['destination-slug'], lang);

  const name = destination ? (lang === 'es-MX' ? destination.name_es : destination.name_en) : 'Destination';
  const description = destination ? (lang === 'es-MX' ? destination.description_es : destination.description_en) : `Explore ${name} wedding photography.`;

  return {
    title: `${name} Wedding Photography | David Josue`,
    description: description?.substring(0, 160) || `Information and galleries for weddings in ${name}.`,
    openGraph: {
        title: `${name} Wedding Photography | David Josue`,
        description: description?.substring(0, 160) || `Information and galleries for weddings in ${name}.`,
         // images: [ { url: destination?.heroImage || '/default-og.jpg' }],
    },
  };
}

// Generate Static Params
export async function generateStaticParams() {
  const params: { lang: string; 'destination-slug': string }[] = [];
  const languages = ['en-US', 'es-MX'];
  const destinations: Destination[] = destinationsData;

  languages.forEach(lang => {
      destinations.forEach(dest => {
          const slug = lang === 'es-MX' ? dest.slug_es : dest.slug_en;
          if (slug) {
              params.push({ lang: lang, 'destination-slug': slug });
          }
      });
  });
  return params;
}


// TODO: Function to fetch images tagged with this destination from Payload
// async function getDestinationImages(destinationSlug: string, lang: string) {
//   // Logic to query Payload Media collection based on tags or relationships
//   // Example: fetchPayloadAPI(`/media?where[tags][equals]=${destinationSlug}&limit=12`)
//   return [ // Placeholder images
//      { id: '1', url: '/placeholder-dest-gallery1.jpg', alt: 'Image 1' },
//      { id: '2', url: '/placeholder-dest-gallery2.jpg', alt: 'Image 2' },
//      // ... up to 12 images
//   ];
// }

export default async function DestinationPage({ params }: { params: { lang: string, 'destination-slug': string } }) {
  const lang = params.lang === 'es-MX' ? 'es-MX' : 'en-US';
  const slug = params['destination-slug'];
  const destination = getDestinationData(slug, lang);

  if (!destination) {
    notFound();
  }

  // const galleryImages = await getDestinationImages(slug, lang); // Fetch dynamic images

  const name = lang === 'es-MX' ? destination.name_es : destination.name_en;
  const description = lang === 'es-MX' ? destination.description_es : destination.description_en;
  const heroImage = destination.heroImage || '/placeholder-hero-destination.jpg'; // Fallback hero

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
       <section className="relative h-[50vh] md:h-[60vh] w-full flex items-center justify-center text-center bg-gray-700 text-white overflow-hidden">
         <Image
           src={heroImage}
           alt={`Hero image for ${name}`}
           layout="fill"
           objectFit="cover"
           quality={80}
           priority
           className="absolute inset-0 z-0 opacity-40"
         />
         <div className="relative z-10 p-4">
           <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light mb-4">
             {name}
           </h1>
           {/* Optional: Subtitle like "Destination Wedding Photography" */}
         </div>
       </section>

        {/* Introduction Content */}
       <ScrollReveal>
       <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto max-w-screen-md px-4">
              <h2 className="text-center text-3xl font-serif font-light mb-6">
                 {lang === 'es-MX' ? `Bodas en ${name}` : `Weddings in ${name}`}
               </h2>
             {description ? (
                 <div className="prose prose-lg mx-auto text-gray-700">
                     <p>{description}</p>
                     {/* Add more details about shooting in this location, venues, tips etc. */}
                 </div>
              ) : (
                 <p className="text-center text-gray-500">
                   {lang === 'es-MX' ? `Información sobre fotografía de bodas en ${name}.` : `Information about wedding photography in ${name}.`}
                 </p>
              )}
             <div className="text-center mt-8">
                 <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors">
                   {lang === 'es-MX' ? `Consultar Fechas en ${name}` : `Inquire for ${name}`}
                 </Link>
             </div>
          </div>
       </section>
       </ScrollReveal>

        {/* Dynamic Gallery Section - Placeholder */}
        <ScrollReveal delay={0.1}>
        <section className="py-16 md:py-24 bg-gray-50">
         <div className="container mx-auto max-w-screen-xl px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-center mb-12">
              {lang === 'es-MX' ? `Galería: ${name}` : `${name} Gallery`}
            </h2>
             <div className="p-4 bg-blue-100 text-blue-800 rounded text-center">
                 [Placeholder: Dynamic gallery fetching images tagged &amp;apos;{slug}&amp;apos; from Payload CMS will be displayed here.]
                 {/* Render actual gallery using 'galleryImages' data when implemented */}
                  {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                     {galleryImages.map((img) => (
                       <div key={img.id} className="aspect-square bg-gray-200 overflow-hidden">
                          <Image src={img.url} alt={img.alt || `Image from ${name}`} width={600} height={600} className="w-full h-full object-cover"/>
                       </div>
                     ))}
                  </div> */}
             </div>
         </div>
       </section>
       </ScrollReveal>

       {/* Add other relevant sections: Featured Venues, Travel Info, CTA */}
        <ScrollReveal delay={0.1}>
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto max-w-screen-md px-4 text-center">
             <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
               {lang === 'es-MX' ? `¿Planeando tu Boda en ${name}?` : `Planning Your Wedding in ${name}?`}
             </h2>
             <p className="text-lg text-gray-600 mb-8">
               {lang === 'es-MX' ? 'Contáctame para capturar tu día especial en este increíble destino.' : 'Contact me to capture your special day in this incredible destination.'}
             </p>
             <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors">
                   {lang === 'es-MX' ? `Solicitar Información` : `Inquire Now`}
             </Link>
          </div>
        </section>
        </ScrollReveal>
    </div>
  );
}
