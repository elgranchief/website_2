'use client';

import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal } from './ScrollReveal';

// Types for gallery components
interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

interface GalleryGridProps {
  children: ReactNode;
  className?: string;
}

interface ImageRowProps {
  images: ImageProps[];
  className?: string;
  delay?: number;
}

interface MasonryGalleryProps {
  images: ImageProps[];
  columns?: 2 | 3 | 4;
  className?: string;
}

interface GalleryCardProps {
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
  delay?: number;
}

interface EditorialLayoutProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  content: string | ReactNode;
  imagePosition?: 'left' | 'right';
  imagePriority?: boolean;
  className?: string;
  delay?: number;
}

// Base gallery grid component for consistent styling
export function GalleryGrid({ children, className = '' }: GalleryGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${className}`}>
      {children}
    </div>
  );
}

// Row of images with equal spacing
export function ImageRow({ images, className = '', delay = 0.3 }: ImageRowProps) {
  return (
    <ScrollReveal delay={delay}>
      <div className={`flex flex-col md:flex-row gap-4 md:gap-8 ${className}`}>
        {images.map((image, index) => (
          <div key={index} className="flex-1">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width || 600}
              height={image.height || 400}
              className={`w-full h-auto ${image.className || ''}`}
              priority={image.priority || false}
            />
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}

// Masonry-style gallery layout
export function MasonryGallery({ images, columns = 3, className = '' }: MasonryGalleryProps) {
  // Split images into column arrays
  const columnArrays: ImageProps[][] = Array.from({ length: columns }, () => []);
  
  images.forEach((image, i) => {
    columnArrays[i % columns].push(image);
  });
  
  return (
    <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-4 md:gap-6 ${className}`}>
      {columnArrays.map((columnImages, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-4 md:gap-6">
          {columnImages.map((image, imgIndex) => (
            <ScrollReveal key={imgIndex} delay={0.2 + (colIndex * 0.1) + (imgIndex * 0.05)}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width || 600}
                height={image.height || 800}
                className={`w-full h-auto ${image.className || ''}`}
                priority={image.priority || false}
              />
            </ScrollReveal>
          ))}
        </div>
      ))}
    </div>
  );
}

// Gallery card with image and text
export function GalleryCard({
  title,
  description,
  imageSrc,
  imageAlt,
  href,
  aspectRatio = 'landscape',
  delay = 0.3
}: GalleryCardProps) {
  let aspectRatioClass = '';
  let defaultWidth = 600;
  let defaultHeight = 400;
  
  switch (aspectRatio) {
    case 'portrait':
      aspectRatioClass = 'aspect-[2/3]';
      defaultWidth = 600;
      defaultHeight = 900;
      break;
    case 'landscape':
      aspectRatioClass = 'aspect-[3/2]';
      defaultWidth = 600;
      defaultHeight = 400;
      break;
    case 'square':
      aspectRatioClass = 'aspect-square';
      defaultWidth = 600;
      defaultHeight = 600;
      break;
  }
  
  return (
    <ScrollReveal delay={delay}>
      <Link href={href} className="group block">
        <div className={`overflow-hidden mb-4 ${aspectRatioClass}`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={defaultWidth}
            height={defaultHeight}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <h3 className="text-xl text-serif font-light mb-2">{title}</h3>
        {description && (
          <p className="text-sm text-brand-text-secondary">{description}</p>
        )}
      </Link>
    </ScrollReveal>
  );
}

// Editorial layout with image and text side by side
export function EditorialLayout({
  imageSrc,
  imageAlt,
  title,
  content,
  imagePosition = 'left',
  imagePriority = false,
  className = '',
  delay = 0.3
}: EditorialLayoutProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${className}`}>
      {/* Image Column */}
      <ScrollReveal delay={delay} className={imagePosition === 'right' ? 'md:order-2' : ''}>
        <div className="relative">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={800}
            height={1200}
            priority={imagePriority}
            className="w-full h-auto"
          />
        </div>
      </ScrollReveal>
      
      {/* Content Column */}
      <ScrollReveal delay={delay + 0.2} className={imagePosition === 'right' ? 'md:order-1' : ''}>
        <div className="flex flex-col space-y-6">
          <h2 className="text-3xl md:text-4xl text-serif font-light tracking-wide mb-6">
            {title}
          </h2>
          {typeof content === 'string' ? (
            <p className="text-base md:text-lg text-brand-text-secondary leading-relaxed">
              {content}
            </p>
          ) : (
            content
          )}
        </div>
      </ScrollReveal>
    </div>
  );
}

// Gallery with caption
interface CaptionedImageProps extends ImageProps {
  caption: string;
  captionPosition?: 'bottom' | 'overlay';
}

export function CaptionedImage({
  src,
  alt,
  width = 1200,
  height = 800,
  caption,
  captionPosition = 'bottom',
  className = '',
  priority = false
}: CaptionedImageProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="w-full h-auto"
      />
      
      {captionPosition === 'overlay' ? (
        <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <p className="text-white text-sm font-light">{caption}</p>
        </div>
      ) : (
        <p className="mt-2 text-sm text-brand-text-secondary font-light">{caption}</p>
      )}
    </div>
  );
}

// Two-image layout with one larger than the other
interface DualImageLayoutProps {
  mainImage: ImageProps;
  secondaryImage: ImageProps;
  layout?: 'main-left' | 'main-right' | 'main-top' | 'main-bottom';
  className?: string;
  delay?: number;
}

export function DualImageLayout({
  mainImage,
  secondaryImage,
  layout = 'main-left',
  className = '',
  delay = 0.3
}: DualImageLayoutProps) {
  // Different layouts based on the layout prop
  const isHorizontal = layout === 'main-left' || layout === 'main-right';
  
  return (
    <ScrollReveal delay={delay}>
      <div className={`
        ${isHorizontal ? 'flex flex-col md:flex-row' : 'flex flex-col'} 
        gap-4 md:gap-8 
        ${className}
      `}>
        {/* Main Image */}
        <div className={`
          ${isHorizontal ? 'md:w-2/3' : 'w-full'} 
          ${(layout === 'main-right' || layout === 'main-bottom') ? 'md:order-2' : 'md:order-1'}
        `}>
          <Image
            src={mainImage.src}
            alt={mainImage.alt}
            width={mainImage.width || 800}
            height={mainImage.height || 600}
            className={`w-full h-auto ${mainImage.className || ''}`}
            priority={mainImage.priority || false}
          />
        </div>
        
        {/* Secondary Image */}
        <div className={`
          ${isHorizontal ? 'md:w-1/3' : 'w-full'} 
          ${(layout === 'main-right' || layout === 'main-bottom') ? 'md:order-1' : 'md:order-2'}
        `}>
          <Image
            src={secondaryImage.src}
            alt={secondaryImage.alt}
            width={secondaryImage.width || 400}
            height={secondaryImage.height || 600}
            className={`w-full h-auto ${secondaryImage.className || ''}`}
            priority={secondaryImage.priority || false}
          />
        </div>
      </div>
    </ScrollReveal>
  );
}

// Full-width image with text overlay
interface HeroImageWithTextProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  overlayOpacity?: 'light' | 'medium' | 'dark';
  textPosition?: 'center' | 'left' | 'right' | 'bottom-left' | 'bottom-right';
  className?: string;
}

export function HeroImageWithText({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  overlayOpacity = 'medium',
  textPosition = 'center',
  className = ''
}: HeroImageWithTextProps) {
  // Set overlay opacity class
  let overlayClass = '';
  
  switch (overlayOpacity) {
    case 'light':
      overlayClass = 'bg-black/30';
      break;
    case 'medium':
      overlayClass = 'bg-black/50';
      break;
    case 'dark':
      overlayClass = 'bg-black/70';
      break;
  }
  
  // Set text position class
  let positionClass = '';
  
  switch (textPosition) {
    case 'center':
      positionClass = 'items-center justify-center text-center';
      break;
    case 'left':
      positionClass = 'items-center justify-start text-left pl-8 md:pl-16';
      break;
    case 'right':
      positionClass = 'items-center justify-end text-right pr-8 md:pr-16';
      break;
    case 'bottom-left':
      positionClass = 'items-end justify-start text-left p-8 md:p-16';
      break;
    case 'bottom-right':
      positionClass = 'items-end justify-end text-right p-8 md:p-16';
      break;
  }
  
  return (
    <div className={`relative aspect-[3/2] overflow-hidden ${className}`}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={1600}
        height={1067}
        className="w-full h-full object-cover"
        quality={90}
      />
      
      <div className={`absolute inset-0 ${overlayClass}`}></div>
      
      <div className={`absolute inset-0 flex flex-col ${positionClass} text-white`}>
        <h2 className="text-3xl md:text-5xl text-serif font-light tracking-wide mb-4">
          {title}
        </h2>
        
        {subtitle && (
          <p className="text-base md:text-lg max-w-lg font-light">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
