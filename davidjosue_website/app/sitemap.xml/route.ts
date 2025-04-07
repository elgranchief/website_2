// /app/sitemap.xml/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getPublishedPosts, getPublishedGalleries } from '@/lib/payload'; // Corrected path alias
import destinationsDataUntyped from '@/data/destinations.json'; // Corrected path alias
import locationsDataUntyped from '@/data/locations.json'; // Corrected path alias
import { PayloadPost, PayloadGallery } from '@/types/payload'; // Corrected path alias

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const LANGUAGES = ['en-US', 'es-MX'];

// Define interface for JSON data items (matching programmatic page)
interface PlaceJsonData {
  slug_en: string;
  slug_es: string;
  name_en: string;
  name_es: string;
}
const destinationsData = destinationsDataUntyped as PlaceJsonData[];
const locationsData = locationsDataUntyped as PlaceJsonData[];

// Define services array (matching programmatic page)
const services = [
    { slug_en: 'wedding-photographer', slug_es: 'fotografo-bodas', name_en: 'Wedding Photography', name_es: 'Fotografía de Bodas', tag: 'wedding' },
    { slug_en: 'boudoir-photographer', slug_es: 'fotografo-boudoir', name_en: 'Boudoir Photography', name_es: 'Fotografía Boudoir', tag: 'boudoir' },
    { slug_en: 'event-photographer', slug_es: 'fotografo-eventos', name_en: 'Event Photography', name_es: 'Fotografía de Eventos', tag: 'event' },
];

// Define LocationData interface (matching programmatic page)
interface LocationData { slug_en: string; slug_es: string; name_en: string; name_es: string; type: 'destination' | 'location', tag: string }

// Combine places (matching programmatic page)
const allPlacesSitemap: LocationData[] = [
  ...destinationsData.map(d => ({ ...d, type: 'destination' as 'destination', tag: d.slug_en || d.slug_es })),
  ...locationsData.map(l => ({ ...l, type: 'location' as 'location', tag: l.slug_en || l.slug_es }))
];

interface SitemapUrl {
    loc: string;
    lastmod?: string;
    changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority?: number;
}

export async function GET(request: NextRequest) {
    const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

    // 1. Static Pages
    const staticPages = [
        '', // Homepage
        '/about',
        '/contact',
        '/blog',
        '/destinations',
        '/services/destination-weddings',
        '/services/boudoir',
        '/services/events',
         // Add other static pages like /free-guide if it exists
    ];

    let urls: SitemapUrl[] = [];

    LANGUAGES.forEach(lang => {
        staticPages.forEach(page => {
            urls.push({
                loc: `${SITE_URL}/${lang}${page}`,
                lastmod: currentDate,
                changefreq: page === '' ? 'daily' : 'weekly', // Homepage more frequent
                priority: page === '' ? 1.0 : 0.8,
            });
        });
    });

    // 2. Dynamic Blog Posts (Fetch from Payload)
    try {
      const allPostsResponse = await getPublishedPosts('all', 2000); // Fetch all posts, adjust limit/pagination if needed
      allPostsResponse.docs.forEach((post: PayloadPost) => { // Added type
        // Add URL for each language the post is available in
        const locales = post.locale ? [post.locale] : LANGUAGES; // Adjust based on how Payload handles localization fetch
        locales.forEach(lang => {
           if (post.slug) { // Assuming slug is unique per locale or handled correctly
                urls.push({
                    loc: `${SITE_URL}/${lang}/blog/${post.slug}`,
                    lastmod: post.updatedAt?.split('T')[0] || currentDate,
                    changefreq: 'monthly',
                    priority: 0.7
                });
           }
        });
      });
    } catch (error) { console.error("Sitemap: Error fetching blog posts:", error); }


    // 3. Dynamic Destination/Location Pages (From /data)
    try {
        // Use the combined list structure from programmatic page
        allPlacesSitemap.forEach(place => {
          LANGUAGES.forEach(lang => {
             const slug = lang === 'es-MX' ? place.slug_es : place.slug_en;
             // Determine path segment based on type (assuming you have separate routes like /destinations/slug and /locations/slug)
             // If you only have /destinations/[slug] for both, adjust this logic
             const pageType = place.type === 'destination' ? 'destinations' : 'locations'; // Adjust if needed
             if (slug) {
                // Check if the base page exists in staticPages before adding dynamic ones
                // This assumes /destinations and /locations base pages exist
                if (staticPages.includes(`/${pageType}`)) {
                   urls.push({ loc: `${SITE_URL}/${lang}/${pageType}/${slug}`, lastmod: currentDate, changefreq: 'monthly', priority: 0.6 });
                } else {
                   console.warn(`Sitemap: Base page /${pageType} not found in staticPages, skipping ${slug}`);
                }
             }
          });
        });
    } catch (error) { console.error("Sitemap: Error processing places data:", error); }

    // 4. Programmatic Service + Location/Destination Pages
    try {
      LANGUAGES.forEach(lang => {
          services.forEach(service => { // Use services array defined above
              allPlacesSitemap.forEach(place => { // Use combined list again
                  const serviceSlug = lang === 'es-MX' ? service.slug_es : service.slug_en;
                  const locationSlug = lang === 'es-MX' ? place.slug_es : place.slug_en;
                  if (serviceSlug && locationSlug) {
                      urls.push({
                           loc: `${SITE_URL}/${lang}/${serviceSlug}/${locationSlug}`,
                           lastmod: currentDate,
                           changefreq: 'monthly',
                           priority: 0.5 // Lower priority for highly specific pages
                      });
                  }
              });
          });
      });
    } catch (error) { console.error("Sitemap: Error generating programmatic URLs:", error); }

    // 5. Dynamic Portfolio Galleries (Fetch from Payload)
    try {
        const allGalleriesResponse = await getPublishedGalleries('all', 1000); // Fetch all galleries
        allGalleriesResponse.docs.forEach((gallery: PayloadGallery) => { // Added type
            const locales = gallery.locale ? [gallery.locale] : LANGUAGES;
            locales.forEach(lang => {
               if (gallery.slug) {
                   urls.push({
                       loc: `${SITE_URL}/${lang}/portfolio/${gallery.slug}`,
                       lastmod: gallery.updatedAt?.split('T')[0] || currentDate,
                       changefreq: 'yearly', // Galleries might not change often
                       priority: 0.6
                   });
               }
            });
        });
        // Add portfolio index page if not already in static pages
        if (!staticPages.some(p => p === '/portfolio')) { // Check if portfolio index exists
            LANGUAGES.forEach(lang => {
                urls.push({ loc: `${SITE_URL}/${lang}/portfolio`, lastmod: currentDate, changefreq: 'weekly', priority: 0.7 });
            });
        }
    } catch (error) { console.error("Sitemap: Error fetching portfolio galleries:", error); }


    // Remove duplicates just in case (though logic should prevent them)
    urls = urls.filter((url, index, self) =>
       index === self.findIndex((u) => (u.loc === url.loc))
    );


    // Generate XML String
    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `
<url>
    <loc>${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
    ${url.priority ? `<priority>${url.priority.toFixed(1)}</priority>` : ''}
</url>`).join('')}
</urlset>`;

    return new NextResponse(xmlContent, {
        status: 200,
        headers: {
            'Content-Type': 'application/xml',
            // Cache control headers
            'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate', // Cache for 1 day
        },
    });
}

 // Ensure this route is dynamically rendered as it might fetch data
 // export const dynamic = 'force-dynamic'; // Or use revalidate if fetching data inside
