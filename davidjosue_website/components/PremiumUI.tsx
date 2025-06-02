'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';
import { ScrollReveal } from './ScrollReveal';

// Standard types
interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'text';
  className?: string;
}

interface ImageContainerProps {
  src: string;
  alt: string;
  aspectRatio?: 'portrait' | 'landscape' | 'square' | 'video';
  priority?: boolean;
  width?: number;
  height?: number;
  className?: string;
  hoverEffect?: 'zoom' | 'none';
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  bgColor?: 'background' | 'background-alt' | 'dark' | 'white';
  fullHeight?: boolean;
}

interface TestimonialProps {
  quote: string;
  author: string;
  position?: string;
  className?: string; 
}

interface HeroProps {
  backgroundSrc: string;
  backgroundAlt: string;
  heading: string;
  subheading?: string;
  children?: ReactNode;
  overlayOpacity?: 'light' | 'medium' | 'dark';
  contentWidth?: 'narrow' | 'medium' | 'wide';
}

// Premium button component with consistent styling
export function PremiumButton({ 
  href, 
  children, 
  variant = 'primary',
  className = '' 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center text-sm uppercase tracking-widest font-light transition-all duration-400 ease-elegant";
  
  let variantStyles = '';
  
  switch (variant) {
    case 'primary':
      variantStyles = "px-10 py-3 bg-white text-brand-text-primary hover:bg-white/90";
      break;
    case 'secondary':
      variantStyles = "px-10 py-3 border border-white text-white hover:bg-white/10";
      break;
    case 'text':
      variantStyles = "border-b border-brand-text-primary pb-1 hover:border-brand-accent";
      break;
    default:
      variantStyles = "px-10 py-3 bg-white text-brand-text-primary hover:bg-white/90";
  }
  
  return (
    <Link href={href} className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </Link>
  );
}

// Premium image container with proper styling and hover effects
export function PremiumImage({
  src,
  alt,
  aspectRatio = 'landscape',
  priority = false,
  width = 0,
  height = 0,
  className = '',
  hoverEffect = 'none'
}: ImageContainerProps) {
  // Set aspect ratio class
  let aspectRatioClass = '';
  let defaultWidth = 1200;
  let defaultHeight = 800;
  
  switch (aspectRatio) {
    case 'portrait':
      aspectRatioClass = 'aspect-[2/3]';
      defaultWidth = 800;
      defaultHeight = 1200;
      break;
    case 'landscape':
      aspectRatioClass = 'aspect-[3/2]';
      defaultWidth = 1200;
      defaultHeight = 800;
      break;
    case 'square':
      aspectRatioClass = 'aspect-square';
      defaultWidth = 800;
      defaultHeight = 800;
      break;
    case 'video':
      aspectRatioClass = 'aspect-video';
      defaultWidth = 1200;
      defaultHeight = 675;
      break;
  }
  
  // Set hover effect class
  const hoverEffectClass = hoverEffect === 'zoom' ? 'transition-transform duration-500 group-hover:scale-105' : '';
  
  // Use provided dimensions or defaults based on aspect ratio
  const imageWidth = width || defaultWidth;
  const imageHeight = height || defaultHeight;
  
  return (
    <div className={`relative overflow-hidden ${aspectRatioClass} ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={imageWidth}
        height={imageHeight}
        priority={priority}
        className={`w-full h-full object-cover ${hoverEffectClass}`}
        quality={90}
      />
    </div>
  );
}

// Premium section container with proper spacing and background colors
export function PremiumSection({
  children,
  className = '',
  bgColor = 'background',
  fullHeight = false
}: SectionProps) {
  let bgColorClass = '';
  
  switch (bgColor) {
    case 'background':
      bgColorClass = 'bg-brand-background';
      break;
    case 'background-alt':
      bgColorClass = 'bg-brand-background-alt';
      break;
    case 'dark':
      bgColorClass = 'bg-brand-text-primary text-white';
      break;
    case 'white':
      bgColorClass = 'bg-white';
      break;
  }
  
  const heightClass = fullHeight ? 'h-[85vh]' : '';
  
  return (
    <section className={`py-24 md:py-32 ${bgColorClass} ${heightClass} ${className}`}>
      <div className="container mx-auto max-w-screen-lg px-4">
        {children}
      </div>
    </section>
  );
}

// Premium testimonial component with elegant styling
export function PremiumTestimonial({
  quote,
  author,
  position,
  className = ''
}: TestimonialProps) {
  return (
    <blockquote className={`relative ${className}`}>
      <p className="text-xl md:text-3xl text-serif font-light italic leading-relaxed mb-8">
        "{quote}"
      </p>
      <footer className="text-brand-text-secondary">
        <cite className="font-medium">— {author}{position ? `, ${position}` : ''}</cite>
      </footer>
    </blockquote>
  );
}

// Premium hero section with full-width background and overlay
export function PremiumHero({
  backgroundSrc,
  backgroundAlt,
  heading,
  subheading,
  children,
  overlayOpacity = 'medium',
  contentWidth = 'medium'
}: HeroProps) {
  // Set overlay opacity class
  let overlayClass = '';
  
  switch (overlayOpacity) {
    case 'light':
      overlayClass = 'bg-gradient-to-t from-black/60 via-black/30 to-black/20';
      break;
    case 'medium':
      overlayClass = 'bg-gradient-to-t from-black/70 via-black/40 to-black/30';
      break;
    case 'dark':
      overlayClass = 'bg-gradient-to-t from-black/80 via-black/50 to-black/40';
      break;
  }
  
  // Set content width class
  let contentWidthClass = '';
  
  switch (contentWidth) {
    case 'narrow':
      contentWidthClass = 'max-w-2xl';
      break;
    case 'medium':
      contentWidthClass = 'max-w-3xl';
      break;
    case 'wide':
      contentWidthClass = 'max-w-4xl';
      break;
  }
  
  return (
    <section className="relative h-[85vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundSrc}
        alt={backgroundAlt}
        fill
        priority
        quality={90}
        className="absolute inset-0 z-0 object-cover"
      />
      
      {/* Overlay Gradient */}
      <div className={`absolute inset-0 z-1 ${overlayClass}`}></div>
      
      {/* Content */}
      <div className={`relative z-10 p-4 mx-auto ${contentWidthClass}`}>
        <ScrollReveal delay={0.3} direction="fade">
          <h1 className="text-5xl sm:text-6xl md:text-7xl text-serif font-light mb-12 leading-tight tracking-[0.08em]">
            {heading}
          </h1>
          
          {subheading && (
            <p className="text-base md:text-lg max-w-2xl mx-auto mb-14 font-light tracking-wider text-white/90">
              {subheading}
            </p>
          )}
          
          {children}
        </ScrollReveal>
      </div>
    </section>
  );
}

// Grid layout for services or features
interface ServiceGridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

export function ServiceGrid({
  children,
  columns = 4,
  className = ''
}: ServiceGridProps) {
  let gridClass = '';
  
  switch (columns) {
    case 2:
      gridClass = 'grid-cols-1 md:grid-cols-2';
      break;
    case 3:
      gridClass = 'grid-cols-1 md:grid-cols-3';
      break;
    case 4:
      gridClass = 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      break;
  }
  
  return (
    <div className={`grid ${gridClass} gap-8 ${className}`}>
      {children}
    </div>
  );
}

// Service card component
interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  delay?: number;
}

export function ServiceCard({
  title,
  description,
  imageSrc,
  imageAlt,
  href,
  delay = 0.5
}: ServiceCardProps) {
  return (
    <ScrollReveal delay={delay}>
      <Link href={href} className="group block">
        <div className="aspect-square overflow-hidden bg-gray-100 mb-5">
          <Image 
            src={imageSrc} 
            alt={imageAlt} 
            width={500} 
            height={500} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <h3 className="text-xl text-serif font-light mb-2">{title}</h3>
        <p className="text-sm text-brand-text-secondary max-w-xs mx-auto">{description}</p>
      </Link>
    </ScrollReveal>
  );
}

// Process step component
interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  delay?: number;
}

export function ProcessStep({
  number,
  title,
  description,
  delay = 0.5
}: ProcessStepProps) {
  return (
    <ScrollReveal delay={delay}>
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-widest text-brand-text-primary/60">{number}</p>
        <h3 className="text-xl font-light">{title}</h3>
        <p className="text-brand-text-secondary">{description}</p>
      </div>
    </ScrollReveal>
  );
}
