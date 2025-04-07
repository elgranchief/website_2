// /app/[lang]/thankyou_guide/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script'; // Import Script for potential dataLayer push

export const metadata: Metadata = {
  title: 'Thank You! | David Josue Photography',
  // IMPORTANT: Prevent indexing of thank you pages
  robots: {
    index: false,
    follow: true, // Allow crawlers to follow links if any, but don't index the page itself
  },
};

export default function ThankYouGuidePage({ params }: { params: { lang: string } }) {
  const lang = params.lang === 'es-MX' ? 'es-MX' : 'en-US';

  return (
    <div className="container mx-auto max-w-screen-md px-4 py-16 md:py-24 text-center">
      <h1 className="text-3xl md:text-4xl font-serif font-light mb-4">
        {lang === 'es-MX' ? '¡Gracias!' : 'Thank You!'}
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        {lang === 'es-MX' ? 'Tu guía gratuita para bodas de destino en México está en camino a tu bandeja de entrada. ¡Mientras esperas, explora más!' : 'Your free Mexico destination wedding guide is on its way to your inbox. While you wait, feel free to explore more!'}
      </p>
       {/* Optional: Add image or confirmation graphic */}
       <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={`/${lang}/blog`} className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors">
             {lang === 'es-MX' ? 'Ir al Blog' : 'Visit the Blog'}
          </Link>
          <Link href={`/${lang}`} className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 py-2 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition-colors">
            {lang === 'es-MX' ? 'Volver al Inicio' : 'Back to Homepage'}
          </Link>
       </div>
       {/* Conversion Tracking Note: GTM event should be triggered on page load via GTM trigger */}
       {/* Example of pushing directly to dataLayer if needed (less common with GTM page view triggers) */}
       {/* <Script id="gtm-thankyou-guide-conversion" strategy="afterInteractive">
         {`
           window.dataLayer = window.dataLayer || [];
           window.dataLayer.push({
             'event': 'guide_download_success',
             'language': '${lang}' // Optional: pass language
           });
         `}
       </Script> */}
    </div>
  );
}
