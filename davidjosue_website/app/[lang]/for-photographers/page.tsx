// Function to generate static paths for supported languages
export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'es-MX' }];
}
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ScrollReveal'; // Corrected import path

export const metadata: Metadata = {
  title: 'Photography Education with David Josue | Workshops, Courses, Mentoring',
  description: 'Elevate your photography craft and business with online courses, workshops, and mentoring from internationally recognized photographer David Josue.',
};

// Icons (Keep relevant ones, add new if needed)
const YouTubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path fillRule="evenodd" d="M19.806 7.089c.19.69.19 2.204.19 2.204s0 1.513-.19 2.204c-.213.774-.806 1.367-1.58 1.58-1.513.19-7.532.19-7.532.19s-6.02 0-7.532-.19c-.774-.213-1.367-.806-1.58-1.58C1.2 11.506 1.2 10 1.2 10s0-1.506.19-2.204c.213-.774.806-1.367 1.58-1.58C4.484 6 10.5 6 10.5 6s6.019 0 7.532.19c.774.213 1.367.806 1.58 1.58Zm-9.306 5.043V7.868l4.95 2.132-4.95 2.132Z" clipRule="evenodd" />
  </svg>
);
const CalendarIcon = (props: React.SVGProps<SVGSVGElement>) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
   <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
 </svg>
);
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
 </svg>
);
const ZoomIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M10.153 1.117a.5.5 0 0 1 .79.408v1.986c.681.02 1.33.11 1.944.254a.5.5 0 0 1 .4.64l-.71 2.837a.5.5 0 0 1-.94.068l.51-2.043a.499.499 0 0 1 .01-.055c-.54-.134-1.09-.216-1.662-.234l-.112.446a.5.5 0 0 1-.942.234l-1.12-4.485a.5.5 0 0 1 .408-.592zm-3.94 1.07a.5.5 0 0 1 .434.554l-1.12 4.485a.5.5 0 1 1-.942-.234l1.12-4.485a.5.5 0 0 1 .508-.32zm5.219 2.31.51 2.043a.5.5 0 1 1-.94-.068l-.71-2.837a.5.5 0 0 1 .4-.64c.615-.143 1.264-.234 1.944-.254v1.986a.5.5 0 0 1-.79.408zM6.01 7.784a.5.5 0 0 1 .508.32l1.12 4.485a.5.5 0 1 1-.942.234l-1.12-4.485a.5.5 0 0 1 .434-.554zm-2.44 2.96a.5.5 0 0 1 .64-.4l2.837.71a.5.5 0 0 1-.068.94l-2.043-.51a.499.499 0 0 1-.055-.01c.134.54.216 1.09.234 1.662l.446.112a.5.5 0 0 1 .234.942l-4.485 1.12a.5.5 0 0 1-.592-.408 11.99 11.99 0 0 1-.254-1.944.5.5 0 0 1 .64-.4zm1.07 3.94a.5.5 0 0 1 .554-.434l4.485-1.12a.5.5 0 1 1 .234.942l-4.485 1.12a.5.5 0 0 1-.554-.434zm2.31-5.219.51 2.043a.5.5 0 1 1-.94-.068l-.71-2.837a.5.5 0 0 1 .4-.64c.615-.143 1.264-.234 1.944-.254v1.986a.5.5 0 0 1-.79.408z"/>
  </svg>
);


export default function ForPhotographersPage({ params }: { params: { lang: string } }) {
  const lang = params.lang === 'es-MX' ? 'es-MX' : 'en-US';
  const isSpanish = lang === 'es-MX';

  // Placeholder link for course enrollment - replace with actual link when available
  const courseEnrollmentLink = '#enroll'; 
  const mentoringLink = '#mentoring'; // Placeholder
  const workshopsLink = '#workshops'; // Placeholder
  const youtubeLink = "https://www.youtube.com/@davidjosue";

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white text-center">
        <div className="container mx-auto max-w-screen-lg px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 tracking-tight text-gray-900">
            {isSpanish ? 'Eleva Tu Fotografía al Siguiente Nivel' : 'Elevate Your Photography to the Next Level'}
          </h1>
          <p className="text-xl md:text-2xl font-light mb-10 text-gray-700 max-w-3xl mx-auto">
            {isSpanish 
              ? 'Domina la técnica, refina tu visión artística y construye el negocio fotográfico que sueñas con la guía de David Josué.' 
              : 'Master technique, refine your artistic vision, and build the photography business you dream of with guidance from David Josué.'}
          </p>
          <div className="flex justify-center gap-4">
             <Link href="#offerings" className="inline-flex items-center justify-center rounded-md text-base font-medium px-8 py-3 bg-gray-900 text-white hover:bg-gray-700 transition-colors shadow-md">
               {isSpanish ? 'Ver Ofertas Educativas' : 'View Educational Offerings'}
             </Link>
             <Link href={youtubeLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md text-base font-medium px-8 py-3 border border-gray-400 text-gray-800 hover:bg-gray-100 transition-colors">
               {isSpanish ? 'Explorar Recursos Gratuitos' : 'Explore Free Resources'}
             </Link>
          </div>
          {/* Grid layout for Image and Quote */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/davidjosue_selfie_guayabera_01.jpeg" // Replace with a relevant image of David teaching or working
                alt={isSpanish ? 'David Josué enseñando fotografía' : 'David Josué teaching photography'}
                width={600} // Reduced width
                height={750} // Adjusted height for aspect ratio
                className="rounded-lg shadow-xl w-full h-auto object-cover max-w-md mx-auto md:mx-0" // Made image smaller and aligned left on medium screens
                priority
              />
            </div>
            <div className="text-center md:text-left">
              <blockquote className="text-xl md:text-2xl font-light italic text-gray-600 border-l-4 border-gray-300 pl-6">
                {isSpanish 
                  ? '"La fotografía es el arte de pintar con luz y sombra, capturando no solo una imagen, sino una emoción."'
                  : '"Photography is the art of painting with light and shadow, capturing not just an image, but an emotion."'}
                <footer className="mt-4 text-base font-medium text-gray-800">— David Josué</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction / Philosophy */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-md px-4 text-center">
           <h2 className="text-3xl md:text-4xl font-serif font-light mb-6 text-gray-800">
             {isSpanish ? 'Más Allá de la Técnica: Fotografía con Alma' : 'Beyond Technique: Photography with Soul'}
           </h2>
           <p className="text-lg text-gray-700 mb-4 leading-relaxed">
             {isSpanish
               ? 'Creo que la verdadera maestría fotográfica nace de la fusión entre un dominio técnico impecable y una profunda conexión emocional y artística. Mi enfoque educativo se centra en darte las herramientas fundamentales para que tu cámara sea una extensión de tu visión, permitiéndote capturar no solo lo que ves, sino lo que sientes.'
               : 'I believe true photographic mastery is born from the fusion of impeccable technical command and deep emotional, artistic connection. My educational approach focuses on giving you the foundational tools so your camera becomes an extension of your vision, allowing you to capture not just what you see, but what you feel.'}
           </p>
            <p className="text-lg text-gray-700 leading-relaxed">
             {isSpanish
               ? 'Con más de 20 años de experiencia internacional en cine, bodas y arte, te guiaré para que encuentres tu voz única y crees imágenes que resuenen con autenticidad y significado.'
               : 'With over 20 years of international experience in film, weddings, and art, I will guide you to find your unique voice and create images that resonate with authenticity and meaning.'}
           </p>
        </div>
      </section>

      {/* Offerings Section */}
      <section id="offerings" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto max-w-screen-lg px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-12 text-center text-gray-900">
            {isSpanish ? 'Ofertas Educativas' : 'Educational Offerings'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Online Courses */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200/50 flex flex-col">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{isSpanish ? 'Cursos Online' : 'Online Courses'}</h3>
              <p className="text-gray-700 mb-6 flex-grow">{isSpanish ? 'Aprende a tu propio ritmo con cursos estructurados que cubren desde los fundamentos hasta técnicas avanzadas.' : 'Learn at your own pace with structured courses covering fundamentals to advanced techniques.'}</p>
              
              {/* Example Course: Fundamentos */}
              <div className="bg-brand-text-primary text-white p-6 rounded-md shadow-inner mb-6 border border-gray-700">
                 <h4 className="text-xl font-semibold mb-3 text-white">{isSpanish ? 'Destacado: Fundamentos de la Fotografía' : 'Featured: Photography Fundamentals'}</h4>
                 <p className="text-sm text-gray-200 mb-4">{isSpanish ? 'Domina los 4 pilares esenciales. ¡En Español!' : 'Master the 4 essential pillars. In Spanish!'}</p>
                 <div className="text-xs text-gray-100 space-y-1 mb-4">
                    <p><CalendarIcon className="w-4 h-4 inline mr-1"/> {isSpanish ? 'Próxima Edición: 21 de Abril' : 'Next Edition: April 21st'}</p>
                    <p><ZoomIcon className="w-4 h-4 inline mr-1"/> {isSpanish ? '4 Clases Semanales (Zoom + Grabaciones)' : '4 Weekly Classes (Zoom + Recordings)'}</p>
                    <p><WhatsAppIcon className="w-4 h-4 inline mr-1"/> {isSpanish ? 'Grupo Q&A WhatsApp' : 'WhatsApp Q&A Group'}</p>
                    <p><span className="font-bold inline mr-1">$</span> $470 MXN</p>
                 </div>
                 <Link href={courseEnrollmentLink} className="inline-block w-full text-center rounded-md text-sm font-semibold py-2 bg-white text-gray-900 hover:bg-gray-200 transition-colors">
                   {isSpanish ? 'Inscribirme Ahora' : 'Enroll Now'}
                 </Link>
              </div>
              
              <Link href="#courses" className="mt-auto text-center text-brand-accent hover:text-brand-accent-dark font-medium">
                {isSpanish ? 'Ver Todos los Cursos' : 'View All Courses'} →
              </Link>
            </div>

            {/* Card 2: Workshops */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200/50 flex flex-col">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{isSpanish ? 'Workshops Presenciales' : 'In-Person Workshops'}</h3>
              <p className="text-gray-700 mb-6 flex-grow">{isSpanish ? 'Experiencias inmersivas y prácticas en locaciones inspiradoras para acelerar tu aprendizaje y networking.' : 'Immersive, hands-on experiences in inspiring locations to accelerate your learning and networking.'}</p>
              {/* Placeholder for workshop details */}
              <div className="text-center text-gray-500 italic my-6 flex-grow">{isSpanish ? 'Próximos workshops se anunciarán pronto.' : 'Upcoming workshops will be announced soon.'}</div>
              <Link href={workshopsLink} className="mt-auto text-center text-brand-accent hover:text-brand-accent-dark font-medium">
                {isSpanish ? 'Más Información sobre Workshops' : 'Learn More About Workshops'} →
              </Link>
            </div>

            {/* Card 3: Mentoring */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200/50 flex flex-col">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{isSpanish ? 'Mentoría Personalizada' : 'Personalized Mentoring'}</h3>
              <p className="text-gray-700 mb-6 flex-grow">{isSpanish ? 'Programas 1-a-1 diseñados para abordar tus desafíos específicos, refinar tu portafolio y alcanzar tus metas profesionales.' : '1-on-1 programs designed to address your specific challenges, refine your portfolio, and achieve your professional goals.'}</p>
               {/* Placeholder for mentoring details */}
              <div className="text-center text-gray-500 italic my-6 flex-grow">{isSpanish ? 'Disponibilidad limitada. Aplica hoy.' : 'Limited availability. Apply today.'}</div>
              <Link href={mentoringLink} className="mt-auto text-center text-brand-accent hover:text-brand-accent-dark font-medium">
                {isSpanish ? 'Explorar Opciones de Mentoría' : 'Explore Mentoring Options'} →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Section (Placeholder) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-lg px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-12 text-center text-gray-900">
            {isSpanish ? 'Lo Que Dicen los Fotógrafos' : 'What Photographers Are Saying'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Placeholder Testimonial 1 */}
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-brand-accent shadow-sm">
               <p className="italic text-gray-700 mb-4 leading-relaxed">
                 {isSpanish
                   ? '"El curso de Fundamentos cambió mi forma de ver la luz. Mis fotos ahora tienen la profundidad que siempre busqué."'
                   : '"The Fundamentals course changed the way I see light. My photos now have the depth I always sought."'}
               </p>
               <p className="text-sm text-gray-600 font-medium">— {isSpanish ? 'Ana G., Fotógrafa Emergente' : 'Ana G., Emerging Photographer'}</p>
            </div>
             {/* Placeholder Testimonial 2 */}
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-brand-accent shadow-sm">
               <p className="italic text-gray-700 mb-4 leading-relaxed">
                 {isSpanish
                   ? '"La mentoría con David fue invaluable. Me ayudó a definir mi estilo y a conseguir clientes que valoran mi visión artística."'
                   : '"Mentoring with David was invaluable. He helped me define my style and attract clients who value my artistic vision."'}
               </p>
               <p className="text-sm text-gray-600 font-medium">— {isSpanish ? 'Carlos R., Fotógrafo de Bodas' : 'Carlos R., Wedding Photographer'}</p>
            </div>
          </div>
           <div className="text-center mt-12">
             <Link href="#testimonials" className="inline-flex items-center justify-center rounded-md text-base font-medium px-8 py-3 border border-gray-400 text-gray-800 hover:bg-gray-100 transition-colors">
               {isSpanish ? 'Leer Más Testimonios' : 'Read More Testimonials'}
             </Link>
           </div>
        </div>
      </section>

      {/* About David (as Educator) Section */}
       <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto max-w-screen-lg px-4">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div>
               <Image
                 src="/images/davidjosue_selfie_guayabera_02.jpeg" // Use a different image if available
                 alt={isSpanish ? 'David Josué, educador de fotografía' : 'David Josué, photography educator'}
                 width={600}
                 height={750}
                 className="rounded-lg shadow-lg w-full h-auto object-cover"
               />
             </div>
             <div>
                <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6 text-gray-900">
                  {isSpanish ? 'Tu Guía: Experiencia y Pasión por Enseñar' : 'Your Guide: Experience & Passion for Teaching'}
                </h2>
                 <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                   {isSpanish
                     ? 'Mi misión es desmitificar la fotografía y empoderarte con el conocimiento y la confianza para que expreses tu visión única. Combino décadas de experiencia práctica en diversos campos con una sólida formación académica y una pasión genuina por compartir lo que he aprendido.'
                     : 'My mission is to demystify photography and empower you with the knowledge and confidence to express your unique vision. I combine decades of practical experience across diverse fields with a solid academic background and a genuine passion for sharing what I\'ve learned.'}
                 </p>
                 <ul className="space-y-3 text-gray-700 mb-6">
                   <li className="flex items-start">
                     <span className="text-green-600 mr-3 mt-1 font-bold">✓</span>
                     <p><span className="font-medium">{isSpanish ? 'Experiencia Real y Diversa:' : 'Real, Diverse Experience:'}</span> {isSpanish ? 'Cine, publicidad, bodas (+45 destinos), arte.' : 'Film, ads, weddings (+45 destinations), art.'}</p>
                   </li>
                   <li className="flex items-start">
                     <span className="text-green-600 mr-3 mt-1 font-bold">✓</span>
                     <p><span className="font-medium">{isSpanish ? 'Reconocimiento Internacional:' : 'International Recognition:'}</span> {isSpanish ? 'Premios (ISPWP Top 20) y publicaciones globales.' : 'Global awards (ISPWP Top 20) & publications.'}</p>
                   </li>
                    <li className="flex items-start">
                     <span className="text-green-600 mr-3 mt-1 font-bold">✓</span>
                     <p><span className="font-medium">{isSpanish ? 'Formación Académica Sólida:' : 'Solid Academic Background:'}</span> {isSpanish ? 'Maestrías en Artes Visuales y Dirección de Fotografía.' : 'Master\'s in Visual Arts & Cinematography.'}</p>
                   </li>
                   <li className="flex items-start">
                     <span className="text-green-600 mr-3 mt-1 font-bold">✓</span>
                     <p><span className="font-medium">{isSpanish ? 'Experiencia Docente Comprobada:' : 'Proven Teaching Experience:'}</span> {isSpanish ? 'Talleres y conferencias en múltiples países.' : 'Workshops & conferences in multiple countries.'}</p>
                   </li>
                 </ul>
                 <Link href={`/${lang}/about`} className="text-brand-accent hover:text-brand-accent-dark font-medium">
                   {isSpanish ? 'Conoce más sobre mi trayectoria' : 'Learn more about my journey'} →
                 </Link>
             </div>
           </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-t from-gray-100 to-white">
        <div className="container mx-auto max-w-screen-md px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6 text-gray-900">
            {isSpanish ? '¿Listo para Transformar Tu Fotografía?' : 'Ready to Transform Your Photography?'}
          </h2>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            {isSpanish 
              ? 'Explora las opciones educativas o contáctame para discutir cómo puedo ayudarte a alcanzar tus metas fotográficas.' 
              : 'Explore the educational offerings or contact me to discuss how I can help you achieve your photographic goals.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="#offerings" className="inline-flex items-center justify-center rounded-md text-base font-medium px-8 py-3 bg-gray-900 text-white hover:bg-gray-700 transition-colors shadow-md">
               {isSpanish ? 'Ver Cursos y Mentoría' : 'View Courses & Mentoring'}
             </Link>
             <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center rounded-md text-base font-medium px-8 py-3 border border-gray-400 text-gray-800 hover:bg-gray-100 transition-colors">
               {isSpanish ? 'Hacer una Consulta' : 'Make an Inquiry'}
             </Link>
           </div>
        </div>
      </section>
    </>
  );
}
