// Function to generate static paths for supported languages
export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'es-MX' }];
}
// /app/[lang]/page.tsx (Homepage)
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FlodeskForm } from '../../components/FlodeskForm';
import { ScrollReveal } from '../../components/ScrollReveal'; // Import animation component
import { formatDate } from '../../lib/utils'; // Utility function for date formatting
import { 
  PremiumHero, 
  PremiumButton, 
  PremiumSection,
  ServiceGrid, 
  ServiceCard,
  ProcessStep
} from '../../components/PremiumUI';
import {
  EditorialLayout,
  ImageRow,
  HeroImageWithText
} from '../../components/PremiumGallery';

// Define metadata specifically for the homepage
export const metadata: Metadata = {
  title: 'David Josue | International Wedding & Boudoir Photographer (Valle de Guadalupe)',
  description: 'Internationally acclaimed wedding and boudoir photographer David Josue, based in Valle de Guadalupe, Mexico. Capturing authentic moments worldwide. Explore portfolio & inquire.',
  // Add specific OG/Twitter for homepage if different from layout defaults
};

// Fetch recent posts (Example - uncomment and adapt if needed)
// async function getRecentPosts(locale: string) {
//   try {
//     const postsData = await getPublishedPosts(locale, 3); // Fetch 3 most recent
//     return postsData.docs;
//   } catch (error) {
//     console.error("Failed to fetch recent posts:", error);
//     return [];
//   }
// }

export default async function HomePage({ params }: { params: { lang: string } }) {
  const lang = params.lang === 'es-MX' ? 'es-MX' : 'en-US';
  const isSpanish = lang === 'es-MX'; // Define isSpanish here
  // const recentPosts = await getRecentPosts(lang); // Fetch posts if needed

  return (
    <div className="flex flex-col">
      {/* Hero Section - Using PremiumHero for elegant KT Merry style */}
      <PremiumHero
        backgroundSrc="/images/david-josue-wedding-photography-hero-image.webp"
        backgroundAlt="Stunning wedding photo backdrop"
        heading={isSpanish ? 'Fotografía Que Susurra Al Alma. Instantes Que Desnudan Tu Verdad.' : 'Photography That Feels Like Art. Moments That Feel Like You.'}
        subheading={isSpanish ? 'Creando arte visual con alma en Valle de Guadalupe y destinos exclusivos alrededor del mundo.' : 'Creating soulful visual art in Valle de Guadalupe and exclusive destinations around the world.'}
        contentWidth="wide"
      >
        <div className="flex flex-col sm:flex-row gap-5 justify-center mt-4">
          <PremiumButton 
            href={`/${lang}/portfolio`} 
            variant="primary"
          >
            {isSpanish ? 'Descubre Mi Universo Visual' : 'Explore My Work'}
          </PremiumButton>
          <PremiumButton 
            href={`/${lang}/contact`} 
            variant="secondary"
          >
            {isSpanish ? 'Iniciemos Una Conversación' : 'Inquire About Photography'}
          </PremiumButton>
        </div>
      </PremiumHero>

      {/* Service Intro Section - Using PremiumSection and ServiceGrid components */}
      <PremiumSection bgColor="background">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl text-serif font-light mb-14 tracking-wide">
            {isSpanish ? '¿Qué Relato Íntimo Tejeremos Juntos?' : 'What Story Will We Tell Together?'}
          </h2>
          
          <ServiceGrid columns={4}>
            <ServiceCard
              title={isSpanish ? 'Bodas de Destino: Poesía Visual' : 'Destination Weddings'}
              description={isSpanish ? 'Vuestra unión sagrada, inmortalizada con sensibilidad artística.' : 'Your love adventure, artfully captured.'}
              imageSrc="/images/david-josue-destination-wedding-photography-service.jpg"
              imageAlt="Wedding photo example"
              href={`/${lang}/services/destination-weddings`}
              delay={0.5}
            />
            
            <ServiceCard
              title="Boudoir"
              description={isSpanish ? 'Un ritual de reconexión con tu esencia divina.' : 'Celebrate your unique power and beauty.'}
              imageSrc="/images/david-josue-boudoir-photography-service.jpg"
              imageAlt="Boudoir photo example"
              href={`/${lang}/services/boudoir`}
              delay={0.7}
            />
            
            <ServiceCard
              title={isSpanish ? 'Retratos del Alma' : 'Portraits'}
              description={isSpanish ? 'La verdad desnuda de tu ser, revelada con delicadeza.' : 'Your personal story, told visually.'}
              imageSrc="/images/david-josue-portrait-photography-service.jpg"
              imageAlt="Portrait photo example"
              href={`/${lang}/services/portraits`}
              delay={0.9}
            />
            
            <ServiceCard
              title={isSpanish ? 'Arte Contemplativo' : 'Fine Art'}
              description={isSpanish ? 'Paisajes que susurran secretos ancestrales.' : 'Evocative landscapes for your space.'}
              imageSrc="/images/barco-via-lactea-ensenada-web.jpg"
              imageAlt="Fine Art night sky landscape"
              href={`/${lang}/fine-art`}
              delay={1.1}
            />
          </ServiceGrid>
        </div>
      </PremiumSection>

      {/* Artist Statement / Approach Section - Using HeroImageWithText */}
      <HeroImageWithText
        imageSrc="/images/david-josue-wedding-photography-hero-image.webp"
        imageAlt="Artistic wedding photography background"
        title={isSpanish ? 'La Mirada Contemplativa: El Alma Que Habita Cada Instante' : 'The Art of Seeing: Beyond Documentation'}
        subtitle={isSpanish 
          ? 'Mi lente no se limita a documentar; busca capturar la sensación y la esencia intangible del momento, transmutando lo efímero en eterno.' 
          : 'I don\'t just document. I create imagery that captures the feeling behind each fleeting moment and transforms it into something eternal.'}
        overlayOpacity="dark"
      />
      
      {/* Featured Showcase Image */}
      <PremiumSection bgColor="background" className="pt-0">
        <ScrollReveal delay={0.4}>
          <div className="max-w-4xl mx-auto">
            <Image
              src="/images/david-josue-cabo-san-lucas-wedding-destination.jpg"
              alt="Emotional wedding moment at Cabo San Lucas"
              width={1200}
              height={800}
              quality={90}
              className="w-full h-auto"
            />
          </div>
        </ScrollReveal>
      </PremiumSection>

      {/* How it Works Section - Using PremiumSection and ProcessStep components */}
      <PremiumSection bgColor="background-alt">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl text-serif font-light mb-4 tracking-wide">
            {isSpanish ? 'El Proceso: Tejiendo Vuestra Narrativa Visual' : 'The Process: Crafting Your Visual Story'}
          </h2>
          <p className="text-lg text-brand-text-secondary max-w-2xl mx-auto mb-12">
            {isSpanish 
              ? 'Desde nuestro primer encuentro hasta la entrega de vuestro legado visual, cada paso está diseñado con intención y cuidado, asegurando una experiencia tan memorable como las imágenes mismas.' 
              : 'From our first chat to the final delivery, every step is designed with intention and care, ensuring an experience as memorable as the images.'}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
            <ProcessStep
              number="01"
              title={isSpanish ? 'El Encuentro Sagrado' : 'Schedule a Chat'}
              description={isSpanish 
                ? 'Iniciemos con una conversación íntima, un espacio sagrado donde tus sueños e ideas puedan danzar libremente. Mi escucha será un acto de devoción, sumergiéndome en tu visión para co-crear desde la esencia.' 
                : 'Let\'s connect via video call. Tell me your vision, ask questions, and see if we\'re the right fit. No pressure, just conversation.'}
              delay={0.4}
            />
            
            <ProcessStep
              number="02"
              title={isSpanish ? 'Tejiendo La Visión' : 'Craft Your Vision'}
              description={isSpanish 
                ? 'Juntos, entrelazaremos hilos de inspiración para dar forma a un plan que honre la singularidad de tu alma. Cada instante sagrado, cada matiz emocional, será contemplado con reverencia.' 
                : 'We\'ll plan the timeline and key moments together, ensuring your photography reflects your priorities.'}
              delay={0.6}
            />
            
            <ProcessStep
              number="03"
              title={isSpanish ? 'La Danza Del Instante' : 'Live Your Day'}
              description={isSpanish 
                ? 'Abandónate al fluir sagrado del momento mientras mi mirada captura la magia invisible. Seré un testigo silencioso, moviéndome con la gracia de una sombra.' 
                : 'Relax and be present! I\'ll blend into the background, capturing the authentic moments and guiding you gently for stunning portraits.'}
              delay={0.8}
            />
            
            <ProcessStep
              number="04"
              title={isSpanish ? 'El Legado Visual' : 'Relive Forever'}
              description={isSpanish 
                ? 'Recibirás un legado visual donde cada instante ha sido transmutado en arte. Imágenes editadas con reverencia artística, portales que te devolverán a la emoción pura.' 
                : 'Receive your gallery of high-resolution, artfully edited images and discuss timeless, museum-quality albums or prints.'}
              delay={1.0}
            />
          </div>
        </div>
      </PremiumSection>

      {/* Success/Vision Section - Premium Design with Featured Image */}
      <PremiumSection bgColor="background" className="py-28 md:py-40">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl text-serif font-light mb-8 tracking-wide">
            {isSpanish 
              ? 'Imágenes Que Son Caricias Al Alma, Memorias Que Desafían Al Tiempo.' 
              : <>Imagine Wedding Photos Filled with <span className="italic">Real</span> Emotion and Timeless Beauty.</>}
          </h2>
          <p className="text-base md:text-lg max-w-xl mx-auto leading-relaxed tracking-wide text-brand-text-secondary mb-16">
            {isSpanish 
              ? 'Imágenes que te transportan. Cada emoción, cada mirada, cada instante efímero—preservados como reliquias que respiran tu historia más allá del tiempo.' 
              : <>Not just images, but emotional heirlooms. A <span className="italic">magical time-machine</span> that preserves the true essence of your celebration long after the moment has passed.</>}
          </p>
          
          <ScrollReveal delay={0.7}>
            <div className="max-w-4xl mx-auto">
              <Image
                src="/images/david-josue-cabo-san-lucas-wedding-destination.jpg"
                alt="Wedding couple emotional moment"
                width={1200}
                height={800}
                quality={90}
                className="w-full h-auto"
              />
            </div>
          </ScrollReveal>
        </div>
      </PremiumSection>

      {/* Destination Highlight Section - Using PremiumSection and ImageRow */}
      <PremiumSection bgColor="background-alt">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl text-serif font-light mb-4 tracking-wide">
            {isSpanish ? 'Peregrinaje Visual: Santuarios Del Amor Revelados' : 'From Valle de Guadalupe to the World'}
          </h2>
          <p className="text-lg text-brand-text-secondary max-w-2xl mx-auto mb-12">
            {isSpanish 
              ? 'Mi lente ha sido testigo silente de historias sagradas florecendo en los rincones más encantados del mundo. Cada destino imprime su luz única, su atmósfera etérea, su esencia irrepetible en las composiciones que co-creamos, elevando cada imagen a una plegaria visual.' 
              : 'Explore some of the beautiful locations where I\'ve had the pleasure to shoot.'}
          </p>
          
          <ImageRow
            images={[
              {
                src: "/images/david-josue-valle-de-guadalupe-wedding-destination.jpg",
                alt: "Valle de Guadalupe Wedding Destination",
                width: 600,
                height: 400
              },
              {
                src: "/images/david-josue-cabo-san-lucas-wedding-destination.jpg",
                alt: "Cabo San Lucas Wedding Destination",
                width: 600,
                height: 400
              },
              {
                src: "/images/david-josue-san-miguel-de-allende-wedding-destination.jpg",
                alt: "San Miguel de Allende Wedding Destination",
                width: 600,
                height: 400
              },
              {
                src: "/images/david-josue-tulum-wedding-destination.jpg",
                alt: "Tulum Wedding Destination",
                width: 600,
                height: 400
              }
            ]}
            className="mb-8"
            delay={0.4}
          />
          
          <PremiumButton
            href={`/${lang}/destinations`}
            variant="text"
          >
            {isSpanish ? 'Explora Todos Los Santuarios →' : 'See All Destinations →'}
          </PremiumButton>
        </div>
      </PremiumSection>

      {/* Guide Download Section - Using PremiumSection */}
      <PremiumSection bgColor="background">
        <div className="text-center max-w-screen-md mx-auto">
          <h2 className="text-3xl md:text-4xl text-serif font-light mb-4 tracking-wide">
            {isSpanish ? 'Manifiesta La Boda Que Susurra Tu Alma' : 'Plan Your Perfect Destination Wedding'}
          </h2>
          <p className="text-lg text-brand-text-secondary mb-8">
            {isSpanish 
              ? 'Descubre mi guía esencial, un compendio de sabiduría destilada y secretos locales para orquestar una celebración sublime en los escenarios más mágicos y conmovedores de México.' 
              : 'Download my free guide with essential tips for planning your dream wedding in Mexico.'}
          </p>
          <div className="max-w-md mx-auto">
            <FlodeskForm lang={lang} />
          </div>
        </div>
      </PremiumSection>

      {/* Final Call to Action Section - Using PremiumSection */}
      <PremiumSection bgColor="dark" className="text-white">
        <div className="text-center max-w-screen-md mx-auto">
          <h2 className="text-3xl md:text-4xl text-serif font-light mb-6 tracking-wide">
            {isSpanish 
              ? '¿Lista Para Inmortalizar Vuestra Historia En Constelaciones Visuales?' 
              : 'Ready for Wedding Photos You\'ll Treasure for a Lifetime?'}
          </h2>
          <p className="text-lg mb-8 text-white/80">
            {isSpanish 
              ? 'Mi compromiso es un pacto sagrado: dedicar mi atención plena y mi pasión artística a un número selecto de parejas cada año. Esta devoción me permite sumergirme en la profundidad de vuestra narrativa única.' 
              : 'I only take a limited number of weddings each year to ensure every couple receives my full creative focus. Let\'s see if your date is available.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <PremiumButton 
              href={`/${lang}/contact`} 
              variant="primary"
              className="bg-brand-accent text-white hover:bg-brand-accent-hover border-0"
            >
              {isSpanish ? 'Agenda Nuestra Conversación Sagrada' : 'Schedule Your Consultation'}
            </PremiumButton>
            <PremiumButton 
              href={`/${lang}/contact`} 
              variant="secondary"
            >
              {isSpanish ? 'Consulta La Danza De Fechas' : 'Inquire About Your Date'}
            </PremiumButton>
          </div>
        </div>
      </PremiumSection>

      {/* Removed Duplicate Guide Download Section */}

      {/* Recent Blog Posts Section (Optional - Uncomment if fetching posts) */}
       {/* {recentPosts && recentPosts.length > 0 && (
         <section className="py-16 md:py-24 bg-gray-50">
           <div className="container mx-auto max-w-screen-lg px-4">
             <h2 className="text-3xl md:text-4xl font-serif font-light text-center mb-12">
               {lang === 'es-MX' ? 'Desde el Blog' : 'From the Blog'}
             </h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {recentPosts.map((post) => (
                 <Link key={post.id} href={`/${lang}/blog/${post.slug}`} className="group block">
                   <div className="aspect-video overflow-hidden bg-gray-100 mb-4">
                     {post.featuredImage && typeof post.featuredImage === 'object' && post.featuredImage.url ? (
                        <Image src={post.featuredImage.url} alt={post.featuredImage.alt || post.title} width={500} height={281} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
                     ) : (
                       <div className="w-full h-full bg-gray-200"></div> // Placeholder if no image
                     )}
                   </div>
                   <h3 className="text-lg font-semibold mb-1 leading-tight group-hover:text-gray-700">{post.title}</h3>
                   <p className="text-xs text-gray-500">{formatDate(post.publishedDate, lang)}</p>
                 </Link>
               ))}
             </div>
             <div className="text-center mt-12">
                <Link href={`/${lang}/blog`} className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900">
                  {lang === 'es-MX' ? 'Ver Todo el Blog →' : 'View All Blog Posts →'}
                </Link>
             </div>
           </div>
         </section>
       )} */}

      {/* Add other sections as needed (Testimonials, As Seen In, etc.) */}

    </div>
  );
}
