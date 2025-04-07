// /app/[lang]/thanks_contact/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script'; // Import Script for potential dataLayer push

export const metadata: Metadata = {
  title: 'Message Sent! | David Josue Photography',
  // IMPORTANT: Prevent indexing of thank you pages
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThanksContactPage({ params }: { params: { lang: string } }) {
  const lang = params.lang === 'es-MX' ? 'es-MX' : 'en-US';

  return (
    <div className="container mx-auto max-w-screen-md px-4 py-16 md:py-24 text-center">
      <h1 className="text-3xl md:text-4xl font-serif font-light mb-4">
        {lang === 'es-MX' ? '¡Mensaje Enviado!' : 'Message Sent!'}
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        {lang === 'es-MX' ? 'Gracias por ponerte en contacto. Revisaré tu mensaje y me comunicaré contigo lo antes posible (normalmente en 24-48 horas).' : 'Thank you for reaching out. I\'ll review your message and get back to you as soon as possible (usually within 24-48 hours).'}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={`/${lang}/blog`} className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors">
             {lang === 'es-MX' ? 'Explorar el Blog' : 'Explore the Blog'}
          </Link>
          <Link href={`/${lang}`} className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 py-2 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition-colors">
            {lang === 'es-MX' ? 'Volver al Inicio' : 'Back to Homepage'}
          </Link>
       </div>
        {/* Conversion Tracking Note: GTM event should be triggered on page load via GTM trigger */}
       {/* <Script id="gtm-thanks-contact-conversion" strategy="afterInteractive">
         {`
           window.dataLayer = window.dataLayer || [];
           window.dataLayer.push({
             'event': 'contact_form_success',
             'language': '${lang}' // Optional: pass language
           });
         `}
       </Script> */}
    </div>
  );
}
