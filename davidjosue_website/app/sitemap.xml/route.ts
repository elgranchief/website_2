// /app/sitemap.xml/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getAllPosts } from '@/data/blog-posts';
import { getAllGalleries } from '@/data/portfolio-galleries';
import destinationsDataUntyped from '@/data/destinations.json';
import locationsDataUntyped from '@/data/locations.json';
import { StaticBlogPost, StaticGallery } from '@/types/static-content';

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
        '/portfolio',
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

    // 2. Dynamic Blog Posts
    try {
      const allPosts = getAllPosts();
      allPosts.forEach((post: StaticBlogPost) => {
        LANGUAGES.forEach(lang => {
          const isSpanish = lang === 'es-MX';
          const slug = isSpanish && post.slugEs ? post.slugEs : post.slug;
          urls.push({
              loc: `${SITE_URL}/${lang}/blog/${slug}`,
              lastmod: post.date || currentDate,
              changefreq: 'monthly',
              priority: 0.7
          });
        });
      });
    } catch (error) { console.error("Sitemap: Error processing blog posts:", error); }


    // 3. Dynamic Destination/Location Pages (From /data)
    try {
        // Use the combined list structure from programmatic page
        allPlacesSitemap.forEach(place => {
          LANGUAGES.forEach(lang => {
             const slug = lang === 'es-MX' ? place.slug_es : place.slug_en;
             // Determine path segment based on type
             const pageType = place.type === 'destination' ? 'destinations' : 'locations';
             if (slug) {
                // Check if the base page exists in staticPages before adding dynamic ones
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

    // 5. Dynamic Portfolio Galleries
    try {
        const allGalleries = getAllGalleries();
        allGalleries.forEach((gallery: StaticGallery) => {
          LANGUAGES.forEach(lang => {
            const isSpanish = lang === 'es-MX';
            const slug = isSpanish && gallery.slugEs ? gallery.slugEs : gallery.slug;
            urls.push({
                loc: `${SITE_URL}/${lang}/portfolio/${slug}`,
                lastmod: currentDate,
                changefreq: 'yearly',
                priority: 0.6
            });
          });
        });
    } catch (error) { console.error("Sitemap: Error processing portfolio galleries:", error); }

    // Remove duplicates just in case
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
