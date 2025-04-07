// /components/Footer.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';

// Refined Social Icon Components - thinner strokes, more minimal
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YouTubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

// Patreon Icon SVG Component - simplified
const PatreonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14.82 2.41C18.78 2.41 22 5.65 22 9.62C22 13.58 18.78 16.8 14.82 16.8C10.85 16.8 7.61 13.58 7.61 9.62C7.61 5.65 10.85 2.41 14.82 2.41Z" />
    <path d="M2 21.6V2.41H5.5V21.6" />
  </svg>
);

export function Footer() {
  const params = useParams();
  const lang = params.lang as string;

  if (!lang) {
    return <footer className="pt-26 border-t border-brand-border" aria-hidden="true" />;
  }

  // Define URLs
  const instagramUrl = "https://www.instagram.com/davidjosuephotographer/";
  const facebookUrl = "https://www.facebook.com/DavidJosuePhotographer/";
  const linkedInUrl = "https://www.linkedin.com/in/davidjosue/";
  const youtubeUrl = "https://www.youtube.com/@davidjosue";
  const patreonUrl = "https://www.patreon.com/davidjosue";
  const rizoUrl = "https://pod.co/rizomatico";
  const buenBeatUrl = "https://pod.co/buen-beat";
  const scheduleCallUrl = "#schedule"; // Replace with actual Calendly link
  const freeGuideUrl = `/${lang}/services/destination-weddings#wedding-guide`;

  return (
    <footer className="border-t border-brand-border bg-brand-background">
      <div className="px-6 md:px-10 lg:px-16 xl:px-20 py-20 md:py-26">
        {/* Refined Logo and Description - More spacing */}
        <div className="flex flex-col md:flex-row gap-20 md:gap-28 lg:gap-34 mb-20">
          <div className="md:w-1/3 lg:w-1/4">
            <Link href={`/${lang}`} className="inline-block mb-8">
              <Image
                src="/logo_negro.png"
                alt="David Josue Photography"
                width={150}
                height={48}
                style={{ width: 'auto', height: '75px' }}
                unoptimized
              />
            </Link>
            <p className="font-light text-sm text-brand-text-secondary leading-relaxed mb-8 max-w-xs">
              {lang === 'es-MX'
                ? 'Capturando la verdad emocional en bodas, boudoir y arte. Reconocido internacionalmente, basado en Valle de Guadalupe.'
                : 'Capturing emotional truth in weddings, boudoir & fine art. Internationally recognized, based in Valle de Guadalupe.'}
            </p>
            
            {/* Social Icons - More elegant grouping */}
            <div className="flex items-center gap-6">
              <a href={instagramUrl} aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover-lift">
                <InstagramIcon className="w-5 h-5 text-brand-text-secondary hover:text-brand-accent transition-colors duration-400 ease-elegant" />
              </a>
              <a href={facebookUrl} aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="hover-lift">
                <FacebookIcon className="w-5 h-5 text-brand-text-secondary hover:text-brand-accent transition-colors duration-400 ease-elegant" />
              </a>
              <a href={linkedInUrl} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover-lift">
                <LinkedInIcon className="w-5 h-5 text-brand-text-secondary hover:text-brand-accent transition-colors duration-400 ease-elegant" />
              </a>
              <a href={youtubeUrl} aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="hover-lift">
                <YouTubeIcon className="w-5 h-5 text-brand-text-secondary hover:text-brand-accent transition-colors duration-400 ease-elegant" />
              </a>
              <a href={patreonUrl} aria-label="Patreon" target="_blank" rel="noopener noreferrer" className="hover-lift">
                <PatreonIcon className="w-5 h-5 text-brand-text-secondary hover:text-brand-accent transition-colors duration-400 ease-elegant" />
              </a>
            </div>
          </div>

          {/* Four Navigation Columns - More elegant spacing */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-14 lg:gap-20 md:flex-1">
            {/* Column 1 */}
            <div>
              <h3 className="elegant-caps mb-6 text-brand-text-primary">{lang === 'es-MX' ? 'Servicios' : 'Services'}</h3>
              <ul className="space-y-4">
                <li>
                  <Link href={`/${lang}/services/destination-weddings`} className="link-subtle text-sm">
                    {lang === 'es-MX' ? 'Bodas' : 'Weddings'}
                  </Link>
                </li>
                <li>
                  <Link href={`/${lang}/services/boudoir`} className="link-subtle text-sm">
                    Boudoir
                  </Link>
                </li>
                <li>
                  <Link href={`/${lang}/services/portraits`} className="link-subtle text-sm">
                    {lang === 'es-MX' ? 'Retratos' : 'Portraits'}
                  </Link>
                </li>
                <li>
                  <Link href={`/${lang}/fine-art`} className="link-subtle text-sm">
                    {lang === 'es-MX' ? 'Arte' : 'Fine Art'}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="elegant-caps mb-6 text-brand-text-primary">{lang === 'es-MX' ? 'Explora' : 'Explore'}</h3>
              <ul className="space-y-4">
                <li>
                  <Link href={`/${lang}/portfolio`} className="link-subtle text-sm">
                    {lang === 'es-MX' ? 'Portafolio' : 'Portfolio'}
                  </Link>
                </li>
                <li>
                  <Link href={`/${lang}/about`} className="link-subtle text-sm">
                    {lang === 'es-MX' ? 'Acerca' : 'About'}
                  </Link>
                </li>
                <li>
                  <Link href={`/${lang}/blog`} className="link-subtle text-sm">
                    {lang === 'es-MX' ? 'Diario' : 'Journal'}
                  </Link>
                </li>
                <li>
                  <Link href={`/${lang}/cv`} className="link-subtle text-sm">
                    Curriculum
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="elegant-caps mb-6 text-brand-text-primary">{lang === 'es-MX' ? 'Recursos' : 'Resources'}</h3>
              <ul className="space-y-4">
                <li>
                  <Link href={`/${lang}/for-photographers`} className="link-subtle text-sm">
                    {lang === 'es-MX' ? 'Para Fotógrafos' : 'For Photographers'}
                  </Link>
                </li>
                <li>
                  <Link href={freeGuideUrl} className="link-subtle text-sm">
                    {lang === 'es-MX' ? 'Guía de Bodas' : 'Wedding Guide'}
                  </Link>
                </li>
                <li>
                  <a href={youtubeUrl} className="link-subtle text-sm" target="_blank" rel="noopener noreferrer">
                    YouTube
                  </a>
                </li>
                {lang === 'es-MX' && (
                  <>
                    <li>
                      <a href={rizoUrl} className="link-subtle text-sm" target="_blank" rel="noopener noreferrer">
                        Podcast Rizomático
                      </a>
                    </li>
                    <li>
                      <a href={buenBeatUrl} className="link-subtle text-sm" target="_blank" rel="noopener noreferrer">
                        Podcast Buen Beat
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="elegant-caps mb-6 text-brand-text-primary">{lang === 'es-MX' ? 'Contacto' : 'Contact'}</h3>
              <ul className="space-y-4">
                <li>
                  <Link href={`/${lang}/contact`} className="link-subtle text-sm">
                    {lang === 'es-MX' ? 'Contacto' : 'Contact Form'}
                  </Link>
                </li>
                <li>
                  <a href={scheduleCallUrl} className="link-subtle text-sm">
                    {lang === 'es-MX' ? 'Agendar Llamada' : 'Schedule a Call'}
                  </a>
                </li>
                <li className="pt-2">
                  <p className="text-sm text-brand-text-secondary">Valle de Guadalupe, BC</p>
                  <p className="text-sm text-brand-text-secondary">dj@davidjosue.com</p>
                  <p className="text-sm text-brand-text-secondary">+52 (646) 419-8615</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Elegantly minimal */}
        <div className="pt-12 border-t border-brand-border text-center">
          <p className="text-xs text-brand-text-secondary font-light" suppressHydrationWarning>
            © {new Date().getFullYear()} David Josue Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
