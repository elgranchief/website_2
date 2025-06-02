// /app/[lang]/layout.tsx
import type { Metadata, Viewport } from 'next';
// Import chosen fonts: Cormorant Garamond and Lato
import { Cormorant_Garamond, Lato } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";
import '../globals.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { GtmScript } from '../../components/GtmScript';
import Script from 'next/script';

// Instantiate fonts with optimal settings
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // Available weights
  variable: '--font-cormorant',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'], // Available weights
  variable: '--font-lato',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'David Josue | International Wedding & Boudoir Photographer',
    template: '%s | David Josue Photography',
  },
  description: 'Internationally acclaimed wedding and boudoir photographer David Josue, based in Valle de Guadalupe, Mexico. Capturing authentic moments worldwide.',
  openGraph: {
    title: 'David Josue | International Wedding & Boudoir Photographer',
    description: 'Capturing authentic moments worldwide from Valle de Guadalupe, Mexico.',
    url: siteUrl,
    siteName: 'David Josue Photography',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'David Josue | International Wedding & Boudoir Photographer',
    description: 'Capturing authentic moments worldwide from Valle de Guadalupe, Mexico.',
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  colorScheme: 'light',
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const currentLang = params.lang === 'es-MX' ? 'es-MX' : 'en-US'; 

  const alternates = {
    canonical: `${siteUrl}/${currentLang}`,
    languages: {
      'en-US': `${siteUrl}/en-US`,
      'es-MX': `${siteUrl}/es-MX`,
      'x-default': `${siteUrl}/en-US`, 
    },
  };

  return (
    <html 
      lang={currentLang} 
      className={`${cormorant.variable} ${lato.variable}`}
    > 
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen antialiased bg-brand-background selection:bg-brand-accent/20">
        {/* <GtmScript /> */}
        <div className="flex min-h-screen flex-col">
          <Header />
          {/* Extra margin for refined spacing */}
          <main className="flex-1 mt-8 md:mt-12">{children}</main>
          <Footer />
        </div>

        {/* Flodesk Universal Code */}
        <Script id="flodesk-universal" strategy="lazyOnload">
          {`
            (function(w, d, t, h, s, n) {
              w.FlodeskObject = n;
              var fn = function() {
                (w[n].q = w[n].q || []).push(arguments);
              };
              w[n] = w[n] || fn;
              var f = d.getElementsByTagName(t)[0];
              var sm = d.createElement(t);
              sm.async = true;
              sm.type = 'module';
              sm.src = h + s + '.mjs';
              f.parentNode.insertBefore(sm, f);
              var sn = d.createElement(t);
              sn.async = true;
              sn.noModule = true;
              sn.src = h + s + '.js';
              f.parentNode.insertBefore(sn, f);
            })(window, document, 'script', 'https://assets.flodesk.com', '/universal', 'fd');
          `}
        </Script>
        <Analytics />
      </body>
    </html>
  );
}
