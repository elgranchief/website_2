// /components/FlodeskForm.tsx
 'use client';

 import Script from 'next/script';
 import { useEffect } from 'react';

 interface FlodeskFormProps {
   lang: string; // Add lang prop to determine which form ID to use
   // formId?: string; // Remove optional formId prop, it will be determined by lang
   containerId?: string; // Keep containerId optional, but base it on the chosen formId
 }

 // Define the form IDs
 const FORM_ID_EN = '67e32378fa472b376ebdbda7';
 const FORM_ID_ES = '67eafc4e4eb4e44ff20bfc6f';

 export function FlodeskForm({ lang, containerId }: FlodeskFormProps) {
   const isSpanish = lang === 'es-MX';
   const formId = isSpanish ? FORM_ID_ES : FORM_ID_EN;
   // Ensure containerId is unique if not provided
   const effectiveContainerId = containerId || `fd-form-${formId}`; 

   // We need useEffect to ensure the window.fd function exists after the main Flodesk script runs
   useEffect(() => {
     // Ensure window object is available (runs only on client-side)
     if (typeof window !== 'undefined') {
       const initializeForm = () => {
         if (window.fd) {
           window.fd('form', {
             formId: formId, // Use the language-specific formId
             containerEl: `#${effectiveContainerId}` // Use the unique containerId
           });
         } else {
           // Optional: Add a listener or retry mechanism if window.fd isn't ready immediately
           console.warn("Flodesk object (window.fd) not found immediately. Form init might be delayed.");
           // Consider adding a small delay or checking periodically
           const checkFd = setInterval(() => {
             if (window.fd) {
               window.fd('form', { formId: formId, containerEl: `#${effectiveContainerId}` });
               clearInterval(checkFd);
             }
           }, 100);
           // Clear interval after some time to prevent infinite loops
           setTimeout(() => clearInterval(checkFd), 5000);
         }
       };
       // Delay initialization slightly to ensure the container div exists in the DOM
       const timer = setTimeout(initializeForm, 0); 
       return () => clearTimeout(timer); // Cleanup timer on unmount
     }
   }, [formId, effectiveContainerId]); // Re-run if props change

   return (
     // The div where Flodesk will inject the form
     <div id={effectiveContainerId}></div>
   );
 }

// Make sure the main Flodesk universal script in layout.tsx runs first (e.g., strategy="beforeInteractive")

// Extend window interface (do this in a global .d.ts file ideally, e.g., flodesk.d.ts)
declare global {
    interface Window {
        fd?: any; // Use a more specific type if available, mark as optional
    }
}
