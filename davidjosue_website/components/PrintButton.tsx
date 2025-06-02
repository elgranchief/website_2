'use client'; // This component needs client-side interactivity

import React from 'react';

// Refined Printer Icon SVG component (Moved from cv/page.tsx)
const PrinterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0M12 12.75h.008v.008H12v-.008Z" />
  </svg>
);

interface PrintButtonProps {
  lang: string; // Pass lang for localized aria-label
}

export function PrintButton({ lang }: PrintButtonProps) {
  const isSpanish = lang === 'es-MX';

  // Print handler (Moved from cv/page.tsx)
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="absolute top-16 right-6 md:right-10 lg:right-16 xl:right-20 print:hidden flex items-center gap-4 py-2 text-brand-text-secondary hover:text-brand-accent transition-colors duration-400 ease-elegant"
      aria-label={isSpanish ? 'Imprimir CV' : 'Print CV'}
    >
      <span className="text-xs tracking-widest uppercase font-light">{isSpanish ? 'Imprimir' : 'Print'}</span>
      <PrinterIcon className="w-5 h-5" />
    </button>
  );
}