// /app/[lang]/page.tsx (Homepage)
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FlodeskForm } from '../../components/FlodeskForm';
import { ScrollReveal } from '../../components/ScrollReveal'; // Import animation component
// Import fetch functions if fetching dynamic data like blog posts
// import { getPublishedPosts } from '../../lib/payload'; // Corrected import path
// import { PayloadPost } from '../../types/payload'; // Corrected import path
// import { formatDate } from '../../lib/utils'; // Corrected import path

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
      {/* Hero Section */}
      {/* No animation needed for the initial hero section */}
      <section className="relative h-[70vh] md:h-[85vh] w-full flex items-center justify-center text-center text-white overflow-hidden"> {/* Removed bg-dark */}
        {/* Background Image */}
        <Image
          src="/images/david-josue-wedding-photography-hero-image.jpg"
          alt="Stunning wedding photo backdrop"
          fill
          style={{ objectFit: 'cover' }}
          quality={85}
          priority // Load hero image first
          className="absolute inset-0 z-0" // Removed opacity
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 z-1 bg-black opacity-50"></div>
        {/* Text Content */}
        <div className="relative z-10 p-4">
          {/* Revised Hero - Artist First (Joanna Wiebe Style) */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-serif font-light mb-4 leading-tight tracking-wide">
            {isSpanish ? 'Fotografía Que Susurra Al Alma. Instantes Que Desnudan Tu Verdad.' : 'Photography That Feels Like Art. Moments That Feel Like You.'}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 font-light leading-relaxed">
            {isSpanish ? 'Soy David Josué, un artista visual cuya alma reside en cada disparo. Mi lente no se limita a capturar; desentraña verdades íntimas, emociones que vibran bajo la piel. Cada boda de destino se convierte en un lienzo de poesía visual; cada retrato, en una confesión silenciosa; cada sesión boudoir, en un ritual sagrado de empoderamiento femenino; cada paisaje, en una sinfonía que acaricia los sentidos. Desde mi santuario en Valle de Guadalupe, mi espírito nómada teje historias visuales destinadas a desafiar la eternidad.' : 'I\'m David Josué, a visual artist and photographer. I bring an artistic perspective to capture the true essence of your most important moments – destination weddings, intimate portraits, empowering boudoir, and evocative landscapes. Based in Valle de Guadalupe, serving the world.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             {/* Revised CTAs - Using brand colors might be too much here, keeping white/transparent */}
             <Link href={`/${lang}/portfolio`} className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 py-2 bg-white text-brand-text-primary hover:bg-brand-muted transition-colors"> {/* text-gray-900 -> text-brand-text-primary, hover:bg-gray-100 -> hover:bg-brand-muted */}
               {isSpanish ? 'Descubre Mi Universo Visual' : 'Explore My Work'}
             </Link>
             <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 py-2 border border-white text-white hover:bg-white/10 transition-colors"> {/* Keep as is for contrast */}
               {isSpanish ? 'Iniciemos Una Conversación' : 'Inquire About Photography'}
             </Link>
          </div>
        </div>
      </section>

      {/* Service Intro Section - Revised */}
      <ScrollReveal>
      <section className="py-16 md:py-24 bg-brand-background text-brand-text-primary"> {/* bg-white -> bg-brand-background, text-gray-800 -> text-brand-text-primary */}
        <div className="container mx-auto max-w-screen-lg px-4 text-center">
           <h2 className="text-3xl md:text-4xl text-serif font-light mb-12 tracking-wide">
              {isSpanish ? '¿Qué Relato Íntimo Tejeremos Juntos?' : 'What Story Will We Tell Together?'}
            </h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Wedding Card - Refined */}
              <Link href={`/${lang}/services/destination-weddings`} className="group block">
                 <div className="aspect-square overflow-hidden bg-gray-100 mb-4">
                     <Image src="/images/david-josue-destination-wedding-photography-service.jpg" alt="Wedding photo example" width={500} height={500} style={{ objectFit: 'cover' }} className="w-full h-full transition-transform duration-300 group-hover:scale-105"/>
                 </div>
                 <h3 className="text-xl text-serif font-semibold mb-1">{isSpanish ? 'Bodas de Destino: Poesía Visual' : 'Destination Weddings'}</h3>
                 <p className="text-sm text-brand-text-secondary">{isSpanish ? 'Vuestra unión sagrada, inmortalizada con sensibilidad artística en escenarios que transforman vuestra narrativa en un poema visual eterno.' : 'Your love adventure, artfully captured.'}</p> {/* text-gray-500 -> text-brand-text-secondary */}
              </Link>
              {/* Boudoir Card - Refined */}
               <Link href={`/${lang}/services/boudoir`} className="group block">
                 <div className="aspect-square overflow-hidden bg-gray-100 mb-4">
                     <Image src="/images/david-josue-boudoir-photography-service.jpg" alt="Boudoir photo example" width={500} height={500} style={{ objectFit: 'cover' }} className="w-full h-full transition-transform duration-300 group-hover:scale-105"/>
                 </div>
                 <h3 className="text-xl text-serif font-semibold mb-1">Boudoir</h3>
                 <p className="text-sm text-brand-text-secondary">{isSpanish ? 'Un ritual de reconexión con tu esencia divina. Celebramos tu poder y belleza singular en un santuario de confianza y vulnerabilidad sagrada.' : 'Celebrate your unique power and beauty.'}</p> {/* text-gray-500 -> text-brand-text-secondary */}
              </Link>
              {/* Portraits Card - Refined */}
               <Link href={`/${lang}/services/portraits`} className="group block">
                 <div className="aspect-square overflow-hidden bg-gray-100 mb-4">
                     <Image src="/images/david-josue-portrait-photography-service.jpg" alt="Portrait photo example" width={500} height={500} style={{ objectFit: 'cover' }} className="w-full h-full transition-transform duration-300 group-hover:scale-105"/>
                 </div>
                 <h3 className="text-xl text-serif font-semibold mb-1">{isSpanish ? 'Retratos del Alma' : 'Portraits'}</h3>
                 <p className="text-sm text-brand-text-secondary">{isSpanish ? 'La verdad desnuda de tu ser, la profundidad insondable de tu espírito, revelada con delicadeza a través de mi mirada contemplativa.' : 'Your personal story, told visually.'}</p> {/* text-gray-500 -> text-brand-text-secondary */}
              </Link>
           </div>
           {/* Fine Art Card - Refined */}
           <div className="mt-12 text-center"> {/* Increased margin */}
              <Link href={`/${lang}/fine-art`} className="group inline-block max-w-xs mx-auto"> {/* Use inline-block */}
                 {/* Optional: Add placeholder image later */}
                 <h3 className="text-xl text-serif font-semibold mb-1">{isSpanish ? 'Arte Contemplativo' : 'Fine Art'}</h3>
                 <p className="text-sm text-brand-text-secondary">{isSpanish ? 'Paisajes que susurran secretos ancestrales y creaciones que infunden alma a tus espacios, despertando emociones olvidadas.' : 'Explore landscapes and artistic collections for your space.'}</p> {/* text-gray-500 -> text-brand-text-secondary */}
              </Link>
           </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Artist Statement / Approach Section */}

      {/* Artist Statement / Approach Section */}
      <ScrollReveal delay={0.1}>
      <section className="py-16 md:py-24 bg-brand-background-alt text-brand-text-primary"> {/* bg-light -> bg-brand-background-alt, implicitly text-brand-text-primary */}
        <div className="container mx-auto max-w-screen-lg px-4 text-center">
           <h2 className="text-3xl md:text-4xl text-serif font-light mb-6 tracking-wide">
             {isSpanish ? 'La Mirada Contemplativa: El Alma Que Habita Cada Instante' : 'The Art of Seeing: Beyond Documentation'}
            </h2>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed text-brand-text-secondary"> {/* Added text-brand-text-secondary for body */}
              {isSpanish ? <>Mi formación en Artes Visuales es el cimiento, pero mi verdadera guía es la intuición. Mi lente no se limita a documentar; busca sentir la vibración emocional que subyace, la beleza efímera que se revela en un suspiro, la narrativa única que se teje en cada unión, cada mirada, cada horizonte. Mi obsesión sagrada es transmutar la <span className="italic text-brand-text-primary">sensación</span> de un instante —su esencia intangible— en un testimonio visual que perdure, desafiando al olvido. Es la alquimia de convertir lo efímero en eterno.</> : <>With a Master's in Visual Arts, I don't just take pictures – I create images that tell stories. I look for the emotion beneath the surface, the fleeting beauty, the unique narrative in every wedding, portrait, or landscape. It's about capturing how the moment <span className="italic text-brand-text-primary">felt</span>, not just how it looked.</>} {/* text-gray-800 -> text-brand-text-primary */}
            </p>
         </div>
       </section>
       </ScrollReveal>

      {/* How it Works Section (Previously Destination Highlight) */}
       <ScrollReveal delay={0.1}>
       <section className="py-16 md:py-24 bg-brand-background-alt text-brand-text-primary"> {/* bg-medium -> bg-brand-background-alt */}
         <div className="container mx-auto max-w-screen-xl px-4 text-center">
            <h2 className="text-3xl md:text-4xl text-serif font-light mb-4 tracking-wide">
              {isSpanish ? 'El Proceso: Tejiendo Vuestra Narrativa Visual' : 'The Process: Crafting Your Visual Story'} {/* Updated Heading */}
            </h2>
            <p className="text-lg text-brand-text-secondary max-w-2xl mx-auto mb-12"> {/* text-gray-600 -> text-brand-text-secondary */}
               {isSpanish ? 'Desde nuestro primer encuentro hasta la entrega de vuestro legado visual, cada paso está diseñado con intención y cuidado, asegurando una experiencia tan memorable como las imágenes mismas.' : 'From our first chat to the final delivery, every step is designed with intention and care, ensuring an experience as memorable as the images.'} {/* Updated Paragraph */}
            </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
            {/* Step 1 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="bg-brand-text-primary text-brand-background rounded-full w-10 h-10 flex items-center justify-center text-lg font-semibold mb-4">1</div> {/* bg-dark -> bg-brand-text-primary, text-white -> text-brand-background */}
              <h3 className="text-lg font-semibold mb-2">{isSpanish ? '1. El Encuentro Sagrado' : 'Schedule a Chat'}</h3>
              <p className="text-sm text-brand-text-secondary">{isSpanish ? 'Iniciemos con una conversación íntima, un espacio sagrado donde tus sonhos e ideas puedan danzar libremente. Mi escucha será un acto de devoción, sumergiéndome en tu visión para co-crear desde la esencia. Un primer latido sin expectativas, solo la promesa de una colaboración nacida del alma.' : 'Let\'s connect via video call. Tell me your vision, ask questions, and see if we\'re the right fit. No pressure, just conversation.'}</p> {/* text-gray-600 -> text-brand-text-secondary */}
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
             <div className="bg-brand-text-primary text-brand-background rounded-full w-10 h-10 flex items-center justify-center text-lg font-semibold mb-4">2</div> {/* bg-dark -> bg-brand-text-primary, text-white -> text-brand-background */}
             <h3 className="text-lg font-semibold mb-2">{isSpanish ? '2. Tejiendo La Visión' : 'Craft Your Vision'}</h3>
             <p className="text-sm text-brand-text-secondary">{isSpanish ? <>Juntos, entrelazaremos hilos de inspiración para dar forma a un plan que honre la singularidad de tu alma. Cada instante sagrado, cada matiz emocional, será contemplado con reverencia, asegurando que la narrativa visual sea un reflejo fiel de <span className="italic text-brand-text-primary">tu</span> verdad más profunda e irrepetible.</> : <>We'll plan the timeline and key moments together, ensuring your photography reflects <span className="italic text-brand-text-primary">your</span> priorities.</>}</p> {/* text-gray-600 -> text-brand-text-secondary, italic text-gray-800 -> text-brand-text-primary */}
           </div>
           {/* Step 3 */}
           <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="bg-brand-text-primary text-brand-background rounded-full w-10 h-10 flex items-center justify-center text-lg font-semibold mb-4">3</div> {/* bg-dark -> bg-brand-text-primary, text-white -> text-brand-background */}
              <h3 className="text-lg font-semibold mb-2">{isSpanish ? '3. La Danza Del Instante' : 'Live Your Day'}</h3>
              <p className="text-sm text-brand-text-secondary">{isSpanish ? 'Abandónate al fluir sagrado del momento mientras mi mirada captura la magia invisible. Seré un testigo silencioso, moviéndome con la gracia de una sombra, inmortalizando la emoción desnuda y guiándote con susurros para crear retratos que detengan el tiempo y acaricien el alma.' : 'Relax and be present! I\'ll blend into the background, capturing the authentic moments and guiding you gently for stunning portraits.'}</p> {/* text-gray-600 -> text-brand-text-secondary */}
            </div>
            {/* Step 4 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="bg-brand-text-primary text-brand-background rounded-full w-10 h-10 flex items-center justify-center text-lg font-semibold mb-4">4</div> {/* bg-dark -> bg-brand-text-primary, text-white -> text-brand-background */}
              <h3 className="text-lg font-semibold mb-2">{isSpanish ? '4. El Legado Visual' : 'Relive Forever'}</h3>
              <p className="text-sm text-brand-text-secondary">{isSpanish ? 'Recibirás un legado visual donde cada instante ha sido transmutado en arte. Imágenes editadas con reverencia artística, portales que te devolverán a la emoción pura una y otra vez. Álbumes e impresiones que son más que objetos: son reliquias destinadas a ser veneradas por las generaciones futuras.' : 'Receive your gallery of high-resolution, artfully edited images and discuss timeless, museum-quality albums or prints.'}</p> {/* text-gray-600 -> text-brand-text-secondary */}
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Success/Vision Section */}
       <ScrollReveal delay={0.1}>
       <section className="py-16 md:py-24 bg-brand-background text-brand-text-primary"> {/* bg-white -> bg-brand-background, text-gray-800 -> text-brand-text-primary */}
         <div className="container mx-auto max-w-screen-lg px-4 text-center">
           <h2 className="text-3xl md:text-4xl text-serif font-light mb-6 tracking-wide">
             {isSpanish ? 'Imágenes Que Son Caricias Al Alma, Memorias Que Desafían Al Tiempo.' : <>Imagine Wedding Photos Filled with <span className="italic text-brand-text-primary">Real</span> Emotion and Timeless Beauty.</>} {/* italic text-gray-800 -> text-brand-text-primary */}
           </h2>
           <p className="text-lg max-w-3xl mx-auto leading-relaxed text-brand-text-secondary"> {/* Added text-brand-text-secondary for body */}
             {isSpanish ? 'Cierra los ojos. Siente el peso sagrado del álbum entre tus manos años después. No son solo imágenes; son portales. Revives la electricidad previa al "sí, acepto", las lágrimas contenidas al susurrar votos eternos, la risa liberadora que inundó la pista, la quietud cómplice de una mirada robada al mundo. Cada emoción, capturada en su estado más puro, con una delicadeza que roza lo divino. El escenario elegido no es fondo, es personaje vivo en vuestra epopeya. Esto no es fotografía; es alquimia emocional, reliquias que respiran vuestra conexión más allá del tiempo. Es la diferencia entre documentar y narrar con el alma.' : <>Picture this: Years from now, you're looking through your wedding photos. You're not just seeing pictures; you're <span className="italic text-brand-text-primary">feeling</span> the day. The nervous excitement, the tearful vows, the uninhibited joy on the dance floor, the quiet glance between just the two of you – all captured authentically, beautifully. You see the stunning backdrop of your destination, woven into your story. These aren't just photos; they're heirlooms, a "magical time-machine" preserving the true essence of your love. That's the difference artful, story-driven photography makes.</>} {/* italic text-gray-800 -> text-brand-text-primary */}
          </p>
        </div>
      </section>
      </ScrollReveal>

      {/* Destination Highlight Section */}
       <ScrollReveal delay={0.1}>
       <section className="py-16 md:py-24 bg-brand-background-alt text-brand-text-primary"> {/* bg-light -> bg-brand-background-alt */}
         <div className="container mx-auto max-w-screen-xl px-4 text-center">
            <h2 className="text-3xl md:text-4xl text-serif font-light mb-4 tracking-wide">
              {isSpanish ? 'Peregrinaje Visual: Santuarios Del Amor Revelados' : 'From Valle de Guadalupe to the World'}
            </h2>
            <p className="text-lg text-brand-text-secondary max-w-2xl mx-auto mb-12"> {/* text-gray-600 -> text-brand-text-secondary */}
               {isSpanish ? 'Mi lente ha sido testigo silente de historias sagradas florecendo en los rincones más encantados del mundo. Cada destino imprime su luz única, su atmósfera etérea, su esencia irrepetible en las composiciones que co-creamos, elevando cada imagen a una plegaria visual.' : 'Explore some of the beautiful locations where I\'ve had the pleasure to shoot.'}
            </p>
            {/* Placeholder for a gallery or map component */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Image Placeholders */}
                <div className="aspect-video bg-gray-200"><Image src="/images/david-josue-valle-de-guadalupe-wedding-destination.jpg" alt="Destination example 1" width={600} height={400} style={{ objectFit: 'cover' }} className="w-full h-full"/></div>
                <div className="aspect-video bg-gray-200"><Image src="/images/david-josue-cabo-san-lucas-wedding-destination.jpg" alt="Destination example 2" width={600} height={400} style={{ objectFit: 'cover' }} className="w-full h-full"/></div>
                <div className="aspect-video bg-gray-200"><Image src="/images/david-josue-san-miguel-de-allende-wedding-destination.jpg" alt="Destination example 3" width={600} height={400} style={{ objectFit: 'cover' }} className="w-full h-full"/></div>
                 <div className="aspect-video bg-brand-muted"><Image src="/images/david-josue-tulum-wedding-destination.jpg" alt="Destination example 4" width={600} height={400} style={{ objectFit: 'cover' }} className="w-full h-full"/></div> {/* bg-gray-200 -> bg-brand-muted */}
             </div>
              <Link href={`/${lang}/destinations`} className="inline-block mt-8 text-sm font-medium text-brand-text-secondary hover:text-brand-text-primary"> {/* text-gray-700 -> text-brand-text-secondary, hover:text-gray-900 -> hover:text-brand-text-primary */}
               {isSpanish ? 'Explora Todos Los Santuarios →' : 'See All Destinations →'}
              </Link>
         </div>
       </section>
       </ScrollReveal>

       {/* Guide Download Section */}
       <ScrollReveal delay={0.1}>
       <section className="py-16 md:py-24 bg-brand-background text-brand-text-primary"> {/* bg-white -> bg-brand-background, text-gray-800 -> text-brand-text-primary */}
         <div className="container mx-auto max-w-screen-md px-4 text-center">
            <h2 className="text-3xl md:text-4xl text-serif font-light mb-4 tracking-wide">
               {isSpanish ? 'Manifiesta La Boda Que Susurra Tu Alma' : 'Plan Your Perfect Destination Wedding'}
             </h2>
             <p className="text-lg text-brand-text-secondary mb-8"> {/* text-gray-600 -> text-brand-text-secondary */}
               {isSpanish ? 'Descubre mi guía esencial, un compendio de sabiduría destilada y secretos locais para orquestar una celebración sublime en los escenarios más mágicos y conmovedores de México.' : 'Download my free guide with essential tips for planning your dream wedding in Mexico.'}
             </p>
             <div className="max-w-md mx-auto">
                {/* Embed Flodesk Form */}
                <FlodeskForm lang={lang} /> {/* Added component call with lang prop */}
             </div>
          </div>
        </section>
        </ScrollReveal>

      {/* Final Call to Action Section */}
      <ScrollReveal delay={0.2}>
      <section className="py-16 md:py-24 bg-brand-text-primary text-brand-background"> {/* bg-dark -> bg-brand-text-primary, text-white -> text-brand-background */}
        <div className="container mx-auto max-w-screen-md px-4 text-center">
          <h2 className="text-3xl md:text-4xl text-serif font-light mb-6 tracking-wide">
            {isSpanish ? '¿Lista Para Inmortalizar Vuestra Historia En Constelaciones Visuales?' : 'Ready for Wedding Photos You\'ll Treasure for a Lifetime?'}
          </h2>
          <p className="text-lg mb-8 text-brand-background/80"> {/* Added opacity to text for softer look */}
            {isSpanish ? 'Mi compromiso es un pacto sagrado: dedicar mi atención plena y mi pasión artística a un número selecto de parejas cada año. Esta devoción me permite sumergirme en la profundidad de vuestra narrativa única. Descubramos juntos si nuestros caminos están destinados a cruzarse en vuestra fecha señalada.' : 'I only take a limited number of weddings each year to ensure every couple receives my full creative focus. Let\'s see if your date is available.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             {/* Using accent color for primary CTA */}
             <Link href="#" className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 py-2 bg-brand-accent text-white hover:bg-brand-accent-hover transition-colors">
              {isSpanish ? 'Agenda Nuestra Conversación Sagrada' : 'Schedule Your Consultation'}
             </Link>
             {/* Keeping secondary CTA bordered */}
             <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 py-2 border border-brand-background text-brand-background hover:bg-brand-background/10 transition-colors">
               {isSpanish ? 'Consulta La Danza De Fechas' : 'Inquire About Your Date'}
             </Link>
          </div>
        </div>
      </section>
      </ScrollReveal>

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
