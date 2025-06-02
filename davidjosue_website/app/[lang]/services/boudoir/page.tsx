// Function to generate static paths for supported languages
export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'es-MX' }];
}
// /app/[lang]/services/boudoir/page.tsx
import { Metadata } from 'next';
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

  return (
    <div className="flex flex-col">
      {/* Hero Section - Elegant Fullscreen KT Merry Style */}
      <section className="relative h-[85vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
        {/* Full-screen background image */}
        <Image
          src="/images/david-josue-boudoir-photography-service.jpg"
          alt={isSpanish ? "Fotografía boudoir artística" : "Artistic boudoir photography"}
          fill
          quality={90}
          priority
          style={{ objectFit: 'cover' }}
          className="absolute inset-0 z-0"
        />
        {/* Elegant gradient overlay */}
        <div className="absolute inset-0 z-1 bg-gradient-to-t from-black/70 via-black/40 to-black/30"></div>
        
        {/* Text Content - Minimalist KT Merry Style */}
        <div className="relative z-10 p-4 max-w-3xl mx-auto">
          <ScrollReveal delay={0.3} direction="fade">
            <h1 className="text-5xl sm:text-6xl md:text-7xl text-serif font-light mb-12 leading-tight tracking-[0.08em]">
              {isSpanish 
                ? 'Redescubre Tu Belleza. Celebra Tu Poder.' 
                : 'Rediscover Your Beauty. Celebrate Your Power.'}
            </h1>
            <p className="text-base md:text-lg max-w-2xl mx-auto mb-14 font-light tracking-wider text-white/90">
              {isSpanish 
                ? 'Una experiencia boudoir que honra tu esencia. Un espacio para reconectar contigo misma y celebrar tu belleza única.' 
                : 'A boudoir experience that honors your essence. A space to reconnect with yourself and celebrate your unique beauty.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center mt-8">
              <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center text-sm uppercase tracking-widest font-light px-10 py-3 bg-white text-gray-900 hover:bg-white/90 transition-all duration-300">
                {isSpanish ? 'Agenda Tu Consulta' : 'Schedule Your Consultation'}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Philosophy Section - Elegant KT Merry Style */}
      <ScrollReveal delay={0.3}>
      <section className="py-24 md:py-32 bg-brand-background">
        <div className="container mx-auto max-w-screen-lg px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            {/* Left Column - Large Featured Image */}
            <ScrollReveal delay={0.5}>
            <div className="relative">
              <Image 
                src="/images/davidjosue_selfie_guayabera_01.jpeg"
                alt={isSpanish ? "David Josué, fotógrafo boudoir" : "David Josué, boudoir photographer"}
                width={600} 
                height={800}
                quality={90}
                className="w-full h-auto"
              />
            </div>
            </ScrollReveal>
            
            {/* Right Column - Elegant Typography */}
            <ScrollReveal delay={0.7}>
            <div className="flex flex-col space-y-6">
              <h2 className="text-3xl md:text-4xl text-serif font-light tracking-wide mb-6">
                {isSpanish ? 'Una Sesión Boudoir Es Más Que Fotos' : 'A Boudoir Session Is More Than Photos'}
              </h2>
              <p className="text-base md:text-lg text-brand-text-secondary leading-relaxed">
                {isSpanish 
                  ? 'Imagina un espacio seguro, sin juicios, donde puedes ser tú misma, "sin máscaras" (Gabriela). Un lugar donde "la sensualidad es amor propio reflejado en la mirada" (Alejandra).' 
                  : 'Imagine a safe space, without judgments, where you can be yourself, "without masks" (Gabriela). A place where "sensuality is self-love reflected in the gaze" (Alejandra).'}
              </p>
              <p className="text-base md:text-lg text-brand-text-secondary leading-relaxed">
                {isSpanish 
                  ? 'Conmigo, la fotografía boudoir se convierte en un acto de "amor propio" (Lucia, Renata), una herramienta para "aceptarte tal cual eres" (Sofia, Carmen) y "celebrar abiertamente ser cíclica" (Ximena).' 
                  : 'With me, boudoir photography becomes an act of "self-love" (Lucia, Renata), a tool to "accept yourself as you are" (Sofia, Carmen) and "openly celebrate being cyclical" (Ximena).'}
              </p>
              <p className="text-base md:text-lg text-brand-text-secondary italic">
                {isSpanish 
                  ? '"Amo y disfruto mi cuerpo... soy bien apasionada" (Isabella).' 
                  : '"I love and enjoy my body... I\'m very passionate" (Isabella).'}
              </p>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      </ScrollReveal>
      
      {/* Testimonial Showcase - KT Merry Style Single Quote */}
      <ScrollReveal delay={0.3}>
      <section className="py-24 md:py-32 bg-brand-background-alt text-center">
        <div className="container mx-auto max-w-screen-md px-8">
          <blockquote className="relative">
            <p className="text-xl md:text-3xl text-serif font-light italic leading-relaxed mb-8">
              {isSpanish 
                ? '"Me sentía insegura de mi cuerpo y siempre me acomplejaba... Ahora he aprendido a mirarme con amor. El juicio más duro viene de mí misma... ¡BASTA! Esta soy yo... ¡¡y soy y me reconozco bella!!"' 
                : '"I felt insecure about my body and was always self-conscious... Now I\'ve learned to look at myself with love. The hardest judgment comes from myself... ENOUGH! This is me... and I am and recognize myself as beautiful!!"'}
            </p>
            <footer className="text-brand-text-secondary">
              <cite>— Olimpia</cite>
            </footer>
          </blockquote>
        </div>
      </section>
      </ScrollReveal>

      {/* Portfolio Gallery - KT Merry Style */}
      <ScrollReveal delay={0.3}>
      <section className="py-24 md:py-32 bg-brand-background">
        <div className="container mx-auto max-w-screen-lg px-4 text-center">
          <h2 className="text-3xl md:text-4xl text-serif font-light mb-16 tracking-wide">
            {isSpanish ? 'La Experiencia Boudoir' : 'The Boudoir Experience'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Two featured images */}
            <ScrollReveal delay={0.5}>
              <div className="mb-8">
                <Image 
                  src="/images/david-josue-boudoir-photography-service.jpg"
                  alt={isSpanish ? "Experiencia boudoir" : "Boudoir experience"}
                  width={600}
                  height={900}
                  quality={90}
                  className="w-full h-auto"
                />
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.7}>
              <div className="mb-8">
                <Image 
                  src="/images/davidjosue_selfie_guayabera_02.jpeg"
                  alt={isSpanish ? "Sesión boudoir" : "Boudoir session"}
                  width={600}
                  height={900}
                  quality={90}
                  className="w-full h-auto"
                />
              </div>
            </ScrollReveal>
          </div>
          
          <Link href={`/${lang}/portfolio`} className="inline-flex items-center justify-center text-sm uppercase tracking-widest font-light mt-8 border-b border-brand-text-primary pb-1 hover:border-brand-accent transition-all duration-300">
            {isSpanish ? 'Ver Más Trabajos' : 'View More Work'}
          </Link>
        </div>
      </section>
      </ScrollReveal>

      {/* The Process - Elegant KT Merry Style */}
      <ScrollReveal delay={0.3}>
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto max-w-screen-lg px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-serif font-light mb-6 tracking-wide">
              {isSpanish ? 'Tu Viaje Boudoir' : 'Your Boudoir Journey'}
            </h2>
            <p className="text-base md:text-lg text-brand-text-secondary max-w-2xl mx-auto">
              {isSpanish ? 'Un proceso personalizado, diseñado para tu comodidad y confianza' : 'A personalized process, designed for your comfort and confidence'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <ScrollReveal delay={0.5}>
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-widest text-brand-text-primary/60">01</p>
                <h3 className="text-xl font-light">{isSpanish ? 'Consulta Inicial' : 'Initial Consultation'}</h3>
                <p className="text-brand-text-secondary">
                  {isSpanish ? 'Conversamos sobre tus deseos, resuelvo tus dudas y creamos juntas una visión para tu sesión única.' : 'We discuss your desires, I answer your questions, and together we create a vision for your unique session.'}
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-widest text-brand-text-primary/60">02</p>
                <h3 className="text-xl font-light">{isSpanish ? 'Preparación' : 'Preparation'}</h3>
                <p className="text-brand-text-secondary">
                  {isSpanish ? 'Te guío en cada paso, desde vestuario hasta estado mental, para asegurar que llegues confiada y lista para brillar.' : 'I guide you through every step, from wardrobe to mindset, to ensure you arrive confident and ready to shine.'}
                </p>
              </div>
            </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.7}>
            <div className="space-y-12">
              {/* Step 3 */}
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-widest text-brand-text-primary/60">03</p>
                <h3 className="text-xl font-light">{isSpanish ? 'La Sesión' : 'The Session'}</h3>
                <p className="text-brand-text-secondary">
                  {isSpanish ? 'En un ambiente seguro y relajado, te dirijo suavemente para capturar tu esencia auténtica a través de mi lente artístico.' : 'In a safe and relaxed environment, I gently direct you to capture your authentic essence through my artistic lens.'}
                </p>
              </div>
              
              {/* Step 4 */}
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-widest text-brand-text-primary/60">04</p>
                <h3 className="text-xl font-light">{isSpanish ? 'Tu Galería' : 'Your Gallery'}</h3>
                <p className="text-brand-text-secondary">
                  {isSpanish ? 'Seleccionas tus imágenes favoritas y decidimos juntas cómo preservarlas, creando un tesoro personal que celebra tu poder y belleza.' : 'You select your favorite images and together we decide how to preserve them, creating a personal treasure that celebrates your power and beauty.'}
                </p>
              </div>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Travel & FAQ - KT Merry Style */}
      <ScrollReveal delay={0.3}>
      <section className="py-24 md:py-32 bg-brand-background-alt">
        <div className="container mx-auto max-w-screen-lg px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {/* Travel Info */}
            <ScrollReveal delay={0.5}>
            <div>
              <h2 className="text-2xl md:text-3xl text-serif font-light mb-8 tracking-wide">
                {isSpanish ? 'Sesiones en Tu Ciudad' : 'Sessions in Your City'}
              </h2>
              
              <p className="text-base md:text-lg text-brand-text-secondary mb-8">
                {isSpanish 
                  ? 'Viajo constantemente por México para llevar esta experiencia transformadora a mujeres de todo el país.' 
                  : 'I travel constantly throughout Mexico to bring this transformative experience to women all over the country.'}
              </p>
              
              <div className="mb-8">
                <h3 className="text-lg font-light mb-4">{isSpanish ? 'Próximas Ciudades' : 'Upcoming Cities'}</h3>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {travelCities.map(city => (
                    <span key={city} className="text-brand-text-secondary">{city}</span>
                  ))}
                </div>
              </div>
              
              <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center text-sm uppercase tracking-widest font-light border-b border-brand-text-primary pb-1 hover:border-brand-accent transition-all duration-300">
                {isSpanish ? 'Consulta Fechas' : 'Check Dates'}
              </Link>
            </div>
            </ScrollReveal>
            
            {/* FAQ */}
            <ScrollReveal delay={0.7}>
            <div>
              <h2 className="text-2xl md:text-3xl text-serif font-light mb-8 tracking-wide">
                {isSpanish ? 'Preguntas Frecuentes' : 'Common Questions'}
              </h2>
              
              <div className="space-y-8">
                {/* FAQ Item 1 */}
                <div>
                  <h3 className="text-lg font-medium mb-2">{isSpanish ? '¿Y si me siento nerviosa?' : 'What if I feel nervous?'}</h3>
                  <p className="text-brand-text-secondary">
                    {isSpanish ? 'Es completamente normal. Trabajaremos a tu ritmo, creando un ambiente de confianza donde puedas relajarte.' : 'It\'s completely normal. We\'ll work at your pace, creating an atmosphere of trust where you can relax.'}
                  </p>
                </div>
                
                {/* FAQ Item 2 */}
                <div>
                  <h3 className="text-lg font-medium mb-2">{isSpanish ? '¿Qué pasa con mi privacidad?' : 'What about my privacy?'}</h3>
                  <p className="text-brand-text-secondary">
                    {isSpanish ? 'Tu confianza es fundamental. Nunca comparto imágenes sin tu consentimiento explícito.' : 'Your trust is fundamental. I never share images without your explicit consent.'}
                  </p>
                </div>
                
                {/* FAQ Item 3 */}
                <div>
                  <h3 className="text-lg font-medium mb-2">{isSpanish ? 'No tengo "cuerpo de modelo"' : 'I don\'t have a "model\'s body"'}</h3>
                  <p className="text-brand-text-secondary">
                    {isSpanish ? '¡Perfecto! Este espacio celebra TODOS los cuerpos. Mi enfoque es resaltar tu belleza única, tal como eres.' : 'Perfect! This space celebrates ALL bodies. My focus is on highlighting your unique beauty, just as you are.'}
                  </p>
                </div>
              </div>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Testimonials Carousel - KT Merry Style */}
      <ScrollReveal delay={0.3}>
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto max-w-screen-md px-4 text-center">
          <h2 className="text-3xl md:text-4xl text-serif font-light mb-16 tracking-wide">
            {isSpanish ? 'Voces de Transformación' : 'Voices of Transformation'}
          </h2>
          
          {/* Featured testimonial */}
          <ScrollReveal delay={0.5}>
          <blockquote className="relative mb-12">
            <p className="text-xl md:text-2xl text-serif font-light italic leading-relaxed mb-6">
              {isSpanish 
                ? '"Desde que era niña he tenido muchas inseguridades... Con David, me di cuenta de lo valiosa que soy, dejaron de importarme tanto los comentarios negativos y me enfoqué en amar cada parte de mi cuerpo."' 
                : '"Since I was a child, I\'ve had many insecurities... With David, I realized how valuable I am, negative comments stopped mattering so much and I focused on loving every part of my body."'}
            </p>
            <footer className="text-brand-text-secondary">
              <cite className="font-medium">— Sofia</cite>
            </footer>
          </blockquote>
          </ScrollReveal>
          
          <ScrollReveal delay={0.7}>
          <blockquote className="relative">
            <p className="text-xl md:text-2xl text-serif font-light italic leading-relaxed mb-6">
              {isSpanish 
                ? '"Ya llevo aproximadamente tres meses practicando el amor propio y puedo decir que ha cambiado mi vida... Me he sentido más liviana, más relajada."' 
                : '"I\'ve been practicing self-love for about three months now and I can say it has changed my life... I\'ve felt lighter, more relaxed."'}
            </p>
            <footer className="text-brand-text-secondary">
              <cite className="font-medium">— Renata</cite>
            </footer>
          </blockquote>
          </ScrollReveal>
        </div>
      </section>
      </ScrollReveal>

      {/* Contact CTA - KT Merry Style */}
      <ScrollReveal delay={0.3}>
      <section className="py-24 md:py-32 bg-brand-background-alt">
        <div className="container mx-auto max-w-screen-md px-4 text-center">
          <h2 className="text-3xl md:text-4xl text-serif font-light mb-8 tracking-wide">
            {isSpanish ? '¿Lista Para Verte Con Otros Ojos?' : 'Ready To See Yourself Differently?'}
          </h2>
          
          <p className="text-base md:text-lg text-brand-text-secondary mb-12 max-w-xl mx-auto">
            {isSpanish 
              ? 'Mereces celebrar quién eres, justo ahora. Mereces una experiencia que te recuerde tu valor esencial.' 
              : 'You deserve to celebrate who you are, right now. You deserve an experience that reminds you of your essential worth.'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center mt-8">
            <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center text-sm uppercase tracking-widest font-light px-10 py-3 bg-brand-text-primary text-white hover:bg-brand-text-primary/90 transition-all duration-300">
              {isSpanish ? 'Agenda Tu Consulta' : 'Schedule Your Consultation'}
            </Link>
          </div>
          
          {/* Social links */}
          <div className="mt-16">
            <p className="text-sm uppercase tracking-widest font-light mb-4 text-brand-text-secondary">
              {isSpanish ? 'Sigue la Inspiración' : 'Follow for Inspiration'}
            </p>
            
            <div className="flex justify-center space-x-6">
              <a href="https://www.instagram.com/davidjosueboudoir/" aria-label="Instagram Boudoir" target="_blank" rel="noopener noreferrer" className="text-brand-text-secondary hover:text-brand-text-primary transition-colors">
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href="https://www.facebook.com/boudoirdavidjosue/" aria-label="Facebook Boudoir" target="_blank" rel="noopener noreferrer" className="text-brand-text-secondary hover:text-brand-text-primary transition-colors">
                <FacebookIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}
