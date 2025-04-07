'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ScrollReveal'; // Import animation component

// Refined Printer Icon SVG component
const PrinterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0M12 12.75h.008v.008H12v-.008Z" />
  </svg>
);

// Enhanced print styles for elegant CV printing
const PrintStyles = () => (
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


export default function CVPage({ params }: { params: { lang: string } }) {
  const lang = params.lang === 'es-MX' ? 'es-MX' : 'en-US';
  const isSpanish = lang === 'es-MX';

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Include the print styles */}
      <PrintStyles />
      
      {/* Clean, minimal layout with proper whitespace */}
      <div className="min-h-screen bg-brand-background font-sans"> 
        {/* Hero Header - Elevated with subtle styling */}
        <div className="w-full bg-brand-text-primary text-white py-20 md:py-26 lg:py-34">
          <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20 flex flex-col md:flex-row items-center md:items-start gap-16 md:gap-20 lg:gap-26">
            {/* Profile Image - Understated elegance */}
            <div className="md:w-1/4 flex justify-center md:justify-start">
              <div className="w-48 h-48 md:w-56 md:h-56 overflow-hidden rounded-full border border-white/20">
                <Image
                  src="/images/selfie-davidjosue.jpg"
                  alt={isSpanish ? 'Foto de David Josué Delgado Salazar' : 'Photo of David Josué Delgado Salazar'}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </div>
            </div>
            
            {/* Header Text Content - Refined typography */}
            <div className="md:w-3/4 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal mb-6 tracking-tight leading-tight"> 
                David Josué Delgado Salazar
              </h1>
              <p className="text-xl md:text-2xl font-light mb-10 text-white/80 tracking-wider uppercase">
                {isSpanish ? 'Fotógrafo Profesional' : 'Professional Photographer'}
              </p>
              
              {/* Contact Info - Clean, sophisticated layout */}
              <div className="space-y-4 text-base text-white/70 mb-10"> 
                <p><span className="text-white font-light">{isSpanish ? 'Ubicación:' : 'Location:'}</span> Valle de Guadalupe, Ensenada, BC, México</p>
                <p><span className="text-white font-light">{isSpanish ? 'Contacto:' : 'Contact:'}</span> dj@davidjosue.com | +52 (646) 419-8615</p>
                <p><span className="text-white font-light">{isSpanish ? 'Idiomas:' : 'Languages:'}</span> {isSpanish ? 'Español (Nativo), Inglés (Avanzado)' : 'Spanish (Native), English (Advanced)'}</p>
                <p>
                  <span className="text-white font-light">LinkedIn:</span>{' '}
                  <a href="https://www.linkedin.com/in/davidjosue/" target="_blank" rel="noopener noreferrer" className="hover:text-white text-white/70 transition-colors duration-400 ease-elegant">
                    linkedin.com/in/davidjosue
                  </a>
                </p>
              </div>
              
              {/* Back Button - Minimal, elegant styling */}
              <div className="print:hidden"> 
                <Link 
                  href={`/${lang}/about`}
                  className="inline-flex items-center text-sm font-light px-0 py-1 text-white/80 hover:text-white border-b border-white/30 hover:border-white transition-all duration-400 ease-elegant"
                >
                  {isSpanish ? '← Volver a Biografía' : '← Back to Biography'}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CV Content Area - Luxurious spacing */}
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20 py-16 md:py-26 lg:py-34 relative"> 
          {/* Minimalist Print Button */}
          <button 
            onClick={handlePrint}
            className="absolute top-16 right-6 md:right-10 lg:right-16 xl:right-20 print:hidden flex items-center gap-4 py-2 text-brand-text-secondary hover:text-brand-accent transition-colors duration-400 ease-elegant"
            aria-label={isSpanish ? 'Imprimir CV' : 'Print CV'}
          >
            <span className="text-xs tracking-widest uppercase font-light">{isSpanish ? 'Imprimir' : 'Print'}</span>
            <PrinterIcon className="w-5 h-5" />
          </button>

        {/* Printable CV content starts here */}
        {/* <ScrollReveal> Removed from here */}
        <div className="cv-print-container">
          {/* Print-only title that appears at the top of the printed document */}
          <div className="hidden print:block cv-print-title">
            DAVID JOSUÉ DELGADO SALAZAR - CURRICULUM VITAE
          </div>
          
        {/* Professional Profile Section - Minimal, elegant styling */}
        {/* <ScrollReveal> */}
        <section className="mb-20 cv-print-section">
          <h2 className="text-2xl font-serif font-normal tracking-tight text-brand-text-primary mb-10 pb-6 border-b border-brand-border">
            {isSpanish ? 'Perfil Profesional' : 'Professional Profile'}
          </h2>
          <p className="text-brand-text-secondary font-light leading-relaxed max-w-content">
            {isSpanish
              ? 'Fotógrafo profesional, director de fotografía y experto en medios sociales con más de 20 años de experiencia en producción audiovisual, cine y fotografía. Especializado en fotografía editorial, eventos internacionales, fotografía publicitaria y dirección de fotografía para cine y televisión. Reconocido internacionalmente entre los mejores fotógrafos de bodas del mundo, con amplia trayectoria docente impartiendo talleres y conferencias sobre creatividad y técnicas fotográficas avanzadas.'
              : 'Professional photographer, director of photography, and social media expert with over 20 years of experience in audiovisual production, film, and photography. Specialized in editorial photography, international events, advertising photography, and cinematography for film and television. Internationally recognized among the world\'s top wedding photographers, with extensive teaching experience giving workshops and conferences on creativity and advanced photographic techniques.'}
          </p>
        </section>
        {/* </ScrollReveal> */}

        {/* Professional Experience Section - Elegant, minimal styling */}
        {/* <ScrollReveal> */}
        <section className="mb-20 cv-print-section">
          <h2 className="text-2xl font-serif font-normal tracking-tight text-brand-text-primary mb-10 pb-6 border-b border-brand-border">
            {isSpanish ? 'Experiencia Profesional' : 'Professional Experience'}
          </h2>
          <div className="space-y-16">
            {/* Job: David Josué Photographer */}
            <div className="border-l border-brand-border pl-8">
              <h3 className="text-xl font-serif font-normal text-brand-text-primary mb-2">
                {isSpanish ? 'Fotógrafo Profesional y Experto en Medios Sociales' : 'Professional Photographer & Social Media Expert'}
              </h3>
              <p className="text-brand-text-secondary font-light mb-6 text-sm">David Josué Photographer | {isSpanish ? 'Mayo 2004 - Presente' : 'May 2004 - Present'}</p>
              <ul className="bullet-list pl-5 space-y-3 text-brand-text-secondary font-light">
                <li>{isSpanish ? 'Fotografía de eventos a nivel internacional.' : 'International event photography.'}</li>
                <li>{isSpanish ? 'Campañas publicitarias para marcas reconocidas: Carl\'s Jr., Cinépolis, Whiskas, Rancho Tecate, Hacienda Santana, Culinary Art School.' : 'Advertising campaigns for recognized brands: Carl\'s Jr., Cinépolis, Whiskas, Rancho Tecate, Hacienda Santana, Culinary Art School.'}</li>
                <li>{isSpanish ? 'Colaboraciones editoriales con Revista Expansión, Revista Quién, Revista Todos Santos, Revista M, Revista Volaris.' : 'Editorial collaborations with Expansión Magazine, Quién Magazine, Todos Santos Magazine, M Magazine, Volaris Magazine.'}</li>
                <li>{isSpanish ? 'Especialización en fotografía editorial, retrato corporativo, eventos, producto, arquitectura y paisajismo.' : 'Specialization in editorial photography, corporate portraiture, events, product, architecture, and landscape photography.'}</li>
              </ul>
            </div>
            
            {/* Job: Tecnológico de Monterrey */}
            <div className="border-l border-brand-border pl-8">
              <h3 className="text-xl font-serif font-normal text-brand-text-primary mb-2">
                {isSpanish ? 'Profesor de Cátedra - Fotografía' : 'Lecturer - Photography'}
              </h3>
              <p className="text-brand-text-secondary font-light mb-6 text-sm">Tecnológico de Monterrey, Campus Monterrey | 2006-2008</p>
              <ul className="bullet-list pl-5 space-y-3 text-brand-text-secondary font-light">
                <li>{isSpanish ? 'Profesor de la materia "Fotografía del Objeto".' : 'Taught the course "Object Photography".'}</li>
                <li>{isSpanish ? 'Desarrollo de programas académicos y evaluación de proyectos estudiantiles.' : 'Developed academic programs and evaluated student projects.'}</li>
              </ul>
            </div>
            
            {/* Job: Valle Continental */}
            <div className="border-l border-brand-border pl-8">
              <h3 className="text-xl font-serif font-normal text-brand-text-primary mb-2">
                {isSpanish ? 'Instructor de Fotografía' : 'Photography Instructor'}
              </h3>
              <p className="text-brand-text-secondary font-light mb-6 text-sm">Valle Continental | 2008-2011</p>
              <ul className="bullet-list pl-5 space-y-3 text-brand-text-secondary font-light">
                <li>{isSpanish ? 'Profesor de fotografía con enfoque en técnicas avanzadas.' : 'Taught photography with a focus on advanced techniques.'}</li>
              </ul>
            </div>
            
            {/* Job: Rumores Producciones */}
            <div className="border-l border-brand-border pl-8">
              <h3 className="text-xl font-serif font-normal text-brand-text-primary mb-2">
                {isSpanish ? 'Director de Fotografía' : 'Director of Photography'}
              </h3>
              <p className="text-brand-text-secondary font-light mb-6 text-sm">Rumores Producciones S.A. de C.V. | {isSpanish ? 'Enero 2002 - Mayo 2004' : 'January 2002 - May 2004'}</p>
              <ul className="bullet-list pl-5 space-y-3 text-brand-text-secondary font-light">
                <li>{isSpanish ? 'Director de fotografía principal para la serie de televisión "Rumores" (48 capítulos).' : 'Lead director of photography for the TV series "Rumores" (48 episodes).'}</li>
                <li>{isSpanish ? 'Dirección de fotografía para comerciales y programas piloto.' : 'Cinematography for commercials and pilot programs.'}</li>
                <li>{isSpanish ? 'Webmaster de las páginas del programa y de la productora.' : 'Webmaster for the program\'s and production company\'s websites.'}</li>
                <li>{isSpanish ? 'Transmisión en Televisa Monterrey y retransmisión internacional.' : 'Broadcast on Televisa Monterrey and internationally.'}</li>
              </ul>
            </div>
             
             {/* Job: Universidad Virtual, ITESM */}
             <div className="border-l border-brand-border pl-8">
              <h3 className="text-xl font-serif font-normal text-brand-text-primary mb-2">
                {isSpanish ? 'Programador Web' : 'Web Programmer'}
              </h3>
              <p className="text-brand-text-secondary font-light mb-6 text-sm">Universidad Virtual, ITESM | {isSpanish ? 'Agosto 2001 - Febrero 2002' : 'August 2001 - February 2002'}</p>
              <ul className="bullet-list pl-5 space-y-3 text-brand-text-secondary font-light">
                <li>{isSpanish ? 'Programación de contenido educativo HTML para cursos en línea.' : 'Programmed HTML educational content for online courses.'}</li>
                <li>{isSpanish ? 'Desarrollo de interfaz para plataforma de educación a distancia.' : 'Developed interface for distance learning platform.'}</li>
              </ul>
            </div>
             
             {/* Job: Depto. Proyectos Cinematográficos, ITESM */}
             <div className="border-l border-brand-border pl-8">
              <h3 className="text-xl font-serif font-normal text-brand-text-primary mb-2">
                {isSpanish ? 'Director de Fotografía y Gaffer' : 'Director of Photography & Gaffer'}
              </h3>
              <p className="text-brand-text-secondary font-light mb-6 text-sm">{isSpanish ? 'Departamento de Proyectos Cinematográficos, ITESM' : 'Film Projects Department, ITESM'} | {isSpanish ? 'Enero 1998 - Mayo 2001' : 'January 1998 - May 2001'}</p>
              <ul className="bullet-list pl-5 space-y-3 text-brand-text-secondary font-light">
                <li>{isSpanish ? 'Asesoría en dirección de fotografía para 18 cortometrajes estudiantiles.' : 'Advised on cinematography for 18 student short films.'}</li>
                <li>{isSpanish ? 'Apoyo técnico y creativo para estudiantes de Comunicación.' : 'Provided technical and creative support for Communication students.'}</li>
              </ul>
            </div>
          </div>
        </section>
        {/* </ScrollReveal> */}

        {/* Academic Formation Section - Clean, elegant styling */}
        {/* <ScrollReveal> */}
        <section className="mb-20 cv-print-section">
          <h2 className="text-2xl font-serif font-normal tracking-tight text-brand-text-primary mb-10 pb-6 border-b border-brand-border">
            {isSpanish ? 'Formación Académica' : 'Academic Formation'}
          </h2>
          <div className="space-y-12 mb-14">
            <div className="border-l border-brand-border pl-8">
              <h3 className="text-xl font-serif font-normal text-brand-text-primary mb-2">
                {isSpanish ? 'Maestría en Artes Visuales (Educación)' : 'Master in Visual Arts (Education)'}
              </h3>
              <p className="text-brand-text-secondary font-light">
                Universidad Autónoma de Nuevo León (UANL) | 2003 - 2004 ({isSpanish ? 'Cardex Aprobado' : 'Coursework Completed'})
              </p>
            </div>
            
            <div className="border-l border-brand-border pl-8">
              <h3 className="text-xl font-serif font-normal text-brand-text-primary mb-2">
                {isSpanish ? 'Master en Dirección de Fotografía' : 'Master in Cinematography'}
              </h3>
              <p className="text-brand-text-secondary font-light">
                Escuela Internacional de Cine y Televisión (EICTV), Cuba | 2002 ({isSpanish ? 'Diplomado Intensivo' : 'Intensive Diploma'})
              </p>
            </div>
            
            <div className="border-l border-brand-border pl-8">
              <h3 className="text-xl font-serif font-normal text-brand-text-primary mb-2">
                {isSpanish ? 'Licenciatura en Ciencias de la Comunicación' : 'Bachelor of Communication Sciences'}
              </h3>
              <p className="text-brand-text-secondary font-light">
                Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) | 1997 - 2001
              </p>
            </div>
          </div>
          
          {/* Specialized Training - Minimal, elegant styling */}
          <div>
            <h3 className="text-xl font-serif font-normal text-brand-text-primary mb-8">
              {isSpanish ? 'Formación Especializada' : 'Specialized Training'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 text-brand-text-secondary font-light">
              <p>{isSpanish ? 'Diplomado en Arte Contemporáneo, Museo Marco (2001)' : 'Diploma in Contemporary Art, Marco Museum (2001)'}</p>
              <p>{isSpanish ? 'Edición Fotográfica, Cineteca NL (2000)' : 'Photographic Editing, Cineteca NL (2000)'}</p>
              <p>{isSpanish ? 'Desarrollo de Portafolio, Cineteca NL (2000)' : 'Portfolio Development, Cineteca NL (2000)'}</p>
              <p>{isSpanish ? 'Diplomado en Cinematografía Digital, UNISON (2000)' : 'Diploma in Digital Cinematography, UNISON (2000)'}</p>
              <p>{isSpanish ? 'Diplomado en Realización Cinematográfica, UNISON (1999)' : 'Diploma in Filmmaking, UNISON (1999)'}</p>
            </div>
          </div>
        </section>
        {/* </ScrollReveal> */}

        {/* Exhibitions Section - Minimal, elegant styling */}
        {/* <ScrollReveal> */}
        <section className="mb-20 cv-print-section">
          <h2 className="text-2xl font-serif font-normal tracking-tight text-brand-text-primary mb-10 pb-6 border-b border-brand-border">
            {isSpanish ? 'Exposiciones' : 'Exhibitions'}
          </h2>
          <div className="space-y-10">
            <div className="border-l border-brand-border pl-8">
              <h3 className="text-xl font-serif font-normal text-brand-text-primary mb-2">
                {isSpanish ? 'Manifiestos del Alma' : 'Manifestos of the Soul'}
              </h3>
              <p className="text-brand-text-secondary font-light">CEART, Tecate, BC | {isSpanish ? 'Octubre 2017' : 'October 2017'} ({isSpanish ? 'Individual' : 'Solo'})</p>
              <p className="text-brand-text-secondary font-light text-sm mt-1">{isSpanish ? '40 piezas glicée 100x80cm' : '40 giclée pieces 100x80cm'}</p>
            </div>
            
            <div className="border-l border-brand-border pl-8">
              <h3 className="text-xl font-serif font-normal text-brand-text-primary mb-2">
                {isSpanish ? 'Mujer Madre' : 'Woman Mother'}
              </h3>
              <p className="text-brand-text-secondary font-light">CEART, Tecate, BC | {isSpanish ? 'Mayo 2016' : 'May 2016'} ({isSpanish ? 'Individual' : 'Solo'})</p>
              <p className="text-brand-text-secondary font-light text-sm mt-1">{isSpanish ? '12 piezas 100x60cm, 2 piezas 200x140cm' : '12 pieces 100x60cm, 2 pieces 200x140cm'}</p>
            </div>
            
            <div className="border-l border-brand-border pl-8">
              <h3 className="text-xl font-serif font-normal text-brand-text-primary mb-2">
                {isSpanish ? 'Día de Muertos' : 'Day of the Dead'}
              </h3>
              <p className="text-brand-text-secondary font-light">CEART, Tecate, BC | {isSpanish ? 'Noviembre 2016' : 'November 2016'} ({isSpanish ? 'Colectiva' : 'Group'})</p>
              <p className="text-brand-text-secondary font-light text-sm mt-1">{isSpanish ? 'Primer lugar concurso fotográfico' : 'First place photo contest'}</p>
            </div>
            
            <div className="border-l border-brand-border pl-8">
              <h3 className="text-xl font-serif font-normal text-brand-text-primary mb-2">
                {isSpanish ? 'La Ruta Nupcial' : 'The Bridal Route'}
              </h3>
              <p className="text-brand-text-secondary font-light">{isSpanish ? 'Museo de la Vid y el Vino, Valle de Guadalupe, BC' : 'Museum of Vine and Wine, Valle de Guadalupe, BC'} | {isSpanish ? 'Junio 2015' : 'June 2015'} ({isSpanish ? 'Colectiva' : 'Group'})</p>
            </div>
            
            <div className="border-l border-brand-border pl-8">
              <h3 className="text-xl font-serif font-normal text-brand-text-primary mb-2">INT-PORT</h3>
              <p className="text-brand-text-secondary font-light">{isSpanish ? 'Casa de la Cultura, Santa Catarina, NL' : 'House of Culture, Santa Catarina, NL'} | {isSpanish ? 'Julio 2005' : 'July 2005'} ({isSpanish ? 'Individual' : 'Solo'})</p>
              <p className="text-brand-text-secondary font-light text-sm mt-1">{isSpanish ? '9 piezas Giclée 30x40 pulgadas' : '9 Giclée pieces 30x40 inches'}</p>
            </div>
            
            <div className="border-l border-brand-border pl-8">
              <h3 className="text-xl font-serif font-normal text-brand-text-primary mb-2">
                {isSpanish ? 'San Juan' : 'San Juan'}
              </h3>
              <p className="text-brand-text-secondary font-light">Cineteca, Monterrey, NL | {isSpanish ? 'Septiembre 2004' : 'September 2004'} ({isSpanish ? 'Colectiva, Foto Septiembre' : 'Group, Foto Septiembre'})</p>
              <p className="text-brand-text-secondary font-light text-sm mt-1">{isSpanish ? 'Ganadora primer lugar premio del público' : 'Winner first place audience award'}</p>
            </div>
          </div>
        </section>
        {/* </ScrollReveal> */}

        {/* Audiovisual Productions Section - Elegant styling */}
        {/* <ScrollReveal> */}
        <section className="mb-20 cv-print-section">
          <h2 className="text-2xl font-serif font-normal tracking-tight text-brand-text-primary mb-10 pb-6 border-b border-brand-border">
            {isSpanish ? 'Producciones Audiovisuales' : 'Audiovisual Productions'}
          </h2>
          <div className="space-y-16">
            {/* Direction */}
            <div className="border-l border-brand-border pl-8">
              <h3 className="text-xl font-serif font-normal text-brand-text-primary mb-6">
                {isSpanish ? 'Dirección' : 'Direction'}
              </h3>
              <div className="space-y-6 text-brand-text-secondary font-light">
                <div>
                  <p className="font-medium">"Burger P.I." (2004)</p>
                  <p className="text-sm mt-1">{isSpanish ? 'Piloto para serie de televisión' : 'TV Series Pilot'}</p>
                </div>
                
                <div>
                  <p className="font-medium">"El Funeral de los Dedos" (2001)</p>
                  <p className="text-sm mt-1">{isSpanish ? 'Cortometraje 16mm' : '16mm Short Film'}</p>
                  <ul className="bullet-list pl-5 text-sm mt-2 space-y-1">
                    <li>{isSpanish ? 'Selección Oficial, "CineClub Regional", U. Sonora' : 'Official Selection, "CineClub Regional", U. Sonora'}</li>
                    <li>{isSpanish ? 'Muestra 30 Aniversario Proyectos Cinematográficos MTY' : '30th Anniversary Showcase Film Projects MTY'}</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-medium">"Hormiguitas" (2000)</p>
                  <p className="text-sm mt-1">{isSpanish ? 'Mokumental' : 'Mocumentary'}</p>
                  <ul className="bullet-list pl-5 text-sm mt-2 space-y-1">
                    <li>{isSpanish ? 'Mención Honorífica, "Primera Toma", U. Sonora' : 'Honorable Mention, "Primera Toma", U. Sonora'}</li>
                    <li>{isSpanish ? 'Selección Oficial, Festival Creadores Sonorenses UNISON' : 'Official Selection, Sonoran Creators Festival UNISON'}</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Director of Photography */}
            <div className="border-l border-brand-border pl-8">
              <h3 className="text-xl font-serif font-normal text-brand-text-primary mb-6">
                {isSpanish ? 'Dirección de Fotografía' : 'Director of Photography'}
              </h3>
              <div className="space-y-6 text-brand-text-secondary font-light">
                <div>
                  <p className="font-medium">"Rumores" (2002-2004)</p>
                  <p className="text-sm mt-1">{isSpanish ? 'Serie de televisión (48 capítulos)' : 'TV Series (48 episodes)'}</p>
                </div>
                
                <div>
                  <p className="font-medium">"El Burócrata" (2004)</p>
                  <p className="text-sm mt-1">{isSpanish ? 'Cortometraje animado (Dir. Jorge Flores)' : 'Animated Short Film (Dir. Jorge Flores)'}</p>
                  <ul className="bullet-list pl-5 text-sm mt-2">
                    <li>{isSpanish ? 'Proyecto ganador beca Fullbright 2004-2006' : 'Fullbright Grant winning project 2004-2006'}</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-medium">"Ocho de Lejos" (2003)</p>
                  <p className="text-sm mt-1">{isSpanish ? 'Cortometraje 16mm (Dir. Raúl Treviño)' : '16mm Short Film (Dir. Raúl Treviño)'}</p>
                  <ul className="bullet-list pl-5 text-sm mt-2">
                    <li>{isSpanish ? 'Selección Oficial, Festival Int. Cine Michoacán' : 'Official Selection, Michoacán Int. Film Festival'}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* </ScrollReveal> */}

        {/* Teaching Experience & Conferences Section - Elegant styling */}
        {/* <ScrollReveal> */}
        <section className="mb-20 cv-print-section">
          <h2 className="text-2xl font-serif font-normal tracking-tight text-brand-text-primary mb-10 pb-6 border-b border-brand-border">
            {isSpanish ? 'Experiencia Docente y Conferencias' : 'Teaching Experience & Conferences'}
          </h2>
          <div className="space-y-16">
            {/* International Workshops */}
            <div className="border-l border-brand-border pl-8">
              <h3 className="text-xl font-serif font-normal text-brand-text-primary mb-6">
                {isSpanish ? 'Talleres Internacionales' : 'International Workshops'}
              </h3>
              <ul className="space-y-3 text-brand-text-secondary font-light">
                <li>WedRockers Workshop, Seville, {isSpanish ? 'España' : 'Spain'} (2011)</li>
                <li>Off Camera Flash Workshop, Barcelona, {isSpanish ? 'España' : 'Spain'} (2011)</li>
                <li>Off Camera Flash Workshop, Delft, {isSpanish ? 'Holanda' : 'Netherlands'} (2011)</li>
                <li>WedRockers Workshop, San Diego, {isSpanish ? 'EE.UU.' : 'USA'} (2011)</li>
              </ul>
            </div>
            
            {/* Conferences & Seminars */}
            <div className="border-l border-brand-border pl-8">
              <h3 className="text-xl font-serif font-normal text-brand-text-primary mb-6">
                {isSpanish ? 'Conferencias y Seminarios' : 'Conferences & Seminars'}
              </h3>
              <ul className="space-y-3 text-brand-text-secondary font-light">
                <li>{isSpanish ? 'Ponente "Wedrockers", Mystic Seminars, Mystic, EE.UU.' : 'Speaker "Wedrockers", Mystic Seminars, Mystic, USA'} (2014)</li>
                <li>{isSpanish ? 'Ponente "Off Camera Flash", Mystic Seminars, Mystic, EE.UU.' : 'Speaker "Off Camera Flash", Mystic Seminars, Mystic, USA'} (2014)</li>
                <li>{isSpanish ? 'Conferencista en "Ellas", Querétaro' : 'Speaker at "Ellas", Querétaro'} (2014)</li>
                <li>{isSpanish ? 'Workshop en Seminario Luminaria' : 'Workshop at Luminaria Seminar'} (2016)</li>
              </ul>
            </div>
            
            {/* National Workshops */}
            <div className="border-l border-brand-border pl-8">
              <h3 className="text-xl font-serif font-normal text-brand-text-primary mb-6">
                {isSpanish ? 'Talleres Nacionales' : 'National Workshops'}
              </h3>
              <ul className="space-y-3 text-brand-text-secondary font-light">
                <li>WedRockers Workshop, Monterrey (2008)</li>
                <li>Off Camera Flash Workshop, Querétaro (2009)</li>
                <li>Off Camera Flash Workshop, Monterrey (2009-2014)</li>
                <li>WedRockers Workshop, Holbox, Riviera Maya (2010)</li>
                <li>WedRockers Workshop, Tabasco & Palenque (2010)</li>
                <li>WedRockers Workshop, {isSpanish ? 'Ciudad de México' : 'Mexico City'} (2010)</li>
                <li>{isSpanish ? 'Taller Bajagrafos, Tecate, BC' : 'Bajagrafos Workshop, Tecate, BC'} (2014)</li>
              </ul>
            </div>
          </div>
        </section>
        {/* </ScrollReveal> */}

        {/* Awards & Recognitions Section - Elegant styling */}
        {/* <ScrollReveal> */}
        <section className="mb-20 cv-print-section">
          <h2 className="text-2xl font-serif font-normal tracking-tight text-brand-text-primary mb-10 pb-6 border-b border-brand-border">
            {isSpanish ? 'Premios y Reconocimientos' : 'Awards & Recognitions'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l border-brand-border pl-8">
              <p className="text-brand-text-secondary font-light leading-relaxed">
                {isSpanish ? 'Top 10 Fotógrafos de Boda en México' : 'Top 10 Wedding Photographers in Mexico'}
              </p>
            </div>
            <div className="border-l border-brand-border pl-8">
              <p className="text-brand-text-secondary font-light leading-relaxed">
                {isSpanish ? 'Top 20 Fotógrafos del Mundo - ISPWP' : 'Top 20 Photographers in the World - ISPWP'}
              </p>
            </div>
            <div className="border-l border-brand-border pl-8">
              <p className="text-brand-text-secondary font-light leading-relaxed">
                {isSpanish ? 'Primer Lugar en Portafolio Personal - ISPWP' : 'First Place Personal Portfolio - ISPWP'}
              </p>
            </div>
            <div className="border-l border-brand-border pl-8">
              <p className="text-brand-text-secondary font-light leading-relaxed">
                {isSpanish ? 'Primer lugar premio del público, "San Juan"' : 'First place audience award, "San Juan"'}
              </p>
              <p className="text-brand-text-secondary font-light text-sm mt-1">
                {isSpanish ? 'Cineteca Monterrey (2004)' : 'Cineteca Monterrey (2004)'}
              </p>
            </div>
            <div className="border-l border-brand-border pl-8">
              <p className="text-brand-text-secondary font-light leading-relaxed">
                {isSpanish ? 'Primer lugar concurso fotográfico "Día de Muertos"' : 'First place photo contest "Day of the Dead"'}
              </p>
              <p className="text-brand-text-secondary font-light text-sm mt-1">
                {isSpanish ? 'CEART Tecate (2016)' : 'CEART Tecate (2016)'}
              </p>
            </div>
            <div className="border-l border-brand-border pl-8">
              <p className="text-brand-text-secondary font-light leading-relaxed">
                {isSpanish ? 'Mejor Portafolio - SXSW Interactive' : 'Best Portfolio - SXSW Interactive'}
              </p>
              <p className="text-brand-text-secondary font-light text-sm mt-1">
                {isSpanish ? 'Austin, TX (2006)' : 'Austin, TX (2006)'}
              </p>
            </div>
          </div>
        </section>
        {/* </ScrollReveal> */}

        {/* Skills Section - Elegant styling */}
        {/* <ScrollReveal> */}
        <section className="mb-20 cv-print-section">
          <h2 className="text-2xl font-serif font-normal tracking-tight text-brand-text-primary mb-10 pb-6 border-b border-brand-border">
            {isSpanish ? 'Habilidades' : 'Skills'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
            {[
              isSpanish ? 'Fotografía Editorial y Corporativa' : 'Editorial & Corporate Photography',
              isSpanish ? 'Fotografía de Eventos' : 'Event Photography',
              isSpanish ? 'Fotografía de Producto' : 'Product Photography',
              isSpanish ? 'Fotografía de Arquitectura y Paisajismo' : 'Architecture & Landscape Photography',
              isSpanish ? 'Dirección de Fotografía (Cine/TV)' : 'Cinematography (Film/TV)',
              isSpanish ? 'Desarrollo Web y Medios Sociales' : 'Web Development & Social Media',
              isSpanish ? 'Edición Fotográfica' : 'Photo Editing',
              isSpanish ? 'Iluminación Creativa (Flash OCF)' : 'Creative Lighting (OCF)',
              isSpanish ? 'Docencia y Oratoria' : 'Teaching & Public Speaking',
            ].map((skill) => (
              <div key={skill} className="border-l border-brand-border pl-8">
                <p className="text-brand-text-secondary font-light">{skill}</p>
              </div>
            ))}
          </div>
        </section>
        {/* </ScrollReveal> */}

        {/* Languages Section - Elegant styling */}
        {/* <ScrollReveal> */}
        <section className="mb-0 cv-print-section">
          <h2 className="text-2xl font-serif font-normal tracking-tight text-brand-text-primary mb-10 pb-6 border-b border-brand-border">
            {isSpanish ? 'Idiomas' : 'Languages'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l border-brand-border pl-8">
              <h3 className="text-xl font-serif font-normal text-brand-text-primary mb-2">
                {isSpanish ? 'Español' : 'Spanish'}
              </h3>
              <p className="text-brand-text-secondary font-light">
                {isSpanish ? 'Nativo' : 'Native'}
              </p>
            </div>
            <div className="border-l border-brand-border pl-8">
              <h3 className="text-xl font-serif font-normal text-brand-text-primary mb-2">
                {isSpanish ? 'Inglés' : 'English'}
              </h3>
              <p className="text-brand-text-secondary font-light">
                {isSpanish ? 'Avanzado' : 'Advanced'}
              </p>
            </div>
          </div>
        </section>
        {/* </ScrollReveal> */}
        </div> {/* End of cv-print-container */}
      </div> {/* End of max-w-screen-xl div */}
    </div> {/* End of min-h-screen div */}
    </> // End of fragment
  );
}
