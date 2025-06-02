// Function to generate static paths for supported languages
export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'es-MX' }];
}
// /app/[lang]/fine-art/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ScrollReveal'; // Import animation component

export const metadata: Metadata = {
  title: 'Fine Art Photography | David Josue',
  description: 'Contemplative fine art photography by David Josue. Landscapes, seascapes and abstract visual stories available as gallery-quality prints.',
};

export default function FineArtPage({ params }: { params: { lang: string } }) {
  const lang = params.lang === 'es-MX' ? 'es-MX' : 'en-US';
  const isSpanish = lang === 'es-MX';

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[70vh] w-full flex items-center justify-center text-center bg-dark text-white overflow-hidden">
        <Image
          src="/david-josue-fine-art-photography-landscape-hero.jpg"
          alt={isSpanish ? "Fotografía de arte contemplativo por David Josue" : "Contemplative fine art photography by David Josue"}
          layout="fill"
          objectFit="cover"
          quality={90}
          priority
          className="absolute inset-0 z-0 opacity-50"
        />
        <div className="relative z-10 p-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light mb-4 leading-tight tracking-wide">
            {isSpanish ? 'Arte Contemplativo' : 'Fine Art'}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            {isSpanish 
              ? 'Una exploración visual de la conexión entre cuerpo y alma, revelando verdades íntimas a través del desnudo artístico y el retrato psicológico.'
              : 'A visual exploration of the connection between body and soul, revealing intimate truths through artistic nude and psychological portraiture.'}
          </p>
        </div>
      </section>

      {/* Introduction Content */}
      <ScrollReveal>
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-md px-4 text-center">
          <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
            {isSpanish 
              ? 'Mi obra artística trasciende la representación superficial del cuerpo humano para adentrarse en un diálogo íntimo con la vulnerabilidad, la introspección y los arquetipos universales que definen nuestra existencia. A través del desnudo artístico y el retrato psicológico, exploro las tensiones entre lo visible y lo invisible, entre la forma externa y la esencia interna que habita cada ser.'
              : 'My artistic work transcends the superficial representation of the human body to delve into an intimate dialogue with vulnerability, introspection, and the universal archetypes that define our existence. Through artistic nude and psychological portraiture, I explore the tensions between the visible and invisible, between external form and the internal essence that inhabits each being.'}
          </p>
          <Link href={`#collections`} className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors">
            {isSpanish ? 'Explorar Colecciones' : 'Explore Collections'}
          </Link>
        </div>
      </section>
      </ScrollReveal>

      {/* Artist Statement Section */}
      <ScrollReveal delay={0.1}>
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto max-w-screen-lg px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div>
              <Image
                src="/david-josue-fine-art-seascape-baja-california-sunset.jpg"
                alt={isSpanish ? "David Josue frente a su obra artística" : "David Josue with his artwork"}
                width={600}
                height={800}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            
            {/* Text Column */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">
                {isSpanish ? 'Declaración Artística' : 'Artist Statement'}
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {isSpanish 
                  ? 'Mi formación en Artes Visuales es el cimiento, pero mi verdadera guía es la empatía y la intuición emocional. Mi lente no se limita a documentar la forma humana; busca penetrar en ese territorio sagrado donde el cuerpo se convierte en vehículo para manifestar el alma. Trabajo con sujetos en estados de vulnerabilidad controlada, en esos momentos de introspección donde caen las máscaras sociales y emerge la verdad desnuda del ser.'
                  : 'My Master\'s in Visual Arts provides the foundation, but my true guides are empathy and emotional intuition. My lens doesn\'t merely document the human form; it seeks to penetrate that sacred territory where the body becomes a vessel for manifesting the soul. I work with subjects in states of controlled vulnerability, in those moments of introspection where social masks fall away and the naked truth of being emerges.'}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {isSpanish 
                  ? 'El desnudo artístico en mi obra no busca la perfección estética sino la autenticidad del momento compartido. Cada fotografía es el resultado de un ritual de confianza, donde la cámara se convierte en testigo de una revelación íntima. Mis retratos psicológicos exploran las tensiones entre la luz y la sombra—tanto física como metafórica—que habitan en cada ser humano, invitando al espectador a confrontar sus propias dualidades a través del espejo que ofrece el otro.'
                  : 'The artistic nude in my work doesn\'t seek aesthetic perfection but rather the authenticity of the shared moment. Each photograph is the result of a ritual of trust, where the camera becomes witness to an intimate revelation. My psychological portraits explore the tensions between light and shadow—both physical and metaphorical—that dwell within each human being, inviting the viewer to confront their own dualities through the mirror offered by the other.'}
              </p>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Featured Series & Exhibitions Section */}
      <ScrollReveal delay={0.1}>
      <section id="collections" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-lg px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-12 text-center">
            {isSpanish ? 'Series y Exposiciones Destacadas' : 'Featured Series & Exhibitions'}
          </h2>

          <div className="space-y-10">
            {/* Exhibition 1: Manifiestos del Alma */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="aspect-square overflow-hidden bg-gray-200 mb-4 rounded-lg">
                    <Image 
                      src="/david-josue-fine-art-manifiestos-del-alma-nude.jpg" 
                      alt={isSpanish ? "Manifiestos del Alma - Desnudo artístico" : "Manifestos of the Soul - Artistic nude"} 
                      width={600} 
                      height={600} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-serif mb-1">{isSpanish ? '"Manifiestos del Alma"' : '"Manifestos of the Soul"'}</h3>
                  <p className="text-gray-500 text-sm mb-2">CEART, Tecate, BC (Oct 2017)</p>
                  <span className="inline-block px-3 py-1 text-xs bg-gray-200 text-gray-800 rounded-full">{isSpanish ? 'Individual' : 'Solo'}</span>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-600">
                    {isSpanish 
                      ? 'Una exploración íntima de la vulnerabilidad humana a través de 40 impresiones giclée de gran formato. Esta serie documenta los ejercicios de introspección de hombres y mujeres, revelando la conexión profunda entre el cuerpo físico y la esencia espiritual. Cada imagen transmite una resonancia empática con el espectador, invitándole a contemplar su propia desnudez existencial.'
                      : 'An intimate exploration of human vulnerability through 40 large-format giclée prints. This series documents the introspection exercises of men and women, revealing the profound connection between the physical body and spiritual essence. Each image transmits an empathic resonance with the viewer, inviting them to contemplate their own existential nakedness.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Exhibition 2: Mujer Madre */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="aspect-square overflow-hidden bg-gray-200 mb-4 rounded-lg">
                    <Image 
                      src="/david-josue-fine-art-mujer-madre-portrait.jpg" 
                      alt={isSpanish ? "Mujer Madre - Retrato psicológico" : "Woman Mother - Psychological portrait"} 
                      width={600} 
                      height={600} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-serif mb-1">{isSpanish ? '"Mujer Madre"' : '"Woman Mother"'}</h3>
                  <p className="text-gray-500 text-sm mb-2">CEART, Tecate, BC (May 2016)</p>
                  <span className="inline-block px-3 py-1 text-xs bg-gray-200 text-gray-800 rounded-full">{isSpanish ? 'Individual' : 'Solo'}</span>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-600">
                    {isSpanish 
                      ? 'Una serie de retratos psicológicos impresos en gran formato sobre lienzo que recrea la estética del cine clásico mediante iluminación de tungsteno continua. Las luces cálidas e implacables simbolizan el escrutinio social sobre la maternidad, mientras que el maquillaje intenso refleja las máscaras que las mujeres adoptan ante expectativas imposibles. Cada retrato revela la tensión entre la vulnerabilidad íntima y la fortaleza externa, creando un espacio de reflexión sobre los sacrificios y alegrías de la maternidad.'
                      : 'A series of psychological portraits printed in large format on canvas that recreates the aesthetics of classic cinema through continuous tungsten lighting. The warm, relentless lights symbolize social scrutiny of motherhood, while the intense makeup reflects the masks women adopt in the face of impossible expectations. Each portrait reveals the tension between intimate vulnerability and external strength, creating a space for reflection on the sacrifices and joys of motherhood.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Exhibition 3: La Ruta Nupcial */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="aspect-square overflow-hidden bg-gray-200 mb-4 rounded-lg">
                    <Image 
                      src="/david-josue-fine-art-ruta-nupcial-exhibition.jpg" 
                      alt={isSpanish ? "La Ruta Nupcial - Exposición colectiva" : "The Bridal Route - Collective exhibition"} 
                      width={600} 
                      height={600} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-serif mb-1">{isSpanish ? '"La Ruta Nupcial"' : '"The Bridal Route"'}</h3>
                  <p className="text-gray-500 text-sm mb-2">{isSpanish ? 'Museo de la Vid y el Vino, Valle de Guadalupe, BC (Jun 2015)' : 'Museum of Vine and Wine, Valle de Guadalupe, BC (Jun 2015)'}</p>
                  <span className="inline-block px-3 py-1 text-xs bg-gray-200 text-gray-800 rounded-full">{isSpanish ? 'Colectiva' : 'Group'}</span>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-600">
                    {isSpanish 
                      ? 'Una colaboración con cinco renombrados fotógrafos de Baja California. Mi contribución exploraba el matrimonio como ritual contemporáneo en diálogo con el paisaje natural del Valle, estableciendo paralelismos visuales entre el ciclo vital de la vid y los ciclos relacionales humanos. Fue una de las exposiciones más visitadas del museo, con gran acogida por parte del público local y regional.'
                      : 'A collaboration with five renowned Baja California photographers. My contribution explored marriage as a contemporary ritual in dialogue with the Valle\'s natural landscape, establishing visual parallels between the vine\'s life cycle and human relational cycles. It was one of the museum\'s most visited exhibitions, with great reception from local and regional visitors.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Exhibition 4: San Juan */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="aspect-square overflow-hidden bg-gray-200 mb-4 rounded-lg">
                    <Image 
                      src="/david-josue-fine-art-san-juan-lambda-print.jpg" 
                      alt={isSpanish ? "San Juan - Impresión Lambda" : "San Juan - Lambda print"} 
                      width={600} 
                      height={600} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-serif mb-1">{isSpanish ? '"San Juan"' : '"San Juan"'}</h3>
                  <p className="text-gray-500 text-sm mb-2">{isSpanish ? 'Salón de la Fotografía, Cineteca Nuevo León, Monterrey (Sep 2004)' : 'Photography Salon, Nuevo León Film Library, Monterrey (Sep 2004)'}</p>
                  <span className="inline-block px-3 py-1 text-xs bg-gray-200 text-gray-800 rounded-full">{isSpanish ? 'Colectiva' : 'Group'}</span>
                  <span className="inline-block ml-2 px-3 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">{isSpanish ? 'Premio del Público' : 'People\'s Choice Award'}</span>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-600">
                    {isSpanish 
                      ? 'Un estudio visual sobre la desconexión contemporánea entre la mujer y sus raíces naturales. Esta impresión Lambda de gran formato presenta un desnudo femenino en un paisaje donde las raíces arbóreas del fondo evocan extremidades nutricias separadas del cuerpo principal. Es una metáfora visual sobre la muerte simbólica que ocurre cuando nos alejamos de nuestra esencia primordial.'
                      : 'A visual study on the contemporary disconnection between woman and her natural roots. This large-format Lambda print presents a female nude in a landscape where the tree roots in the background evoke nourishing extremities separated from the main body. A visual metaphor for the symbolic death that occurs when we distance ourselves from our primordial essence.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Prints and Acquisition Section */}
      <ScrollReveal delay={0.1}>
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-lg px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-8">
            {isSpanish ? 'Adquisición de Obras' : 'Art Acquisition'}
          </h2>
          <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
            {isSpanish 
              ? 'Todas las obras están disponibles como impresiones de calidad museística en ediciones limitadas, numeradas y firmadas. Cada pieza incluye certificado de autenticidad y está impresa con técnicas y materiales que garantizan longevidad y fidelidad cromática.'
              : 'All works are available as museum-quality prints in limited, numbered, and signed editions. Each piece includes a certificate of authenticity and is printed using techniques and materials that guarantee longevity and chromatic fidelity.'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Print Type 1 */}
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-serif mb-3">{isSpanish ? 'Fine Art Giclée' : 'Fine Art Giclée'}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {isSpanish 
                  ? 'Impresiones de alta fidelidad sobre papeles de algodón 100% libre de ácido, con tintas pigmentadas archivísticas. Disponibles en diversos tamaños.'
                  : 'High-fidelity prints on 100% acid-free cotton papers with archival pigmented inks. Available in various sizes.'}
              </p>
              <span className="text-gray-800 font-light">{isSpanish ? 'Desde $350 USD' : 'From $350 USD'}</span>
            </div>

            {/* Print Type 2 */}
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-serif mb-3">{isSpanish ? 'Impresiones en Metal' : 'Metal Prints'}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {isSpanish 
                  ? 'Sublimación de tintas sobre aluminio que otorga profundidad, luminosidad y durabilidad excepcional. Ideal para espacios contemporáneos.'
                  : 'Ink sublimation on aluminum that provides exceptional depth, luminosity, and durability. Ideal for contemporary spaces.'}
              </p>
              <span className="text-gray-800 font-light">{isSpanish ? 'Desde $450 USD' : 'From $450 USD'}</span>
            </div>

            {/* Print Type 3 */}
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-serif mb-3">{isSpanish ? 'Ediciones de Coleccionista' : 'Collector\'s Editions'}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {isSpanish 
                  ? 'Series ultra-limitadas (3-5 ejemplares) en gran formato, presentadas con enmarcado museístico y materiales de conservación.'
                  : 'Ultra-limited series (3-5 copies) in large format, presented with museum framing and conservation materials.'}
              </p>
              <span className="text-gray-800 font-light">{isSpanish ? 'Desde $1,200 USD' : 'From $1,200 USD'}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#" className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors">
              {isSpanish ? 'Solicitar Catálogo Completo' : 'Request Complete Catalog'}
            </Link>
            <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 py-2 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition-colors">
              {isSpanish ? 'Consulta de Disponibilidad' : 'Availability Inquiry'}
            </Link>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Commissioned Work Section */}
      <ScrollReveal delay={0.1}>
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto max-w-screen-md px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">
            {isSpanish ? 'Obra por Encargo' : 'Commissioned Work'}
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            {isSpanish 
              ? 'Para espacios específicos, proyectos corporativos o colecciones privadas, ofrezco la creación de obras personalizadas que dialogan con la arquitectura, la identidad y la esencia del lugar.'
              : 'For specific spaces, corporate projects, or private collections, I offer the creation of customized works that dialogue with the architecture, identity, and essence of the place.'}
          </p>
          <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors">
            {isSpanish ? 'Iniciar Conversación' : 'Start Conversation'}
          </Link>
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}
