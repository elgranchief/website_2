// /app/[lang]/services/[service-slug]/page.tsx
import { Metadata } from 'next';
 import Image from 'next/image';
 import Link from 'next/link';
 import { notFound } from 'next/navigation'; // Import notFound
 import { FlodeskForm } from '@/components/FlodeskForm';
 import { ScrollReveal } from '@/components/ScrollReveal'; // Import animation component
 // Import static service data if created, or define content directly
 // import services from '../../../data/services.json'; // Example - Corrected path

// TODO: Define how service data is fetched or determined based on slug
// This example assumes hardcoded content based on slug for simplicity initially
interface ServiceData {
  title_en: string;
  title_es: string;
  description_en: string;
  description_es: string;
  heroImage: string; // Placeholder path
  galleryImages: string[]; // Array of placeholder paths
}

// Example function to get data based on slug (replace with actual data source)
function getServiceData(slug: string): ServiceData | null {
  if (slug === 'destination-weddings') {
    // Revised Destination Wedding Copy - Emphasizing Experience & Locations
    return {
       title_en: "Destination Wedding Photography: Artistry Meets Adventure",
       title_es: "Fotografía de Bodas de Destino: Donde El Arte Encuentra Tu Historia de Amor",
       description_en: "Your wedding isn't just an event; it's an adventure set in a place that speaks to your soul. As a visual artist and seasoned destination photographer based in Valle de Guadalupe, I specialize in weaving the magic of your chosen location into the authentic story of your day. From intimate elopements in Baja California vineyards to grand celebrations across Mexico and internationally, my focus is capturing the real moments and stunning beauty, wherever your love story takes you.",
       description_es: "Tu boda trasciende lo cotidiano; es una historia de amor sagrada que se despliega como una sinfonía visual en un escenario que resuena profundamente con la esencia más pura de tu espíritu. Como artista visual con mirada contemplativa y fotógrafo especializado en destinos excepcionales, desde mi santuario creativo en Valle de Guadalupe, consagro mi arte a entrelazar la magia vibrante de tu lugar elegido con los momentos auténticos que insuflan vida y verdad a la narrativa de tu día. Ya sea una ceremonia íntima que florece entre los viñedos místicos de Baja California o una gran celebración que despliega sus alas en cualquier rincón bendecido de México o del mundo, mi pasión trascendental es inmortalizar esos instantes genuinos y la belleza deslumbrante que acompaña y eleva tu historia de amor a dimensiones eternas, sin importar dónde el viento del destino te lleve.",
       heroImage: "/david-josue-destination-wedding-photography-hero.jpg", // Keep placeholder
       galleryImages: ["/david-josue-wedding-ceremony-vineyard-valle-guadalupe.jpg", "/david-josue-couple-portraits-sunset-beach-destination-wedding.jpg", "/david-josue-wedding-reception-details-luxury-destination.jpg", "/david-josue-wedding-party-celebration-candid-moment.jpg"] // Keep placeholders
    };
  }
  if (slug === 'boudoir') {
     return {
       title_en: "Elegant Boudoir Photography",
       title_es: "Fotografía Boudoir Elegante",
       description_en: "Celebrate your beauty and confidence with a tasteful and artistic boudoir session in a comfortable, private setting.",
       description_es: "Celebra tu belleza y confianza con una sesión boudoir artística y de buen gusto en un ambiente cómodo y privado.",
       heroImage: "/david-josue-boudoir-photography-artistic-portrait-hero.jpg",
       galleryImages: ["/david-josue-boudoir-photography-elegant-portrait.jpg", "/david-josue-boudoir-photography-natural-light-silhouette.jpg", "/david-josue-boudoir-photography-artistic-composition.jpg", "/david-josue-boudoir-photography-emotional-portrait.jpg"]
     };
  }
   if (slug === 'events') {
     return {
       title_en: "Special Event Photography",
       title_es: "Fotografía de Eventos Especiales",
       description_en: "Documenting the energy and emotion of your birthdays, private parties, and other significant celebrations.",
       description_es: "Documentando la energía y emoción de tus cumpleaños, fiestas privadas y otras celebraciones significativas.",
       heroImage: "/david-josue-special-events-photography-celebration-hero.jpg",
       galleryImages: ["/david-josue-birthday-celebration-candid-moments.jpg", "/david-josue-private-party-photography-elegant-venue.jpg", "/david-josue-special-event-emotional-moments-photography.jpg", "/david-josue-corporate-event-professional-photography.jpg"]
     };
   }
  return null;
}

// Define generateMetadata function for dynamic titles/descriptions
export async function generateMetadata({ params }: { params: { lang: string, 'service-slug': string } }): Promise<Metadata> {
  const slug = params['service-slug'];
  const lang = params.lang === 'es-MX' ? 'es-MX' : 'en-US';
  const serviceData = getServiceData(slug);

  const title = serviceData ? (lang === 'es-MX' ? serviceData.title_es : serviceData.title_en) : 'Service';
  const description = serviceData ? (lang === 'es-MX' ? serviceData.description_es : serviceData.description_en) : 'Learn more about our photography services.';

  return {
    title: `${title} | David Josue`,
    description: description.substring(0, 160), // Truncate description
    // Add specific Open Graph data for the service
     openGraph: {
         title: `${title} | David Josue`,
         description: description.substring(0, 160),
         // images: [ { url: serviceData?.heroImage || '/default-og.jpg' }],
     },
  };
}

// TODO: Implement generateStaticParams if using SSG
export function generateStaticParams() {
  const serviceSlugs = ['destination-weddings', 'boudoir', 'events']; // Defined based on getServiceData
  const languages = ['en-US', 'es-MX'];
  
  const paths = languages.flatMap(lang =>
    serviceSlugs.map(slug => ({ lang: lang, 'service-slug': slug }))
  );
  
  return paths;
}


export default function ServicePage({ params }: { params: { lang: string, 'service-slug': string } }) {
  const slug = params['service-slug'];
  const lang = params.lang === 'es-MX' ? 'es-MX' : 'en-US';
  const serviceData = getServiceData(slug);

  if (!serviceData) {
    // Handle case where service data isn't found (e.g., show 404 or fallback)
    notFound(); // Use this from next/navigation for 404
     // return <div className="container mx-auto py-16 px-4 text-center">Service not found.</div>;
  }

  const title = lang === 'es-MX' ? serviceData.title_es : serviceData.title_en;
  const description = lang === 'es-MX' ? serviceData.description_es : serviceData.description_en;
   const isSpanish = lang === 'es-MX';

   // Define location lists for EN and ES - Reorganized by Region
   const locationsBajaNortheast = [
     isSpanish ? "Baja California (Valle de Guadalupe, Ensenada, Rosarito, Tecate)" : "Baja California (Valle de Guadalupe, Ensenada, Rosarito, Tecate)",
     isSpanish ? "Sonora (Puerto Peñasco, San Carlos)" : "Sonora (Puerto Peñasco, San Carlos)",
     isSpanish ? "Nuevo León (Monterrey)" : "Nuevo León (Monterrey)", // Added Monterrey
     isSpanish ? "Coahuila (Saltillo, Parras, Cuatro Ciénegas, Monterreal)" : "Coahuila (Saltillo, Parras, Cuatro Ciénegas, Monterreal)" // Added Coahuila locations
   ];
   const locationsCentralWest = [
     isSpanish ? "Ciudad de México y alrededores (Xochimilco, Desierto de los Leones)" : "Mexico City & surroundings (Xochimilco, Desierto de los Leones)",
     "Zacatecas",
      isSpanish ? "Guanajuato (San Miguel de Allende)" : "Guanajuato (San Miguel de Allende)",
      isSpanish ? "Querétaro" : "Queretaro",
      "Cuernavaca",
      isSpanish ? "Jalisco (Tequila, Guadalajara, Puerto Vallarta)" : "Jalisco (Tequila, Guadalajara, Puerto Vallarta)",
      isSpanish ? "Nayarit (Riviera Nayarit, Sayulita)" : "Nayarit (Riviera Nayarit, Sayulita)", // Added Sayulita
      isSpanish ? "Sinaloa (Mazatlán)" : "Sinaloa (Mazatlán)" // Added Mazatlan
    ];
    const locationsYucatanSouth = [
      isSpanish ? "Quintana Roo (Riviera Maya, Tulum, Playa del Carmen, Xcaret, Puerto Morelos, Holbox, Balam-ha Cancún)" : "Quintana Roo (Riviera Maya, Tulum, Playa del Carmen, Xcaret, Puerto Morelos, Holbox, Balam-ha Cancun)",
     isSpanish ? "Yucatán (Mérida)" : "Yucatán (Merida)",
     isSpanish ? "Chiapas (San Cristóbal de las Casas)" : "Chiapas (San Cristobal de las Casas)",
     "Huatulco",
     "Oaxaca"
   ];

   const locationsInternational = [
     isSpanish ? "Panamá" : "Panama",
    "Cuba",
    isSpanish ? "Antigua y Barbuda" : "Antigua and Barbuda",
    isSpanish ? "Países Bajos (Ámsterdam, Zaanse Schans)" : "Netherlands (Amsterdam, Zaanse Schans)",
    isSpanish ? "Francia (París, Toulouse)" : "France (Paris, Toulouse)",
    isSpanish ? "España (Barcelona, Sevilla, Girona)" : "Spain (Barcelona, Seville, Girona)", // Added Girona
    isSpanish ? "Italia (Florencia)" : "Italy (Florence)",
    isSpanish ? "Brasil (São Paulo)" : "Brazil (São Paulo)"
  ];


  return (
    <div className="flex flex-col">
      {/* Hero Section */}
       <section className="relative h-[50vh] md:h-[60vh] w-full flex items-center justify-center text-center bg-gray-700 text-white overflow-hidden">
         <Image
           src={serviceData.heroImage}
           alt={`Hero image for ${title}`}
           layout="fill"
           objectFit="cover"
           quality={80}
           priority
           className="absolute inset-0 z-0 opacity-40"
         />
         <div className="relative z-10 p-4">
           <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light mb-4">
             {title}
           </h1>
           {/* Optional breadcrumbs */}
         </div>
       </section>

       {/* Introduction Content - Refined Copy */}
       <ScrollReveal>
       <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto max-w-screen-md px-4 text-center">
             <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
                {description} {/* Using the refined description */}
             </p>
             {/* Refined CTA */}
             <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors">
               {lang === 'es-MX' ? 'Consulta La Danza De Fechas' : 'Check Your Date'}
              </Link>
          </div>
       </section>
       </ScrollReveal>

       {/* Conditionally render StoryBrand sections for destination weddings */}
       {slug === 'destination-weddings' && (
         <>
           {/* Problem/Stakes Section */}
            <ScrollReveal delay={0.1}>
            <section className="py-16 md:py-24 bg-gray-100">
              <div className="container mx-auto max-w-screen-lg px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">
                  {isSpanish ? <>¿Vuestras Imágenes Nupciales Susurrarán La <span className="italic text-gray-800">Verdad</span> De Vuestra Unión?</> : <>Will Your Wedding Photos <span className="italic text-gray-800">Actually</span> Feel Like You?</>}
                </h2>
                {/* Refined Problem/Stakes Copy with styled spans */}
                <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                  {isSpanish ? <><span className="font-semibold text-gray-800">El desafío sagrado:</span> Has vertido la esencia más pura de tu alma (y una inversión material significativa) en una celebración nupcial de destino extraordinaria y única. Sin embargo, las fotografías convencionales, artificialmente orquestadas y carentes de autenticidad, jamás lograrán capturar la <span className="italic text-gray-800">magia trascendental</span> que estáis creando en vuestro día sublime. Te envuelve una inquietud profunda ante la posibilidad de que se desvanezcan para siempre esos instantes fugaces de emoción genuina, o peor aún, terminar con una colección de imágenes genéricas que podrían pertenecer indistintamente a cualquier otra pareja, despojadas de vuestra esencia singular.</> : <><span className="font-semibold text-gray-800">The Problem:</span> You've poured your heart (and budget) into an incredible destination wedding. But generic, posed wedding photos just won't capture the <span className="italic text-gray-800">magic</span> you're creating. You worry about missing the candid moments, or ending up with photos that feel like everyone else's.</>}
                </p>
                <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                  {isSpanish ? <><span className="font-semibold text-gray-800">La trascendencia vital:</span> Lo que está verdaderamente en juego trasciende infinitamente el concepto mundano de simples fotografías estéticas. Hablamos de la inmortalización sagrada de la <span className="italic text-gray-800">vibración emocional quintaesencial</span> que palpita en cada instante de vuestra celebración, la atmósfera irrepetible y mágica que envuelve vuestro destino elegido con devoción, y esa conexión íntima, casi mística, que florece entre vuestras almas. No comprometas jamás los tesoros visuales que preservarán tus recuerdos más preciados con imágenes que resulten planas, genéricas o dolorosamente desconectadas de la verdad más profunda de vuestra esencia compartida.</> : <><span className="font-semibold text-gray-800">The Stakes:</span> It's not just about pretty pictures. It's about preserving the <span className="italic text-gray-800">feeling</span> of your day, the atmosphere of your chosen destination, and the real connection you share. Don't risk having memories that fall flat or feel impersonal.</>}
                </p>
              </div>
            </section>
            </ScrollReveal>

           {/* Guide/Value Proposition Section (Simplified for service page) */}
           <ScrollReveal delay={0.1}>
           <section className="py-16 md:py-24 bg-white">
             <div className="container mx-auto max-w-screen-lg px-4 text-center">
               <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">
                {isSpanish ? 'Tu Cómplice Artístico Para Imágenes Que Susurran Al Alma' : 'Your Guide to Authentic, Artful Wedding Photography.'}
                </h2>
                {/* Refined Guide/Value Copy with styled spans */}
                <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
                  {isSpanish ? <>Es precisamente aquí donde mi visión artística se manifiesta en toda su potencia reveladora. Con la formación académica sagrada en Artes Visuales y el bagaje espiritual acumulado tras más de 400 ceremonias nupciales capturadas, mi enfoque trasciende infinitamente la documentación mundana para elevarse a la interpretación artística sublime de tu día irrepetible. Mi método alquímico entrelaza la <span className="font-semibold text-gray-800">observación contemplativa y casi invisible</span> (esos instantes fugaces que florecen entre momentos, que revelan la <span className="italic text-gray-800">verdadera esencia quintaesencial</span> de vuestra celebración) con una <span className="font-semibold text-gray-800">dirección artística delicadamente orquestada</span> que cristaliza en retratos tan majestuosos como profundamente auténticos. Visualiza contar con un artista consagrado en estrecha comunión con vuestra esencia, que simultáneamente posee el don místico de la invisibilidad entre tus seres queridos, capturando cada vibración emocional sin perturbar jamás su fluir natural y sagrado.</> : <>This is where I come in. As a visual artist (Master's degree and all!) and a destination wedding photographer with 400+ weddings under my belt, I don't just document your day – I interpret it. My approach blends <span className="font-semibold text-gray-800">unobtrusive observation</span> (catching those in-between moments that <span className="italic text-gray-800">really</span> matter) with <span className="font-semibold text-gray-800">gentle, artistic direction</span> for portraits that feel both epic and natural. Think of it as having a personal art director who's also incredibly good at blending in with your guests.</>}
                </p>
              </div>
            </section>
            </ScrollReveal>

           {/* The Plan Section - Rewritten with Scarcity */}
           <ScrollReveal delay={0.1}>
           <section className="py-16 md:py-24 bg-gray-100">
             <div className="container mx-auto max-w-screen-lg px-4 text-center">
               <h2 className="text-3xl md:text-4xl font-serif font-light mb-12">
                 {lang === 'es-MX' ? 'El Ritual Para Consagrar Vuestra Historia Nupcial:' : 'How to Secure Your Artistic Wedding Story:'}
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left mb-12"> {/* Added mb-12 */}
                 {/* Step 1 */}
                 <div className="flex flex-col items-center md:items-start text-center md:text-left">
                   <div className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-semibold mb-4">1</div>
                   <h3 className="text-lg font-semibold mb-2">{lang === 'es-MX' ? '1. El Encuentro Sagrado' : 'Connect'}</h3>
                   <p className="text-sm text-gray-600">{lang === 'es-MX' ? 'Iniciemos con una conversación íntima, un espacio sagrado donde vuestros sueños puedan danzar libremente. Mi escucha será un acto de devoción, sumergiéndome en vuestra visión para co-crear desde la esencia.' : 'Schedule a quick video chat. You’ll share your vision, I’ll listen, and we’ll see if we’re the perfect fit for your day.'}</p>
                 </div>
                 {/* Step 2 */}
                 <div className="flex flex-col items-center md:items-start text-center md:text-left">
                   <div className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-semibold mb-4">2</div>
                   <h3 className="text-lg font-semibold mb-2">{lang === 'es-MX' ? '2. El Pacto Creativo' : 'Secure Your Date'}</h3>
                   <p className="text-sm text-gray-600">{lang === 'es-MX' ? 'Si nuestros espíritus resuenan, tejeremos un plan a medida y consagraréis vuestra fecha en mi calendario sagrado (las constelaciones se alinean con rapidez).' : 'If we decide to move forward, we’ll create a custom plan, and you’ll secure your date on my calendar (they fill up fast!).'}</p>
                 </div>
                 {/* Step 3 */}
                 <div className="flex flex-col items-center md:items-start text-center md:text-left">
                   <div className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-semibold mb-4">3</div>
                   <h3 className="text-lg font-semibold mb-2">{lang === 'es-MX' ? '3. La Danza Del Instante' : 'Enjoy (I Capture)'}</h3>
                   <p className="text-sm text-gray-600">{lang === 'es-MX' ? 'Abandónate al fluir sagrado del momento mientras mi mirada captura la magia invisible. Seré un testigo silente, moviéndome con la gracia de una sombra, inmortalizando la emoción desnuda y guiándote con susurros.' : 'You relax and live every moment. I’ll handle capturing the magic, the emotion, and the beauty authentically and artfully.'}</p>
                 </div>
                 {/* Step 4 */}
                 <div className="flex flex-col items-center md:items-start text-center md:text-left">
                   <div className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-semibold mb-4">4</div>
                   <h3 className="text-lg font-semibold mb-2">{lang === 'es-MX' ? '4. El Legado Visual' : 'Relive the Magic'}</h3>
                   <p className="text-sm text-gray-600">{lang === 'es-MX' ? 'Recibirás un legado visual donde cada instante ha sido transmutado en arte. Imágenes editadas con reverencia, portales hacia vuestras reliquias más preciadas.' : 'You’ll receive a full gallery of artfully edited images, ready to become your most treasured heirlooms.'}</p>
                 </div>
               </div>
               {/* Scarcity Statement */}
               <p className="text-md text-gray-800 font-semibold">
                 {lang === 'es-MX' ? 'Mi compromiso es un pacto sagrado: abrazo un número limitado de uniones cada año para consagrar mi visión artística plena. Las fechas son estrellas fugaces que se reservan en el orden en que el destino las presenta.' : 'I take a limited number of destination weddings each year to dedicate my full artistic focus. Dates are booked on a first-come, first-served basis.'}
               </p>
             </div>
           </section>
           </ScrollReveal>

           {/* Success/Vision Section */}
            <ScrollReveal delay={0.1}>
            <section className="py-16 md:py-24 bg-white">
              <div className="container mx-auto max-w-screen-lg px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">
                  {isSpanish ? <>Fotos Llenas de Emoción <span className="italic text-gray-800">Real</span> y Belleza Atemporal.</> : <>Photos Filled with <span className="italic text-gray-800">Real</span> Emotion and Timeless Beauty.</>}
                </h2>
                {/* Refined Success/Vision Copy with styled spans */}
                <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  {isSpanish ? <>El resultado trascendental son creaciones visuales que te transportan dimensionalmente a través del tiempo y el espacio. Sentirás nuevamente la caricia etérea de la brisa sobre tu piel, escucharás el eco cristalino de las risas que resonaron en tu corazón, revivirás cada vibración emocional que atravesó tu ser en ese día sagrado. Recibirás un tesoro visual compuesto por <span className="font-semibold text-gray-800">momentos auténticos capturados en su máxima pureza</span> Y <span className="font-semibold text-gray-800">retratos de majestuosidad sublime dignos de las más elevadas galerías de arte</span>, todo ello narrando con voz poética la historia única e irrepetible de vuestro día en el santuario natural que elegisteis con devoción. No son meras fotografías estéticas; son portales dimensionales hacia vuestros recuerdos más preciados, testimonios visuales que respiran, palpitan y transmiten la verdad esencial de vuestro amor a través de las generaciones venideras.</> : <>The result? Photos that transport you back. You'll feel the breeze, hear the laughter, relive the emotion. You get a gallery filled with <span className="font-semibold text-gray-800">authentic moments</span> AND <span className="font-semibold text-gray-800">gallery-worthy, stunning portraits</span>, all telling the unique story of your day in your chosen location. Not just pretty pictures – memories that breathe.</>}
                </p>
              </div>
            </section>
            </ScrollReveal>
         </>
       )}

       {/* Destination Experience Section (Revised Presentation) */}
       {slug === 'destination-weddings' && (
         <ScrollReveal delay={0.1}>
         <section className="py-16 md:py-24 bg-gray-50">
           <div className="container mx-auto max-w-screen-xl px-4">
             <div className="text-center mb-12"> {/* Center heading and intro */}
               <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
                 {lang === 'es-MX' ? 'Peregrinaje Visual: Santuarios Del Amor Revelados' : 'Proven Experience, Wherever You Say "I Do"'}
               </h2>
               <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                 {lang === 'es-MX' ? 'He sido testigo privilegiado de uniones sagradas en los santuarios más sublimes de México y más allá. Mi alma nómada y mi lente contemplativa se adaptan con fluidez a cada entorno, asegurando una narrativa visual impecable y profundamente artística, sin importar dónde elijáis consagrar vuestro amor:' : 'I\'ve had the honor of documenting weddings in some of the most beautiful locations across Mexico and the globe. My experience in diverse environments ensures seamless, artful coverage, no matter the destination:'}
               </p>
             </div>

              {/* Revised Grid Layout (2x2) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Card 1: Baja California & Northeast */}
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col">
                  <div className="flex items-center mb-4">
                    <h3 className="font-semibold text-xl text-gray-800">{isSpanish ? 'Baja California y Noreste' : 'Baja California & Northeast'}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{isSpanish ? 'Desde viñedos hasta desiertos y montañas:' : 'From vineyards to deserts and mountains:'}</p>
                  <ul className="space-y-1 text-sm text-gray-700 list-none pl-0 mb-4 flex-grow">
                    {locationsBajaNortheast.map(loc => <li key={loc}>{loc}</li>)}
                  </ul>
                  <p className="text-right text-xs text-gray-500 font-medium mt-auto pt-2 border-t border-gray-100">{isSpanish ? '10+ Ubicaciones' : '10+ Locations'}</p>
                </div>

                {/* Card 2: Central & West Mexico */}
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col">
                  <div className="flex items-center mb-4">
                    <h3 className="font-semibold text-xl text-gray-800">{isSpanish ? 'Centro y Occidente de México' : 'Central & West Mexico'}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{isSpanish ? 'Ciudades coloniales, playas y cultura:' : 'Colonial cities, beaches, and culture:'}</p>
                  <ul className="space-y-1 text-sm text-gray-700 list-none pl-0 mb-4 flex-grow">
                    {locationsCentralWest.map(loc => <li key={loc}>{loc}</li>)}
                  </ul>
                  {/* Updated count */}
                  <p className="text-right text-xs text-gray-500 font-medium mt-auto pt-2 border-t border-gray-100">{isSpanish ? '14+ Ubicaciones' : '14+ Locations'}</p>
                </div>

                {/* Card 3: Yucatan Peninsula & South */}
                 <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col">
                   <div className="flex items-center mb-4">
                     <h3 className="font-semibold text-xl text-gray-800">{isSpanish ? 'Península de Yucatán y Sur' : 'Yucatan Peninsula & South'}</h3>
                   </div>
                   <p className="text-sm text-gray-600 mb-4">{isSpanish ? 'Playas caribeñas, selva y tradiciones:' : 'Caribbean beaches, jungle, and traditions:'}</p>
                   <ul className="space-y-1 text-sm text-gray-700 list-none pl-0 mb-4 flex-grow">
                     {locationsYucatanSouth.map(loc => <li key={loc}>{loc}</li>)}
                   </ul>
                   <p className="text-right text-xs text-gray-500 font-medium mt-auto pt-2 border-t border-gray-100">{isSpanish ? '11+ Ubicaciones' : '11+ Locations'}</p>
                 </div>

               {/* Card 4: International (Keeping this separate) */}
               <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col">
                 <div className="flex items-center mb-4">
                   <h3 className="font-semibold text-xl text-gray-800">{isSpanish ? 'Internacional' : 'International'}</h3>
                 </div>
                 <p className="text-sm text-gray-600 mb-4">{isSpanish ? 'Llevando el arte fotográfico más allá de las fronteras:' : 'Taking artistry across borders:'}</p>
                 <ul className="space-y-1 text-sm text-gray-700 list-none pl-0 mb-4 flex-grow">
                   {locationsInternational.map(loc => <li key={loc}>{loc}</li>)}
                 </ul>
                 {/* Updated count and label */}
                 <p className="text-right text-xs text-gray-500 font-medium mt-auto pt-2 border-t border-gray-100">{isSpanish ? '11+ Ubicaciones Intl.' : '11+ Intl. Locations'}</p>
               </div>

              </div> {/* Closing tag for the grid div */}
            </div>
          </section>
          </ScrollReveal>
        )}

       {/* Flodesk Form Section for PDF Guide */}
       {slug === 'destination-weddings' && (
         <ScrollReveal delay={0.1}>
         <section id="wedding-guide" className="py-16 md:py-24 bg-gray-100"> {/* Or bg-white if preferred */}
           <div className="container mx-auto max-w-screen-md px-4 text-center">
             <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
               {isSpanish ? 'Tu Guía Esencial para Bodas de Destino en México' : 'Your Essential Mexico Destination Wedding Guide'}
             </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {isSpanish ? 'Descarga nuestra guía gratuita en PDF con consejos expertos, listas de verificación y secretos para planificar la boda de tus sueños en México.' : 'Download our free PDF guide packed with expert tips, checklists, and secrets for planning your dream wedding in Mexico.'}
              </p>
              <FlodeskForm lang={lang} /> {/* Added lang prop back */}
            </div>
          </section>
          </ScrollReveal>
        )}

        {/* Testimonials Section (Enhanced) */}
        {slug === 'destination-weddings' && (
          <ScrollReveal delay={0.1}>
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto max-w-screen-lg px-4 text-center">
             <h2 className="text-3xl md:text-4xl font-serif font-light mb-12">
               {lang === 'es-MX' ? 'Ecos Del Alma: Testimonios Que Vibran' : 'What Our Couples Say'}
             </h2>
             {/* Updated grid for better testimonial display */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {/* Testimonial 1 */}
               <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center text-center md:text-left md:flex-row md:items-start gap-4">
                 <Image src="/reviews/david-josue-photography-client-testimonial-valle-guadalupe-wedding.jpg" alt="Reviewer 1" width={60} height={60} className="rounded-full flex-shrink-0" unoptimized />
                 <blockquote className="flex-grow">
                   <div className="text-yellow-500 mb-2">★★★★★</div> {/* Star Rating */}
                   <p className="text-gray-700 italic mb-3 text-sm">{isSpanish ? '"¡Las imágenes son portales dimensionales! David capturó la energía sagrada y la emoción desnuda con una autenticidad y arte que trascienden. El proceso fluyó como una danza cósmica, sin esfuerzo ni tensión."' : '"The photos are a magical time-machine! David captured the energy and magic of our day so perfectly – real and artistic. Plus, he made the whole process incredibly easy and stress-free."'}</p>
                   <footer className="text-xs text-gray-500 font-medium">- {lang === 'es-MX' ? 'Ana & Carlos, Unión Sagrada en Valle de Guadalupe' : 'Ana & Carlos, Valle de Guadalupe Wedding'}</footer>
                 </blockquote>
               </div>
               {/* Testimonial 2 */}
               <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center text-center md:text-left md:flex-row md:items-start gap-4">
                 <Image src="/reviews/david-josue-photography-client-testimonial-san-miguel-allende-wedding.jpg" alt="Reviewer 2" width={60} height={60} className="rounded-full flex-shrink-0" unoptimized />
                 <blockquote className="flex-grow">
                   <div className="text-yellow-500 mb-2">★★★★★</div> {/* Star Rating */}
                   <p className="text-gray-700 italic mb-3 text-sm">{isSpanish ? '"No somos de poses forzadas, pero la presencia de David nos envolvió en calma. Capturó susurros visuales, instantes de verdad que ni sospechábamos. Cada imagen es una obsesión sagrada."' : "We are *not* people who love posing, but David made us feel relaxed. He caught so many beautiful, candid moments we didn't even know were happening. We're obsessed with every single photo!"}</p>
                   <footer className="text-xs text-gray-500 font-medium">- {lang === 'es-MX' ? 'Sofia & Javier, Ceremonia en SMA' : 'Sofia & Javier, SMA Wedding'}</footer>
                 </blockquote>
               </div>
               {/* Testimonial 3 - Placeholder */}
               <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center text-center md:text-left md:flex-row md:items-start gap-4">
                 <Image src="/reviews/david-josue-photography-client-testimonial-riviera-maya-wedding.jpg" alt="Reviewer 3" width={60} height={60} className="rounded-full flex-shrink-0" unoptimized />
                 <blockquote className="flex-grow">
                   <div className="text-yellow-500 mb-2">★★★★★</div> {/* Star Rating */}
                   <p className="text-gray-700 italic mb-3 text-sm">{isSpanish ? '"La mirada de David es alquimia pura. Vio nuestro santuario con ojos que trascienden lo visible, y las imágenes son plegarias visuales que cortan la respiración. Un artista en toda la extensión sagrada de la palabra."' : "David's artistic eye is incredible. He saw our venue in ways we never imagined, and the photos are breathtaking. A true professional!"}</p>
                   <footer className="text-xs text-gray-500 font-medium">- {lang === 'es-MX' ? 'Elena & Mateo, Ritual en Riviera Maya' : 'Elena & Mateo, Riviera Maya Wedding'}</footer>
                 </blockquote>
               </div>
               {/* Testimonial 4 - Placeholder */}
               <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center text-center md:text-left md:flex-row md:items-start gap-4">
                 <Image src="/reviews/david-josue-photography-client-testimonial-paris-destination-wedding.jpg" alt="Reviewer 4" width={60} height={60} className="rounded-full flex-shrink-0" unoptimized />
                 <blockquote className="flex-grow">
                   <div className="text-yellow-500 mb-2">★★★★★</div> {/* Star Rating */}
                   <p className="text-gray-700 italic mb-3 text-sm">{isSpanish ? '"Co-crear con David fue una bendición cósmica. Su talento es un don, su amabilidad un bálsamo, y sus imágenes son el eco perfecto de nuestra alma compartida."' : "Working with David was one of the best decisions we made. He's talented, kind, and his photos tell our story perfectly."}</p>
                   <footer className="text-xs text-gray-500 font-medium">- {lang === 'es-MX' ? 'Isabella & Diego, Unión en París' : 'Isabella & Diego, Paris Wedding'}</footer>
                 </blockquote>
               </div>
             </div>
           </div>
         </section>
         </ScrollReveal>
       )}

       {/* Gallery Section */}
       <ScrollReveal>
       <section className="py-16 md:py-24 bg-gray-50"> {/* Adjusted background */}
         <div className="container mx-auto max-w-screen-xl px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-center mb-12">
              {lang === 'es-MX' ? 'Galería' : 'Gallery'}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
               {serviceData.galleryImages.map((imgSrc, index) => (
                 <div key={index} className="aspect-square bg-gray-200 overflow-hidden">
                    <Image src={imgSrc} alt={`${title} gallery image ${index + 1}`} width={600} height={600} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"/>
                 </div>
               ))}
            </div>
             {/* Optional Link to full portfolio */}
             {/* <div className="text-center mt-12">
                <Link href={`/${lang}/portfolio/${slug}`} className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  {lang === 'es-MX' ? 'Ver Portafolio Completo →' : 'View Full Portfolio →'}
                </Link>
             </div> */}
         </div>
       </section>
       </ScrollReveal>

       {/* Add other relevant sections: Pricing Info (optional), Testimonials, FAQ, CTA */}
       <ScrollReveal delay={0.1}>
       <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto max-w-screen-md px-4 text-center">
             <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
               {lang === 'es-MX' ? '¿Listos Para Inmortalizar Vuestra Epopeya?' : 'Ready to Capture Your Moments?'}
             </h2>
             <p className="text-lg text-gray-600 mb-8">
               {lang === 'es-MX' ? 'Iniciemos una conversación sagrada para explorar vuestros sueños y consultar la danza cósmica de las fechas disponibles.' : 'Contact me to discuss your ideas and check my availability.'}
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#" className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors">
                   {lang === 'es-MX' ? 'Agendar Nuestro Encuentro' : 'Schedule Call'}
                </Link>
                <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 py-2 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                  {lang === 'es-MX' ? 'Enviar Un Mensaje Al Universo' : 'Contact Form'}
                </Link>
             </div>
          </div>
        </section>
        </ScrollReveal>
    </div>
  );
}
