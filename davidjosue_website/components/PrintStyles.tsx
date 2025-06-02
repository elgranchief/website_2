'use client'; // This component needs client-side context for styled-jsx

import React from 'react';

// Enhanced print styles for elegant CV printing (Moved from cv/page.tsx)
export function PrintStyles() {
  return (
    <style jsx global>{`
      @media print {
        /* Page setup */
        @page {
          size: portrait;
          margin: 1.5cm;
        }
        
        /* Hide non-essential elements */
        .print\\:hidden,
        button {
          display: none !important;
        }
        
        /* Style the main container */
        .min-h-screen {
          min-height: auto !important;
          background: white !important;
          padding: 0 !important;
        }
        
        /* Format the header area */
        .bg-brand-text-primary {
          background: white !important;
          color: black !important;
          padding: 0 !important;
          margin-bottom: 1cm !important;
        }
        
        /* Make sure text is black and formatting is clean */
        h1, h2, h3, p, li, span, div {
          color: black !important;
          text-shadow: none !important;
        }
        
        h2 {
          font-size: 16pt !important;
          margin-bottom: 0.5cm !important;
          border-bottom: 1px solid #000 !important;
          padding-bottom: 0.2cm !important;
        }
        
        h3 {
          font-size: 14pt !important;
          margin-bottom: 0.3cm !important;
        }
        
        p, li {
          font-size: 11pt !important;
          line-height: 1.4 !important;
        }
        
        /* Format sections */
        section {
          background: white !important;
          border: none !important;
          box-shadow: none !important;
          margin-bottom: 0.7cm !important;
          padding: 0 !important;
          page-break-inside: avoid !important;
        }
        
        /* Format the profile image */
        .rounded-full {
          border-radius: 0 !important;
          border: 1px solid #000 !important;
        }
        
        /* Format borders */
        .border-l {
          border-left: 1px solid #000 !important;
          margin-left: 0 !important;
          padding-left: 0.5cm !important;
          margin-bottom: 0.4cm !important;
        }
        
        /* Show the print-only title */
        .hidden.print\\:block {
          display: block !important;
          font-size: 18pt !important;
          text-align: center !important;
          margin-bottom: 0.5cm !important;
          font-weight: bold !important;
        }
        
        /* Format columns */
        .grid {
          display: block !important;
        }
        
        .grid > div {
          margin-bottom: 0.5cm !important;
        }
        
        /* Ensure proper spacing between elements */
        .space-y-16 > * + * {
          margin-top: 0.7cm !important;
        }
        
        .space-y-10 > * + * {
          margin-top: 0.5cm !important;
        }
        
        .space-y-6 > * + * {
          margin-top: 0.3cm !important;
        }
      }
    `}</style>
  );
}