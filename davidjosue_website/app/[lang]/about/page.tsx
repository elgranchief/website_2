// Function to generate static paths for supported languages
export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'es-MX' }];
}
// /app/[lang]/about/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal } from '../../../components/ScrollReveal'; // Import animation component

export const metadata: Metadata = {
  title: 'About David Josue | Destination Wedding & Fine Art Photographer',
  description: 'Meet David Josue, the visual storyteller capturing authentic emotion in weddings, boudoir, and fine art photography. With 24+ years of experience spanning 45+ destinations.',
};

export default function AboutPage({ params }: { params: { lang: string } }) {
  const lang = params.lang === 'es-MX' ? 'es-MX' : 'en-US';
  const isSpanish = lang === 'es-MX';

  return (
    <>
      {/* Hero Section */}
      {/* No animation needed for the initial hero section */}
      <section className="py-16 md:py-24 bg-light">
        <div className="container mx-auto max-w-screen-lg px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="order-1 md:order-2">
              <Image
                src="/images/david-josue-05.jpg"
                alt={isSpanish ? 'Retrato de David Josue, fotógrafo' : 'Portrait of David Josue, photographer'}
                width={600}
                height={800}
                className="rounded-lg shadow-lg w-full h-auto mx-auto md:mx-0"
                priority
              />
            </div>
            
            {/* Text Column - Refined Headline */}
            <div className="order-2 md:order-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4 tracking-tight"> {/* Changed font weight */}
                {isSpanish ? 'David Josué' : 'David Josué'}
              </h1>
               {/* Sub-headline focusing on the core value */}
              <p className="text-xl md:text-2xl font-light mb-6 text-gray-700"> {/* Adjusted color */}
                {isSpanish 
                  ? 'Más que fotografía. Una ventana a la verdad emocional.' 
                  : 'More than photography. A window into emotional truth.'}
              </p>
               {/* Brief intro connecting to the client */}
               <p className="text-lg text-gray-600 leading-relaxed">
                 {isSpanish
                   ? 'Estás aquí porque buscas algo más que simples fotos. Buscas imágenes que capturen la esencia, que cuenten tu historia única, ya sea el día de tu boda, una exploración íntima de ti misma, o la narrativa visual de tu marca.'
                   : 'You\'re here because you\'re looking for more than just pictures. You want images that capture essence, that tell your unique story—whether it\'s your wedding day, an intimate exploration of self, or your brand\'s visual narrative.'}
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section - Using StoryBrand Framework */}
      <ScrollReveal>
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-lg px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Problem & Solution Column */}
            <div className="md:col-span-2 space-y-10"> {/* Increased spacing */}
              {/* The Problem/Pain Point - Enhanced */}
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-light mb-5 text-gray-800"> {/* Removed border */}
                  {isSpanish ? 'El Riesgo de lo Ordinario' : 'The Risk of the Ordinary'}
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  {isSpanish 
                    ? 'Has invertido tiempo, corazón y recursos. Ya sea planeando la boda de tus sueños, reuniendo el coraje para una sesión boudoir, o definiendo la imagen de tu compañía. Lo último que quieres son fotografías genéricas, predecibles, que fallen en capturar la verdadera emoción o el mensaje.'
                    : 'You\'ve invested time, heart, and resources. Whether planning your dream wedding, gathering the courage for a boudoir session, or defining your company\'s image. The last thing you want are generic, predictable photographs that fail to capture the real emotion or message.'}
                </p>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  {isSpanish 
                    ? 'Fotos de boda que se sienten posadas, no vividas. Retratos íntimos que carecen de profundidad. Campañas visuales que no conectan. Es el miedo a terminar con imágenes olvidables, que no reflejen la singularidad del momento o la marca.'
                    : 'Wedding photos that feel staged, not lived. Intimate portraits lacking depth. Visual campaigns that don\'t connect. It\'s the fear of ending up with forgettable images, ones that don\'t reflect the uniqueness of the moment or the brand.'}
                </p>
              </div>

              {/* The Guide Solution - Enhanced with CV details */}
              <div>
                 <h2 className="text-2xl md:text-3xl font-serif font-light mb-5 text-gray-800">
                   {isSpanish ? 'Tu Guía Hacia la Autenticidad Visual' : 'Your Guide to Visual Authenticity'}
                 </h2>
                 <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                   {isSpanish
                     ? 'Aquí es donde entro yo. Con más de 20 años dedicados a la narrativa visual, he aprendido que las mejores imágenes nacen de la conexión y la observación profunda, no de la dirección forzada. Mi trayectoria—desde dirigir fotografía para cine y TV hasta ser reconocido internacionalmente (Top 20 ISPWP, Mejor Portafolio SxSW)—me ha enseñado a ver más allá de la superficie.'
                     : 'This is where I come in. With over 20 years dedicated to visual narrative, I\'ve learned the best images are born from connection and deep observation, not forced direction. My journey—from directing cinematography for film and TV to being internationally recognized (Top 20 ISPWP, Best Portfolio SxSW)—has taught me to see beyond the surface.'}
                 </p>
                 <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                   {isSpanish
                     ? 'Ya sea capturando la emoción cruda de una boda en un destino exótico (he trabajado en más de 45), creando un espacio seguro y empoderador para una sesión boudoir, o traduciendo la visión de una marca (como Carl\'s Jr. o Cinépolis) en imágenes impactantes, mi enfoque es el mismo: encontrar y preservar la verdad.'
                     : 'Whether capturing the raw emotion of a wedding in an exotic destination (I\'ve worked in over 45), creating a safe, empowering space for a boudoir session, or translating a brand\'s vision (like Carl\'s Jr. or Cinépolis) into impactful visuals, my approach is the same: find and preserve the truth.'}
                 </p>
                 <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                   {isSpanish
                     ? 'Mi formación académica (Maestría en Artes Visuales, Master en Dirección de Fotografía) y mi experiencia docente internacional me dan una perspectiva única, combinando técnica impecable con una sensibilidad artística y psicológica para anticipar y capturar esos momentos fugaces que definen tu historia.'
                     : 'My academic background (Master\'s in Visual Arts, Master\'s in Cinematography) and international teaching experience give me a unique perspective, blending impeccable technique with an artistic and psychological sensitivity to anticipate and capture those fleeting moments that define your story.'}
                 </p>
              </div>

              {/* The Plan - Refined */}
              <div>
                 <h2 className="text-2xl md:text-3xl font-serif font-light mb-5 text-gray-800">
                   {isSpanish ? 'Nuestro Camino Hacia Imágenes Extraordinarias' : 'Our Path to Extraordinary Images'}
                 </h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"> {/* Adjusted gap */}
                   <div>
                     {/* Step 1 */}
                     <h3 className="text-xl font-semibold text-gray-800 mb-2">{isSpanish ? '1. Conversación Profunda' : '1. Deep Conversation'}</h3> {/* Changed font */}
                     <p className="text-gray-700 leading-relaxed">
                       {isSpanish
                         ? 'Comenzamos con una charla real para entender tu visión, tus expectativas y tu historia. Sea una boda, una sesión personal o un proyecto comercial.'
                         : 'We start with a real conversation to understand your vision, expectations, and story. Be it a wedding, personal session, or commercial project.'}
                     </p>
                   </div>
                   <div>
                     {/* Step 2 */}
                     <h3 className="text-xl font-semibold text-gray-800 mb-2">{isSpanish ? '2. Creación de Confianza y Espacio' : '2. Building Trust & Space'}</h3>
                     <p className="text-gray-700 leading-relaxed">
                       {isSpanish
                         ? 'Mi objetivo es que te sientas completamente a gusto. Creo un ambiente donde la autenticidad puede surgir sin esfuerzo, guiando sutilmente cuando es necesario.'
                         : 'My goal is for you to feel completely at ease. I create an atmosphere where authenticity can emerge effortlessly, subtly guiding only when needed.'}
                     </p>
                   </div>
                   <div>
                     {/* Step 3 */}
                     <h3 className="text-xl font-semibold text-gray-800 mb-2">{isSpanish ? '3. Captura Intuitiva y Artística' : '3. Intuitive & Artistic Capture'}</h3>
                     <p className="text-gray-700 leading-relaxed">
                       {isSpanish
                         ? 'Con ojo experto y sensibilidad artística, documento los momentos clave y las emociones intermedias, usando luz y composición para realzar la narrativa.'
                         : 'With an expert eye and artistic sensibility, I document the key moments and the in-between emotions, using light and composition to enhance the narrative.'}
                     </p>
                   </div>
                   <div>
                     {/* Step 4 */}
                     <h3 className="text-xl font-semibold text-gray-800 mb-2">{isSpanish ? '4. Entrega de un Legado Visual' : '4. Delivering a Visual Legacy'}</h3>
                     <p className="text-gray-700 leading-relaxed">
                       {isSpanish
                         ? 'Recibes más que fotos; recibes una colección curada de artefactos emocionales, editados con maestría, listos para ser atesorados o para impulsar tu marca.'
                         : 'You receive more than photos; you get a curated collection of emotional artifacts, masterfully edited, ready to be treasured or to elevate your brand.'}
                     </p>
                   </div>
                 </div>
              </div>

              {/* Call to Action - Slightly bolder */}
              <div className="mt-12 pt-10 border-t border-gray-200">
                 <h3 className="text-xl font-semibold text-gray-800 mb-4">{isSpanish ? '¿Listo para capturar tu verdad?' : 'Ready to capture your truth?'}</h3>
                 <div className="flex flex-col sm:flex-row gap-4 justify-start"> {/* Adjusted gap */}
                   <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center rounded-md text-base font-medium px-8 py-3 bg-gray-900 text-white hover:bg-gray-700 transition-colors shadow-md"> {/* Larger button */}
                     {isSpanish ? 'Iniciemos una Conversación' : 'Let\'s Start a Conversation'}
                   </Link>
                   <Link href={`/${lang}/portfolio`} className="inline-flex items-center justify-center rounded-md text-base font-medium px-8 py-3 border border-gray-400 text-gray-800 hover:bg-gray-100 transition-colors"> {/* Adjusted style */}
                     {isSpanish ? 'Explora Mi Trabajo' : 'Explore My Work'}
                   </Link>
                   <Link href={`/${lang}/cv`} className="inline-flex items-center justify-center rounded-md text-base font-medium px-8 py-3 border border-gray-400 text-gray-800 hover:bg-gray-100 transition-colors"> {/* Adjusted style */}
                     {isSpanish ? 'Ver CV Detallado' : 'View Detailed CV'}
                   </Link>
                 </div>
              </div>
            </div>

            {/* Testimonial & Personal Column - Refined */}
            <div className="space-y-10"> {/* Increased spacing */}
              {/* Testimonial Quote */}
              <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-gray-700 shadow-sm"> {/* Adjusted style */}
                 <p className="italic text-gray-700 mb-4 leading-relaxed"> {/* Adjusted text color */}
                   {isSpanish
                     ? '"David no solo capturó nuestro día—capturó cómo se sintió. Cada vez que veo nuestras fotos, revivo esos momentos, con toda la emoción intacta."'
                     : '"David didn\'t just capture our day—he captured how it felt. Every time I look at our photos, I experience those moments again, with all the emotion intact."'}
                 </p>
                 <p className="text-sm text-gray-600 font-medium"> {/* Adjusted text color */}
                   {isSpanish ? '— Claudia & Miguel, Boda en Valle de Guadalupe' : '— Claudia & Miguel, Valle de Guadalupe Wedding'}
                 </p>
              </div>

              {/* Personal Details - More concise */}
              <div>
                 <h3 className="text-xl font-semibold text-gray-800 mb-4">{isSpanish ? 'Detrás de la Lente' : 'Behind the Lens'}</h3> {/* Changed font */}
                 <ul className="space-y-3 text-gray-700"> {/* Adjusted spacing and color */}
                   <li className="flex items-start">
                     <span className="text-gray-500 mr-3 mt-1">▸</span> {/* Changed icon */}
                     <p>{isSpanish ? 'Maestro en Artes Visuales (UANL) y Comunicación (ITESM).' : 'Master\'s in Visual Arts (UANL) & Communication (ITESM).'}</p>
                   </li>
                   <li className="flex items-start">
                     <span className="text-gray-500 mr-3 mt-1">▸</span>
                     <p>{isSpanish ? 'Exposiciones artísticas individuales y colectivas (CEART, Museo Vid y Vino).' : 'Solo and group art exhibitions (CEART, Museum of Vine & Wine).'}</p>
                   </li>
                   <li className="flex items-start">
                     <span className="text-gray-500 mr-3 mt-1">▸</span>
                     <p>{isSpanish ? 'Apasionado por explorar la conexión cuerpo-alma en el arte.' : 'Passionate about exploring the body-soul connection in art.'}</p>
                   </li>
                   <li className="flex items-start">
                     <span className="text-gray-500 mr-3 mt-1">▸</span>
                     <p>{isSpanish ? 'Residente y explorador del Valle de Guadalupe.' : 'Resident and explorer of Valle de Guadalupe.'}</p>
                   </li>
                 </ul>
              </div>

              {/* Recognition - More concise */}
              <div>
                 <h3 className="text-xl font-semibold text-gray-800 mb-4">{isSpanish ? 'Reconocimientos Clave' : 'Key Recognitions'}</h3>
                 <ul className="space-y-3 text-gray-700">
                   <li className="flex items-start">
                     <span className="text-yellow-500 mr-3 mt-1">★</span> {/* Changed icon */}
                     <p>{isSpanish ? 'Top 10 Fotógrafos de Boda (México)' : 'Top 10 Wedding Photographers (Mexico)'}</p>
                   </li>
                   <li className="flex items-start">
                     <span className="text-yellow-500 mr-3 mt-1">★</span>
                     <p>{isSpanish ? 'Top 20 Fotógrafos del Mundo (ISPWP)' : 'Top 20 Photographers in the World (ISPWP)'}</p>
                   </li>
                   <li className="flex items-start">
                     <span className="text-yellow-500 mr-3 mt-1">★</span>
                     <p>{isSpanish ? '1er Lugar Portafolio Personal (ISPWP)' : '1st Place Personal Portfolio (ISPWP)'}</p>
                   </li>
                   <li className="flex items-start">
                     <span className="text-yellow-500 mr-3 mt-1">★</span>
                     <p>{isSpanish ? 'Mejor Portafolio - SXSW Interactive (2006)' : 'Best Portfolio - SXSW Interactive (2006)'}</p>
                   </li>
                   {/* Add other key awards if desired */}
                 </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Travel Experience Infographic Section - Use CV data */}
      <ScrollReveal delay={0.1}>
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto max-w-screen-lg px-4">
          <div className="text-center mb-12"> {/* Increased margin */}
             <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4 tracking-tight text-gray-800"> {/* Adjusted font */}
               {isSpanish ? 'Experiencia Global, Perspectiva Local' : 'Global Experience, Local Perspective'}
             </h2>
             <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
               {isSpanish ? 'Desde el corazón del Valle de Guadalupe hasta destinos internacionales, mi cámara ha sido testigo de historias en más de 45 lugares únicos. Esta experiencia global enriquece mi habilidad para capturar la esencia de tu momento, dondequiera que sea.' : 'From the heart of Valle de Guadalupe to international destinations, my camera has witnessed stories in over 45 unique locations. This global experience enriches my ability to capture the essence of your moment, wherever it may be.'}
             </p>
          </div>

           {/* Simplified Location List - Focus on breadth */}
           <div className="text-center text-gray-600 mb-12">
             <p>{isSpanish ? 'México (Baja California, Sonora, Nuevo León, Coahuila, CDMX, Jalisco, Nayarit, Yucatán, Quintana Roo, Chiapas...) | EE.UU. | España | Francia | Italia | Países Bajos | Cuba | Panamá | Brasil | Antigua y Barbuda' : 'Mexico (Baja California, Sonora, Nuevo León, Coahuila, CDMX, Jalisco, Nayarit, Yucatán, Quintana Roo, Chiapas...) | USA | Spain | France | Italy | Netherlands | Cuba | Panama | Brazil | Antigua & Barbuda'}</p>
           </div>
           
           {/* Updated Visual statistics/infographics - Reflecting CV */}
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10"> {/* Adjusted grid */}
             <div className="bg-white p-6 rounded-lg text-center shadow-md border border-gray-200/50"> {/* Enhanced style */}
               <div className="text-4xl font-semibold text-gray-800 mb-2">20+</div> {/* Corrected years */}
               <div className="text-sm uppercase tracking-wider text-gray-600">{isSpanish ? 'Años de Experiencia' : 'Years of Experience'}</div>
             </div>
             <div className="bg-white p-6 rounded-lg text-center shadow-md border border-gray-200/50">
               <div className="text-4xl font-semibold text-gray-800 mb-2">45+</div>
               <div className="text-sm uppercase tracking-wider text-gray-600">{isSpanish ? 'Destinos Globales' : 'Global Destinations'}</div>
             </div>
             <div className="bg-white p-6 rounded-lg text-center shadow-md border border-gray-200/50">
               <div className="text-4xl font-semibold text-gray-800 mb-2">10+</div> {/* Based on CV awards */}
              <div className="text-sm uppercase tracking-wider text-gray-600">{isSpanish ? 'Premios Internacionales' : 'International Awards'}</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-md border border-gray-200/50">
              <div className="text-4xl font-semibold text-gray-800 mb-2">1000s</div> {/* Broader term */}
              <div className="text-sm uppercase tracking-wider text-gray-600">{isSpanish ? 'Sesiones Realizadas' : 'Sessions Completed'}</div>
            </div>
          </div>
         </div>
      </section>
      </ScrollReveal>
    </>
  );
}
