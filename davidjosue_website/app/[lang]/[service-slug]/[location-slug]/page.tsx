// /app/[lang]/[service-slug]/[location-slug]/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import destinationsDataUntyped from '@/data/destinations.json'; // Corrected path alias
import locationsDataUntyped from '@/data/locations.json'; // Corrected path alias
import { PayloadMedia } from '@/types/payload'; // Corrected path alias
// TODO: Import getMediaByTags from '@/lib/payload' when implemented

// Define interface for JSON data items
interface PlaceJsonData {
  slug_en: string;
  slug_es: string;
  name_en: string;
  name_es: string;
  // Add other fields if they exist in your JSON
}

// Apply type assertion
const destinationsData = destinationsDataUntyped as PlaceJsonData[];
const locationsData = locationsDataUntyped as PlaceJsonData[];


// Define simple service data (or import from JSON/CMS)
const services = [
    { slug_en: 'wedding-photographer', slug_es: 'fotografo-bodas', name_en: 'Wedding Photography', name_es: 'Fotografía de Bodas', tag: 'wedding' }, // Added 'tag' for image filtering
    { slug_en: 'boudoir-photographer', slug_es: 'fotografo-boudoir', name_en: 'Boudoir Photography', name_es: 'Fotografía Boudoir', tag: 'boudoir' },
    { slug_en: 'event-photographer', slug_es: 'fotografo-eventos', name_en: 'Event Photography', name_es: 'Fotografía de Eventos', tag: 'event' }, // Added tag
];

interface LocationData { slug_en: string; slug_es: string; name_en: string; name_es: string; type: 'destination' | 'location', tag: string } // Added 'tag'

// Combine destinations and locations into one list for easier lookup
const allPlaces: LocationData[] = [
  ...destinationsData.map(d => ({ ...d, type: 'destination' as 'destination', tag: d.slug_en || d.slug_es })), // Use slug as tag? Needs refinement.
  ...locationsData.map(l => ({ ...l, type: 'location' as 'location', tag: l.slug_en || l.slug_es }))
];


// Helper to get combined data
function getPageData(serviceSlug: string, locationSlug: string, lang: string) {
    const service = services.find(s => (lang === 'es-MX' ? s.slug_es : s.slug_en) === serviceSlug);
    const place = allPlaces.find(p => (lang === 'es-MX' ? p.slug_es : p.slug_en) === locationSlug);

    if (!service || !place) return null;

    return {
        serviceName: lang === 'es-MX' ? service.name_es : service.name_en,
        serviceTag: service.tag,
        placeName: lang === 'es-MX' ? place.name_es : place.name_en,
        placeTag: place.tag, // Tag for the place
        placeType: place.type,
    };
}

// Generate Metadata
export async function generateMetadata({ params }: { params: { lang: string, 'service-slug': string, 'location-slug': string } }): Promise<Metadata> {
    const lang = params.lang === 'es-MX' ? 'es-MX' : 'en-US';
    const data = getPageData(params['service-slug'], params['location-slug'], lang);

    const title = data ? `${data.serviceName} in ${data.placeName}` : 'Photography Services';
    const description = data ? `Professional ${data.serviceName} by David Josue available in ${data.placeName}. Book your session today.` : 'Photography services.';

    return {
        title: `${title} | David Josue`,
        description: description.substring(0, 160),
         openGraph: {
             title: `${title} | David Josue`,
             description: description.substring(0, 160),
         },
    };
}

// Generate Static Params (Crucial and potentially large)
export async function generateStaticParams() {
    const params: { lang: string; 'service-slug': string; 'location-slug': string }[] = [];
    const languages = ['en-US', 'es-MX'];

    languages.forEach(lang => {
        services.forEach(service => {
            allPlaces.forEach(place => {
                const serviceSlug = lang === 'es-MX' ? service.slug_es : service.slug_en;
                const locationSlug = lang === 'es-MX' ? place.slug_es : place.slug_en;
                if (serviceSlug && locationSlug) {
                    params.push({ lang: lang, 'service-slug': serviceSlug, 'location-slug': locationSlug });
                }
            });
        });
    });
    console.log(`Generated ${params.length} programmatic static params.`);
    return params;
}

// Fetch relevant images (Placeholder)
// async function getRelevantImages(serviceTag: string, placeTag: string) {
   // TODO: Call getMediaByTags([serviceTag, placeTag]) when implemented in lib/payload.ts
   // return await getMediaByTags([serviceTag, placeTag], 12);
//    return [ // Placeholder images
//       { id: '1', url: '/placeholder-prog-gallery1.jpg', alt: 'Image 1' },
//       { id: '2', url: '/placeholder-prog-gallery2.jpg', alt: 'Image 2' },
//    ];
// }


export default async function ServiceLocationPage({ params }: { params: { lang: string, 'service-slug': string, 'location-slug': string } }) {
    const lang = params.lang === 'es-MX' ? 'es-MX' : 'en-US';
    const data = getPageData(params['service-slug'], params['location-slug'], lang);

    if (!data) {
        notFound();
    }

    // const galleryImages = await getRelevantImages(data.serviceTag, data.placeTag); // Fetch images

    return (
        <div className="flex flex-col">
            {/* Hero Section (Simplified) */}
             <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gray-100 text-center">
                <div className="container mx-auto max-w-screen-md px-4">
                    {/* Optional Breadcrumbs */}
                    <h1 className="text-4xl sm:text-5xl font-serif font-light mb-4">
                        {data.serviceName} <span className="text-gray-500">in</span> {data.placeName}
                    </h1>
                    <p className="text-lg text-gray-600">
                       {lang === 'es-MX' ? `Experiencias fotográficas de ${data.serviceName.toLowerCase()} en el hermoso ${data.placeName}.` : `Bespoke ${data.serviceName.toLowerCase()} experiences in beautiful ${data.placeName}.`}
                     </p>
                </div>
             </section>

             {/* Main Content Area - Needs Modular Blocks */}
             <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto max-w-screen-lg px-4">
                    {/* Block 1: Introduction Text */}
                    <div className="prose prose-lg mx-auto mb-12 text-gray-700 text-center">
                        <p>
                           {lang === 'es-MX' ? `Descubre la magia de una sesión de ${data.serviceName.toLowerCase()} con David Josue en ${data.placeName}. Capturamos la esencia de tu historia con un estilo artístico y auténtico.` : `Discover the magic of a ${data.serviceName.toLowerCase()} session with David Josue in ${data.placeName}. We capture the essence of your story with an artistic and authentic style.`}
                        </p>
                        {/* Add more relevant text */}
                    </div>

                     {/* Block 2: Dynamic Gallery Placeholder */}
                     <div className="mb-12">
                         <h2 className="text-2xl font-serif font-light text-center mb-6">
                            {lang === 'es-MX' ? `Galería: ${data.serviceName} en ${data.placeName}` : `${data.serviceName} in ${data.placeName} Gallery`}
                        </h2>
                         <div className="p-4 bg-blue-100 text-blue-800 rounded text-center">
                             [Placeholder: Dynamic gallery fetching images tagged with &amp;apos;{data.serviceTag}&amp;apos; AND &amp;apos;{data.placeTag}&amp;apos; from Payload CMS will be displayed here.]
                             {/* Render actual gallery using 'galleryImages' when implemented */}
                         </div>
                     </div>

                     {/* Block 3: Why Choose David Josue for [Service] in [Place]? */}
                      <div className="mb-12 text-center">
                          <h2 className="text-2xl font-serif font-light mb-4">
                             {lang === 'es-MX' ? `¿Por qué elegir a David Josue?` : `Why Choose David Josue?`}
                          </h2>
                          <p className="text-gray-600 max-w-xl mx-auto">
                             {lang === 'es-MX' ? `Experiencia internacional, un enfoque personalizado y pasión por capturar momentos genuinos en ${data.placeName}.` : `International experience, a personalized approach, and a passion for capturing genuine moments in ${data.placeName}.`}
                          </p>
                           {/* Add bullet points or icons with benefits */}
                      </div>

                     {/* Block 4: Process/Experience */}
                      <div className="mb-12 bg-gray-50 p-8 rounded-lg">
                         <h2 className="text-2xl font-serif font-light text-center mb-4">
                             {lang === 'es-MX' ? `La Experiencia` : `The Experience`}
                         </h2>
                         <p className="text-gray-600 text-center">
                            {lang === 'es-MX' ? `Desde la consulta inicial hasta la entrega final, te guiaré en cada paso para ${data.serviceName.toLowerCase()} en ${data.placeName}.` : `From initial consultation to final delivery, I&apos;ll guide you every step of the way for your ${data.serviceName.toLowerCase()} in ${data.placeName}.`}
                         </p>
                          {/* Add steps */}
                      </div>

                     {/* Block 5: Location Specific Info (if applicable) */}
                     {/* Example: if (data.placeType === 'destination' && data.serviceTag === 'wedding') ... */}
                      {/* <div className="mb-12 text-center">
                         <h2 className="text-2xl font-serif font-light mb-4">
                             {lang === 'es-MX' ? `Lugares Destacados en ${data.placeName}` : `Featured Venues in ${data.placeName}`}
                         </h2>
                          <p>[List potential venues or unique spots in this location relevant to the service]</p>
                      </div> */}

                     {/* Block 6: Testimonials (Placeholder) */}
                      {/* <div className="mb-12 text-center"> ... Testimonials ... </div> */}

                     {/* Block 7: Final CTA */}
                     <div className="text-center border-t pt-12">
                         <h2 className="text-3xl font-serif font-light mb-4">
                           {lang === 'es-MX' ? `Reserva tu ${data.serviceName} en ${data.placeName}` : `Book Your ${data.serviceName} in ${data.placeName}`}
                         </h2>
                         <p className="text-lg text-gray-600 mb-8">
                           {lang === 'es-MX' ? 'Verifiquemos mi disponibilidad y comencemos a planificar.' : 'Let&apos;s check my availability and start planning.'}
                         </p>
                         <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors">
                            {lang === 'es-MX' ? `Solicitar Información` : `Inquire Now`}
                         </Link>
                     </div>
                </div>
             </section>
        </div>
    );
}
