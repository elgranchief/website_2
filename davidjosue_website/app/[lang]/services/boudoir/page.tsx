// /app/[lang]/services/boudoir/page.tsx
import { Metadata } from 'next';
// Removed duplicate Metadata import
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal'; // Import animation component

// Import necessary icons (assuming they are defined elsewhere or add definitions here)
// Re-using definitions from Footer for consistency
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.27.058 2.166.29 2.913.588.794.31 1.458.74 2.09 1.372.63.632 1.06 1.296 1.37 2.09.298.747.53 1.643.588 2.913.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.27-.29 2.166-.588 2.913-.31.794-.74 1.458-1.372 2.09-.632.63-1.296 1.06-2.09 1.37-.747.298-1.643.53-2.913.588-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.27-.058-2.166-.29-2.913-.588-.794-.31-1.458-.74-2.09-1.372-.63-.632-1.06-1.296-1.37-2.09-.298-.747-.53-1.643-.588-2.913-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.058-1.27.29-2.166.588-2.913.31-.794.74-1.458 1.372-2.09.632-.63 1.296-1.06 2.09-1.37.747-.298 1.643-.53 2.913-.588C8.416 2.175 8.796 2.163 12 2.163zm0 1.44c-3.175 0-3.54.012-4.78.068-1.18.054-1.914.28-2.49.48-.61.214-1.07.51-1.55.99-.48.48-.776.94-1 1.55-.2.576-.426 1.31-.48 2.49C2.62 9.916 2.61 10.28 2.61 12s.012 2.084.068 3.324c.054 1.18.28 1.914.48 2.49.214.61.51 1.07.99 1.55.48.48.94.776 1.55 1 .576.2 1.31.426 2.49.48 1.24.056 1.604.068 4.78.068s3.54-.012 4.78-.068c1.18-.054 1.914-.28 2.49-.48.61-.214 1.07-.51 1.55-.99.48-.48.776-.94 1-1.55.2-.576.426-1.31.48-2.49.056-1.24.068-1.604.068-4.78s-.012-3.54-.068-4.78c-.054-1.18-.28-1.914-.48-2.49-.214-.61-.51-1.07-.99-1.55-.48-.48-.94-.776-1.55-1-.576-.2-1.31-.426-2.49-.48C15.54 3.612 15.175 3.6 12 3.6zm0 3.062c-2.97 0-5.376 2.405-5.376 5.376s2.406 5.376 5.376 5.376 5.376-2.405 5.376-5.376S14.97 6.662 12 6.662zm0 8.752c-1.864 0-3.376-1.512-3.376-3.376S10.136 8.662 12 8.662s3.376 1.512 3.376 3.376-1.512 3.376-3.376 3.376zm4.384-8.814c-.74 0-1.34.6-1.34 1.34s.6 1.34 1.34 1.34 1.34-.6 1.34-1.34-.6-1.34-1.34-1.34z"/>
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.99 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V21.878C18.343 21.128 22 16.99 22 12z"/>
  </svg>
);


export const metadata: Metadata = {
  title: 'Boudoir Photography | David Josué',
  description: 'Celebrate your unique beauty and essence with an empowering boudoir session. A safe space to reconnect with yourself, guided by David Josué.',
};

export default function BoudoirPage({ params }: { params: { lang: string } }) {
  const lang = params.lang === 'es-MX' ? 'es-MX' : 'en-US';
  const isSpanish = lang === 'es-MX';

  const travelCities = [
    'Ciudad de México (CDMX)',
    'Oaxaca',
    'Mérida',
    'Tijuana',
    'Monterrey',
    'Guadalajara',
  ];

  // Helper function to apply styled emphasis (if needed in the future, not used in current text)
  // const applyEmphasis = (text: string) => {
  //   let emphasizedText = text.replace(/\*\*(.*?)\*\*/g, '<span class="font-semibold text-gray-800">$1</span>');
  //   emphasizedText = emphasizedText.replace(/\*(.*?)\*/g, '<span class="italic text-gray-800">$1</span>');
  //   return <span dangerouslySetInnerHTML={{ __html: emphasizedText }} />;
  // };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-dark text-white">
        {/* Placeholder for actual background image */}
        <div className="absolute inset-0 bg-black opacity-50"></div> 
        <div className="relative container mx-auto max-w-screen-lg px-4 text-center z-10">
          <h1 className="text-4xl md:text-5xl text-serif font-light mb-6 tracking-wide">
            {isSpanish 
              ? 'Redescubre Tu Belleza. Celebra Tu Poder.' 
              : 'Rediscover Your Beauty. Celebrate Your Power.'}
          </h1>
           <h2 className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto font-light"> {/* Changed to H2 */}
             {isSpanish 
               ? 'Una Experiencia Boudoir Inolvidable con David Josué.' 
               : 'An Unforgettable Boudoir Experience with David Josué.'}
           </h2>
          <p className="text-lg mb-10 leading-relaxed max-w-3xl mx-auto">
            {isSpanish 
              ? 'Fotografía Boudoir artística y empoderadora en Baja California y viajando por México (CDMX, Oaxaca, Mérida, Tijuana, Monterrey, Guadalajara). Un espacio seguro para reconectar contigo misma y celebrar tu esencia única.' 
              : 'Artistic and empowering boudoir photography in Baja California and traveling throughout Mexico (Mexico City, Oaxaca, Mérida, Tijuana, Monterrey, Guadalajara). A safe space to reconnect with yourself and celebrate your unique essence.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 py-2 bg-white text-gray-900 hover:opacity-90 transition-colors">
              {isSpanish ? 'Agenda Tu Consulta Gratuita' : 'Schedule Your Free Consultation'}
            </Link>
          </div>
        </div>
      </section>

      {/* Problem / Agitation Section */}
      <ScrollReveal>
      <section className="py-16 md:py-24 bg-white text-gray-800">
        <div className="container mx-auto max-w-screen-md px-4">
          <h3 className="text-3xl md:text-4xl text-serif font-light mb-10 tracking-wide text-center">
            {isSpanish ? '¿Te Reconoces Aquí?' : 'Do You Recognize Yourself Here?'}
          </h3>
          
          <div className="space-y-8">
            {/* Item 1 */}
            <div className="bg-light p-6 rounded-md shadow-sm">
              <p className="italic text-gray-700 mb-2">{isSpanish ? '"Desde niña he tenido muchas inseguridades sobre mi cuerpo..." (Sofia)' : '"Since I was a child, I\'ve had many insecurities about my body..." (Sofia)'}</p>
              <p className="text-gray-900">{isSpanish ? '¿Luchas con cómo te ves en el espejo?' : 'Do you struggle with how you see yourself in the mirror?'}</p>
            </div>
            {/* Item 2 */}
            <div className="bg-light p-6 rounded-md shadow-sm">
              <p className="italic text-gray-700 mb-2">{isSpanish ? '"Siempre intentaba darles gusto a las demás personas..." (Sofia)' : '"I always tried to please other people..." (Sofia)'}</p>
              <p className="text-gray-900">{isSpanish ? '¿Sientes la presión de cumplir expectativas ajenas, olvidándote de ti?' : 'Do you feel the pressure to meet others\' expectations, forgetting about yourself?'}</p>
            </div>
            {/* Item 3 */}
            <div className="bg-light p-6 rounded-md shadow-sm">
              <p className="italic text-gray-700 mb-2">{isSpanish ? '"No pasaba un solo día sin sentirme fea, gorda, tonta..." (Renata)' : '"Not a single day went by without feeling ugly, fat, stupid..." (Renata)'}</p>
              <p className="text-gray-900">{isSpanish ? '¿Te persiguen pensamientos negativos sobre tu valor?' : 'Are you haunted by negative thoughts about your worth?'}</p>
            </div>
            {/* Item 4 */}
            <div className="bg-light p-6 rounded-md shadow-sm">
              <p className="italic text-gray-700 mb-2">{isSpanish ? '"Tenía miedo de fracasar y del rechazo..." (Sofia)' : '"I was afraid of failure and rejection..." (Sofia)'}</p>
              <p className="text-gray-900">{isSpanish ? '¿El miedo o las críticas te han detenido de seguir tus sueños o de mostrarte auténticamente?' : 'Have fear or criticism stopped you from pursuing your dreams or showing your authentic self?'}</p>
            </div>
            {/* Item 5 */}
            <div className="bg-light p-6 rounded-md shadow-sm">
              <p className="italic text-gray-700 mb-2">{isSpanish ? '"Me sentía insegura de mi cuerpo y siempre me acomplejaba..." (Camila)' : '"I felt insecure about my body and was always self-conscious..." (Camila)'}</p>
              <p className="text-gray-900">{isSpanish ? '¿Crees que la desnudez o la sensualidad son tabú, algo de lo que avergonzarse? (Valeria, Isabella)' : 'Do you believe that nudity or sensuality are taboo, something to be ashamed of? (Valeria, Isabella)'}</p>
            </div>
            {/* Item 6 */}
            <div className="bg-light p-6 rounded-md shadow-sm">
              <p className="italic text-gray-700 mb-2">{isSpanish ? '"Vivimos en un país en el que te obligan a hacer como que no pasó nada..." (Diana)' : '"We live in a country where they force you to act like nothing happened..." (Diana)'}</p>
              <p className="text-gray-900">{isSpanish ? '¿Has pasado por experiencias difíciles que te hicieron dudar de tu confianza y autoestima?' : 'Have you gone through difficult experiences that made you doubt your confidence and self-esteem?'}</p>
            </div>
          </div>

          <p className="text-center text-lg mt-12 text-gray-700">
            {isSpanish 
              ? 'No estás sola. Muchas mujeres sienten lo mismo. Pero mereces verte y sentirte diferente. Mereces reconocer tu fuerza y belleza únicas.' 
              : 'You are not alone. Many women feel the same way. But you deserve to see and feel different. You deserve to recognize your unique strength and beauty.'}
          </p>
        </div>
      </section>
      </ScrollReveal>

      {/* Solution / Transformation Section */}
      <ScrollReveal delay={0.1}>
      <section className="py-16 md:py-24 bg-medium">
        <div className="container mx-auto max-w-screen-lg px-4">
          <h4 className="text-3xl md:text-4xl text-serif font-light mb-12 tracking-wide text-center">
            {isSpanish 
              ? 'Una Sesión Boudoir Es Más Que Fotos: Es un Reencuentro Contigo Misma.' 
              : 'A Boudoir Session Is More Than Photos: It\'s a Reconnection With Yourself.'}
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-800">
              <p className="text-lg leading-relaxed">
                {isSpanish 
                  ? 'Imagina un espacio seguro, sin juicios, donde puedes ser tú misma, "sin máscaras" (Gabriela). Un lugar donde "la sensualidad es amor propio reflejado en la mirada" (Alejandra).' 
                  : 'Imagine a safe space, without judgments, where you can be yourself, "without masks" (Gabriela). A place where "sensuality is self-love reflected in the gaze" (Alejandra).'}
              </p>
              <p className="text-lg leading-relaxed">
                {isSpanish 
                  ? 'Conmigo, la fotografía boudoir se convierte en un acto de "amor propio" (Lucia, Renata), una herramienta para "aceptarte tal cual eres" (Sofia, Carmen) y "celebrar abiertamente ser cíclica" (Ximena).' 
                  : 'With me, boudoir photography becomes an act of "self-love" (Lucia, Renata), a tool to "accept yourself as you are" (Sofia, Carmen) and "openly celebrate being cyclical" (Ximena).'}
              </p>
              <p className="text-lg leading-relaxed">
                {isSpanish 
                  ? 'Es una oportunidad para "honrar tus emociones" (Natalia), "reconocer tu valor" (Renata) y darte cuenta de que "eres hermosa... fuerte hasta en tus momentos más bajos" (Valeria).' 
                  : 'It\'s an opportunity to "honor your emotions" (Natalia), "recognize your worth" (Renata) and realize that "you are beautiful... strong even in your lowest moments" (Valeria).'}
              </p>
              <p className="text-lg leading-relaxed">
                {isSpanish 
                  ? 'Juntos, creamos imágenes que capturan tu esencia única y profunda (Gabriela), esa fuerza y belleza que a veces olvidas que posees. Es "un regalo que te quieres hacer para conocerte desde otra perspectiva y para valorarte aún más como mujer" (Fernanda).' 
                  : 'Together, we create images that capture your unique and profound essence (Gabriela), that strength and beauty you sometimes forget you possess. It\'s "a gift you want to give yourself to know yourself from another perspective and to value yourself even more as a woman" (Fernanda).'}
              </p>
              <p className="text-xl italic mt-8 text-center">
                {isSpanish 
                  ? '"Amo y disfruto mi cuerpo... soy bien apasionada" (Isabella).' 
                  : '"I love and enjoy my body... I\'m very passionate" (Isabella).'}
              </p>
              <p className="text-lg mt-4 text-center">
                {isSpanish 
                  ? 'Mi objetivo es que te sientas así: libre, poderosa y conectada contigo.' 
                  : 'My goal is for you to feel this way: free, powerful, and connected with yourself.'}
              </p>
            </div>
            <div className="flex justify-center items-center">
              {/* Placeholder for Supporting Image */}
              <div className="w-full aspect-square bg-gray-300 rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-gray-500">{isSpanish ? 'Imagen de apoyo' : 'Supporting Image'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Meet David Josué Section */}
      <ScrollReveal delay={0.1}>
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-lg px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image 
                src="/images/david-josue-05.jpg" 
                alt={isSpanish ? "David Josué, fotógrafo boudoir" : "David Josué, boudoir photographer"} 
                width={400} 
                height={500} 
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div>
              <h5 className="text-3xl md:text-4xl text-serif font-light mb-6 tracking-wide">
                {isSpanish 
                  ? 'Hola, Soy David Josué. Tu Fotógrafo y Cómplice en Este Viaje.' 
                  : 'Hi, I\'m David Josué. Your Photographer and Partner on This Journey.'}
              </h5>
              <div className="space-y-4 text-gray-700">
                 <p>
                   {isSpanish 
                     ? 'Desde que inicié este proyecto de fotografía boudoir, mi pasión ha sido crear un espacio donde las mujeres puedan explorar su vulnerabilidad, celebrar su fuerza y redescubrir su belleza única, esa que es "demasiado grande para ser descrita con palabras".' 
                     : 'Since I started this boudoir photography project, my passion has been to create a space where women can explore their vulnerability, celebrate their strength, and rediscover their unique beauty, that which is "too great to be described with words."'}
                 </p>
                 <p>
                   {isSpanish 
                     ? 'Con base en Baja California, viajo constantemente por México (CDMX, Oaxaca, Mérida, Tijuana, Monterrey, Guadalajara y más) para conectar con mujeres increíbles como tú.' 
                     : 'Based in Baja California, I travel constantly throughout Mexico (Mexico City, Oaxaca, Mérida, Tijuana, Monterrey, Guadalajara, and more) to connect with amazing women like you.'}
                 </p>
                 <p>
                   {isSpanish 
                     ? 'Mi enfoque es colaborativo y relajado. Como dicen mis clientas, "dejar que propongan algunas cosas ayuda mucho a que la sesión fluya más" (Nota de la sesión de Renata). Busco crear una atmósfera de confianza donde te sientas cómoda, escuchada y libre para expresarte.' 
                     : 'My approach is collaborative and relaxed. As my clients say, "letting them propose some things helps a lot to make the session flow more" (Note from Renata\'s session). I seek to create an atmosphere of trust where you feel comfortable, heard, and free to express yourself.'}
                 </p>
                 <p>
                   {isSpanish 
                     ? 'No se trata solo de poses perfectas, sino de capturar momentos auténticos, "la conexión, las caricias, las miradas, las cagadas de risa y esa intimidad tan bonita" (Nota de la sesión de Elena & Mateo).' 
                     : 'It\'s not just about perfect poses, but about capturing authentic moments, "the connection, the caresses, the glances, the laughter, and that beautiful intimacy" (Note from Elena & Mateo\'s session).'}
                 </p>
                 <p>
                   {isSpanish 
                     ? 'Sé que puede dar nervios, pero estoy aquí para guiarte y asegurarme de que la experiencia sea tan empoderadora y divertida como las fotos finales. "La neta creo que nos caímos muy muy bien desde el principio" (Nota de la sesión de Fernanda) - ¡Esa es la meta!' 
                     : 'I know it can be nerve-wracking, but I\'m here to guide you and make sure the experience is as empowering and fun as the final photos. "Honestly, I think we got along very, very well from the beginning" (Note from Fernanda\'s session) - That\'s the goal!'}
                 </p>
              </div>
              <div className="mt-8">
                <Link href={`/${lang}/about`} className="text-gray-600 hover:text-gray-900 hover:underline transition-colors duration-200">
                  {isSpanish ? 'Conoce Más Sobre Mi Filosofía →' : 'Learn More About My Philosophy →'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Portfolio Showcase */}
      <ScrollReveal delay={0.1}>
      <section className="py-16 md:py-24 bg-light">
        <div className="container mx-auto max-w-screen-lg px-4 text-center">
          <h6 className="text-3xl md:text-4xl text-serif font-light mb-8 tracking-wide">
            {isSpanish ? 'Descubre Tu Esencia' : 'Discover Your Essence'}
          </h6>
          
          {/* Gallery placeholder - would be replaced with actual gallery component */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="aspect-[3/4] bg-gray-300 rounded-md overflow-hidden flex items-center justify-center">
                <span className="text-gray-500">{isSpanish ? `Imagen ${num}` : `Image ${num}`}</span>
              </div>
            ))}
          </div>
          
          <p className="text-lg text-gray-600 mb-8">{isSpanish ? 'Cada sesión es única, como tú.' : 'Each session is unique, just like you.'}</p>
          
          <Link href={`/${lang}/portfolio`} className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 py-2 bg-dark text-white hover:opacity-90 transition-colors">
            {isSpanish ? 'Ver Portafolio Completo' : 'View Full Portfolio'}
          </Link>
        </div>
      </section>
      </ScrollReveal>

      {/* Testimonials / Social Proof Section */}
      <ScrollReveal delay={0.1}>
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-lg px-4 text-center">
          <h4 className="text-3xl md:text-4xl text-serif font-light mb-12 tracking-wide">
            {isSpanish ? 'Historias Reales, Transformaciones Poderosas' : 'Real Stories, Powerful Transformations'}
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
             {/* Testimonial 1 (Sofia - Enhanced) */}
             <div className="bg-light p-6 rounded-lg shadow-sm">
               <p className="italic text-gray-700 mb-4">{isSpanish ? '"Desde que era niña he tenido muchas inseguridades... Con David, me di cuenta de lo valiosa que soy, dejaron de importarme tanto los comentarios negativos y me enfoqué en amar cada parte de mi cuerpo."' : '"Since I was a child, I\'ve had many insecurities... With David, I realized how valuable I am, negative comments stopped mattering so much and I focused on loving every part of my body."'}</p>
               <p className="font-semibold text-right">- Sofia</p>
             </div>
             {/* Testimonial 2 (Renata - Enhanced) */}
             <div className="bg-light p-6 rounded-lg shadow-sm">
               <p className="italic text-gray-700 mb-4">{isSpanish ? '"Ya llevo aproximadamente tres meses practicando el amor propio y puedo decir que ha cambiado mi vida... Desde que empecé a entenderme y reconocer mi valor con la ayuda de David, me he sentido más liviana, más relajada."' : '"I\'ve been practicing self-love for about three months now and I can say it has changed my life... Since I started understanding myself and recognizing my worth with David\'s help, I\'ve felt lighter, more relaxed."'}</p>
               <p className="font-semibold text-right">- Renata</p>
             </div>
             {/* Testimonial 3 (Chío) */}
             <div className="bg-light p-6 rounded-lg shadow-sm">
               <p className="italic text-gray-700 mb-4">{isSpanish ? '"Desde que entras al estudio, la vibra es otra cosa. Estás con un profesional en un espacio padrísimo solo para ti... Me sentí 100% cómoda... Fue un momento mágico, me sentí en un ambiente de amor y confianza, me sentí bonita y muy atractiva."' : '"From the moment you enter the studio, the vibe is something else. You\'re with a professional in an awesome space just for you... I felt 100% comfortable... It was a magical moment, I felt in an atmosphere of love and trust, I felt pretty and very attractive."'}</p>
               <p className="font-semibold text-right">- Chío</p>
             </div>
             {/* Testimonial 4 (Valeria - Enhanced) */}
             <div className="bg-light p-6 rounded-lg shadow-sm">
               <p className="italic text-gray-700 mb-4">{isSpanish ? '"Mostrar mi piel no debería ser fuente de conflicto... David me ayudó a sentirme empoderada para compartir imágenes que me hacen sentir feliz."' : '"Showing my skin shouldn\'t be a source of conflict... David helped me feel empowered to share images that make me feel happy."'}</p>
               <p className="font-semibold text-right">- Valeria</p>
             </div>
             {/* Testimonial 5 (Mariana - Enhanced) */}
             <div className="bg-light p-6 rounded-lg shadow-sm">
               <p className="italic text-gray-700 mb-4">{isSpanish ? '"No me había animado a hacerlo anteriormente por el temor a la opinión de los demás... hoy en día, gracias a la experiencia con David, he aprendido a ignorar comentarios y a decidir por mí misma."' : '"I hadn\'t dared to do it before because of the fear of others\' opinions... nowadays, thanks to the experience with David, I\'ve learned to ignore comments and to decide for myself."'}</p>
               <p className="font-semibold text-right">- Mariana</p>
             </div>
             {/* Testimonial 6 (Andrea - Enhanced) */}
             <div className="bg-light p-6 rounded-lg shadow-sm">
               <p className="italic text-gray-700 mb-4">{isSpanish ? '"Aprendí que el amor propio es una de las primeras cosas que debemos poner en práctica... La sesión con David fue un paso importante para nutrir, ejercitar, amar mi cuerpo, amarme."' : '"I learned that self-love is one of the first things we should practice... The session with David was an important step to nourish, exercise, love my body, love myself."'}</p>
               <p className="font-semibold text-right">- Andrea</p>
             </div>
              {/* Testimonial 7 (Anel) */}
               <div className="bg-light p-6 rounded-lg shadow-sm">
                <p className="italic text-gray-700 mb-4">{isSpanish ? '"Fue una experiencia muy introspectiva. Pude verme a mí misma... Enfrenté uno de mis miedos más grandes y aprendí a querer mi cuerpo y valorar cómo soy. Fue algo muy fregón."' : '"It was a very introspective experience. I could see myself... I faced one of my biggest fears and learned to love my body and value how I am. It was something really cool."'}</p>
                <p className="font-semibold text-right">- Anel</p>
              </div>
              {/* Testimonial 8 (Olimpia) */}
              <div className="bg-light p-6 rounded-lg shadow-sm">
               <p className="italic text-gray-700 mb-4">{isSpanish ? '"Hay un antes y un después del Boudoir... me cuesta trabajo aceptarme... Esa inseguridad... Ahora... he aprendido la importancia de ponerme en primer lugar y desarrollar ese amor propio... he aprendido a mirarme con amor... el juicio más duro viene de mí misma... BASTA! Esta soy yo... ¡¡y soy y me reconozco bella!!... David Josué listo con la cámara... la labor que estás haciendo va mucho más allá del arte... captas... Su esencia. Para mí fue totalmente un ejercicio de autoayuda... Gracias por elegirme, nada es coincidencia."' : '"There\'s a before and after Boudoir... it\'s hard for me to accept myself... That insecurity... Now... I\'ve learned the importance of putting myself first and developing that self-love... I\'ve learned to look at myself with love... the hardest judgment comes from myself... ENOUGH! This is me... and I am and recognize myself as beautiful!!... David Josué ready with the camera... the work you are doing goes far beyond art... you capture... Their essence. For me it was totally a self-help exercise... Thanks for choosing me, nothing is a coincidence."'}</p>
              <p className="font-semibold text-right">- Olimpia</p>
            </div>
             {/* Testimonial 9 (Juana) */}
             <div className="bg-light p-6 rounded-lg shadow-sm">
               <p className="italic text-gray-700 mb-4">{isSpanish ? '"Soy una persona con muchos complejos... Pero el estar así en la sesión, poder ser yo, fue algo que necesitaba, una conexión conmigo misma... Aprendí a quererme, a apapacharse, a darse un abrazo y aceptarse. Me encantó poder estar en contacto conmigo, fue algo muy yo con yo... Me siento segura y quiero agarrar este sentimiento y no dejarlo ir."' : '"I\'m a person with many personal complexes that fell on my body... But being like that in the session, being able to be me, was something I needed, a connection with myself... I learned to love myself, to pamper myself, to give myself a hug and accept myself. I loved being able to be in contact with myself, it was something very me with me... I feel confident and I want to hold onto this feeling and not let it go."'}</p>
               <p className="font-semibold text-right">- Juana</p>
             </div>
           </div>
          {/* Removed the "Read More" link */}
         </div>
       </section>
       </ScrollReveal>

      {/* Addressing Objections / FAQ Snippets */}
      <ScrollReveal delay={0.1}>
      <section className="py-16 md:py-24 bg-light">
        <div className="container mx-auto max-w-screen-md px-4">
          <h5 className="text-3xl md:text-4xl text-serif font-light mb-12 tracking-wide text-center">
            {isSpanish ? '¿Tienes Dudas? Es Normal.' : 'Have Questions? It\'s Normal.'}
          </h5>
          
          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h6 className="text-xl font-semibold mb-3">{isSpanish ? '¿Y si me siento nerviosa o insegura?' : 'What if I feel nervous or insecure?'}</h6>
              <p className="text-gray-700">{isSpanish ? 'Mi prioridad es tu comodidad. Es completamente normal sentir nervios. Trabajaremos a tu ritmo, sin presiones, creando un ambiente de confianza para que te relajes y disfrutes.' : 'My priority is your comfort. It\'s completely normal to feel nervous. We\'ll work at your pace, without pressure, creating an atmosphere of trust so you can relax and enjoy.'}</p>
            </div>
            {/* FAQ Item 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h6 className="text-xl font-semibold mb-3">{isSpanish ? 'No tengo "cuerpo de modelo"...' : 'I don\'t have a "model\'s body"...'}</h6>
              <p className="text-gray-700">{isSpanish ? '¡Perfecto! Este espacio celebra TODOS los cuerpos. Como dice Julieta, "las inseguridades no siempre tienen que ver con tu cuerpo". Mi enfoque es resaltar tu belleza única, tal como eres.' : 'Perfect! This space celebrates ALL bodies. As Julieta says, "insecurities don\'t always have to do with your body." My focus is on highlighting your unique beauty, just as you are.'}</p>
            </div>
            {/* FAQ Item 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h6 className="text-xl font-semibold mb-3">{isSpanish ? '¿Qué pasa con mi privacidad?' : 'What about my privacy?'}</h6>
              <p className="text-gray-700">{isSpanish ? 'Tu confianza es fundamental. Nunca comparto imágenes sin tu consentimiento explícito. Discutiremos tus preferencias y respetaré tus decisiones sobre el uso de las fotos.' : 'Your trust is fundamental. I never share images without your explicit consent. We will discuss your preferences, and I will absolutely respect your decisions regarding the use of the photos.'}</p>
            </div>
            {/* FAQ Item 4 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h6 className="text-xl font-semibold mb-3">{isSpanish ? '¿Cómo es el proceso?' : 'What is the process like?'}</h6>
              <p className="text-gray-700">{isSpanish ? '¡Sigue leyendo! Te lo explico a continuación. Es un viaje personalizado que comienza con una conversación.' : 'Keep reading! I explain it below. It\'s a personalized journey that starts with a conversation.'}</p>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* The Process Section */}
      <ScrollReveal delay={0.1}>
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-lg px-4 text-center">
          <h4 className="text-3xl md:text-4xl text-serif font-light mb-12 tracking-wide">
            {isSpanish ? 'Tu Viaje Boudoir: Simple y Personalizado' : 'Your Boudoir Journey: Simple and Personalized'}
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {/* Step 1 */}
            <div>
              <div className="bg-dark text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-semibold mb-6 mx-auto">1</div>
              <h6 className="text-xl font-semibold mb-3">{isSpanish ? 'Consulta Gratuita' : 'Free Consultation'}</h6>
              <p className="text-gray-700">{isSpanish ? 'Conversamos sobre tus deseos, resuelvo tus dudas y creamos juntas una visión para tu sesión única.' : 'We discuss your desires, I answer your questions, and together we create a vision for your unique session.'}</p>
            </div>
            {/* Step 2 */}
            <div>
              <div className="bg-dark text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-semibold mb-6 mx-auto">2</div>
              <h6 className="text-xl font-semibold mb-3">{isSpanish ? 'Planeación y Preparación' : 'Planning & Preparation'}</h6>
              <p className="text-gray-700">{isSpanish ? 'Te guío en cada paso, desde vestuario hasta estado mental, para asegurar que llegues confiada y lista para brillar.' : 'I guide you through every step, from wardrobe to mindset, to ensure you arrive confident and ready to shine.'}</p>
            </div>
            {/* Step 3 */}
            <div>
              <div className="bg-dark text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-semibold mb-6 mx-auto">3</div>
              <h6 className="text-xl font-semibold mb-3">{isSpanish ? 'La Experiencia Boudoir' : 'The Boudoir Experience'}</h6>
              <p className="text-gray-700">{isSpanish ? 'En un ambiente seguro y relajado, te dirijo suavemente para capturar tu esencia auténtica a través de mi lente artístico.' : 'In a safe and relaxed environment, I gently direct you to capture your authentic essence through my artistic lens.'}</p>
            </div>
            {/* Step 4 */}
            <div>
              <div className="bg-dark text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-semibold mb-6 mx-auto">4</div>
              <h6 className="text-xl font-semibold mb-3">{isSpanish ? 'Entrega de Arte' : 'Art Delivery'}</h6>
              <p className="text-gray-700">{isSpanish ? 'Seleccionas tus imágenes favoritas y decidimos juntas cómo preservarlas, creando un tesoro personal que celebra tu poder y belleza.' : 'You select your favorite images and together we decide how to preserve them, creating a personal treasure that celebrates your power and beauty.'}</p>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Travel Information Section */}
      <ScrollReveal delay={0.1}>
      <section className="py-16 md:py-24 bg-medium">
        <div className="container mx-auto max-w-screen-lg px-4 text-center">
          <h5 className="text-3xl md:text-4xl text-serif font-light mb-6 tracking-wide">
            {isSpanish ? 'Llevando la Experiencia Boudoir a Tu Ciudad' : 'Bringing the Boudoir Experience to Your City'}
          </h5>
          {/* Optional: Map Graphic */}
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            {isSpanish 
              ? 'Aunque mi base está en la hermosa Baja California, viajo constantemente para llevar esta experiencia transformadora a mujeres de todo México.' 
              : 'Although my base is in beautiful Baja California, I travel constantly to bring this transformative experience to women throughout Mexico.'}
          </p>
          <h6 className="text-xl font-semibold mb-4">{isSpanish ? 'Actualmente Agendando Sesiones de Viaje En:' : 'Currently Booking Travel Sessions In:'}</h6>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
            {travelCities.map(city => (
              <span key={city} className="text-gray-800">{city}</span>
            ))}
          </div>
          <p className="text-gray-600 mb-8">{isSpanish ? '¿No ves tu ciudad? ¡Pregúntame! Siempre estoy abierto a explorar nuevos destinos.' : 'Don\'t see your city? Ask me! I\'m always open to exploring new destinations.'}</p>
          
          {/* Placeholder Link for travel dates */}
          <Link href="#" className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 py-2 bg-dark text-white hover:opacity-90 transition-colors">
            {isSpanish ? 'Consulta Fechas de Viaje' : 'Check Travel Dates'}
          </Link>
        </div>
      </section>
      </ScrollReveal>

      {/* Boudoir Social Links Section */}
      <ScrollReveal delay={0.1}>
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-screen-md px-4 text-center">
           <h5 className="text-xl font-semibold mb-4 text-gray-800">
             {isSpanish ? 'Sigue la Inspiración Boudoir:' : 'Follow Boudoir Inspiration:'}
           </h5>
           <div className="flex justify-center space-x-6">
              <a href="https://www.instagram.com/davidjosueboudoir/" aria-label="Instagram Boudoir" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                <InstagramIcon className="h-6 w-6 flex-shrink-0" />
                <span>Instagram Boudoir</span>
              </a>
              <a href="https://www.facebook.com/boudoirdavidjosue/" aria-label="Facebook Boudoir" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                <FacebookIcon className="h-6 w-6 flex-shrink-0" />
                 <span>Facebook Boudoir</span>
              </a>
           </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Final Call to Action Section */}
      <ScrollReveal delay={0.2}>
      <section className="py-20 md:py-28 bg-light"> {/* Changed background for contrast */}
        <div className="container mx-auto max-w-screen-md px-4 text-center">
          <h3 className="text-3xl md:text-4xl text-serif font-light mb-6 tracking-wide text-brand-text-primary"> {/* Use primary text color */}
            {isSpanish ? '¿Lista Para Verte Con Otros Ojos?' : 'Ready To See Yourself Differently?'}
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            {isSpanish 
              ? 'Mereces celebrar quién eres, justo ahora. Mereces una experiencia que te recuerde tu valor esencial.' 
              : 'You deserve to celebrate who you are, right now. You deserve an experience that reminds you of your essential worth.'}
          </p>
          <p className="italic text-gray-600 mb-4">
            {isSpanish ? '"Les aconsejaría a todas las mujeres que se amen mucho... Darnos el valor que nos merecemos." (Renata)' : '"I would advise all women to love themselves very much... Give ourselves the value we deserve." (Renata)'}
          </p>
          <p className="italic text-gray-600 mb-8">
            {isSpanish ? '"Libres nos vemos más bonitas." (Camila)' : '"We look more beautiful when we are free." (Camila)'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 py-2 bg-dark text-white hover:opacity-90 transition-colors">
              {isSpanish ? '¡Sí! Quiero Mi Consulta Gratuita' : 'Yes! I Want My Free Consultation'}
            </Link>
            <Link href={`/${lang}/contact`} className="text-gray-600 hover:text-gray-900 hover:underline transition-colors duration-200">
              {isSpanish ? 'O envíame un mensaje directo →' : 'Or send me a direct message →'}
            </Link>
          </div>
        </div>
      </section>
      </ScrollReveal>
    </main>
  );
}
