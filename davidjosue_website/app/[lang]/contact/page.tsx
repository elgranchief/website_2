// /app/[lang]/contact/page.tsx
import { Metadata } from 'next';
import { ShootqForm } from '@/components/ShootqForm';
import React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal'; // Import animation component

export const metadata: Metadata = {
  title: 'Contact | David Josue Photography',
  description: 'Connect with David Josue to begin capturing your unique story through artful wedding, boudoir, or event photography.',
   // robots: { index: false, follow: true }, // Consider noindexing if form is the main goal
 };

 export default function ContactPage({ params }: { params: { lang: string } }) {
   const lang = params.lang === 'es-MX' ? 'es-MX' : 'en-US';
   const isSpanish = lang === 'es-MX';

   // Define contact details
   const contactEmail = "dj@davidjosue.com";
   const whatsappNumber = "+5216644198615";
   const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`;
   const instagramWeddingsHandle = "davidjosuephotographer";
   const instagramBoudoirHandle = "davidjosueboudoir";
   const instagramWeddings = `https://www.instagram.com/${instagramWeddingsHandle}/`;
   const instagramBoudoir = `https://www.instagram.com/${instagramBoudoirHandle}/`;

   // Simple SVG Icon Component (can be moved to a separate file later)
   const InstagramIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
       <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
       <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
       <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
     </svg>
   );
    const WhatsAppIcon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    );
     const MailIcon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
        <rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
      </svg>
     );


   return (
     <div className="bg-white"> {/* Ensure base background */}
       {/* Optional: Subtle Hero/Header Section */}
       <section className="py-16 md:py-24 bg-light text-center">
         <div className="container mx-auto max-w-screen-md px-4">
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-4 text-gray-900">
             {isSpanish ? 'Iniciemos Tu Historia Visual' : 'Let\'s Begin Your Visual Story'}
           </h1>
           <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
             {isSpanish ? 'Estás aquí porque buscas algo más que simples fotos. Buscas arte que capture la esencia, la emoción, la verdad de tus momentos más preciados. El primer paso es conectar.' : 'You\'re here because you seek more than just pictures. You seek art that captures the essence, the emotion, the truth of your most precious moments. The first step is to connect.'}
           </p>
         </div>
       </section>

       {/* Main Content Area */}
       <ScrollReveal>
       <div className="container mx-auto px-4 py-16 md:py-24">
         <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-16 items-start">
           
           {/* Column 1: Form (Takes more space) */}
           <div className="md:col-span-3">
             <h2 className="text-2xl md:text-3xl font-serif font-light mb-4 text-gray-800">{isSpanish ? 'Cuéntame Tu Visión' : 'Share Your Vision'}</h2>
             <p className="text-gray-600 mb-6">{isSpanish ? 'Completar este formulario es la mejor manera de iniciar. Me permite conocer tus ideas y asegurar que nuestra primera conversación sea significativa y productiva.' : 'Filling out this form is the best way to start. It allows me to understand your ideas and ensures our first conversation is meaningful and productive.'}</p>
             {/* Container for the form with enhanced styling */}
             <div className="bg-light p-6 sm:p-8 rounded-lg shadow-sm border border-gray-200"> 
               <ShootqForm />
             </div>
           </div>

           {/* Column 2: Text Content & Details (Takes less space) */}
           <div className="md:col-span-2 md:pt-2"> {/* Adjusted padding */}
              <h2 className="text-2xl md:text-3xl font-serif font-light mb-6 text-gray-800">{isSpanish ? 'Otras Formas de Conectar' : 'Other Ways to Connect'}</h2>
              
              <div className="space-y-6"> {/* Increased spacing */}
                {/* Email */}
                <div className="flex items-start gap-3">
                   <MailIcon />
                   <div>
                     <p className="text-sm text-gray-500 mb-0.5">{isSpanish ? 'Correo Electrónico:' : 'Email:'}</p>
                     <a href={`mailto:${contactEmail}`} className="text-lg text-gray-800 hover:text-gray-900 hover:underline break-words">
                       {contactEmail}
                     </a>
                     <p className="text-xs text-gray-500 mt-1">{isSpanish ? 'Para consultas generales o colaboraciones.' : 'For general inquiries or collaborations.'}</p>
                   </div>
                 </div>
                 
                 {/* WhatsApp */}
                 <div className="flex items-start gap-3">
                    <WhatsAppIcon />
                    <div>
                      <p className="text-sm text-gray-500 mb-0.5">WhatsApp:</p>
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-lg text-gray-800 hover:text-gray-900 hover:underline">
                        {whatsappNumber}
                      </a>
                       <p className="text-xs text-gray-500 mt-1">{isSpanish ? 'Para consultas rápidas.' : 'For quick inquiries.'}</p>
                    </div>
                 </div>

                 {/* Instagram Section */}
                 <div className="pt-4">
                    <p className="text-sm text-gray-500 mb-2">{isSpanish ? 'Sígueme en Instagram:' : 'Follow on Instagram:'}</p>
                    <div className="space-y-4">
                      {/* Weddings Instagram */}
                      <a href={instagramWeddings} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200">
                        <InstagramIcon />
                        <div>
                          <span className="font-medium text-gray-800">@{instagramWeddingsHandle}</span>
                          <span className="block text-sm text-gray-500">{isSpanish ? 'Bodas y Parejas' : 'Weddings & Couples'}</span>
                        </div>
                      </a>
                      {/* Boudoir Instagram */}
                      <a href={instagramBoudoir} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200">
                         <InstagramIcon />
                         <div>
                           <span className="font-medium text-gray-800">@{instagramBoudoirHandle}</span>
                           <span className="block text-sm text-gray-500">Boudoir & {isSpanish ? 'Empoderamiento' : 'Empowerment'}</span>
                         </div>
                      </a>
                    </div>
                 </div>
              </div>
           </div>

         </div>
       </div>
       </ScrollReveal>
     </div>
   );
 }
