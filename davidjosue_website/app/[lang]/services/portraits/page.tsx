// /app/[lang]/services/portraits/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ScrollReveal'; // Import animation component

export const metadata: Metadata = {
  title: 'Portrait Photography | David Josue',
  description: 'Authentic and artistic portrait photography capturing the essence of individuals, families and professionals by David Josue.',
};

export default function PortraitsPage({ params }: { params: { lang: string } }) {
  const lang = params.lang === 'es-MX' ? 'es-MX' : 'en-US';
  const isSpanish = lang === 'es-MX';

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] w-full flex items-center justify-center text-center bg-gray-700 text-white overflow-hidden">
        <Image
          src="/david-josue-portrait-photography-artistic-hero.jpg"
          alt={isSpanish ? "Fotografía de retrato artístico por David Josue" : "Artistic portrait photography by David Josue"}
          layout="fill"
          objectFit="cover"
          quality={80}
          priority
          className="absolute inset-0 z-0 opacity-40"
        />
        <div className="relative z-10 p-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light mb-4">
            {isSpanish ? 'Retratos del Alma' : 'Soul Portraits'}
          </h1>
        </div>
      </section>

      {/* Introduction Content */}
      <ScrollReveal>
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-md px-4 text-center">
          <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
            {isSpanish 
              ? 'La verdad desnuda de tu ser, la profundidad insondable de tu espíritu, revelada con delicadeza a través de mi mirada contemplativa. Mis retratos no solo capturan rostros; inmortalizan la esencia misma del sujeto, sus emociones auténticas y la narrativa única de su alma.'
              : 'The raw truth of your being, the unfathomable depth of your spirit, delicately revealed through my contemplative gaze. My portraits don\'t just capture faces; they immortalize the very essence of the subject, their authentic emotions, and the unique narrative of their soul.'}
          </p>
          <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors">
            {isSpanish ? 'Reserva Tu Sesión' : 'Book Your Session'}
          </Link>
        </div>
      </section>
      </ScrollReveal>

      {/* Approach Section */}
      <ScrollReveal delay={0.1}>
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto max-w-screen-lg px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">
              {isSpanish ? 'Mi Aproximación al Retrato' : 'My Portrait Approach'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {isSpanish 
                ? 'Con más de 1,100 sesiones de retrato a mis espaldas, he desarrollado un proceso intuitivo que fusiona la técnica con la conexión humana genuina. El resultado son imágenes que trascienden lo superficial para revelar verdades profundas.'
                : 'With over 1,100 portrait sessions behind me, I\'ve developed an intuitive process that fuses technique with genuine human connection. The result is imagery that transcends the superficial to reveal deeper truths.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-serif mb-3">{isSpanish ? 'Conexión Auténtica' : 'Authentic Connection'}</h3>
              <p className="text-gray-600">
                {isSpanish 
                  ? 'Dedico tiempo a conocerte, a entender tu esencia, creando un espacio seguro donde tu auténtico ser puede emerger frente a la cámara.'
                  : 'I take time to know you, to understand your essence, creating a safe space where your authentic self can emerge in front of the camera.'}
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-serif mb-3">{isSpanish ? 'Dirección Sutil' : 'Subtle Direction'}</h3>
              <p className="text-gray-600">
                {isSpanish 
                  ? 'Mi enfoque combina momentos dirigidos con sutileza y espacios para la expresión natural, encontrando el equilibrio perfecto entre intención y autenticidad.'
                  : 'My approach combines subtly directed moments with space for natural expression, finding the perfect balance between intention and authenticity.'}
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-serif mb-3">{isSpanish ? 'Arte Contemplativo' : 'Contemplative Art'}</h3>
              <p className="text-gray-600">
                {isSpanish 
                  ? 'Con formación en Artes Visuales, veo cada retrato como una obra artística que dialoga con tradiciones visuales mientras captura la esencia contemporánea del sujeto.'
                  : 'With training in Visual Arts, I approach each portrait as an artistic work that dialogues with visual traditions while capturing the contemporary essence of the subject.'}
              </p>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Portrait Types Section */}
      <ScrollReveal delay={0.1}>
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-12 text-center">
            {isSpanish ? 'Tipos de Retratos' : 'Portrait Types'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Individual Portraits */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2 aspect-square bg-gray-200 overflow-hidden">
                <Image 
                  src="/david-josue-individual-portrait-studio-professional.jpg" 
                  alt={isSpanish ? "Retrato individual profesional" : "Professional individual portrait"} 
                  width={400} 
                  height={400} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-serif font-light mb-4">{isSpanish ? 'Retratos Individuales' : 'Individual Portraits'}</h3>
                <p className="text-gray-600 mb-4">
                  {isSpanish 
                    ? 'Celebra tu individualidad a través de un retrato que captura tu esencia auténtica. Perfecto para uso personal, profesional o como un regalo significativo.'
                    : 'Celebrate your individuality through a portrait that captures your authentic essence. Perfect for personal use, professional needs, or as a meaningful gift.'}
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• {isSpanish ? 'Retratos profesionales' : 'Professional headshots'}</li>
                  <li>• {isSpanish ? 'Retratos personales artísticos' : 'Artistic personal portraits'}</li>
                  <li>• {isSpanish ? 'Retratos de perfil para redes' : 'Social media profile portraits'}</li>
                </ul>
              </div>
            </div>

            {/* Family Portraits */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2 aspect-square bg-gray-200 overflow-hidden">
                <Image 
                  src="/david-josue-family-portrait-outdoor-natural-light.jpg" 
                  alt={isSpanish ? "Retrato familiar en exteriores" : "Outdoor family portrait"} 
                  width={400} 
                  height={400} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-serif font-light mb-4">{isSpanish ? 'Retratos Familiares' : 'Family Portraits'}</h3>
                <p className="text-gray-600 mb-4">
                  {isSpanish 
                    ? 'Inmortaliza los vínculos que unen a tu familia con retratos que capturan tanto la dinámica del grupo como la personalidad única de cada miembro.'
                    : 'Immortalize the bonds that tie your family together with portraits that capture both the group dynamic and the unique personality of each member.'}
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• {isSpanish ? 'Sesiones familiares en exteriores' : 'Outdoor family sessions'}</li>
                  <li>• {isSpanish ? 'Retratos multigeneracionales' : 'Multi-generational portraits'}</li>
                  <li>• {isSpanish ? 'Documentación de hitos familiares' : 'Family milestone documentation'}</li>
                </ul>
              </div>
            </div>

            {/* Environmental Portraits */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2 aspect-square bg-gray-200 overflow-hidden">
                <Image 
                  src="/david-josue-environmental-portrait-location-authentic.jpg" 
                  alt={isSpanish ? "Retrato ambiental en localización significativa" : "Environmental portrait in meaningful location"} 
                  width={400} 
                  height={400} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-serif font-light mb-4">{isSpanish ? 'Retratos Ambientales' : 'Environmental Portraits'}</h3>
                <p className="text-gray-600 mb-4">
                  {isSpanish 
                    ? 'Retratos que te sitúan en espacios significativos, ya sea tu hogar, lugar de trabajo o un entorno natural que refleje aspectos esenciales de tu identidad.'
                    : 'Portraits that place you in meaningful spaces, whether your home, workplace, or a natural setting that reflects essential aspects of your identity.'}
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• {isSpanish ? 'Retratos en el espacio de trabajo' : 'Workplace portraits'}</li>
                  <li>• {isSpanish ? 'Artistas en su estudio' : 'Artists in their studio'}</li>
                  <li>• {isSpanish ? 'Retratos en locaciones significativas' : 'Portraits in meaningful locations'}</li>
                </ul>
              </div>
            </div>

            {/* Artistic Emotional Portraits */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2 aspect-square bg-gray-200 overflow-hidden">
                <Image 
                  src="/david-josue-emotional-portrait-photography-artistic.jpg" 
                  alt={isSpanish ? "Retrato emocional artístico" : "Artistic emotional portrait"} 
                  width={400} 
                  height={400} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-serif font-light mb-4">{isSpanish ? 'Retratos Artísticos Emocionales' : 'Artistic Emotional Portraits'}</h3>
                <p className="text-gray-600 mb-4">
                  {isSpanish 
                    ? 'Creaciones visuales conceptuales que trascienden el retrato convencional, fusionando técnicas artísticas con expresión emocional profunda.'
                    : 'Conceptual visual creations that transcend conventional portraiture, merging artistic techniques with deep emotional expression.'}
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• {isSpanish ? 'Retratos conceptuales' : 'Conceptual portraits'}</li>
                  <li>• {isSpanish ? 'Fotografía expresionista' : 'Expressionist photography'}</li>
                  <li>• {isSpanish ? 'Proyectos personales de retrato' : 'Personal portrait projects'}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Process Section */}
      <ScrollReveal delay={0.1}>
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto max-w-screen-lg px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-12">
            {isSpanish ? 'El Proceso' : 'The Process'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
            {/* Step 1 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-semibold mb-4">1</div>
              <h3 className="text-lg font-semibold mb-2">{isSpanish ? 'Consulta Creativa' : 'Creative Consultation'}</h3>
              <p className="text-sm text-gray-600">{isSpanish ? 'Conversamos para entender tu visión, necesidades y la historia que deseas contar a través de tus retratos.' : 'We talk to understand your vision, needs, and the story you want to tell through your portraits.'}</p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-semibold mb-4">2</div>
              <h3 className="text-lg font-semibold mb-2">{isSpanish ? 'Planificación' : 'Planning'}</h3>
              <p className="text-sm text-gray-600">{isSpanish ? 'Diseñamos juntos los detalles: locación, estilo, vestuario y elementos visuales que complementarán tu narrativa personal.' : 'We design the details together: location, style, wardrobe, and visual elements that will complement your personal narrative.'}</p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-semibold mb-4">3</div>
              <h3 className="text-lg font-semibold mb-2">{isSpanish ? 'La Sesión' : 'The Session'}</h3>
              <p className="text-sm text-gray-600">{isSpanish ? 'Una experiencia relajada donde te guío sutilmente, creando un espacio donde tu autenticidad puede brillar naturalmente.' : 'A relaxed experience where I guide you subtly, creating a space where your authenticity can naturally shine.'}</p>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-semibold mb-4">4</div>
              <h3 className="text-lg font-semibold mb-2">{isSpanish ? 'Entrega' : 'Delivery'}</h3>
              <p className="text-sm text-gray-600">{isSpanish ? 'Recibirás una galería cuidadosamente editada, con opciones para impresiones de alta calidad y productos de arte personalizados.' : 'You\'ll receive a carefully edited gallery, with options for high-quality prints and customized art products.'}</p>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Gallery Section */}
      <ScrollReveal delay={0.1}>
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-xl px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-12 text-center">
            {isSpanish ? 'Galería' : 'Gallery'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* These images would be replaced with actual portfolio images */}
            <div className="aspect-square bg-gray-200 overflow-hidden">
              <Image src="/david-josue-individual-portrait-studio-professional.jpg" alt={`Portrait gallery image 1`} width={600} height={600} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"/>
            </div>
            <div className="aspect-square bg-gray-200 overflow-hidden">
              <Image src="/david-josue-family-portrait-outdoor-natural-light.jpg" alt={`Portrait gallery image 2`} width={600} height={600} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"/>
            </div>
            <div className="aspect-square bg-gray-200 overflow-hidden">
              <Image src="/david-josue-emotional-portrait-photography-artistic.jpg" alt={`Portrait gallery image 3`} width={600} height={600} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"/>
            </div>
            <div className="aspect-square bg-gray-200 overflow-hidden">
              <Image src="/david-josue-environmental-portrait-location-authentic.jpg" alt={`Portrait gallery image 4`} width={600} height={600} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"/>
            </div>
            <div className="aspect-square bg-gray-200 overflow-hidden">
              <Image src="/david-josue-portrait-photography-service.jpg" alt={`Portrait gallery image 5`} width={600} height={600} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"/>
            </div>
            <div className="aspect-square bg-gray-200 overflow-hidden">
              <Image src="/david-josue-portrait-photography-artistic-hero.jpg" alt={`Portrait gallery image 6`} width={600} height={600} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"/>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Final Call to Action */}
      <ScrollReveal delay={0.2}>
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto max-w-screen-md px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">
            {isSpanish ? '¿Listo para Crear Retratos que Trascienden?' : 'Ready to Create Portraits That Transcend?'}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {isSpanish ? 'Cada retrato es una oportunidad para revelar verdades profundas y celebrar la singularidad humana. Iniciemos juntos esta aventura visual.' : 'Each portrait is an opportunity to reveal deep truths and celebrate human uniqueness. Let\'s begin this visual adventure together.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#" className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors">
              {isSpanish ? 'Agendar Llamada' : 'Schedule Call'}
            </Link>
            <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 py-2 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition-colors">
              {isSpanish ? 'Más Información' : 'More Information'}
            </Link>
          </div>
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}
