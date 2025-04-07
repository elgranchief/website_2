// /components/Header.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useState, useEffect } from 'react';

export function Header() {
  const params = useParams();
  const lang = params.lang as string;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Refined navigation links with minimal labels
  const navLinks = [
    { href: '/services/destination-weddings', label_en: 'Weddings', label_es: 'Bodas' },
    { href: '/services/boudoir', label_en: 'Boudoir', label_es: 'Boudoir' },
    { href: '/services/portraits', label_en: 'Portraits', label_es: 'Retratos' },
    { href: '/fine-art', label_en: 'Fine Art', label_es: 'Arte' },
    { href: '/blog', label_en: 'Journal', label_es: 'Diario' },
    { href: '/about', label_en: 'About', label_es: 'Acerca' },
    { href: '/for-photographers', label_en: 'For Photographers', label_es: 'Para Fotógrafos' },
    { href: '/contact', label_en: 'Contact', label_es: 'Contacto' },
  ];

  if (!lang) {
    return <header className="fixed top-0 z-50 w-full h-20 bg-brand-background" aria-hidden="true" />;
  }

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-400 ease-elegant ${
        scrolled 
          ? 'h-16 bg-brand-background/95 backdrop-blur-md shadow-sm' 
          : 'h-20 bg-brand-background'
      }`}
    >
      <div className="mx-auto flex h-full items-center justify-between px-6 md:px-10 lg:px-16 xl:px-20">
        {/* Logo */}
        <Link href={`/${lang}`} className="flex items-center">
          <Image
            src="/logo_negro.png"
            alt="David Josue Photography"
            width={140}
            height={45}
            style={{ 
              width: 'auto', 
              height: scrolled ? '68px' : '75px',
              transition: 'height 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)'
            }}
            priority
            unoptimized
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-10 lg:space-x-12">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={`/${lang}${link.href}`}
                  className="elegant-caps text-xxs hover:text-brand-accent transition-colors duration-400 ease-elegant"
                >
                  {lang === 'es-MX' ? link.label_es : link.label_en}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side elements */}
        <div className="flex items-center gap-6 md:gap-8">
          <LanguageSwitcher />
          
          {/* Schedule Call Button - Hidden on mobile */}
          <Link 
            href="#" 
            className="hidden lg:flex items-center h-8 px-5 border border-brand-border hover:border-brand-accent text-xxs elegant-caps hover:text-brand-accent transition-all duration-400 ease-elegant"
          >
            {lang === 'es-MX' ? 'Agendar Llamada' : 'Schedule a Call'}
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">{mobileMenuOpen ? "Close menu" : "Open menu"}</span>
            <span 
              className={`block w-5 h-px bg-brand-text-primary transition-transform duration-400 ease-elegant ${
                mobileMenuOpen ? 'transform rotate-45 translate-y-0.5' : 'mb-1.5'
              }`}
            />
            <span 
              className={`block w-5 h-px bg-brand-text-primary transition-opacity duration-400 ease-elegant ${
                mobileMenuOpen ? 'opacity-0' : 'mb-1.5'
              }`}
            />
            <span 
              className={`block w-5 h-px bg-brand-text-primary transition-transform duration-400 ease-elegant ${
                mobileMenuOpen ? 'transform -rotate-45 -translate-y-1' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu - Elegant slide-down */}
      <div 
        className={`md:hidden absolute inset-x-0 bg-brand-background border-b border-brand-border transition-all duration-400 ease-elegant overflow-hidden ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-8 space-y-6">
          {navLinks.map((link) => (
            <div key={`mobile-${link.href}`} className="border-b border-brand-border pb-3">
              <Link
                href={`/${lang}${link.href}`}
                className="block text-sm font-light hover:text-brand-accent transition-colors duration-400 ease-elegant"
                onClick={() => setMobileMenuOpen(false)}
              >
                {lang === 'es-MX' ? link.label_es : link.label_en}
              </Link>
            </div>
          ))}
          
          <div className="pt-4">
            <Link
              href="#"
              className="inline-block px-6 py-3 border border-brand-text-primary text-xxs tracking-wider uppercase hover:text-brand-accent hover:border-brand-accent transition-all duration-400 ease-elegant"
              onClick={() => setMobileMenuOpen(false)}
            >
              {lang === 'es-MX' ? 'Agendar Llamada' : 'Schedule a Call'}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
